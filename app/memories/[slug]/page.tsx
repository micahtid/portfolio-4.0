import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getMemoryBySlug, memories } from '@/data';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return memories.map((memory) => ({
    slug: memory.slug,
  }));
}

const MemoryDetail = async ({ params }: PageProps) => {
  const { slug } = await params;
  const memory = getMemoryBySlug(slug);

  if (!memory) {
    notFound();
  }

  return (
    <main className="pt-24">
      <section className="section">
        <div className="section-container max-w-3xl">
          {/* Back Button */}
          <Link href="/memories" className="link inline-flex items-center gap-2 mb-8">
            <span>←</span>
            <span className="label">Back to Memories</span>
          </Link>

          {/* Date */}
          {memory.date && (
            <p className="label text-white/50 mb-3">{memory.date}</p>
          )}

          {/* Title */}
          <h1 className="header mb-4">{memory.title}</h1>

          {/* Full Description */}
          <p className="text text-white/80 leading-relaxed">
            {memory.fullDescription}
          </p>
        </div>
      </section>
    </main>
  );
};

export default MemoryDetail;
