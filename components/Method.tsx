import { metodo } from "@/data/site";
import { Reveal } from "./Reveal";

export function Method() {
  return (
    <ol className="grid gap-px bg-line md:grid-cols-4">
      {metodo.map((step, i) => (
        <Reveal as="li" key={step.titolo} delay={i * 0.08} className="relative bg-ink p-6 pt-8 md:p-8 md:pt-10">
          <span className="display block text-7xl text-accent md:text-8xl" aria-hidden="true">
            {i + 1}
          </span>
          <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight">
            <span className="sr-only">Step {i + 1}: </span>
            {step.titolo}
          </h3>
          <p className="mt-3 text-muted">{step.testo}</p>
          {i < metodo.length - 1 && (
            <span aria-hidden="true" className="absolute top-12 right-6 hidden text-2xl text-muted md:block">
              →
            </span>
          )}
        </Reveal>
      ))}
    </ol>
  );
}
