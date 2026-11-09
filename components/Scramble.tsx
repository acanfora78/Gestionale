"use client";

import { useEffect, useRef } from "react";

const CHARS = "ΛABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&";

/** Testo che si "decodifica" lettera per lettera quando entra nello schermo. */
export function Scramble({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 900;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          const done = Math.floor(p * text.length);
          let out = text.slice(0, done);
          for (let k = done; k < text.length; k++) {
            out += text[k] === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)];
          }
          el.textContent = out;
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [text]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
