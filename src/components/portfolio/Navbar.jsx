const Navbar = ({ activeSection, setActiveSection }) => {
  const getButtonStyle = (section) => {
    const isActive = activeSection === section;
    return {
      borderColor: isActive ? 'var(--accent-primary)' : 'var(--border-color)',
      backgroundColor: isActive ? 'var(--accent-primary)' : 'transparent',
      color: 'var(--text-primary)',
      boxShadow: isActive ? '0 0 15px var(--accent-glow)' : 'none'
    };
  };

  const handleMouseEnter = (e, section) => {
    if (activeSection !== section) {
      e.target.style.backgroundColor = 'var(--accent-primary)';
      e.target.style.borderColor = 'var(--accent-primary)';
    }
  };

  const handleMouseLeave = (e, section) => {
    if (activeSection !== section) {
      e.target.style.backgroundColor = 'transparent';
      e.target.style.borderColor = 'var(--border-color)';
    }
  };

  return (
    <nav className="flex justify-between items-center px-8 py-6">
      <h1 className="bakbak text-2xl" style={{ color: 'var(--text-primary)' }}>Samridh.</h1>
      <div className="flex gap-4">
        <button
          onClick={() => setActiveSection("home")}
          className="px-6 py-2 border transition-all"
          style={getButtonStyle("home")}
          onMouseEnter={(e) => handleMouseEnter(e, "home")}
          onMouseLeave={(e) => handleMouseLeave(e, "home")}
        >
          Work
        </button>
        <button
          onClick={() => setActiveSection("about")}
          className="px-6 py-2 border transition-all"
          style={getButtonStyle("about")}
          onMouseEnter={(e) => handleMouseEnter(e, "about")}
          onMouseLeave={(e) => handleMouseLeave(e, "about")}
        >
          About
        </button>
        <button
          onClick={() => setActiveSection("resume")}
          className="px-6 py-2 border transition-all"
          style={getButtonStyle("resume")}
          onMouseEnter={(e) => handleMouseEnter(e, "resume")}
          onMouseLeave={(e) => handleMouseLeave(e, "resume")}
        >
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
