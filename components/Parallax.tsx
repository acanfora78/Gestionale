import type { ReactNode } from "react";

/**
 * Il contenuto scorre più lento della pagina, come una carrellata.
 * Solo CSS (scroll-driven animations): nessun JavaScript.
 * Sui browser che non le supportano l'immagine resta ferma.
 * Il contenitore padre deve avere dimensioni proprie (es. aspect ratio).
 */
export function Parallax({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="parallax absolute inset-[-10%_0]">{children}</div>
    </div>
  );
}
