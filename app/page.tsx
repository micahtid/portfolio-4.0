import React from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';

const Home = () => {
  return (
    <>
      <main className="h-screen w-full flex items-center justify-center">
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default Home;