import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRightIcon, BuildingIcon, CarIcon, CheckIcon, HomeIcon, KeyIcon, ShieldIcon, TicketIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { QuoteSection } from "@/components/QuoteSection";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { LicenseCard, ServiceAreasCard } from "@/components/Trust";
import { specializedServices } from "@/lib/services-detail";
import { services, site } from "@/lib/site";
import { HoverRule } from "@/components/Decor";

const path = "/services";
const description = `Licensed security services across ${site.serviceRegionLabel}: commercial, residential, and event security, mobile patrol, access control, and property protection.`;

export const metadata: Metadata = pageMetadata({
  title: "Security Services",
  description: description,
  path: path,
});

const coreIcons = { "commercial-security": BuildingIcon, "residential-security": HomeIcon, "event-security": TicketIcon } as const;
const specializedIcons = { "mobile-patrol": CarIcon, "access-control": KeyIcon, "property-protection": ShieldIcon } as const;


export default function ServicesPage() {
  return (
    <>

      <PageHero
        eyebrow="Security Services"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        title={
          <>
            Comprehensive protection, <span className="text-gold-gradient italic">one standard.</span>
          </>
        }
        intro={
          <p>
            From a single post to multi-site programs, {site.name} delivers licensed officers, patrols, and access
            control — planned, supervised, and held to the same disciplined standard.
          </p>
        }
        aside={<LicenseCard />}
      />

      {/* Core services */}
      <section aria-labelledby="core-heading" className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            id="core-heading"
            eyebrow="Core Services"
            title={
              <>
                Three disciplines, <span className="text-gold-gradient italic">fully staffed.</span>
              </>
            }
          />
          <ul className="mt-16 grid gap-6 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = coreIcons[s.slug];
              return (
                <Reveal as="li" key={s.slug} delay={i * 120}>
                  <Link
                    href={s.href}
                    className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-gradient-to-b from-graphite to-coal p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-card sm:p-10"
                  >
                    <HoverRule />
                    <span className="flex h-14 w-14 items-center justify-center border border-gold/40 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-8 font-display text-3xl font-semibold text-white">{s.title}</h3>
                    <p className="mt-4 flex-1 leading-relaxed text-mist">{s.summary}</p>
                    <ul className="mt-6 space-y-2.5 text-sm text-white/75">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-3">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.18em] text-gold uppercase">
                      Explore {s.short} Security
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Specialized services */}
      <section aria-labelledby="specialized-heading" className="relative overflow-hidden border-y border-gold/15 bg-coal py-28 sm:py-36">
        <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            id="specialized-heading"
            eyebrow="Specialized Services"
            title={
              <>
                Added layers of <span className="text-gold-gradient italic">protection.</span>
              </>
            }
            intro="Available on their own or combined with any core service into a single coverage program."
          />
          <ol className="mt-16 border-b border-white/10">
            {specializedServices.map((s) => {
              const Icon = specializedIcons[s.id];
              return (
                <li key={s.id} id={s.id} className="scroll-mt-28 border-t border-white/10">
                  <Reveal className="grid gap-8 py-12 lg:grid-cols-12 lg:gap-12">
                    <div className="flex items-center gap-5 lg:col-span-4 lg:items-start">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-gold/40 text-gold">
                        <Icon className="h-7 w-7" />
                      </span>
                      <h3 className="font-display text-4xl leading-tight font-semibold text-white">{s.title}</h3>
                    </div>
                    <p className="leading-relaxed text-white/75 lg:col-span-4">{s.summary}</p>
                    <ul className="space-y-3 lg:col-span-4">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-white/85">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Where we work */}
      <section aria-labelledby="coverage-heading" className="py-28 sm:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:items-center lg:px-8">
          <div className="lg:col-span-5">
            <SectionHeading
              id="coverage-heading"
              eyebrow="Where We Work"
              title={
                <>
                  Serving <span className="text-gold-gradient italic">{site.serviceRegionLabel}.</span>
                </>
              }
              intro="Every assignment is planned locally and supervised directly by our team."
            />
          </div>
          <Reveal className="lg:col-span-6 lg:col-start-7">
            <ServiceAreasCard />
          </Reveal>
        </div>
      </section>

      <div className="border-t border-gold/15">
        <QuoteSection />
      </div>
    </>
  );
}
