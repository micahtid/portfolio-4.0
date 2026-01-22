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
    link: "#",
  },
  {
    title: "FindU",
    position: "Software Engineer",
    dateRange: "2023 - 2024",
    description:
      "Developed features for a social discovery platform connecting students with similar interests. Implemented real-time chat and matching algorithms.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "WebSocket"],
    link: "#",
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
    link: "#",
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
      <main className="mx-auto max-w-[800px] px-4 sm:px-6 pt-12 sm:pt-20">
        {/* Hero Section */}
        <Hero
          imageSrc="/profile.jpg"
          name="Micah Tidball"
          description={
            <>
              I&apos;m a freshman at the{" "}
              <a href="https://raikes.unl.edu" target="_blank" rel="noopener noreferrer" className="underline">
                Raikes School
              </a>{" "}
              @{" "}
              <a href="https://www.unl.edu" target="_blank" rel="noopener noreferrer" className="underline">
                University of Nebraska-Lincoln
              </a>{" "}
              studying Computer Science and Data. I build random full-stack applications in my free time.
            </>
          }
        />

        {/* Experience Section */}
        <section className="mb-12 sm:mb-20">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Work Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.title} {...exp} />
            ))}
          </div>
        </section>

        {/* Experiments Section */}
        <section className="mb-12 sm:mb-20">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Experiments</h2>
          <p className="text-slate-600 mb-6">A few selected projects!</p>
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
