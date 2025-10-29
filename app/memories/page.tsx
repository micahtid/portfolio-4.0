import React from 'react';
import { memories } from '@/data';

const Memories = () => {
  return (
    <main className="pt-24">
      <section className="section">
        <div className="section-container">
          <h1 className="header mb-12">Memories</h1>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memories.map((memory, index) => (
              <div
                key={index}
                className="border border-white/[8%] rounded-lg p-4 bg-white/[2%] transition-all duration-300 hover:bg-white/[4%]"
              >
                {/* Inner colored card */}
                <div
                  className="aspect-square flex flex-col items-center justify-center rounded-lg relative overflow-hidden mb-4"
                  style={{ backgroundColor: memory.color }}
                >
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/20 pointer-events-none" />

                  {/* Emoji */}
                  <div className="text-7xl relative z-10">
                    {memory.emoji}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-center text-lg">
                  {memory.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Memories;
