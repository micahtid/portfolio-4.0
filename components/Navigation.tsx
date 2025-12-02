'use client';

import Link from 'next/link';
import NProgress from 'nprogress';
import { MdSunny } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    NProgress.start();
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="flex items-center justify-between mb-20 pt-12">
      <div className="flex gap-6 text-gray text-sm">
        <Link 
          href="/" 
          className="hover:text-accent transition-colors cursor-pointer"
          onClick={handleClick}
        >
          [h] home
        </Link>
        <Link 
          href="/experience" 
          className="hover:text-accent transition-colors cursor-pointer"
          onClick={handleClick}
        >
          [e] experience
        </Link>
        <Link 
          href="/projects" 
          className="hover:text-accent transition-colors cursor-pointer"
          onClick={handleClick}
        >
          [p] projects
        </Link>
      </div>

      <button
        onClick={toggleTheme}
        className="text-gray hover:text-accent transition-colors cursor-pointer"
        aria-label="Toggle theme"
      >
        {mounted ? (
            <MdSunny size={20} />
        ) : (
            <div className="w-5 h-5" />
        )}
      </button>
    </nav>
  );
}
