export const projects = [
  {
    id: "ai-research-intelligence-platform",

    title: "AI Research Intelligence Platform",

    description:
      "Engineered an agentic research platform that decomposes complex research questions into parallel workflows, retrieves and reranks information, and synthesizes evidence-backed insights using LangGraph, PostgreSQL, Redis, and Cohere.",

    tags: [
      "Python",
      "LangGraph",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Cohere",
      "Agentic AI",
      "RAG",
      "Docker",
    ],

    image: "/images/aiResearch/AIResearchIntelligence1.png",

    link: "#",

    github: "https://github.com/samridhsri/ai-research-intelligence",

    detailedDescription:
      "Built an agentic AI research intelligence platform designed to transform complex research questions into structured, evidence-backed analyses. The system uses LangGraph to orchestrate research workflows, decomposing broad questions into focused research tasks and coordinating retrieval, ranking, and synthesis. PostgreSQL with pgvector provides persistent semantic retrieval, Redis supports caching and intermediate state, and Cohere reranking improves the relevance of retrieved evidence before final synthesis. FastAPI exposes the research pipeline as a production-oriented backend service, while Docker provides reproducible deployment.",

    features: [
      "Designed an agentic research workflow using LangGraph for task decomposition and orchestration",
      "Implemented retrieval-augmented generation using PostgreSQL and pgvector for semantic search",
      "Integrated Cohere reranking to improve relevance of retrieved research evidence",
      "Used Redis for caching frequently accessed information and intermediate workflow state",
      "Built FastAPI services for exposing research workflows through production-ready APIs",
      "Implemented multi-stage research pipelines combining retrieval, evidence evaluation, and synthesis",
      "Designed structured outputs to transform unstructured research into actionable intelligence",
      "Containerized the complete platform using Docker for reproducible deployment",
    ],

    techStack: {
      Language: ["Python"],
      AgenticAI: ["LangGraph", "Agent Orchestration", "LLM Workflows"],
      Backend: ["FastAPI"],
      Retrieval: ["PostgreSQL", "pgvector", "RAG"],
      Reranking: ["Cohere Rerank"],
      Caching: ["Redis"],
      Infrastructure: ["Docker"],
    },

    screenshots: [
      {
        title: "ResearchAI Platform Workspace & RAG Query UI",
        url: "/images/aiResearch/AIResearchIntelligence1.png",
        placeholder: "ResearchAI Platform workspace with verified source citations",
      },
      {
        title: "Research Analysis & Document Querying",
        url: "/images/aiResearch/AIResearchIntelligence2.png",
        placeholder: "Multi-document AI research Q&A response",
      },
      {
        title: "ResearchAI Paper Synthesis Architecture",
        url: "/images/aiResearch/AIResearchIntelligence3.png",
        placeholder: "Hybrid Retrieval, RRF, and Cohere Reranking pipeline overview",
      },
    ],
  },
  {
    id: "llm-inference-optimizer",
    title: "Local LLM Inference Optimization Framework",
    description:
      "Designed and benchmarked a local LLM inference optimization framework leveraging KV caching, INT8 quantization, and asynchronous batching, achieving up to 7.5x throughput improvement while reducing model memory footprint by over 40%.",
    tags: [
      "Python",
      "Transformers",
      "PyTorch",
      "Numba",
      "Cython",
      "ONNX Runtime",
      "LLM Inference",
      "Performance Engineering",
    ],
    image: "/images/LLM/Dashboard_benchmark.png",
    link: "#",
    github: "https://github.com/ranjan2601/DS-GA-1019",
    detailedDescription:
      "Built a benchmarking and optimization framework for local Large Language Model inference focused on improving throughput, reducing latency, and lowering memory requirements on commodity hardware. Evaluated multiple optimization strategies including KV cache reuse, INT8 quantization, and asynchronous batching across GPT-2, TinyLlama, and Pythia models. Generated performance benchmarks, memory analyses, and speedup studies to quantify the impact of each optimization technique.",
    features: [
      "Implemented transformer KV-cache reuse achieving up to 3.15x inference speedup",
      "Applied INT8 quantization reducing model memory footprint by up to 7.5%",
      "Built asynchronous batching pipeline reaching 176+ tokens/sec throughput",
      "Benchmarked GPT-2, TinyLlama, and Pythia models across multiple optimization stages",
      "Generated comparative latency, throughput, memory, and speedup analyses",
      "Created reproducible performance evaluation framework for local LLM deployment",
    ],
    techStack: {
      Core: ["Python", "PyTorch", "Transformers"],
      Optimization: ["KV Caching", "INT8 Quantization"],
      Performance: ["Numba", "Cython"],
      Analysis: ["NumPy", "Pandas"],
      Visualization: ["Matplotlib"],
      Deployment: ["Docker"],
    },
    screenshots: [
      {
        title: "Benchmark Dashboard",
        url: "/images/LLM/Dashboard_benchmark.png",
        placeholder: "Comprehensive performance dashboard",
      },
      {
        title: "Dashboard for initial experiments with GPT-2",
        url: "/images/LLM/Dashboard.png",
        placeholder: "Initial benchmarking dashboard for GPT-2",
      },
      {
        title: "Dashboard for comparison between different optimizations applied to GPT-2",
        url: "/images/LLM/Dashboard_comparison.png",
        placeholder: "Comparative dashboard showing optimization impact on GPT-2",
      },
      {
        title: "Optimization Pipeline Throughput",
        url: "/images/LLM/final_comparison.png",
        placeholder: "Inference throughput across optimization stages",
      },
      {
        title: "Model Throughput Comparison",
        url: "/images/LLM/final_all_models_bar.png",
        placeholder: "Cross-model throughput analysis",
      },
      {
        title: "Relative Speedup Analysis",
        url: "/images/LLM/final_speedup_relative.png",
        placeholder: "Speedup versus baseline",
      },
      {
        title: "Memory Reduction with Quantization",
        url: "/images/LLM/final_memory_comparison.png",
        placeholder: "FP32 vs INT8 memory footprint",
      },
      {
        title: "Per-Model Optimization Results",
        url: "/images/LLM/final_per_model.png",
        placeholder: "Performance across GPT-2, TinyLlama and Pythia",
      },
    ],
  },
  {
    id: "f1-telemetry",
    title: "F1 Race Telemetry Analytics Platform (RaceFlux)",
    description:
      "Built a production-grade real-time analytics system for Formula 1 telemetry using Kafka and Spark, with ML-powered race outcome prediction and multiple interactive dashboards.",
    tags: [
      "Python",
      "Apache Kafka",
      "Apache Spark",
      "FastAPI",
      "Docker",
      "MLflow",
      "Streamlit",
      "MongoDB",
    ],
    image: "/images/F1/F1Dashboard.png",
    link: "#",
    github: "https://github.com/samridhsri/f1-race-telemetry",
    detailedDescription:
      "RaceFlux is a distributed, real-time Formula 1 analytics platform that ingests live and historical telemetry data via FastF1, processes six concurrent data streams using Spark Structured Streaming, and serves insights through interactive Streamlit dashboards. The system includes MLflow-tracked race outcome prediction models and is fully containerized with automated deployment.",
    features: [
      "Real-time ingestion of 6 F1 telemetry streams using Apache Kafka",
      "Spark Structured Streaming with sub-5s micro-batch processing",
      "Gradient Boosting ML model for race position prediction",
      "MLflow-based experiment tracking and model registry",
      "Six interactive Streamlit dashboards for live analytics",
      "One-command Dockerized deployment with reproducibility",
    ],
    techStack: {
      Backend: ["Python", "FastAPI"],
      Streaming: ["Apache Kafka", "Apache Spark"],
      Storage: ["MongoDB", "PostgreSQL"],
      ML: ["Spark MLlib", "MLflow"],
      Visualization: ["Streamlit", "Plotly"],
      DevOps: ["Docker", "Docker Compose"],
    },
    screenshots: [
      { title: "Live Dashboards", url: "/images/F1/F1Dashboard.png", placeholder: "Add Streamlit dashboards" },
      { title: "Live Dashboards", url: "/images/F1/F1Dashboard2.png", placeholder: "Add Streamlit dashboards" },
      { title: "Live Dashboards", url: "/images/F1/F1DashboardTrackSpeedHeatmap.png", placeholder: "Add Streamlit dashboards" },
      { title: "MLflow Experiments", url: "/images/F1/mlflow.png", placeholder: "Add MLflow UI" },
      { title: "MLflow Experiments", url: "/images/F1/mlflowModelMetrics.png", placeholder: "Add MLflow UI" },
      { title: "Race Prediction", url: "/images/F1/racePrediction.png", placeholder: "Add MLflow UI" },
      { title: "ML Experiment Tracking", url: "/images/F1/MLExperimentTracking.png", placeholder: "Add MLflow UI" },
    ],
  },
  {
    id: "music-mindscape",
    title: "Music Mindscape",
    description:
      "An interactive force-directed mind map that visualizes your Spotify listening habits, clustering tracks into musical zones using audio features or AI-powered context via Gemini.",
    tags: ["Full Stack", "Data Visualization", "AI/ML", "Web Development"],
    image: "/images/music-mindscape/influenceAnalysis.png",
    link: "https://github.com/samridhsri/music-mindscape",
    github: "https://github.com/samridhsri/music-mindscape",
    detailedDescription:
      "A Spotify-connected visualization app that maps your top tracks as a living mind map. Tracks are clustered into musical zones by audio feature similarity, with an optional AI mode powered by Gemini 2.5 Flash that re-clusters using music knowledge. Features an Influence Simulator to overlay any Spotify artist as a ghost node and see how they connect to your existing taste.",
    features: [
      "Force-directed mind map with staggered node entrance animations",
      "9 auto-generated musical zones (Energy, Chill, Sad, Happy, Electronic, etc.)",
      "AI Clustering via Gemini 2.5 Flash with step-by-step algorithm insight panel",
      "Influence Simulator — search any artist, visualize their sonic similarity to your library",
      "Playlist export to Spotify or clipboard, plus PNG graph export",
      "Demo mode with mock data — no login required",
      "Persistent state via localStorage with automatic AI cache invalidation on re-sync",
    ],
    techStack: {
      Frontend: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
      Graph: ["react-force-graph-2d", "d3-force"],
      Backend: ["Supabase Edge Functions (Deno)"],
      Database: ["PostgreSQL (Supabase)"],
      Auth: ["Spotify OAuth via Supabase"],
      AI: ["Google Gemini 2.5 Flash"],
    },
    screenshots: [
      { title: "Mind Map View", url: "/images/music-mindscape/clusters.png", placeholder: "Add mind map screenshot" },
      { title: "Influence Simulator", url: "/images/music-mindscape/influenceAnalysis.png", placeholder: "Add influence panel screenshot" },
      { title: "Main Page", url: "/images/music-mindscape/mainScreen.png", placeholder: "Add AI insight screenshot" },
    ],
  },

  {
    id: "triage-ai-productivity-agent",

    title: "Triage: AI Productivity Agent",

    description:
      "Built an AI-powered productivity agent that converts unstructured thoughts into structured, actionable Notion tasks using Gemini 2.5 Flash, automated classification, and direct Notion integration.",

    tags: [
      "Python",
      "Gemini 2.5 Flash",
      "Notion API",
      "FastAPI",
      "Docker",
      "AI Agents",
      "LLM",
      "Productivity Automation",
    ],

    image: "/images/Triage/triagev2.gif",

    link: "#",

    github: "https://github.com/samridhsri/triage",

    detailedDescription:
      "Built Triage as a Raycast-style AI productivity interface for capturing unstructured thoughts and automatically routing them into structured Notion databases. The system uses Gemini 2.5 Flash to interpret natural language input and return structured JSON containing fields such as task type, destination database, priority, and actionable content. Integrated the Notion SDK for automated page creation and database routing, with FastAPI providing the backend API and Docker enabling reproducible deployment.",

    features: [
      "Built a Raycast-style interface for rapidly capturing unstructured thoughts and tasks",
      "Used Gemini 2.5 Flash to classify and structure natural language input into deterministic JSON",
      "Implemented automatic routing of captured items to the appropriate Notion database",
      "Integrated the Notion SDK for programmatic page and database operations",
      "Designed a structured prompt and schema-based workflow for reliable LLM outputs",
      "Built a FastAPI backend to expose the AI processing and Notion integration pipeline",
      "Containerized the application with Docker for reproducible local deployment",
    ],

    techStack: {
      Language: ["Python"],
      AI: ["Gemini 2.5 Flash", "LLM Prompting", "Structured Outputs"],
      Backend: ["FastAPI"],
      Integration: ["Notion API", "Notion SDK"],
      Infrastructure: ["Docker"],
    },

    screenshots: [
      { title: "Triage", url: "/images/triage/TriageScreenshot.png", placeholder: "Triage Screenshot" },
      { title: "Triage Feedback UI", url: "/images/triage/TriageFBScreenshot.png", placeholder: "Feedback UI screenshot" },

    ],
  },
  {
    id: "plant-disease",
    title: "Plant Disease Detection System",
    description:
      "Designed an end-to-end MLOps pipeline for plant disease detection with distributed training, ONNX-optimized inference, and production monitoring.",
    tags: [
      "FastAPI",
      "Ray",
      "ONNX",
      "Docker",
      "Terraform",
      "Prometheus",
      "MLflow",
    ],
    image: null,
    link: "#",
    github: "https://github.com/meghrathod/plantdisease-ml",
    detailedDescription:
      "A scalable, production-ready computer vision system for detecting plant diseases from images. The platform includes ETL workflows, data validation, distributed training with Ray, ONNX-based inference optimization, CI/CD pipelines, and full monitoring with Prometheus and Grafana.",
    features: [
      "Distributed training using Ray",
      "ONNX + INT8 quantization for <150ms inference latency",
      "ETL pipelines with data validation and object storage",
      "MLflow experiment tracking and reproducibility",
      "Dockerized services with Terraform-based deployment",
      "Production monitoring with Prometheus and Grafana",
    ],
    techStack: {
      "ML Framework": ["PyTorch", "ONNX", "Ray"],
      API: ["FastAPI", "Uvicorn"],
      Storage: ["OpenStack Swift"],
      DevOps: ["Docker", "Terraform", "CI/CD"],
      Monitoring: ["Prometheus", "Grafana", "MLflow"],
    },
    screenshots: [
      { title: "System Architecture", url: "/images/plantDisease/SystemDiagram.png", placeholder: "Add training UI" },
      { title: "Dashboard for the Dataset", url: "/images/plantDisease/PlantDataSet.png", placeholder: "" },

    ],
  },
  {
    id: "urban-sustainability",
    title: "Urban Sustainability Calculator",
    description:
      "Built an AI-powered sustainability scoring platform using real-time geospatial data and LLM-based reasoning.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Flask",
      "Google Gemini API",
      "OpenStreetMap",
    ],
    image: null,
    link: "#",
    github: "https://github.com/ranjan2601/Urban-Sustainability-Calculator",
    detailedDescription:
      "A full-stack sustainability assessment tool that evaluates urban regions across environmental, economic, and social factors. The platform integrates OpenStreetMap data with Google Gemini-powered analysis and presents results via an interactive map-based UI.",
    features: [
      "AI-driven sustainability scoring using 10+ metrics",
      "Interactive map-based analysis with React-Leaflet",
      "Google Gemini API integration for reasoning",
      "Real-time geospatial visualization",
      "Responsive modern UI with Tailwind CSS",
    ],
    techStack: {
      Frontend: ["Next.js", "React", "Tailwind CSS", "React-Leaflet"],
      Backend: ["Flask", "Python"],
      AI: ["Google Gemini API"],
      Mapping: ["OpenStreetMap", "Leaflet"],
      Deployment: ["Docker", "Vercel"],
    },
    screenshots: [
      { title: "Main UI", url: "/images/urbanSustainabilityManager/Home page.png", placeholder: "Add UI screenshot" },
      { title: "Main UI", url: "/images/urbanSustainabilityManager/Home page 2.png", placeholder: "Add UI screenshot" },
      { title: "Sample Result for 200 Acre Walmart at Union Square", url: "/images/urbanSustainabilityManager/Results for 200 Acre Walmart at Union Square.png", placeholder: "Add map visualization" },
      { title: "Sample Result for 200 Acre Walmart at Union Square", url: "/images/urbanSustainabilityManager/Results for 200 Acre Walmart at Union Square 2.png", placeholder: "Add analysis panel" },
    ],
  },
  {
    id: "roberta-lora",
    title: "Fine-Tuning RoBERTa with LoRA",
    description:
      "Implemented parameter-efficient fine-tuning of RoBERTa using LoRA, achieving high accuracy while training less than 1% of model parameters.",
    tags: ["PyTorch", "Hugging Face", "LoRA", "PEFT", "CUDA"],
    image: null,
    link: "#",
    github: "https://github.com/samridhsri/finetuning-with-lora-dl-project-2",
    detailedDescription:
      "A deep learning project demonstrating efficient fine-tuning of large language models using Low-Rank Adaptation (LoRA). Achieved strong performance on the AG News dataset while training only 0.69% of total parameters.",
    features: [
      "LoRA-based parameter-efficient fine-tuning",
      "Only 864K / 125M parameters trained",
      "92.8% accuracy and F1-score on AG News",
      "Cosine LR scheduling and gradient accumulation",
      "End-to-end real-time inference pipeline",
    ],
    techStack: {
      Frameworks: ["PyTorch", "Transformers"],
      FineTuning: ["LoRA", "PEFT"],
      Tools: ["CUDA", "Scikit-learn"],
    },
    screenshots: [
      { title: "PEFT LoRA Configuration", url: "/images/LoRA/PEFT LoRA Configuration.png", placeholder: "Add metrics plot" },
      { title: "Model Architecture", url: "/images/LoRA/ModelArchDetails.png", placeholder: "Add diagram" },
      { title: "Accuracy Over Epochs", url: "/images/LoRA/accuracyOverEpochs.png", placeholder: "Add demo UI" },
      { title: "Training vs Validation Loss", url: "/images/LoRA/trainingVsValidationLoss.png", placeholder: "Add demo UI" },
    ],
  },
  {
    id: "custom-resnet",
    title: "Custom ResNet for Image Classification",
    description:
      "Designed a lightweight ResNet architecture optimized for accuracy, speed, and edge deployment.",
    tags: ["PyTorch", "TensorFlow", "Deep Learning"],
    image: null,
    link: "#",
    github: "https://github.com/samridhsri/DL-Project-1-Cifar10-Classification-Using-Resnet",
    detailedDescription:
      "A custom ResNet with Squeeze-and-Excitation modules and advanced augmentation strategies, achieving high accuracy with significantly fewer parameters than standard architectures.",
    features: [
      "Custom ResNet (4,4,4,3) architecture",
      "96.19% CIFAR-10 accuracy with 4.79M parameters",
      "Squeeze-and-Excitation modules",
      "MixCut augmentation strategy",
      "Mixed precision and cosine annealing",
    ],
    techStack: {
      Frameworks: ["PyTorch", "TensorFlow"],
      Training: ["Mixed Precision", "Cosine Annealing"],
      Visualization: ["TensorBoard"],
    },
    screenshots: [
      { title: "Epoch Vs Accuracy", url: "/images/resnetCiphar10/EpochVsAccuracy.png", placeholder: "Add architecture image" },
      { title: "Epoch Vs Loss", url: "/images/resnetCiphar10/EpochVsLoss.png", placeholder: "Add architecture image" },
    ],
  },
  {
    id: "muj-portal",
    title: "MUJ Convocation Portal",
    description:
      "Built and deployed a live convocation management platform used by over 2000 students at Manipal University Jaipur.",
    tags: ["Full Stack", "Web Development", "Databases"],
    image: "/images/mujconvocation/mainPage.png",
    link: "https://mujconvocation.in/",
    github: "#",
    detailedDescription:
      "A production web application handling student registration, seat allocation, and convocation logistics for Manipal University Jaipur.",
    features: [
      "Student registration and management",
      "Automated seat allocation",
      "Admin dashboards",
      "Email notifications",
      "Live production usage by 2000+ students",
    ],
    techStack: {
      Frontend: ["React.js"],
      Backend: ["Node.js", "Express.js"],
      Database: ["MongoDB"],
      Deployment: ["AWS"],
    },
    screenshots: [
      { title: "Main UI", url: "/images/mujconvocation/mainPage.png", placeholder: "Add UI screenshot" },
    ],
  },
];

export const experiences = [
  {
    company: "Course5 Intelligence (C5i)",
    role: "Machine Learning Intern",
    location: "Gurugram, India",
    period: "Feb 2024 \u2013 Jul 2024",
    description: [
      "Built scalable Python-based data and machine learning pipelines supporting NLP and LLM workloads in production environments",
      "Developed distributed Retrieval-Augmented Generation (RAG) systems using FAISS and transformer models (BERT, T5, BART), improving retrieval precision by 15%",
      "Designed and deployed containerized FastAPI services for ML inference, handling 50K+ monthly requests with low latency",
      "Optimized inference and data processing pipelines using ONNX, improving throughput and resource utilization",
    ],
  },
  {
    company: "Mahindra and Mahindra",
    role: "Software Engineering Intern",
    location: "Mumbai, India (Remote)",
    period: "Sep 2023 \u2013 Dec 2023",
    description: [
      "Engineered computer vision data pipelines using Python, C, and OpenCV to process large-scale image datasets for automated quality inspection",
      "Trained and evaluated deep learning models (YOLOv8, Mask R-CNN) across CPU and GPU environments",
      "Applied statistical analysis and machine learning techniques contributing to a 10% reduction in project costs",
      "Collaborated with cross-functional teams to integrate ML components into existing production systems",
    ],
  },
  {
    company: "NYU Phonathon",
    role: "Student Caller / Engagement Ambassador",
    location: "New York, NY",
    period: "Feb 2025 \u2013 Present",
    description: [
      "Engaged alumni and donors to strengthen university relations and raise funds for campus initiatives",
    ],
  },
];

export const skills = [
  {
    category: "Languages",
    items: "Python, Java, C++, JavaScript, SQL",
  },
  {
    category: "ML & AI",
    items:
      "PyTorch, TensorFlow, Scikit-learn, Hugging Face, ONNX, LangChain, RAG",
  },
  {
    category: "Data Engineering",
    items: "Apache Spark, Hadoop, Kafka, Airflow, Databricks, Ray",
  },
  {
    category: "MLOps & DevOps",
    items: "Docker, Kubernetes, Terraform, CI/CD, MLflow, FastAPI, Flask",
  },
  {
    category: "Web Development",
    items: "React.js, Next.js, Node.js, Tailwind CSS, REST APIs",
  },
  {
    category: "Cloud & Databases",
    items: "AWS (EC2, S3), MongoDB, PostgreSQL, MySQL",
  },
];

export const whatsNew = [
  {
    emoji: "\u270D\uFE0F",
    text: "Currently seeking: SDE or ML Engineering Full-time roles for 2026!",
  },
  {
    emoji: "\uD83E\uDDE0",
    text: "Building Triage - An AI powered braindump app that gives your braindump a structure and adds it to Notion",
  },
  {
    emoji: "\uD83D\uDC4B\uD83C\uDFFD",
    text: "Got a chance to visit the Capgemini office in NYC!",
  },
  {
    emoji: "\uD83E\uDDE0",
    text: "Built: Music Match! - A tool to visualise the listening algorithms of Spotify and how a new artist can fit in that algorithm.",
  },
  {
    emoji: "\uD83E\uDDE0",
    text: "Built: F1 Race Telemetry Analytics Platform with Kafka and Apache Spark",
  },
  {
    emoji: "\uD83C\uDF93",
    text: "Just finished: Big Data, Advanced Computer Vision and Systems Engineering at NYU Tandon \u2013 Spring 2025",
  }
];
