import type { ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right"
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const movement =
    direction === "left" ? { x: -48 } : direction === "right" ? { x: 48 } : { y: 16 }

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, ...movement }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={
        shouldReduceMotion
          ? undefined
          : { duration: 0.5, delay, ease: "easeOut" }
      }
    >
      {children}
    </motion.div>
  )
}
