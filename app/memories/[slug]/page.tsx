import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

          {/* Image Section */}
          {memory.image ? (
            <div className="relative w-full h-96 rounded-lg overflow-hidden border border-white/10 mb-8">
              <Image
                src={memory.image}
                alt={memory.title}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-full h-96 rounded-lg border-2 border-dashed border-white/20 flex items-center justify-center mb-8 bg-white/[2%]">
              <p className="text text-white/60">No photo available at this time.</p>
            </div>
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
