"use client";

import { useEffect, useRef } from "react";

/**
 * Cursore personalizzato: punto rosso + anello che lo segue con ritardo.
 * Si ingrandisce sui link e mostra "Guarda" sui lavori ([data-cursor="view"]).
 * Aggiorna anche --mx / --my (da -1 a 1) sulla pagina, per i parallassi col mouse.
 * Attivo solo con mouse e senza "riduci movimento".
 */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce || !dot.current || !ring.current) return;

    const d = dot.current;
    const r = ring.current;
    const root = document.documentElement;
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0;
    d.style.display = r.style.display = "grid";
    root.classList.add("has-cursor");

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      root.style.setProperty("--mx", ((x / window.innerWidth) * 2 - 1).toFixed(3));
      root.style.setProperty("--my", ((y / window.innerHeight) * 2 - 1).toFixed(3));
      const t = e.target as Element | null;
      const view = t?.closest?.("[data-cursor='view']");
      const link = t?.closest?.("a, button, input, textarea, label");
      r.dataset.state = view ? "view" : link ? "link" : "";
    };
    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      d.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      r.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    const hide = () => (d.style.opacity = r.style.opacity = "0");
    const show = () => (d.style.opacity = r.style.opacity = "1");

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", hide);
    document.addEventListener("pointerenter", show);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", hide);
      document.removeEventListener("pointerenter", show);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" style={{ display: "none" }} aria-hidden="true" />
      <div ref={ring} className="cursor-ring" style={{ display: "none" }} aria-hidden="true">
        <span>Guarda</span>
      </div>
    </>
  );
}
