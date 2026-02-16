import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

interface ExperienceCardProps {
    title: string;
    position: string;
    dateRange: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ExperienceCard({
    title,
    position,
    dateRange,
    description,
    technologies,
    link,
}: ExperienceCardProps) {
    const isExternal = link?.startsWith("http");

    return (
        <div className="relative bg-gradient-to-b from-[#F3F3F3] to-[#FFFFFF] rounded-2xl p-5 sm:p-6 border border-[#F3F3F3]">
            {/* Learn More Button */}
            {link && (
                <Link
                    href={link}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="absolute -top-1 -right-1 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 bg-black/80 text-white rounded-full flex items-center justify-center hover:bg-black transition-colors"
                    title="Learn more"
                >
                    <FiArrowUpRight size={18} />
                </Link>
            )}

            <h3 className="text-lg font-bold text-neutral-800 mb-1">{title}</h3>
            <div className="flex justify-between items-center mb-2">
                <span className="text-neutral-700 font-semibold">{position}</span>
                <span className="text-neutral-700 font-semibold">{dateRange}</span>
            </div>
            <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                {description}
            </p>
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className="bg-transparent text-neutral-600 px-3 py-1 rounded-full text-xs font-semibold border border-neutral-400"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
