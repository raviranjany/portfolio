
export type ProjectCategory = "Full Stack" | "Frontend";

export type Project = {
  id: number;
  title: string;
  category: ProjectCategory;
  type: string;
  description: string;
  technologies: string[];
  image: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  status?: "Live" | "Completed" | "In Progress";
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Hotel Management System",
    category: "Full Stack",
    type: "Web Application",
    description:
      "A full-stack hotel management platform designed to manage bookings, rooms, customers, payments and administrative operations through a modern web interface.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
    ],
    image: "/projects/hotel-management.webp",
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
    caseStudyUrl: "/projects/hotel-management",
    status: "Live",
  },

  {
    id: 2,
    title: "Real Estate Platform",
    category: "Full Stack",
    type: "Real Estate Platform",
    description:
      "A responsive real estate platform for discovering properties with property listings, filtering, property details, agent information and wishlist functionality.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    image: "/projects/real-estate.webp",
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
    caseStudyUrl: "/projects/real-estate",
    status: "Live",
  },

  {
    id: 3,
    title: "News Application",
    category: "Frontend",
    type: "API Based Application",
    description:
      "A modern news application that integrates external APIs to display dynamic news content with category browsing, search and responsive layouts.",
    technologies: [
      "React.js",
      "JavaScript",
      "REST API",
      "Tailwind CSS",
    ],
    image: "/projects/news-app.webp",
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
    caseStudyUrl: "/projects/news-app",
    status: "Completed",
  },
];
