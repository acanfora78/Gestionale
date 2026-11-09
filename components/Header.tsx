import { AutoHide } from "./AutoHide";
import { Logo } from "./Logo";

const nav = [
  { href: "/#lavori", label: "Lavori" },
  { href: "/#servizi", label: "Servizi" },
  { href: "/#metodo", label: "Metodo" },
  { href: "/#contatti", label: "Contatti" },
];

export function Header() {
  return (
    <AutoHide>
    <header className="border-b border-line/60 bg-ink/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Principale" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="group relative transition-colors hover:text-paper">
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-accent transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* <a> normale e non <Link>: Link non riscorre se #contatti è già nell'URL */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a
          href="/#contatti"
          className="inline-flex min-h-10 items-center bg-accent px-4 text-xs font-semibold tracking-wide uppercase transition-colors hover:bg-accent-hover"
        >
          Demo gratuita
        </a>
      </div>
    </header>
    </AutoHide>
  );
}
