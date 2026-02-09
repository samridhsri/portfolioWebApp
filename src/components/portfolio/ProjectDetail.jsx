import { useNavigate } from 'react-router-dom';

const ProjectDetail = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 transition-colors"
        style={{ color: 'var(--text-secondary)' }}
        onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
        onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
      >
        <span>&larr;</span> Back to Projects
      </button>

      {/* Project Header */}
      <div className="space-y-4">
        <h1 className="bakbak text-5xl" style={{ color: 'var(--text-primary)' }}>{project.title}</h1>
        <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>{project.detailedDescription}</p>
        <div className="flex gap-4 flex-wrap">
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--accent-primary)',
                border: '1px solid',
                color: 'var(--text-primary)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--card-hover-bg)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          )}
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all"
              style={{
                backgroundColor: 'var(--accent-primary)',
                boxShadow: '0 0 20px var(--accent-glow)',
                color: 'var(--text-primary)'
              }}
            >
              Live Demo &rarr;
            </a>
          )}
        </div>
      </div>

      {/* Key Features */}
      <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--card-bg)' }}>
        <h3 className="bakbak text-2xl mb-4" style={{ color: 'var(--accent-primary)' }}>Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {project.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="mt-1" style={{ color: 'var(--accent-primary)' }}>✓</span>
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--card-bg)' }}>
        <h3 className="bakbak text-2xl mb-4" style={{ color: 'var(--accent-primary)' }}>
          Technology Stack
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(project.techStack).map(
            ([category, technologies], index) => (
              <div key={index}>
                <h4 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded text-xs"
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--accent-primary)',
                        color: 'var(--text-primary)'
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
      <div className="space-y-4">
        <h3 className="bakbak text-2xl" style={{ color: 'var(--accent-primary)' }}>Project Screenshots</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.screenshots.map((screenshot, index) => (
            <div key={index} className="space-y-2">
              {screenshot.url ? (
                <img
                  src={screenshot.url}
                  alt={screenshot.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              ) : (
                <div className="project-image-placeholder h-64">
                  <span>{screenshot.placeholder}</span>
                </div>
              )}
              <p className="text-center text-sm" style={{ color: 'var(--text-tertiary)' }}>
                {screenshot.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* All Tags */}
      <div className="space-y-3">
        <h3 className="bakbak text-xl" style={{ color: 'var(--text-primary)' }}>Technologies Used</h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full text-sm"
              style={{
                backgroundColor: 'var(--accent-primary)',
                boxShadow: '0 0 10px var(--accent-glow)',
                color: 'var(--text-primary)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
