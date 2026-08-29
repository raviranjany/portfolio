"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  Database,
  Server,
  Sparkles,
} from "lucide-react";

const focusAreas = [
  "Frontend Development",
  "Backend Development",
  "REST API Development",
  "Responsive UI",
  "Database Integration",
  "Problem Solving",
];

const education = [
  {
    degree: "Master of Computer Applications",
    shortName: "MCA",
    institution: "CMR Institute of Technology",
    location: "Bangalore",
    year: "2023",
  },
  {
    degree: "Bachelor of Computer Applications",
    shortName: "BCA",
    institution: "College of Commerce, Arts and Science",
    location: "Patna",
    year: "2020",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[var(--background-secondary)]
        py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-40
            top-20
            h-72
            w-72
            rounded-full
            bg-[var(--glow-primary)]
            opacity-20
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-10
            h-72
            w-72
            rounded-full
            bg-[var(--glow-secondary)]
            opacity-15
            blur-[110px]
          "
        />
      </div>

      <div className="container-custom relative z-10">
        {/* ====
            SECTION HEADER
        ===== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
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
              text-[var(--primary)]
            "
          >
            <span className="h-px w-7 bg-[var(--primary)]" />

            About Me

            <span className="h-px w-7 bg-[var(--primary)]" />
          </div>

          <h2
            className="text-3xl font-bold leading-tight tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">

            Building products with code,
            <span className="gradient-text block">
              solving problems with purpose.
            </span>
          </h2>

          <p
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-muted)] sm:text-lg sm:leading-8">

            A developer focused on building clean, scalable and
            user-focused web experiences across the full stack.
          </p>
        </motion.div>

        {/*MAIN CONTENT */}

        <div
          className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">

          {/*  LEFT — PROFESSIONAL SUMMARY */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
            className="
              glass-card
              flex
              h-full
              flex-col
              p-6
              sm:p-8
              lg:p-9
            "
          >
            {/* Card heading */}
            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  text-[var(--primary)]
                "
              >
                <Code2 size={20} />
              </div>

              <div>
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-[var(--text-muted)]
                  "
                >
                  Professional Summary
                </p>

                <h3
                  className="
                    mt-1
                    text-xl
                    font-bold
                    text-[var(--text-primary)]
                    sm:text-2xl
                  "
                >
                  Full Stack JavaScript Developer
                </h3>
              </div>
            </div>

            {/* Summary */}
            <div
              className="
                mt-7
                space-y-5
                text-sm
                leading-7
                text-[var(--text-secondary)]
                sm:text-base
                sm:leading-8
              "
            >
              <p>
                I&apos;m a Full Stack JavaScript Developer with{" "}
                <strong className="font-semibold text-[var(--text-primary)]">
                  2.5+ years of experience
                </strong>{" "}
                building modern, responsive and scalable web
                applications.
              </p>

              <p>
                I work across both frontend and backend development,
                creating interactive interfaces with{" "}
                <strong className="font-semibold text-[var(--text-primary)]">
                  React and Next.js
                </strong>
                , developing APIs and server-side functionality with{" "}
                <strong className="font-semibold text-[var(--text-primary)]">
                  Node.js and Express.js
                </strong>
                , and working with{" "}
                <strong className="font-semibold text-[var(--text-primary)]">
                  MongoDB and MySQL
                </strong>{" "}
                for data-driven applications.
              </p>

              <p>
                My focus is on writing clean and maintainable code,
                building responsive user experiences, integrating
                reliable APIs, and solving real-world development
                problems efficiently.
              </p>
            </div>

            {/* Focus areas */}
            <div className="mt-8 border-t border-[var(--border)] pt-7">
              <p
                className="
                  mb-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[var(--text-muted)]
                "
              >
                What I Focus On
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {focusAreas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.05,
                    }}
                    className="
                      flex
                      items-center
                      gap-2.5
                      text-sm
                      text-[var(--text-secondary)]
                    "
                  >
                    <span
                      className="
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[var(--glow-primary)]
                        text-[var(--primary)]
                      "
                    >
                      ✓
                    </span>

                    {area}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Resume link */}
            <div className="mt-8">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-[var(--primary)]
                  transition-all
                  duration-300
                  hover:gap-3
                "
              >
                View my resume

                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* 
              RIGHT COLUMN
          = */}

          <div className="space-y-6">
            {/* Developer Snapshot */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: 0.1,
              }}
              className="
                glass-card
                p-6
                sm:p-8
              "
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-[var(--glow-primary)]
                      text-[var(--primary)]
                    "
                  >
                    <Sparkles size={19} />
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-[var(--text-muted)]
                      "
                    >
                      Developer Snapshot
                    </p>

                    <h3
                      className="
                        mt-0.5
                        font-bold
                        text-[var(--text-primary)]
                      "
                    >
                      My Approach
                    </h3>
                  </div>
                </div>

                <span
                  className="
                    hidden
                    rounded-full
                    border
                    border-[var(--border)]
                    px-3
                    py-1
                    text-[10px]
                    font-medium
                    text-[var(--text-muted)]
                    sm:block
                  "
                >
                  Full Stack
                </span>
              </div>

              {/* Stats */}
              <div
                className="
                  mt-7
                  grid
                  grid-cols-2
                  gap-3
                "
              >
                <div
                  className="
                    rounded-xl
                    border
                    border-[var(--border)]
                    bg-[var(--surface)]
                    p-4
                  "
                >
                  <p
                    className="
                      text-2xl
                      font-bold
                      text-[var(--text-primary)]
                    "
                  >
                    2.5+
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-[var(--text-muted)]
                    "
                  >
                    Years Experience
                  </p>
                </div>

                <div
                  className="
                    rounded-xl
                    border
                    border-[var(--border)]
                    bg-[var(--surface)]
                    p-4
                  "
                >
                  <p
                    className="
                      text-2xl
                      font-bold
                      text-[var(--primary)]
                    "
                  >
                    MERN
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-[var(--text-muted)]
                    "
                  >
                    Core Stack
                  </p>
                </div>
              </div>

              {/* Development flow */}
              <div className="mt-6">
                <p
                  className="
                    mb-4
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[var(--text-muted)]
                  "
                >
                  Development Flow
                </p>

                <div className="space-y-3">
                  <FlowItem
                    icon={<Code2 size={16} />}
                    title="Frontend"
                    description="React • Next.js • TypeScript"
                    accent="primary"
                  />

                  <div className="ml-5 h-3 w-px bg-[var(--border)]" />

                  <FlowItem
                    icon={<Server size={16} />}
                    title="Backend"
                    description="Node.js • Express.js • REST APIs"
                    accent="secondary"
                  />

                  <div className="ml-5 h-3 w-px bg-[var(--border)]" />

                  <FlowItem
                    icon={<Database size={16} />}
                    title="Database"
                    description="MongoDB • MySQL"
                    accent="primary"
                  />
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: 0.2,
              }}
              className="
                glass-card
                p-6
                sm:p-8
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-[var(--glow-secondary)]
                    text-[var(--secondary)]
                  "
                >
                  <GraduationCap size={19} />
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-[var(--text-muted)]
                    "
                  >
                    Education
                  </p>

                  <h3
                    className="
                      mt-0.5
                      font-bold
                      text-[var(--text-primary)]
                    "
                  >
                    Academic Background
                  </h3>
                </div>
              </div>

              <div className="mt-7 space-y-6">
                {education.map((item, index) => (
                  <div
                    key={item.shortName}
                    className="relative pl-7"
                  >
                    {/* Timeline line */}
                    {index !== education.length - 1 && (
                      <span
                        className="
                          absolute
                          left-[4px]
                          top-3
                          h-[calc(100%+24px)]
                          w-px
                          bg-[var(--border)]
                        "
                      />
                    )}

                    {/* Timeline dot */}
                    <span
                      className="
                        absolute
                        left-0
                        top-1.5
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-[var(--primary)]
                        ring-4
                        ring-[var(--glow-primary)]
                      "
                    />

                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h4
                            className="
                              text-sm
                              font-bold
                              text-[var(--text-primary)]
                              sm:text-base
                            "
                          >
                            {item.degree}
                          </h4>

                          <span
                            className="
                              rounded-md
                              border
                              border-[var(--border)]
                              px-1.5
                              py-0.5
                              text-[9px]
                              font-semibold
                              text-[var(--text-muted)]
                            "
                          >
                            {item.shortName}
                          </span>
                        </div>

                        <p
                          className="
                            mt-1
                            text-xs
                            text-[var(--text-secondary)]
                            sm:text-sm
                          "
                        >
                          {item.institution}
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-xs
                            text-[var(--text-muted)]
                          "
                        >
                          {item.location}
                        </p>
                      </div>

                      <span
                        className="
                          shrink-0
                          text-xs
                          font-semibold
                          text-[var(--primary)]
                        "
                      >
                        {item.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ====
            BOTTOM CAPABILITIES
        ===== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="
            mt-6
            grid
            gap-3
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          <Capability
            icon={<BriefcaseBusiness size={17} />}
            title="Professional"
            text="Production-focused development"
          />

          <Capability
            icon={<Code2 size={17} />}
            title="Clean Code"
            text="Readable and maintainable solutions"
          />

          <Capability
            icon={<Server size={17} />}
            title="Full Stack"
            text="Frontend to backend integration"
          />

          <Capability
            icon={<Sparkles size={17} />}
            title="User Focused"
            text="Responsive and intuitive experiences"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* 
   FLOW ITEM
 */

type FlowItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: "primary" | "secondary";
};

function FlowItem({
  icon,
  title,
  description,
  accent,
}: FlowItemProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
      "
    >
      <div
        className={`
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-[var(--border)]
          ${
            accent === "primary"
              ? "bg-[var(--glow-primary)] text-[var(--primary)]"
              : "bg-[var(--glow-secondary)] text-[var(--secondary)]"
          }
        `}
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p
          className="
            text-sm
            font-semibold
            text-[var(--text-primary)]
          "
        >
          {title}
        </p>

        <p
          className="
            truncate
            text-xs
            text-[var(--text-muted)]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/*  CAPABILITY */

type CapabilityProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

function Capability({
  icon,
  title,
  text,
}: CapabilityProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--primary)]
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-[var(--glow-primary)]
          text-[var(--primary)]
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p
          className="
            text-sm
            font-semibold
            text-[var(--text-primary)]
          "
        >
          {title}
        </p>

        <p
          className="
            mt-0.5
            text-[10px]
            leading-4
            text-[var(--text-muted)]
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
}