import Link from "next/link";

interface BlogCardProps {
    title: string;
    date: string;
    excerpt?: string;
    link: string;
    category?: string;
}

export default function BlogCard({ title, date, link }: BlogCardProps) {
    return (
        <Link
            href={link}
            className="flex justify-between items-center py-1.5 -mx-2 px-2 rounded-lg hover:bg-neutral-50 transition-colors whitespace-nowrap group"
        >
            <span className="text-neutral-800 font-medium">{title}</span>
            <span className="text-neutral-500 text-sm">{date}</span>
        </Link>
    );
}
