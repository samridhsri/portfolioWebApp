import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { IoSunny, IoMoon } from "react-icons/io5";

const ThemeToggle = () => {
    const { toggleTheme, theme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === 'light' ? <IoMoon /> : <IoSunny />}
        </button>
    );
};

export default ThemeToggle;