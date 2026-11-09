/** Linea rossa che si disegna mentre la sezione scorre (solo CSS). */
export function ScrollLine({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`h-px bg-line ${className}`}>
      <div className="scroll-line h-px origin-left bg-accent" />
    </div>
  );
}
