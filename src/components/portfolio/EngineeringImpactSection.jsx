import React from 'react';
import { LuZap, LuTrendingUp, LuCpu, LuActivity, LuUsers, LuCheckCircle } from 'react-icons/lu';

const impactHighlights = [
  {
    id: "vlm-latency",
    value: "200.8×",
    label: "Prefill Latency Cut",
    detail: "4-bit GGUF quantization, batch parallelization & early exit inference on CPU (FairwAI)",
    icon: LuZap,
    tag: "EDGE MULTIMODAL"
  },
  {
    id: "llm-speedup",
    value: "7.5×",
    label: "Inference Speedup",
    detail: "KV cache reuse, INT8 quantization & async batching on local LLMs (GPT-2 & TinyLlama)",
    icon: LuCpu,
    tag: "LLM OPTIMIZATION"
  },
  {
    id: "c5i-volume",
    value: "50K+",
    label: "Monthly ML Requests",
    detail: "Containerized FastAPI microservices & distributed RAG serving enterprise workloads (C5i)",
    icon: LuActivity,
    tag: "PRODUCTION RAG"
  },
  {
    id: "streaming-throughput",
    value: "10K+/s",
    label: "Real-Time Ingestion",
    detail: "Apache Kafka + Spark Structured Streaming with sub-second micro-batch processing (RaceFlux)",
    icon: LuTrendingUp,
    tag: "DISTRIBUTED DATA"
  },
  {
    id: "live-users",
    value: "2,000+",
    label: "Live Users Supported",
    detail: "Full-stack convocation logistics & automated seat allocation system deployed at MUJ",
    icon: LuUsers,
    tag: "SYSTEM RELIABILITY"
  },
  {
    id: "model-accuracy",
    value: "96.67%",
    label: "Decision Accuracy",
    detail: "Improved from 73.3% across 30-case regression suite with grounded negative boundaries",
    icon: LuCheckCircle,
    tag: "EVALUATION"
  }
];

const EngineeringImpactSection = () => {
  return (
    <section id="engineering-impact" className="space-y-6 pt-4 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b pb-4" style={{ borderColor: 'var(--border-subtle)' }}>
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-primary)] font-semibold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)] shadow-[0_0_6px_var(--accent-primary)]" />
            <span>MEASURED METRICS</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl text-[var(--text-primary)] tracking-wide">
            ENGINEERING IMPACT
          </h2>
        </div>
        <p className="text-xs font-mono text-[var(--text-tertiary)] max-w-sm">
          Verified production benchmarks, throughput optimizations, and scale metrics across projects.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
        {impactHighlights.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.id}
              className="p-4 sm:p-5 rounded-2xl border transition-all duration-200 hover:border-[var(--accent-primary)] flex flex-col justify-between space-y-3"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--border-color)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: 'var(--glass-shadow)'
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-semibold tracking-wider px-2 py-0.5 rounded-md border" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-subtle)', color: 'var(--accent-primary)' }}>
                  {metric.tag}
                </span>
                <Icon className="text-sm text-[var(--text-tertiary)]" aria-hidden="true" />
              </div>

              <div>
                <div className="font-display text-3xl sm:text-4xl tracking-tight text-[var(--text-primary)]">
                  {metric.value}
                </div>
                <div className="text-xs font-mono font-semibold text-[var(--accent-secondary)] mt-0.5">
                  {metric.label}
                </div>
              </div>

              <p className="text-[11px] sm:text-xs font-mono leading-relaxed line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                {metric.detail}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EngineeringImpactSection;
