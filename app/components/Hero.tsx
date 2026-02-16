import Image from "next/image";
import { ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface HeroProps {
    imageSrc: string;
    name: string;
    description: ReactNode;
}

export default function Hero({ imageSrc, name, description }: HeroProps) {
    return (
        <section className="flex flex-col items-start text-left mb-12 sm:mb-20">
            {/* Profile Image */}
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 sm:mb-6 border-4 border-gray-300/50">
                <Image
                    src={imageSrc}
                    alt={name}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                    priority
                />
            </div>

            {/* Name */}
            <h1 className="text-2xl sm:text-4xl font-semibold text-neutral-800 mb-2 sm:mb-3">
                Hey, I&apos;m {name}
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-base sm:text-lg text-neutral-600 leading-relaxed">
                I&apos;m a freshman at the{" "}
                <a
                    href="https://www.unl.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-neutral-900 decoration-neutral-300 underline underline-offset-4 hover:decoration-neutral-500 transition-colors"
                >
                    <img src="/nebraska.png" alt="" className="w-4 h-4 mr-1 inline-block" />
                    University of Nebraska-Lincoln
                </a>{" "}
                studying Computer Science and Data. I ship full-stack applications in my free time.
                Check out my{" "}
                <a
                    href="/blog"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-neutral-900 decoration-neutral-300 underline underline-offset-4 hover:decoration-neutral-500 transition-colors"
                >
                    <FiArrowUpRight className="mr-0.5 w-4 h-4 inline-block" />
                    blog
                </a>!
            </p>
        </section>
    );
}
