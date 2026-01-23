import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F1F5F9] px-6 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-800 mb-2">404</h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 mb-6">
                Page Not Found
            </h2>
            <p className="text-slate-600 max-w-md mb-8 leading-relaxed">
                The page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <Link
                href="/"
                className="bg-black/80 text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-black transition-colors"
            >
                Go Home
            </Link>
        </div>
    );
}
