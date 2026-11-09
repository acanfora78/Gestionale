"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";

/** Il contenuto viene "attratto" dal mouse quando ci passi sopra. */
export function Magnetic({ children, strength = 0.3, className = "" }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: PointerEvent<HTMLSpanElement>) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const b = ref.current.getBoundingClientRect();
    const dx = (e.clientX - (b.left + b.width / 2)) * strength;
    const dy = (e.clientY - (b.top + b.height / 2)) * strength;
    ref.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`inline-flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
    >
      {children}
    </span>
  );
}
