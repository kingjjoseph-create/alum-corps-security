import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Brand lockup. Replace /public/logo.svg (or point `src` at a PNG) with the
 * official Alum Corps logo file — layout will adapt automatically.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label={`${site.name} — home`}
    >
      <Image
        src="/logo.svg"
        alt=""
        width={40}
        height={46}
        priority
        className="h-11 w-auto transition-transform duration-500 group-hover:scale-105"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-[0.12em] text-white uppercase">
          Alum Corps
        </span>
        <span className="mt-1 text-[0.62rem] font-semibold tracking-[0.42em] text-gold uppercase">
          Security
        </span>
      </span>
    </Link>
  );
}
