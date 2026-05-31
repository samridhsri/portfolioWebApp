"""
ingest.py — Build the ChromaDB vector store from knowledge/ markdown files.
Called automatically by start.sh on every Railway deploy.

Usage (local):
    python ingest.py
"""

import hashlib
import re
from pathlib import Path

from langchain_text_splitters import MarkdownHeaderTextSplitter
from fastembed import TextEmbedding
import chromadb

KNOWLEDGE_DIR = Path(__file__).parent / "knowledge"
CHROMA_DIR    = Path(__file__).parent / "chroma_db"
COLLECTION    = "portfolio"

HEADERS_TO_SPLIT_ON = [
    ("#",   "h1"),
    ("##",  "h2"),
    ("###", "h3"),
]


def load_docs():
    docs = []
    for path in sorted(KNOWLEDGE_DIR.glob("*.md")):
        text = path.read_text(encoding="utf-8").strip()
        if text:
            docs.append({"source": path.name, "text": text})
            print(f"  {path.name} ({len(text):,} chars)")
    return docs


def _categorize_role(role: str) -> str:
    r = role.lower()
    if "intern" in r:
        return "internship"
    if "ambassador" in r or "engagement" in r:
        return "part-time"
    if "leadership" in r or "lead" in r:
        return "leadership"
    return "other"


def build_experience_map(text: str) -> dict:
    """Map role (h1) → {company, category} parsed from experience.md."""
    result = {}
    for section in re.split(r"(?m)^# ", text):
        if not section.strip():
            continue
        lines = section.strip().splitlines()
        role = lines[0].strip()
        company = None
        for line in lines[1:]:
            m = re.match(r"^### (.+)", line)
            if m:
                company = m.group(1).split("  ")[0].strip()
                break
        if company:
            result[role] = {"company": company, "category": _categorize_role(role)}
    return result


def build_project_skills_map(text: str) -> dict:
    """Map project name (h1) → comma-separated skills parsed from projects.md."""
    result = {}
    for section in re.split(r"(?m)^# ", text):
        if not section.strip():
            continue
        lines = section.strip().splitlines()
        project = lines[0].strip()
        m = re.search(r"## Tech Stack\n((?:[-*] .+\n?)+)", section)
        if m:
            skills = [
                re.sub(r"^[-*]\s*", "", l).strip()
                for l in m.group(1).strip().splitlines()
                if l.strip()
            ]
            if skills:
                result[project] = ", ".join(skills)
    return result


def build_metadata_maps(docs: list) -> dict:
    maps = {}
    for doc in docs:
        if doc["source"] == "experience.md":
            maps["experience"] = build_experience_map(doc["text"])
        elif doc["source"] == "projects.md":
            maps["projects"] = build_project_skills_map(doc["text"])
    return maps


def enrich(metadata: dict, maps: dict) -> dict:
    source = metadata.get("source", "")
    h1 = metadata.get("h1", "")
    if source == "experience.md" and h1:
        exp = maps.get("experience", {}).get(h1)
        if exp:
            return {**metadata, "type": "experience", "role": h1, **exp}
    elif source == "projects.md" and h1:
        extra = {"type": "project", "project": h1}
        skills = maps.get("projects", {}).get(h1)
        if skills:
            extra["skills"] = skills
        return {**metadata, **extra}
    return metadata


def chunk(docs, maps):
    splitter = MarkdownHeaderTextSplitter(
        headers_to_split_on=HEADERS_TO_SPLIT_ON,
        strip_headers=False,
    )
    chunks = []
    for doc in docs:
        for i, split in enumerate(splitter.split_text(doc["text"])):
            text = split.page_content
            uid = hashlib.md5(f"{doc['source']}::{i}::{text}".encode()).hexdigest()
            metadata = {"source": doc["source"], "chunk": i}
            metadata.update({k: v for k, v in split.metadata.items() if v})
            metadata = enrich(metadata, maps)
            chunks.append({"id": uid, "text": text, "metadata": metadata})
    return chunks


def main():
    print("\n=== Ingest ===")
    print("Loading knowledge files...")
    docs = load_docs()
    print(f"  → {len(docs)} files\n")

    maps = build_metadata_maps(docs)
    chunks = chunk(docs, maps)
    print(f"Chunking → {len(chunks)} chunks\n")

    print("Embedding with BAAI/bge-small-en-v1.5 (fastembed)...")
    model = TextEmbedding("BAAI/bge-small-en-v1.5")
    texts = [c["text"] for c in chunks]
    embeddings = list(model.embed(texts))   # fastembed returns a generator
    print()

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
    print(f"  → {collection.count()} total chunks in collection")
    print("=== Done ===\n")


if __name__ == "__main__":
    main()
