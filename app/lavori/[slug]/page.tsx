import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import { Tag } from "@/components/Tag";
import { WorkCard } from "@/components/WorkCard";
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

  const facts = [
    { label: "Cliente", value: work.nome },
    { label: "Settore", value: work.settore },
    { label: "Piattaforma", value: work.piattaforma },
  ].filter((f) => filled(f.value));

  return (
    <>
      <article>
        <header className="container-x pt-12 pb-12 md:pt-20 md:pb-20">
          <nav aria-label="Percorso" className="mb-10 text-sm text-muted">
            <Link href="/#lavori" className="hover:text-paper">
              <span aria-hidden="true">←</span> Tutti i lavori
            </Link>
          </nav>
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-muted uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            Case study · {work.settore}
          </p>
          <h1 className="display text-[clamp(3rem,14vw,11rem)]">{work.nome}</h1>
          <p className="mt-8 max-w-2xl text-lg text-muted md:text-2xl">{work.descrizioneBreve}</p>
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Servizi">
            {work.servizi.map((s) => (
              <li key={s}>
                <Tag>{s}</Tag>
              </li>
            ))}
          </ul>
          {live && (
            <div className="mt-10">
              <Button href={work.url} arrow>
                Visita il sito live
              </Button>
            </div>
          )}
        </header>

        {desktop[0] && (
          <div className="container-x">
            <div className="relative aspect-[16/10] overflow-hidden border border-line bg-surface">
              <Image
                src={desktop[0].src}
                alt={desktop[0].alt}
                fill
                priority
                sizes="(min-width: 1408px) 1328px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        )}

        <div className="container-x grid gap-12 py-20 md:grid-cols-[1fr_2fr] md:gap-20 md:py-28">
          <dl className="space-y-6 border-t border-line pt-6 md:sticky md:top-24 md:self-start">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">{f.label}</dt>
                <dd className="mt-1 text-xl">{f.value}</dd>
              </div>
            ))}
            {live && (
              <div>
                <dt className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">Online</dt>
                <dd className="mt-1 text-xl">
                  <a href={work.url} target="_blank" rel="noopener noreferrer" className="break-all hover:text-accent">
                    {work.url.replace(/^https?:\/\//, "")} <span aria-hidden="true">↗</span>
                  </a>
                </dd>
              </div>
            )}
          </dl>

          <div className="space-y-16">
            <Reveal>
              <h2 className="display text-4xl md:text-5xl">Il cliente</h2>
              <div className="mt-6 space-y-4 text-lg text-paper/85">
                {work.descrizione.filter(filled).map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>

            {filled(work.obiettivo) && (
              <Reveal>
                <h2 className="display text-4xl md:text-5xl">L&apos;obiettivo</h2>
                <p className="mt-6 text-lg text-paper/85">{work.obiettivo}</p>
              </Reveal>
            )}

            <Reveal>
              <h2 className="display text-4xl md:text-5xl">Cosa abbiamo fatto</h2>
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

        {(desktop.length > 1 || mobile.length > 0) && (
          <section aria-labelledby="galleria" className="border-t border-line py-20 md:py-28">
            <div className="container-x">
              <h2 id="galleria" className="display mb-12 text-4xl md:text-5xl">
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
            Vuoi un sito come <span className="text-accent">{work.nome}</span>?
          </>
        }
      />

      {altri.length > 0 && (
        <section aria-labelledby="altri" className="py-20 md:py-28">
          <div className="container-x">
            <h2 id="altri" className="display mb-12 text-4xl md:text-5xl">
              Altri lavori
            </h2>
            <ul className="grid gap-x-8 gap-y-16 md:grid-cols-2">
              {altri.map((w) => (
                <li key={w.slug}>
                  <WorkCard work={w} index={getWorksOrdered().indexOf(w)} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
