"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode, useState, useRef, useEffect } from "react";
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
    const [isHovered, setIsHovered] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [firstFrameReady, setFirstFrameReady] = useState(false);

    // Extract first frame of GIF when component mounts
    useEffect(() => {
        if (!gifSrc) return;

        const img = document.createElement("img");

        img.onload = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;

            const ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.drawImage(img, 0, 0);
                setFirstFrameReady(true);
            }
        };

        img.src = gifSrc;
    }, [gifSrc]);

    return (
        <div
            className="flex flex-col items-center group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Preview */}
            <div className="relative w-[calc(100%+16px)] border-[3px] border-[#F5F5F5] rounded-2xl overflow-visible bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                {gifSrc ? (
                    <>
                        {/* Static first frame (canvas) - shown when not hovered */}
                        <canvas
                            ref={canvasRef}
                            className={`w-full aspect-[5/3] object-cover rounded-xl ${
                                isHovered && firstFrameReady ? "hidden" : "block"
                            }`}
                            style={{
                                display: isHovered && firstFrameReady ? "none" : "block",
                            }}
                        />

                        {/* Animated GIF - shown on hover */}
                        {isHovered && (
                            <Image
                                src={gifSrc}
                                alt={title}
                                width={500}
                                height={300}
                                className="w-full aspect-[5/3] object-cover rounded-xl"
                                unoptimized
                            />
                        )}

                        <div className="absolute inset-0 bg-black/10 rounded-xl transition-opacity duration-300 pointer-events-none opacity-100 group-hover:opacity-0" />
                    </>
                ) : (
                    <div className="w-full aspect-video bg-neutral-300 flex items-center justify-center rounded-xl">
                        {placeholderIcon}
                    </div>
                )}
                <span className="absolute bottom-[-18px] left-4 bg-black/80 text-white px-4 py-2 rounded-lg font-semibold text-sm z-10">
                    {title}
                </span>
            </div>

            {/* Description */}
            <div className="w-full bg-[#F5F5F5] rounded-xl pt-11 px-4 pb-4 -mt-2">
                <p className="text-neutral-600 text-sm mb-3">
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
                            className="text-neutral-400 hover:text-neutral-600 transition-colors"
                        >
                            <FaGithub size={20} />
                        </a>
                    )}
                    {websiteLink && (
                        <a
                            href={websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-neutral-600 transition-colors"
                        >
                            <FaGlobe size={20} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
