import Link from "next/link";

/** Logo testuale: FΛRGE STUDIO® */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`font-display text-base font-bold tracking-tight uppercase md:text-lg ${className}`}
    >
      <span className="sr-only">FARGE STUDIO</span>
      <span aria-hidden="true">
        F
        <svg viewBox="0 0 10 12" className="mx-[0.04em] inline-block h-[0.72em] w-[0.62em] align-baseline text-accent" fill="currentColor">
          <path d="M0 12 4 0h2l4 12H7.6L5 3.6 2.4 12Z" />
        </svg>
        RGE STUDIO<sup className="ml-0.5 text-[0.6em]">®</sup>
      </span>
    </Link>
  );
}
