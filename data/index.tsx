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
  timeline: string;
  appUrl?: string;
  repositoryUrl?: string;
  images: string[];
  techs: Technology[];
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
  timeline: string;
  appUrl?: string;
  images: string[];
  techs: Technology[];
  primaryColor: string;
  secondaryColor: string;
}

export const projects: Project[] = [
  {
    title: "Mira",
    slug: "mira",
    description: "An application platform connecting youth-led organizations with potential interns and volunteers.",
    shortDescription: "Youth-led organizations connect with interns and volunteers.",
    longDescription: "Mira is a two-sided platform that revolutionizes how youth-led organizations connect with talent. The platform enables organizations to post onsite and remote internship and volunteer opportunities, review applicants, and select candidates efficiently. On the flip side, high school students can easily browse opportunities and apply for positions that match their interests and skills. As lead developer, I managed both the frontend and backend architecture, directing a team of three developers and a social media manager. The platform integrated cutting-edge features including email notifications and Stripe subscriptions for premium organization accounts. Unfortunately, despite building strong initial traction, the project was eventually halted due to limited market reach in this niche sector.",
    bulletPoints: [
      "Two-sided marketplace for organizations and students",
      "Email notification system for application updates",
      "Stripe integration for subscription management",
      "Full-stack development and team leadership",
      "Managed 3 developers and 1 social media manager"
    ],
    timeline: "2023 - 2024",
    appUrl: "https://mira-volunteer.vercel.app/",
    repositoryUrl: "https://github.com/micahtid/mira",
    images: [
      "/mira/1.png",
      "/mira/2.png"
    ],
    techs: [
      { name: "React", icon: <FaReact size={20} /> },
      { name: "Node.js", icon: <FaNodeJs size={20} /> },
      { name: "Firebase", icon: <SiFirebase size={20} /> },
      { name: "Stripe", icon: <SiStripe size={20} /> }
    ],
    primaryColor: "#8B5CF6",
    secondaryColor: "#EC4899"
  },
  {
    title: "Me2",
    slug: "me2",
    description: "A compatibility-based chat application connecting students with similar profiles.",
    shortDescription: "Connect students based on compatibility scores.",
    longDescription: "Me2 is an innovative chat platform designed specifically for students who want to connect based on shared interests and compatibility. The core feature is a proprietary compatibility algorithm that calculates match scores based on detailed profile data, enabling students to discover and connect with those most similar to them. The platform allows students to send chat requests, engage in real-time conversations, and join virtual study rooms together powered by Zoom integration. As lead developer working alongside one co-developer, I focused primarily on backend development and architecture—designing robust database schemas for chat data, implementing real-time messaging systems, and integrating third-party APIs. The platform built impressive momentum with a waitlist exceeding 1,000 users, but was ultimately halted due to resource constraints.",
    bulletPoints: [
      "Proprietary compatibility matching algorithm",
      "Real-time chat and messaging system",
      "Virtual study rooms with Zoom integration",
      "Backend-focused development and architecture",
      "1,000+ user waitlist at peak"
    ],
    timeline: "2022 - 2023",
    appUrl: "https://me2-beta.vercel.app/",
    repositoryUrl: "https://github.com/micahtid/me2",
    images: [
      "/me2/1.png",
      "/me2/2.png"
    ],
    techs: [
      { name: "React", icon: <FaReact size={20} /> },
      { name: "Node.js", icon: <FaNodeJs size={20} /> },
      { name: "Firebase", icon: <SiFirebase size={20} /> },
      { name: "Zoom API", icon: <SiZoom size={20} /> }
    ],
    primaryColor: "#06B6D4",
    secondaryColor: "#0EA5E9"
  }
];

export interface Memory {
  title: string;
  color: string;
  emoji: string;
  description: string;
}

export const memories: Memory[] = [
  {
    title: "Outstanding Cambridge Learner Award",
    color: "#FFD700",
    emoji: "🏆",
    description: "Recognized as an Outstanding Cambridge Learner for exceptional performance in International GCSE examinations."
  },
  {
    title: "Coding Club",
    color: "#3B82F6",
    emoji: "💻",
    description: "Founded and led a coding club where students collaborate on programming projects and share knowledge."
  },
  {
    title: "Hack Midwest",
    color: "#EC4899",
    emoji: "⚡",
    description: "Participated in Hack Midwest hackathon, building innovative solutions within a limited timeframe."
  },
  {
    title: "Community Concern Society",
    color: "#10B981",
    emoji: "🤝",
    description: "Active member of Community Concern Society, contributing to local community initiatives and social causes."
  },
  {
    title: "Nebraska Startup Academy",
    color: "#F97316",
    emoji: "🚀",
    description: "Completed Nebraska Startup Academy program, learning entrepreneurship and business development strategies."
  }
];

export const experiences: Experience[] = [
  {
    title: "SWE Intern @ Restoring Rainbows",
    slug: "restoring-rainbows",
    description: "Developed a full-featured website and administrative panel for a NPO during a six-month internship.",
    shortDescription: "Full-featured website and admin panel for nonprofit organization.",
    longDescription: "During my six-month internship at Restoring Rainbows, I had the privilege of working directly with the co-founders to build their organizational website from the ground up. This was a comprehensive project that involved creating multiple pages showcasing the nonprofit's branches, board members, blog content, impact stories, and more. Beyond the public-facing website, I developed a robust administrative backend panel that enables staff members to easily manage dynamic content without technical knowledge. The platform seamlessly integrates multiple third-party APIs including Google Maps for location services and Instagram for social media feeds. This experience taught me valuable lessons about working with non-profit organizations, managing complex requirements, and building user-friendly solutions for both public users and internal staff.",
    bulletPoints: [
      "Built full-featured public website from scratch",
      "Developed administrative content management system",
      "Integrated Google Maps for location services",
      "Integrated Instagram API for social media feeds",
      "Collaborated directly with nonprofit co-founders",
      "Managed dynamic content and data structures"
    ],
    timeline: "2023 - 2024",
    appUrl: "https://restoringrainbows.org",
    images: [
      "/restoring-rainbows/1.png",
      "/restoring-rainbows/2.png"
    ],
    techs: [
      { name: "React", icon: <FaReact size={20} /> },
      { name: "Node.js", icon: <FaNodeJs size={20} /> },
      { name: "Firebase", icon: <SiFirebase size={20} /> },
      { name: "Open Street Map", icon: <SiGooglemaps size={20} /> },
      { name: "Instagram API", icon: <SiInstagram size={20} /> }
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
