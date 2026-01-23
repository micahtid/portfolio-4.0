import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

interface ExperimentCardProps {
    title: string;
    description: string;
    gifSrc?: string;
    placeholderIcon?: ReactNode;
    link?: string;
    githubLink?: string;
    websiteLink?: string;
}

export default function ExperimentCard({
    title,
    description,
    gifSrc,
    placeholderIcon,
    link,
    githubLink,
    websiteLink,
}: ExperimentCardProps) {
    const isExternal = link?.startsWith("http");

    return (
        <div className="flex flex-col items-center group">
            {/* Preview */}
            <div className="relative w-[calc(100%+16px)] border-[3px] border-slate-200 rounded-2xl overflow-visible bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                {gifSrc ? (
                    <>
                        <Image
                            src={gifSrc}
                            alt={title}
                            width={500}
                            height={300}
                            className="w-full h-auto rounded-xl"
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-black/10 rounded-xl transition-opacity duration-300 pointer-events-none opacity-100 group-hover:opacity-0" />
                    </>
                ) : (
                    <div className="w-full aspect-video bg-slate-300 flex items-center justify-center rounded-xl">
                        {placeholderIcon}
                    </div>
                )}
                <span className="absolute bottom-[-18px] left-4 bg-black/80 text-white px-4 py-2 rounded-lg font-semibold text-sm z-10">
                    {title}
                </span>
            </div>

            {/* Description */}
            <div className="w-full bg-slate-200 rounded-xl pt-11 px-4 pb-4 -mt-2">
                <p className="text-slate-600 text-sm mb-3">
                    {description}
                    {link && (
                        <>
                            {" "}
                            <Link
                                href={link}
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noopener noreferrer" : undefined}
                                className="underline"
                            >
                                Read more.
                            </Link>
                        </>
                    )}
                </p>
                {/* Social Icons */}
                <div className="flex gap-3">
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            <FaGithub size={20} />
                        </a>
                    )}
                    {websiteLink && (
                        <a
                            href={websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            <FaGlobe size={20} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
