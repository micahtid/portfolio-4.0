interface ExperienceCardProps {
    title: string;
    position: string;
    dateRange: string;
    description: string;
    technologies: string[];
}

export default function ExperienceCard({
    title,
    position,
    dateRange,
    description,
    technologies,
}: ExperienceCardProps) {
    return (
        <div className="bg-gradient-to-b from-[#e9eef4] to-[#F1F5F9] rounded-2xl p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
            <div className="flex justify-between items-center mb-2">
                <span className="text-slate-700 font-semibold">{position}</span>
                <span className="text-slate-700 font-semibold">{dateRange}</span>
            </div>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                {description}
            </p>
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className="bg-transparent text-slate-600 px-3 py-1 rounded-full text-xs font-semibold border border-slate-400"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
