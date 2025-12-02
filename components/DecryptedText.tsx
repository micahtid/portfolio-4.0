"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface DecryptedTextProps extends HTMLMotionProps<'span'> {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  encryptedClassName?: string;
  parentClassName?: string;
  animateOn?: 'view' | 'hover' | 'both';
}

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  ...props
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState<string>('');
  const [currentLength, setCurrentLength] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [phase, setPhase] = useState<'growing' | 'decrypting' | 'done'>('growing');
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const availableChars = useOriginalCharsOnly
    ? Array.from(new Set(text.split(''))).filter(char => char !== ' ')
    : characters.split('');

  const generateRandomChar = () => {
    return availableChars[Math.floor(Math.random() * availableChars.length)];
  };

  const generateRandomString = (length: number) => {
    return Array.from({ length }, (_, i) => {
      if (text[i] === ' ') return ' ';
      return generateRandomChar();
    }).join('');
  };

  useEffect(() => {
    if (!isAnimating) {
      // only reset if we haven't completed the animation
      if (phase !== 'done') {
        setDisplayText('');
        setCurrentLength(0);
        setPhase('growing');
        setRevealedIndices(new Set());
      }
      return;
    }

    let interval: NodeJS.Timeout;

    // phase 1: growing from 0 to full length with random characters
    if (phase === 'growing') {
      interval = setInterval(() => {
        setCurrentLength(prev => {
          const next = prev + 1;
          if (next >= text.length) {
            setPhase('decrypting');
            setDisplayText(generateRandomString(text.length));
            return text.length;
          }
          setDisplayText(generateRandomString(next));
          return next;
        });
      }, speed);
    }

    // phase 2: decrypt from left to right
    if (phase === 'decrypting') {
      let iterationCount = 0;
      interval = setInterval(() => {
        setRevealedIndices(prevRevealed => {
          // if we've revealed everything, we're done
          if (prevRevealed.size >= text.length) {
            clearInterval(interval);
            setPhase('done');
            setDisplayText(text);
            setIsAnimating(false);
            return prevRevealed;
          }

          // reveal next character from left to right
          const newRevealed = new Set(prevRevealed);
          const nextIndex = prevRevealed.size;
          newRevealed.add(nextIndex);

          // generate display text with revealed characters and random characters
          const newDisplayText = text.split('').map((char, i) => {
            if (char === ' ') return ' ';
            if (newRevealed.has(i)) return char;
            return generateRandomChar();
          }).join('');

          setDisplayText(newDisplayText);
          iterationCount++;

          return newRevealed;
        });
      }, speed);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAnimating, phase, text, speed]);

  useEffect(() => {
    if (animateOn !== 'view' && animateOn !== 'both') return;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsAnimating(true);
          setHasAnimated(true);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [animateOn, hasAnimated]);

  const hoverProps =
    animateOn === 'hover' || animateOn === 'both'
      ? {
          onMouseEnter: () => setIsAnimating(true),
          onMouseLeave: () => {
            setIsAnimating(false);
            setPhase('growing');
          }
        }
      : {};

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap ${parentClassName}`}
      {...hoverProps}
      {...props}
    >
      <span className="sr-only">{text}</span>

      <span aria-hidden="true">
        {displayText.split('').map((char, index) => {
          const isRevealed = revealedIndices.has(index) || phase === 'done';

          return (
            <span key={index} className={isRevealed ? className : encryptedClassName}>
              {char}
            </span>
          );
        })}
      </span>
    </motion.span>
  );
}
