import { experiences, projects } from '@/data/data';
import ExperienceCard from './ExperienceCard';
import ProjectCard from './ProjectCard';

export default function Current() {
  const featuredExperiences = experiences.filter((exp) => exp.showcase);
  const featuredProjects = projects.filter((proj) => proj.showcase);

  return (
    <section className="w-full py-10">
      <h2 className="text-2xl font-bold text-white mb-8">
        <span className="text-accent">*</span> current
      </h2>
      <div className="flex flex-col gap-6">
        {/* Experiences */}
        {featuredExperiences.map((exp, index) => (
          <ExperienceCard key={`exp-${index}`} experience={exp} />
        ))}

        {/* Projects */}
        {featuredProjects.map((project, index) => (
          <ProjectCard key={`proj-${index}`} project={project} />
        ))}
      </div>
    </section>
  );
}
