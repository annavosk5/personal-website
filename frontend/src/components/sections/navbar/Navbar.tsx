import { Button } from "@/components/ui/button"

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "What's Next", href: "#interests" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  return (
    <header className="border-b border-border bg-background text-foreground">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <a href="#hero" className="text-sm font-semibold tracking-tight">
          Anna Voskoboynik
        </a>

        <div className="flex items-center gap-5">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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
