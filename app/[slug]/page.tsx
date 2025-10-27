import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getExperienceBySlug, projects, experiences } from '@/data';
import ImageSlider from '@/app/components/ImageSlider';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const projectSlugs = projects.map((project) => ({
    slug: project.slug,
  }));

  const experienceSlugs = experiences.map((experience) => ({
    slug: experience.slug,
  }));

  return [...projectSlugs, ...experienceSlugs];
}

const SlugPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const experience = getExperienceBySlug(slug);

  const item = project || experience;

  if (!item) {
    notFound();
  }

  const isProject = !!project;

  return (
    <main className="min-h-screen section pt-32 max-[768px]:pt-24">
      <div className="mx-auto max-w-5xl">
        {/* Back Button */}
        <Link href="/portfolio" className="link inline-flex items-center gap-2 mb-8">
          <span>←</span>
          <span className="label">Back to Portfolio</span>
        </Link>

        {/* Title */}
        <h1 className="header mb-6">{item.title}</h1>

        {/* Short Description */}
        <p className="text text-white/80 mb-8">{item.shortDescription}</p>

        {/* Links */}
        <div className="flex gap-4 mb-12 flex-wrap max-[640px]:gap-3">
          {item.appUrl && (
            <a
              href={item.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <span className="label">View Live</span>
            </a>
          )}
          {isProject && project?.repositoryUrl && (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <span className="label">View Repository</span>
            </a>
          )}
        </div>

        {/* Long Description */}
        <div className="mb-12">
          <h2 className="subheading text-white mb-4">Overview</h2>
          <p className="text text-white/80 leading-relaxed">{item.longDescription}</p>
        </div>

        {/* Images Gallery */}
        {item.images.length > 0 && (
          <div className="mb-12">
            <h2 className="subheading text-white mb-6">Gallery</h2>
            <ImageSlider images={item.images} title={item.title} />
          </div>
        )}

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="subheading text-white mb-4">Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {item.techs.map((tech, index) => (
              <div
                key={index}
                className="btn cursor-default"
              >
                <span className="text-white/80">{tech.icon}</span>
                <span className="label text-white/80">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SlugPage;
