import Link from "next/link";
import { site } from "@/data/site";
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
          <li>
            <a href={site.contatti.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
              Instagram
            </a>
          </li>
          <li>
            <a href={`mailto:${site.contatti.email}`} className="hover:text-paper">
              {site.contatti.email}
            </a>
          </li>
          <li>
            <Link href="/privacy" className="hover:text-paper">
              Privacy
            </Link>
          </li>
        </ul>
        <div className="space-y-1 md:text-right">
          {/* TODO: P.IVA reale in data/site.ts */}
          <p>P.IVA {site.piva}</p>
          <p>
            © {year} {site.nome}
          </p>
        </div>
      </div>

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
