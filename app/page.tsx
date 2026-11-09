import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { ContactForm } from "@/components/ContactForm";
import { CTA } from "@/components/CTA";
import { Method } from "@/components/Method";
import { Section } from "@/components/Section";
import { Services } from "@/components/Services";
import { WorkGrid } from "@/components/WorkGrid";
import { site, whatsappLink } from "@/data/site";
import { getWorksOrdered } from "@/data/works";

const settori = ["Ristoranti", "Negozi", "Studi medici", "Palestre", "Concessionarie", "Piscine e lidi", "PMI", "E-commerce", "Brand"];

const nastro = ["Web design", "E-commerce", "Web app", "Branding", "Social", "Video", "AI & automazioni"];

export default function Home() {
  const works = getWorksOrdered();

  return (
    <>
      <Intro />
      <Hero />

      {/* Due nastri incrociati che scorrono in direzioni opposte */}
      <div aria-hidden="true" className="relative overflow-hidden py-14 md:py-20">
        <div className="-mx-4 -rotate-2 bg-accent py-4">
          <div className="flex w-max animate-[marquee_35s_linear_infinite] gap-10 motion-reduce:animate-none">
            {[...settori, ...settori].map((s, i) => (
              <span key={i} className="flex items-center gap-10 font-display text-lg font-bold tracking-[0.15em] text-paper uppercase md:text-2xl">
                {s}
                <span className="text-ink">✦</span>
              </span>
            ))}
          </div>
        </div>
        <div className="-mx-4 -mt-3 rotate-[1.5deg] border-y border-line bg-ink py-4">
          <div className="flex w-max animate-[marquee_45s_linear_infinite_reverse] gap-10 motion-reduce:animate-none">
            {[...nastro, ...nastro].map((s, i) => (
              <span key={i} className="flex items-center gap-10 font-display text-lg tracking-[0.15em] text-muted uppercase md:text-2xl">
                {s}
                <span className="text-accent">●</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <Section
        id="lavori"
        eyebrow="Capitolo 01 — Lavori selezionati"
        title="Lavori"
        intro="Siti, e-commerce e app, realizzati per attività reali."
      >
        <WorkGrid works={works} />
      </Section>

      <Section
        id="servizi"
        eyebrow="Capitolo 02 — Servizi"
        title="Cosa facciamo"
        intro="Un solo studio per tutto quello che serve alla tua attività online."
        className="border-t border-line"
      >
        <Services />
      </Section>

      <Section
        id="metodo"
        eyebrow="Capitolo 03 — Metodo"
        title="La demo è *gratuita*."
        intro="Non ti chiediamo di fidarti di un preventivo. Ti facciamo vedere il risultato prima."
        className="border-t border-line"
      >
        <Method />
      </Section>

      <CTA />

      <Section id="contatti" eyebrow="Capitolo 04 — Contatti" title="Parliamone" intro="Il modo più veloce è WhatsApp. Oppure lasciaci i tuoi dati e ti richiamiamo noi.">
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
