export const resumeProfile = {
  name: "Samridh Srivastava",
  email: "samridh@gmail.com",
  location: "New York, USA",
  linkedin: "https://www.linkedin.com/in/samridh-srivastava-a6b888ba/",
  github: "https://github.com/samridhsri",
  portfolio: "https://samridhsrivastava.com",
  workAuthorization: "U.S. work authorized through OPT/STEM OPT (up to 36 months). No immediate sponsorship required.",
  driveResumeUrl: "https://drive.google.com/file/d/1L5i-MZ2d16QehOudgUbCeQbAKX3yZQgz/view",
};

export const roleTracks = [
  {
    id: "all",
    label: "Comprehensive",
    badge: "Full Overview",
    icon: "sparkles",
    title: "Machine Learning & Distributed Systems Engineer",
    summary: "Built edge multimodal pipelines, agentic AI workflows with LangGraph, distributed streaming systems, and low-latency production ML services.",
    pdfName: "Samridh_Srivastava_Resume_Comprehensive.pdf",
    pdfUrl: "https://drive.google.com/file/d/1L5i-MZ2d16QehOudgUbCeQbAKX3yZQgz/view",
  },
  {
    id: "ai-engineer",
    label: "AI Engineer / FDE",
    badge: "Agentic & Multimodal",
    icon: "bot",
    title: "AI/ML Engineer specializing in LLMs, agentic AI, multimodal systems, and inference optimization",
    summary: "Built production agentic workflows with LangGraph, multimodal VLM edge pipelines at FairWAI (200.8x latency reduction), and full-stack AI apps with Gemini 2.5 Flash and Vertex AI.",
    pdfName: "Samridh_Srivastava_Resume_AIEngineer.pdf",
    pdfUrl: "https://drive.google.com/file/d/1_5dK0D3DaDhgAtDUY_FIge1Ju77WRdbn/view?usp=drive_link",
  },
  {
    id: "ml-engineer",
    label: "ML Engineer",
    badge: "Inference & Deep Learning",
    icon: "cpu",
    title: "Machine Learning Engineer specializing in model development, deep learning, and production ML systems",
    summary: "Built low-latency inference pipelines, 4-bit GGUF quantization, PyTorch fine-tuning with LoRA, ONNX Runtime optimizations (+25% throughput), and edge computer vision models.",
    pdfName: "Samridh_Srivastava_Resume_MLEngineer.pdf",
    pdfUrl: "https://drive.google.com/file/d/1CidfkC0grarlbXVuHFyciDvlPeFgwotW/view?usp=drive_link",
  },
  {
    id: "sde",
    label: "Software Engineer (SDE)",
    badge: "Backend & Systems",
    icon: "code",
    title: "Software Engineer specializing in backend systems, distributed systems, and AI/ML",
    summary: "Built production web applications (MUJ Convocation Portal for 2,000+ users), containerized FastAPI backends handling 50K+ monthly requests, and distributed streaming microservices.",
    pdfName: "Samridh_Srivastava_Resume_SoftwareEngineer.pdf",
    pdfUrl: "https://drive.google.com/file/d/1X15a3FN9WQa7tju8spkTRgqIcjGaiVNX/view?usp=drive_link",
  },
  {
    id: "data-engineer",
    label: "Data Engineer",
    badge: "Streaming & Pipelines",
    icon: "database",
    title: "Data Engineer specializing in data pipelines, distributed systems, stream processing, and cloud infrastructure",
    summary: "Built real-time streaming pipelines processing 10,000+ events/sec using Apache Kafka and Spark Structured Streaming, pgvector vector search, and Redis Queue async ingestion.",
    pdfName: "Samridh_Srivastava_Resume_DataEngineer.pdf",
    pdfUrl: "https://drive.google.com/file/d/1J1L_bnYmQkw5gPQn5noUa85QeABCyYtt/view?usp=drive_link",
  },
  {
    id: "data-scientist",
    label: "Data Scientist",
    badge: "Predictive Modeling & Analytics",
    icon: "chart",
    title: "Data Scientist specializing in predictive modeling, statistical analysis, and machine learning",
    summary: "Built evaluation benchmarks across 50 clinical encounters, cut cycle-time prediction error by 24% using XGBoost with SHAP attribution, and analyzed trends across 1,300+ tech layoffs.",
    pdfName: "Samridh_Srivastava_Resume_DataScientist.pdf",
    pdfUrl: "https://drive.google.com/file/d/1WiJ6hsKPAw6V5qd5imvCDD_fFVysYHqx/view?usp=drive_link",
  },
];

export const impactMetrics = [
  {
    id: "vlm-latency",
    value: "200.8×",
    label: "Prefill Latency Cut",
    detail: "4-bit GGUF quantization, batch parallelization & category-first CPU early exit at FairWAI",
    roles: ["all", "ai-engineer", "ml-engineer", "data-engineer"],
  },
  {
    id: "nyu-gpa",
    value: "3.86",
    label: "NYU Graduate GPA",
    detail: "MS in Computer Engineering at NYU Tandon School of Engineering",
    roles: ["all", "ai-engineer", "ml-engineer", "sde", "data-engineer", "data-scientist"],
  },
  {
    id: "llm-throughput",
    value: "7.5×",
    label: "Local LLM Speedup",
    detail: "Benchmarked KV caching, INT8 quantization & Numba JIT compiling on GPT-2 and TinyLlama",
    roles: ["all", "ai-engineer", "ml-engineer", "sde"],
  },
  {
    id: "c5i-reqs",
    value: "50K+",
    label: "Monthly ML Requests",
    detail: "Containerized FastAPI microservices in production enterprise applications at C5i",
    roles: ["all", "ai-engineer", "ml-engineer", "sde", "data-engineer"],
  },
  {
    id: "convocation-users",
    value: "2,000+",
    label: "Live Users",
    detail: "Convocation Portal handling registration and seat allocation at Manipal University",
    roles: ["all", "sde"],
  },
  {
    id: "streaming-events",
    value: "10K+/s",
    label: "Streaming Ingestion",
    detail: "Kafka and Spark Structured Streaming with sub-second micro-batch processing for F1 RaceFlux",
    roles: ["all", "data-engineer", "sde"],
  },
  {
    id: "mae-reduction",
    value: "24%",
    label: "Prediction Error Cut",
    detail: "XGBoost + SHAP feature attribution on Dell manufacturing cycle-time forecasts",
    roles: ["all", "data-scientist"],
  },
];

export const experiences = [
  {
    id: "fairwai",
    company: "FairWAI",
    role: "AI/ML Engineering Intern",
    location: "New York, USA (Remote)",
    period: "Aug 2026 – Present",
    chapter: "FairWAI // Edge Multimodal Systems",
    tagline: "Multimodal ML pipeline with streaming ASR, diarization, and quantized VLM clinical nudges",
    metrics: ["200.8× Latency Cut", "650 MB Footprint", "96.67% VLM Accuracy"],
    roles: ["ai-engineer", "ml-engineer", "sde", "data-engineer", "data-scientist"],
    bullets: [
      {
        text: "Engineered an edge-native multimodal ML/AI pipeline integrating streaming ASR, speaker diarization, language identification, computer vision, and VLM inference for real-time clinical communication analysis.",
        roles: ["ai-engineer", "ml-engineer", "sde", "data-engineer"],
      },
      {
        text: "Reduced VLM memory footprint to 650 MB and prefill latency by 200.8× through 4-bit GGUF quantization, batch parallelization, and category-first early-exit inference on CPU.",
        roles: ["ai-engineer", "ml-engineer", "sde", "data-engineer"],
      },
      {
        text: "Improved VLM decision accuracy from 73.3% to 96.67% across a 30-case regression suite by optimizing prompts with grounded context, negative boundaries, and few-shot exemplars while maintaining 100% JSON validity.",
        roles: ["ai-engineer", "ml-engineer", "data-scientist"],
      },
      {
        text: "Built a 50-encounter multimodal evaluation benchmark measuring precision, recall, F1, false-positive rate, latency, and demographic disparities across 19 clinical specialties.",
        roles: ["ai-engineer", "data-scientist", "data-engineer", "ml-engineer"],
      },
    ],
    techStack: ["VLM", "GGUF Quantization", "Streaming ASR", "Computer Vision", "Python", "CPU Optimization", "FastAPI", "Benchmarking"],
    relatedProjectId: "llm-inference-optimizer",
  },
  {
    id: "course5",
    company: "Course5 Intelligence (C5i)",
    role: "Machine Learning Intern",
    location: "Gurugram, India",
    period: "Feb 2024 – Jul 2024",
    chapter: "Course5 Intelligence // Enterprise RAG & Serving",
    tagline: "Production RAG, BERT/T5 pipelines, and ONNX-optimized microservices",
    metrics: ["+15% Search Precision", "50K+ Monthly Requests", "+25% Model Throughput"],
    roles: ["ai-engineer", "ml-engineer", "sde", "data-engineer", "data-scientist"],
    bullets: [
      {
        text: "Developed 3+ production LLM applications using LangChain, RAG, and FAISS, improving enterprise search precision by 15% through context-aware retrieval.",
        roles: ["ai-engineer", "ml-engineer", "data-engineer", "sde"],
      },
      {
        text: "Improved NLP workflow F1 score by 20% by developing BERT-based intent classification and T5-based summarization pipelines.",
        roles: ["ai-engineer", "ml-engineer", "data-scientist"],
      },
      {
        text: "Increased model-serving throughput by 25% through ONNX Runtime optimization, FastAPI inference, and performance profiling.",
        roles: ["ml-engineer", "sde", "data-engineer"],
      },
      {
        text: "Deployed ML inference services handling 50K+ monthly requests, integrating NLP and LLM models into production enterprise applications with low latency.",
        roles: ["ai-engineer", "ml-engineer", "sde", "data-engineer"],
      },
    ],
    techStack: ["LangChain", "RAG", "FAISS", "BERT", "T5", "FastAPI", "ONNX Runtime", "Python", "Docker"],
    relatedProjectId: "ai-research-intelligence-platform",
  },
  {
    id: "mahindra",
    company: "Mahindra and Mahindra",
    role: "Software Engineering Intern",
    location: "Mumbai, India (Remote)",
    period: "Sep 2023 – Dec 2023",
    chapter: "Mahindra // Computer Vision & APIs",
    tagline: "Automated CV pipelines, C# module concurrency parallelization, and multi-team API contract design",
    metrics: ["-40% Processing Effort", "+35% Concurrency Speedup", "10% Cloud Cost Savings"],
    roles: ["ai-engineer", "ml-engineer", "sde", "data-engineer", "data-scientist"],
    bullets: [
      {
        text: "Automated high-throughput computer vision data-processing pipelines using OpenCV and Python, reducing image recognition latency and manual processing effort by 40%.",
        roles: ["ml-engineer", "ai-engineer", "data-engineer", "sde"],
      },
      {
        text: "Engineered feature extraction and preprocessing pipelines across 5+ datasets, improving training data quality while reducing cloud compute costs by 10%.",
        roles: ["data-engineer", "data-scientist", "ml-engineer"],
      },
      {
        text: "Improved image-processing throughput by 35% by parallelizing C# processing modules and eliminating legacy computational bottlenecks.",
        roles: ["sde", "data-engineer", "ml-engineer"],
      },
      {
        text: "Reduced downstream integration errors by defining shared API schemas, data contracts, and mock endpoints across 4 cross-functional teams three weeks before delivery.",
        roles: ["sde", "data-engineer"],
      },
    ],
    techStack: ["OpenCV", "Python", "C#", "YOLOv8", "API Contracts", "Parallel Computing", "Cloud Storage"],
    relatedProjectId: "plant-disease",
  },
  {
    id: "phonathon",
    company: "NYU Phonathon",
    role: "Student Caller / Engagement Ambassador",
    location: "New York, NY",
    period: "Feb 2025 – Present",
    chapter: "NYU Phonathon // Campus Outreach",
    tagline: "Engaged university alumni and donors to support campus initiatives",
    metrics: ["Alumni Relations", "Donor Outreach", "NYU Community"],
    roles: ["all", "sde", "ai-engineer", "ml-engineer", "data-engineer", "data-scientist"],
    bullets: [
      {
        text: "Engaged alumni and institutional donors to strengthen university relations, communicate recent technical developments at NYU Tandon, and raise funds for campus initiatives.",
        roles: ["all", "sde", "ai-engineer", "ml-engineer", "data-engineer", "data-scientist"],
      },
    ],
    techStack: ["Communication", "Stakeholder Relations", "Fundraising Strategies", "Public Speaking"],
    relatedProjectId: null,
  },
];

export const education = [
  {
    id: "nyu-tandon",
    institution: "New York University Tandon School of Engineering",
    degree: "Master of Science in Computer Engineering",
    location: "New York, NY",
    period: "Aug 2024 – May 2026",
    gpa: "CGPA: 3.86 / 4.00",
    chapter: "Graduate Studies // NYU Tandon",
    highlights: [
      "Coursework in DS-GA 1019 Advanced Python for Data Science, Computer Vision, Big Data & Distributed Systems, and Machine Learning Systems.",
      "Student Caller (Engagement Ambassador) at NYU Phonathon.",
      "Benchmarked local LLM inference optimizations across KV-cache reuse, INT8 quantization, and asynchronous batching.",
    ],
    relevantCourses: ["Advanced Python for DS", "Distributed Big Data Systems", "Computer Vision", "Deep Learning Systems", "Systems Architecture"],
  },
  {
    id: "muj-btech",
    institution: "Manipal University Jaipur",
    degree: "Bachelor of Technology in Computer and Communication Engineering",
    location: "Jaipur, India",
    period: "Aug 2020 – May 2024",
    gpa: "CGPA: 9.05 / 10.00",
    chapter: "Undergraduate Studies // MUJ",
    highlights: [
      "Honors: Dean's List Award x2, Highest Junior Year GPA (9.86 / 10.00).",
      "Built and deployed the MUJ Convocation Portal used by 2,000+ students for registration and seating.",
      "Published peer-reviewed IEEE research paper on leaf edge detection using machine learning.",
    ],
    relevantCourses: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Database Management Systems", "Software Engineering"],
  },
  {
    id: "iitm-diploma",
    institution: "Indian Institute of Technology (IIT) Madras",
    degree: "Diploma in Programming",
    location: "Chennai, India",
    period: "Aug 2020 – May 2024",
    gpa: "Concurrent Dual-Study Program",
    chapter: "Foundations // IIT Madras",
    highlights: [
      "Core coursework in data structures, algorithms, object-oriented programming, and systems design.",
      "Completed concurrently with B.Tech degree.",
    ],
    relevantCourses: ["Algorithms & Data Structures", "Python & Java Programming", "Systems Programming", "Object Oriented Design"],
  },
];

export const researchPublication = {
  title: "Leaf Edge Detection Using Machine Learning",
  authors: "Srivastava, S., et al.",
  venue: "IEEE International Conference on Emerging Trends in Networks and Computer Communications (ETNCC)",
  year: "2023",
  doi: "10.1109/ETNCC59188.2023.10284977",
  doiUrl: "https://doi.org/10.1109/ETNCC59188.2023.10284977",
  indexing: "IEEE Xplore",
  abstract: "Computer vision and machine learning method for boundary extraction and edge detection on agricultural foliage datasets using morphological filtering and boundary confidence metrics.",
};

export const categorizedSkills = [
  {
    category: "Languages & Core",
    icon: "code",
    skills: ["Python", "SQL", "C++", "JavaScript", "TypeScript", "Java", "Bash", "Data Structures & Algorithms", "OOP", "System Design"],
    primaryRoles: ["all", "sde", "ai-engineer", "ml-engineer", "data-engineer", "data-scientist"],
  },
  {
    category: "AI, ML & Multimodal",
    icon: "cpu",
    skills: ["LLMs & Agentic AI", "LangGraph", "LangChain", "RAG", "Multimodal VLMs", "PyTorch", "Transformers", "LoRA / PEFT", "Hugging Face", "Computer Vision", "YOLOv8", "BERT", "T5", "GGUF Quantization"],
    primaryRoles: ["all", "ai-engineer", "ml-engineer", "data-scientist"],
  },
  {
    category: "Data & Distributed Systems",
    icon: "database",
    skills: ["Apache Kafka", "Apache Spark", "PySpark", "PostgreSQL (pgvector)", "Redis / Redis Queue", "MongoDB", "Ray", "ETL / ELT", "Stream Processing", "Vector Search / FAISS"],
    primaryRoles: ["all", "data-engineer", "sde", "ai-engineer"],
  },
  {
    category: "Backend & Cloud Infrastructure",
    icon: "cloud",
    skills: ["FastAPI", "Flask", "Node.js", "Docker", "Docker Compose", "Kubernetes", "AWS (EC2, S3)", "Terraform", "CI/CD", "GitHub Actions", "Linux", "REST APIs"],
    primaryRoles: ["all", "sde", "ai-engineer", "data-engineer", "ml-engineer"],
  },
  {
    category: "MLOps, Serving & Optimization",
    icon: "gauge",
    skills: ["ONNX Runtime", "INT8/INT4 Quantization", "KV Caching", "Numba JIT", "Cython", "MLflow", "LangSmith Tracing", "Prometheus", "Grafana", "Performance Profiling"],
    primaryRoles: ["all", "ml-engineer", "ai-engineer", "sde", "data-engineer"],
  },
  {
    category: "Statistics, Analytics & UI",
    icon: "chart",
    skills: ["XGBoost", "SHAP Attribution", "Statistical Modeling", "Hypothesis Testing", "A/B Testing", "Time-Series Cross-Validation", "Pandas", "NumPy", "Matplotlib / Seaborn / Plotly", "React.js", "Tailwind CSS"],
    primaryRoles: ["all", "data-scientist", "data-engineer", "sde"],
  },
];

export const featuredProjectsByRole = {
  "all": [
    "ai-research-intelligence-platform",
    "llm-inference-optimizer",
    "f1-telemetry",
    "triage-ai-productivity-agent",
    "plant-disease",
    "muj-portal",
  ],
  "ai-engineer": [
    "ai-research-intelligence-platform",
    "triage-ai-productivity-agent",
    "llm-inference-optimizer",
    "music-mindscape",
  ],
  "ml-engineer": [
    "llm-inference-optimizer",
    "plant-disease",
    "roberta-lora",
    "ai-research-intelligence-platform",
  ],
  "sde": [
    "muj-portal",
    "f1-telemetry",
    "ai-research-intelligence-platform",
    "triage-ai-productivity-agent",
  ],
  "data-engineer": [
    "f1-telemetry",
    "ai-research-intelligence-platform",
    "plant-disease",
  ],
  "data-scientist": [
    "llm-inference-optimizer",
    "f1-telemetry",
    "roberta-lora",
  ],
};
