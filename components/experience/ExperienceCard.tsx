"use client";

import { motion } from "motion/react";

import {
BriefcaseBusiness,
Building2,
CalendarDays,
CheckCircle2,
MapPin,
Sparkles,
} from "lucide-react";

import type { Experience } from "@/data/experience";

type ExperienceCardProps = {
experience: Experience;
};

export default function ExperienceCard({
experience,
}: ExperienceCardProps) {
return (
<motion.article
initial={{
opacity: 0,
y: 35,
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
group
overflow-hidden
rounded-3xl
border
border-[var(--border)]
bg-[var(--surface)]
p-6
transition-all
duration-300
hover:border-[var(--primary)]
hover:shadow-[0_15px_50px_var(--glow-primary)]
sm:p-8
"
>
{/* Current Badge */}

```
  {experience.current && (
    <div
      className="
        mb-6
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

  {/* Role */}

  <div
    className="
      flex
      items-start
      gap-4
    "
  >
    <div
      className="
        flex
        h-12
        w-12
        shrink-0
        items-center
        justify-center
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--background-secondary)]
        text-[var(--primary)]
      "
    >
      <BriefcaseBusiness
        size={22}
      />
    </div>

    <div>
      <h2
        className="
          text-2xl
          font-bold
          text-[var(--text-primary)]
          sm:text-3xl
        "
      >
        {experience.role}
      </h2>

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
        <Building2 size={16} />

        {experience.company}
      </div>
    </div>
  </div>

  {/* Meta Information */}

  <div
    className="
      mt-7
      grid
      gap-4
      border-y
      border-[var(--border)]
      py-5
      text-sm
      text-[var(--text-muted)]
      sm:grid-cols-3
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
        size={16}
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
        size={16}
        className="
          text-[var(--primary)]
        "
      />

      {experience.location}
    </div>

    <div
      className="
        flex
        items-center
        gap-2
      "
    >
      <BriefcaseBusiness
        size={16}
        className="
          text-[var(--primary)]
        "
      />

      {experience.employmentType}
    </div>
  </div>

  {/* About Role */}

  <div
    className="
      mt-8
    "
  >
    <p
      className="
        text-xs
        font-semibold
        uppercase
        tracking-[0.15em]
        text-[var(--primary)]
      "
    >
      About The Role
    </p>

    <p
      className="
        mt-3
        text-base
        leading-8
        text-[var(--text-muted)]
      "
    >
      {experience.description}
    </p>
  </div>

  {/* Contributions */}

  <div
    className="
      mt-9
    "
  >
    <div
      className="
        flex
        items-center
        gap-2
      "
    >
      <Sparkles
        size={17}
        className="
          text-[var(--primary)]
        "
      />

      <p
        className="
          text-xs
          font-semibold
          uppercase
          tracking-[0.15em]
          text-[var(--text-primary)]
        "
      >
        Key Contributions
      </p>
    </div>

    <div
      className="
        mt-5
        grid
        gap-4
      "
    >
      {experience.contributions.map(
        (contribution, index) => (
          <motion.div
            key={contribution}
            initial={{
              opacity: 0,
              x: -15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            className="
              flex
              items-start
              gap-3
            "
          >
            <CheckCircle2
              size={19}
              className="
                mt-0.5
                shrink-0
                text-[var(--primary)]
              "
            />

            <p
              className="
                text-sm
                leading-7
                text-[var(--text-muted)]
              "
            >
              {contribution}
            </p>
          </motion.div>
        )
      )}
    </div>
  </div>

  {/* Technologies */}

  <div
    className="
      mt-9
    "
  >
    <p
      className="
        text-xs
        font-semibold
        uppercase
        tracking-[0.15em]
        text-[var(--primary)]
      "
    >
      Technologies Used
    </p>

    <div
      className="
        mt-5
        flex
        flex-wrap
        gap-2.5
      "
    >
      {experience.technologies.map(
        (technology) => (
          <span
            key={technology}
            className="
              rounded-xl
              border
              border-[var(--border)]
              bg-[var(--background-secondary)]
              px-3
              py-2
              text-xs
              font-medium
              text-[var(--text-secondary)]
              transition-all
              duration-300
              hover:border-[var(--primary)]
              hover:text-[var(--primary)]
            "
          >
            {technology}
          </span>
        )
      )}
    </div>
  </div>
</motion.article>


);
}
