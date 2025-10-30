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

      {/* Colored Blurs - Minimal and Scattered Throughout */}
      <div
        className="
          w-[380px] h-[380px]
          bg-purple-500/[0.06]
          blur-[95px]
          absolute top-[2%] left-[5%]"
      />

      <div
        className="
          w-[320px] h-[320px]
          bg-blue-500/[0.05]
          blur-[85px]
          absolute bottom-[5%] right-[8%]"
      />

      <div
        className="
          w-[290px] h-[290px]
          bg-cyan-500/[0.05]
          blur-[75px]
          absolute top-[45%] right-[35%]"
      />

      <div
        className="
          w-[340px] h-[340px]
          bg-pink-500/[0.05]
          blur-[88px]
          absolute top-[25%] right-[5%]"
      />

      <div
        className="
          w-[300px] h-[300px]
          bg-indigo-500/[0.05]
          blur-[78px]
          absolute bottom-[25%] left-[45%]"
      />

      <div
        className="
          w-[270px] h-[270px]
          bg-violet-500/[0.05]
          blur-[72px]
          absolute top-[75%] right-[25%]"
      />

      <div
        className="
          w-[310px] h-[310px]
          bg-teal-500/[0.05]
          blur-[80px]
          absolute top-[12%] right-[50%]"
      />

      <div
        className="
          w-[285px] h-[285px]
          bg-fuchsia-500/[0.05]
          blur-[74px]
          absolute bottom-[45%] left-[15%]"
      />

      <div
        className="
          w-[295px] h-[295px]
          bg-emerald-500/[0.05]
          blur-[76px]
          absolute top-[60%] left-[70%]"
      />

      <div
        className="
          w-[275px] h-[275px]
          bg-rose-500/[0.05]
          blur-[70px]
          absolute bottom-[60%] right-[18%]"
      />
    </div>
  );
};

export default Backdrop;
