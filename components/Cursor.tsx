"use client";

import { useEffect, useRef } from "react";

/**
 * Cursore a mirino da cinepresa: crocino rosso + inquadratura con gli angoli
 * che lo segue con un leggero ritardo, con "● REC" e timecode che scorre.
 * Si allarga sui link e sui lavori ([data-cursor="view"]) mostra "Apri progetto".
 * Aggiorna anche --mx / --my (da -1 a 1) sulla pagina, per i parallassi col mouse.
 * Attivo solo con puntatore fine (mouse) e senza "riduci movimento":
 * su touch resta il cursore normale.
 */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const tc = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce || !dot.current || !ring.current) return;

    const d = dot.current;
    const r = ring.current;
    const root = document.documentElement;
    const start = performance.now();
    const pad = (n: number) => String(n).padStart(2, "0");
    let x = -200, y = -200, rx = -200, ry = -200, raf = 0, lastF = -1;
    d.style.display = r.style.display = "block";
    root.classList.add("has-cursor");

    const updateState = (t: Element | null) => {
      const view = t?.closest?.("[data-cursor='view']");
      const link = t?.closest?.("a, button, input, textarea, label, select");
      r.dataset.state = view ? "view" : link ? "link" : "";
    };
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      root.style.setProperty("--mx", ((x / window.innerWidth) * 2 - 1).toFixed(3));
      root.style.setProperty("--my", ((y / window.innerHeight) * 2 - 1).toFixed(3));
      updateState(e.target as Element | null);
    };
    // Dopo uno scroll l'elemento sotto il mirino cambia anche senza muovere il mouse.
    const onScroll = () => updateState(document.elementFromPoint(x, y));
    const loop = (now: number) => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      d.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      r.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      // Timecode HH:MM:SS:FF a 24 fps, aggiornato solo quando cambia il fotogramma
      const t = (now - start) / 1000;
      const f = Math.floor((t % 1) * 24);
      if (f !== lastF && tc.current) {
        lastF = f;
        tc.current.textContent = `${pad(Math.floor(t / 3600))}:${pad(Math.floor(t / 60) % 60)}:${pad(Math.floor(t) % 60)}:${pad(f)}`;
      }
      raf = requestAnimationFrame(loop);
    };
    const hide = () => (d.style.opacity = r.style.opacity = "0");
    const show = () => (d.style.opacity = r.style.opacity = "1");

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointerleave", hide);
    document.addEventListener("pointerenter", show);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerleave", hide);
      document.removeEventListener("pointerenter", show);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" style={{ display: "none" }} aria-hidden="true" />
      <div ref={ring} className="cursor-ring" style={{ display: "none" }} aria-hidden="true">
        <span className="vf-corner vf-tl" />
        <span className="vf-corner vf-tr" />
        <span className="vf-corner vf-bl" />
        <span className="vf-corner vf-br" />
        <span className="vf-label">Apri progetto</span>
        <span className="vf-rec">
          <i />
          Rec <span ref={tc}>00:00:00:00</span>
        </span>
      </div>
    </>
  );
}
