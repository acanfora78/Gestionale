import Link from "next/link";
import { servizi, site, titolareLegale } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = 2026;
  return (
    <footer className="relative overflow-hidden border-t border-line pt-12 text-sm text-muted">
      <div className="container-x flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <Logo className="text-paper" />
          <p>{site.luogo}</p>
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {site.contatti.instagram && (
            <li>
              <a href={site.contatti.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                Instagram
              </a>
            </li>
          )}
          <li>
            <a href={`tel:+${site.contatti.whatsapp}`} className="hover:text-paper">
              {site.contatti.telefonoVisibile}
            </a>
          </li>
          <li>
            <a href={`mailto:${site.contatti.email}`} className="hover:text-paper">
              {site.contatti.email}
            </a>
          </li>
        </ul>
        <div className="space-y-1 md:text-right">
          <p>
            © {year} {titolareLegale()}
          </p>
          {site.legale.sede && <p>{site.legale.sede}</p>}
          <p>P.IVA {site.piva}</p>
          {site.legale.rea && <p>REA {site.legale.rea}</p>}
          {site.legale.datiSocietari && <p>{site.legale.datiSocietari}</p>}
          {site.legale.pec && <p>PEC {site.legale.pec}</p>}
        </div>
      </div>

      {/* Link legali */}
      <nav aria-label="Informazioni legali" className="container-x mt-10 border-t border-line pt-6">
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-xs tracking-wide uppercase">
          {[
            { href: "/privacy", label: "Privacy Policy" },
            { href: "/cookie", label: "Cookie Policy" },
            { href: "/accessibilita", label: "Dichiarazione di accessibilità" },
            { href: "/note-legali", label: "Note legali" },
          ].map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-paper">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-3xl text-xs leading-relaxed">
          Marchi, loghi e contenuti dei lavori mostrati appartengono ai rispettivi titolari e sono riprodotti per
          documentare il lavoro svolto. Il sito usa solo strumenti tecnici, senza cookie di profilazione.
        </p>
      </nav>

      {/* Titoli di coda: scorrono lentamente verso l'alto quando entrano nello schermo */}
      <section aria-label="Titoli di coda" data-scene="" className="credits container-x mt-16 md:mt-24">
        <div className="credits-roll mx-auto max-w-md text-center">
          <p className="text-[11px] font-semibold tracking-[0.4em] uppercase">Un film di</p>
          <p className="mt-2 font-display text-3xl font-bold text-paper uppercase md:text-4xl">FΛRGE STUDIO™</p>

          <h2 className="mt-10 text-[11px] font-semibold tracking-[0.4em] uppercase">Regia</h2>
          <p className="mt-2 text-base text-paper">{site.legale.titolare || site.nome}</p>

          <h2 className="mt-8 text-[11px] font-semibold tracking-[0.4em] uppercase">Servizi</h2>
          <ul className="mt-2 space-y-1 text-base text-paper">
            {servizi.map((s) => (
              <li key={s.titolo}>{s.titolo}</li>
            ))}
          </ul>

          <h2 className="mt-8 text-[11px] font-semibold tracking-[0.4em] uppercase">Contatti</h2>
          <ul className="mt-2 space-y-1 text-base text-paper">
            <li>
              <a href={`mailto:${site.contatti.email}`} className="hover:text-accent">
                {site.contatti.email}
              </a>
            </li>
            <li>
              <a href={`tel:+${site.contatti.whatsapp}`} className="hover:text-accent">
                {site.contatti.telefonoVisibile}
              </a>
            </li>
            <li>{site.luogo}</li>
          </ul>
        </div>
      </section>

      {/* Titolo di coda */}
      <div aria-hidden="true" className="container-x mt-16 select-none md:mt-24">
        <p className="mb-4 text-center text-[11px] font-semibold tracking-[0.4em] uppercase">Fine</p>
        {/* Lettere via CSS: puramente decorative */}
        <div className="rise-on-scroll display -mb-[0.12em] flex items-baseline justify-center text-[24vw] leading-[0.8] text-paper/[0.07]">
          <span data-t="F" className="before:content-[attr(data-t)]" />
          <svg viewBox="0 0 10 12" className="mx-[0.03em] h-[0.72em] w-[0.62em] text-accent/50" fill="currentColor">
            <path d="M0 12 4 0h2l4 12H7.6L5 3.6 2.4 12Z" />
          </svg>
          <span data-t="RGE" className="before:content-[attr(data-t)]" />
        </div>
      </div>
    </footer>
  );
}
