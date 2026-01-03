import { experiences, projects } from '@/data/data';

export default function Current() {
  const featuredExperiences = experiences.filter((exp) => exp?.showcase);
  const featuredProjects = projects.filter((proj) => proj?.showcase);

  return (
    <section className="w-full pt-16">
      <h2 className="text-2xl font-bold text-foreground mb-8">
        <span className="text-accent">*</span> current
      </h2>
      <div className="flex flex-col gap-8">
        {/* Experiences */}
        {featuredExperiences.map((exp, index) => (
          <div key={`exp-${index}`} className="flex flex-col gap-3">
            <h3 className="text-2xl font-semibold text-foreground">{exp.title}</h3>
            <div className="text-sm text-gray">
              {exp.position} ({exp.duration})
            </div>
          </div>
        ))}

        {/* Projects */}
        {featuredProjects.map((project, index) => (
          <div key={`proj-${index}`} className="flex flex-col gap-3">
            <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
