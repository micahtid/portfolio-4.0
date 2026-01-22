import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import NavigationBar from "../../components/NavigationBar";

export default function MoneivaPage() {
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
                    <h1 className="text-4xl font-bold text-slate-900 mb-8">Moneiva</h1>

                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Engineering the Platform</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        As the Co-Founder and CTO, I architected the Moneiva platform from the ground up. We chose a microservices architecture to ensure scalability and utilized AWS for robust infrastructure. One of the biggest challenges was integrating with banking APIs (Plaid) while ensuring strict compliance and data security. We implemented a secure proxy server and end-to-end encryption to handle sensitive financial data.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Key Features</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        The platform features smart transaction categorization for budgeting, rent reporting for credit building, and bank-grade security encryption.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Core Technologies</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        React, Node.js, TypeScript, PostgreSQL, AWS Lambda, Terraform, Plaid API, and Stripe.
                    </p>
                </article>
            </main>
            <NavigationBar />
        </div>
    );
}
