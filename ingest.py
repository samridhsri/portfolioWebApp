"""
ingest.py — Load, chunk, embed, and upsert knowledge base into ChromaDB.
Run this whenever knowledge/ files are updated.

Usage:
    python ingest.py
"""

import os
import hashlib
from pathlib import Path

from langchain_text_splitters import RecursiveCharacterTextSplitter
from sentence_transformers import SentenceTransformer
import chromadb

KNOWLEDGE_DIR = Path(__file__).parent / "knowledge"
CHROMA_DIR = Path(__file__).parent / ".chroma"
COLLECTION_NAME = "portfolio"

CHUNK_SIZE = 400       # tokens (approximate — splitter uses chars, ~4 chars/token)
CHUNK_OVERLAP = 50
CHARS_PER_TOKEN = 4


def load_markdown_files(directory: Path) -> list[dict]:
    docs = []
    for path in sorted(directory.glob("*.md")):
        text = path.read_text(encoding="utf-8").strip()
        if text:
            docs.append({"source": path.name, "text": text})
            print(f"  Loaded {path.name} ({len(text)} chars)")
    return docs


def chunk_documents(docs: list[dict]) -> list[dict]:
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=CHUNK_SIZE * CHARS_PER_TOKEN,
        chunk_overlap=CHUNK_OVERLAP * CHARS_PER_TOKEN,
        separators=["\n## ", "\n### ", "\n\n", "\n", " ", ""],
    )
    chunks = []
    for doc in docs:
        splits = splitter.split_text(doc["text"])
        for i, split in enumerate(splits):
            chunk_id = hashlib.md5(f"{doc['source']}::{i}::{split}".encode()).hexdigest()
            chunks.append({
                "id": chunk_id,
                "text": split,
                "metadata": {"source": doc["source"], "chunk_index": i},
            })
    return chunks


def embed_chunks(chunks: list[dict], model: SentenceTransformer) -> list[dict]:
    texts = [c["text"] for c in chunks]
    embeddings = model.encode(texts, show_progress_bar=True, normalize_embeddings=True)
    for chunk, embedding in zip(chunks, embeddings):
        chunk["embedding"] = embedding.tolist()
    return chunks


def upsert_to_chroma(chunks: list[dict], chroma_dir: Path, collection_name: str):
    client = chromadb.PersistentClient(path=str(chroma_dir))
    collection = client.get_or_create_collection(
        name=collection_name,
        metadata={"hnsw:space": "cosine"},
    )

    ids = [c["id"] for c in chunks]
    documents = [c["text"] for c in chunks]
    embeddings = [c["embedding"] for c in chunks]
    metadatas = [c["metadata"] for c in chunks]

    collection.upsert(ids=ids, documents=documents, embeddings=embeddings, metadatas=metadatas)
    return collection.count()


def main():
    print("=== Portfolio Knowledge Base Ingest ===\n")

    print("Loading markdown files...")
    docs = load_markdown_files(KNOWLEDGE_DIR)
    if not docs:
        print("No markdown files found in knowledge/. Exiting.")
        return
    print(f"  {len(docs)} files loaded.\n")

    print("Chunking documents...")
    chunks = chunk_documents(docs)
    print(f"  {len(chunks)} chunks created.\n")

    print("Loading embedding model (all-MiniLM-L6-v2)...")
    model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")
    print("  Model loaded.\n")

    print("Embedding chunks...")
    chunks = embed_chunks(chunks, model)
    print()

    print(f"Upserting to ChromaDB at {CHROMA_DIR}...")
    total = upsert_to_chroma(chunks, CHROMA_DIR, COLLECTION_NAME)
    print(f"  Done. Collection '{COLLECTION_NAME}' now has {total} chunks.\n")

    print("=== Ingest complete ===")


if __name__ == "__main__":
    main()
