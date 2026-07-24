import { useNavigate } from 'react-router-dom';
import { LuGraduationCap, LuArrowDown, LuFileText } from "react-icons/lu";
import TypingName from "./TypingName";
import RotatingText from "./RotatingText";

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
    <div className="text-center space-y-6 max-w-4xl mx-auto pt-2 pb-6">
      {/* Animoji with Dual Halo & Ambient Levitation */}
      <div className="flex justify-center relative pt-2">
        <div className="relative inline-block">
          <div className="avatar-halo-glow" aria-hidden="true" />
          <div className="avatar-halo-secondary" aria-hidden="true" />
          <img
            src="/images/aboutPage/frontPageAnimoji-removebg.png"
            alt="Samridh Srivastava avatar"
            className="avatar-levitate w-48 h-48 sm:w-60 sm:h-60 md:w-68 md:h-68 object-contain relative z-10 select-none pointer-events-none"
            style={{
              filter: 'drop-shadow(0 0 28px var(--accent-glow))'
            }}
          />
        </div>
      </div>

      {/* Name & Dynamic Role Typing */}
      <div className="space-y-3 sm:space-y-4">
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-tight tracking-tight title-glow-pulse">
          <TypingName />
        </h1>

        {/* Rotating Subtitle / Roles */}
        <div className="text-base sm:text-xl md:text-2xl min-h-[3rem] sm:min-h-[3.5rem] flex items-center justify-center px-4">
          <RotatingText />
        </div>
      </div>

      {/* Current Academic Status with Live Radar Beacon */}
      <div className="text-xs sm:text-sm font-mono flex justify-center">
        <div
          className="inline-flex items-center justify-center gap-2.5 px-4 py-2 rounded-full border backdrop-blur-md transition-all duration-200 hover:border-[var(--accent-primary)] hover:shadow-[0_0_20px_var(--accent-glow-subtle)]"
          style={{
            borderColor: 'var(--border-color)',
            backgroundColor: 'var(--card-bg)',
            color: 'var(--text-secondary)'
          }}
        >
          <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
            <span className="status-beacon-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-emerald)]" />
          </span>
          <LuGraduationCap className="text-base shrink-0" style={{ color: 'var(--accent-primary)' }} aria-hidden="true" />
          <span>
            MS Computer Engineering @ <span className="font-semibold text-[var(--text-primary)]">NYU</span>
          </span>
        </div>
      </div>

      {/* Primary CTAs */}
      <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center pt-2 max-w-md mx-auto sm:max-w-none">
        <button
          onClick={handleScrollToProjects}
          className="btn-shimmer-sheen w-full sm:w-auto px-7 py-3.5 rounded-full text-sm sm:text-base font-medium flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-transform duration-150 active:scale-95"
          style={{
            backgroundColor: 'var(--accent-primary)',
            color: '#ffffff',
            boxShadow: '0 0 24px var(--accent-glow)'
          }}
          aria-label="Scroll down to view projects"
        >
          <span>Explore Featured Work</span>
          <LuArrowDown className="text-base animate-subtle-bob" aria-hidden="true" />
        </button>
        <button
          onClick={() => navigate('/resume')}
          className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm sm:text-base font-medium font-mono border backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:border-[var(--accent-primary)] hover:bg-[var(--card-hover-bg)] active:scale-95 focus:outline-none focus-visible:ring-2"
          style={{
            backgroundColor: 'var(--card-bg)',
            color: 'var(--text-primary)',
            borderColor: 'var(--border-color)'
          }}
          aria-label="Navigate to Resume page"
        >
          <LuFileText className="text-base text-[var(--accent-primary)]" aria-hidden="true" />
          <span>Interactive Resume</span>
        </button>
      </div>

      {/* Credibility Architecture Tags */}
      <div className="pt-6 sm:pt-8 border-t max-w-2xl mx-auto" style={{ borderColor: 'var(--border-subtle)' }}>
        <p className="text-xs uppercase tracking-widest mb-3 font-mono font-medium" style={{ color: 'var(--text-tertiary)' }}>
          CORE SPECIALIZATIONS
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-xs font-mono">
          {["Agentic AI & RAG", "Distributed Systems", "LLM Optimization", "High-Throughput Web"].map(
            (item) => (
              <span
                key={item}
                className="pill-motion px-3 py-1.5 rounded-md border cursor-default"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-secondary)'
                }}
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
