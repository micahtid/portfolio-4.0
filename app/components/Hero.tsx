import React from 'react';

import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa"; 
import { HiOutlinePaperClip } from "react-icons/hi"; 

const Hero = () => {
  const buttons = [
    {
      text: 'Contact Me',
      icon: FaPaperPlane,
      href: '#contact',
    },
    {
      icon: FaGithub,
      href: 'https://github.com/micahtid',
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/micahtidball',
    },
    {
      icon: HiOutlinePaperClip,
      href: '/resume',
    }
  ]

  return (
    <section className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="max-w-5xl w-full px-12 max-[1024px]:px-10 max-[768px]:px-8 max-[640px]:px-6 flex flex-col items-start justify-center gap-8">
        <h3 className='header'>Hey, I&apos;m Micah Tidball<br />I build <span style={{ fontFamily: 'var(--font-playfair)', fontStyle: 'italic' }}>full-stack</span> applications</h3>
        <p className="text text-white/60 max-w-3xl leading-relaxed">
          I&apos;m a full-stack developer passionate about creating beautiful, user-centric applications. With experience building platforms from the ground up, I specialize in React, Node.js, and cloud technologies. Let&apos;s build something amazing together.
        </p>
        <div className="flex gap-6 justify-start flex-wrap max-[640px]:gap-4">
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={button.text ? "text-white hover:text-white/80 transition-colors duration-200 underline" : "text-white/60 hover:text-white transition-colors duration-200"}
              target={button.href.startsWith('http') ? '_blank' : undefined}
              rel={button.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {button.text ? (
                <>
                  <button.icon size={20} className="inline mr-2 max-[640px]:w-4 max-[640px]:h-4" />
                  <span className="label font-semibold">{button.text}</span>
                </>
              ) : (
                <button.icon size={24} className="max-[640px]:w-5 max-[640px]:h-5" />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;