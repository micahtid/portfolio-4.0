import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Experience } from '@/data';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  const randomRotation = useMemo(() => {
    const direction = 1; // Always tilt to the right
    const degrees = 3 + Math.random() * 3;
    return direction * degrees;
  }, [index]);

  return (
    <Link href={`/${experience.slug}`} className="card block overflow-hidden">
      <div className="relative z-10 flex flex-col items-start gap-1">
        <h3 className="card-title">{experience.title}</h3>
        <p className="card-description truncate">{experience.description}</p>
      </div>

      {/* Circle that pops from right */}
      <div
        className="card-hover-circle"
        style={{
          backgroundColor: experience.primaryColor,
        }}
      />

      {/* Chibi App Design */}
      <div className="card-hover-app" style={{ borderColor: experience.secondaryColor }}>
        <div className="card-app-header" style={{ backgroundColor: experience.primaryColor }} />
        <div className="card-app-content">
          <div className="card-app-bar" style={{ backgroundColor: experience.secondaryColor }} />
          <div className="card-app-bar" style={{ backgroundColor: experience.primaryColor }} />
          <div className="card-app-bar" style={{ backgroundColor: experience.secondaryColor }} />
        </div>
      </div>

      <div className="card-image-container">
        <Image
          src={experience.images[0]}
          alt={experience.title}
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

export default ExperienceCard;
