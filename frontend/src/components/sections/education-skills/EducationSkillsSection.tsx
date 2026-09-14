import { Reveal } from "@/components/ui/reveal"

export function EducationSkillsSection() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
        Education
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Education
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Reveal>
          <article className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
            University
          </p>
          <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
            University of California, Santa Cruz
          </h3>
          <p className="mt-2 text-lg text-muted-foreground">
            B.S. Computer Science
          </p>
          <p className="mt-6 text-sm font-medium text-primary">
            Expected graduation · June 2027
          </p>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md sm:p-8">
          <p className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Relevant Coursework
          </p>
          <p className="mt-4 leading-7 text-muted-foreground">
            Full Stack Web Development · Programming Abstractions: Python · Computer Architecture · 
            Computer Systems and C Programming · Introduction to Data Structures
            and Algorithms  · Principles of Computer Systems Design
             · Database Systems 1
          </p>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
