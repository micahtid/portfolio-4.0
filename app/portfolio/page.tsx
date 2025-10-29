'use client';

import React, { useState } from 'react';
import { projects, experiences, Project, Experience } from '@/data';
import { FaChevronDown, FaImage, FaGithub, FaGlobe } from 'react-icons/fa';
import useModal from '@/app/hooks/useModal';
import useImageModal from '@/app/hooks/useImageModal';

type PortfolioItemType = Project | Experience;

const PortfolioItem = ({ item, isProject }: { item: PortfolioItemType; isProject: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { onOpen } = useModal();
  const { setImages } = useImageModal();

  const hasImages = item.images && item.images.length > 0;

  const handleViewImages = () => {
    setImages(item.images, item.title);
    onOpen();
  };

  return (
    <div
      className="border-b border-white/[10%] py-6 last:border-b-0 transition-all duration-300"
    >
      {/* Title and Long Description */}
      <div className="mb-4">
        <h3 className="card-title">{item.title}</h3>
        <p className="text text-white/60 mt-3 leading-relaxed">{item.longDescription}</p>
      </div>

      {/* Expand Button as Text */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text text-white transition-colors duration-200 flex items-center gap-2 mb-6 font-medium"
      >
        {isExpanded ? 'Collapse Contributions' : 'Expand Contributions'}
        <FaChevronDown
          size={12}
          className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="space-y-4 mb-12 pl-4 border-l border-white/10">
          {/* Contribution Points */}
          <div>
            <ul className="space-y-2">
              {item.contributionPoints.map((point, i) => (
                <li key={i} className="text text-white/60 flex items-start gap-4">
                  <span className="text-white/30 mt-1 flex-shrink-0">—</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Icon Buttons Section */}
      <div className="flex gap-6 items-center mt-6">
        {hasImages && (
          <button
            onClick={handleViewImages}
            className="icon-btn"
            title="View Images"
          >
            <FaImage size={20} />
          </button>
        )}
        {item.appUrl && (
          <a
            href={item.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            title="Visit Website"
          >
            <FaGlobe size={20} />
          </a>
        )}
        {isProject && (item as Project).repositoryUrl && (
          <a
            href={(item as Project).repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            title="View Repository"
          >
            <FaGithub size={20} />
          </a>
        )}
      </div>

    </div>
  );
};

const Portfolio = () => {
  return (
    <main className="pt-24 pb-24">
      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="section-container">
          <h2 className="header">Experience</h2>
          <div className="space-y-0">
            {experiences.map((experience, index) => (
              <div key={index} className="animate-stagger" style={{ animationDelay: `${index * 0.1}s` }}>
                <PortfolioItem item={experience} isProject={false} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-container">
          <h2 className="header">Projects</h2>
          <div className="space-y-0">
            {projects.map((project, index) => (
              <div key={index} className="animate-stagger" style={{ animationDelay: `${index * 0.1}s` }}>
                <PortfolioItem item={project} isProject={true} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
