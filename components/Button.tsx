import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-3 px-6 text-sm font-semibold tracking-wide uppercase transition-colors duration-200";

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
  const content = (
    <>
      <span>{children}</span>
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
      <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}
