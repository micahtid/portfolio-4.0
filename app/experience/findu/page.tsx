import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import NavigationBar from "../../components/NavigationBar";

export default function FindUPage() {
    return (
        <div className="min-h-screen">
            <main className="mx-auto max-w-[800px] px-4 sm:px-6 pt-12 sm:pt-20 pb-32">
                <Link
                    href="/"
                    className="inline-flex items-center text-slate-500 hover:text-slate-800 transition-colors mb-8 group"
                >
                    Back to Home
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <article className="prose prose-slate max-w-none">
                    <h1 className="text-4xl font-bold text-slate-900 mb-8">FindU</h1>

                    <h2 className="text-2xl font-bold text-slate-800 mb-4">My Role</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        I joined the FindU team to accelerate the development of the MVP. My primary focus was on the real-time messaging infrastructure and the matching algorithm that pairs users based on compatibility scores. I implemented WebSocket connections for sub-millisecond message delivery and developed a weighted scoring algorithm taking into account major, year, and user interests.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Technologies</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Developed with Next.js, Firebase, Tailwind CSS, Socket.io, Redis, Framer Motion, and TypeScript.
                    </p>
                </article>
            </main>
            <NavigationBar />
        </div>
    );
}
