"""
main.py — FastAPI backend for the portfolio chatbot.

Endpoints:
  POST /chat   — RAG + Groq streaming chat (SSE)
  GET  /health — Health check
"""

import os
import json
import asyncio
from contextlib import asynccontextmanager
from pathlib import Path

from dotenv import load_dotenv
load_dotenv(Path(__file__).parent / ".env")

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
import chromadb
from fastembed import TextEmbedding
from groq import AsyncGroq


# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

CHROMA_DIR    = Path(__file__).parent / "chroma_db"
COLLECTION    = "portfolio"
EMBED_MODEL   = "BAAI/bge-small-en-v1.5"
GROQ_MODEL    = "llama-3.1-8b-instant"
TOP_K         = 3
MAX_HISTORY   = 10   # message pairs kept in context

SYSTEM_PROMPT = """\
You are a friendly, knowledgeable AI assistant representing Samridh Srivastava's \
portfolio. Answer questions about Samridh — his background, projects, skills, \
experience, and goals — using only the context provided below. Be concise, \
direct, and conversational. If the answer isn't in the context, say you're not \
sure and suggest the visitor reach out to Samridh directly.

--- CONTEXT ---
{context}
--- END CONTEXT ---"""


# ---------------------------------------------------------------------------
# App state (loaded once at startup)
# ---------------------------------------------------------------------------

class AppState:
    embed_model: TextEmbedding       = None
    collection: chromadb.Collection  = None
    groq: AsyncGroq                  = None

state = AppState()


@asynccontextmanager
async def lifespan(app: FastAPI):
    api_key = os.environ.get("GROQ_API_KEY")
    if not api_key:
        raise RuntimeError("GROQ_API_KEY environment variable is not set.")

    state.embed_model = await asyncio.to_thread(
        TextEmbedding, EMBED_MODEL
    )

    chroma_client    = chromadb.PersistentClient(path=str(CHROMA_DIR))
    state.collection = chroma_client.get_or_create_collection(
        name=COLLECTION,
        metadata={"hnsw:space": "cosine"},
    )

    state.groq = AsyncGroq(api_key=api_key)
    yield


# ---------------------------------------------------------------------------
# FastAPI app
# ---------------------------------------------------------------------------

app = FastAPI(title="Portfolio Chatbot API", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://www.samridhsrivastava.com", "http://localhost:3000"],
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


# ---------------------------------------------------------------------------
# Schema
# ---------------------------------------------------------------------------

class Message(BaseModel):
    role: str       # "user" | "assistant"
    content: str

class ChatRequest(BaseModel):
    message: str
    history: list[Message] = []


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

async def retrieve_context(query: str) -> tuple[str, list[str]]:
    embedding = await asyncio.to_thread(
        lambda: next(state.embed_model.embed([query]))
    )
    results = state.collection.query(
        query_embeddings=[embedding.tolist()],
        n_results=TOP_K,
        include=["documents", "metadatas"],
    )
    chunks = results["documents"][0]
    sources = list(dict.fromkeys(
        m["source"] for m in results["metadatas"][0] if m.get("source")
    ))
    return "\n\n---\n\n".join(chunks), sources


async def stream_groq(messages: list[dict], sources: list[str]):
    yield f"data: {json.dumps({'sources': sources})}\n\n"
    stream = await state.groq.chat.completions.create(
        model=GROQ_MODEL,
        messages=messages,
        stream=True,
        temperature=0.7,
        max_tokens=1024,
    )
    async for chunk in stream:
        content = chunk.choices[0].delta.content
        if content:
            yield f"data: {json.dumps({'text': content})}\n\n"
    yield "data: [DONE]\n\n"


# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------

@app.get("/health")
async def health():
    return {"status": "ok", "chunks_indexed": state.collection.count()}


@app.post("/chat")
async def chat(req: ChatRequest):
    if not req.message.strip():
        raise HTTPException(status_code=400, detail="message cannot be empty")

    context, sources = await retrieve_context(req.message)

    # Trim history to last MAX_HISTORY messages to stay within token limits
    history  = req.history[-MAX_HISTORY:]

    messages = (
        [{"role": "system", "content": SYSTEM_PROMPT.format(context=context)}]
        + [{"role": m.role, "content": m.content} for m in history]
        + [{"role": "user", "content": req.message}]
    )

    return StreamingResponse(
        stream_groq(messages, sources),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "X-Accel-Buffering": "no",   # disables Nginx buffering on Railway
        },
    )
