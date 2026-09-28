import type { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { site } from "@/lib/site";

type LegalPageProps = {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  breadcrumb: string;
  toc: { id: string; label: string }[];
  children: ReactNode;
};

/** Shared layout for Privacy Policy, Terms of Use, and Accessibility. */
export function LegalPage({ eyebrow, title, intro, breadcrumb, toc, children }: LegalPageProps) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: breadcrumb }]}
        title={title}
        intro={
          <>
            {intro}
            <p className="mt-4 text-sm tracking-[0.15em] text-mist uppercase">Last updated: {site.legalLastUpdated}</p>
          </>
        }
        showCtas={false}
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-12 lg:px-8">
        <nav aria-label="On this page" className="lg:col-span-3">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">On this page</p>
            <ol className="mt-5 space-y-2.5 border-l border-white/10 pl-5 text-sm">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="text-mist transition-colors hover:text-gold">
                    {t.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>
        <article className="legal-prose max-w-3xl lg:col-span-9 [&>h2:first-child]:mt-0">{children}</article>
      </div>
    </>
  );
}
