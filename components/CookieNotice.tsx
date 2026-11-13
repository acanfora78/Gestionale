"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "farge-avviso";

/**
 * Avviso informativo sui cookie. Il sito usa solo strumenti tecnici,
 * quindi non serve chiedere il consenso: l'avviso informa e basta.
 * Se un giorno aggiungi analytics o pixel, questo va sostituito
 * con un banner di consenso vero (accetta / rifiuta / personalizza).
 */
export function CookieNotice() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = localStorage.getItem(KEY) === "1";
    } catch {}
    if (seen) return;
    // Compare dopo l'intro, per non coprirla.
    const t = setTimeout(() => setOpen(true), 6500);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  const close = () => {
    try {
      localStorage.setItem(KEY, "1");
    } catch {}
    setOpen(false);
  };

  return (
    <aside
      aria-label="Informativa cookie"
      className="fade-in fixed inset-x-3 bottom-3 z-50 mx-auto flex max-w-xl items-center gap-3 border border-line bg-surface/95 p-3 text-xs text-paper/90 shadow-2xl backdrop-blur sm:gap-5 sm:p-4 sm:text-sm"
    >
      <p>
        Solo cookie tecnici: niente profilazione, niente tracciamento.{" "}
        <Link href="/cookie" className="underline underline-offset-4 hover:text-accent">
          Cookie policy
        </Link>
      </p>
      <button
        type="button"
        onClick={close}
        className="min-h-11 shrink-0 bg-paper px-4 text-xs font-semibold tracking-wide text-ink uppercase transition-colors hover:bg-accent hover:text-paper"
      >
        Ho capito
      </button>
    </aside>
  );
}
