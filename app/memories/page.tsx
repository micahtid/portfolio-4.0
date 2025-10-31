'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { memories } from '@/data';

const Memories = () => {
  const truncateDescription = (description: string, maxLength: number = 100) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  return (
    <main className="pt-24 pb-24">
      <section className="section">
        <div className="section-container">
          <h1 className="header mb-12">Memories</h1>

          {/* 2-Column Flex Layout */}
          <div className="flex gap-8 max-md:flex-col">
            {/* Left Column */}
            <div className="flex-1 flex flex-col gap-8">
              {memories.map((memory, index) => {
                if (index % 2 !== 0) return null; // Only even indices

                const cardContent = (
                  <div className={`border memory-card rounded-lg transition-all duration-300 ${memory.description ? 'cursor-pointer' : ''}`}>
                    {/* Image Banner */}
                    {memory.image ? (
                      <div className="p-6">
                        <div className="rounded-lg overflow-hidden">
                          <Image
                            src={memory.image}
                            alt={memory.title}
                            width={600}
                            height={400}
                            className="w-full h-auto object-contain"
                            style={{ filter: 'blur(1px)' }}
                          />
                        </div>
                      </div>
                    ) : null}

                    {/* Content */}
                    <div className="p-6">
                      {/* Date */}
                      {memory.date && (
                        <p className="label memory-date mb-2">{memory.date}</p>
                      )}

                      {/* Title */}
                      <h3 className={`memory-title font-semibold text-lg ${memory.description ? 'mb-2' : ''}`}>
                        {memory.title}
                      </h3>

                      {/* Truncated Description */}
                      {memory.description && (
                        <p className="text memory-description">
                          {truncateDescription(memory.description, 100)}
                        </p>
                      )}
                    </div>
                  </div>
                );

                return memory.description ? (
                  <Link href={`/memories/${memory.slug}`} key={memory.slug}>
                    {cardContent}
                  </Link>
                ) : (
                  <div key={memory.slug}>
                    {cardContent}
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col gap-8">
              {memories.map((memory, index) => {
                if (index % 2 === 0) return null; // Only odd indices

                const cardContent = (
                  <div className={`border memory-card rounded-lg transition-all duration-300 ${memory.description ? 'cursor-pointer' : ''}`}>
                    {/* Image Banner */}
                    {memory.image ? (
                      <div className="p-6">
                        <div className="rounded-lg overflow-hidden">
                          <Image
                            src={memory.image}
                            alt={memory.title}
                            width={600}
                            height={400}
                            className="w-full h-auto object-contain"
                            style={{ filter: 'blur(1px)' }}
                          />
                        </div>
                      </div>
                    ) : null}

                    {/* Content */}
                    <div className="p-6">
                      {/* Date */}
                      {memory.date && (
                        <p className="label memory-date mb-2">{memory.date}</p>
                      )}

                      {/* Title */}
                      <h3 className={`memory-title font-semibold text-lg ${memory.description ? 'mb-2' : ''}`}>
                        {memory.title}
                      </h3>

                      {/* Truncated Description */}
                      {memory.description && (
                        <p className="text memory-description">
                          {truncateDescription(memory.description, 100)}
                        </p>
                      )}
                    </div>
                  </div>
                );

                return memory.description ? (
                  <Link href={`/memories/${memory.slug}`} key={memory.slug}>
                    {cardContent}
                  </Link>
                ) : (
                  <div key={memory.slug}>
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Memories;
