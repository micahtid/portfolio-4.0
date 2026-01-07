import { projects, Project } from '@/data/data';
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaGlobe } from "react-icons/fa";

interface ProjectsProps {
  showcaseOnly?: boolean;
  showTitle?: boolean;
  data?: Project[];
}

export default function Projects({ showcaseOnly = false, showTitle = true, data }: ProjectsProps) {
  const sourceData = data || projects;
  const filteredProjects = showcaseOnly
    ? sourceData.filter((proj) => proj.showcase)
    : sourceData;

  return (
    <section className="w-full py-10">
      {showTitle && (
        <h2 className="text-2xl font-bold text-foreground mb-8">
          <span className="text-accent">*</span> projects
        </h2>
      )}
      <div className="flex flex-col gap-6">
        {filteredProjects.map((project, index) => {
          const technologies = project.technologies ?? [];

          return (
          <div key={index} className="border border-gray-200 dark:border-gray-700 p-6 hover:border-accent transition-colors group">
            <div className="flex justify-between items-start gap-4 mb-2">
              <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-4 items-center shrink-0 pt-1">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray hover:text-accent transition-colors flex items-center justify-center"
                  >
                    <TbBrandGithubFilled className="w-5 h-5" />
                  </a>
                )}
                {project.websiteLink && (
                  <a
                    href={project.websiteLink}
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
              <div className="text-sm text-gray">
                {project.duration}
              </div>
              <p className="text-sm text-gray-light leading-relaxed">{project.description}</p>

              {/* technologies */}
              {technologies.length > 0 && (
                <div className="mt-2">
                  <h4 className="text-base font-semibold text-foreground mb-3">technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs text-gray bg-gray-100 dark:bg-[#1a1a1a] px-2 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}
