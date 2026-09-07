export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Tools"
  | "Deployment";

export interface Skill {
  name: string;
  category: SkillCategory;
  description: string;
  experience: string;
  level: number;
  technologies: string[];
  featured?: boolean;
}

export const skills: Skill[] = [
  {
    name: "React.js",
    category: "Frontend",
    description:
      "Building scalable and reusable component-based interfaces with modern React.",
    experience: "2+ Years",
    level: 90,
    technologies: ["Components", "Hooks", "Context API", "API Integration"],
    featured: true,
  },

  {
    name: "Next.js",
    category: "Frontend",
    description:
      "Developing modern React applications with routing, server rendering and optimized performance.",
    experience: "1+ Year",
    level: 80,
    technologies: ["App Router", "Server Components", "Routing", "SEO"],
    featured: true,
  },

  {
    name: "TypeScript",
    category: "Frontend",
    description:
      "Writing maintainable and type-safe applications with strong developer experience.",
    experience: "1+ Year",
    level: 80,
    technologies: ["Types", "Interfaces", "Generics", "Type Safety"],
    featured: true,
  },

  {
    name: "JavaScript",
    category: "Frontend",
    description:
      "Modern JavaScript development for interactive and dynamic web applications.",
    experience: "2+ Years",
    level: 90,
    technologies: ["ES6+", "Async/Await", "Promises", "DOM"],
  },

  {
    name: "Tailwind CSS",
    category: "Frontend",
    description:
      "Creating responsive and modern interfaces using utility-first CSS.",
    experience: "2+ Years",
    level: 90,
    technologies: ["Responsive Design", "Dark Mode", "Animations", "Design Systems"],
  },

  {
    name: "HTML",
    category: "Frontend",
    description:
      "Building semantic and accessible structures for modern websites.",
    experience: "2+ Years",
    level: 95,
    technologies: ["Semantic HTML", "Forms", "Accessibility"],
  },

  {
    name: "CSS",
    category: "Frontend",
    description:
      "Creating responsive layouts, animations and polished user interfaces.",
    experience: "2+ Years",
    level: 90,
    technologies: ["Flexbox", "Grid", "Animations", "Responsive Design"],
  },

  {
    name: "Node.js",
    category: "Backend",
    description:
      "Developing scalable server-side applications and backend services.",
    experience: "2+ Years",
    level: 85,
    technologies: ["REST APIs", "Authentication", "Middleware", "Async Programming"],
    featured: true,
  },

  {
    name: "Express.js",
    category: "Backend",
    description:
      "Building structured REST APIs and backend applications with Express.",
    experience: "2+ Years",
    level: 85,
    technologies: ["Routes", "Middleware", "Controllers", "REST APIs"],
    featured: true,
  },

  {
    name: "REST APIs",
    category: "Backend",
    description:
      "Designing and integrating RESTful APIs between frontend and backend systems.",
    experience: "2+ Years",
    level: 85,
    technologies: ["HTTP", "CRUD", "JSON", "API Integration"],
  },

  {
    name: "MongoDB",
    category: "Database",
    description:
      "Working with NoSQL databases for flexible and scalable application data.",
    experience: "2+ Years",
    level: 85,
    technologies: ["Collections", "Queries", "Indexes", "Mongoose"],
    featured: true,
  },

  {
    name: "MySQL",
    category: "Database",
    description:
      "Working with relational databases, queries and structured application data.",
    experience: "2+ Years",
    level: 75,
    technologies: ["SQL", "Queries", "Joins", "CRUD"],
  },

  {
    name: "Git",
    category: "Tools",
    description:
      "Managing source code, branches and development workflows.",
    experience: "2+ Years",
    level: 90,
    technologies: ["Branches", "Commits", "Merge", "Version Control"],
  },

  {
    name: "GitHub",
    category: "Tools",
    description:
      "Collaborating on projects and managing repositories using GitHub.",
    experience: "2+ Years",
    level: 90,
    technologies: ["Repositories", "Pull Requests", "Issues", "Actions"],
  },

  {
    name: "VS Code",
    category: "Tools",
    description:
      "Primary development environment for modern web application development.",
    experience: "2+ Years",
    level: 95,
    technologies: ["Extensions", "Debugging", "Git Integration"],
  },

  {
    name: "Postman",
    category: "Tools",
    description:
      "Testing, debugging and validating REST APIs during development.",
    experience: "2+ Years",
    level: 85,
    technologies: ["API Testing", "Collections", "Requests", "Environments"],
  },

  {
    name: "Vercel",
    category: "Deployment",
    description:
      "Deploying and hosting modern frontend and Next.js applications.",
    experience: "1+ Year",
    level: 80,
    technologies: ["Deployments", "Environment Variables", "Domains"],
  },

  {
    name: "Render",
    category: "Deployment",
    description:
      "Deploying backend services and APIs to cloud infrastructure.",
    experience: "1+ Year",
    level: 75,
    technologies: ["Web Services", "Environment Variables", "Deployment"],
  },
];