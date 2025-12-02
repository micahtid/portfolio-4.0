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
            <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
            <div className="text-sm text-gray">
              {exp.position} ({exp.duration})
            </div>
            <p className="text-sm text-gray-light">{exp.description}</p>
          </div>
        ))}

        {/* Projects */}
        {featuredProjects.map((project, index) => (
          <div key={`proj-${index}`} className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
            <div className="text-sm text-gray">{project.date}</div>
            <p className="text-sm text-gray-light">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
