# Design Specification: Interactive Resume Experience ("Neural Chrono-Matrix")

**Date:** 2026-08-30  
**Status:** Ready for Review  
**Target Route:** `/resume` (within existing `my-app` React application)  
**Primary Architect:** Antigravity  

---

## 1. Executive Summary & Goals

Transform the existing single-card resume page into an interactive, production-grade engineering resume called the **"Neural Chrono-Matrix"**. 

The design combines:
1. **Interactive Story Journey Mode**: A chronological, milestone-driven technical narrative featuring quantifiable telemetry ribbons, chapter milestones (from foundational systems in India to cutting-edge multimodal edge inference at FairWAI and NYU graduate research), and expandable in-line technical drawers.
2. **Classic ATS / 1-Page Summary Mode**: A zero-friction, high-density structured layout with printer-friendly styling, immediate text copyability, and ATS keyword compliance.
3. **5-Track Tailored Role Switcher**: Instant dynamic filtering across all 5 career tracks (**AI Engineer / FDE**, **ML Engineer**, **Software Engineer / SDE**, **Data Engineer**, **Data Scientist**), which re-weights bullet points, featured projects, and skills, while offering tailored PDF downloads.
4. **Complete Contextual Integration**: Including FairWAI (multimodal edge VLM pipeline), NYU Phonathon, Course5 Intelligence, Mahindra & Mahindra, NYU Tandon MS CE (GPA 3.86), Manipal University Jaipur B.Tech (GPA 9.05), IIT Madras Diploma, IEEE published research, and 7+ production projects.

---

## 2. Information Architecture & Content Model

### 2.1 Profile & Header Metadata
- **Name**: Samridh Srivastava
- **Contact & Links**: `samridh@gmail.com` | New York, NY | [LinkedIn](https://www.linkedin.com/in/samridh-srivastava-a6b888ba/) | [GitHub](https://github.com/samridhsri) | Portfolio
- **Work Authorization**: U.S. work authorized through OPT/STEM OPT (up to 36 months). No immediate sponsorship required.
- **Dynamic Track Subtitle**:
  - *AI Engineer / FDE*: "AI/ML Engineer specializing in LLMs, agentic AI, multimodal systems, and inference optimization"
  - *ML Engineer*: "Machine Learning Engineer specializing in model development, deep learning, and production ML systems"
  - *Software Engineer (SDE)*: "Software Engineer specializing in backend systems, distributed systems, and AI/ML"
  - *Data Engineer*: "Data Engineer specializing in data pipelines, distributed systems, stream processing, and cloud infrastructure"
  - *Data Scientist*: "Data Scientist specializing in predictive modeling, statistical analysis, and machine learning"

---

### 2.2 Work Experience Milestones
1. **FairWAI** | *AI/ML Engineering Intern* | New York, NY (Remote) | Aug 2026 – Present
   - *Multimodal Edge ML Pipeline*: Streaming ASR, speaker diarization, language ID, CV, and VLM inference for real-time clinical communication nudges.
   - *Quantization & Acceleration*: 200.8x prefill latency reduction and 650 MB memory footprint via 4-bit GGUF quantization, batch parallelization, and CPU category-first early exit.
   - *Decision Accuracy*: Improved VLM decision accuracy from 73.3% to 96.67% across a 30-case regression suite with grounded prompting, negative boundaries, and 100% JSON validity.
   - *Benchmark Suite*: Built 50-encounter multimodal evaluation benchmark measuring precision, recall, F1, false-positive rate, latency, and demographic disparities across 19 clinical specialties.
   - *Key Tags*: `VLM`, `GGUF Quantization`, `Multimodal AI`, `Edge Inference`, `Streaming ASR`, `Python`, `CPU Optimization`

2. **Course5 Intelligence (C5i)** | *Machine Learning Intern* | Gurugram, India | Feb 2024 – Jul 2024
   - *Production LLM & RAG*: Built 3+ production LLM applications using LangChain, RAG, and FAISS, boosting search precision by 15%.
   - *Modular NLP Workflows*: Developed BERT intent classification and T5 summarization pipelines with +20% F1-score gain.
   - *Low-Latency Serving*: Deployed FastAPI inference services handling 50K+ monthly requests.
   - *ONNX Optimization*: Profiled and accelerated model serving throughput by 25% via ONNX Runtime.
   - *Key Tags*: `LangChain`, `RAG`, `FAISS`, `BERT`, `T5`, `FastAPI`, `ONNX Runtime`, `Python`

3. **Mahindra and Mahindra** | *Software Engineering Intern* | Mumbai, India (Remote) | Sep 2023 – Dec 2023
   - *Computer Vision Automation*: Automated OpenCV data pipelines reducing image recognition latency and manual effort by 40%.
   - *Preprocessing Efficiency*: Engineered feature extraction for 5+ datasets, cutting cloud compute costs by 10%.
   - *API Contracts & Mocks*: Led API contract design across 4 cross-functional teams, reducing integration errors 3 weeks ahead of release.
   - *High-Concurrency Refactoring*: Parallelized C# processing modules, lifting system throughput by 35%.
   - *Key Tags*: `OpenCV`, `Python`, `C#`, `Computer Vision`, `Distributed APIs`, `YOLOv8`

4. **NYU Phonathon** | *Student Caller / Engagement Ambassador* | New York, NY | Feb 2025 – Present
   - *Campus Leadership*: Engaged alumni and donors to strengthen university relations and raise funds for campus initiatives.

---

### 2.3 Education & Academic Honors
1. **New York University Tandon School of Engineering** (Aug 2024 – May 2026)
   - *Degree*: Master of Science in Computer Engineering
   - *CGPA*: **3.86 / 4.00**
   - *Campus Role*: Student Caller (Engagement Ambassador), NYU Phonathon
2. **Manipal University Jaipur** (Aug 2020 – May 2024)
   - *Degree*: Bachelor of Technology in Computer and Communication Engineering
   - *CGPA*: **9.05 / 10.00**
   - *Honors*: Dean’s List Award x2, Highest Junior Year GPA (9.86 / 10.00)
   - *Notable Build*: Developed MUJ Convocation Portal (live production web app used by 2,000+ students)
3. **Indian Institute of Technology (IIT) Madras** (Aug 2020 – May 2024)
   - *Degree*: Diploma in Programming (Concurrent Study)

---

### 2.4 Research Publication
- **Title**: *Leaf Edge Detection Using Machine Learning*
- **Authors**: Srivastava, S., et al.
- **Venue**: IEEE International Conference on Emerging Trends in Networks and Computer Communications (ETNCC), 2023.
- **Indexing**: IEEE Xplore, DOI: [10.1109/ETNCC59188.2023.10284977](https://doi.org/10.1109/ETNCC59188.2023.10284977)

---

### 2.5 Key Featured Projects Catalog
1. **Agentic Research Intelligence Platform**: LangGraph, PostgreSQL (pgvector), Redis, Cohere Rerank, FastAPI, Docker, LangSmith.
2. **Local LLM Inference Optimizer**: Numba JIT, Cython, INT8 Quantization, KV Caching, 7.5x throughput gain.
3. **F1 RaceFlux: Real-Time Telemetry Analytics Platform**: Kafka, Spark Structured Streaming (10,000+ events/sec, <1s latency), FastAPI, MLflow.
4. **Startup Autopsy Engine**: Multi-agent startup failure analysis via Google ADK, Vertex AI, Gemini multimodal models, and FastAPI streaming.
5. **Dell Manufacturing Predictive Analytics**: XGBoost, SHAP attribution, time-series cross-validation, 24% cycle-time MAE reduction.
6. **Plant Disease Detection System**: PyTorch, ONNX, INT8 quantization (sub-150ms latency), FastAPI, Docker, Terraform.
7. **Triage: Hotkey Brain-Dump to Notion**: Electron (<100ms hotkey capture), Node.js, Notion API, Gemini 2.5 Flash.
8. **Tech Layoffs Analytics Trend Analysis**: 1,300+ layoffs analyzed across 2020–2024, Python, Pandas, Plotly.

---

## 3. UI Component Architecture

```
src/
├── data/
│   └── resumeData.js             // Comprehensive 5-track structured resume data
├── components/
│   └── resume/
│       ├── ResumeHeader.jsx      // Title, Mode Switcher (Story vs ATS), PDF Download dropdown
│       ├── RoleTrackSelector.jsx // 5-Track pill switcher (AI, ML, SDE, Data Eng, Data Sci)
│       ├── ImpactTelemetry.jsx   // High-impact quantifiable badge ticker (200.8x, 3.86 GPA, 50K+, etc.)
│       ├── StoryJourneyView.jsx  // Interactive vertical chronological narrative rail
│       │   ├── TimelineNode.jsx  // Milestone marker & badge
│       │   └── InLineDrawer.jsx  // Expandable architecture & bullet points drawer
│       ├── ClassicAtsView.jsx    // Pristine, high-density 1-page ATS view + Print CSS
│       ├── SkillMatrix.jsx       // Grouped skill cards with cross-reference tags
│       └── ResearchCard.jsx      // IEEE Publication spotlight card
└── pages/
    └── ResumePage.jsx            // Container syncing route state, role preset, and view modes
```

---

## 4. User Interaction & State Transitions

1. **Role Switcher Interaction**:
   - Selecting a track updates the `activeRole` state and syncs to URL query params (`?role=ai-engineer`).
   - Dynamically highlights corresponding bullet points, re-orders top projects, and selects the corresponding tailored PDF.
2. **View Mode Switcher**:
   - Toggles between `interactive` and `ats` mode.
   - Preserves state across viewport resizes and re-renders.
3. **In-Line Expandable Drawers**:
   - Default state: First and most recent milestone (FairWAI) expanded by default; others collapsed with clear summary & badges.
   - Accordion behavior allows expanding multiple or collapsing all. Full keyboard accessibility (`Enter`/`Space` toggles).
4. **PDF & Print Export**:
   - **Download PDF**: Dropdown menu allowing instant download of any of the 5 tailored resumes or the direct active track resume.
   - **Print Button**: Calls `window.print()` using dedicated `@media print` rules that auto-render the clean ATS view without UI navigation controls.

---

## 5. Verification & Testing Plan

1. **Functional Verification**:
   - Switch between all 5 role tracks and verify correct sub-headings, prioritized projects, and bullet points.
   - Toggle between **Interactive Story Journey** and **Classic ATS** mode to ensure zero rendering glitches.
   - Test in-line drawer expansion/collapse on all milestones (FairWAI, Course5, Mahindra, NYU, MUJ, IIT Madras).
   - Test PDF download links and modal/dropdown triggers.
2. **Design & Theming Verification**:
   - Verify readability and styling across **Cyberpunk**, **Dark**, and **Light** themes.
   - Test responsiveness across Mobile (<768px), Tablet (768–1024px), and Desktop (>1024px).
3. **Print Layout Verification**:
   - Test browser Print preview (`Ctrl+P`) to verify clean, ATS-compliant multi-page formatting without broken cards or clipped margins.
