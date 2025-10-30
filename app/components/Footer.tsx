import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex-shrink-0">
      <div className="mx-auto max-w-5xl px-12 max-[1024px]:px-10 max-[768px]:px-8 max-[640px]:px-6 py-8">
        <div className="text-center text-sm footer-text">
          All Rights Reserved. Made with care by Micah Tidball.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
