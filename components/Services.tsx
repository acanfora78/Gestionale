import { servizi } from "@/data/site";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <ul className="grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-3">
      {servizi.map((s, i) => (
        <Reveal
          as="li"
          key={s.titolo}
          delay={(i % 3) * 0.06}
          className="group border-r border-b border-line p-6 transition-colors hover:bg-surface md:p-10"
        >
          <span className="font-display text-sm text-muted tabular-nums" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-8 font-display text-2xl font-bold uppercase leading-tight tracking-tight md:mt-16 md:text-3xl">
            {s.titolo}
          </h3>
          <p className="mt-3 text-muted">{s.testo}</p>
          <span aria-hidden="true" className="mt-6 block h-px w-8 bg-line transition-all duration-300 group-hover:w-16 group-hover:bg-accent" />
        </Reveal>
      ))}
    </ul>
  );
}
