import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2"
    >
      <div>
        <p className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
          Hello, I&apos;m
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Anna Voskoboynik
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Computer Science student at UC Santa Cruz
        </p>
        <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
          I&apos;m interested in software engineering, particularly backend systems,
          data, and artificial intelligence.
        </p>
        <Button render={<a href="#experience" />} className="mt-8">
          View my experience
        </Button>
      </div>

      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card">
        <img
          src="/5A9A3115_Original.jpg"
          alt="Anna Voskoboynik outdoors"
          className="aspect-4/5 w-full object-cover object-[center_60%]"
        />
      </div>
    </section>
  )
}
