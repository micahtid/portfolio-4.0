'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    NProgress.start();
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  return (
    <nav className="flex items-center justify-between mb-20 pt-12">
      <div className="flex gap-6 text-gray text-sm">
        <Link
          href="/"
          className="hover:text-accent transition-colors cursor-pointer"
          onClick={handleClick}
        >
          <span className={isActive('/') ? 'text-accent' : ''}>[h]</span> home
        </Link>
        <Link
          href="/experience"
          className="hover:text-accent transition-colors cursor-pointer"
          onClick={handleClick}
        >
          <span className={isActive('/experience') ? 'text-accent' : ''}>[e]</span> experience
        </Link>
        <Link
          href="/projects"
          className="hover:text-accent transition-colors cursor-pointer"
          onClick={handleClick}
        >
          <span className={isActive('/projects') ? 'text-accent' : ''}>[p]</span> projects
        </Link>
        <Link
          href="/blogs"
          className="hover:text-accent transition-colors cursor-pointer"
          onClick={handleClick}
        >
          <span className={isActive('/blogs') ? 'text-accent' : ''}>[b]</span> blogs
        </Link>
      </div>

      <button
        onClick={toggleTheme}
        className="text-gray hover:text-accent transition-colors cursor-pointer"
        aria-label="Toggle theme"
      >
        {mounted ? (
            theme === "dark" ? <MdSunny size={20} /> : <IoMoon size={20} />
        ) : (
            <div className="w-5 h-5" />
        )}
      </button>
    </nav>
  );
}
