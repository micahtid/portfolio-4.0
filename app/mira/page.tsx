import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import NavigationBar from "../components/NavigationBar";

export default function MiraPage() {
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

                <article className="prose prose-neutral max-w-none">
                    <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">Mira</h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400">Coming Soon!</p>
                </article>
            </main>
            <NavigationBar />
        </div>
    );
}
