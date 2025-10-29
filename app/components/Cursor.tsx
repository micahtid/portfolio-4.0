"use client";

import React, { useRef, useEffect } from "react";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      const delay = 0.1;
      targetPosition.current.x += (mousePosition.current.x - targetPosition.current.x) * delay;
      targetPosition.current.y += (mousePosition.current.y - targetPosition.current.y) * delay;

      if (cursorRef.current) {
        cursorRef.current.style.top = `${targetPosition.current.y - 30}px`;
        cursorRef.current.style.left = `${targetPosition.current.x - 30}px`;
      }

      // Store the animation frame ID
      animationFrameId.current = requestAnimationFrame(updatePosition);
    };

    // Start the position update loop
    animationFrameId.current = requestAnimationFrame(updatePosition);

    // Cleanup
    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div
      className="
        w-[100vw] h-[100vh]
        fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
        z-50 pointer-events-none"
    >
      <div
        ref={cursorRef}
        className="
          absolute pointer-events-none opacity-45
          max-lg:invisible"
        style={{
          position: "absolute",
          height: "60px",
          width: "60px",
          borderRadius: "50%",
          border: "1px solid white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "none",
          zIndex: 1000,
        }}
      >
        <div
          className="bg-white rounded-full
          max-lg:invisible"
          style={{
            height: "5px",
            width: "5px",
          }}
        />
      </div>
    </div>
  );
};

export default Cursor;
