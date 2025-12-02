'use client';

import DecryptedText from './DecryptedText';

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold text-foreground mb-4">
        <DecryptedText
          text={title}
          animateOn="view"
          speed={35}
          maxIterations={1}
          className="text-foreground"
          encryptedClassName="text-gray"
        />
      </h1>
      <p className="text-gray text-sm">{description}</p>
    </div>
  );
}
