
import { useDarkMode } from '../hooks/useDarkMode';
import { FaMoon, FaSun } from 'react-icons/fa';  // You can use icons for sun/moon

const ThemeToggleButton = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();  // Destructure the hook

  return (
    <button
      onClick={toggleDarkMode}
      className={`px-4 py-2 rounded-lg transition-colors ${
        isDarkMode ? 'text-white' : 'text-black'
      }`}
    >
      {/* Display sun when dark mode is enabled, and moon when light mode is enabled */}
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggleButton;
