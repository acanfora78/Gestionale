"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

/**
 * Titolo che entra lettera per lettera quando arriva sullo schermo.
 * Le parole tra asterischi vanno in rosso: "La demo è *gratuita*."
 * Gli screen reader leggono il testo intero, non le singole lettere.
 */
export function SplitText({
  text,
  as: Tag = "h2",
  id,
  className = "",
  stagger = 0.025,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  id?: string;
  className?: string;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const plain = text.replace(/\*/g, "");
  // Parole con flag "accento"
  const words: { w: string; accent: boolean }[] = [];
  let accent = false;
  for (const token of text.split(/(\*)/)) {
    if (token === "*") {
      accent = !accent;
      continue;
    }
    for (const w of token.split(/(\s+)/)) if (w) words.push({ w, accent });
  }

  let i = 0;
  return (
    <Tag id={id} className={className}>
      <span className="sr-only">{plain}</span>
      <LazyMotion features={domAnimation} strict>
        <m.span
          aria-hidden="true"
          className="block"
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ staggerChildren: stagger }}
        >
          {words.map(({ w, accent }, wi) =>
            /^\s+$/.test(w) ? (
              <span key={wi}> </span>
            ) : (
              <span key={wi} className={`inline-block overflow-hidden pb-[0.06em] align-bottom ${accent ? "text-accent" : ""}`}>
                {[...w].map((c) => (
                  <m.span
                    key={i++}
                    className="inline-block"
                    variants={{
                      hidden: { y: "110%", rotate: 8 },
                      show: { y: "0%", rotate: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
                    }}
                  >
                    {c}
                  </m.span>
                ))}
              </span>
            ),
          )}
        </m.span>
      </LazyMotion>
    </Tag>
  );
}
