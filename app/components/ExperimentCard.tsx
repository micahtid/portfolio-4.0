import { FaGithub, FaGlobe } from "react-icons/fa";

interface ExperimentCardProps {
    title: string;
    description?: string;
    githubLink?: string;
    websiteLink?: string;
}

export default function ExperimentCard({
    title,
    githubLink,
    websiteLink,
}: ExperimentCardProps) {
    return (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1.5 -mx-2 px-2 rounded-lg hover:bg-neutral-50 transition-colors">
            <span className="text-neutral-800 font-medium">{title}</span>
            <div className="flex items-center gap-3">
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-neutral-800 transition-colors"
                    >
                        <FaGithub size={16} />
                    </a>
                )}
                {websiteLink && (
                    <a
                        href={websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-neutral-800 transition-colors"
                    >
                        <FaGlobe size={16} />
                    </a>
                )}
            </div>
        </div>
    );
}
