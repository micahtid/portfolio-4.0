import { Project } from '@/data/data';
import Card from './Card';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      title={project.title}
      githubLink={project.githubLink}
      websiteLink={project.websiteLink}
    >
      <div className="text-sm text-gray">
        {project.date}
      </div>
      <p className="text-sm text-gray-light">{project.description}</p>

      {/* technologies */}
      <div className="mt-2">
        <h4 className="text-base font-semibold text-white mb-3">technologies</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="text-xs text-gray bg-[#1a1a1a] px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
