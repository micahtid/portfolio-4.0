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
    title: "findu",
    position: "software engineer intern",
    duration: "sep 2025 - present",
    description: "tinder for universities - a midwest b2c startup valued at $2 million",
    contributions: [
      "architected scholarship-swiping page with matching algorithm using swift & supabase",
      "built 1-to-1 slug-based implementations of multi-page figma designs using react"
    ],
    showcase: true,
  }
];

export const projects: Project[] = [
  {
    title: "snipcode",
    date: "2024",
    description: "a web extension to steal front-end code from any website",
    technologies: ["react", "node.js", "firebase"],
    showcase: true,
  },
  {
    title: "mira",
    date: "feb 2025",
    description: "a platform for organizations to post / manage volunteer positions and for students to apply. includes 20+ backend functions for database CRUD and subscriptions.",
    technologies: ["react", "node.js", "firebase", "stripe"],
  },
  {
    title: "restoring rainbows",
    date: "aug 2024 - jan 2025",
    description: "an interactive organizational website serving 9,000+ supporters. includes an admin dashboard with 30+ backend functions to manage content across the site and 200+ chapters.",
    technologies: ["react", "node.js", "firebase", "instagram api", "openstreetmap api"],
  },
];

export const hackathons: Project[] = [
  {
    title: "cornhacks: banana coin",
    date: "2024",
    description: "a gamified artificial trading simulator to compete with friends. involves a depleting currency and random market events.",
    technologies: ["react", "node.js", "python", "firebase", "redis"],
  },
  {
    title: "hack midwest (2nd): beendone",
    date: "oct 2025",
    description: "platform to analyze user's startup idea against 5,000+ yc startups.",
    technologies: ["react", "node.js", "python", "mongodb"],
  },
];

export const links: Link[] = [
  {
    label: "email",
    href: "mailto:your@email.com",
  },
  {
    label: "github",
    href: "https://github.com",
    external: true,
  },
  {
    label: "linkedin",
    href: "https://linkedin.com",
    external: true,
  },
  {
    label: "book a call",
    href: "#",
  },
];
