import Link from "next/link";
import { hasUrl, type Work } from "@/data/works";
import { Tag } from "./Tag";
import { Tilt } from "./Tilt";
import { WorkCover } from "./WorkCover";

/**
 * Card di un lavoro come un fotogramma: copertina a tutta larghezza,
 * titolo sovrapposto, dettagli sotto.
 */
export function WorkCard({
  work,
  index,
  total,
  wide = false,
}: {
  work: Work;
  index: number;
  total: number;
  wide?: boolean;
}) {
  const live = hasUrl(work);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <article className="group relative flex h-full flex-col">
      <Tilt>
      <div
        data-cursor="view"
        className={`wipe relative overflow-hidden border border-line bg-surface ${
          wide ? "aspect-[4/5] sm:aspect-[16/10] md:aspect-[21/9]" : "aspect-[4/5] sm:aspect-[16/10]"
        }`}
      >
        <div className="zoom-out-on-scroll absolute inset-0">
        <div className="absolute inset-0 transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]">
          <WorkCover work={work} sizes={wide ? "100vw" : "(min-width: 768px) 50vw, 100vw"} />
        </div>
        </div>

        {/* Tutto il fotogramma porta al case study (da tastiera si usa il titolo, qui tabIndex -1 evita il doppio stop) */}
        <Link
          href={`/lavori/${work.slug}`}
          aria-label={`Apri il case study di ${work.nome}`}
          tabIndex={-1}
          className="absolute inset-0 z-[1]"
        />

        {/* Sfumature per leggere il titolo */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-ink from-5% via-ink/75 via-35% to-transparent to-75%" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-24 bg-gradient-to-b from-ink/70 to-transparent" />

        <div className="pointer-events-none absolute inset-x-0 top-0 z-[3] flex items-center justify-between p-4 text-[11px] font-semibold tracking-[0.2em] text-paper/80 uppercase md:p-6">
          <span className="tabular-nums">
            {pad(index + 1)} / {pad(total)}
          </span>
          {!work.illustrazione && <span>{work.tipo ?? work.piattaforma}</span>}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] p-4 md:p-8">
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-paper/80 uppercase">{work.settore}</p>
          <h3 className={`display ${wide ? "text-[clamp(2.75rem,9vw,8rem)]" : "text-[clamp(2.75rem,7vw,5rem)]"}`}>
            <Link
              href={`/lavori/${work.slug}`}
              className="glitch pointer-events-auto inline-block"
            >
              {work.nome}
            </Link>
          </h3>
        </div>

        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 z-[3] h-1 w-0 bg-accent transition-[width] duration-700 ease-out group-hover:w-full"
        />
      </div>
      </Tilt>

      <div className="relative z-10 flex flex-1 flex-col gap-4 pt-5 md:flex-row md:items-start md:justify-between md:gap-10">
        <p className="max-w-xl text-muted">{work.descrizioneBreve}</p>
        <div className="flex shrink-0 flex-col gap-4 md:items-end">
          <ul className="flex flex-wrap gap-2 md:justify-end" aria-label="Servizi">
            {work.servizi.map((s) => (
              <li key={s}>
                <Tag>{s}</Tag>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-6 text-sm font-semibold uppercase">
            <Link href={`/lavori/${work.slug}`} className="text-paper transition-colors hover:text-accent" tabIndex={-1} aria-hidden="true">
              Case study <span aria-hidden="true">→</span>
            </Link>
            {live && (
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                Sito live <span className="sr-only">di {work.nome} (si apre in una nuova scheda)</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
