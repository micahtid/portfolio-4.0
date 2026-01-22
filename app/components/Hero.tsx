import Image from "next/image";
import { ReactNode } from "react";

interface HeroProps {
    imageSrc: string;
    name: string;
    description: ReactNode;
}

export default function Hero({ imageSrc, name, description }: HeroProps) {
    return (
        <section className="flex flex-col items-start text-left mb-12 sm:mb-20">
            {/* Profile Image */}
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 sm:mb-6 border-4 border-white">
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
            <h1 className="text-2xl sm:text-4xl font-semibold text-slate-800 mb-2 sm:mb-3">
                Hey, I&apos;m <span className="font-accent text-xl sm:text-3xl ml-1 sm:ml-2">{name}</span>
            </h1>

            {/* Description */}
            <p className="max-w-lg text-base sm:text-lg text-slate-600 leading-relaxed">
                {description}
            </p>
        </section>
    );
}
