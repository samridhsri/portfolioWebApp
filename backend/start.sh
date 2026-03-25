#!/bin/bash
set -e

echo "Running ingest..."
python ingest.py

echo "Starting server..."
uvicorn main:app --host 0.0.0.0 --port "${PORT:-8000}"
