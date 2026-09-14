import { skillCategories } from "./skillsData"

export function SkillsSection() {
  return (
    <section id="skills" className="border-y border-border/60 bg-muted/70">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
          Skills
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Technical Skills
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
          Technologies and tools I&apos;ve used across software development, data
          engineering, and analytical work.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-px hover:shadow-md"
            >
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {category.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
