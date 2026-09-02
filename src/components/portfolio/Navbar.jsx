import { NavLink } from 'react-router-dom';
import { LuGithub, LuLinkedin } from 'react-icons/lu';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 px-3 sm:px-8 pt-3 sm:pt-4 pb-2">
      <nav className="max-w-4xl mx-auto flex flex-row justify-between items-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-full backdrop-blur-xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-[var(--glass-shadow)] transition-all duration-200">
        <NavLink
          to="/"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 rounded-lg"
          aria-label="Samridh Srivastava Homepage"
        >
          <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent-emerald)] opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent-emerald)] shadow-[0_0_8px_var(--accent-emerald)]" />
          </span>
          <span className="font-display text-lg sm:text-2xl tracking-wide group-hover:text-[var(--accent-primary)] transition-colors duration-150" style={{ color: 'var(--text-primary)' }}>
            Samridh<span style={{ color: 'var(--accent-primary)' }}>.</span>
          </span>
        </NavLink>

        <div className="flex items-center gap-1 sm:gap-2">
          {[
            { path: '/', label: 'Work' },
            { path: '/about', label: 'About' },
            { path: '/resume', label: 'Resume' },
          ].map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium font-mono rounded-full transition-all duration-150 active:scale-95 focus:outline-none focus-visible:ring-2 ${
                  isActive
                    ? 'bg-[var(--accent-primary)] text-white shadow-[0_0_16px_var(--accent-glow)] font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Direct Recruiter External Links */}
          <div className="hidden sm:flex items-center gap-1 pl-1 ml-1 border-l border-[var(--border-subtle)]">
            <a
              href="https://github.com/samridhsri"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-secondary)] transition-colors duration-150"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <LuGithub className="text-base" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/samridh-srivastava-a6b888ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-secondary)] transition-colors duration-150"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LuLinkedin className="text-base" aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

