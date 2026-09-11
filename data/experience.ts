export type Experience = {
id: number;
role: string;
company: string;
duration: string;
location: string;
employmentType: string;
current?: boolean;
shortDescription: string;
description: string;
contributions: string[];
technologies: string[];
};

export const experiences: Experience[] = [
{
id: 1,


role: "Full Stack Developer",

company: "Have Faith Solutions Pvt. Ltd.",

duration: "2025 — Present",

location: "Noida, India",

employmentType: "Full-time",

current: true,

shortDescription:
  "Building modern, responsive web applications and full stack solutions using modern JavaScript technologies.",

description:
  "Working as a Full Stack Developer, building responsive web applications and scalable full stack solutions with a focus on frontend development, backend services, REST APIs and database-driven applications.",

contributions: [
  "Developed responsive and modern web applications using React.js and Next.js.",
  "Built reusable UI components and responsive interfaces using Tailwind CSS.",
  "Developed and integrated REST APIs using Node.js and Express.js.",
  "Worked with MongoDB and MySQL for application data management.",
  "Used Git and GitHub for version control and project collaboration.",
  "Worked on deploying modern frontend and backend applications.",
],

technologies: [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Git",
  "GitHub",
],


},

{
id: 2,


role: "Full Stack Developer Intern",

company: "Clout Business Network Limited",

duration: "Apr 2023 — Jul 2023",

location: "Bangalore, India",

employmentType: "Internship",

shortDescription:
  "Gained hands-on experience building web applications, frontend interfaces and backend functionality.",

description:
  "Worked as a Full Stack Developer Intern and gained practical experience in building responsive frontend interfaces, backend functionality, APIs and database-driven web applications.",

contributions: [
  "Developed responsive user interfaces for web applications.",
  "Built reusable and interactive frontend components using React.js.",
  "Worked on backend functionality and API integration.",
  "Worked with databases for storing and managing application data.",
  "Collaborated on real-world web development projects.",
],

technologies: [
  "React.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "HTML",
  "CSS",
  "Git",
],


},
];
