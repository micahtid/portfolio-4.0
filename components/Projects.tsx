import { projects } from '@/data/data';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
  showcaseOnly?: boolean;
  showTitle?: boolean;
}

export default function Projects({ showcaseOnly = false, showTitle = true }: ProjectsProps) {
  const filteredProjects = showcaseOnly
    ? projects.filter((proj) => proj.showcase)
    : projects;

  return (
    <section className="w-full py-10">
      {showTitle && (
        <h2 className="text-2xl font-bold text-white mb-8">
          <span className="text-accent">*</span> projects
        </h2>
      )}
      <div className="flex flex-col gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
