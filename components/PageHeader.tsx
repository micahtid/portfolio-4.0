'use client';

import DecryptedText from './DecryptedText';

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-4xl font-bold text-foreground">
          <DecryptedText
            text={title}
            animateOn="view"
            speed={35}
            maxIterations={1}
            className="text-foreground"
            encryptedClassName="text-gray"
          />
        </h1>
        <p className="text-gray-light leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
