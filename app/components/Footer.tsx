import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-5xl px-12 max-[1024px]:px-10 max-[768px]:px-8 max-[640px]:px-6 py-8">
        <div className="mb-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="text-center text-sm text-white/60">
          All Rights Reserved. Made with ❤ by Micah Tidball.
        </div> 
      </div>
    </footer>
  );
};

export default Footer;
