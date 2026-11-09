import type { Work } from "@/data/works";
import { Reveal } from "./Reveal";
import { WorkCard } from "./WorkCard";

/**
 * Ritmo da montaggio: un fotogramma largo, poi due affiancati, e così via.
 * Funziona con qualsiasi numero di lavori.
 */
export function WorkGrid({ works }: { works: Work[] }) {
  return (
    <ul className="grid gap-x-6 gap-y-20 md:grid-cols-2 md:gap-y-28">
      {works.map((work, i) => {
        // Largo il 1°, 4°, 7°… e l'ultimo se resterebbe da solo in riga.
        const wide = i % 3 === 0 || (i === works.length - 1 && i % 3 === 1);
        return (
          <Reveal as="li" key={work.slug} delay={wide ? 0 : ((i % 3) - 1) * 0.1} className={wide ? "md:col-span-2" : ""}>
            <WorkCard work={work} index={i} total={works.length} wide={wide} />
          </Reveal>
        );
      })}
    </ul>
  );
}
