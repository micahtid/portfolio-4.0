'use client';

import Link from 'next/link';
import NProgress from 'nprogress';

export default function Navigation() {
  const handleClick = () => {
    NProgress.start();
  };

  return (
    <nav className="flex gap-6 mb-20 text-gray text-sm pt-12">
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
    </nav>
  );
}
