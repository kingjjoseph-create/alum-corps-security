import Link from "next/link";
import type { ReactNode } from "react";
import { breadcrumbJsonLd } from "@/lib/seo";
import { ButtonLink } from "./Button";
import { JsonLd } from "./JsonLd";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  breadcrumbs: Crumb[];
  /** Optional right-hand panel (e.g. a quick index of the page). */
  aside?: ReactNode;
  primaryCta?: { label: string; href: string };
  /** Set false to hide the CTA buttons (e.g. when the page itself is a form). */
  showCtas?: boolean;
};

/** Hero for interior pages — shorter than the homepage hero, same atmosphere. */
export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  aside,
  primaryCta = { label: "Request Security Coverage", href: "#request-quote" },
  showCtas = true,
}: PageHeroProps) {
  return (
    <section
      aria-labelledby="page-heading"
      className="relative isolate overflow-hidden border-b border-gold/15 pt-36 pb-20 lg:pt-48 lg:pb-28"
    >
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_15%_0%,rgb(222_173_47/0.14),transparent_70%)]" />
        <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
        <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-[140px]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:items-end lg:px-8">
        <div className={aside ? "lg:col-span-7" : "lg:col-span-10"}>
          <nav aria-label="Breadcrumb" className="animate-fade-up">
            <ol className="flex flex-wrap items-center gap-2 text-xs tracking-[0.12em] text-mist uppercase sm:tracking-[0.2em]">
              {breadcrumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {i > 0 && (
                    <span aria-hidden="true" className="text-gold/60">
                      /
                    </span>
                  )}
                  {c.href ? (
                    <Link href={c.href} className="-my-3.5 inline-block py-3.5 transition-colors hover:text-gold">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white/75">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <p className="eyebrow mt-10 animate-fade-up [animation-delay:100ms]">{eyebrow}</p>
          <h1
            id="page-heading"
            className="mt-6 animate-rise font-display text-5xl leading-[1.02] font-semibold tracking-tight text-balance [animation-delay:200ms] sm:text-6xl lg:text-7xl"
          >
            {title}
          </h1>
          <div className="mt-8 max-w-2xl animate-fade-up text-lg leading-relaxed text-pretty text-white/75 [animation-delay:300ms] sm:text-xl">
            {intro}
          </div>
          {showCtas && (
            <div className="mt-10 flex animate-fade-up flex-col gap-4 [animation-delay:400ms] sm:flex-row sm:flex-wrap">
              <ButtonLink href={primaryCta.href} arrow>
                {primaryCta.label}
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Speak With Our Team
              </ButtonLink>
            </div>
          )}
        </div>

        {aside && <div className="animate-fade-up [animation-delay:500ms] lg:col-span-5">{aside}</div>}
      </div>
    </section>
  );
}
