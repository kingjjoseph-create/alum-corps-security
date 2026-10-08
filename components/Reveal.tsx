import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
};

/**
 * Fades + lifts its children into view once they enter the viewport.
 * Server-rendered markup only; a single shared observer (RevealObserver) animates
 * every [data-reveal] element. Content stays visible without JS and for users who
 * prefer reduced motion.
 */
export function Reveal({ children, as: Tag = "div", delay = 0, className = "" }: RevealProps) {
  return (
    <Tag
      data-reveal=""
      className={className}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
