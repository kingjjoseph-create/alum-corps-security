import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

const helpful = [
  { label: "Security Services", href: "/services" },
  { label: "Request a Quote", href: site.quoteHref },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-36 pb-20">
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <p className="eyebrow justify-center">Error 404</p>
        <h1 className="mt-6 font-display text-5xl font-semibold sm:text-6xl">
          We couldn&rsquo;t find <span className="text-gold-gradient italic">that page.</span>
        </h1>
        <p className="mt-6 text-lg text-mist">
          The address may be mistyped, or the page may have moved. Try one of these instead, or call us at{" "}
          <a href={site.phoneHref} className="text-gold hover:text-gold-light">
            {site.phone}
          </a>
          .
        </p>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold tracking-[0.15em] uppercase">
          {helpful.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-white/85 transition-colors hover:text-gold">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <ButtonLink href="/" arrow>
            Back to Home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
