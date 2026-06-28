import { useTheme } from '../../context/ThemeContext';
import { LuSparkles, LuMoon, LuSun } from 'react-icons/lu';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const renderThemeIcon = () => {
    switch (theme) {
      case 'cyberpunk':
        return <LuSparkles className="text-lg" style={{ color: 'var(--accent-primary)' }} aria-hidden="true" />;
      case 'dark':
        return <LuMoon className="text-lg" style={{ color: 'var(--accent-primary)' }} aria-hidden="true" />;
      case 'light':
        return <LuSun className="text-lg" style={{ color: 'var(--accent-primary)' }} aria-hidden="true" />;
      default:
        return <LuSparkles className="text-lg" style={{ color: 'var(--accent-primary)' }} aria-hidden="true" />;
    }
  };

  const getThemeName = () => {
    switch (theme) {
      case 'cyberpunk':
        return 'Cyberpunk';
      case 'dark':
        return 'Dark';
      case 'light':
        return 'Light';
      default:
        return 'Cyberpunk';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn focus:outline-none focus-visible:ring-2"
      aria-label={`Current theme: ${getThemeName()}. Click to switch to next theme.`}
      title={`Current theme: ${getThemeName()}. Click to switch.`}
    >
      <span className="theme-icon">{renderThemeIcon()}</span>
      <span className="theme-label">{getThemeName()}</span>
    </button>
  );
};

export default ThemeToggle;
