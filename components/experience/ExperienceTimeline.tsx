"use client";

import { motion } from "motion/react";

import { experiences } from "@/data/experience";

import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
return ( <section
   className="
     relative
     overflow-hidden
     bg-[var(--background)]
     pb-20
     sm:pb-24
     lg:pb-28
   "
 > <div
     className="
       container-custom
     "
   > <div
       className="
         relative
         mx-auto
         max-w-4xl
       "
     >
{/* Vertical Timeline Line */}

```
      <motion.div
        initial={{
          scaleY: 0,
        }}
        whileInView={{
          scaleY: 1,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="
          absolute
          bottom-10
          left-[15px]
          top-10
          w-px
          origin-top
          bg-[var(--border)]
          sm:left-1/2
          sm:-translate-x-1/2
        "
      />

      <div
        className="
          space-y-14
          sm:space-y-20
        "
      >
        {experiences.map(
          (experience, index) => {
            const isEven =
              index % 2 === 0;

            return (
              <div
                key={experience.id}
                className="
                  relative
                "
              >
                {/* Timeline Dot */}

                <div
                  className="
                    absolute
                    left-[5px]
                    top-10
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

                {/* Layout */}

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-8
                    pl-11
                    sm:grid-cols-2
                    sm:gap-14
                    sm:pl-0
                  "
                >
                  {/* First Experience */}

                  {isEven ? (
                    <>
                      <div>
                        <ExperienceCard
                          experience={
                            experience
                          }
                        />
                      </div>

                      <div
                        className="
                          hidden
                          sm:block
                        "
                      />
                    </>
                  ) : (
                    <>
                      <div
                        className="
                          hidden
                          sm:block
                        "
                      />

                      <div>
                        <ExperienceCard
                          experience={
                            experience
                          }
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  </div>
</section>

);
}
