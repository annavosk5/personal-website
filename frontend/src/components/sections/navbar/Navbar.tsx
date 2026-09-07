import { Button } from "@/components/ui/button"

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 text-foreground backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3"
      >
        <a href="#hero" className="group flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="size-2 rounded-full bg-primary transition-transform group-hover:scale-125" />
          Anna Voskoboynik
        </a>

        <div className="flex items-center gap-5">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}

          <Button
            size="sm"
            render={
              <a
                href="/anna_resume_2025_current.pdf"
                target="_blank"
                rel="noreferrer"
              />
            }
          >
            Resume
          </Button>
        </div>
      </nav>
    </header>
  )
}
