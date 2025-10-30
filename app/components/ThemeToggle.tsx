"use client";

import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/app/context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        fixed top-6 right-6 z-40
        w-10 h-10
        rounded-full
        transition-all duration-200
        flex items-center justify-center
        theme-toggle-btn
        max-[768px]:top-4 max-[768px]:right-4
        max-[768px]:w-9 max-[768px]:h-9"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <FaSun size={16} className="max-[768px]:w-3.5 max-[768px]:h-3.5" />
      ) : (
        <FaMoon size={16} className="max-[768px]:w-3.5 max-[768px]:h-3.5" />
      )}
    </button>
  );
};

export default ThemeToggle;
