import { useNavigate } from 'react-router-dom';
import TypingName from "./TypingName";
import RotatingText from "./RotatingText";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center space-y-6 max-w-4xl mx-auto">
      {/* Animoji */}
      <div className="flex justify-center">
        <img
          src="/images/aboutPage/frontPageAnimoji-removebg.png"
          alt="Samridh's Animoji"
          className="w-64 h-64 md:w-80 md:h-80 object-contain"
          style={{
            filter: 'drop-shadow(0 0 20px var(--accent-glow))'
          }}
        />
      </div>

      {/* Name */}
      <div className="space-y-6">
        <h1 className="bakbak text-6xl md:text-7xl leading-tight">
          <TypingName />
        </h1>

        {/* Rotating subtitle */}
        <div className="text-xl md:text-2xl min-h-16 flex items-center justify-center px-4">
          <RotatingText />
        </div>
      </div>

      {/* Current Status */}
      <div className="text-lg space-y-2" style={{ color: 'var(--text-secondary)' }}>
        <p className="flex items-center justify-center gap-2">
          <span style={{ color: 'var(--accent-primary)' }}>&#x1F393;</span>
          <span>MS Computer Engineering @ <span style={{ color: 'var(--accent-primary)' }}>NYU</span></span>
          {/* <span style={{ color: 'var(--accent-primary)' }}>&bull;</span> */}
          {/* <span style={{ color: 'var(--accent-primary)' }}>3.83 GPA</span> */}
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
        <button
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
          className="px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-lg"
          style={{
            backgroundColor: 'var(--accent-primary)',
            color: 'var(--text-primary)',
            boxShadow: '0 0 20px var(--accent-glow)'
          }}
        >
          View My Work &rarr;
        </button>
        <button
          onClick={() => navigate('/resume')}
          className="px-8 py-4 rounded-lg text-lg font-medium transition-all border"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            borderColor: 'var(--border-color)'
          }}
          onMouseEnter={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
          onMouseLeave={(e) => e.target.style.borderColor = 'var(--border-color)'}
        >
          Download Resume
        </button>
      </div>

      {/* Credibility Signals */}
      <div className="pt-8 border-t" style={{ borderColor: 'var(--border-color)' }}>
        <p className="text-sm mb-3" style={{ color: 'var(--text-tertiary)' }}>Previously worked on:</p>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {["ML systems", "RAG pipelines", "Full-stack tools", "Data products"].map(
            (item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full"
                style={{
                  backgroundColor: 'var(--card-bg)',
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
