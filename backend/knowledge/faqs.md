# Frequently Asked Questions

## About Me

### Q: Who are you?
**A:** I'm Samridh Srivastava, a Computer Engineering graduate from NYU Tandon School of Engineering. I specialize in AI/ML engineering, large language models, on-device and edge inference optimization, distributed data pipelines, and full-stack software development.

---

### Q: What are you currently looking for?
**A:** I am actively seeking full-time Software Development Engineer (SDE), AI/ML Engineer, and AI Infrastructure roles. I am especially interested in product-focused AI teams, engineering-driven startups, and teams tackling technically ambitious problems.

---

### Q: Where are you based?
**A:** I'm based in Brooklyn, New York, and open to NYC-based roles, remote opportunities, and relocation. I also have strong ties to New Delhi, India.

---

### Q: When did you graduate?
**A:** I graduated from NYU Tandon School of Engineering in May 2026 with an M.S. in Computer Engineering.

---

### Q: What is your visa and work authorization status?
**A:** 
- In the U.S. on an F-1 student visa.
- Graduated from NYU Tandon in May 2026 with an M.S. in Computer Engineering.
- Authorized to work in the U.S. under F-1 OPT with eligibility for the 24-month STEM OPT extension (up to 36 months total).
- Open to employers that have not previously sponsored H-1B visas.
- Require future employment sponsorship after my OPT / STEM OPT period.

---

### Q: What makes your background distinctive?
**A:** I bridge the gap between machine learning and systems engineering. Rather than treating ML as a black-box API or solely focusing on model training, I build the full pipeline: low-level inference optimization (quantization, KV caching, Cython/C++ kernels), backend services (FastAPI, Kafka, Spark), and clean interactive interfaces (React, Next.js).

---

## Education & Academics

### Q: What did you study at NYU?
**A:** My M.S. in Computer Engineering at NYU Tandon focused on AI systems, machine learning engineering, distributed computing, and performance optimization. I took courses in high-performance Python, computer vision, big data, and systems engineering.

---

### Q: What was your GPA?
**A:** 
- NYU Tandon (M.S. in Computer Engineering): **3.86 / 4.0**
- Manipal University Jaipur (B.Tech in CCE): **9.05 / 10.0**
- I received an A in every graduate course at NYU except Digital Signal Processing.

---

### Q: What was your favorite course?
**A:** *Advanced Python for Data Science* (DS-GA 1019). It connected theoretical algorithms with concrete systems optimization, profiling, Cython kernels, and async batching, directly inspiring my local LLM inference optimization project.

---

### Q: Have you published research?
**A:** Yes. I published peer-reviewed research on leaf edge detection using machine learning and computer vision methodologies (IEEE publication, DOI: 10.1109/10284977).

---

## Technical Skills & Architecture

### Q: What programming languages do you use most?
**A:** Python is my primary language for ML engineering, backend systems, and data pipelines. I also work regularly with JavaScript/TypeScript, SQL, C++, Java, and Bash.

---

### Q: What are your primary frameworks and tools?
**A:** 
- **AI / ML:** PyTorch, Hugging Face Transformers, LangChain, ChromaDB, WhisperKit, whisper.cpp, pyannote.audio, llama.cpp, MLC-LLM, Core ML.
- **Optimization:** Cython, Numba JIT, CUDA, INT8/4-bit quantization, KV-cache optimization, async batching.
- **Backend:** FastAPI, Django, Flask, Node.js, Express.
- **Frontend & Visualization:** React, Next.js, Tailwind CSS, D3.js.
- **Data & Infra:** PostgreSQL, Redis, Apache Kafka, Apache Spark, Docker, GCP, Git.

---

### Q: Tell me about your local LLM inference optimization project.
**A:** At NYU Tandon (DS-GA 1019), I optimized local LLM inference (GPT-2, TinyLlama) in Python. Using profiling with `cProfile`, I implemented Transformer KV-cache reuse, INT8 quantization, asynchronous continuous batching, and custom Numba JIT / Cython kernels. The optimizations yielded up to ~7.5x throughput improvements and cut memory usage by over 40%.

---

### Q: What is KV caching and why does it matter?
**A:** During autoregressive generation, each new token requires computing attention against all previous tokens. KV caching stores the computed Key and Value matrices of past tokens so they do not need to be recalculated at every step. This cuts per-token generation latency from quadratic to linear relative to context length.

---

### Q: What is quantization and what tradeoffs exist?
**A:** Quantization converts model weights and activations from higher precision (such as FP32 or FP16) to lower precision (such as INT8 or 4-bit INT4). This cuts memory bandwidth requirements and memory footprint significantly, enabling larger models to run on resource-constrained hardware with minimal loss in output quality.

---

### Q: What experience do you have with RAG systems?
**A:** I have built production and internal RAG pipelines at Course5 Intelligence and for personal projects like this portfolio assistant. My implementations cover chunking strategies, semantic embedding models, vector storage with ChromaDB and pgvector, hybrid search, and streaming response synthesis via FastAPI and Groq/Qwen.

---

## Projects & Experience

### Q: What projects have you built?
**A:** Key projects include:
- **FairwAI Speech & VLM Systems:** On-device iPhone transcription with WhisperKit, whisper.cpp on CPU, pyannote speaker diarization, and lightweight VLM evaluation (SmolVLM, Moondream2) with Core ML and 4-bit quantization.
- **Local LLM Inference Optimizer:** High-throughput local LLM inference framework achieving ~7.5x speedups via KV caching, INT8 quantization, and Cython kernels.
- **F1 RaceFlux:** Real-time Formula 1 telemetry platform processing 10,000+ events/sec across Kafka, Spark Structured Streaming, and 5+ FastAPI microservices.
- **MUJ Convocation Portal:** Full-stack university platform serving 2,000+ students and administrators with zero downtime during peak registration.
- **Portfolio RAG Chatbot:** Streaming conversational assistant grounded on structured markdown knowledge using FastAPI, ChromaDB, and Groq.
- **Triage:** Open-source Windows utility (Ctrl+Alt+T) that captures unstructured thoughts and classifies them into Notion databases using Gemini 2.5 Flash.
- **Music Mindscape:** Interactive music clustering and taste visualization graph combining Spotify, Last.fm, Gemini API, and D3.js.
- **Kitchen Hygiene Compliance Detection:** Real-time YOLOv11 instance segmentation pipeline for commercial kitchen hygiene compliance.
- **Plant Disease Detection:** Agricultural vision system with ONNX quantization achieving sub-150ms latency across PlantWild_v2 and PlantDoc datasets.
- **Startup Autopsy:** Multi-agent startup analysis platform built with Vertex AI and ADK at the Columbia AI Hackathon.

---

### Q: Which project are you most proud of?
**A:** The local LLM inference optimization project. It challenged me at the intersection of systems engineering, memory access patterns, and machine learning, delivering measurable 7.5x performance gains.

---

### Q: What project taught you the most?
**A:** Deploying the MUJ Convocation Portal and building full-stack AI products. They proved that model quality is only one part of the problem—reliability, edge cases, latency, database locking, and user experience matter just as much.

---

## Personal & Fun Questions

### Q: What do you do outside tech?
**A:** I play PlayStation 5, cook, go to the gym, watch movies, and read non-fiction.

---

### Q: What games do you play?
**A:** I play Fortnite (2,000+ hours, PSN: `SamTheReaper04`), Rocket League, Battlefield, Spider-Man, and story-driven PlayStation titles.

---

### Q: What books do you recommend?
**A:** *Atomic Habits* by James Clear and *How to Lie with Statistics* by Darrell Huff.

---

### Q: Tabs or spaces?
**A:** Spaces. Always 2 or 4 spaces.

---

### Q: Dark mode or light mode?
**A:** Dark mode everywhere.

---

### Q: How can someone contact you?
**A:** You can reach me via:
- **Email:** samridh@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/samridh-srivastava-a6b888ba/
- **GitHub:** https://github.com/samridhsri
- **Portfolio:** https://samridhsrivastava.com
