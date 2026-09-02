import React, { useState, useRef, useEffect } from "react";
import {
  LuSparkles,
  LuFileText,
  LuDownload,
  LuPrinter,
  LuLinkedin,
  LuGithub,
  LuMail,
  LuMapPin,
  LuShieldCheck,
  LuChevronDown,
  LuExternalLink
} from "react-icons/lu";
import { resumeProfile, roleTracks } from "../../data/resumeData";

const ResumeHeader = ({
  activeRole,
  setActiveRole,
  viewMode,
  setViewMode,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentRoleData = roleTracks.find((r) => r.id === activeRole) || roleTracks[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="space-y-6 pt-2 pb-4 relative z-40">
      {/* Top Banner / Identity Card */}
      <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl shadow-[var(--glass-shadow)] transition-all duration-300 relative z-40">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-3 flex-1">
            {/* Work Auth & Academic Status Badge */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-[var(--border-color)] text-[var(--accent-primary)] bg-[var(--bg-secondary)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-emerald)] animate-pulse" />
                <span>NYU MS CE // CGPA 3.86</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border border-[var(--border-color)] text-[var(--text-secondary)] bg-[var(--bg-secondary)]">
                <LuShieldCheck className="text-[var(--accent-emerald)]" />
                <span>OPT / STEM OPT (36 Mos Authorization)</span>
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] tracking-tight">
              {resumeProfile.name}
            </h1>

            <p className="text-sm sm:text-base font-mono text-[var(--accent-secondary)] leading-relaxed max-w-3xl">
              {currentRoleData.title}
            </p>

            {/* Contact & Profiles Meta Bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-1 text-xs sm:text-sm font-mono text-[var(--text-secondary)]">
              <span className="flex items-center gap-1.5">
                <LuMapPin className="text-[var(--accent-primary)]" />
                <span>{resumeProfile.location}</span>
              </span>
              <a
                href={`mailto:${resumeProfile.email}`}
                className="flex items-center gap-1.5 hover:text-[var(--accent-primary)] transition-colors focus:outline-none focus-visible:underline"
              >
                <LuMail className="text-[var(--accent-primary)]" />
                <span>{resumeProfile.email}</span>
              </a>
              <a
                href={resumeProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[var(--accent-primary)] transition-colors focus:outline-none focus-visible:underline"
              >
                <LuLinkedin className="text-[var(--accent-primary)]" />
                <span>LinkedIn</span>
              </a>
              <a
                href={resumeProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[var(--accent-primary)] transition-colors focus:outline-none focus-visible:underline"
              >
                <LuGithub className="text-[var(--accent-primary)]" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Mode Switcher & Download CTA Cluster */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3 shrink-0 print:hidden">
            {/* Dual-Mode Pill Switcher */}
            <div className="p-1 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] flex items-center shadow-inner self-stretch sm:self-auto">
              <button
                type="button"
                onClick={() => setViewMode("story")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-mono font-medium transition-all duration-150 ${
                  viewMode === "story"
                    ? "bg-[var(--accent-primary)] text-white shadow-md font-semibold"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
                aria-pressed={viewMode === "story"}
              >
                <LuSparkles className="text-sm" />
                <span>Story Journey</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("ats")}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-mono font-medium transition-all duration-150 ${
                  viewMode === "ats"
                    ? "bg-[var(--accent-primary)] text-white shadow-md font-semibold"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
                aria-pressed={viewMode === "ats"}
              >
                <LuFileText className="text-sm" />
                <span>Classic ATS</span>
              </button>
            </div>

            {/* PDF Dropdown & Print Buttons */}
            <div className="flex items-center gap-2 self-stretch sm:self-auto">
              {/* PDF Dropdown Button */}
              <div className="relative flex-1 sm:flex-initial" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:bg-[var(--card-hover-bg)] transition-all duration-150 active:scale-95 shadow-sm"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  <LuDownload className="text-[var(--accent-primary)]" />
                  <span>Download PDF</span>
                  <LuChevronDown
                    className={`transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-72 rounded-xl border border-[var(--border-color)] shadow-2xl z-50 p-2 space-y-1 animate-in fade-in duration-150"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      boxShadow: '0 16px 48px rgba(0, 0, 0, 0.75), 0 0 0 1px var(--border-color)',
                      opacity: 1,
                    }}
                  >
                    <div className="px-3 py-1.5 text-[11px] font-mono text-[var(--text-tertiary)] uppercase tracking-wider border-b border-[var(--border-subtle)] pb-2 mb-1">
                      Select Tailored Resume PDF
                    </div>
                    {roleTracks.map((role) => (
                      <a
                        key={role.id}
                        href={role.pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex items-center justify-between p-2.5 rounded-lg text-xs font-mono transition-colors ${
                          activeRole === role.id
                            ? "bg-[var(--card-hover-bg)] text-[var(--accent-primary)] font-semibold border border-[var(--accent-primary)]/30"
                            : "text-[var(--text-secondary)] hover:bg-[var(--card-hover-bg)] hover:text-[var(--text-primary)]"
                        }`}
                        onClick={() => setDropdownOpen(false)}
                      >
                        <div className="flex flex-col">
                          <span>{role.label}</span>
                          <span className="text-[10px] text-[var(--text-tertiary)]">
                            {role.badge}
                          </span>
                        </div>
                        <LuExternalLink className="text-xs shrink-0 opacity-75" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Print Action */}
              <button
                type="button"
                onClick={handlePrint}
                className="p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all duration-150 active:scale-95"
                title="Print ATS Version (Ctrl+P)"
                aria-label="Print ATS Version"
              >
                <LuPrinter className="text-base" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ResumeHeader;
