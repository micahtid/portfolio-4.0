import { FiCode, FiArrowUpRight } from "react-icons/fi";
import Hero from "./components/Hero";
import ExperienceCard from "./components/ExperienceCard";
import ExperimentCard from "./components/ExperimentCard";
import ContactForm from "./components/ContactForm";
import NavigationBar from "./components/NavigationBar";

const experiences = [
  /*
  {
    title: "Moneiva",
    position: "Software Engineer Intern",
    dateRange: "May 2026 - August 2026",
    description: "Coming Soon!",
    technologies: ["React", "Dart", "AWS Services", "AI Platforms"],
    link: "/experience/moneiva",
  },
  */
  {
    title: "FindU",
    position: "Software Engineer",
    dateRange: "August 2025 - Present",
    description: "Contributing production software across the mobile and web stack. Led the development of the scholarship swipe interface and designed the core matching algorithm to connect students with the right opportunities.",
    technologies: ["Swift", "React", "Supabase"],
    link: "/experience/findu",
  },
];

const experiments = [
  {
    title: "Glyph",
    description: "Coming soon!",
    placeholderIcon: <FiCode className="text-neutral-500 text-4xl" />,
  },
  {
    title: "SnipCode",
    description: "Coming soon!",
    placeholderIcon: <FiCode className="text-neutral-500 text-4xl" />,
  },
  {
    title: "Restoring Rainbows",
    description: "An organizational website for a global youth-led NPO, featuring an admin dashboard for centralized data management.",
    gifSrc: "/gifs/restoring_rainbows.gif",
    githubLink: "https://github.com/micahtid/restoring-rainbows",
    websiteLink: "https://www.restoringrainbows.org/",
  },
  {
    title: "Mira",
    description:
      "A volunteer platform for youth-led organizations to create and track internship and volunteer opportunities.",
    gifSrc: "/gifs/mira.gif",
    githubLink: "https://github.com/micahtid/mira",
  },
  /*
  {
    title: "Me2",
    description:
      "A chat application connecting students with similar interests and shared circumstances.",
    gifSrc: "/gifs/me2.gif",
    githubLink: "https://github.com/micahtid/me2",
  },
  */
];

export default function Home() {
  // Split experiments for masonry layout
  const leftColumnExperiments = experiments.filter((_, i) => i % 2 === 0);
  const rightColumnExperiments = experiments.filter((_, i) => i % 2 !== 0);

  return (
    <div className="min-h-screen">
      {/* Main Content Container */}
      <main className="mx-auto max-w-[800px] px-4 sm:px-6 pt-12 sm:pt-20">
        {/* Hero Section */}
        <Hero
          imageSrc="/profile.jpg"
          name="Micah Tidball"
          description="I'm a freshman at the University of Nebraska-Lincoln studying Computer Science and Data. I ship full-stack applications in my free time. Check out my blog!"
        />

        {/* Experience Section */}
        <section className="mb-12 sm:mb-20">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Work Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.title} {...exp} />
            ))}
          </div>
        </section>

        {/* Experiments Section */}
        <section className="mb-12 sm:mb-20">
          <h2 className="text-2xl font-bold text-neutral-800 mb-2">Experiments</h2>
          <p className="text-neutral-600 mb-6">
            A few selected projects! View all{" "}
            <a
              href="https://github.com/micahtid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-neutral-900 decoration-neutral-300 underline underline-offset-4 hover:decoration-neutral-500 transition-colors"
            >
              <FiArrowUpRight className="mr-0.5 w-4 h-4 inline-block" />
              here
            </a>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Column */}
            <div className="flex flex-col gap-8">
              {leftColumnExperiments.map((exp) => (
                <ExperimentCard key={exp.title} {...exp} />
              ))}
            </div>
            {/* Right Column */}
            <div className="flex flex-col gap-8">
              {rightColumnExperiments.map((exp) => (
                <ExperimentCard key={exp.title} {...exp} />
              ))}
            </div>
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
