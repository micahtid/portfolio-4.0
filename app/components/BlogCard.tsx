import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

interface BlogCardProps {
    title: string;
    date: string;
    excerpt: string;
    link: string;
    category?: string;
}

export default function BlogCard({ title, date, excerpt, link }: BlogCardProps) {
    return (
        <Link href={link} className="group block">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 mb-1">
                <h3 className="text-base font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    {title}
                </h3>
                <span className="text-xs text-neutral-400 font-medium tabular-nums shrink-0">
                    {date}
                </span>
            </div>
            <p className="text-sm text-neutral-500 line-clamp-1 overflow-hidden text-ellipsis">
                {excerpt}
            </p>
        </Link>
    );
}
