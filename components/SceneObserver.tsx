"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Un solo IntersectionObserver per tutto il sito: quando un elemento con
 * [data-scene] entra nello schermo riceve [data-inview] e parte la sua animazione CSS
 * (bande letterbox, cartello macchina da scrivere, titoli di coda).
 * Con "riduci movimento" non fa nulla e gli elementi restano fermi e visibili.
 */
export function SceneObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("scenes");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.inview = "";
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.08 },
    );
    document.querySelectorAll<HTMLElement>("[data-scene]:not([data-inview])").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
