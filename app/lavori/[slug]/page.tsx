import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { Tag } from "@/components/Tag";
import { WorkCard } from "@/components/WorkCard";
import { WorkCover } from "@/components/WorkCover";
import { PhoneBooking } from "@/components/BookingIllustration";
import { getWork, getWorksOrdered, hasUrl, works } from "@/data/works";

/** I campi che iniziano con "TODO" non vengono mostrati sul sito. */
const filled = (s: string) => !!s && !s.startsWith("TODO");

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: PageProps<"/lavori/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return {};
  const cover = work.immagini.find((i) => i.tipo === "desktop");
  const title = `${work.nome} — Case study`;
  return {
    title,
    description: work.descrizioneBreve,
    alternates: { canonical: `/lavori/${work.slug}` },
    openGraph: {
      type: "article",
      title,
      description: work.descrizioneBreve,
      url: `/lavori/${work.slug}`,
      images: cover ? [{ url: cover.src, width: cover.width, height: cover.height, alt: cover.alt }] : undefined,
    },
  };
}

export default async function CaseStudy({ params }: PageProps<"/lavori/[slug]">) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  const live = hasUrl(work);
  const desktop = work.immagini.filter((i) => i.tipo === "desktop");
  const mobile = work.immagini.filter((i) => i.tipo === "mobile");
  const altri = getWorksOrdered().filter((w) => w.slug !== work.slug).slice(0, 2);

  const numero = getWorksOrdered().findIndex((w) => w.slug === work.slug) + 1;

  const facts = [
    { label: "Cliente", value: work.nome },
    { label: "Settore", value: work.settore },
    { label: "Piattaforma", value: work.piattaforma },
  ].filter((f) => filled(f.value));

  return (
    <>
      <article>
        {/* Apertura a tutto schermo */}
        <header className="relative isolate flex min-h-[560px] flex-col overflow-hidden h-[calc(100svh-4rem)]">
          <div className="absolute inset-0 -z-10">
            <WorkCover work={work} preload sizes="100vw" labelPosition="right-5 top-16 md:right-10 md:top-20" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink from-10% via-ink/70 via-45% to-ink/40" />
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.8)_100%)]" />
          </div>
          <div aria-hidden="true" className="letterbox-top" />
          <div aria-hidden="true" className="letterbox-bottom" />

          <div className="container-x relative z-10 flex flex-1 flex-col justify-between py-6 md:py-8">
            <nav aria-label="Percorso" className="fade-in flex items-center justify-between text-[11px] font-semibold tracking-[0.25em] uppercase [--d:1s]">
              <Link href="/#lavori" className="text-paper/80 hover:text-paper">
                <span aria-hidden="true">←</span> Tutti i lavori
              </Link>
              <span className="text-paper/60 tabular-nums" aria-hidden="true">
                Case study {String(numero).padStart(2, "0")}
              </span>
            </nav>

            <div>
              <p className="fade-in mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-paper/80 uppercase [--d:0.9s]">
                <span aria-hidden="true" className="h-px w-10 bg-accent" />
                {work.tipo ? `${work.tipo} · ` : ""}
                {work.settore}
              </p>
              <h1 className="display text-[clamp(3.5rem,16vw,13rem)]">
                <span className="rise">
                  <span className="[--d:0.6s]">{work.nome}</span>
                </span>
              </h1>
              <p className="fade-in mt-6 max-w-2xl text-lg text-paper/85 md:text-2xl [--d:1.1s]">{work.descrizioneBreve}</p>
            </div>
          </div>
        </header>

        {/* Crediti */}
        <div className="border-y border-line">
          <dl className="container-x grid grid-cols-2 gap-x-6 gap-y-8 py-10 md:grid-cols-4 md:py-14">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-[11px] font-semibold tracking-[0.25em] text-muted uppercase">{f.label}</dt>
                <dd className="mt-2 font-display text-lg font-medium uppercase md:text-xl">{f.value}</dd>
              </div>
            ))}
            <div className="col-span-2 md:col-span-1">
              <dt className="text-[11px] font-semibold tracking-[0.25em] text-muted uppercase">Servizi</dt>
              <dd className="mt-2">
                <ul className="flex flex-wrap gap-2">
                  {work.servizi.map((s) => (
                    <li key={s}>
                      <Tag>{s}</Tag>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>

        <div className="container-x grid gap-12 py-24 md:grid-cols-[1fr_2fr] md:gap-20 md:py-36">
          <div className="md:sticky md:top-24 md:self-start">
            {live ? (
              <div className="space-y-4">
                <Button href={work.url} arrow>
                  Visita il sito live
                </Button>
                <p className="text-sm text-muted">
                  <a href={work.url} target="_blank" rel="noopener noreferrer" className="break-all hover:text-accent">
                    {work.url.replace(/^https?:\/\//, "")} <span aria-hidden="true">↗</span>
                  </a>
                </p>
              </div>
            ) : null /* TODO: quando c'è l'URL, qui compare il pulsante "Visita il sito live" */}
          </div>

          <div className="space-y-16">
            <Reveal>
              <h2 className="display text-[clamp(2.5rem,7vw,4.5rem)]">Il cliente</h2>
              <div className="mt-6 space-y-4 text-lg text-paper/85">
                {work.descrizione.filter(filled).map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>

            {filled(work.obiettivo) && (
              <Reveal>
                <h2 className="display text-[clamp(2.5rem,7vw,4.5rem)]">L&apos;obiettivo</h2>
                <p className="mt-6 text-lg text-paper/85">{work.obiettivo}</p>
              </Reveal>
            )}

            <Reveal>
              <h2 className="display text-[clamp(2.5rem,7vw,4.5rem)]">Cosa abbiamo fatto</h2>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {work.cosaAbbiamoFatto.map((c) => (
                  <li key={c} className="flex items-center gap-4 py-4 text-lg">
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-accent" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {work.illustrazione === "prenotazione-lettini" && (
          <section aria-labelledby="app" className="relative isolate overflow-hidden border-t border-line py-24 md:py-36">
            <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 h-[70vmax] w-[70vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(46,196,214,0.14)_0%,transparent_60%)]" />
            <div className="container-x grid items-center gap-16 md:grid-cols-2">
              <div>
                <Reveal>
                  <p className="mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-muted uppercase">
                    <span aria-hidden="true" className="h-px w-10 bg-accent" />
                    L&apos;applicazione
                  </p>
                </Reveal>
                <Reveal variant="mask">
                  <h2 id="app" className="display text-[clamp(2.75rem,8vw,6rem)]">
                    Il lettino, <span className="text-accent">prenotato</span> dal telefono.
                  </h2>
                </Reveal>
                {/* TODO: confermare i passaggi con il flusso reale dell'app */}
                <ol className="mt-12 space-y-8">
                  {[
                    { t: "Scegli il giorno", d: "Il cliente apre l'app e seleziona la data." },
                    { t: "Scegli il lettino", d: "Vede la piscina con i posti liberi e occupati, e sceglie il suo." },
                    { t: "Prenota", d: "Conferma in un tocco. La prenotazione arriva a Korme." },
                  ].map((step, i) => (
                    <Reveal as="li" key={step.t} delay={i * 0.1} className="flex gap-6 border-t border-line pt-6">
                      <span className="display text-4xl text-accent" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-bold uppercase">{step.t}</h3>
                        <p className="mt-1 text-muted">{step.d}</p>
                      </div>
                    </Reveal>
                  ))}
                </ol>
              </div>
              <Reveal delay={0.15} className="relative mx-auto w-full max-w-[340px]">
                <PhoneBooking logo={work.logo} className="w-full drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]" />
                <p className="mt-6 text-center text-[10px] font-semibold tracking-[0.25em] text-muted uppercase">
                  Schema illustrativo
                </p>
              </Reveal>
            </div>
          </section>
        )}

        {(desktop.length > 1 || mobile.length > 0) && (
          <section aria-labelledby="galleria" className="border-t border-line py-20 md:py-28">
            <div className="container-x">
              <h2 id="galleria" className="display mb-12 text-[clamp(2.5rem,8vw,5rem)]">
                Galleria
              </h2>

              {mobile.length > 0 && (
                <ul className="mb-8 grid grid-cols-2 gap-4 md:mb-12 md:gap-8">
                  {mobile.map((img) => (
                    <li key={img.src} className="flex justify-center bg-surface p-4 md:p-12">
                      <figure className="w-full max-w-[320px]">
                        <div className="overflow-hidden rounded-[1.25rem] border border-line md:rounded-[2rem]">
                          <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(min-width: 768px) 320px, 38vw" className="h-auto w-full" />
                        </div>
                        <figcaption className="mt-3 text-center text-xs tracking-wide text-muted uppercase">Mobile</figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              )}

              {desktop.length > 1 && (
                <ul className="grid gap-4 md:gap-8">
                  {desktop.slice(1).map((img) => (
                    <li key={img.src}>
                      <figure>
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={img.width}
                          height={img.height}
                          sizes="(min-width: 1408px) 1328px, 100vw"
                          className="h-auto w-full border border-line"
                        />
                        <figcaption className="mt-3 text-xs tracking-wide text-muted uppercase">Desktop</figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        )}
      </article>

      <CTA
        title={
          <>
            Vuoi un progetto come <span className="text-accent">{work.nome}</span>?
          </>
        }
      />

      {altri.length > 0 && (
        <section aria-labelledby="altri" className="py-20 md:py-28">
          <div className="container-x">
            <h2 id="altri" className="display mb-12 text-[clamp(2.5rem,8vw,5rem)]">
              Altri lavori
            </h2>
            <ul className="grid gap-x-6 gap-y-16 md:grid-cols-2">
              {altri.map((w) => (
                <li key={w.slug}>
                  <WorkCard work={w} index={getWorksOrdered().indexOf(w)} total={works.length} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
