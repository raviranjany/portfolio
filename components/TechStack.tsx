
"use client";
import { useState } from "react";
import { motion } from "motion/react";


import {
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers3,
  Monitor,
  Server,
  Wrench,
} from "lucide-react";

type SkillCategory =
  | "All"
  | "Frontend"
  | "Backend"
  | "Database"
  | "Tools"
  | "Deployment";

type Skill = {
  name: string;
  category: Exclude<SkillCategory, "All">;
  description: string;
  icon: string;
  featured?: boolean;
};

const categories: {
  name: SkillCategory;
  icon: React.ReactNode;
}[] = [
  {
    name: "All",
    icon: <Layers3 size={15} />,
  },
  {
    name: "Frontend",
    icon: <Monitor size={15} />,
  },
  {
    name: "Backend",
    icon: <Server size={15} />,
  },
  {
    name: "Database",
    icon: <Database size={15} />,
  },
  {
    name: "Tools",
    icon: <Wrench size={15} />,
  },
  {
    name: "Deployment",
    icon: <Globe size={15} />,
  },
];

const coreStack: Skill[] = [
  {
    name: "React.js",
    category: "Frontend",
    description:
      "Building reusable components and interactive user interfaces.",
    icon: "⚛",
    featured: true,
  },
  {
    name: "Next.js",
    category: "Frontend",
    description:
      "Building performant and scalable React applications.",
    icon: "N",
    featured: true,
  },
  {
    name: "Node.js",
    category: "Backend",
    description:
      "Developing server-side applications and backend services.",
    icon: "⬢",
    featured: true,
  },
  {
    name: "Express.js",
    category: "Backend",
    description:
      "Creating REST APIs and backend application architecture.",
    icon: "Ex",
    featured: true,
  },
  {
    name: "MongoDB",
    category: "Database",
    description:
      "Working with document-based application data.",
    icon: "M",
    featured: true,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description:
      "Writing type-safe and maintainable application code.",
    icon: "TS",
    featured: true,
  },
];

const skills: Skill[] = [
  ...coreStack,
  {
    name: "JavaScript",
    category: "Frontend",
    description:
      "Developing dynamic web experiences and application logic.",
    icon: "JS",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description:
      "Creating responsive and modern user interfaces.",
    icon: "TW",
  },
  {
    name: "HTML",
    category: "Frontend",
    description:
      "Building semantic and accessible web structures.",
    icon: "5",
  },
  {
    name: "CSS",
    category: "Frontend",
    description:
      "Creating responsive layouts and visual styling.",
    icon: "#",
  },
  {
    name: "REST APIs",
    category: "Backend",
    description:
      "Designing and integrating RESTful API services.",
    icon: "API",
  },
  {
    name: "MySQL",
    category: "Database",
    description:
      "Working with relational data and structured queries.",
    icon: "SQL",
  },
  {
    name: "Git",
    category: "Tools",
    description:
      "Managing source code and development workflows.",
    icon: "Git",
  },
  {
    name: "GitHub",
    category: "Tools",
    description:
      "Collaborating, managing repositories and version control.",
    icon: "GH",
  },
  {
    name: "VS Code",
    category: "Tools",
    description:
      "Primary development environment for building applications.",
    icon: "VS",
  },
  {
    name: "Postman",
    category: "Tools",
    description:
      "Testing and debugging APIs during development.",
    icon: "PM",
  },
  {
    name: "Vercel",
    category: "Deployment",
    description:
      "Deploying and hosting modern frontend applications.",
    icon: "▲",
  },
  {
    name: "Render",
    category: "Deployment",
    description:
      "Deploying backend services and web applications.",
    icon: "R",
  },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter(
          (skill) =>
            skill.category === activeCategory
        );

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[var(--background)]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -left-40
            top-20
            h-80
            w-80
            rounded-full
            bg-[var(--glow-primary)]
            opacity-20
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-20
            h-80
            w-80
            rounded-full
            bg-[var(--glow-secondary)]
            opacity-15
            blur-[120px]
          "
        />
      </div>

      <div
        className="
          container-custom
          relative
          z-10
        "
      >
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[var(--primary)]">
            <span
              className="
                h-px
                w-7
                bg-[var(--primary)]
              "
            />

            Tech Stack

            <span
              className="h-px w-7 bg-[var(--primary)]"/>
          </div>

          <h2
            className="text-3xl font-bold leading-tight tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
            The technologies behind
            <span
              className="gradient-text block">
              the products I build.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-[var(--text-muted)]
              sm:text-lg
              sm:leading-8
            "
          >
            A full stack development toolkit focused on
            modern JavaScript technologies, scalable
            applications and production-ready solutions.
          </p>
        </motion.div>

        {/* =====================================================
            CORE STACK
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.6,
            delay: 0.1,
          }}
          className="
            mx-auto
            mt-12
            max-w-6xl
          "
        >
          <div
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-8
                bg-[var(--border)]
              "
            />

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[var(--text-muted)]
              "
            >
              Core Full Stack
            </p>

            <span
              className="
                h-px
                w-8
                bg-[var(--border)]
              "
            />
          </div>

          <div
            className="
              grid
              grid-cols-2
              gap-3
              sm:grid-cols-3
              lg:grid-cols-6
            "
          >
            {coreStack.map((skill, index) => (
              <motion.div
                key={skill.name}
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
                  duration: 0.45,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  group
                  rounded-2xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  p-4
                  text-center
                  transition-all
                  duration-300
                  hover:border-[var(--primary)]
                  hover:shadow-[0_10px_40px_var(--glow-primary)]
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[var(--border)]
                    bg-[var(--background-secondary)]
                    text-sm
                    font-bold
                    text-[var(--primary)]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  {skill.icon}
                </div>

                <p
                  className="
                    mt-3
                    text-sm
                    font-semibold
                    text-[var(--text-primary)]
                  "
                >
                  {skill.name}
                </p>

                <p
                  className="
                    mt-1
                    text-[10px]
                    text-[var(--text-muted)]
                  "
                >
                  {skill.category}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            CATEGORY FILTER
        ====================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="
            mt-12
            flex
            justify-center
          "
        >
          <div
            className="
              flex
              max-w-full
              gap-2
              overflow-x-auto
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--surface)]
              p-1.5
              scrollbar-hide
            "
          >
            {categories.map((category) => {
              const isActive =
                activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() =>
                    setActiveCategory(
                      category.name
                    )
                  }
                  className={`
                    inline-flex
                    shrink-0
                    items-center
                    gap-1.5
                    rounded-xl
                    px-3
                    py-2
                    text-xs
                    font-semibold
                    transition-all
                    duration-300
                    sm:px-4
                    sm:text-sm
                    ${
                      isActive
                        ? "bg-[var(--primary)] text-white shadow-lg"
                        : "text-[var(--text-muted)] hover:bg-[var(--background-secondary)] hover:text-[var(--text-primary)]"
                    }
                  `}
                >
                  {category.icon}

                  {category.name}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* =====================================================
            SKILLS GRID
        ====================================================== */}

        <motion.div
          layout
          className="
            mx-auto
            mt-8
            grid
            max-w-6xl
            grid-cols-2
            gap-3
            sm:grid-cols-3
            lg:grid-cols-4
          "
        >
          {filteredSkills.map(
            (skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.04,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  group
                  rounded-2xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  p-4
                  transition-all
                  duration-300
                  hover:border-[var(--primary)]
                  hover:shadow-[0_10px_35px_var(--glow-primary)]
                  sm:p-5
                "
              >
                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-3
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[var(--border)]
                      bg-[var(--background-secondary)]
                      text-xs
                      font-bold
                      text-[var(--primary)]
                      transition-transform
                      duration-300
                      group-hover:scale-110">
                    
                    {skill.icon}
                  </div>

                  <span
                    className="rounded-full border border-[var(--border)] px-2 py-1 text-[8px] font-medium text-[var(--text-muted)] sm:text-[9px]">
                    {skill.category}
                  </span>
                </div>

                <h3
                  className="mt-4 text-sm font-bold text-[var(--text-primary)] sm:text-base">
                  {skill.name}
                </h3>

                <p
                  className="mt-2 text-[10px] leading-5 text-[var(--text-muted)] sm:text-xs sm:leading-5">
                  {skill.description}
                </p>
              </motion.div>
            )
          )}
        </motion.div>

        {/* =====================================================
            DEVELOPMENT WORKFLOW
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.6,
          }}
          className="mx-auto mt-12 max-w-6xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">

          <div
            className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div
                className="flex items-center gap-2 text-[var(--primary)]">
                <GitBranch size={18} />

                <span
                  className="text-xs font-semibold uppercase tracking-[0.14em]">

                  Development Workflow
                </span>
              </div>

              <h3
                className="mt-2 text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                From development to deployment.
              </h3>

              <p
                className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-muted)]">

                I work across the complete development
                lifecycle — from writing and testing code
                to version control and production deployment.
              </p>
            </div>

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-2
              "
            >
              {[
                "Code",
                "Test",
                "Git",
                "GitHub",
                "Deploy",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-2">

                  <span
                    className="rounded-lg border border-[var(--border)] bg-[var(--background-secondary)] px-3 py-2 text-xs font-medium text-[var(--text-secondary)]">

                    {step}
                  </span>

                  {index < 4 && (
                    <span
                      className="text-[var(--text-muted)]">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM NOTE
        ====================================================== */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="mx-auto mt-8 max-w-2xl text-center text-xs leading-6 text-[var(--text-muted)]">

          My primary focus is full stack
          development, with MERN technologies at the core
          of my development workflow.
        </motion.p>
      </div>
    </section>
  );
}