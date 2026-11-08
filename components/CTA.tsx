import { whatsappLink } from "@/data/site";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

/** Blocco call-to-action per la demo gratuita. */
export function CTA({
  title = (
    <>
      Vediamo cosa possiamo <span className="text-accent">costruire</span> per te.
    </>
  ),
  text = "Ti prepariamo una demo gratuita del tuo nuovo sito. Se ti piace, partiamo. Se no, nessun costo.",
}: {
  title?: React.ReactNode;
  text?: string;
}) {
  return (
    <section aria-label="Richiedi una demo gratuita" className="border-y border-line bg-surface py-20 md:py-28">
      <Reveal className="container-x">
        <p className="display max-w-5xl text-[clamp(2.25rem,8vw,6rem)]">{title}</p>
        <p className="mt-6 max-w-xl text-lg text-muted">{text}</p>
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
