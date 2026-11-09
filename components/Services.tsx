import { servizi } from "@/data/site";
import { Reveal } from "./Reveal";

/** Servizi come titoli di coda: righe grandi, numero, descrizione. */
export function Services() {
  return (
    <ul className="border-t border-line">
      {servizi.map((s, i) => (
        <Reveal as="li" key={s.titolo} delay={0.04 * i} className="group relative border-b border-line">
          <div className="grid gap-3 py-8 md:grid-cols-[6rem_1fr_1fr] md:items-baseline md:gap-10 md:py-12">
            <span className="font-display text-sm text-muted tabular-nums" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-[clamp(1.75rem,5vw,3.5rem)] leading-none font-bold tracking-tight uppercase transition-transform duration-500 ease-out group-hover:translate-x-3">
              {s.titolo}
            </h3>
            <p className="max-w-md text-muted md:justify-self-end">{s.testo}</p>
          </div>
          <span
            aria-hidden="true"
            className="absolute bottom-[-1px] left-0 h-px w-0 bg-accent transition-[width] duration-700 ease-out group-hover:w-full"
          />
        </Reveal>
      ))}
    </ul>
  );
}
