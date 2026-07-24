import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuArrowRight, LuGithub, LuExternalLink } from 'react-icons/lu';

const ProjectCard = ({ project, index = 0 }) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleCardClick = () => {
    navigate(`/projects/${project.id}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <article
      ref={cardRef}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
      className={`scroll-reveal-card ${isInView ? 'in-view' : ''} project-card-interactive group p-5 sm:p-7 rounded-2xl space-y-4 cursor-pointer border border-[var(--border-color)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]`}
      style={{
        backgroundColor: 'var(--card-bg)',
        color: 'var(--text-primary)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: 'var(--glass-shadow)',
        transitionDelay: isInView ? `${(index % 3) * 0.08}s` : '0s'
      }}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
    >
      {/* Top Bar: System ID Index & Status */}
      <div className="flex items-center justify-between text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-wider text-[var(--accent-primary)]">
            {`// SYS-0${index + 1}`}
          </span>
          <span>&bull;</span>
          <span className="tracking-wide uppercase">PRODUCTION PIPELINE</span>
        </div>
        <div className="flex items-center gap-1.5 text-[var(--accent-emerald)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-emerald)] shadow-[0_0_6px_var(--accent-emerald)] animate-pulse" />
          <span className="text-[11px] font-medium tracking-wider">DEPLOYED</span>
        </div>
      </div>

      {/* Image Container with Zoom Effect */}
      {project.image && (
        <div className="w-full h-48 sm:h-60 overflow-hidden rounded-xl relative bg-black/30 border border-[var(--border-subtle)]">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>
      )}

      {/* Header: Title & Quick Links */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-3 pt-1">
        <h3 className="font-display text-2xl sm:text-3xl leading-snug group-hover:text-[var(--accent-primary)] transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
          {project.title}
        </h3>

        {/* Quick Action Icons */}
        <div className="flex items-center gap-2 self-end sm:self-start shrink-0">
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border transition-all duration-150 ease-out hover:scale-110 active:scale-95 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] focus:outline-none focus-visible:ring-2"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)'
              }}
              title="View Source on GitHub"
              aria-label={`View ${project.title} source code on GitHub`}
              onClick={(e) => e.stopPropagation()}
            >
              <LuGithub className="text-lg" aria-hidden="true" />
            </a>
          )}
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border transition-all duration-150 ease-out hover:scale-110 active:scale-95 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] focus:outline-none focus-visible:ring-2"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)'
              }}
              title="Open Live Project"
              aria-label={`Open ${project.title} live demo`}
              onClick={(e) => e.stopPropagation()}
            >
              <LuExternalLink className="text-lg" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base leading-relaxed line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap items-center pt-1">
        {project.tags.slice(0, 4).map((tag, i) => (
          <span
            key={i}
            className="pill-motion px-2.5 py-1 text-xs font-mono rounded-md border"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-secondary)'
            }}
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span
            className="pill-motion px-2 py-0.5 text-xs font-mono rounded-md border"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-tertiary)'
            }}
          >
            +{project.tags.length - 4}
          </span>
        )}
      </div>

      {/* View Details CTA */}
      <div className="pt-3 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-subtle)' }}>
        <span className="text-xs font-mono text-[var(--text-tertiary)] group-hover:text-[var(--text-secondary)] transition-colors">
          Click card to inspect architecture
        </span>
        <button
          className="btn-shimmer-sheen inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono font-medium cursor-pointer focus:outline-none focus-visible:ring-2 active:scale-95"
          style={{
            backgroundColor: 'var(--accent-primary)',
            color: '#ffffff',
            boxShadow: '0 0 16px var(--accent-glow)'
          }}
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/projects/${project.id}`);
          }}
          aria-label={`View full details for ${project.title}`}
        >
          <span>View Deep Dive</span>
          <LuArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
