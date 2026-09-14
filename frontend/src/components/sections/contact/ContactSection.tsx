import { Mail, Send } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-2xl border border-border bg-card px-6 py-14 text-center shadow-sm sm:px-10">
        <p className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Let&apos;s Connect
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-muted-foreground">
          I&apos;d love to connect about opportunities, projects, and ideas at the
          intersection of software, data, and AI.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            render={<a href="mailto:annavosk5@gmail.com" />}
          >
            <Mail aria-hidden="true" />
            Email me
          </Button>
          <Button
            variant="outline"
            render={
              <a
                href="https://www.linkedin.com/in/anna-voskoboynik/"
                target="_blank"
                rel="noreferrer"
              />
            }
          >
            <Send aria-hidden="true" />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  )
}
