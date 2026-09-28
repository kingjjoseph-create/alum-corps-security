import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const logoSrc = "/images/alum-corps-logo.jpg";

/**
 * Official Alum Corps Security logo. The artwork already contains the
 * wordmark, so it is shown on its own, unmodified and at its native 1:1 ratio.
 * Size it with a height class (e.g. `h-16`); width follows automatically.
 */
export function Logo({ className = "h-16", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Link href="/" className="group inline-flex shrink-0" aria-label={`${site.name} — home`}>
      <Image
        src={logoSrc}
        alt={`${site.name} logo`}
        width={1254}
        height={1254}
        priority={priority}
        sizes="160px"
        className={`w-auto transition-transform duration-500 group-hover:scale-[1.03] ${className}`}
      />
    </Link>
  );
}
