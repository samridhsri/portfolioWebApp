"""
ingest.py — Build the ChromaDB vector store from knowledge/ markdown files.
Called automatically by start.sh on every Railway deploy.

Usage (local):
    python ingest.py
"""

import hashlib
import re
from pathlib import Path

from fastembed import TextEmbedding
import chromadb

KNOWLEDGE_DIR = Path(__file__).parent / "knowledge"
CHROMA_DIR    = Path(__file__).parent / "chroma_db"
COLLECTION    = "portfolio"


def split_markdown_by_headers(text: str) -> list[dict]:
    """
    Split markdown text by headers (#, ##, ###) while preserving hierarchy and content.
    Returns list of dicts: {'page_content': str, 'metadata': dict}
    """
    header_pattern = re.compile(r"^(#{1,3})\s+(.+)$", re.MULTILINE)
    matches = list(header_pattern.finditer(text))
    if not matches:
        return [{"page_content": text.strip(), "metadata": {}}]

    chunks = []
    current_meta = {}

    for i, match in enumerate(matches):
        level_hashes = match.group(1)
        header_title = match.group(2).strip()
        level_num = len(level_hashes)
        level_key = f"h{level_num}"

        if level_num == 1:
            current_meta = {level_key: header_title}
        elif level_num == 2:
            current_meta = {"h1": current_meta.get("h1"), level_key: header_title}
        elif level_num == 3:
            current_meta = {
                "h1": current_meta.get("h1"),
                "h2": current_meta.get("h2"),
                level_key: header_title,
            }
        current_meta = {k: v for k, v in current_meta.items() if v}

        start_idx = match.start()
        end_idx = matches[i + 1].start() if i + 1 < len(matches) else len(text)
        content = text[start_idx:end_idx].strip()

        if content:
            chunks.append({
                "page_content": content,
                "metadata": dict(current_meta),
            })

    return chunks


def _categorize_role(role: str) -> str:
    r = role.lower()
    if "intern" in r:
        return "internship"
    if "ambassador" in r or "engagement" in r:
        return "part-time"
    if "leadership" in r or "lead" in r:
        return "leadership"
    return "other"


def enrich(metadata: dict) -> dict:
    source = metadata.get("source", "")
    h2 = metadata.get("h2", "")
    h3 = metadata.get("h3", "")

    if source == "experience.md" and h2:
        parts = re.split(r"\s*[—–-]\s*", h2, maxsplit=1)
        company = parts[0].strip()
        role = parts[1].strip() if len(parts) > 1 else h2
        return {
            **metadata,
            "type": "experience",
            "company": company,
            "role": role,
            "category": _categorize_role(role),
        }
    elif source == "projects.md" and h3:
        return {
            **metadata,
            "type": "project",
            "project": h3,
        }
    return metadata


def load_and_chunk_docs():
    chunks = []
    for path in sorted(KNOWLEDGE_DIR.glob("*.md")):
        text = path.read_text(encoding="utf-8").strip()
        if not text:
            continue
        print(f"  {path.name} ({len(text):,} chars)")
        splits = split_markdown_by_headers(text)
        for i, split in enumerate(splits):
            meta = {"source": path.name, "chunk": i}
            meta.update(split["metadata"])
            meta = enrich(meta)

            # Prepend breadcrumb header hierarchy to guarantee context in vector embeddings
            crumbs = [v for k, v in split["metadata"].items() if k in ["h1", "h2", "h3"] and v]
            crumb_prefix = " > ".join(crumbs)
            content = split["page_content"]
            full_text = f"[{crumb_prefix}]\n\n{content}" if crumb_prefix else content

            uid = hashlib.md5(f"{path.name}::{i}::{full_text}".encode()).hexdigest()
            chunks.append({"id": uid, "text": full_text, "metadata": meta})
    return chunks


def main():
    print("\n=== Ingest ===")
    print("Loading and chunking knowledge files...")
    chunks = load_and_chunk_docs()
    print(f"  -> {len(chunks)} chunks created\n")

    print("Embedding with BAAI/bge-small-en-v1.5 (fastembed)...")
    model = TextEmbedding("BAAI/bge-small-en-v1.5")
    texts = [c["text"] for c in chunks]
    embeddings = list(model.embed(texts))
    print("Embedding complete.\n")

    print(f"Upserting to ChromaDB at {CHROMA_DIR}...")
    client = chromadb.PersistentClient(path=str(CHROMA_DIR))
    try:
        client.delete_collection(COLLECTION)
    except Exception:
        pass
    collection = client.create_collection(
        name=COLLECTION,
        metadata={"hnsw:space": "cosine"},
    )
    collection.upsert(
        ids        = [c["id"] for c in chunks],
        documents  = [c["text"] for c in chunks],
        embeddings = [e.tolist() for e in embeddings],
        metadatas  = [c["metadata"] for c in chunks],
    )
    print(f"  -> {collection.count()} total chunks in collection")
    print("=== Done ===\n")


if __name__ == "__main__":
    main()
