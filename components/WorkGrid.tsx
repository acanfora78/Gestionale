import type { Work } from "@/data/works";
import { Reveal } from "./Reveal";
import { WorkCard } from "./WorkCard";

/** Griglia a 1 colonna su mobile, 2 da tablet in su. Regge da 1 a N lavori. */
export function WorkGrid({ works }: { works: Work[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-24">
      {works.map((work, i) => (
        <Reveal as="li" key={work.slug} delay={(i % 2) * 0.08}>
          <WorkCard work={work} index={i} />
        </Reveal>
      ))}
    </ul>
  );
}
