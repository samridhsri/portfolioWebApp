# Projects

## Featured Projects

### Portfolio RAG Chatbot
- **Overview:** A retrieval-augmented chatbot integrated into my portfolio that answers questions about my background, skills, projects, and work authorization directly from structured knowledge files.
- **Architecture:** Streaming responses powered by Groq and Qwen, backed by ChromaDB vector retrieval, fastembed embeddings, and FastAPI.
- **Frontend:** Responsive React chat widget with custom design tokens, quick starters, and streaming text rendering.
- **Tech Stack:** FastAPI, ChromaDB, fastembed, Groq API, React, Next.js, Docker.

---

### Local LLM Inference Optimizer
- **Context:** Performance engineering project at NYU Tandon (DS-GA 1019, 2025).
- **Goal:** Minimize latency and maximize token throughput for local LLM inference on CPU/GPU without sacrificing generation quality.
- **Techniques:** Transformer KV-cache reuse, INT8 quantization, asynchronous batching, Numba JIT compilation, and custom Cython C-extension kernels.
- **Results:** Achieved up to ~7.5x throughput improvement and over 40% memory reduction across local LLM workloads.
- **Tech Stack:** Python, Cython, Numba, PyTorch, C++, INT8 quantization.

---

### FairwAI Edge Speech & Multimodal Systems
- **Context:** AI/ML Internship at FairwAI (2026).
- **Goal:** On-device conversation intelligence and meeting analysis under strict mobile resource constraints.
- **Scope:** 
  - Integrated WhisperKit on iPhone and whisper.cpp on CPU for offline speech-to-text.
  - Implemented speaker diarization using pyannote.audio.
  - Evaluated lightweight VLMs (SmolVLM, Moondream2, Qwen2-VL) with 4-bit quantization and Core ML acceleration on Apple Neural Engine.
- **Tech Stack:** Python, PyTorch, WhisperKit, whisper.cpp, pyannote.audio, llama.cpp, MLC-LLM, Core ML.

---

### Startup Autopsy
- **Context:** Columbia Google AI Hackathon (March 2026).
- **Goal:** Multi-agent system that analyzes historical startup trajectories, dissects failure modes, and produces actionable post-mortem insights.
- **Contributions:** Designed agent workflow graphs with Agent Development Kit (ADK), integrated Google Vertex AI, and built full-stack FastAPI and React interfaces.
- **Tech Stack:** Google Vertex AI, ADK, Python, FastAPI, React.

---

### MUJ Convocation Portal
- **Context:** Manipal University Jaipur (Production application).
- **Scale:** 2,000+ active graduating students and faculty administrators.
- **Scope:** Engineered registration workflows, automated seating assignments, digital invitation delivery, and credential verification.
- **Outcome:** Maintained zero downtime across peak registration periods.
- **Tech Stack:** React, Node.js, Express, MongoDB, AWS.

---

### Music Mindscape (Spotify & Last.fm Mind Map)
- **Goal:** Interactive visualization that clusters user music libraries into mood-based and sonic affinity clusters.
- **Evolution:** Migrated from deprecated Spotify audio features to a hybrid Last.fm and Google Gemini API pipeline, enabling semantic classification across diverse international and Bollywood tracks.
- **Visualization:** Interactive force-directed node graph built with D3.js and React.
- **Tech Stack:** React, FastAPI, D3.js, Spotify Web API, Last.fm API, Google Gemini API.

---

### Kitchen Hygiene Compliance Detection
- **Goal:** Real-time computer vision system for food safety and workplace hygiene compliance monitoring.
- **Evolution:** Replaced an initial zero-shot Grounded SAM approach with a fine-tuned YOLOv11n-seg instance segmentation pipeline, improving inference speed and eliminating false positives.
- **Tech Stack:** Python, YOLOv11, OpenCV, PyTorch.

---

### Plant Disease Detection Pipeline
- **Goal:** Agricultural computer vision system identifying crop pathologies from field imagery.
- **Datasets:** Trained and evaluated across the PlantWild_v2 and PlantDoc datasets using transfer learning and data augmentation strategies.
- **Tech Stack:** PyTorch, Torchvision, OpenCV, Python.

---

### Digital Design Review & Blueprint Intelligence
- **Goal:** Multimodal assistant for analyzing engineering blueprints, architectural drawings, and technical schematics.
- **Capabilities:** Utilized Gemini multimodal vision capabilities to extract spatial dimensions, cross-reference compliance rules, and annotate engineering diagrams.
- **Tech Stack:** Python, Google Gemini Multimodal API, Flask, React.

---

### Triage (Hotkey-to-Notion Productivity Agent)
- **Goal:** Raycast-style instant note capture utility that runs globally on hotkey trigger, classifies unstructured thoughts via Gemini 2.5 Flash, and automatically routes them to structured Notion databases.
- **Tech Stack:** Python, FastAPI, Notion API, Gemini 2.5 Flash, Docker.

---

### Citi Bike D3.js Visualization
- **Goal:** Interactive data exploration platform analyzing temporal and geographic patterns across NYC Citi Bike trip datasets.
- **Tech Stack:** D3.js, JavaScript, Node.js, CSV processing.
