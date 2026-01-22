import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import NavigationBar from "../components/NavigationBar";

export default function MiraPage() {
    return (
        <div className="min-h-screen">
            <main className="mx-auto max-w-[800px] px-4 sm:px-6 pt-12 sm:pt-20 pb-32">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center text-slate-500 hover:text-slate-800 transition-colors mb-8"
                >
                    Back to Home
                    <FiArrowRight className="ml-1.5" />
                </Link>

                {/* Content */}
                <article className="prose prose-slate max-w-none">
                    <h1 className="text-4xl font-bold text-slate-900 mb-8">Mira</h1>

                    <h2 className="text-2xl font-bold text-slate-800 mb-4">The Problem</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Managing multiple calendars, to-do lists, and reminders is chaotic. Existing tools are either too simple or too complex, lacking the intelligence to contextually understand what needs to be done and when. I found myself spending more time managing my tasks than actually doing them. I needed a system that could proactively assist me, not just store a list.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mb-4">The Solution</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Mira acts as a central nervous system for your productivity. It connects with your calendar, email, and project board to intelligently prioritize tasks. It leverages natural language processing to understand context and automate scheduling.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Tech Stack</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Built using OpenAI API, Python, FastAPI, React, PostgreSQL, and Docker.
                    </p>
                </article>
            </main>
            <NavigationBar />
        </div>
    );
}
