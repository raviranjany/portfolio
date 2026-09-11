"use client";

import { motion } from "motion/react";

export default function ExperienceHero() {
return ( <section
   className="
     relative
     overflow-hidden
     bg-[var(--background)]
     pb-16
     pt-32
     sm:pb-20
     sm:pt-36
     lg:pb-24
     lg:pt-40
   "
 > <div
     className="
       pointer-events-none
       absolute
       inset-0
       overflow-hidden
     "
   > <div
       className="
         absolute
         left-1/2
         top-0
         h-96
         w-96
         -translate-x-1/2
         rounded-full
         bg-[var(--glow-primary)]
         opacity-20
         blur-[150px]
       "
     /> </div>

```
  <div
    className="
      container-custom
      relative
      z-10
    "
  >
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        mx-auto
        max-w-4xl
        text-center
      "
    >
      <div
        className="
          mb-5
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
            w-8
            bg-[var(--primary)]
          "
        />

        My Experience

        <span
          className="
            h-px
            w-8
            bg-[var(--primary)]
          "
        />
      </div>

      <h1
        className="
          text-4xl
          font-bold
          tracking-tight
          text-[var(--text-primary)]
          sm:text-5xl
          lg:text-6xl
        "
      >
        Building through
        <span
          className="
            gradient-text
            block
          "
        >
          real-world experience.
        </span>
      </h1>

      <p
        className="
          mx-auto
          mt-6
          max-w-2xl
          text-base
          leading-7
          text-[var(--text-muted)]
          sm:text-lg
          sm:leading-8
        "
      >
        A detailed look at my professional journey,
        hands-on development experience and growth
        as a Full Stack Developer.
      </p>
    </motion.div>
  </div>
</section>


);
}
