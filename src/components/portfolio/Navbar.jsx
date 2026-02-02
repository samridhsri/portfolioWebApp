import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const getNavLinkStyle = (isActive) => {
    return {
      borderColor: isActive ? 'var(--accent-primary)' : 'var(--border-color)',
      backgroundColor: isActive ? 'var(--accent-primary)' : 'transparent',
      color: 'var(--text-primary)',
      boxShadow: isActive ? '0 0 15px var(--accent-glow)' : 'none'
    };
  };

  const handleMouseEnter = (e, isActive) => {
    if (!isActive) {
      e.target.style.backgroundColor = 'var(--accent-primary)';
      e.target.style.borderColor = 'var(--accent-primary)';
    }
  };

  const handleMouseLeave = (e, isActive) => {
    if (!isActive) {
      e.target.style.backgroundColor = 'transparent';
      e.target.style.borderColor = 'var(--border-color)';
    }
  };

  return (
    <nav className="flex justify-between items-center px-8 py-6">
      <h1 className="bakbak text-2xl" style={{ color: 'var(--text-primary)' }}>Samridh.</h1>
      <div className="flex gap-4">
        <NavLink
          to="/"
          className="px-6 py-2 border transition-all"
          style={({ isActive }) => getNavLinkStyle(isActive)}
          onMouseEnter={(e) => {
            const isActive = e.currentTarget.classList.contains('active');
            handleMouseEnter(e, isActive);
          }}
          onMouseLeave={(e) => {
            const isActive = e.currentTarget.classList.contains('active');
            handleMouseLeave(e, isActive);
          }}
        >
          Work
        </NavLink>
        <NavLink
          to="/about"
          className="px-6 py-2 border transition-all"
          style={({ isActive }) => getNavLinkStyle(isActive)}
          onMouseEnter={(e) => {
            const isActive = e.currentTarget.classList.contains('active');
            handleMouseEnter(e, isActive);
          }}
          onMouseLeave={(e) => {
            const isActive = e.currentTarget.classList.contains('active');
            handleMouseLeave(e, isActive);
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/resume"
          className="px-6 py-2 border transition-all"
          style={({ isActive }) => getNavLinkStyle(isActive)}
          onMouseEnter={(e) => {
            const isActive = e.currentTarget.classList.contains('active');
            handleMouseEnter(e, isActive);
          }}
          onMouseLeave={(e) => {
            const isActive = e.currentTarget.classList.contains('active');
            handleMouseLeave(e, isActive);
          }}
        >
          Resume
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
