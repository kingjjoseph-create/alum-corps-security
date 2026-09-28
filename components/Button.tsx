import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRightIcon } from "./Icons";

type Variant = "primary" | "outline" | "ghost";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2.5 px-5 py-3.5 text-center text-[0.8125rem] font-semibold uppercase tracking-[0.1em] sm:whitespace-nowrap sm:px-7 sm:text-sm sm:tracking-[0.16em] transition-all duration-300 focus-visible:outline-gold";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-gold-dark via-gold to-gold-light text-ink shadow-[0_0_0_1px_rgb(222_173_47/0.4)] hover:shadow-[0_10px_40px_-10px_rgb(222_173_47/0.7)] hover:-translate-y-0.5",
  outline:
    "border border-gold/60 text-white hover:border-gold hover:bg-gold/10 hover:-translate-y-0.5",
  ghost: "px-0 py-2 text-gold hover:text-gold-light",
};

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ variant = "primary", arrow = false, className = "", children, ...props }: ButtonLinkProps) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      {arrow && (
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}
