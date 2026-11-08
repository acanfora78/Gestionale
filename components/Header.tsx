import Link from "next/link";
import { Logo } from "./Logo";

const nav = [
  { href: "/#lavori", label: "Lavori" },
  { href: "/#servizi", label: "Servizi" },
  { href: "/#metodo", label: "Metodo" },
  { href: "/#contatti", label: "Contatti" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-ink/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Principale" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/#contatti"
          className="inline-flex min-h-10 items-center bg-accent px-4 text-xs font-semibold tracking-wide uppercase transition-colors hover:bg-accent-hover"
        >
          Demo gratuita
        </Link>
      </div>
    </header>
  );
}
