import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  id?: string;
  /** Numero/etichetta piccola sopra il titolo, es. "01 — Lavori" */
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, intro, children, className = "" }: Props) {
  const headingId = id ? `${id}-titolo` : undefined;
  return (
    <section id={id} aria-labelledby={title ? headingId : undefined} className={`scroll-mt-20 py-20 md:py-32 ${className}`}>
      <div className="container-x">
        {(eyebrow || title || intro) && (
          <Reveal className="mb-12 md:mb-20">
            {eyebrow && (
              <p className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                <span aria-hidden="true" className="h-px w-8 bg-accent" />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 id={headingId} className="display max-w-5xl text-[clamp(2.5rem,9vw,7rem)]">
                {title}
              </h2>
            )}
            {intro && <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">{intro}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
