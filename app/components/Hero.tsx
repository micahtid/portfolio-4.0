import Image from "next/image";

interface HeroProps {
    imageSrc: string;
    name: string;
    description: string;
}

export default function Hero({ imageSrc, name, description }: HeroProps) {
    return (
        <section className="flex flex-col items-start text-left mb-16">
            {/* Profile Image */}
            <div className="w-28 h-28 rounded-full overflow-hidden mb-6 border-4 border-white">
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
            <h1 className="text-4xl font-semibold text-slate-800 mb-3">
                Hey, I&apos;m <span className="font-accent text-3xl ml-2">{name}</span>
            </h1>

            {/* Description */}
            <p className="max-w-lg text-lg text-slate-600 leading-relaxed">
                {description}
            </p>
        </section>
    );
}
