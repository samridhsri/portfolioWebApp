import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div
      className="p-6 rounded-lg space-y-3 transition-all cursor-pointer"
      style={{
        backgroundColor: 'var(--card-bg)',
        color: 'var(--text-primary)'
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--card-hover-bg)'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--card-bg)'}
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      {/* Image or Placeholder */}
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      ) : (
        // <div className="project-image-placeholder">
        //   <span>Add Project Screenshot Here</span>
        // </div>
        <div></div>
      )}

      <div className="flex justify-between items-start flex-wrap gap-3">
        <h4 className="bakbak text-2xl" style={{ color: 'var(--text-primary)' }}>{project.title}</h4>
        <div className="flex gap-2 flex-wrap">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'var(--text-primary)'
              }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span
              className="px-3 py-1 text-xs rounded"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'var(--text-primary)'
              }}
            >
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
        {project.description}
      </p>

      <button
        className="px-6 py-2 rounded transition-all"
        style={{
          backgroundColor: 'var(--accent-primary)',
          color: 'var(--text-primary)',
          boxShadow: '0 0 15px var(--accent-glow)'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'var(--accent-secondary)';
          e.target.style.boxShadow = '0 0 20px var(--accent-glow)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'var(--accent-primary)';
          e.target.style.boxShadow = '0 0 15px var(--accent-glow)';
        }}
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/projects/${project.id}`);
        }}
      >
        View Details &rarr;
      </button>
    </div>
  );
};

export default ProjectCard;
