# Projects Portfolio

## Featured Projects

### 🧠 AI Research Intelligence Platform
**Agentic AI & RAG Platform** | [GitHub Repository](https://github.com/samridhsri/ai-research-intelligence)

Engineered an agentic research platform that decomposes complex research questions into parallel workflows, retrieves and reranks information, and synthesizes evidence-backed insights using LangGraph, PostgreSQL (pgvector), Redis, and Cohere.

**Tech Stack:** Python, LangGraph, FastAPI, PostgreSQL, pgvector, Redis, Cohere Rerank, Agentic AI, RAG, Docker

**Key Features & Capabilities:**
- Designed an agentic research workflow using LangGraph for task decomposition and orchestration
- Implemented retrieval-augmented generation using PostgreSQL and pgvector for semantic search
- Integrated Cohere reranking to improve relevance of retrieved research evidence
- Used Redis for caching frequently accessed information and intermediate workflow state
- Built FastAPI services for exposing research workflows through production-ready APIs
- Implemented multi-stage research pipelines combining retrieval, evidence evaluation, and synthesis
- Designed structured outputs to transform unstructured research into actionable intelligence
- Containerized the complete platform using Docker for reproducible deployment

---

### ⚡ Local LLM Inference Optimization Framework
**Performance Engineering & LLM Optimization** | [GitHub Repository](https://github.com/ranjan2601/DS-GA-1019)

Designed and benchmarked a local LLM inference optimization framework leveraging KV caching, INT8 quantization, and asynchronous batching, achieving **up to 7.5x throughput improvement** while reducing model memory footprint by over 40%.

**Tech Stack:** Python, Transformers, PyTorch, Numba, Cython, ONNX Runtime, LLM Inference, Performance Engineering

**Key Features & Capabilities:**
- Implemented transformer KV-cache reuse achieving up to 3.15x inference speedup
- Applied INT8 quantization reducing model memory footprint by up to 7.5%
- Built asynchronous batching pipeline reaching 176+ tokens/sec throughput
- Benchmarked GPT-2, TinyLlama, and Pythia models across multiple optimization stages
- Generated comparative latency, throughput, memory, and speedup analyses
- Created reproducible performance evaluation framework for local LLM deployment

---

### 🏎️ F1 Race Telemetry Analytics Platform (RaceFlux)
**Real-Time Data Streaming & ML Platform** | [GitHub Repository](https://github.com/samridhsri/f1-race-telemetry)

Built a production-grade real-time analytics system for Formula 1 telemetry using Kafka and Spark, with ML-powered race outcome prediction and multiple interactive dashboards.

**Tech Stack:** Python, Apache Kafka, Apache Spark, FastAPI, Docker, MLflow, Streamlit, MongoDB, PostgreSQL

**Key Features & Capabilities:**
- Real-time ingestion of 6 F1 telemetry streams using Apache Kafka
- Spark Structured Streaming with sub-5s micro-batch processing
- Gradient Boosting ML model for race position prediction
- MLflow-based experiment tracking and model registry
- Six interactive Streamlit dashboards for live analytics
- One-command Dockerized deployment with reproducibility

---

### 🎵 Music Mindscape
**Interactive Mind Map & Music Taste Visualization** | [GitHub Repository](https://github.com/samridhsri/music-mindscape)

An interactive force-directed mind map that visualizes your Spotify listening habits, clustering tracks into musical zones using audio features or AI-powered context via Gemini.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, Framer Motion, react-force-graph-2d, d3-force, Supabase Edge Functions (Deno), PostgreSQL, Spotify OAuth, Google Gemini 2.5 Flash

**Key Features & Capabilities:**
- Force-directed mind map with staggered node entrance animations
- 9 auto-generated musical zones (Energy, Chill, Sad, Happy, Electronic, etc.)
- AI Clustering via Gemini 2.5 Flash with step-by-step algorithm insight panel
- Influence Simulator — search any artist, visualize their sonic similarity to your library
- Playlist export to Spotify or clipboard, plus PNG graph export
- Demo mode with mock data — no login required
- Persistent state via localStorage with automatic AI cache invalidation on re-sync

---

### 📥 Triage: AI Productivity Agent
**AI Productivity Agent & Notion Integration** | [GitHub Repository](https://github.com/samridhsri/triage)

Built an AI-powered productivity agent that converts unstructured thoughts into structured, actionable Notion tasks using Gemini 2.5 Flash, automated classification, and direct Notion integration.

**Tech Stack:** Python, Gemini 2.5 Flash, Notion API, Notion SDK, FastAPI, Docker, AI Agents, LLM, Productivity Automation

**Key Features & Capabilities:**
- Built a Raycast-style interface for rapidly capturing unstructured thoughts and tasks
- Used Gemini 2.5 Flash to classify and structure natural language input into deterministic JSON
- Implemented automatic routing of captured items to the appropriate Notion database
- Integrated the Notion SDK for programmatic page and database operations
- Designed a structured prompt and schema-based workflow for reliable LLM outputs
- Built a FastAPI backend to expose the AI processing and Notion integration pipeline
- Containerized the application with Docker for reproducible local deployment

---

### 🌿 Plant Disease Detection System
**MLOps Pipeline & Computer Vision** | [GitHub Repository](https://github.com/meghrathod/plantdisease-ml)

Designed an end-to-end MLOps pipeline for plant disease detection with distributed training, ONNX-optimized inference, and production monitoring.

**Tech Stack:** PyTorch, ONNX, Ray, FastAPI, Uvicorn, OpenStack Swift, Docker, Terraform, CI/CD, Prometheus, Grafana, MLflow

**Key Features & Capabilities:**
- Distributed training using Ray
- ONNX + INT8 quantization for <150ms inference latency
- ETL pipelines with data validation and object storage
- MLflow experiment tracking and reproducibility
- Dockerized services with Terraform-based deployment
- Production monitoring with Prometheus and Grafana

---

### 🏙️ Urban Sustainability Calculator
**Geospatial AI & Urban Planning Platform** | [GitHub Repository](https://github.com/ranjan2601/Urban-Sustainability-Calculator)

Built an AI-powered sustainability scoring platform using real-time geospatial data and LLM-based reasoning.

**Tech Stack:** Next.js, React, Tailwind CSS, React-Leaflet, Flask, Python, Google Gemini API, OpenStreetMap, Leaflet, Docker, Vercel

**Key Features & Capabilities:**
- AI-driven sustainability scoring using 10+ metrics
- Interactive map-based analysis with React-Leaflet
- Google Gemini API integration for reasoning
- Real-time geospatial visualization
- Responsive modern UI with Tailwind CSS

---

### 🧬 Fine-Tuning RoBERTa with LoRA
**Parameter-Efficient Fine-Tuning (PEFT)** | [GitHub Repository](https://github.com/samridhsri/finetuning-with-lora-dl-project-2)

Implemented parameter-efficient fine-tuning of RoBERTa using LoRA, achieving high accuracy while training less than 1% of model parameters.

**Tech Stack:** PyTorch, Hugging Face Transformers, LoRA, PEFT, CUDA, Scikit-learn

**Key Features & Capabilities:**
- LoRA-based parameter-efficient fine-tuning
- Only 864K / 125M parameters trained (0.69% of parameters)
- 92.8% accuracy and F1-score on AG News dataset
- Cosine LR scheduling and gradient accumulation
- End-to-end real-time inference pipeline

---

### 👁️ Custom ResNet for Image Classification
**Deep Learning Architecture & Computer Vision** | [GitHub Repository](https://github.com/samridhsri/DL-Project-1-Cifar10-Classification-Using-Resnet)

Designed a lightweight ResNet architecture optimized for accuracy, speed, and edge deployment.

**Tech Stack:** PyTorch, TensorFlow, Mixed Precision, Cosine Annealing, TensorBoard

**Key Features & Capabilities:**
- Custom ResNet (4,4,4,3) architecture
- 96.19% CIFAR-10 accuracy with 4.79M parameters
- Squeeze-and-Excitation modules
- MixCut augmentation strategy
- Mixed precision and cosine annealing

---

### 🎓 MUJ Convocation Portal
**Full-Stack Web Application** | [Live Website](https://mujconvocation.in/)

Built and deployed a live convocation management platform used by over 2000 students at Manipal University Jaipur.

**Tech Stack:** React.js, Node.js, Express.js, MongoDB, AWS

**Key Features & Capabilities:**
- Student registration and management
- Automated seat allocation
- Admin dashboards
- Email notifications
- Live production usage by 2000+ students

---

## Project Categories

### 🤖 AI, LLM & Agentic Systems
- AI Research Intelligence Platform (LangGraph, pgvector, Cohere)
- Local LLM Inference Optimization (Numba, Cython, Quantization, KV Cache)
- Triage: AI Productivity Agent (Gemini 2.5 Flash, Notion API)
- Fine-Tuning RoBERTa with LoRA (PEFT, Hugging Face)
- Urban Sustainability Calculator (Gemini API, OpenStreetMap)

### 📊 Big Data, Streaming & MLOps
- F1 Race Telemetry Analytics Platform / RaceFlux (Kafka, Spark Streaming, MLflow)
- Plant Disease Detection System (Ray Distributed, ONNX, Terraform, Prometheus)

### 🌐 Full-Stack & Data Visualization
- Music Mindscape (Spotify API, Force Graph, Supabase Edge Functions)
- MUJ Convocation Portal (React, Node.js, Express, MongoDB, AWS)
- Custom ResNet for Image Classification (PyTorch, CIFAR-10)

---

## Technology Summary

Across all major projects, Samridh has demonstrated expertise in:
- **Languages:** Python, JavaScript/TypeScript, SQL, C++, Java
- **AI/ML:** LangGraph, Gemini 2.5 Flash, PyTorch, Transformers, LoRA/PEFT, ONNX, Ray, MLflow, scikit-learn
- **Data Engineering:** Apache Spark, Apache Kafka, Redis, PostgreSQL (pgvector), MongoDB
- **Backend & Web:** FastAPI, Flask, Node.js, Express, React, Next.js, Tailwind CSS
- **DevOps & Cloud:** Docker, Terraform, Prometheus, Grafana, AWS, Supabase