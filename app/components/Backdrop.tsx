"use client";

import React from 'react';
import { useTheme } from '@/app/context/ThemeContext';

const Backdrop = () => {
  const { theme } = useTheme();
  const gridColor = theme === 'light' ? '#0A0A0A' : 'white';

  return (
    <div
      className="
        w-[100vw] h-[100vh]
        -z-10
        fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
        overflow-hidden
        transition-colors duration-300"
      style={{
        backgroundColor: theme === 'light' ? '#F5F5F5' : '#0A0A0A'
      }}
    >
      {/* Grid Lines with Gradient Opacity */}
      <svg
        className="w-full h-full opacity-[0.03] transition-opacity duration-300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke={gridColor}
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id="gridGradient">
            <stop offset="0%" stopColor={gridColor} stopOpacity="1" />
            <stop offset="100%" stopColor={gridColor} stopOpacity="0.3" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" opacity="url(#gridGradient)" />
      </svg>

      {/* Stacked Radial Gradients - Stripe Style */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
          theme === 'light' ? 'opacity-[0.18]' : 'opacity-[0.05]'
        }`}
        style={{
          backgroundImage: `
            radial-gradient(at 40% 20%, hsla(260, 100%, 70%, 1) 0px, transparent 50%),
            radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
            radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
            radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
            radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
            radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%),
            radial-gradient(at 50% 50%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
            radial-gradient(at 20% 80%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
            radial-gradient(at 90% 30%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
            radial-gradient(at 30% 70%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
            radial-gradient(at 60% 10%, hsla(340, 100%, 76%, 1) 0px, transparent 50%)
          `
        }}
      />
    </div>
  );
};

export default Backdrop;
