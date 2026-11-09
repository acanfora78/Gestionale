import { servizi } from "@/data/site";
import { Reveal } from "./Reveal";

/** Servizi come titoli di coda: righe grandi; al passaggio del mouse la riga si riempie di rosso. */
export function Services() {
  return (
    <ul className="border-t border-line">
      {servizi.map((s, i) => (
        <Reveal as="li" key={s.titolo} delay={0.05 * i} className="group relative isolate overflow-hidden border-b border-line">
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100"
          />
          <div className="grid gap-3 px-1 py-8 md:grid-cols-[6rem_1fr_1fr] md:items-baseline md:gap-10 md:px-4 md:py-12">
            <span className="font-display text-sm text-muted tabular-nums transition-colors group-hover:text-paper" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-[clamp(1.75rem,5vw,3.5rem)] leading-none font-bold tracking-tight uppercase transition-[transform,letter-spacing] duration-500 ease-out group-hover:translate-x-3 group-hover:tracking-normal">
              {s.titolo}
            </h3>
            <p className="max-w-md text-muted transition-colors group-hover:text-paper md:justify-self-end">{s.testo}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
