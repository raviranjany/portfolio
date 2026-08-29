
"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Database,
  Server,
  Monitor,
  Code2,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack JavaScript Developer",
  "Frontend Developer",
  "Backend Developer",
  "MERN Stack Developer",
  "React & Next.js Developer",
  "Problem Solver",
];

const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TypeScript",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[var(--background)]
        pt-28
        pb-16
        text-[var(--text-primary)]
        sm:pt-32
      "
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Primary Glow */}
        <div
          className="
            absolute
            -left-40
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-[var(--glow-primary)]
            opacity-30
            blur-[130px]
          "
        />

        {/* Secondary Glow */}
        <div
          className="
            absolute
            -right-40
            top-32
            h-[420px]
            w-[420px]
            rounded-full
            bg-[var(--glow-secondary)]
            opacity-30
            blur-[130px]
          "
        />

        {/* Grid */}
        <div
          className="
            grid-background
            absolute
            inset-0
            opacity-20
            [mask-image:linear-gradient(to_bottom,black,transparent_80%)]
          "
        />
      </div>

      <div className="container-custom relative z-10">
        <div
          className="
            grid
            min-h-[calc(100vh-180px)]
            items-center
            gap-16
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-12
            xl:gap-20
          "
        >
          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <div className="max-w-3xl">
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                mb-6
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--surface)]
                px-4
                py-2
                text-sm
                font-medium
                text-[var(--text-secondary)]
                shadow-sm
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[var(--success)]
                    opacity-70
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-[var(--success)]
                  "
                />
              </span>

              Available for opportunities
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.1,
              }}
              className="
                mb-2
                text-lg
                font-medium
                text-[var(--text-secondary)]
                sm:text-xl
              "
            >
              Hi, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.15,
              }}
              className="
                text-5xl
                font-bold
                leading-[1.05]
                tracking-[-0.045em]
                sm:text-6xl
                md:text-7xl
                lg:text-[72px]
                xl:text-[80px]
              "
            >
              Raviranjan{" "}
              <span className="gradient-text">
                Kumar
              </span>
            </motion.h1>

            {/* =================================================
                ANIMATED ROLE
            ================================================== */}

            <div
              className="
                mt-6
                min-h-[42px]
                overflow-hidden
                sm:min-h-[50px]
              "
            >
              <AnimatePresence mode="wait">
                <motion.h2
                  key={roles[roleIndex]}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -25,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  className="
                    text-2xl
                    font-semibold
                    text-[var(--text-secondary)]
                    sm:text-3xl
                    md:text-4xl
                  "
                >
                  {roles[roleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="
                mt-6
                max-w-2xl
                text-base
                leading-7
                text-[var(--text-muted)]
                sm:text-lg
                sm:leading-8
              "
            >
              I build modern, responsive and scalable web
              applications with a focus on clean UI,
              performance and great user experience.
            </motion.p>

            {/* =================================================
                CTA
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              {/* Projects */}
              <Link
                href="/projects"
                className="
                  btn-primary
                  group
                  w-full
                  sm:w-auto
                "
              >
                View Projects

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>

              {/* Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  btn-secondary
                  group
                  w-full
                  sm:w-auto
                "
              >
                <Download
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-y-0.5
                  "
                />

                View Resume
              </a>
            </motion.div>

            {/* =================================================
                SOCIAL
            ================================================== */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="
                mt-8
                flex
                items-center
                gap-5
              "
            >
              <span
                className="
                  text-sm
                  font-medium
                  text-[var(--text-muted)]
                "
              >
                Connect
              </span>

              <span
                className="
                  h-px
                  w-8
                  bg-[var(--border)]
                "
              />

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  text-[var(--text-muted)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:text-[var(--text-primary)]
                "
              >
                <FaGithub size={21} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  text-[var(--text-muted)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:text-[var(--primary)]
                "
              >
                <FaLinkedin size={21} />
              </a>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT SIDE
              DEVELOPER CODE CARD + FULL STACK ARCHITECTURE
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[540px]
            "
          >
            {/* Background Glow */}
            <div
              className="
                pointer-events-none
                absolute
                inset-10
                rounded-full
                bg-[var(--glow-primary)]
                opacity-40
                blur-[100px]
              "
            />

            {/* =================================================
                FLOATING TECH BADGES
            ================================================== */}

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -left-3
                top-12
                z-20
                hidden
                items-center
                gap-2
                rounded-xl
                border
                border-[var(--border)]
                bg-[var(--surface)]
                px-3
                py-2
                text-xs
                font-semibold
                text-[var(--text-secondary)]
                shadow-xl
                sm:flex
                md:-left-8
              "
            >
              <Code2
                size={15}
                className="text-[var(--primary)]"
              />

              React
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-3
                top-20
                z-20
                hidden
                items-center
                gap-2
                rounded-xl
                border
                border-[var(--border)]
                bg-[var(--surface)]
                px-3
                py-2
                text-xs
                font-semibold
                text-[var(--text-secondary)]
                shadow-xl
                sm:flex
                md:-right-8
              "
            >
              <Server
                size={15}
                className="text-[var(--secondary)]"
              />

              Node.js
            </motion.div>

            {/* =================================================
                MAIN DEVELOPER CARD
            ================================================== */}

            <div
              className="
                glass-card
                relative
                overflow-hidden
                p-4
                shadow-2xl
                sm:p-5
              "
            >
              {/* Browser Header */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[var(--border)]
                  pb-4
                "
              >
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-[var(--text-muted)]
                  "
                >
                  <span className="hidden sm:inline">
                    portfolio/
                  </span>

                  developer.tsx
                </div>
              </div>

              {/* Code Window */}
              <div
                className="
                  mt-5
                  rounded-xl
                  border
                  border-[var(--border)]
                  bg-[var(--background-secondary)]
                  p-4
                  font-mono
                  text-[11px]
                  leading-6
                  sm:p-5
                  sm:text-xs
                  sm:leading-7
                "
              >
                <div>
                  <span className="text-[var(--secondary)]">
                    const
                  </span>{" "}
                  <span className="text-[var(--accent)]">
                    developer
                  </span>{" "}
                  = {"{"}
                </div>

                <div className="pl-4 sm:pl-5">
                  <span className="text-[var(--text-muted)]">
                    name:
                  </span>{" "}
                  <span className="text-[var(--success)]">
                    &quot;Raviranjan Kumar&quot;
                  </span>
                  ,
                </div>

                <div className="pl-4 sm:pl-5">
                  <span className="text-[var(--text-muted)]">
                    role:
                  </span>{" "}
                  <span className="text-[var(--success)]">
                    &quot;Full Stack Developer&quot;
                  </span>
                  ,
                </div>

                <div className="pl-4 sm:pl-5">
                  <span className="text-[var(--text-muted)]">
                    experience:
                  </span>{" "}
                  <span className="text-[var(--accent)]">
                    &quot;2.5+ years&quot;
                  </span>
                  ,
                </div>

                <div className="pl-4 sm:pl-5">
                  <span className="text-[var(--text-muted)]">
                    frontend:
                  </span>{" "}
                  <span className="text-[var(--success)]">
                    [&quot;React&quot;, &quot;Next.js&quot;]
                  </span>
                  ,
                </div>

                <div className="pl-4 sm:pl-5">
                  <span className="text-[var(--text-muted)]">
                    backend:
                  </span>{" "}
                  <span className="text-[var(--success)]">
                    [&quot;Node.js&quot;, &quot;Express.js&quot;]
                  </span>
                  ,
                </div>

                <div className="pl-4 sm:pl-5">
                  <span className="text-[var(--text-muted)]">
                    database:
                  </span>{" "}
                  <span className="text-[var(--success)]">
                    [&quot;MongoDB&quot;, &quot;MySQL&quot;]
                  </span>
                </div>

                <div>{"};"}</div>

                <div className="mt-4">
                  <span className="text-[var(--secondary)]">
                    developer
                  </span>
                  .
                  <span className="text-[var(--accent)]">
                    build
                  </span>
                  ();
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 1.1,
                      repeat: Infinity,
                    }}
                    className="
                      ml-1
                      inline-block
                      h-3
                      w-1.5
                      bg-[var(--primary)]
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  FULL STACK ARCHITECTURE
              ================================================== */}

              <div className="mt-5">
                <p
                  className="
                    mb-3
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-[var(--text-muted)]
                  "
                >
                  Full Stack Architecture
                </p>

                <div className="grid gap-2">
                  {/* Frontend */}
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-[var(--border)]
                      bg-[var(--surface)]
                      p-3
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
                      <Monitor size={17} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[var(--text-primary)]">
                        Frontend
                      </p>

                      <p className="mt-0.5 truncate text-[10px] text-[var(--text-muted)]">
                        React • Next.js • Tailwind CSS
                      </p>
                    </div>
                  </div>

                  {/* Connector */}
                  <div className="ml-7 h-2 w-px bg-[var(--border)]" />

                  {/* Backend */}
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-[var(--border)]
                      bg-[var(--surface)]
                      p-3
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
                        bg-[var(--glow-secondary)]
                        text-[var(--secondary)]
                      "
                    >
                      <Server size={17} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[var(--text-primary)]">
                        Backend
                      </p>

                      <p className="mt-0.5 truncate text-[10px] text-[var(--text-muted)]">
                        Node.js • Express.js • REST APIs
                      </p>
                    </div>
                  </div>

                  {/* Connector */}
                  <div className="ml-7 h-2 w-px bg-[var(--border)]" />

                  {/* Database */}
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-[var(--border)]
                      bg-[var(--surface)]
                      p-3
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
                        text-[var(--accent)]
                      "
                    >
                      <Database size={17} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[var(--text-primary)]">
                        Database
                      </p>

                      <p className="mt-0.5 truncate text-[10px] text-[var(--text-muted)]">
                        MongoDB • MySQL
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-5">
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-lg
                        border
                        border-[var(--border)]
                        bg-[var(--background-secondary)]
                        px-2.5
                        py-1.5
                        text-[10px]
                        font-medium
                        text-[var(--text-secondary)]
                        transition-all
                        duration-300
                        hover:border-[var(--primary)]
                        hover:text-[var(--primary)]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* =================================================
                EXPERIENCE BADGE
            ================================================== */}

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-5
                left-4
                z-20
                hidden
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--surface)]
                px-4
                py-3
                shadow-2xl
                sm:block
                md:left-[-28px]
              "
            >
              <p
                className="
                  text-xl
                  font-bold
                  text-[var(--text-primary)]
                "
              >
                2.5+
              </p>

              <p
                className="
                  text-[10px]
                  text-[var(--text-muted)]
                "
              >
                Years Experience
              </p>
            </motion.div>

            {/* =================================================
                FULL STACK BADGE
            ================================================== */}

            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-3
                -bottom-5
                z-20
                hidden
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--surface)]
                px-4
                py-3
                shadow-2xl
                sm:block
                md:-right-8
              "
            >
              <p
                className="
                  text-xl
                  font-bold
                  text-[var(--primary)]
                "
              >
                MERN
              </p>

              <p
                className="
                  text-[10px]
                  text-[var(--text-muted)]
                "
              >
                Full Stack
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* =====================================================
            SCROLL INDICATOR
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
          }}
          className="
            mt-10
            hidden
            items-center
            justify-center
            gap-2
            text-xs
            text-[var(--text-muted)]
            sm:flex
          "
        >
          <span>Scroll to explore</span>

          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ArrowDown size={15} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}









// "use client";

// import Link from "next/link";
// import { ArrowDown, ArrowUpRight, Download, } from "lucide-react";
// import { FaGithub, FaLinkedin, } from "react-icons/fa";
// import { motion } from "motion/react";

// const techStack = [
//   "React.js",
//   "Next.js",
//   "Node.js",
//   "Express.js",
//   "MongoDB",
//   "Tailwind CSS",
  
// ];

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="
//         relative
//         flex
//         min-h-screen
//         items-center
//         overflow-hidden
//         bg-[var(--background)]
//         pt-28
//         pb-16
//         text-[var(--text-primary)]
//       "
//     >
//       {/* Background Effects */}
//       <div className="pointer-events-none absolute inset-0">
//         <div
//           className="
//             absolute
//             left-[-180px]
//             top-[10%]
//             h-[400px]
//             w-[400px]
//             rounded-full
//             bg-[var(--glow-primary)]
//             opacity-30
//             blur-[120px]
//           "
//         />

//         <div
//           className="
//             absolute
//             right-[-150px]
//             top-[20%]
//             h-[400px]
//             w-[400px]
//             rounded-full
//             bg-[var(--glow-secondary)]
//             opacity-30
//             blur-[120px]
//           "
//         />
//       </div>

//       {/* Grid Background */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           opacity-30
//           [mask-image:linear-gradient(to_bottom,black,transparent)]
//         "
//       >
//         <div className="grid-background absolute inset-0" />
//       </div>

//       <div className="container-custom relative z-10">
//         <div
//           className="
//             grid
//             items-center
//             gap-14
//             lg:grid-cols-[1.1fr_0.9fr]
//             lg:gap-20
//           "
//         >
//           {/* =====================================================
//               LEFT CONTENT
//           ====================================================== */}
//           <div>
//             {/* Availability Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="
//                 mb-6
//                 inline-flex
//                 items-center
//                 gap-2
//                 rounded-full
//                 border
//                 border-[var(--border)]
//                 bg-[var(--surface)]
//                 px-4
//                 py-2
//                 text-sm
//                 text-[var(--text-secondary)]
//               "
//             >
//               <span className="relative flex h-2.5 w-2.5">
//                 <span
//                   className="
//                     absolute
//                     inline-flex
//                     h-full
//                     w-full
//                     animate-ping
//                     rounded-full
//                     bg-[var(--success)]
//                     opacity-75
//                   "
//                 />

//                 <span
//                   className="
//                     relative
//                     inline-flex
//                     h-2.5
//                     w-2.5
//                     rounded-full
//                     bg-[var(--success)]
//                   "
//                 />
//               </span>

//               Available for opportunities
//             </motion.div>

//             {/* Heading */}
//             <motion.div
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.6,
//                 delay: 0.1,
//               }}
//             >
//               <p
//                 className="
//                   mb-3
//                   text-lg
//                   font-medium
//                   text-[var(--text-secondary)]
//                   sm:text-xl
//                 "
//               >
//                 Hi, I&apos;m
//               </p>

//               <h1
//                 className="
//                   max-w-4xl
//                   text-5xl
//                   font-bold
//                   leading-[1.05]
//                   tracking-[-0.04em]
//                   sm:text-6xl
//                   md:text-7xl
//                   lg:text-[76px]
//                 "
//               >
//                 Raviranjan{" "}
//                 <span className="gradient-text">
//                   Kumar
//                 </span>
//               </h1>

//               <h2
//                 className="
//                   mt-5
//                   text-2xl
//                   font-semibold
//                   text-[var(--text-secondary)]
//                   sm:text-3xl
//                   md:text-4xl
//                 "
//               >
//                 MERN Stack Developer
//               </h2>
//             </motion.div>

//             {/* Description */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.6,
//                 delay: 0.2,
//               }}
//               className="
//                 mt-6
//                 max-w-2xl
//                 text-base
//                 leading-7
//                 text-[var(--text-muted)]
//                 sm:text-lg
//                 sm:leading-8
//               "
//             >
//               I build modern, scalable and responsive web
//               applications using React, Next.js, Node.js
//               and MongoDB — with a focus on clean UI,
//               performance and great user experiences.
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.6,
//                 delay: 0.3,
//               }}
//               className="
//                 mt-8
//                 flex
//                 flex-col
//                 gap-3
//                 sm:flex-row
//               "
//             >
//               {/* Projects */}
//               <Link
//                 href="/projects"
//                 className="
//                   btn-primary
//                   group
//                   w-full
//                   sm:w-auto
//                 "
//               >
//                 View Projects

//                 <ArrowUpRight
//                   size={17}
//                   className="
//                     transition-transform
//                     duration-300
//                     group-hover:translate-x-0.5
//                     group-hover:-translate-y-0.5
//                   "
//                 />
//               </Link>

//               {/* Resume */}
//               <a
//                 href="/resume.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="
//                   btn-secondary
//                   group
//                   w-full
//                   sm:w-auto
//                 "
//               >
//                 <Download
//                   size={17}
//                   className="
//                     transition-transform
//                     duration-300
//                     group-hover:translate-y-0.5
//                   "
//                 />

//                 View Resume
//               </a>
//             </motion.div>

//             {/* Social Links */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{
//                 duration: 0.6,
//                 delay: 0.4,
//               }}
//               className="
//                 mt-8
//                 flex
//                 items-center
//                 gap-5
//               "
//             >
//               <span
//                 className="
//                   text-sm
//                   text-[var(--text-muted)]
//                 "
//               >
//                 Connect
//               </span>

//               <span
//                 className="
//                   h-px
//                   w-8
//                   bg-[var(--border)]
//                 "
//               />

//               <a
//                 href="https://github.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="GitHub"
//                 className="
//                   text-[var(--text-muted)]
//                   transition-colors
//                   duration-300
//                   hover:text-[var(--text-primary)]
//                 "
//               >
//                 <FaGithub size={20} />
//               </a>

//               <a
//                 href="https://www.linkedin.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="LinkedIn"
//                 className="
//                   text-[var(--text-muted)]
//                   transition-colors
//                   duration-300
//                   hover:text-[var(--primary)]
//                 "
//               >
//                 <FaLinkedin size={20} />
//               </a>
//             </motion.div>
//           </div>

//           {/* =====================================================
//               RIGHT DEVELOPER CARD
//           ====================================================== */}
//           <motion.div
//             initial={{
//               opacity: 0,
//               scale: 0.95,
//               x: 30,
//             }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//               x: 0,
//             }}
//             transition={{
//               duration: 0.8,
//               delay: 0.2,
//             }}
//             className="relative mx-auto w-full max-w-[520px]">
//             {/* Glow */}
//             <div
//               className="
//                 absolute
//                 inset-10
//                 rounded-full
//                 bg-[var(--glow-primary)]
//                 opacity-40
//                 blur-[100px]
//               "
//             />

//             {/* Main Card */}
//             <div
//               className="
//                 glass-card
//                 relative
//                 overflow-hidden
//                 p-5
//                 shadow-2xl
//                 sm:p-6
//               "
//             >
//               {/* Browser Header */}
//               <div
//                 className="
//                   flex
//                   items-center
//                   justify-between
//                   border-b
//                   border-[var(--border)]
//                   pb-4
//                 "
//               >
//                 <div className="flex items-center gap-2">
//                   <span className="h-3 w-3 rounded-full bg-red-400" />
//                   <span className="h-3 w-3 rounded-full bg-yellow-400" />
//                   <span className="h-3 w-3 rounded-full bg-green-400" />
//                 </div>

//                 <span
//                   className="
//                     text-xs
//                     text-[var(--text-muted)]
//                   "
//                 >
//                   developer.tsx
//                 </span>
//               </div>

//               {/* Code */}
//               <div
//                 className="
//                   mt-6
//                   rounded-xl
//                   border
//                   border-[var(--border)]
//                   bg-[var(--background-secondary)]
//                   p-5
//                   font-mono
//                   text-sm
//                   leading-7
//                   sm:p-6
//                 "
//               >
//                 <div>
//                   <span className="text-[var(--secondary)]">
//                     const
//                   </span>{" "}
//                   <span className="text-[var(--accent)]">
//                     developer
//                   </span>{" "}
//                   = {"{"}
//                 </div>

//                 <div className="pl-5">
//                   <span className="text-[var(--text-muted)]">
//                     name:
//                   </span>{" "}
//                   <span className="text-[var(--success)]">
//                     &quot;Raviranjan Kumar&quot;
//                   </span>
//                   ,
//                 </div>

//                 <div className="pl-5">
//                   <span className="text-[var(--text-muted)]">
//                     role:
//                   </span>{" "}
//                   <span className="text-[var(--success)]">
//                     &quot;MERN Developer&quot;
//                   </span>
//                   ,
//                 </div>

//                 <div className="pl-5">
//                   <span className="text-[var(--text-muted)]">
//                     experience:
//                   </span>{" "}
//                   <span className="text-[var(--accent)]">
//                     2.5
//                   </span>
//                   ,
//                 </div>

//                 <div className="pl-5">
//                   <span className="text-[var(--text-muted)]">
//                     location:
//                   </span>{" "}
//                   <span className="text-[var(--success)]">
//                     &quot;India&quot;
//                   </span>
//                   ,
//                 </div>

//                 <div className="pl-5">
//                   <span className="text-[var(--text-muted)]">
//                     available:
//                   </span>{" "}
//                   <span className="text-[var(--accent)]">
//                     true
//                   </span>
//                 </div>

//                 <div>{"};"}</div>

//                 <div className="mt-5">
//                   <span className="text-[var(--secondary)]">
//                     developer
//                   </span>
//                   .
//                   <span className="text-[var(--accent)]">
//                     build
//                   </span>
//                   ();
//                 </div>

//                 <motion.div
//                   animate={{ opacity: [0, 1, 0] }}
//                   transition={{
//                     duration: 1.2,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="
//                     mt-2
//                     inline-block
//                     h-4
//                     w-2
//                     bg-[var(--primary)]
//                   "
//                 />
//               </div>

//               {/* Tech Stack */}
//               <div className="mt-5">
//                 <p
//                   className="
//                     mb-3
//                     text-xs
//                     font-medium
//                     uppercase
//                     tracking-wider
//                     text-[var(--text-muted)]
//                   "
//                 >
//                   Core Stack
//                 </p>

//                 <div className="flex flex-wrap gap-2">
//                   {techStack.map((tech) => (
//                     <span
//                       key={tech}
//                       className="
//                         rounded-lg
//                         border
//                         border-[var(--border)]
//                         bg-[var(--surface)]
//                         px-3
//                         py-1.5
//                         text-xs
//                         font-medium
//                         text-[var(--text-secondary)]
//                         transition-colors
//                         duration-300
//                         hover:border-[var(--primary)]
//                         hover:text-[var(--primary)]
//                       "
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Floating Experience Card */}
//             <motion.div
//               animate={{ y: [0, -8, 0] }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="
//                 absolute
//                 -bottom-5
//                 -left-3
//                 hidden
//                 rounded-2xl
//                 border
//                 border-[var(--border)]
//                 bg-[var(--surface)]
//                 px-5
//                 py-4
//                 shadow-xl
//                 sm:block
//                 md:-left-8
//               "
//             >
//               <p
//                 className="
//                   text-2xl
//                   font-bold
//                   text-[var(--text-primary)]
//                 "
//               >
//                 2.5+
//               </p>

//               <p
//                 className="
//                   text-xs
//                   text-[var(--text-muted)]
//                 "
//               >
//                 Years Experience
//               </p>
//             </motion.div>

//             {/* Floating Projects Card */}
//             <motion.div
//               animate={{ y: [0, 8, 0] }}
//               transition={{
//                 duration: 4.5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="
//                 absolute
//                 -right-3
//                 -top-5
//                 hidden
//                 rounded-2xl
//                 border
//                 border-[var(--border)]
//                 bg-[var(--surface)]
//                 px-5
//                 py-4
//                 shadow-xl
//                 sm:block
//                 md:-right-8
//               "
//             >
//               <p
//                 className="
//                   text-2xl
//                   font-bold
//                   text-[var(--primary)]
//                 "
//               >
//                 MERN
//               </p>

//               <p
//                 className="
//                   text-xs
//                   text-[var(--text-muted)]
//                 "
//               >
//                 Full Stack
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{
//             duration: 1,
//             delay: 1,
//           }}
//           className="
//             mt-16
//             hidden
//             items-center
//             justify-center
//             gap-2
//             text-xs
//             text-[var(--text-muted)]
//             sm:flex
//           "
//         >
//           <span>Scroll to explore</span>

//           <motion.div
//             animate={{ y: [0, 5, 0] }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//             }}
//           >
//             <ArrowDown size={15} />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }