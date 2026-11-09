import { whatsappLink } from "@/data/site";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

/** Blocco call-to-action per la demo gratuita, con scritta gigante che scorre. */
export function CTA({
  title = (
    <>
      Vediamo cosa possiamo <span className="text-accent">costruire</span> per te.
    </>
  ),
  text = "Ti prepariamo una demo gratuita del tuo nuovo progetto. Se ti piace, partiamo. Se no, nessun costo.",
}: {
  title?: React.ReactNode;
  text?: string;
}) {
  const frase = "Prima lo vedi — Poi decidi — ";
  return (
    <section aria-label="Richiedi una demo gratuita" className="relative isolate overflow-hidden border-y border-line bg-surface py-24 md:py-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-8 -z-10 overflow-hidden md:top-10">
        <div className="flex w-max motion-safe:animate-[marquee_50s_linear_infinite]">
          {[0, 1].map((k) => (
            <span key={k} className="display text-outline pr-8 text-[clamp(6rem,22vw,18rem)] whitespace-nowrap">
              {frase}
              {frase}
            </span>
          ))}
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-1/2 left-1/2 -z-10 h-[60vmax] w-[60vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(225,6,0,0.25)_0%,transparent_65%)]" />

      <Reveal variant="mask" className="container-x pt-[clamp(4rem,14vw,10rem)]">
        <p className="display max-w-5xl text-[clamp(2.5rem,8vw,6.5rem)]">{title}</p>
      </Reveal>
      <Reveal delay={0.2} className="container-x">
        <p className="mt-8 max-w-xl text-lg text-muted">{text}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href={whatsappLink()} arrow>
            Scrivici su WhatsApp
          </Button>
          <Button href="/#contatti" variant="outline">
            Compila il form
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
