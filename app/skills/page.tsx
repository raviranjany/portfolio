"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers3,
  Server,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";
import { skills, SkillCategory } from "@/data/skills";

type Filter = "All" | SkillCategory;

const filters: Filter[] = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "Deployment",
];

const categoryIcons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
  Deployment: Globe,
};

const categoryDescriptions = {
  Frontend: "Building modern, responsive and interactive user interfaces.",
  Backend: "Developing APIs, server-side logic and scalable applications.",
  Database: "Designing and managing application data and database systems.",
  Tools: "Development, testing, version control and collaboration tools.",
  Deployment: "Deploying applications and services to production.",
};

export default function SkillsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredSkills = useMemo(() => {
    if (activeFilter === "All") {
      return skills;
    }

    return skills.filter((skill) => skill.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)] py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
              <Layers3 size={14} />
              Skills & Technologies
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              My technical toolkit.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
              A detailed overview of the technologies, tools and development
              practices I use to build modern full-stack applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Stack */}
      <section className="border-b border-[var(--border)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-500">
              Core Stack
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Full Stack Development
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills
              .filter((skill) => skill.featured)
              .map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-semibold">{skill.name}</h3>

                    <span className="rounded-full bg-blue-500/10 px-2.5 py-1 text-[10px] font-semibold text-blue-500">
                      Core
                    </span>
                  </div>

                  <div className="mb-3 h-2 overflow-hidden rounded-full bg-[var(--background)]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full rounded-full bg-blue-500"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
                    <span>{skill.experience}</span>
                    <span>{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-500">
              Complete Skillset
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Technologies & Tools
            </h2>
          </div>

          {/* Filters */}
          <div className="mb-10 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "border-blue-500 bg-blue-500 text-white"
                    : "border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)] hover:border-blue-500/50 hover:text-[var(--foreground)]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Skill cards */}
          <motion.div
            layout
            className="grid gap-5 md:grid-cols-2"
          >
            {filteredSkills.map((skill) => {
              const Icon = categoryIcons[skill.category];

              return (
                <motion.article
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)]">
                      <Icon size={21} className="text-blue-500" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {skill.name}
                          </h3>

                          <p className="mt-1 text-xs font-medium text-blue-500">
                            {skill.category}
                          </p>
                        </div>

                        <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted-foreground)]">
                          {skill.experience}
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
                        {skill.description}
                      </p>

                      {/* Progress */}
                      <div className="mt-5">
                        <div className="mb-2 flex justify-between text-xs text-[var(--muted-foreground)]">
                          <span>Proficiency</span>
                          <span>{skill.level}%</span>
                        </div>

                        <div className="h-1.5 overflow-hidden rounded-full bg-[var(--background)]">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="h-full rounded-full bg-blue-500"
                          />
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {skill.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="inline-flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--background)] px-2.5 py-1.5 text-xs text-[var(--muted-foreground)]"
                          >
                            <CheckCircle2 size={12} className="text-blue-500" />
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Category overview */}
      <section className="border-t border-[var(--border)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-500">
              How I Work
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Full-stack development from UI to deployment.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {(
              Object.keys(categoryDescriptions) as SkillCategory[]
            ).map((category) => {
              const Icon = categoryIcons[category];

              return (
                <div
                  key={category}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5"
                >
                  <Icon size={22} className="text-blue-500" />

                  <h3 className="mt-4 font-semibold">{category}</h3>

                  <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                    {categoryDescriptions[category]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--border)] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
            Let&apos;s build something modern, scalable and useful together.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600"
            >
              Let&apos;s Talk
              <ArrowUpRight size={17} />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-6 py-3 text-sm font-semibold transition-all hover:border-blue-500/50"
            >
              View Projects
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}