import { Experience } from '@/data/data';
import Card from './Card';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card
      title={experience.title}
      githubLink={experience.githubLink}
      websiteLink={experience.websiteLink}
    >
      <div className="flex gap-4 text-sm text-gray">
        <span>{experience.location}</span>
        <span>•</span>
        <span>{experience.duration}</span>
      </div>
      <p className="text-sm text-gray-light">{experience.description}</p>

      {/* contributions */}
      <div className="mt-2">
        <h4 className="text-base font-semibold text-white mb-2">contributions</h4>
        <ul className="flex flex-col gap-2">
          {experience.contributions.map((contribution, idx) => (
            <li key={idx} className="text-sm text-gray flex gap-3 items-baseline">
              <span className="text-gray text-sm leading-none">•</span>
              <span>{contribution}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
