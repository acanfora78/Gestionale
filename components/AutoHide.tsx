"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Nasconde l'header quando scorri verso il basso e lo rimostra quando torni su. */
export function AutoHide({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const el = ref.current;
        if (el) {
          const hide = y > last && y > 200;
          el.style.transform = hide ? "translateY(-100%)" : "";
          el.dataset.scrolled = y > 20 ? "true" : "false";
        }
        last = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className="sticky top-0 z-40 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
      {children}
    </div>
  );
}
