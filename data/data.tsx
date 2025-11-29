export interface Experience {
  title: string;
  location: string;
  duration: string;
  description: string;
  contributions: string[];
  githubLink?: string;
  websiteLink?: string;
  showcase: boolean;
}

export interface Project {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  websiteLink?: string;
  showcase: boolean;
}

export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

export const experiences: Experience[] = [
  {
    title: "swe intern @ FindU",
    location: "lincoln, ne",
    duration: "jan 2024 - present",
    description: "midwest b2c startup valued at $2 million",
    contributions: [
      "created scholarship page with swiping algorithm using swift and supabase",
      "built 1-to-1 react slug implementations of multi-page figma design"
    ],
    githubLink: "https://github.com",
    websiteLink: "https://example.com",
    showcase: true,
  },
  {
    title: "intern",
    location: "remote",
    duration: "summer 2023",
    description: "a startup focused on education technology",
    contributions: [
      "developed features for the main platform",
      "fixed bugs and improved performance"
    ],
    showcase: false,
  },
];

export const projects: Project[] = [
  {
    title: "snipcode",
    date: "2024",
    description: "a platform for sharing code snippets and collaborating with developers",
    technologies: ["react", "next.js", "typescript", "tailwind css"],
    githubLink: "https://github.com",
    websiteLink: "https://snipcode.dev",
    showcase: true,
  },
  {
    title: "portfolio website",
    date: "2024",
    description: "personal portfolio built with next.js and modern animations",
    technologies: ["next.js", "typescript", "tailwind css"],
    githubLink: "https://github.com",
    showcase: true,
  },
  {
    title: "side project",
    date: "2023",
    description: "an experimental project for learning new technologies",
    technologies: ["python", "fastapi"],
    showcase: false,
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
