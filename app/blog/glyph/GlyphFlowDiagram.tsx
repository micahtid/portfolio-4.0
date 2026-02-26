"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FlowStep {
    title: string;
    details: string[];
    color: string;
}

const steps: FlowStep[] = [
    {
        title: "Landing Page",
        details: ["Enter an Instagram Handle"],
        color: "from-violet-500/20 to-violet-600/10",
    },
    {
        title: "Scrape",
        details: [
            "Apify Instagram Scraper (up to 10 posts)",
            "Thumbnails compressed via Sharp, uploaded to Convex",
            "Gemini 2.5 Flash filters outlier posts",
        ],
        color: "from-blue-500/20 to-blue-600/10",
    },
    {
        title: "Generate Page",
        details: [
            "Choose inspiration (scraped post or uploaded images)",
            "Configure: title, slide count, assets, colors, logo",
            "Per-slide: headline, caption, description",
        ],
        color: "from-cyan-500/20 to-cyan-600/10",
    },
    {
        title: "Analyze",
        details: [
            "Gemini 2.5 Flash per-post visual analysis",
            "Extracts style, colors, structure, guidance",
            "Cached in Convex (PostAnalyses table)",
        ],
        color: "from-teal-500/20 to-teal-600/10",
    },
    {
        title: "Creative Director",
        details: [
            "Gemini 3 Flash Preview",
            "5-Lens Design Thinking Framework",
            "Outputs CreativeBrief: FLUX prompt, zone plan, asset routing, style tokens",
        ],
        color: "from-emerald-500/20 to-emerald-600/10",
    },
    {
        title: "FLUX.2 Pro Background",
        details: [
            "Art-only background generation (no text rendered)",
            "Prompt and style tokens from Creative Director",
            "Powered by Replicate",
        ],
        color: "from-amber-500/20 to-amber-600/10",
    },
    {
        title: "Art Director",
        details: [
            "Gemini 3 Flash Preview",
            "Sees the actual FLUX background image",
            "6-Lens Vision Analysis",
            "Outputs VisionLayout: %-based text, asset, shape coords",
        ],
        color: "from-orange-500/20 to-orange-600/10",
    },
    {
        title: "Render + Composite",
        details: [
            "Satori renders text overlay (Google Fonts, transparent)",
            "Sharp composites: background + text + assets",
        ],
        color: "from-rose-500/20 to-rose-600/10",
    },
    {
        title: "Deliver",
        details: [
            "Upload final image to Convex Storage",
            "Save to generation history (cost, seed, inputs)",
            "Display in UI",
        ],
        color: "from-pink-500/20 to-pink-600/10",
    },
];

export default function GlyphFlowDiagram() {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    return (
        <div className="my-10 sm:my-14">
            <h3 className="text-base font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                The Pipeline
            </h3>
            <div className="relative">
                {steps.map((step, i) => (
                    <div key={step.title} className="relative">
                        {/* Connector line */}
                        {i < steps.length - 1 && (
                            <div className="absolute left-5 top-full w-px h-2 bg-neutral-300 dark:bg-neutral-600 z-0" />
                        )}

                        {/* Step */}
                        <motion.button
                            onClick={() =>
                                setActiveStep(activeStep === i ? null : i)
                            }
                            className="w-full text-left mb-2 group"
                            whileTap={{ scale: 0.99 }}
                        >
                            <div
                                className={`relative rounded-xl border border-neutral-200 dark:border-neutral-700/60 p-3.5 sm:p-4 transition-all duration-200 cursor-pointer ${
                                    activeStep === i
                                        ? "bg-gradient-to-r " + step.color + " border-neutral-300 dark:border-neutral-600"
                                        : "hover:bg-neutral-50 dark:hover:bg-neutral-800/40"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    {/* Step number */}
                                    <div
                                        className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 transition-colors duration-200 ${
                                            activeStep === i
                                                ? "bg-neutral-800 dark:bg-neutral-100 text-white dark:text-neutral-900"
                                                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
                                        }`}
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <span className="text-sm sm:text-base font-semibold text-neutral-800 dark:text-neutral-200">
                                            {step.title}
                                        </span>
                                    </div>

                                    {/* Expand indicator */}
                                    <motion.span
                                        animate={{ rotate: activeStep === i ? 45 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="text-neutral-400 dark:text-neutral-500 text-lg font-light shrink-0"
                                    >
                                        +
                                    </motion.span>
                                </div>

                                {/* Expanded details */}
                                <AnimatePresence>
                                    {activeStep === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <ul className="mt-3 pt-3 border-t border-neutral-200/60 dark:border-neutral-700/40 space-y-1.5">
                                                {step.details.map((detail) => (
                                                    <li
                                                        key={detail}
                                                        className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2"
                                                    >
                                                        <span className="text-neutral-400 dark:text-neutral-500 mt-1.5 shrink-0 w-1 h-1 rounded-full bg-current" />
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.button>
                    </div>
                ))}
            </div>
        </div>
    );
}
