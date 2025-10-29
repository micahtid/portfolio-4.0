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
    longDescription: "A two-sided marketplace connecting youth-led organizations with student interns and volunteers. Led full-stack development and team of 3 developers. Integrated email notifications and Stripe subscriptions for premium accounts. Built strong initial traction with 1000+ users before halting due to market constraints.",
    bulletPoints: [
      "Two-sided marketplace for organizations and students",
      "Email notification system for application updates",
      "Stripe integration for subscription management",
      "Full-stack development and team leadership",
      "Managed 3 developers and 1 social media manager"
    ],
    contributionPoints: [
      "Architected full-stack application with React frontend and Node.js backend",
      "Implemented Stripe payment processing for premium organization subscriptions",
      "Designed and built email notification system for user updates",
      "Led development team of 3 developers, coordinating features and sprints",
      "Deployed application to Vercel with Firebase backend integration"
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
    longDescription: "A student-focused chat platform using proprietary compatibility algorithms to match users. Features real-time messaging, virtual study rooms via Zoom API, and complex backend architecture. Achieved 1000+ user waitlist before halting due to resource constraints.",
    bulletPoints: [
      "Proprietary compatibility matching algorithm",
      "Real-time chat and messaging system",
      "Virtual study rooms with Zoom integration",
      "Backend-focused development and architecture",
      "1,000+ user waitlist at peak"
    ],
    contributionPoints: [
      "Designed and implemented proprietary compatibility matching algorithm",
      "Built real-time messaging infrastructure using Firebase and WebSockets",
      "Integrated Zoom API for virtual study room functionality",
      "Architected backend database schemas for efficient user and chat data management",
      "Grew user base to 1,000+ waitlist members through iterative product development"
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
  description: string;
  fullDescription: string;
  image?: string;
}

export const memories: Memory[] = [
  {
    title: "Outstanding Cambridge Learner Award",
    slug: "cambridge-learner-award",
    description: "Recognized as an Outstanding Cambridge Learner for exceptional performance in International GCSE examinations.",
    fullDescription: "Recognized as an Outstanding Cambridge Learner for exceptional performance in International GCSE examinations. This award recognized outstanding achievement and contribution to the school community through academic excellence and leadership."
  },
  {
    title: "Coding Club",
    slug: "coding-club",
    description: "Founded and led a coding club where students collaborate on programming projects and share knowledge.",
    fullDescription: "Founded and led a coding club where students collaborate on programming projects and share knowledge. The club focused on teaching practical programming skills, fostering a community of learners, and building projects that made an impact in our school."
  },
  {
    title: "Hack Midwest",
    slug: "hack-midwest",
    description: "Participated in Hack Midwest hackathon, building innovative solutions within a limited timeframe.",
    fullDescription: "Participated in Hack Midwest hackathon, building innovative solutions within a limited timeframe. This experience taught me the value of rapid prototyping, teamwork under pressure, and bringing creative ideas to life in just 24 hours.",
    image: "/experiences/hack_midwest_2025.png"
  },
  {
    title: "Community Concern Society",
    slug: "community-concern",
    description: "Active member of Community Concern Society, contributing to local community initiatives and social causes.",
    fullDescription: "Active member of Community Concern Society, contributing to local community initiatives and social causes. Through this organization, I gained valuable experience in community engagement and learned the importance of giving back to those in need."
  },
  {
    title: "Nebraska Startup Academy",
    slug: "nebraska-startup-academy",
    description: "Completed Nebraska Startup Academy program, learning entrepreneurship and business development strategies.",
    fullDescription: "Completed Nebraska Startup Academy program, learning entrepreneurship and business development strategies. This immersive program provided hands-on experience in startup development, from ideation to pitch presentation, and connected me with experienced entrepreneurs and mentors."
  }
];

export const experiences: Experience[] = [
  {
    title: "SWE Intern @ Restoring Rainbows",
    slug: "restoring-rainbows",
    description: "Developed a full-featured website and administrative panel for a NPO during a six-month internship.",
    shortDescription: "Full-featured website and admin panel for nonprofit organization.",
    longDescription: "Built full-featured website and CMS for nonprofit from scratch. Developed admin panel enabling staff to manage content without technical knowledge. Integrated Google Maps and Instagram APIs. Collaborated directly with co-founders to deliver user-centric solutions for public and internal users.",
    bulletPoints: [
      "Built full-featured public website from scratch",
      "Developed administrative content management system",
      "Integrated Google Maps for location services",
      "Integrated Instagram API for social media feeds",
      "Collaborated directly with nonprofit co-founders",
      "Managed dynamic content and data structures"
    ],
    contributionPoints: [
      "Built complete website from scratch with React frontend and Node.js backend",
      "Developed intuitive admin panel allowing staff to manage content without coding knowledge",
      "Integrated Google Maps API for displaying branch locations across nonprofit network",
      "Implemented Instagram API integration to automatically display social media feeds",
      "Collaborated with nonprofit co-founders to understand requirements and deliver solutions",
      "Deployed website to production with continuous updates and maintenance"
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
