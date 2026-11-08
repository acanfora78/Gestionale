import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { CTA } from "@/components/CTA";
import { Method } from "@/components/Method";
import { Section } from "@/components/Section";
import { Services } from "@/components/Services";
import { WorkGrid } from "@/components/WorkGrid";
import { site, whatsappLink } from "@/data/site";
import { getWorksOrdered } from "@/data/works";

const settori = ["Ristoranti", "Negozi", "Studi medici", "Palestre", "Concessionarie", "PMI", "E-commerce", "Brand"];

export default function Home() {
  const works = getWorksOrdered();

  return (
    <>
      {/* HERO: niente animazioni in entrata per non ritardare il primo rendering */}
      <section aria-labelledby="hero-titolo" className="relative overflow-hidden">
        <div className="container-x flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 md:py-24">
          <p className="mb-8 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-muted uppercase">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
            Digital agency · Campania
          </p>
          <h1 id="hero-titolo" className="display text-[clamp(3.25rem,15vw,12.5rem)]">
            Prima
            <br />
            lo vedi.
            <br />
            Poi decidi<span className="text-accent">.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted md:text-xl">
            Siti, e-commerce, branding e contenuti per attività che vogliono crescere. Ti mostriamo una demo
            gratuita del tuo nuovo sito prima di chiederti qualsiasi cosa.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#lavori" variant="outline">
              Guarda i lavori
            </Button>
            <Button href="#contatti" arrow>
              Richiedi una demo gratuita
            </Button>
          </div>
        </div>

        <div className="border-y border-line py-4" aria-hidden="true">
          <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-10 motion-reduce:animate-none">
            {[...settori, ...settori].map((s, i) => (
              <span key={i} className="flex items-center gap-10 font-display text-sm tracking-[0.2em] text-muted uppercase">
                {s}
                <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <Section
        id="lavori"
        eyebrow="01 — Lavori selezionati"
        title="Lavori"
        intro="Progetti online, realizzati per attività reali."
      >
        <WorkGrid works={works} />
      </Section>

      <Section
        id="servizi"
        eyebrow="02 — Servizi"
        title="Cosa facciamo"
        intro="Un solo studio per tutto quello che serve alla tua attività online."
        className="border-t border-line"
      >
        <Services />
      </Section>

      <Section
        id="metodo"
        eyebrow="03 — Metodo"
        title={
          <>
            La demo è <span className="text-accent">gratuita</span>.
          </>
        }
        intro="Non ti chiediamo di fidarti di un preventivo. Ti facciamo vedere il risultato prima."
        className="border-t border-line"
      >
        <Method />
      </Section>

      <CTA />

      <Section id="contatti" eyebrow="04 — Contatti" title="Parliamone" intro="Il modo più veloce è WhatsApp. Oppure lasciaci i tuoi dati e ti richiamiamo noi.">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-10">
            <Button href={whatsappLink()} arrow className="w-full sm:w-auto">
              Scrivici su WhatsApp
            </Button>
            <dl className="space-y-6">
              <div>
                <dt className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Email</dt>
                <dd className="mt-1 text-xl md:text-2xl">
                  {/* TODO: email reale in data/site.ts */}
                  <a href={`mailto:${site.contatti.email}`} className="break-all hover:text-accent">
                    {site.contatti.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Telefono</dt>
                <dd className="mt-1 text-xl md:text-2xl">
                  {/* TODO: numero reale in data/site.ts */}
                  <a href={`tel:+${site.contatti.whatsapp}`} className="hover:text-accent">
                    {site.contatti.telefonoVisibile}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Dove</dt>
                <dd className="mt-1 text-xl md:text-2xl">{site.luogo}</dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
