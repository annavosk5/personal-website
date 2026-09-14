import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center rounded-full border px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-all duration-200 hover:-translate-y-px",
  {
    variants: {
      variant: {
        default: "border-primary/20 bg-primary text-primary-foreground",
        secondary:
          "border-border bg-muted text-muted-foreground hover:border-primary/30 hover:bg-primary/10 hover:text-primary",
        outline:
          "border-border bg-background text-foreground hover:border-primary/40 hover:text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
