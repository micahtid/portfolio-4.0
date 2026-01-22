import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import NavigationBar from "../../components/NavigationBar";

export default function FindUPage() {
    return (
        <div className="min-h-screen">
            <main className="mx-auto max-w-[800px] px-4 sm:px-6 pt-12 sm:pt-20 pb-32">
                <Link
                    href="/"
                    className="inline-flex items-center text-slate-500 hover:text-slate-800 transition-colors mb-8"
                >
                    Back to Home
                    <FiArrowRight className="ml-1.5" />
                </Link>

                <article className="prose prose-slate max-w-none">
                    <h1 className="text-4xl font-bold text-slate-900 mb-8">FindU</h1>
                    <p className="text-xl text-slate-600">Coming Soon!</p>
                </article>
            </main>
            <NavigationBar />
        </div>
    );
}
