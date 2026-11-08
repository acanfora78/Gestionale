import Image from "next/image";
import Link from "next/link";
import { hasUrl, type Work } from "@/data/works";
import { Tag } from "./Tag";

export function WorkCard({ work, index, priority = false }: { work: Work; index: number; priority?: boolean }) {
  const cover = work.immagini.find((i) => i.tipo === "desktop");
  const live = hasUrl(work);

  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative aspect-[16/10] overflow-hidden border border-line bg-surface">
        {cover ? (
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            priority={priority}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            {/* Segnaposto finché non ci sono screenshot: testo via CSS, solo decorativo */}
            <span
              aria-hidden="true"
              data-label={work.nome}
              className="display text-5xl text-line before:content-[attr(data-label)] md:text-7xl"
            />
          </div>
        )}
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 h-1 w-0 bg-accent transition-[width] duration-500 group-hover:w-full"
        />
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="display text-3xl md:text-4xl">
            <Link href={`/lavori/${work.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
              {work.nome}
            </Link>
          </h3>
          <span className="font-display text-sm text-muted tabular-nums" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <p className="mt-1 text-sm tracking-wide text-muted uppercase">{work.settore}</p>
        <p className="mt-3 max-w-prose text-muted">{work.descrizioneBreve}</p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Servizi">
          {work.servizi.map((s) => (
            <li key={s}>
              <Tag>{s}</Tag>
            </li>
          ))}
        </ul>

        <div className="relative z-10 mt-6 flex items-center gap-6 text-sm font-semibold uppercase">
          <span className="text-paper">
            Case study <span aria-hidden="true">→</span>
          </span>
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
    </article>
  );
}
