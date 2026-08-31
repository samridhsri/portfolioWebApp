# Design Specification: Interactive Resume Experience ("Neural Chrono-Matrix")

**Date:** 2026-08-30  
**Status:** Ready for Review  
**Target Route:** `/resume` (within existing `my-app` React application)  
**Primary Architect:** Antigravity  

---

## 1. Executive Summary & Goals

Transform the existing single-card resume page into an interactive, production-grade engineering resume called the **"Neural Chrono-Matrix"**. 

The design combines:
1. **Interactive Story Journey Mode**: A chronological, milestone-driven technical narrative featuring quantifiable telemetry ribbons, chapter milestones (from foundational systems in India to cutting-edge multimodal edge inference at FairwAI and NYU graduate research), and expandable in-line technical drawers.
2. **Targeted Role Tracks Mode**: Instant recruiter filtering into 5 distinct specialized lenses (AI Engineer, ML Engineer, Software Engineer / SDE, Data Engineer, Data Scientist) with tailored summaries, track badges, and dynamic bullet prioritization.
3. **Quantifiable Impact Metric Ribbons**: High-signal, interactive counters displaying proven engineering outcomes (e.g. 200.8× VLM latency reduction, 7.5× local LLM speedup, 50K+ monthly requests, 2,000+ users, 10K+/s streaming throughput).
4. **Complete Contextual Integration**: Including FairwAI (multimodal edge VLM pipeline), NYU Phonathon, Course5 Intelligence, Mahindra & Mahindra, NYU Tandon MS CE (GPA 3.86), Manipal University Jaipur B.Tech (GPA 9.05), IIT Madras Diploma, IEEE published research, and 7+ production projects.
5. **Integrated Artifact Downloads & Navigation**: Dynamic PDF resume download links per role track, live project links, and direct anchor jump points seamlessly synchronized with the existing sticky sub-navigation and theme system.

---

## 1. Resume Content Schema & Master Data

### 1.1 Professional Experience Entries

1. **FairwAI** | *AI/ML Engineering Intern* | New York, NY (Remote) | Aug 2026 – Present
   - **Tagline**: Multimodal ML pipeline with streaming ASR, diarization, and quantized VLM clinical nudges
   - **Metrics**: `200.8× Latency Cut` (12.05s → 60ms) | `650 MB Footprint` | `96.67% VLM Accuracy`
   - **Core Bullets**:
     - Engineered edge-native multimodal ML/AI pipeline integrating streaming ASR, speaker diarization, language identification, computer vision, and VLM inference for real-time clinical communication analysis.
     - Quantized SmolVLM-Instruct to 4-bit GGUF (`Q4_K_M`), combined with batch parallelization and category-first CPU early exit, reducing prefill inference latency from 12.05s to 60ms (200.8× speedup) while fitting in 650 MB RAM on edge devices.
     - Built on-device iOS audio capture system using WhisperKit and whisper.cpp, streaming 16kHz audio chunks with sliding-window diarization for real-time speaker segmentation across multi-speaker clinical dialogues.
     - Evaluated lightweight VLMs (SmolVLM, Moondream2, Qwen2-VL) on custom clinician-patient video datasets, achieving 96.67% accuracy in nonverbal cue detection and delivering low-latency clinical nudges.
   - **Skills/Tags**: `Python` `PyTorch` `WhisperKit` `whisper.cpp` `pyannote.audio` `llama.cpp` `MLC-LLM` `Core ML` `SmolVLM` `Qwen2-VL` `Quantization (GGUF)` `Edge AI`

2. **NYU Phonathon (NYU Tandon)** | *Engagement Ambassador* | Brooklyn, NY | Aug 2025 – May 2026
   - **Tagline**: University donor & alumni engagement campaigns and institutional advocacy
   - **Metrics**: `Top Tier Engagement` | `NYU Tandon Representation`
   - **Core Bullets**:
     - Engaged 500+ NYU alumni and donors to communicate university research milestones, academic initiatives, and engineering program updates.
     - Represented NYU Tandon School of Engineering in institutional advancement and student mentorship outreach.
   - **Skills/Tags**: `Technical Communication` `Alumni Outreach` `Advocacy` `Stakeholder Engagement`

3. **Course5 Intelligence (C5i)** | *Machine Learning Intern* | Bengaluru, India | Jan 2024 – Jun 2024
   - **Tagline**: Production LLM RAG pipelines and transformer fine-tuning for enterprise analytics
   - **Metrics**: `50K+ Monthly Requests` | `40% Latency Cut` | `94.2% Intent Accuracy`
   - **Core Bullets**:
     - Built enterprise RAG pipelines using LangChain, LlamaIndex, and FAISS vector databases, serving context-grounded insights across 50,000+ monthly analytical queries.
     - Fine-tuned domain-specific transformer models for intent classification and text summarization, achieving 94.2% accuracy on internal enterprise benchmarks.
     - Containerized ML inference services with FastAPI and Docker, implementing Redis caching and asynchronous request batching to cut API p95 latency by 40%.
   - **Skills/Tags**: `Python` `FastAPI` `LangChain` `LlamaIndex` `FAISS` `Transformers` `Docker` `Redis` `RAG`

4. **Mahindra & Mahindra** | *Computer Vision & Software Engineering Intern* | Mumbai, India | Jun 2023 – Dec 2023
   - **Tagline**: Edge computer vision and automated visual inspection systems
   - **Metrics**: `35-40% Latency Reduction` | `98.1% Defect Precision` | `Automated Quality Control`
   - **Core Bullets**:
     - Developed end-to-end computer vision pipelines for automated component inspection and surface defect detection using YOLOv8 and Mask R-CNN.
     - Converted PyTorch models to ONNX and applied INT8 post-training quantization, achieving 35–40% latency reduction on edge industrial compute units.
     - Built automated data annotation and quality validation scripts in OpenCV and Python, processing 25,000+ manufacturing inspection images.
   - **Skills/Tags**: `Python` `OpenCV` `PyTorch` `YOLOv8` `Mask R-CNN` `ONNX Runtime` `INT8 Quantization` `Computer Vision`

---

### 1.2 Education, Certifications & Honors

1. **New York University (NYU Tandon School of Engineering)** | Brooklyn, NY
   - *Master of Science in Computer Engineering* | Graduated: May 2026 | **GPA: 3.86 / 4.0**
   - **Key Coursework**: Advanced Python for Data Science (DS-GA 1019, Grade: A), Machine Learning, Computer Vision, Big Data & Distributed Systems, Cloud Computing, High Performance Computing.
   - **Distinction**: Straight A's in all courses with a single A- in Digital Signal Processing.

2. **Manipal University Jaipur (MUJ)** | Jaipur, India
   - *Bachelor of Technology in Computer & Communication Engineering* | 2020 – 2024 | **GPA: 9.05 / 10.0**
   - **Leadership & Distinction**: Founder & President of Competitive Programming Club; Academic Merit Scholarship; Mentored 50+ peers.

3. **Indian Institute of Technology, Madras (IIT Madras)** | Chennai, India
   - *Diploma in Programming & Data Science* | 2019 – 2021
   - **Foundational Focus**: Computational Thinking, Data Structures, Algorithms in Python.

4. **Research Publication**:
   - IEEE Published Research Paper in Computer Vision & Deep Learning (DOI: `10.1109/10284977`) on edge detection and feature extraction methodologies.

---

### 1.3 Role Tracks Mapping Matrix

| Track ID | Track Name | Badge | Primary Focus & Highlights |
|---|---|---|---|
| `all` | Comprehensive | Full Overview | All 4 professional experiences, all 8 metrics, full education and technical skills. |
| `ai-engineer` | AI Engineer / FDE | Agentic & Multimodal | FairwAI (Edge VLM & ASR), Course5 (LLM RAG), LangGraph Agentic Research Platform, Triage Notion Assistant, Gemini Multimodal. |
| `ml-engineer` | ML Engineer | Inference & Deep Learning | FairwAI (4-bit GGUF quantization), Local LLM Optimizer (7.5× speedup, INT8, KV-cache), Mahindra (ONNX, YOLOv8), Plant Disease (sub-150ms). |
| `sde` | Software Engineer (SDE) | Backend & Systems | MUJ Convocation Portal (2,000+ users), F1 RaceFlux (Kafka, Spark, 5 microservices), FastAPI backends (50K+ reqs), Docker, PostgreSQL. |
| `data-engineer` | Data Engineer | Streaming & Pipelines | F1 RaceFlux (10K+ events/sec, Kafka, Spark Streaming), Course5 (FAISS, RAG vector ETL), pgvector & Redis Queue ingestion. |
| `data-scientist` | Data Scientist | Predictive Modeling & Analytics | Statistical modeling, XGBoost + SHAP feature attribution (24% MAE reduction), Music Mindscape clustering, clinical benchmarking. |

---

## 2. Interactive Architecture & Component Breakdown

### 2.1 File Structure & Modular Hierarchy

```
src/
├── data/
│   └── resumeData.js                     # Master resume dataset (experiences, education, skills, metrics, tracks)
├── components/
│   └── resume/
│       ├── InteractiveResume.jsx         # Section container with track selector, mode switcher, metrics ribbon
│       ├── TrackSelector.jsx             # Role track switcher tabs (AI Engineer, ML Engineer, SDE, etc.)
│       ├── ImpactMetricsRibbon.jsx       # Dynamic quantifiable telemetry cards with subtle glowing borders
│       ├── StoryJourneyView.jsx          # Chronological timeline narrative with expandable technical drawers
│       ├── TargetedTrackView.jsx         # Role-focused structured view with prioritized bullets and skills
│       ├── ExperienceDrawer.jsx          # Expandable deep-dive drawer for architectures, metrics, and code snippets
│       └── ResumeHeaderActions.jsx       # Mode toggles (Story vs. Track), PDF Resume download button, Print view
```

---

## 3. UI/UX Design & Aesthetic Specifications

- **Theme Cohesion**: Fully integrated with the 16 existing theme tokens (`--bg-primary`, `--text-primary`, `--accent-primary`, `--accent-secondary`, `--card-bg`, `--accent-glow`, `--border-color`).
- **Telemetry Ribbon**: High-visibility metric cards with Geist Mono values and subtle accent glow on hover.
- **Story Journey**: Chronological vertical spine connecting milestones from Manipal (2020) to FairwAI (2026).
- **In-Line Technical Drawers**: Fluid accordion animations with zero layout shift, displaying detailed architectural highlights, metrics, and technology chips.
- **Accessibility & Motion**: Full keyboard navigation support (`Tab`, `Enter`, `Space`, `Esc`), WCAG AAA contrast ratios, and `prefers-reduced-motion` compliance.

---

## 4. Verification & Testing Plan

1. **State & Filtering Verification**:
   - Verify role track filtering across all 5 tracks (`all`, `ai-engineer`, `ml-engineer`, `sde`, `data-engineer`, `data-scientist`).
   - Confirm impact metrics update dynamically according to the selected track.
2. **Interactive Drawer Verification**:
   - Default state: First and most recent milestone (FairwAI) expanded by default; others collapsed with clear summary & badges.
   - Test expansion and collapse across all milestones (FairwAI, Course5, Mahindra, NYU, MUJ, IIT Madras).
3. **Cross-Theme & Responsive Verification**:
   - Test across all 16 portfolio themes and verify responsiveness across mobile (375px), tablet (768px), and desktop (1440px).

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
