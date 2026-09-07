"use client";

import Link from "next/link";
import { ArrowRight, Database, Globe, Server, Code2, GitBranch, Layers3 } from "lucide-react";
import { motion } from "motion/react";

const coreSkills = [
  {
    name: "React.js",
    category: "Frontend",
    description: "Building scalable and reusable user interfaces.",
    icon: "⚛",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "Modern full-stack applications with React.",
    icon: "N",
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Building scalable backend applications and APIs.",
    icon: "⬢",
  },
  {
    name: "Express.js",
    category: "Backend",
    description: "REST APIs and backend application architecture.",
    icon: "Ex",
  },
  {
    name: "MongoDB",
    category: "Database",
    description: "NoSQL database design and data management.",
    icon: "M",
  },
  {
    name: "TypeScript",
    category: "Language",
    description: "Type-safe and maintainable application development.",
    icon: "TS",
  },
];

const workflow = [
  { name: "Develop", icon: Code2 },
  { name: "API", icon: Server },
  { name: "Database", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "Deploy", icon: Globe },
];

export default function TechStackPreview() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--background)] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
            <Layers3 size={14} />
            Tech Stack
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Technologies I work with
          </h2>

          <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
            A focused selection of the technologies I use to build modern,
            scalable and production-ready web applications.
          </p>
        </motion.div>

        {/* Core Skills */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)] text-sm font-bold text-[var(--foreground)] transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>

                <div className="min-w-0">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-[var(--foreground)]">
                      {skill.name}
                    </h3>

                    <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-medium text-blue-500">
                      {skill.category}
                    </span>
                  </div>

                  <p className="text-sm leading-6 text-[var(--muted-foreground)]">
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6"
        >
          <div className="mb-5">
            <h3 className="font-semibold text-[var(--foreground)]">
              Development Workflow
            </h3>
            <p className="mt-1 text-sm text-[var(--muted-foreground)]">
              From development to production.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {workflow.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-3 text-sm font-medium text-[var(--foreground)]"
                >
                  <Icon size={16} className="text-blue-500" />
                  {item.name}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/skills"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10"
          >
            View All Skills
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}