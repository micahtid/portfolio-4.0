import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiFirebase, SiStripe, SiZoom, SiGooglemaps, SiInstagram } from 'react-icons/si';

export interface Technology {
  name: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  longDescription: string;
  bulletPoints: string[];
  contributionPoints: string[];
  timeline: string;
  appUrl?: string;
  repositoryUrl?: string;
  images: string[];
  primaryColor: string;
  secondaryColor: string;
}

export interface Experience {
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  longDescription: string;
  bulletPoints: string[];
  contributionPoints: string[];
  timeline: string;
  appUrl?: string;
  images: string[];
  primaryColor: string;
  secondaryColor: string;
}

export const projects: Project[] = [
  {
    title: "Mira",
    slug: "mira",
    description: "An application platform connecting youth-led organizations with potential interns and volunteers.",
    shortDescription: "Youth-led organizations connect with interns and volunteers.",
    longDescription: "Mira is a two-sided platform. It enables youth-led organizations to post onsite and remote internship and volunteer opportunities, review applicants, and select candidates. Likewise, it allows high school students to easily apply for these positions. As lead developer, I managed both the frontend and backend, directing a team of three developers. Unfortunately, it was eventually halted due to limited reach in this niche market.",
    bulletPoints: [
      "Two-sided marketplace for organizations and students",
      "Email notification system for application updates",
      "Stripe integration for subscription management",
      "Full-stack development and team leadership",
      "Managed 3 developers and 1 social media manager"
    ],
    contributionPoints: [
      "Constructed two-sided platform for organizations to post positions, manage applicants, and for students to apply",
      "Wrote and implemented 20+ backend functions handling database CRUD and Stripe subscriptions",
      "Led a team of three developers and pitched product to secure partnerships with 10+ organizations"
    ],
    timeline: "2023 - 2024",
    appUrl: "https://mira-volunteer.vercel.app/",
    repositoryUrl: "https://github.com/micahtid/mira",
    images: [
      "/mira/1.png",
      "/mira/2.png"
    ],
    primaryColor: "#8B5CF6",
    secondaryColor: "#EC4899"
  },
  {
    title: "Me2",
    slug: "me2",
    description: "A compatibility-based chat application connecting students with similar profiles.",
    shortDescription: "Connect students based on compatibility scores.",
    longDescription: "Me2 is a chat platform designed specifically for students. Using a compatibility algorithm, it calculates scores based on stored profile data, enabling students to connect with those most similar to them. Me2 allows students to send chat requests and join study rooms together. As lead developer, working alongside one co-developer, I focused primarily on backend development—designing the database architecture for chat data and integrating APIs such as Zoom.",
    bulletPoints: [
      "Proprietary compatibility matching algorithm",
      "Real-time chat and messaging system",
      "Virtual study rooms with Zoom integration",
      "Backend-focused development and architecture",
      "1,000+ user waitlist at peak"
    ],
    contributionPoints: [
      "Co-developed platform enabling student connections through similarity-based matching, hosting 50+ chat rooms",
      "Designed compatibility algorithm leveraging four profile data points to calculate similarity scores for matching"
    ],
    timeline: "2022 - 2023",
    appUrl: "https://me2-beta.vercel.app/",
    repositoryUrl: "https://github.com/micahtid/me2",
    images: [
      "/me2/1.png",
      "/me2/2.png"
    ],
    primaryColor: "#06B6D4",
    secondaryColor: "#0EA5E9"
  }
];

export interface Memory {
  title: string;
  slug: string;
  description?: string;
  image?: string;
  date?: string;
}

export const memories: Memory[] = [
  {
    title: "Hack Midwest",
    slug: "hack-midwest",
    description: "Participated in Hack Midwest hackathon, building innovative solutions within a limited timeframe. This experience taught me the value of rapid prototyping, teamwork under pressure, and bringing creative ideas to life in just 24 hours.",
    image: "/experiences/hack_midwest_2025.png",
    date: "March 2025"
  },
  {
    title: "Nebraska Startup Academy",
    slug: "nebraska-startup-academy",
    date: "July 2024"
  },
  {
    title: "Outstanding Cambridge Learner Award",
    slug: "cambridge-learner-award",
    description: "Recognized as an Outstanding Cambridge Learner for exceptional performance in International GCSE examinations. This award recognized outstanding achievement and contribution to the school community through academic excellence and leadership.",
    date: "May 2024"
  },
  {
    title: "Community Concern Society",
    slug: "community-concern",
    description: "Active member of Community Concern Society, contributing to local community initiatives and social causes. Through this organization, I gained valuable experience in community engagement and learned the importance of giving back to those in need.",
    date: "January 2024"
  },
  {
    title: "Coding Club",
    slug: "coding-club",
    date: "September 2023"
  }
];

export const experiences: Experience[] = [
  {
    title: "SWE Intern @ Coming soon...",
    slug: "coming-soon",
    description: "Internship details coming soon.",
    shortDescription: "Internship details coming soon.",
    longDescription: "Coming soon...",
    bulletPoints: [],
    contributionPoints: [
      "Applied Agile development processes to build 1-to-1 React implementations of multi-page Figma designs",
      "Leveraged Supabase to create reusable slug-based pages for 100+ colleges"
    ],
    timeline: "2025",
    images: [],
    primaryColor: "#3B82F6",
    secondaryColor: "#60A5FA"
  },
  {
    title: "SWE Intern @ Restoring Rainbows",
    slug: "restoring-rainbows",
    description: "Developed a full-featured website and administrative panel for a NPO during a six-month internship.",
    shortDescription: "Full-featured website and admin panel for nonprofit organization.",
    longDescription: "Worked directly with co-founders to build their organizational website from the ground up. The site features pages highlighting the nonprofit's branches, board members, and more. It also includes an administrative backend panel, allowing staff to easily manage dynamic content. Throughout the project, I integrated several APIs, including Google Maps and Instagram.",
    bulletPoints: [
      "Built full-featured public website from scratch",
      "Developed administrative content management system",
      "Integrated Google Maps for location services",
      "Integrated Instagram API for social media feeds",
      "Collaborated directly with nonprofit co-founders",
      "Managed dynamic content and data structures"
    ],
    contributionPoints: [
      "Engineered interactive organizational website serving 9,000+ supporters using React, Node.js, and Firebase",
      "Developed admin dashboard for staff to manage dynamic content across multiple pages and 200+ branches",
      "Integrated APIs including OpenStreetMap and Instagram to enhance website functionality"
    ],
    timeline: "2023 - 2024",
    appUrl: "https://restoringrainbows.org",
    images: [
      "/restoring-rainbows/1.png",
      "/restoring-rainbows/2.png"
    ],
    primaryColor: "#10B981",
    secondaryColor: "#34D399"
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getExperienceBySlug = (slug: string): Experience | undefined => {
  return experiences.find(experience => experience.slug === slug);
};

export const getMemoryBySlug = (slug: string): Memory | undefined => {
  return memories.find(memory => memory.slug === slug);
};
