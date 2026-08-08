import React from "react";
import { categorizedSkills } from "../../data/resumeData";
import {
  LuCode,
  LuCpu,
  LuDatabase,
  LuCloud,
  LuGauge,
  LuBarChart2,
  LuLayers
} from "react-icons/lu";

const getCategoryIcon = (iconName) => {
  switch (iconName) {
    case "code":
      return <LuCode className="text-base" />;
    case "cpu":
      return <LuCpu className="text-base" />;
    case "database":
      return <LuDatabase className="text-base" />;
    case "cloud":
      return <LuCloud className="text-base" />;
    case "gauge":
      return <LuGauge className="text-base" />;
    case "chart":
      return <LuBarChart2 className="text-base" />;
    default:
      return <LuLayers className="text-base" />;
  }
};

const SkillMatrix = ({ activeRole }) => {
  return (
    <div className="space-y-6 pt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LuLayers className="text-[var(--accent-primary)] text-lg" />
          <h2 className="font-display text-2xl text-[var(--text-primary)]">
            Skills by Domain
          </h2>
        </div>
        <span className="text-xs font-mono text-[var(--text-tertiary)] hidden sm:inline">
          Organized by Domain
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categorizedSkills.map((cat) => {
          const isPrimaryToRole =
            activeRole === "all" || cat.primaryRoles.includes(activeRole);

          return (
            <div
              key={cat.category}
              className={`p-5 rounded-2xl border transition-all duration-200 ${
                isPrimaryToRole
                  ? "border-[var(--border-color)] bg-[var(--card-bg)] shadow-[var(--glass-shadow)]"
                  : "border-[var(--border-subtle)] bg-[var(--card-bg)] opacity-75"
              } backdrop-blur-xl hover:border-[var(--accent-primary)] hover:opacity-100 flex flex-col justify-between space-y-4`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[var(--accent-primary)]">
                    {getCategoryIcon(cat.icon)}
                    <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                      {cat.category}
                    </h3>
                  </div>
                  {isPrimaryToRole && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-emerald)] animate-pulse" />
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillMatrix;
