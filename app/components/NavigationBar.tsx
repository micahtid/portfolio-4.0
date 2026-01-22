"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";
import { PiCoffeeBeanFill } from "react-icons/pi";

interface NavItem {
    href: string;
    icon: React.ReactNode;
    title: string;
    external?: boolean;
}

const navItems: NavItem[] = [
    {
        href: "https://calendly.com/tidballmicah/30min",
        icon: <PiCoffeeBeanFill size={22} />,
        title: "Coffee Chat",
        external: true,
    },
    {
        href: "https://www.linkedin.com/in/micah-tidball-a1b28231b/",
        icon: <FaLinkedin size={22} />,
        title: "LinkedIn",
        external: true,
    },
    {
        href: "/resume.pdf",
        icon: <FiPaperclip size={22} />,
        title: "Resume",
        external: true,
    },
    {
        href: "https://github.com/micahtid",
        icon: <FaGithub size={22} />,
        title: "GitHub",
        external: true,
    },
];

function NavIcon({
    item,
    mouseX,
}: {
    item: NavItem;
    mouseX: ReturnType<typeof useMotionValue<number>>;
}) {
    const ref = useRef<HTMLAnchorElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [48, 64, 48]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <div className="relative flex flex-col items-center">
            {/* Tooltip */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute -top-10 whitespace-nowrap bg-slate-800 text-white text-xs px-3 py-1.5 rounded-md"
                    >
                        {item.title}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.a
                ref={ref}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                style={{ width, height: width }}
                className="rounded-full flex items-center justify-center bg-white/50 border border-white text-slate-600"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {item.icon}
            </motion.a>
        </div>
    );
}

export default function NavigationBar() {
    const mouseX = useMotionValue(Infinity);

    return (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-max max-w-[90vw]">
            <div
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                style={{ backdropFilter: 'blur(4px)' }}
                className="bg-black/5 border border-gray-500/10 rounded-full px-3 sm:px-4 h-[72px] flex items-end pb-3 gap-2 sm:gap-3 overflow-visible"
            >
                {navItems.map((item) => (
                    <NavIcon key={item.title} item={item} mouseX={mouseX} />
                ))}
            </div>
        </nav>
    );
}
