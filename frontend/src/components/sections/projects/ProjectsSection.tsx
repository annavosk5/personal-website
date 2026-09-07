import { GitBranch, Play } from "lucide-react"

import { Button } from "@/components/ui/button"

import { projects } from "./projectData"

export function ProjectsSection() {
  return (
    <section id="projects" className="border-y border-border/60 bg-secondary/35">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
          Projects
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Selected Work
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
          A selection of projects that reflect my interests across software,
          data, and product-focused development.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="overflow-hidden border-b border-border bg-background p-4">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="aspect-video w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                {(project.videoUrl || project.githubUrl) && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.videoUrl && (
                      <Button
                        size="sm"
                        render={
                          <a
                            href={project.videoUrl}
                            target="_blank"
                            rel="noreferrer"
                          />
                        }
                      >
                        <Play aria-hidden="true" />
                        Video Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        render={
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                          />
                        }
                      >
                        <GitBranch aria-hidden="true" />
                        GitHub
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
