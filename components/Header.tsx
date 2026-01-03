'use client';

import DecryptedText from './DecryptedText';
import { FaLocationDot, FaBuilding } from "react-icons/fa6";

/**
 * Header component displaying the main introduction, location, and bio.
 * This component is designed to be the primary visual entry point (Hero section) for the application.
 */
export default function Header() {
  return (
    <header className="w-full">
      <div className="flex flex-col items-start gap-6">
        {/* main heading */}
        <h1 className="text-4xl font-bold text-foreground">
          <DecryptedText
            text="hi, i'm micah"
            animateOn="view"
            speed={35}
            maxIterations={1}
            className="text-foreground"
            encryptedClassName="text-gray"
          />
        </h1>

        {/* description */}
        <p className="text-gray-light leading-relaxed">
        i&apos;m a freshman at the raikes school @ university of nebraska - lincoln studying computer science and data science. i ship full-stack applications.
        </p>
      </div>
    </header>
  );
}