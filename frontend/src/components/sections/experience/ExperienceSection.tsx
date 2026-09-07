import { motion, useReducedMotion } from "motion/react"

import { experiences } from "./experienceData"

export function ExperienceSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
        Experience
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Work Experience
      </h2>

      <div className="relative mt-10">
        <motion.div
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-2 w-px origin-top bg-border"
          initial={shouldReduceMotion ? false : { scaleY: 0 }}
          whileInView={shouldReduceMotion ? undefined : { scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={
            shouldReduceMotion ? undefined : { duration: 0.8, ease: "easeOut" }
          }
        />
        <ol className="space-y-10">
          {experiences.map((experience, index) => (
            <motion.li
              key={experience.id}
              className="relative rounded-xl p-5 pl-10 transition-colors hover:bg-card"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.2 }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : { duration: 0.45, delay: index * 0.08, ease: "easeOut" }
              }
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            >
              <motion.span
                aria-hidden="true"
                className="absolute top-7 left-0 size-4 rounded-full border-4 border-background bg-primary"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.2 }}
                transition={shouldReduceMotion ? undefined : { duration: 0.2 }}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {experience.role}
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {experience.company}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{experience.date}</p>
              </div>
              <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
                {experience.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
