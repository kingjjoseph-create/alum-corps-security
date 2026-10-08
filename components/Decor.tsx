import type { ReactNode } from "react";

/** Gold L-shaped corner brackets. Parent must be `relative`. */
export function CornerAccents({ size = "sm", both = false }: { size?: "sm" | "lg"; both?: boolean }) {
  const dim = size === "lg" ? "h-10 w-10" : "h-8 w-8";
  return (
    <>
      <span aria-hidden="true" className={`absolute -top-px -left-px ${dim} border-t-2 border-l-2 border-gold`} />
      {both && <span aria-hidden="true" className={`absolute -right-px -bottom-px ${dim} border-r-2 border-b-2 border-gold`} />}
    </>
  );
}

/** Gold line that draws across the top of a card on hover. Parent needs `group relative overflow-hidden`. */
export function HoverRule() {
  return (
    <span
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold-dark via-gold-light to-gold transition-transform duration-500 group-hover:scale-x-100"
    />
  );
}

/** Framed, glowing panel that holds the site's forms. */
export function FormPanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative border border-gold/25 bg-gradient-to-b from-graphite to-coal p-6 shadow-panel sm:p-10 lg:p-12 ${className}`}
    >
      <CornerAccents size="lg" both />
      {children}
    </div>
  );
}
