"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Comparsa allo scroll.
 * - "fade": dissolvenza con piccolo spostamento
 * - "mask": il contenuto si scopre dal basso, come un sipario
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  variant = "fade",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
  variant?: "fade" | "mask";
}) {
  const reduce = useReducedMotion();
  const Comp = as === "li" ? m.li : m.div;
  const from =
    variant === "mask"
      ? { clipPath: "inset(0 0 100% 0)", y: 40 }
      : { opacity: 0, y: 32 };
  const to = variant === "mask" ? { clipPath: "inset(0 0 0% 0)", y: 0 } : { opacity: 1, y: 0 };

  return (
    <LazyMotion features={domAnimation} strict>
      <Comp
        className={className}
        initial={reduce ? false : from}
        whileInView={to}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: variant === "mask" ? 1.1 : 0.8, delay, ease: EASE }}
      >
        {children}
      </Comp>
    </LazyMotion>
  );
}
