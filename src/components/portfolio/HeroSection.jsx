import { useNavigate } from 'react-router-dom';
import {
  LuGraduationCap,
  LuArrowDown,
  LuFileText,
  LuGithub,
  LuLinkedin,
  LuShieldCheck
} from "react-icons/lu";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("featured-projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: window.innerHeight * 0.7,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="text-center space-y-6 max-w-4xl mx-auto pt-2 pb-4">
      {/* Animoji / Profile Representation */}
      <div className="flex justify-center relative pt-1">
        <div className="relative inline-block">
          <div className="avatar-halo-glow" aria-hidden="true" />
          <img
            src="/images/aboutPage/frontPageAnimoji-removebg.png"
            alt="Samridh Srivastava avatar"
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-56 md:h-56 object-contain relative z-10 select-none pointer-events-none transition-transform duration-300 hover:scale-105"
            style={{
              filter: 'drop-shadow(0 0 24px var(--accent-glow))'
            }}
          />
        </div>
      </div>

      {/* Instant Professional Identity — Zero Latency */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-[var(--border-color)] text-[var(--accent-primary)] bg-[var(--bg-secondary)] backdrop-blur-md">
          <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent-emerald)] opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-emerald)]" />
          </span>
          <span>AI / ML SYSTEMS ENGINEER</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-tight tracking-tight text-[var(--text-primary)]">
          Samridh Srivastava
        </h1>

        {/* Clear Positioning Statement */}
        <p className="text-base sm:text-xl md:text-2xl font-grotesk font-medium max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Building <span className="text-[var(--text-primary)] font-semibold">production-ready intelligent systems</span>, low-latency inference pipelines, and agentic workflows.
        </p>
      </div>

      {/* Core Specialization Pills */}
      <div className="flex flex-wrap justify-center gap-2 pt-1 max-w-2xl mx-auto">
        {[
          "LLMs",
          "AI Agents",
          "ML Systems",
          "Distributed Systems",
          "MLOps",
          "Inference Optimization"
        ].map((domain) => (
          <span
            key={domain}
            className="pill-motion px-3 py-1.5 rounded-lg border text-xs font-mono font-medium"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--border-color)',
              color: 'var(--accent-secondary)'
            }}
          >
            {domain}
          </span>
        ))}
      </div>

      {/* Candidate Qualification Badges */}
      <div className="flex flex-wrap justify-center items-center gap-2.5 pt-1 text-xs font-mono">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border backdrop-blur-md"
          style={{
            borderColor: 'var(--border-color)',
            backgroundColor: 'var(--card-bg)',
            color: 'var(--text-secondary)'
          }}
        >
          <LuGraduationCap className="text-sm shrink-0 text-[var(--accent-primary)]" aria-hidden="true" />
          <span>
            MS Computer Engineering @ <span className="font-semibold text-[var(--text-primary)]">NYU</span> (3.86 GPA)
          </span>
        </div>

        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border backdrop-blur-md"
          style={{
            borderColor: 'var(--border-color)',
            backgroundColor: 'var(--card-bg)',
            color: 'var(--text-secondary)'
          }}
        >
          <LuShieldCheck className="text-sm shrink-0 text-[var(--accent-emerald)]" aria-hidden="true" />
          <span>
            U.S. Work Authorized <span className="text-[var(--text-tertiary)]">(OPT / STEM OPT · 36 Mo)</span>
          </span>
        </div>
      </div>

      {/* Immediate Recruiter CTAs (1-Click Access) */}
      <div className="flex flex-wrap gap-3 justify-center items-center pt-3 max-w-xl mx-auto">
        <button
          onClick={handleScrollToProjects}
          className="btn-shimmer-sheen px-6 py-3 rounded-full text-xs sm:text-sm font-medium font-mono flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 active:scale-95 transition-transform"
          style={{
            backgroundColor: 'var(--accent-primary)',
            color: '#ffffff',
            boxShadow: '0 0 20px var(--accent-glow)'
          }}
          aria-label="Scroll down to view featured systems"
        >
          <span>View Featured Systems</span>
          <LuArrowDown className="text-sm" aria-hidden="true" />
        </button>

        <button
          onClick={() => navigate('/resume')}
          className="px-5 py-3 rounded-full text-xs sm:text-sm font-medium font-mono border backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer transition-all duration-150 hover:border-[var(--accent-primary)] hover:bg-[var(--card-hover-bg)] active:scale-95 focus:outline-none focus-visible:ring-2"
          style={{
            backgroundColor: 'var(--card-bg)',
            color: 'var(--text-primary)',
            borderColor: 'var(--border-color)'
          }}
          aria-label="Navigate to Resume and ATS page"
        >
          <LuFileText className="text-base text-[var(--accent-primary)]" aria-hidden="true" />
          <span>Resume &amp; ATS</span>
        </button>

        <a
          href="https://github.com/samridhsri"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 rounded-full text-xs sm:text-sm font-mono border backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer transition-all duration-150 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] active:scale-95 focus:outline-none focus-visible:ring-2"
          style={{
            backgroundColor: 'var(--card-bg)',
            color: 'var(--text-secondary)',
            borderColor: 'var(--border-color)'
          }}
          aria-label="Samridh Srivastava GitHub profile"
        >
          <LuGithub className="text-base" aria-hidden="true" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/samridh-srivastava-a6b888ba/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 rounded-full text-xs sm:text-sm font-mono border backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer transition-all duration-150 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] active:scale-95 focus:outline-none focus-visible:ring-2"
          style={{
            backgroundColor: 'var(--card-bg)',
            color: 'var(--text-secondary)',
            borderColor: 'var(--border-color)'
          }}
          aria-label="Samridh Srivastava LinkedIn profile"
        >
          <LuLinkedin className="text-base" aria-hidden="true" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
