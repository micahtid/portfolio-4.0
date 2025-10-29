'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBriefcase, FaImages, FaHome, FaPaperPlane } from 'react-icons/fa';

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
}

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems: NavItem[] = [
    { icon: FaHome, label: 'Home', href: '/' },
    { icon: FaBriefcase, label: 'Portfolio', href: '/portfolio' },
    { icon: FaImages, label: 'Memories', href: '/memories' },
    { icon: FaPaperPlane, label: 'Get in Touch', href: '/contact' },
  ];

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 max-[1024px]:left-4 max-[768px]:bottom-6 max-[768px]:top-auto max-[768px]:left-1/2 max-[768px]:-translate-x-1/2 max-[768px]:translate-y-0">
      <div className="flex flex-col gap-4 max-[768px]:flex-row">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="group relative flex items-center justify-center w-14 h-14 rounded-lg border border-white/10 bg-white/[2%] hover:bg-white/[4%] transition-colors duration-300 backdrop-blur-sm"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <item.icon className="text-white/60 group-hover:text-white transition-colors duration-300" size={20} />

            {/* Tooltip */}
            <div
              className={`absolute left-full ml-4 px-3 py-2 rounded-lg border border-white/10 bg-white/[3%] backdrop-blur-sm whitespace-nowrap transition-all duration-300 pointer-events-none max-[768px]:left-1/2 max-[768px]:-translate-x-1/2 max-[768px]:bottom-full max-[768px]:mb-4 max-[768px]:ml-0 ${
                hoveredIndex === index
                  ? 'opacity-100 translate-x-0 max-[768px]:translate-y-0'
                  : 'opacity-0 -translate-x-2 max-[768px]:translate-x-0 max-[768px]:translate-y-2'
              }`}
            >
              <span className="label text-white/80">{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;