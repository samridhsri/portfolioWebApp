import React from "react";
import { impactMetrics } from "../../data/resumeData";
import { LuZap } from "react-icons/lu";

const ImpactTelemetry = ({ activeRole }) => {
  // Filter metrics relevant to active role or show top metrics if all
  const filteredMetrics = impactMetrics.filter(
    (m) => activeRole === "all" || m.roles.includes(activeRole)
  );

  return (
    <div className="p-5 sm:p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl shadow-[var(--glass-shadow)] space-y-4 print:hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LuZap className="text-[var(--accent-primary)] text-sm" />
          <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
            Key Numbers &amp; Metrics
          </h2>
        </div>
        <span className="text-[11px] font-mono text-[var(--text-tertiary)] hidden sm:inline">
          Highlights
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {filteredMetrics.slice(0, 4).map((metric) => (
          <div
            key={metric.id}
            className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-1.5 transition-all duration-150 hover:border-[var(--accent-primary)] hover:scale-[1.02]"
          >
            <div className="font-display text-2xl sm:text-3xl text-[var(--text-primary)] tracking-tight text-gradient">
              {metric.value}
            </div>
            <div className="text-xs font-mono font-semibold text-[var(--accent-secondary)]">
              {metric.label}
            </div>
            <p className="text-[11px] font-mono text-[var(--text-tertiary)] leading-tight">
              {metric.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactTelemetry;
