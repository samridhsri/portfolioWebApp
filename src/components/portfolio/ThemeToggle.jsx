import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const getThemeIcon = () => {
    switch (theme) {
      case 'cyberpunk':
        return '🌆'; // Cyberpunk city
      case 'dark':
        return '🌙'; // Moon for dark mode
      case 'light':
        return '☀️'; // Sun for light mode
      default:
        return '🌆';
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
      className="theme-toggle-btn"
      aria-label="Toggle theme"
      title={`Current theme: ${getThemeName()}. Click to switch.`}
    >
      <span className="theme-icon">{getThemeIcon()}</span>
      <span className="theme-label">{getThemeName()}</span>
    </button>
  );
};

export default ThemeToggle;
