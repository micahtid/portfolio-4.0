import Image from "next/image";
import { ReactNode } from "react";

interface ExperimentCardProps {
    title: string;
    description: string;
    gifSrc?: string;
    placeholderIcon?: ReactNode;
}

export default function ExperimentCard({
    title,
    description,
    gifSrc,
    placeholderIcon,
}: ExperimentCardProps) {
    return (
        <div className="flex flex-col items-center">
            {/* Preview */}
            <div className="relative w-[calc(100%+16px)] border-[3px] border-slate-200 rounded-2xl overflow-visible bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                {gifSrc ? (
                    <Image
                        src={gifSrc}
                        alt={title}
                        width={500}
                        height={300}
                        className="w-full h-auto rounded-xl"
                        unoptimized
                    />
                ) : (
                    <div className="w-full h-48 bg-slate-300 flex items-center justify-center rounded-xl">
                        {placeholderIcon}
                    </div>
                )}
                <span className="absolute bottom-[-18px] left-4 bg-black/80 text-white px-4 py-2 rounded-lg font-semibold text-sm z-10">
                    {title}
                </span>
            </div>

            {/* Description */}
            <div className="w-full bg-slate-200 rounded-xl pt-11 px-4 pb-4 -mt-2">
                <p className="text-slate-600 text-sm">{description}</p>
            </div>
        </div>
    );
}
