export default function ContactForm() {
    return (
        <div className="bg-gradient-to-b from-[#F3F3F3] to-[#FFFFFF] rounded-t-2xl px-4 pt-6 sm:px-6 pb-44 mt-16 sm:mt-24 border-x border-t border-[#F3F3F3]">
            <form
                action="mailto:tidballmicah@gmail.com"
                method="post"
                encType="text/plain"
                className="space-y-4 max-w-2xl mx-auto"
            >
                {/* Name and Email Row - stack on mobile, side by side on larger */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="flex-1 px-4 py-3 rounded-xl border-2 border-neutral-200 bg-white/50 text-sm font-[inherit] focus:outline-none focus:border-blue-500 placeholder:text-neutral-400"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="flex-1 px-4 py-3 rounded-xl border-2 border-neutral-200 bg-white/50 text-sm font-[inherit] focus:outline-none focus:border-blue-500 placeholder:text-neutral-400"
                        required
                    />
                </div>

                {/* Message */}
                <div>
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 bg-white/50 text-sm font-[inherit] resize-none focus:outline-none focus:border-blue-500 placeholder:text-neutral-400"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-2">
                    <button
                        type="submit"
                        className="bg-black/80 text-white px-6 py-2 rounded-lg font-medium text-sm border-none cursor-pointer hover:bg-black transition-colors"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
