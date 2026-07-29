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
    <nav className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-4 sm:py-6 gap-3 sm:gap-0">
      <h1 className="bakbak text-2xl text-center sm:text-left" style={{ color: 'var(--text-primary)' }}>
        <NavLink to="/">Samridh.</NavLink>
      </h1>
      <div className="flex gap-2 sm:gap-4 w-full sm:w-auto justify-center">
        <NavLink
          to="/"
          className="flex-1 sm:flex-initial px-3 sm:px-6 py-2 text-center text-sm sm:text-base border transition-all rounded-md sm:rounded-none"
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
          className="flex-1 sm:flex-initial px-3 sm:px-6 py-2 text-center text-sm sm:text-base border transition-all rounded-md sm:rounded-none"
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
          className="flex-1 sm:flex-initial px-3 sm:px-6 py-2 text-center text-sm sm:text-base border transition-all rounded-md sm:rounded-none"
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
