import { FiCode, FiZap } from "react-icons/fi";
import Hero from "./components/Hero";
import ExperienceCard from "./components/ExperienceCard";
import ExperimentCard from "./components/ExperimentCard";
import ContactForm from "./components/ContactForm";
import NavigationBar from "./components/NavigationBar";

const experiences = [
  {
    title: "Moneiva",
    position: "Co-Founder & CTO",
    dateRange: "2024 - Present",
    description:
      "Building a fintech platform to help students manage finances and build credit. Led development of the full-stack application from concept to MVP.",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "AWS"],
  },
  {
    title: "FindU",
    position: "Software Engineer",
    dateRange: "2023 - 2024",
    description:
      "Developed features for a social discovery platform connecting students with similar interests. Implemented real-time chat and matching algorithms.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "WebSocket"],
  },
];

const experiments = [
  {
    title: "Me2",
    description:
      "A real-time chat application for students to connect and collaborate on projects.",
    gifSrc: "/gifs/me2.gif",
  },
  {
    title: "Mira",
    description:
      "An AI-powered personal assistant for productivity and task management.",
    gifSrc: "/gifs/mira.gif",
  },
  {
    title: "Coming Soon",
    description: "Exciting new project in development. Stay tuned!",
    placeholderIcon: <FiCode className="text-slate-500 text-4xl" />,
  },
  {
    title: "Coming Soon",
    description: "Another project in the works. Check back later!",
    placeholderIcon: <FiZap className="text-slate-500 text-4xl" />,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Main Content Container */}
      <main className="mx-auto max-w-[800px] px-6 pt-20">
        {/* Hero Section */}
        <Hero
          imageSrc="/profile.jpg"
          name="Micah Tidball"
          description="I'm a freshman at the Raikes School @ University of Nebraska Lincoln studying Computer Science and Data. I build random full-stack applications in my free time."
        />

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.title} {...exp} />
            ))}
          </div>
        </section>

        {/* Experiments Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Experiments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiments.map((exp, index) => (
              <ExperimentCard key={index} {...exp} />
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mb-0">
          <ContactForm />
        </section>
      </main>

      {/* Bottom Navigation Bar */}
      <NavigationBar />
    </div>
  );
}
