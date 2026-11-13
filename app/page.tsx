import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { ContactForm } from "@/components/ContactForm";
import { CTA } from "@/components/CTA";
import { Method } from "@/components/Method";
import { Section } from "@/components/Section";
import { Services } from "@/components/Services";
import { WorkGrid } from "@/components/WorkGrid";
import { WorkingCartoon } from "@/components/WorkingCartoon";
import { Reveal } from "@/components/Reveal";
import { emailLink, site, whatsappLink } from "@/data/site";
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
        scene={1}
        eyebrow="Capitolo 01 — Lavori selezionati"
        title="Lavori"
        intro="Siti, e-commerce e app, realizzati per attività reali."
      >
        <WorkGrid works={works} />
      </Section>

      <Section
        id="servizi"
        scene={2}
        eyebrow="Capitolo 02 — Servizi"
        title="Cosa facciamo"
        intro="Un solo studio per tutto quello che serve alla tua attività online."
        className="border-t border-line"
      >
        <Services />
      </Section>

      <Section
        id="metodo"
        scene={3}
        eyebrow="Capitolo 03 — Metodo"
        title="La demo è *gratuita*."
        intro="Non ti chiediamo di fidarti di un preventivo. Ti facciamo vedere il risultato prima."
        className="border-t border-line"
      >
        <Method />
      </Section>

      <Section
        id="regia"
        scene={4}
        eyebrow="Dietro le quinte"
        title="Dietro la *macchina da presa*."
        className="border-t border-line"
      >
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <WorkingCartoon
              uid="regia"
              title="Illustrazione: il titolare di FARGE STUDIO al lavoro al portatile"
              className="mx-auto w-full max-w-[520px]"
            />
          </Reveal>
          <Reveal delay={0.15} className="space-y-6 text-lg text-muted md:text-xl">
            <p>
              Dietro <span className="text-paper">FΛRGE STUDIO</span> non c&apos;è un centralino: c&apos;è chi i progetti li
              disegna e li costruisce, riga dopo riga.
            </p>
            <p>Parli direttamente con chi lavora al tuo sito, dalla prima demo alla messa online.</p>
            <p className="font-display text-sm tracking-[0.25em] text-paper uppercase">
              Scritto, diretto e sviluppato in Campania
            </p>
          </Reveal>
        </div>
      </Section>

      <CTA />

      <Section id="contatti" scene={5} eyebrow="Capitolo 04 — Contatti" title="Parliamone" intro="Scrivici su WhatsApp o per email. Oppure compila il form: il messaggio è già pronto.">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-10">
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button href={whatsappLink()} arrow>
                Scrivici su WhatsApp
              </Button>
              <Button href={emailLink()} variant="outline">
                Scrivici una email
              </Button>
            </div>
            <dl className="space-y-6">
              <div>
                <dt className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Email</dt>
                <dd className="mt-1 text-xl md:text-2xl">
                  <a href={`mailto:${site.contatti.email}`} className="break-all hover:text-accent">
                    {site.contatti.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Telefono / WhatsApp</dt>
                <dd className="mt-1 text-xl md:text-2xl">
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
