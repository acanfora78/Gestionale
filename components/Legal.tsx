import Link from "next/link";
import type { ReactNode } from "react";
import { site, titolareLegale } from "@/data/site";

const pagine = [
  { href: "/privacy", label: "Privacy" },
  { href: "/cookie", label: "Cookie" },
  { href: "/note-legali", label: "Note legali" },
  { href: "/accessibilita", label: "Accessibilità" },
];

/** Impaginazione comune delle pagine legali. */
export function LegalPage({ titolo, intro, children }: { titolo: string; intro?: string; children: ReactNode }) {
  return (
    <article className="container-x max-w-3xl py-16 md:py-24">
      <p className="mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-muted uppercase">
        <span aria-hidden="true" className="h-px w-10 bg-accent" />
        Informazioni legali
      </p>
      <h1 className="display text-[clamp(2.75rem,10vw,6rem)]">{titolo}</h1>
      {intro && <p className="mt-6 text-lg text-muted">{intro}</p>}
      <p className="mt-4 text-sm text-muted">Ultimo aggiornamento: {site.legale.aggiornamento}</p>

      <nav aria-label="Pagine legali" className="mt-8 flex flex-wrap gap-2">
        {pagine.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="border border-line px-3 py-2 text-xs font-semibold tracking-wide uppercase transition-colors hover:border-accent hover:text-accent"
          >
            {p.label}
          </Link>
        ))}
      </nav>

      <div className="legal mt-12">{children}</div>
    </article>
  );
}

/** Blocco con i dati di chi gestisce il sito. I campi vuoti non compaiono. */
export function DatiTitolare() {
  const l = site.legale;
  return (
    <address className="not-italic">
      <strong>{titolareLegale()}</strong>
      <br />
      {l.sede && (
        <>
          {l.sede}
          <br />
        </>
      )}
      P.IVA {site.piva}
      {l.datiSocietari && (
        <>
          <br />
          {l.datiSocietari}
        </>
      )}
      <br />
      Email: <a href={`mailto:${site.contatti.email}`}>{site.contatti.email}</a>
      {l.pec && (
        <>
          <br />
          PEC: <a href={`mailto:${l.pec}`}>{l.pec}</a>
        </>
      )}
      <br />
      Telefono: <a href={`tel:+${site.contatti.whatsapp}`}>{site.contatti.telefonoVisibile}</a>
    </address>
  );
}
