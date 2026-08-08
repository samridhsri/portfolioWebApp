import React from "react";
import { roleTracks } from "../../data/resumeData";
import {
  LuSparkles,
  LuBot,
  LuCpu,
  LuCode,
  LuDatabase,
  LuBarChart2
} from "react-icons/lu";

const getRoleIcon = (iconName) => {
  switch (iconName) {
    case "bot":
      return <LuBot className="text-base" />;
    case "cpu":
      return <LuCpu className="text-base" />;
    case "code":
      return <LuCode className="text-base" />;
    case "database":
      return <LuDatabase className="text-base" />;
    case "chart":
      return <LuBarChart2 className="text-base" />;
    case "sparkles":
    default:
      return <LuSparkles className="text-base" />;
  }
};

const RoleTrackSelector = ({ activeRole, setActiveRole }) => {
  return (
    <div className="space-y-3 print:hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
          <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
            Filter by Role Track
          </h2>
        </div>
        <span className="text-xs font-mono text-[var(--text-tertiary)] hidden sm:inline">
          5 Tailored Tracks
        </span>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[var(--border-color)]">
        {roleTracks.map((track) => {
          const isActive = activeRole === track.id;
          return (
            <button
              key={track.id}
              type="button"
              onClick={() => setActiveRole(track.id)}
              className={`group flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-xs font-mono whitespace-nowrap transition-all duration-150 active:scale-95 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${
                isActive
                  ? "border-[var(--accent-primary)] bg-[var(--card-hover-bg)] text-[var(--text-primary)] shadow-[0_0_15px_var(--accent-glow-subtle)]"
                  : "border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]"
              }`}
              aria-pressed={isActive}
            >
              <span
                className={`transition-colors ${
                  isActive ? "text-[var(--accent-primary)]" : "text-[var(--text-tertiary)] group-hover:text-[var(--accent-primary)]"
                }`}
              >
                {getRoleIcon(track.icon)}
              </span>
              <span className="font-medium">{track.label}</span>
              <span
                className={`hidden md:inline text-[10px] px-1.5 py-0.5 rounded-full border transition-colors ${
                  isActive
                    ? "border-[var(--accent-primary)] bg-[var(--bg-secondary)] text-[var(--accent-primary)]"
                    : "border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-tertiary)]"
                }`}
              >
                {track.badge}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RoleTrackSelector;
