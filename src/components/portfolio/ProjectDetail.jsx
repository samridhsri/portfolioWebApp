import { useNavigate } from 'react-router-dom';
import { LuArrowLeft, LuGithub, LuExternalLink, LuCheck, LuLayers, LuSparkles } from 'react-icons/lu';

const ProjectDetail = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto space-y-10 py-4">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] text-xs sm:text-sm font-mono transition-all duration-150 ease-out hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] focus:outline-none focus-visible:ring-2 active:scale-95"
        style={{ color: 'var(--text-secondary)' }}
      >
        <LuArrowLeft className="text-base" aria-hidden="true" />
        <span>Back to Projects</span>
      </button>

      {/* Project Header */}
      <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl shadow-[var(--glass-shadow)] space-y-5">
        <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent-primary)]">
          <span className="font-semibold">{"// ARCHITECTURE SPECIFICATION"}</span>
          <span>&bull;</span>
          <span className="text-[var(--text-tertiary)] uppercase">FULL DIVE</span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl text-[var(--text-primary)] leading-tight">
          {project.title}
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          {project.detailedDescription}
        </p>

        <div className="flex gap-3 flex-wrap pt-2">
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border text-xs sm:text-sm font-mono transition-all duration-150 ease-out hover:scale-105 active:scale-95 hover:border-[var(--accent-primary)] focus:outline-none focus-visible:ring-2"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-primary)'
              }}
            >
              <LuGithub className="text-lg" aria-hidden="true" />
              <span>Inspect Source Code</span>
            </a>
          )}
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer-sheen inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-mono font-medium focus:outline-none focus-visible:ring-2 active:scale-95"
              style={{
                backgroundColor: 'var(--accent-primary)',
                boxShadow: '0 0 20px var(--accent-glow)',
                color: '#ffffff'
              }}
            >
              <span>Launch Live System</span>
              <LuExternalLink className="text-base" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {/* Key Features */}
      <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl shadow-[var(--glass-shadow)] space-y-4">
        <h3 className="font-display text-2xl text-[var(--text-primary)] flex items-center gap-2.5">
          <LuSparkles className="text-[var(--accent-primary)] text-xl" aria-hidden="true" />
          <span>Key System Capabilities</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
          {project.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
              <span className="p-1 rounded-md bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] mt-0.5">
                <LuCheck className="text-xs" aria-hidden="true" />
              </span>
              <span className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl shadow-[var(--glass-shadow)] space-y-5">
        <h3 className="font-display text-2xl text-[var(--text-primary)] flex items-center gap-2.5">
          <LuLayers className="text-[var(--accent-primary)] text-xl" aria-hidden="true" />
          <span>Technology &amp; Architecture Stack</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
          {Object.entries(project.techStack).map(
            ([category, technologies], index) => (
              <div key={index} className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-2.5">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs font-mono border"
                      style={{
                        backgroundColor: 'var(--card-bg)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Screenshots */}
      {project.screenshots && project.screenshots.length > 0 && (
        <div className="p-6 sm:p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl shadow-[var(--glass-shadow)] space-y-5">
          <h3 className="font-display text-2xl text-[var(--text-primary)]">System Architecture &amp; Interfaces</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className="space-y-2">
                {screenshot.url ? (
                  <div className="w-full h-56 sm:h-64 overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-black/40">
                    <img
                      src={screenshot.url}
                      alt={screenshot.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                ) : (
                  <div className="project-image-placeholder h-56 sm:h-64 rounded-xl border border-[var(--border-subtle)]">
                    <span>{screenshot.placeholder}</span>
                  </div>
                )}
                <p className="text-center text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>
                  {screenshot.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;

