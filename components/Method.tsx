import { metodo } from "@/data/site";
import { Reveal } from "./Reveal";
import { ScrollLine } from "./ScrollLine";

/** I 4 step della demo gratuita, con una linea rossa che avanza mentre scorri. */
export function Method() {
  return (
    <div>
      <ScrollLine className="mb-10 md:mb-14" />
      <ol className="grid gap-12 md:grid-cols-4 md:gap-8">
        {metodo.map((step, i) => (
          <Reveal as="li" key={step.titolo} delay={i * 0.12} className="relative">
            <span className="display block text-[clamp(5rem,14vw,10rem)] text-accent" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold tracking-tight uppercase md:text-3xl">
              <span className="sr-only">Step {i + 1}: </span>
              {step.titolo}
            </h3>
            <p className="mt-3 max-w-xs text-muted">{step.testo}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
