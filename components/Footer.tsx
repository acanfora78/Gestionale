import Link from "next/link";
import { site } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = 2026;
  return (
    <footer className="border-t border-line py-12 text-sm text-muted">
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
    </footer>
  );
}
