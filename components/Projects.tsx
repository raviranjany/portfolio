
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[var(--background)] py-20 sm:py-24 lg:py-28"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-32 h-80 w-80 rounded-full bg-[var(--glow-primary)] opacity-20 blur-[120px]" />

        <div className="absolute -right-40 bottom-32 h-80 w-80 rounded-full bg-[var(--glow-secondary)] opacity-15 blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
            <span className="h-px w-7 bg-[var(--primary)]" />

            Featured Projects

            <span className="h-px w-7 bg-[var(--primary)]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            Things I&apos;ve{" "}
            <span className="gradient-text">
              built.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-muted)] sm:text-lg sm:leading-8">
            A selection of products and applications
            I&apos;ve designed, developed and deployed
            using modern web technologies.
          </p>
        </motion.div>

        {/* Projects */}

        <div className="mx-auto mt-14 max-w-6xl space-y-12 lg:mt-20 lg:space-y-20">
          {featuredProjects.map(
            (project, index) => {
              const isReversed = index % 2 === 1;

              return (
                <motion.article
                  key={project.id}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.05,
                  }}
                  className={`group grid overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] lg:grid-cols-2 ${
                    isReversed
                      ? "lg:grid-flow-dense"
                      : ""
                  }`}
                >
                  {/* Project Image */}

                  <div
                    className={`relative min-h-[260px] overflow-hidden sm:min-h-[360px] lg:min-h-[470px] ${
                      isReversed
                        ? "lg:col-start-2"
                        : ""
                    }`}
                  >
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />

                    <Image
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    {/* Browser Dots */}

                    <div className="absolute left-4 top-4 z-20 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-3 py-2 backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-white/70" />
                      <span className="h-2 w-2 rounded-full bg-white/50" />
                      <span className="h-2 w-2 rounded-full bg-white/30" />
                    </div>

                    {/* Status */}

                    {project.status && (
                      <div className="absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-2 text-xs font-medium text-white backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                        {project.status}
                      </div>
                    )}
                  </div>

                  {/* Project Content */}

                  <div
                    className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12 ${
                      isReversed
                        ? "lg:col-start-1 lg:row-start-1"
                        : ""
                    }`}
                  >
                    {/* Number */}

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold tracking-[0.15em] text-[var(--primary)]">
                        0{index + 1}
                      </span>

                      <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                        {project.type}
                      </span>
                    </div>

                    {/* Category */}

                    <div className="mt-7">
                      <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--background-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)]">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}

                    <h3 className="mt-5 text-2xl font-bold tracking-tight text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--primary)] sm:text-3xl lg:text-4xl">
                      {project.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-muted)] sm:text-base sm:leading-8">
                      {project.description}
                    </p>

                    {/* Technologies */}

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="rounded-lg border border-[var(--border)] bg-[var(--background-secondary)] px-2.5 py-1.5 text-[10px] font-medium text-[var(--text-secondary)] transition-colors duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)] sm:text-xs"
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>

                    {/* Links */}

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                        >
                          Live Demo

                          <ExternalLink
                            size={15}
                          />
                        </a>
                      )}

                      {project.caseStudyUrl && (
                        <Link
                          href={project.caseStudyUrl}
                          className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] px-4 py-2.5 text-sm font-semibold text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                        >
                          Case Study

                          <ArrowUpRight
                            size={15}
                          />
                        </Link>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] text-[var(--text-secondary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                          aria-label={`${project.title} GitHub repository`}
                        >
                          <FaGithub
                            size={17}
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            }
          )}
        </div>

        {/* View All */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="mt-12 flex justify-center lg:mt-16"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-lg"
          >
            View All Projects

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
