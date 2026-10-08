import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const logoSrc = "/images/alum-corps-logo.jpg";

/** `sizes` for a given CSS width, matching the root font scaling in globals.css (112.5% ≥1920px, 125% ≥2400px). */
const scaledSizes = (px: number) => `(min-width: 2400px) ${px * 1.25}px, (min-width: 1920px) ${px * 1.125}px, ${px}px`;

/**
 * Official Alum Corps Security logo. The artwork already contains the
 * wordmark, so it is shown on its own, unmodified and at its native 1:1 ratio.
 * Size it with a height class (e.g. `h-16`); width follows automatically.
 */
export function Logo({
  className = "h-16",
  eager = false,
  width = 80,
}: {
  className?: string;
  /** Load immediately (above the fold). Replaces the `priority` prop deprecated in Next.js 16. */
  eager?: boolean;
  /** Rendered width in CSS px at default scale, so the browser downloads an appropriately sized file. */
  width?: number;
}) {
  return (
    <Link href="/" className="group inline-flex shrink-0" aria-label={`${site.name} — home`}>
      <Image
        src={logoSrc}
        alt={`${site.name} logo`}
        width={1254}
        height={1254}
        loading={eager ? "eager" : undefined}
        sizes={scaledSizes(width)}
        className={`w-auto transition-transform duration-500 group-hover:scale-[1.03] ${className}`}
      />
    </Link>
  );
}
