"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";

/** Inclinazione 3D leggera che segue il mouse (solo con mouse). */
export function Tilt({ children, max = 5, className = "" }: { children: ReactNode; max?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const b = ref.current.getBoundingClientRect();
    const px = (e.clientX - b.left) / b.width - 0.5;
    const py = (e.clientY - b.top) / b.height - 0.5;
    ref.current.style.transform = `perspective(1200px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`transition-transform duration-500 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
