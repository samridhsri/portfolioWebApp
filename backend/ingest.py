"""
ingest.py — Build the ChromaDB vector store from knowledge/ markdown files.
Called automatically by start.sh on every Railway deploy.

Usage (local):
    python ingest.py
"""

import hashlib
from pathlib import Path

from langchain_text_splitters import RecursiveCharacterTextSplitter
from fastembed import TextEmbedding
import chromadb

KNOWLEDGE_DIR  = Path(__file__).parent / "knowledge"
CHROMA_DIR     = Path(__file__).parent / "chroma_db"
COLLECTION     = "portfolio"
CHUNK_CHARS    = 1600   # ~400 tokens at 4 chars/token
OVERLAP_CHARS  = 200    # ~50 tokens


def load_docs():
    docs = []
    for path in sorted(KNOWLEDGE_DIR.glob("*.md")):
        text = path.read_text(encoding="utf-8").strip()
        if text:
            docs.append({"source": path.name, "text": text})
            print(f"  {path.name} ({len(text):,} chars)")
    return docs


def chunk(docs):
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=CHUNK_CHARS,
        chunk_overlap=OVERLAP_CHARS,
        separators=["\n## ", "\n### ", "\n\n", "\n", " ", ""],
    )
    chunks = []
    for doc in docs:
        for i, text in enumerate(splitter.split_text(doc["text"])):
            uid = hashlib.md5(f"{doc['source']}::{i}::{text}".encode()).hexdigest()
            chunks.append({
                "id":       uid,
                "text":     text,
                "metadata": {"source": doc["source"], "chunk": i},
            })
    return chunks


def main():
    print("\n=== Ingest ===")
    print("Loading knowledge files...")
    docs = load_docs()
    print(f"  → {len(docs)} files\n")

    chunks = chunk(docs)
    print(f"Chunking → {len(chunks)} chunks\n")

    print("Embedding with BAAI/bge-small-en-v1.5 (fastembed)...")
    model = TextEmbedding("BAAI/bge-small-en-v1.5")
    texts = [c["text"] for c in chunks]
    embeddings = list(model.embed(texts))   # fastembed returns a generator
    print()

    print(f"Upserting to ChromaDB at {CHROMA_DIR}...")
    client     = chromadb.PersistentClient(path=str(CHROMA_DIR))
    collection = client.get_or_create_collection(
        name=COLLECTION,
        metadata={"hnsw:space": "cosine"},
    )
    collection.upsert(
        ids        = [c["id"] for c in chunks],
        documents  = [c["text"] for c in chunks],
        embeddings = [e.tolist() for e in embeddings],
        metadatas  = [c["metadata"] for c in chunks],
    )
    print(f"  → {collection.count()} total chunks in collection")
    print("=== Done ===\n")


if __name__ == "__main__":
    main()
