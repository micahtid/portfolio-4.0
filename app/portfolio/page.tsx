import React from 'react';
import Link from 'next/link';
import { projects, experiences } from '@/data';
import { FaArrowRight } from 'react-icons/fa';

const Portfolio = () => {
  return (
    <main>
      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="section-container">
          <h2 className="header mb-12">Experience</h2>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="border-b border-white/[8%] pb-6 last:border-b-0">
                <div className="flex-1 mb-3">
                  <Link href={`/${experience.slug}`} className="group">
                    <h3 className="card-title group-hover:underline transition-all duration-200 underline underline-offset-4">{experience.title}</h3>
                  </Link>
                  <p className="text text-white/70 mt-2">{experience.shortDescription}</p>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2 mt-3 mb-4">
                  {experience.bulletPoints.map((point, i) => (
                    <li key={i} className="text text-white/60 flex items-start gap-3">
                      <span className="text-white/40 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* View Details Link at bottom */}
                <Link
                  href={`/${experience.slug}`}
                  className="text text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  View Details
                  <FaArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-container">
          <h2 className="header mb-12">Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="border-b border-white/[8%] pb-6 last:border-b-0">
                <div className="flex-1 mb-3">
                  <Link href={`/${project.slug}`} className="group">
                    <h3 className="card-title group-hover:underline transition-all duration-200 underline underline-offset-4">{project.title}</h3>
                  </Link>
                  <p className="text text-white/70 mt-2">{project.shortDescription}</p>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2 mt-3 mb-4">
                  {project.bulletPoints.map((point, i) => (
                    <li key={i} className="text text-white/60 flex items-start gap-3">
                      <span className="text-white/40 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* View Details Link at bottom */}
                <Link
                  href={`/${project.slug}`}
                  className="text text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  View Details
                  <FaArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
