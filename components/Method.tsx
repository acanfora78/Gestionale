import { metodo } from "@/data/site";
import { Reveal } from "./Reveal";
import { ScrollLine } from "./ScrollLine";

/**
 * I 4 step della demo gratuita.
 * Desktop (browser con scroll-driven animations): la sezione resta ferma
 * e gli step scorrono in orizzontale mentre scendi, come una carrellata.
 * Mobile e altri browser: colonna/griglia normale con linea che si disegna.
 */
export function Method() {
  return (
    <div className="h-scroll">
      <div className="h-scroll-sticky">
        <div aria-hidden="true" className="h-scroll-progress" />
        <ScrollLine className="mb-10 lg:hidden" />
        <ol className="h-scroll-track grid gap-14 md:grid-cols-2 md:gap-10">
          {metodo.map((step, i) => (
            <Reveal as="li" key={step.titolo} delay={i * 0.1} className="h-scroll-panel relative">
              <span className="display text-outline-red block text-[clamp(6rem,18vw,16rem)]" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-3xl font-bold tracking-tight uppercase md:text-5xl">
                <span className="sr-only">Step {i + 1}: </span>
                {step.titolo}
              </h3>
              <p className="mt-4 max-w-sm text-lg text-muted">{step.testo}</p>
              {i < metodo.length - 1 && (
                <span aria-hidden="true" className="h-scroll-arrow absolute top-1/3 right-0 hidden text-5xl text-accent">
                  →
                </span>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  );
}
