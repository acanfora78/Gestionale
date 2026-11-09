import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Scramble } from "./Scramble";
import { SplitText } from "./SplitText";

type Props = {
  id?: string;
  /** Etichetta piccola sopra il titolo, es. "Capitolo 01 — Lavori" (si "decodifica" all'ingresso) */
  eyebrow?: string;
  /** Stringa: entra lettera per lettera, le parole tra *asterischi* in rosso. */
  title?: string;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, intro, children, className = "" }: Props) {
  const headingId = id ? `${id}-titolo` : undefined;
  return (
    <section id={id} aria-labelledby={title ? headingId : undefined} className={`scroll-mt-20 py-24 md:py-40 ${className}`}>
      <div className="container-x">
        {(eyebrow || title || intro) && (
          <div className="mb-14 md:mb-24">
            {eyebrow && (
              <Reveal>
                <p className="mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-muted uppercase">
                  <span aria-hidden="true" className="h-px w-10 origin-left bg-accent motion-safe:animate-[draw-line_1s_ease-out_both]" />
                  <Scramble text={eyebrow} />
                </p>
              </Reveal>
            )}
            {title && (
              <SplitText id={headingId} text={title} className="display max-w-6xl text-[clamp(3rem,11vw,9rem)]" />
            )}
            {intro && (
              <Reveal delay={0.2}>
                <p className="mt-8 max-w-2xl text-lg text-muted md:text-xl">{intro}</p>
              </Reveal>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
