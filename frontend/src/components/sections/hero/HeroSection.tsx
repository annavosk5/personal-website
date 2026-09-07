import { Button } from "@/components/ui/button"
import { motion, useReducedMotion } from "motion/react"

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 -z-10 size-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Anna Voskoboynik
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Computer Science student at UC Santa Cruz
          </p>
          <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
            I&apos;m interested in software engineering, particularly backend systems,
            data, and artificial intelligence.
          </p>
          <Button render={<a href="#experience" />} className="mt-8">
            View my experience
          </Button>
        </motion.div>

        <motion.div
          className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-xl shadow-primary/5"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
        >
          <img
            src="/5A9A3115_Original.jpg"
            alt="Anna Voskoboynik outdoors"
            className="aspect-4/5 w-full rounded-xl object-cover object-[center_60%]"
          />
        </motion.div>
      </div>
    </section>
  )
}
