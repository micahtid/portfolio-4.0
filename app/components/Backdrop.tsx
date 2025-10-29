"use client";

import React from 'react';

const Backdrop = () => {
  return (
    <div
      className="
        w-[100vw] h-[100vh]
        bg-background
        -z-10
        fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
        overflow-hidden"
    >
      {/* Grid Lines with Gradient Opacity */}
      <svg
        className="w-full h-full opacity-[0.03]"
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
              stroke="white"
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id="gridGradient">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0.3" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" opacity="url(#gridGradient)" />
      </svg>

      {/* Colored Blurs - Minimal and Scattered */}
      <div
        className="
          w-[600px] h-[600px]
          bg-purple-500/[0.05]
          blur-[120px]
          absolute top-[10%] left-[15%]"
      />

      <div
        className="
          w-[500px] h-[500px]
          bg-blue-500/[0.04]
          blur-[120px]
          absolute bottom-[15%] right-[20%]"
      />

      <div
        className="
          w-[400px] h-[400px]
          bg-cyan-500/[0.03]
          blur-[100px]
          absolute top-[60%] left-[60%]"
      />
    </div>
  );
};

export default Backdrop;
