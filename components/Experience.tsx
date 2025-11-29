import { experiences } from '@/data/data';
import ExperienceCard from './ExperienceCard';

interface ExperienceProps {
  showcaseOnly?: boolean;
  showTitle?: boolean;
}

export default function Experience({ showcaseOnly = false, showTitle = true }: ExperienceProps) {
  const filteredExperiences = showcaseOnly
    ? experiences.filter((exp) => exp.showcase)
    : experiences;

  return (
    <section className="w-full py-10">
      {showTitle && (
        <h2 className="text-2xl font-bold text-white mb-8">
          <span className="text-accent">*</span> experience
        </h2>
      )}
      <div className="flex flex-col gap-6">
        {filteredExperiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
}
