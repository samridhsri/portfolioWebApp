import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  experiences,
  education,
  researchPublication,
} from "../../data/resumeData";
import {
  LuBriefcase,
  LuGraduationCap,
  LuChevronDown,
  LuChevronUp,
  LuMapPin,
  LuCalendar,
  LuExternalLink,
  LuBookOpen,
  LuSparkles,
} from "react-icons/lu";

const StoryJourneyView = ({ activeRole }) => {
  // State for expanded milestone drawers; default the first experience open
  const [expandedIds, setExpandedIds] = useState(["fairwai"]);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    const allExpIds = experiences.map((e) => e.id);
    const allEduIds = education.map((e) => e.id);
    setExpandedIds([...allExpIds, ...allEduIds]);
  };

  const collapseAll = () => {
    setExpandedIds([]);
  };

  return (
    <div className="space-y-10">
      {/* Interactive Controls Bar */}
      <div className="flex items-center justify-between flex-wrap gap-3 pb-2 border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-2">
          <LuSparkles className="text-[var(--accent-primary)] text-lg" />
          <h2 className="font-display text-2xl text-[var(--text-primary)]">
            Experience Timeline
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <button
            type="button"
            onClick={expandAll}
            className="px-2.5 py-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-colors"
          >
            Expand All
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="px-2.5 py-1 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-colors"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* SECTION 1: PROFESSIONAL EXPERIENCE CHAPTERS */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-[var(--accent-primary)] font-semibold">
          <LuBriefcase className="text-base" />
          <span>Work Experience</span>
        </div>

        <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[var(--accent-primary)] before:via-[var(--accent-secondary)] before:to-[var(--border-color)]">
          {experiences.map((exp) => {
            const isExpanded = expandedIds.includes(exp.id);
            const isRelevantToRole =
              activeRole === "all" || exp.roles.includes(activeRole);

            // Filter or prioritize bullets matching active role
            const highlightedBullets = exp.bullets.filter(
              (b) => activeRole === "all" || b.roles.includes(activeRole)
            );
            const displayBullets =
              highlightedBullets.length > 0 ? highlightedBullets : exp.bullets;

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline Pulsing Node */}
                <div
                  className={`absolute -left-[27px] sm:-left-[35px] top-6 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                    isExpanded
                      ? "border-[var(--accent-primary)] bg-[var(--accent-primary)] shadow-[0_0_12px_var(--accent-primary)] scale-110"
                      : "border-[var(--border-color)] bg-[var(--bg-primary)] group-hover:border-[var(--accent-primary)]"
                  }`}
                  aria-hidden="true"
                />

                {/* Milestone Card */}
                <div
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isRelevantToRole
                      ? "border-[var(--border-color)] bg-[var(--card-bg)] shadow-[var(--glass-shadow)]"
                      : "border-[var(--border-subtle)] bg-[var(--card-bg)] opacity-85"
                  } backdrop-blur-xl hover:border-[var(--accent-primary)]`}
                >
                  {/* Card Clickable Header */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(exp.id)}
                    className="w-full text-left p-5 sm:p-6 flex flex-col gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="space-y-1">
                        <span className="text-[11px] font-mono text-[var(--accent-primary)] font-semibold uppercase tracking-wider block">
                          {exp.chapter}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                          {exp.role}
                        </h3>
                        <div className="text-sm font-mono text-[var(--accent-secondary)] font-medium">
                          {exp.company}
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end text-xs font-mono text-[var(--text-tertiary)] shrink-0">
                        <span className="flex items-center gap-1.5 text-[var(--text-secondary)] font-medium">
                          <LuCalendar className="text-xs text-[var(--accent-primary)]" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 mt-0.5">
                          <LuMapPin className="text-xs" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Tagline Summary */}
                    <p className="text-xs sm:text-sm font-mono text-[var(--text-secondary)] leading-relaxed">
                      {exp.tagline}
                    </p>

                    {/* Metric Badges Ribbon */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <div className="flex flex-wrap gap-2">
                        {exp.metrics.map((badge, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)]"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>

                      <div className="inline-flex items-center gap-1 text-xs font-mono text-[var(--accent-primary)] font-medium ml-auto">
                        <span>{isExpanded ? "Hide Details" : "View Details"}</span>
                        {isExpanded ? (
                          <LuChevronUp className="text-sm" />
                        ) : (
                          <LuChevronDown className="text-sm" />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* Expandable In-Line Drawer */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[var(--border-subtle)] space-y-4 animate-in fade-in slide-in-from-top-1 duration-150">
                      {/* Deep-Dive Bullet Points */}
                      <ul className="space-y-2.5 text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                        {displayBullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)] shrink-0" />
                            <span>{bullet.text}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Chips */}
                      <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)]">
                        <span className="text-[11px] font-mono text-[var(--text-tertiary)] uppercase tracking-wider block">
                          Tech Stack:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded text-[11px] font-mono border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Linked Project Proof CTA (if available) */}
                      {exp.relatedProjectId && (
                        <div className="pt-2">
                          <Link
                            to={`/projects/${exp.relatedProjectId}`}
                            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[var(--accent-primary)] hover:underline"
                          >
                            <span>View related project details &rarr;</span>
                            <LuExternalLink className="text-xs" />
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: EDUCATION & RESEARCH CHAPTERS */}
      <div className="space-y-6 pt-6">
        <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-[var(--accent-primary)] font-semibold">
          <LuGraduationCap className="text-base" />
          <span>Education</span>
        </div>

        <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[var(--accent-primary)] before:to-[var(--border-color)]">
          {education.map((edu) => {
            const isExpanded = expandedIds.includes(edu.id);
            return (
              <div key={edu.id} className="relative group">
                {/* Timeline Node */}
                <div
                  className={`absolute -left-[27px] sm:-left-[35px] top-6 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                    isExpanded
                      ? "border-[var(--accent-primary)] bg-[var(--accent-primary)] shadow-[0_0_12px_var(--accent-primary)] scale-110"
                      : "border-[var(--border-color)] bg-[var(--bg-primary)] group-hover:border-[var(--accent-primary)]"
                  }`}
                  aria-hidden="true"
                />

                <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl shadow-[var(--glass-shadow)] hover:border-[var(--accent-primary)] transition-all duration-200 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleExpand(edu.id)}
                    className="w-full text-left p-5 sm:p-6 flex flex-col gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="space-y-1">
                        <span className="text-[11px] font-mono text-[var(--accent-primary)] font-semibold uppercase tracking-wider block">
                          {edu.chapter}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl text-[var(--text-primary)]">
                          {edu.degree}
                        </h3>
                        <div className="text-sm font-mono text-[var(--accent-secondary)] font-medium">
                          {edu.institution}
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end text-xs font-mono text-[var(--text-tertiary)] shrink-0">
                        <span className="text-[var(--text-secondary)] font-semibold">
                          {edu.gpa}
                        </span>
                        <span className="flex items-center gap-1.5 mt-0.5">
                          <LuCalendar className="text-xs text-[var(--accent-primary)]" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <LuMapPin className="text-xs" />
                          {edu.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex flex-wrap gap-2">
                        {edu.relevantCourses.map((c) => (
                          <span
                            key={c}
                            className="px-2 py-0.5 rounded text-[11px] font-mono border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs font-mono text-[var(--accent-primary)] font-medium inline-flex items-center gap-1">
                        <span>{isExpanded ? "Less" : "Highlights"}</span>
                        {isExpanded ? <LuChevronUp /> : <LuChevronDown />}
                      </span>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[var(--border-subtle)] space-y-3 animate-in fade-in slide-in-from-top-1 duration-150">
                      <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                        {edu.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)] shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 3: PEER-REVIEWED RESEARCH PUBLICATION */}
      <div className="p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl shadow-[var(--glass-shadow)] space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
            <LuBookOpen className="text-base" />
            <span>Peer-Reviewed Publication</span>
          </div>
          <span className="text-xs font-mono text-[var(--accent-emerald)] px-2.5 py-0.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)]">
            {researchPublication.indexing}
          </span>
        </div>

        <h3 className="font-display text-xl text-[var(--text-primary)]">
          {researchPublication.title}
        </h3>
        <p className="text-xs font-mono text-[var(--text-tertiary)]">
          {researchPublication.authors} &bull; {researchPublication.venue} ({researchPublication.year})
        </p>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
          {researchPublication.abstract}
        </p>
        <div className="pt-2">
          <a
            href={researchPublication.doiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-colors"
          >
            <span>View Publication on IEEE Xplore (DOI: {researchPublication.doi})</span>
            <LuExternalLink className="text-xs" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StoryJourneyView;
