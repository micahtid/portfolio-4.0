import Link from "next/link";
import Image from "next/image";

interface ExperienceCardProps {
    label: string;
    dateRange: string;
    link?: string;
    imageSrc?: string;
}

export default function ExperienceCard({
    label,
    dateRange,
    link,
    imageSrc,
}: ExperienceCardProps) {
    const isExternal = link?.startsWith("http");

    const content = (
        <div className="flex items-center py-1.5 group">
            {imageSrc && (
                <Image
                    src={imageSrc}
                    alt=""
                    width={28}
                    height={28}
                    className="rounded-md mr-3 shrink-0 object-contain"
                />
            )}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-1 min-w-0">
                <span className="text-neutral-800 dark:text-neutral-200 font-medium">{label}</span>
                <span className="text-neutral-500 dark:text-neutral-400 text-sm shrink-0">{dateRange}</span>
            </div>
        </div>
    );

    if (link) {
        return (
            <Link
                href={link}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="block hover:bg-neutral-50 dark:hover:bg-neutral-800/50 -mx-2 px-2 rounded-lg transition-colors"
            >
                {content}
            </Link>
        );
    }

    return content;
}
