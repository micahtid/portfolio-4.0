'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import NProgress from 'nprogress';

export default function KeyboardNavigation() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // only trigger if not typing in an input/textarea
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (event.key.toLowerCase()) {
        case 'h':
          NProgress.start();
          router.push('/');
          break;
        case 'e':
          NProgress.start();
          router.push('/experience');
          break;
        case 'p':
          NProgress.start();
          router.push('/projects');
          break;
        case 'b':
          NProgress.start();
          router.push('/blogs');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [router]);

  return null;
}
