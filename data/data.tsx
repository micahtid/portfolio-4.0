export interface Experience {
  title: string;
  position: string;
  duration: string;
  description: string;
  contributions: React.ReactNode;
  websiteLink?: string;
  githubLink?: string;
  showcase?: boolean;
}

export interface Project {
  title: string;
  description?: string;
  duration?: string;
  technologies?: string[];
  githubLink?: string;
  websiteLink?: string;
  openSource?: boolean;
  showcase?: boolean;
}

export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

export const experiences: Experience[] = [
  {
    title: "findu",
    position: "software engineer intern",
    duration: "sep 2025 - present",
    description: "a startup helping students find their dream university",
    contributions: (
      <p className="text-sm text-gray-light leading-relaxed">
        during my time at findu, i contributed production software across the mobile and web stack using swift, react, and supabase. early on, i delivered slug-based implementations of multi-page figma designs, including a rebuilt{" "}
        <a href="https://www.joinfindu.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent transition-colors">
          landing page
        </a>{" "}
        and{" "}
        <a href="https://www.joinfindu.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent transition-colors">
          college directory
        </a>
        . later, i worked on the mobile{" "}
        <a href="https://www.joinfindu.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent transition-colors">
          scholarship tab
        </a>{" "}
        where i built the swipe interface, designed the matching algorithm, and stored user interactions
      </p>
    ),
    websiteLink: "https://www.joinfindu.com/",
    showcase: true,
  },
];

export const projects: Project[] = [
  {
    title: "snipcode",
    description: "a paid chrome extension that transforms raw dom elements into reusable code",
    duration: "jan 2026 - current",
    technologies: ["react", "node.js", "firebase", "stripe"],
    websiteLink: "https://mira-volunteer.vercel.app/",
    showcase: true,
  },
  {
    title: "mira",
    githubLink: "https://github.com/micahtid/mira",
    openSource: true,
  },
  {
    title: "restoring rainbows",
    githubLink: "https://github.com/micahtid/restoring-rainbows",
    openSource: true,
  },
  {
    title: "me2",
    githubLink: "https://github.com/micahtid/me2",
    openSource: true,
  },
];

export const links: Link[] = [
  {
    label: "email",
    href: "mailto:tidballmicah@gmail.com",
  },
  {
    label: "github",
    href: "https://github.com/micahtid",
    external: true,
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/micah-tidball-a1b28231b/",
    external: true,
  },
  {
    label: "book a call",
    href: "https://calendly.com/tidballmicah/30min",
  },
];
