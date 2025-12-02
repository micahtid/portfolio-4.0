export interface Experience {
  title: string;
  position: string;
  duration: string;
  description: string;
  contributions: string[];
  githubLink?: string;
  websiteLink?: string;
  showcase?: boolean;
}

export interface Project {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  websiteLink?: string;
  showcase?: boolean;
}

export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

export const experiences: Experience[] = [
  {
    title: "???",
    position: "software engineer intern",
    duration: "jun 2025 - aug 2025",
    description: "coming soon!",
    contributions: [],
    showcase: false,
  },
  {
    title: "???",
    position: "software engineer intern",
    duration: "jan 2025 - may 2025",
    description: "coming soon!",
    contributions: [],
    showcase: false,
  },
  {
    title: "findu",
    position: "software engineer intern",
    duration: "sep 2025 - present",
    description: "a midwest b2c startup building a tinder-like app for finding universities.",
    contributions: [
      "built a scholarship-swiping feature with a matching algorithm using swift and supabase",
      "built multi-page figma designs one-to-one using react"
    ],
    websiteLink: "https://www.joinfindu.com/",
    showcase: true,
  }
];

export const projects: Project[] = [
  /*
  {
    title: "snipcode",
    date: "2024",
    description: "a browser extension that lets users inspect and save front-end code from any site.",
    technologies: ["react", "node.js", "firebase"],
    showcase: true,
  },
  */
  {
    title: "mira",
    date: "feb 2025 - mar 2025",
    description: "a platform for posting and managing volunteer roles. includes 20+ backend functions for database crud and subscriptions.",
    technologies: ["react", "node.js", "firebase", "stripe"],
    githubLink: "https://github.com/micahtid/mira",
    websiteLink: "https://mira-volunteer.vercel.app/",
  },
  {
    title: "restoring rainbows",
    date: "aug 2024 - jan 2025",
    description: "a site serving 9,000+ supporters with an admin dashboard for managing content and 200+ chapters.",
    technologies: ["react", "node.js", "firebase", "instagram api", "openstreetmap api"],
    githubLink: "https://github.com/micahtid/restoring-rainbows",
    websiteLink: "https://www.restoringrainbows.org/",
  },
];

export const hackathons: Project[] = [
  {
    title: "cornhacks: banana coin",
    date: "2024",
    description: "a gamified trading simulator with a depleting currency and random market events.",
    technologies: ["react", "node.js", "python", "firebase", "redis"],
    githubLink: "https://github.com/micahtid/banana-hacks",
  },
  {
    title: "hack midwest: beendone",
    date: "oct 2025",
    description: "a tool that analyzes a user's startup idea against 5,000+ yc startups.",
    technologies: ["react", "node.js", "python", "mongodb"],
    githubLink: "https://github.com/micahtid/hack-midwest",
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
