import PageHeader from '@/components/PageHeader';
import { experiences } from '@/data/data';

export default function ExperiencePage() {
  return (
    <div>
      <PageHeader
        title="experience"
        description="internships and professional work"
      />

      <section className="w-full pt-10">
        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-foreground">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-light leading-relaxed">{exp.description}</p>
              <div className="text-sm text-gray">
                {exp.position} ({exp.duration})
              </div>
              {exp.contributions}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
