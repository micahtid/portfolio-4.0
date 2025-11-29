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
        <h1 className="text-4xl font-bold text-white">
          <DecryptedText
            text="hi, i'm micah"
            animateOn="view"
            speed={35}
            maxIterations={1}
            className="text-white"
            encryptedClassName="text-gray"
          />
        </h1>

        {/* location and current endeavor */}
        <div className="flex flex-col gap-3 text-gray">
          <div className="flex items-center gap-2">
            <FaLocationDot className="w-4 h-4" />
            <span className="text-sm">lincoln, nebraska</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBuilding className="w-4 h-4" />
            <span className="text-sm">building SnipCode</span>
          </div>
        </div>

        {/* description */}
        <p className="text-gray-light leading-relaxed">
        i&apos;m a freshman at the raikes school @ university of nebraska - lincoln studying computer science and data science. i enjoy shipping full-stack applications. apart from programming i spend my time in the gym, playing video games, and reading books.
        </p>
      </div>
    </header>
  );
}