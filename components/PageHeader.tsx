'use client';

import DecryptedText from './DecryptedText';

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold text-white mb-4">
        <DecryptedText
          text={title}
          animateOn="view"
          speed={35}
          maxIterations={1}
          className="text-white"
          encryptedClassName="text-gray-500"
        />
      </h1>
      <p className="text-gray-200 text-sm">{description}</p>
    </div>
  );
}
