import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="ml-24 max-[768px]:ml-0">
      <section className="section min-h-screen flex items-center justify-center">
        <div className="section-container text-center">
          <div className="text-9xl md:text-8xl sm:text-7xl font-bold text-white mb-6" style={{ lineHeight: '1' }}>404</div>
          <h1 className="header mb-4">Page Not Found</h1>
          <p className="text text-white/60 mb-8">
            Oops! The page you&rsquo;re looking for doesn&rsquo;t exist.
          </p>
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
