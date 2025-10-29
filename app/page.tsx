import React from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="w-full h-screen max-h-screen overflow-hidden flex flex-col">
      <main className="flex-1 w-full overflow-hidden flex items-center justify-center">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Home;