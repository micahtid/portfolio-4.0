import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const randomRotation = useMemo(() => {
    const direction = index % 2 === 0 ? -1 : 1;
    const degrees = 3 + Math.random() * 3;
    return direction * degrees;
  }, [index]);

  return (
    <Link href={`/${project.slug}`} className="card block overflow-hidden">
      <div className="relative z-10 flex flex-col items-start gap-1">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description truncate">{project.description}</p>
      </div>

      {/* Circle that pops from right */}
      <div
        className="card-hover-circle"
        style={{
          backgroundColor: project.primaryColor,
        }}
      />

      {/* Chibi App Design */}
      <div className="card-hover-app" style={{ borderColor: project.secondaryColor }}>
        <div className="card-app-header" style={{ backgroundColor: project.primaryColor }} />
        <div className="card-app-content">
          <div className="card-app-bar" style={{ backgroundColor: project.secondaryColor }} />
          <div className="card-app-bar" style={{ backgroundColor: project.primaryColor }} />
          <div className="card-app-bar" style={{ backgroundColor: project.secondaryColor }} />
        </div>
      </div>

      <div className="card-image-container">
        <Image
          src={project.images[0]}
          alt={project.title}
          width={200}
          height={200}
          className="card-image"
          style={{
            width: 'auto',
            height: 'auto',
            transform: `rotate(${randomRotation}deg) translateX(20px)`
          }}
        />
      </div>
    </Link>
  );
};

export default ProjectCard;
