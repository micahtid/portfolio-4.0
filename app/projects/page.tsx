import PageHeader from '@/components/PageHeader';
import { projects } from '@/data/data';

export default function ProjectsPage() {
  const mainProjects = projects.filter(p => !p.openSource);
  const openSourceProjects = projects.filter(p => p.openSource);

  return (
    <div>
      <PageHeader
        title="projects"
        description="a selection of my personal ventures"
      />

      <section className="w-full pt-10">
        <div className="flex flex-col gap-6">
          {mainProjects.map((project, index) => (
            <div key={index} className="flex flex-col gap-4">
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold text-foreground hover:text-accent transition-colors"
              >
                {project.title}
              </a>
              {project.duration && (
                <div className="text-sm text-gray">
                  {project.duration}
                </div>
              )}
              {project.description && (
                <p className="text-sm text-gray-light leading-relaxed">{project.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="w-full pt-16">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          <span className="text-accent">*</span> open source
        </h2>
        <div className="flex gap-4 text-gray text-sm">
          {openSourceProjects.map((project, index) => (
            <a
              key={index}
              href={project.githubLink}
              className="hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
