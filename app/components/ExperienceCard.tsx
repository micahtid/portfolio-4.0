import Link from "next/link";

interface ExperienceCardProps {
    label: string;
    dateRange: string;
    link?: string;
}

export default function ExperienceCard({
    label,
    dateRange,
    link,
}: ExperienceCardProps) {
    const isExternal = link?.startsWith("http");

    const content = (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1.5 group">
            <span className="text-neutral-800 font-medium">{label}</span>
            <span className="text-neutral-500 text-sm shrink-0">{dateRange}</span>
        </div>
    );

    if (link) {
        return (
            <Link
                href={link}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="block hover:bg-neutral-50 -mx-2 px-2 rounded-lg transition-colors"
            >
                {content}
            </Link>
        );
    }

    return content;
}
