import { useState } from "react"
import { Menu, X } from "lucide-react"

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 text-foreground backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3"
      >
        <a
          href="#hero"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="size-2 rounded-full bg-primary transition-transform group-hover:scale-125" />
          Anna Voskoboynik
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-muted-foreground transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-primary hover:after:w-full"
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

        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          type="button"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border/80 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-2 motion-safe:duration-200 lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4"
          >
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="mt-3 w-full justify-center"
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
          </nav>
        </div>
      )}
    </header>
  )
}
