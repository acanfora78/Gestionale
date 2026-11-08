import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block border border-line px-2.5 py-1 text-xs tracking-wide text-paper/80 uppercase">
      {children}
    </span>
  );
}
