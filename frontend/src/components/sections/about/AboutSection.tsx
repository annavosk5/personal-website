export function AboutSection() {
  return (
    <section id="about" className="bg-muted/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
            About
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-8 text-foreground">
            I&apos;m a Computer Science student interested in software engineering,
            backend development, and artificial intelligence. I enjoy building
            systems that solve complex problems behind the scenes and making
            them intuitive for the people who use them.
          </p>
          <p className="leading-7 text-muted-foreground">
            Most recently, I worked as a Software Developer Intern on IBM&apos;s IMS
            team, where I built language intelligence for an IMS SQL VS Code
            extension. I worked with TypeScript, the Language Server Protocol,
            ANTLR4, and Jest to develop features including syntax diagnostics,
            semantic validation, context-aware autocomplete, and automated
            testing. I also explored AI development through work with an MCP
            server and installing and testing AI agents.
          </p>
          <p className="leading-7 text-muted-foreground">
            Before IBM, I gained experience in data engineering and software
            development, building automated data pipelines and working with
            cloud, databases, and frontend technologies. These experiences have
            shaped my interest in backend systems, developer tools, and AI, and
            I&apos;m excited to continue building and learning in these areas.
          </p>
        </div>
      </div>
    </section>
  )
}
