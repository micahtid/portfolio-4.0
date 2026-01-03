import { experiences } from '@/data/data';
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaGlobe } from "react-icons/fa";

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
        <h2 className="text-2xl font-bold text-foreground mb-8">
          <span className="text-accent">*</span> experience
        </h2>
      )}
      <div className="flex flex-col gap-6">
        {filteredExperiences.map((exp, index) => (
          <div key={index} className="border border-gray-200 dark:border-gray-700 p-6 hover:border-accent transition-colors group">
            <div className="flex justify-between items-start gap-4 mb-2">
              <h3 className="text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                {exp.title}
              </h3>
              <div className="flex gap-4 items-center shrink-0 pt-1">
                {exp.githubLink && (
                  <a
                    href={exp.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray hover:text-accent transition-colors flex items-center justify-center"
                  >
                    <TbBrandGithubFilled className="w-5 h-5" />
                  </a>
                )}
                {exp.websiteLink && (
                  <a
                    href={exp.websiteLink}
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
                {exp.position} ({exp.duration})
              </div>
              <p className="text-sm text-gray-light leading-relaxed">{exp.description}</p>

              {/* contributions */}
              <div className="mt-2">
                <h4 className="text-base font-semibold text-foreground mb-2">contributions</h4>
                {exp.contributions}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
