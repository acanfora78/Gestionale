import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Magnetic } from "./Magnetic";

type Variant = "primary" | "outline" | "ghost";

const base =
  "group inline-flex w-full min-h-12 items-center justify-center gap-3 px-6 text-sm font-semibold tracking-wide uppercase transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-paper hover:bg-accent-hover",
  outline: "border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink",
  ghost: "text-paper underline-offset-8 hover:text-accent hover:underline px-0",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  external?: boolean;
  className?: string;
} & Omit<ComponentProps<"a">, "href" | "children">;

export function Button({ href, children, variant = "primary", arrow = false, external, className = "", ...rest }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  // Il testo scorre verso l'alto e ne entra una copia dal basso al passaggio del mouse.
  const content = (
    <>
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
          {children}
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
        >
          {children}
        </span>
      </span>
      {arrow && (
        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      )}
    </>
  );

  const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);
  if (isExternal) {
    return (
      <Magnetic className="w-full sm:w-auto">
        <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" {...rest}>
          {content}
        </a>
      </Magnetic>
    );
  }
  return (
    <Magnetic className="w-full sm:w-auto">
      <Link href={href} className={cls} {...rest}>
        {content}
      </Link>
    </Magnetic>
  );
}
