interface CardProps {
  title: string;
  children: React.ReactNode;
  githubLink?: string;
  websiteLink?: string;
}

import { TbBrandGithubFilled } from "react-icons/tb";
import { FaGlobe } from "react-icons/fa";

export default function Card({
  title,
  children,
  githubLink,
  websiteLink,
}: CardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 p-6 hover:border-accent transition-colors group">
      <div className="flex justify-between items-start gap-4 mb-2">
        <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <div className="flex gap-4 items-center shrink-0 pt-1">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray hover:text-accent transition-colors flex items-center justify-center"
            >
              <TbBrandGithubFilled className="w-5 h-5" />
            </a>
          )}
          {websiteLink && (
            <a
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray hover:text-accent transition-colors flex items-center justify-center"
            >
              <FaGlobe className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
}
