import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuArrowRight, LuGithub, LuExternalLink } from 'react-icons/lu';

// Metadata enhancements for key projects
const projectMetadata = {
  "ai-research-intelligence-platform": {
    isFlagship: true,
    tier: "FLAGSHIP // AGENTIC AI & RAG",
    highlightMetric: "LangGraph Multi-Agent Orchestration · Cohere Rerank · pgvector",
    pipeline: ["LangGraph Multi-Agent", "pgvector Semantic Search", "Cohere Rerank", "Redis Cache", "FastAPI Service"],
  },
  "llm-inference-optimizer": {
    isFlagship: true,
    tier: "FLAGSHIP // ML SYSTEMS & INFERENCE",
    highlightMetric: "⚡ 7.5× Throughput Improvement · 40%+ Memory Reduction",
    pipeline: ["KV Cache Reuse (3.15×)", "INT8 Quantization (-40% RAM)", "Async Batching (176+ tok/s)", "ONNX / Numba JIT"],
  },
  "f1-telemetry": {
    isFlagship: false,
    tier: "CORE // REAL-TIME DISTRIBUTED SYSTEMS",
    highlightMetric: "⚡ 10K+ events/sec · Sub-5s Micro-Batch Stream Processing",
    pipeline: ["FastF1 Telemetry Ingestion", "Apache Kafka", "Spark Structured Streaming", "MLflow Predictions"],
  },
  "triage-ai-productivity-agent": {
    isFlagship: false,
    tier: "CORE // AI PRODUCTIVITY AGENT",
    highlightMetric: "100% Deterministic JSON Schema · Automated Notion Routing",
    pipeline: ["Raycast Capture UI", "Gemini 2.5 Flash Parsing", "Structured Schema", "Notion SDK Sync"],
  },
  "plant-disease": {
    isFlagship: false,
    tier: "CORE // DISTRIBUTED MLOPS & SERVING",
    highlightMetric: "<150ms Inference Latency · Distributed Ray Training",
    pipeline: ["Ray Distributed Cluster", "ONNX + INT8 Quantization", "FastAPI Serving", "Prometheus / Grafana"],
  },
  "music-mindscape": {
    isFlagship: false,
    tier: "SYSTEM // AUDIO GRAPH & AI",
    highlightMetric: "9 Auto-Clustered Sonic Zones · Gemini Flash AI Insight",
    pipeline: ["Spotify Web API", "Force-Directed D3 Graph", "Gemini 2.5 Flash Clustering"],
  },
  "urban-sustainability": {
    isFlagship: false,
    tier: "SYSTEM // GEOSPATIAL AI",
    highlightMetric: "10+ Geospatial Metrics · Gemini API Multi-Factor Scoring",
    pipeline: ["OpenStreetMap GeoData", "Leaflet Visualizer", "Gemini Spatial Analysis"],
  },
  "roberta-lora": {
    isFlagship: false,
    tier: "RESEARCH // PARAMETER-EFFICIENT FT",
    highlightMetric: "92.8% Accuracy · Only 0.69% Model Parameters Trained",
    pipeline: ["RoBERTa-base", "LoRA PEFT Adapters (864K params)", "PyTorch Training", "CUDA Acceleration"],
  },
  "custom-resnet": {
    isFlagship: false,
    tier: "RESEARCH // DEEP LEARNING ARCHITECTURE",
    highlightMetric: "96.19% CIFAR-10 Accuracy with 4.79M Parameters",
    pipeline: ["Custom ResNet (4,4,4,3)", "Squeeze-and-Excitation", "MixCut Augmentation", "Mixed Precision"],
  },
  "muj-portal": {
    isFlagship: false,
    tier: "PRODUCTION // FULL-STACK SYSTEM",
    highlightMetric: "2,000+ Live Student Users in Production",
    pipeline: ["React Frontend", "Node.js / Express API", "MongoDB", "AWS Deployment"],
  }
};

const ProjectCard = ({ project, index = 0, isCompact = false }) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const meta = projectMetadata[project.id] || {
    isFlagship: false,
    tier: "PRODUCTION SYSTEM",
    highlightMetric: null,
    pipeline: null
  };

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleCardClick = () => {
    navigate(`/projects/${project.id}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <article
      ref={cardRef}
      tabIndex={0}
      role="button"
      aria-label={`View architectural details for ${project.title}`}
      className={`scroll-reveal-card ${isInView ? 'in-view' : ''} project-card-interactive group p-5 sm:p-7 rounded-2xl space-y-4 cursor-pointer border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${
        meta.isFlagship
          ? 'border-[var(--accent-primary)]/40 hover:border-[var(--accent-primary)] bg-[var(--card-bg)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'border-[var(--border-color)] hover:border-[var(--accent-primary)] bg-[var(--card-bg)]'
      }`}
      style={{
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: 'var(--glass-shadow)',
        transitionDelay: isInView ? `${(index % 3) * 0.06}s` : '0s'
      }}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
    >
      {/* Top Bar: System ID Index, Tier & Status */}
      <div className="flex items-center justify-between text-xs font-mono flex-wrap gap-2" style={{ color: 'var(--text-tertiary)' }}>
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-wider text-[var(--accent-primary)]">
            {`// SYS-0${index + 1}`}
          </span>
          <span>&bull;</span>
          <span className={`tracking-wide font-medium ${meta.isFlagship ? 'text-[var(--accent-secondary)]' : 'text-[var(--text-tertiary)]'}`}>
            {meta.tier}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {meta.isFlagship && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] border border-[var(--accent-primary)]/30">
              FLAGSHIP
            </span>
          )}
          <div className="flex items-center gap-1.5 text-[var(--accent-emerald)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-emerald)] shadow-[0_0_6px_var(--accent-emerald)]" />
            <span className="text-[11px] font-medium tracking-wider">DEPLOYED</span>
          </div>
        </div>
      </div>

      {/* Header: Title & Quick Links */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-3 pt-0.5">
        <div className="space-y-1">
          <h3 className="font-display text-2xl sm:text-3xl leading-snug group-hover:text-[var(--accent-primary)] transition-colors duration-150" style={{ color: 'var(--text-primary)' }}>
            {project.title}
          </h3>

          {/* Prominently Highlighted Performance / Value Metric */}
          {meta.highlightMetric && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold border" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)', color: 'var(--accent-cyan)' }}>
              <span>{meta.highlightMetric}</span>
            </div>
          )}
        </div>

        {/* Action Toolbar */}
        <div className="flex items-center gap-2 self-end sm:self-start shrink-0">
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border transition-all duration-150 ease-out hover:scale-105 active:scale-95 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] focus:outline-none focus-visible:ring-2"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)'
              }}
              title="View Source on GitHub"
              aria-label={`View ${project.title} source code on GitHub`}
              onClick={(e) => e.stopPropagation()}
            >
              <LuGithub className="text-lg" aria-hidden="true" />
            </a>
          )}
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border transition-all duration-150 ease-out hover:scale-105 active:scale-95 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] focus:outline-none focus-visible:ring-2"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)'
              }}
              title="Open Live Project"
              aria-label={`Open ${project.title} live demo`}
              onClick={(e) => e.stopPropagation()}
            >
              <LuExternalLink className="text-lg" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
        {project.description}
      </p>

      {/* Architecture / Pipeline Flow for Flagship/Core Projects */}
      {meta.pipeline && meta.pipeline.length > 0 && (
        <div className="space-y-1.5 pt-1">
          <span className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-wider block">
            System Architecture Flow:
          </span>
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
            {meta.pipeline.map((step, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span
                  className="px-2.5 py-1 rounded-md border text-[11px]"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                >
                  {step}
                </span>
                {idx < meta.pipeline.length - 1 && (
                  <span className="text-[var(--text-tertiary)] text-xs font-bold">&rarr;</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      <div className="flex gap-2 flex-wrap items-center pt-1">
        {project.tags.slice(0, 6).map((tag, i) => (
          <span
            key={i}
            className="pill-motion px-2.5 py-1 text-xs font-mono rounded-md border"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-secondary)'
            }}
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 6 && (
          <span
            className="pill-motion px-2 py-0.5 text-xs font-mono rounded-md border"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-tertiary)'
            }}
          >
            +{project.tags.length - 6}
          </span>
        )}
      </div>

      {/* View Details CTA */}
      <div className="pt-3 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
        <span className="text-xs font-mono text-[var(--text-tertiary)] group-hover:text-[var(--text-secondary)] transition-colors">
          Click card to inspect architecture &amp; technical specs
        </span>
        <button
          className="btn-shimmer-sheen inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono font-medium cursor-pointer focus:outline-none focus-visible:ring-2 active:scale-95 transition-transform"
          style={{
            backgroundColor: 'var(--accent-primary)',
            color: '#ffffff',
            boxShadow: '0 0 16px var(--accent-glow)'
          }}
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/projects/${project.id}`);
          }}
          aria-label={`View full details for ${project.title}`}
        >
          <span>Deep Dive Architecture</span>
          <LuArrowRight className="text-sm transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
