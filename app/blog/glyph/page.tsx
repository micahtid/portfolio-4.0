import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import NavigationBar from "../../components/NavigationBar";
import GlyphFlowDiagram from "./GlyphFlowDiagram";

export default function GlyphBlogPost() {
    return (
        <div className="min-h-screen">
            <main className="mx-auto max-w-[680px] px-4 sm:px-6 pt-12 sm:pt-20 pb-32">
                <Link
                    href="/"
                    className="inline-flex items-center text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors mb-8"
                >
                    Back to Home
                    <FiArrowRight className="ml-1.5" />
                </Link>

                <article>
                    {/* Header */}
                    <header className="mb-10 sm:mb-12">
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3 tracking-wide uppercase">
                            February 2026 &middot; 4 min read
                        </p>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-neutral-100 leading-tight mb-4">
                            I Spent Three Months Building Something Nobody Wanted
                        </h1>
                        <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
                            The story of Glyph, an AI-powered carousel generator for nonprofits &mdash; and why it never shipped.
                        </p>
                    </header>

                    {/* Body */}
                    <div className="space-y-6 text-base leading-[1.75] text-neutral-700 dark:text-neutral-300">
                        <p>
                            In December 2025, I stumbled across a founder on Instagram who had
                            built a tool to automate carousel posts for his nonprofit. Most of these
                            posts follow the same visual template &mdash; bold headline, branded colors,
                            simple layout. It seemed like the kind of repetitive work AI could
                            handle. I thought I could build it <span className="font-semibold text-neutral-900 dark:text-neutral-100">better</span>.
                        </p>

                        <p>
                            So I started Glyph as an honors project. The idea was simple: paste an
                            Instagram handle, let AI analyze the account&apos;s visual style, and generate
                            new carousel slides that feel on-brand. During high school, I&apos;d interned
                            at{" "}
                            <a
                                href="https://www.restoringrainbows.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-900 dark:text-neutral-100 underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-600 hover:decoration-neutral-500 dark:hover:decoration-neutral-400 transition-colors"
                            >
                                Restoring Rainbows
                            </a>, one of the largest youth-led nonprofits, so I
                            felt I had the connections to grow something like this.
                        </p>

                        <p className="font-semibold text-neutral-800 dark:text-neutral-200">
                            I did not do a single minute of user validation before writing code.
                        </p>

                        {/* Section: The Build */}
                        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 pt-4">
                            The Build
                        </h2>

                        <p>
                            For three months straight, I refined the pipeline. Glyph scraped posts
                            via Apify, ran them through Gemini for visual analysis, used a
                            multi-stage &ldquo;Creative Director&rdquo; and &ldquo;Art Director&rdquo; orchestration
                            layer, generated backgrounds with FLUX.2 Pro on Replicate, then
                            composited text overlays using Satori and Sharp.
                        </p>

                        <GlyphFlowDiagram />

                        <p>
                            The architecture was ambitious &mdash; maybe too ambitious.
                            I had Gemini 3 Flash acting as a Creative Director using a
                            5-Lens Design Thinking Framework. A second AI call acted as an Art
                            Director, analyzing the generated background image with a 6-Lens
                            Vision Analysis to output precise text coordinates. It was{" "}
                            <span className="italic">engineered</span>.
                        </p>

                        {/* Section: Where It Broke */}
                        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 pt-4">
                            Where It Broke
                        </h2>

                        <p>
                            Image generation just wasn&apos;t there yet. FLUX.2 Pro was the only model
                            I could afford at scale, and the results were inconsistent. Extracting
                            visual inspiration from existing posts and translating it into something
                            that looked organically produced by a nonprofit &mdash; not AI-generated &mdash; was
                            incredibly hard.
                        </p>

                        <p>
                            Text rendering was another nightmare. AI models hallucinate spelling, so
                            I built an entire compositing layer with Satori and Sharp just to overlay
                            real text onto the AI-generated backgrounds. I added layer after layer of
                            complexity, but I was stuck in a{" "}
                            <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                                perpetual loop of refining without real progress
                            </span>.
                        </p>

                        <p>
                            When I shifted from hardcoded prompts to a genuine design-thinking
                            approach, the problem got harder, not easier. By late February, the
                            conclusion was clear: current image generation models aren&apos;t good enough
                            for this specific use case.
                        </p>

                        {/* Section: The Real Problem */}
                        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 pt-4">
                            The Real Problem
                        </h2>

                        <p>
                            When I finally did customer discovery, the answer was obvious.
                            Nonprofits have <span className="italic">thousands</span> of volunteers.
                            Making Instagram carousels is exactly the kind of task they can
                            delegate for free. Why would they pay for an AI tool to do it?
                        </p>

                        <p>
                            The more I researched, the more the evidence stacked up: this was not a
                            sustainable idea. Not because the technology was impossible &mdash; it will get
                            there eventually &mdash; but because the market didn&apos;t need it right now.
                        </p>

                        {/* Section: What I Took Away */}
                        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 pt-4">
                            What I Took Away
                        </h2>

                        <div className="border-l-2 border-neutral-300 dark:border-neutral-600 pl-5 my-6">
                            <p className="text-neutral-600 dark:text-neutral-400 italic text-[17px] leading-relaxed">
                                Build something people really want, or ship it in a week and
                                get quick validation. You can&apos;t spend months on a project you
                                don&apos;t know will succeed.
                            </p>
                        </div>

                        <p>
                            Three months of work and nothing to show for it stung. But the lesson
                            was worth every hour. I learned more about AI orchestration, image
                            compositing, and prompt engineering than any course could teach. And I
                            learned the hardest lesson in building products:{" "}
                            <span className="font-bold text-neutral-900 dark:text-neutral-100">
                                talk to users first
                            </span>.
                        </p>

                        <p>
                            Glyph taught me that the best engineering in the world doesn&apos;t matter
                            if you&apos;re solving a problem nobody has.
                        </p>
                    </div>
                </article>
            </main>
            <NavigationBar />
        </div>
    );
}
