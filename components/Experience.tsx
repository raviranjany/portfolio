"use client";

import Link from "next/link";
import { motion } from "motion/react";

import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  MapPin,
  Sparkles,
} from "lucide-react";

type Experience = {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  employmentType: string;
  current?: boolean;
  description: string;
  contributions: string[];
  technologies: string[];
};

const experiences: Experience[] = [
  {
    id: 1,

    role: "Full Stack Developer",

    company: "Have Faith Solutions Pvt. Ltd.",

    duration: "2025 — Present",

    location: "Noida, India",

    employmentType: "Full-time",

    current: true,

    description:
      "Working as a Full Stack Developer, building modern and responsive web applications with a focus on scalable frontend interfaces, backend services and database-driven solutions.",

    contributions: [
      "Developed responsive and modern web applications using React.js and Next.js.",
      "Built reusable UI components and responsive interfaces using Tailwind CSS.",
      "Developed and integrated REST APIs using Node.js and Express.js.",
      "Worked with MongoDB and MySQL for application data management.",
      "Used Git and GitHub for version control and project collaboration.",
      "Deployed frontend and backend applications using modern cloud platforms.",
    ],

    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Tailwind CSS",
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

    description:
      "Worked on full-stack web development projects and gained practical experience in building frontend interfaces, backend functionality and database-driven applications.",

    contributions: [
      "Developed responsive user interfaces for web applications.",
      "Worked with React.js to build reusable and interactive components.",
      "Assisted in developing backend functionality and API integration.",
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

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        border-t
        border-[var(--border)]
        bg-[var(--background)]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =============================================
          BACKGROUND EFFECTS
      ============================================== */}

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
            top-40
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
        {/* =============================================
            SECTION HEADER
        ============================================== */}

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
              text-[var(--primary)]
            "
          >
            <span
              className="
                h-px
                w-7
                bg-[var(--primary)]
              "
            />

            Experience

            <span
              className="
                h-px
                w-7
                bg-[var(--primary)]
              "
            />
          </div>

          <h2
            className="
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-[var(--text-primary)]
              sm:text-4xl
              lg:text-5xl
            "
          >
            My professional
            <span
              className="
                gradient-text
                block
              "
            >
              journey so far.
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
            Building real-world web applications and growing
            as a Full Stack Developer through hands-on
            professional experience.
          </p>
        </motion.div>

        {/* =============================================
            EXPERIENCE TIMELINE
        ============================================== */}

        <div
          className="
            relative
            mx-auto
            mt-14
            max-w-4xl
          "
        >
          {/* VERTICAL LINE */}

          <div
            className="
              absolute
              bottom-8
              left-[19px]
              top-8
              w-px
              bg-[var(--border)]
              sm:left-1/2
              sm:-translate-x-1/2
            "
          />

          <div
            className="
              space-y-12
              sm:space-y-16
            "
          >
            {experiences.map(
              (
                experience,
                index
              ) => {
                const isLeft =
                  index % 2 === 0;

                return (
                  <motion.div
                    key={experience.id}
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
                      duration: 0.6,
                    }}
                    className="
                      relative
                    "
                  >
                    {/* =================================
                        TIMELINE DOT
                    ================================= */}

                    <div
                      className="
                        absolute
                        left-[8px]
                        top-8
                        z-20
                        flex
                        h-6
                        w-6
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[var(--border)]
                        bg-[var(--background)]
                        sm:left-1/2
                        sm:-translate-x-1/2
                      "
                    >
                      <div
                        className={`
                          h-2.5
                          w-2.5
                          rounded-full
                          ${
                            experience.current
                              ? "bg-[var(--primary)] shadow-[0_0_20px_var(--primary)]"
                              : "bg-[var(--text-muted)]"
                          }
                        `}
                      />
                    </div>

                    {/* =================================
                        DESKTOP GRID
                    ================================= */}

                    <div
                      className="
                        grid
                        grid-cols-1
                        gap-6
                        pl-12
                        sm:grid-cols-2
                        sm:gap-12
                        sm:pl-0
                      "
                    >
                      {/* LEFT SIDE */}

                      <div
                        className={`
                          ${
                            isLeft
                              ? "sm:col-start-1"
                              : "sm:col-start-2"
                          }
                        `}
                      >
                        <motion.article
                          whileHover={{
                            y: -5,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className="
                            group
                            relative
                            overflow-hidden
                            rounded-3xl
                            border
                            border-[var(--border)]
                            bg-[var(--surface)]
                            p-5
                            transition-all
                            duration-300
                            hover:border-[var(--primary)]
                            hover:shadow-[0_15px_50px_var(--glow-primary)]
                            sm:p-7
                          "
                        >
                          {/* CURRENT BADGE */}

                          {experience.current && (
                            <div
                              className="
                                mb-5
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-[var(--primary)]
                                bg-[var(--background-secondary)]
                                px-3
                                py-1.5
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.12em]
                                text-[var(--primary)]
                              "
                            >
                              <span
                                className="
                                  relative
                                  flex
                                  h-2
                                  w-2
                                "
                              >
                                <span
                                  className="
                                    absolute
                                    inline-flex
                                    h-full
                                    w-full
                                    animate-ping
                                    rounded-full
                                    bg-[var(--primary)]
                                    opacity-70
                                  "
                                />

                                <span
                                  className="
                                    relative
                                    inline-flex
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-[var(--primary)]
                                  "
                                />
                              </span>

                              Currently Working
                            </div>
                          )}

                          {/* ROLE */}

                          <div
                            className="
                              flex
                              items-start
                              gap-3
                            "
                          >
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
                                bg-[var(--background-secondary)]
                                text-[var(--primary)]
                              "
                            >
                              <BriefcaseBusiness
                                size={20}
                              />
                            </div>

                            <div>
                              <h3
                                className="
                                  text-xl
                                  font-bold
                                  text-[var(--text-primary)]
                                  sm:text-2xl
                                "
                              >
                                {experience.role}
                              </h3>

                              <div
                                className="
                                  mt-2
                                  flex
                                  items-center
                                  gap-2
                                  text-sm
                                  font-medium
                                  text-[var(--text-secondary)]
                                "
                              >
                                <Building2
                                  size={15}
                                />

                                {experience.company}
                              </div>
                            </div>
                          </div>

                          {/* DATE & LOCATION */}

                          <div
                            className="
                              mt-6
                              grid
                              gap-3
                              text-xs
                              text-[var(--text-muted)]
                              sm:grid-cols-2
                            "
                          >
                            <div
                              className="
                                flex
                                items-center
                                gap-2
                              "
                            >
                              <CalendarDays
                                size={15}
                                className="
                                  text-[var(--primary)]
                                "
                              />

                              {experience.duration}
                            </div>

                            <div
                              className="
                                flex
                                items-center
                                gap-2
                              "
                            >
                              <MapPin
                                size={15}
                                className="
                                  text-[var(--primary)]
                                "
                              />

                              {experience.location}
                            </div>
                          </div>

                          {/* EMPLOYMENT TYPE */}

                          <div
                            className="
                              mt-4
                            "
                          >
                            <span
                              className="
                                rounded-full
                                border
                                border-[var(--border)]
                                px-3
                                py-1
                                text-[10px]
                                font-medium
                                text-[var(--text-muted)]
                              "
                            >
                              {experience.employmentType}
                            </span>
                          </div>

                          {/* DESCRIPTION */}

                          <p
                            className="
                              mt-6
                              text-sm
                              leading-7
                              text-[var(--text-muted)]
                            "
                          >
                            {experience.description}
                          </p>

                          {/* CONTRIBUTIONS */}

                          <div
                            className="
                              mt-7
                            "
                          >
                            <div
                              className="
                                mb-4
                                flex
                                items-center
                                gap-2
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.14em]
                                text-[var(--text-secondary)]
                              "
                            >
                              <Sparkles
                                size={14}
                                className="
                                  text-[var(--primary)]
                                "
                              />

                              Key Contributions
                            </div>

                            <ul
                              className="
                                space-y-3
                              "
                            >
                              {experience.contributions.map(
                                (
                                  contribution
                                ) => (
                                  <li
                                    key={
                                      contribution
                                    }
                                    className="
                                      flex
                                      items-start
                                      gap-3
                                      text-sm
                                      leading-6
                                      text-[var(--text-muted)]
                                    "
                                  >
                                    <CheckCircle2
                                      size={17}
                                      className="
                                        mt-0.5
                                        shrink-0
                                        text-[var(--primary)]
                                      "
                                    />

                                    {contribution}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          {/* TECHNOLOGIES */}

                          <div
                            className="
                              mt-7
                            "
                          >
                            <p
                              className="
                                mb-3
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.14em]
                                text-[var(--text-muted)]
                              "
                            >
                              Technologies Used
                            </p>

                            <div
                              className="
                                flex
                                flex-wrap
                                gap-2
                              "
                            >
                              {experience.technologies.map(
                                (
                                  technology
                                ) => (
                                  <span
                                    key={
                                      technology
                                    }
                                    className="
                                      rounded-lg
                                      border
                                      border-[var(--border)]
                                      bg-[var(--background-secondary)]
                                      px-2.5
                                      py-1.5
                                      text-[11px]
                                      font-medium
                                      text-[var(--text-secondary)]
                                      transition-colors
                                      duration-300
                                      group-hover:border-[var(--primary)]
                                    "
                                  >
                                    {
                                      technology
                                    }
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        </motion.article>
                      </div>
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>

        {/* =============================================
            EXPERIENCE SUMMARY
        ============================================== */}

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
            duration: 0.6,
          }}
          className="
            mx-auto
            mt-14
            max-w-4xl
            rounded-3xl
            border
            border-[var(--border)]
            bg-[var(--surface)]
            p-6
            text-center
            sm:p-8
          "
        >
          <p
            className="
              text-sm
              leading-7
              text-[var(--text-muted)]
              sm:text-base
            "
          >
            My professional journey is focused on
            continuously building modern web applications,
            improving full stack development skills and
            creating reliable digital solutions.
          </p>

          <Link
            href="/experience"
            className="
              group
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-[var(--border)]
              bg-[var(--background-secondary)]
              px-5
              py-3
              text-sm
              font-semibold
              text-[var(--text-primary)]
              transition-all
              duration-300
              hover:border-[var(--primary)]
              hover:text-[var(--primary)]
            "
          >
            View Full Experience

            <ArrowRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}