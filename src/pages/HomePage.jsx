import { useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/portfolio/HeroSection";
import EngineeringImpactSection from "../components/portfolio/EngineeringImpactSection";
import ProjectCard from "../components/portfolio/ProjectCard";
import { projects } from "../data/portfolioData";
import { LuChevronDown, LuChevronUp, LuFileText, LuLinkedin, LuMail } from "react-icons/lu";

// Define strict project priority
const PRIORITIZED_IDS = [
  "ai-research-intelligence-platform",
  "llm-inference-optimizer",
  "f1-telemetry",
  "triage-ai-productivity-agent",
  "plant-disease"
];

const HomePage = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  // Split projects into featured flagship/core and secondary systems
  const featuredProjects = PRIORITIZED_IDS
    .map(id => projects.find(p => p.id === id))
    .filter(Boolean);

  const secondaryProjects = projects.filter(
    p => !PRIORITIZED_IDS.includes(p.id)
  );

  return (
    <div className="max-w-4xl mx-auto space-y-16">
      {/* 1. Hero Section: Instant 3s Identity & Positioning */}
      <HeroSection />

      {/* 2. Engineering Impact Telemetry Section */}
      <EngineeringImpactSection />

      {/* 3. Featured Production Systems */}
      <section id="featured-projects" className="space-y-8 scroll-mt-24 pt-4">
        <div className="space-y-2 border-b pb-4" style={{ borderColor: 'var(--border-subtle)' }}>
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-primary)] font-semibold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)] shadow-[0_0_6px_var(--accent-primary)]" />
            <span>PRIMARY ARCHITECTURES</span>
            <span>&bull;</span>
            <span>{featuredProjects.length} CURATED SYSTEMS</span>
          </div>

          <h2
            className="font-display text-2xl sm:text-4xl tracking-wide text-[var(--text-primary)]"
          >
            FEATURED ENGINEERING WORK
          </h2>

          <p className="text-xs sm:text-sm font-mono max-w-2xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Selected agentic AI frameworks, low-latency inference optimizers, and distributed streaming pipelines built for production scale.
          </p>
        </div>

        {/* Featured Project Cards */}
        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* 4. More Projects & Research Section */}
        {secondaryProjects.length > 0 && (
          <div className="pt-4 border-t space-y-6" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h3 className="font-display text-xl sm:text-2xl text-[var(--text-primary)]">
                  More Systems &amp; Deep Learning Research
                </h3>
                <p className="text-xs font-mono text-[var(--text-tertiary)]">
                  {secondaryProjects.length} additional systems across parameter-efficient fine-tuning, computer vision, and geospatial AI.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowMoreProjects(!showMoreProjects)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium border transition-all duration-150 active:scale-95"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--accent-primary)'
                }}
                aria-expanded={showMoreProjects}
              >
                <span>{showMoreProjects ? "Hide Additional Projects" : `View ${secondaryProjects.length} More Projects`}</span>
                {showMoreProjects ? <LuChevronUp className="text-sm" /> : <LuChevronDown className="text-sm" />}
              </button>
            </div>

            {showMoreProjects && (
              <div className="space-y-6 pt-2 animate-in fade-in duration-200">
                {secondaryProjects.map((project, idx) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={featuredProjects.length + idx}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* 5. Recruiter Fast-Action Connect Banner */}
        <div className="p-6 sm:p-8 rounded-2xl border space-y-4 text-center mt-12" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', backdropFilter: 'blur(16px)', boxShadow: 'var(--glass-shadow)' }}>
          <div className="space-y-1.5 max-w-lg mx-auto">
            <h3 className="font-display text-2xl text-[var(--text-primary)]">
              Looking for an AI / ML Systems Engineer?
            </h3>
            <p className="text-xs sm:text-sm font-mono text-[var(--text-secondary)]">
              Graduating with MS in Computer Engineering from NYU (3.86 CGPA). Available for full-time AI Engineer, ML Engineer, and MLOps roles in 2026.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/resume"
              className="btn-shimmer-sheen inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-mono font-medium text-white shadow-lg"
              style={{ backgroundColor: 'var(--accent-primary)' }}
            >
              <LuFileText className="text-base" />
              <span>Inspect Full Interactive Resume</span>
            </Link>

            <a
              href="mailto:samridh@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono border transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
              style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
            >
              <LuMail className="text-base text-[var(--accent-primary)]" />
              <span>Get in Touch</span>
            </a>

            <a
              href="https://www.linkedin.com/in/samridh-srivastava-a6b888ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono border transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
              style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
            >
              <LuLinkedin className="text-base text-[var(--accent-primary)]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
