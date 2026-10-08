import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { QuoteSection } from "@/components/QuoteSection";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { commercialProcess, commercialSectors, commercialToolkit } from "@/lib/commercial";
import { site } from "@/lib/site";
import { CornerAccents } from "@/components/Decor";

const path = "/commercial-security";
const description =
  "Licensed commercial security in Florida for construction sites, solar sites, warehouses, offices, retail properties, apartment communities, parking areas, and industrial properties.";

export const metadata: Metadata = pageMetadata({
  title: "Commercial Security Services",
  description: description,
  path: path,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Security",
  serviceType: "Commercial security guard services",
  description,
  url: `${site.url}${path}`,
  provider: { "@id": `${site.url}/#organization` },
  areaServed: site.serviceAreas.map((name) => ({ "@type": "AdministrativeArea", name: `${name}, ${site.region}` })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Commercial security solutions",
    itemListElement: commercialSectors.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: `${s.title} Security`, description: s.summary },
    })),
  },
};

function SectorIndex() {
  return (
    <nav
      aria-label="Properties we protect"
      className="relative border border-gold/25 bg-gradient-to-b from-graphite/90 to-coal/90 p-7 backdrop-blur-sm sm:p-8"
    >
      <CornerAccents />
      <p className="label-caps">Properties We Protect</p>
      <ul className="mt-5 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
        {commercialSectors.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="group flex h-full items-center gap-3 border-b border-white/10 py-3 text-sm text-white/85 transition-colors hover:text-gold"
            >
              <s.icon className="h-5 w-5 shrink-0 text-gold/80" />
              <span className="flex-1">{s.title}</span>
              <ArrowRightIcon className="h-3.5 w-3.5 text-gold/0 transition-all group-hover:translate-x-0.5 group-hover:text-gold" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function CommercialSecurityPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHero
        eyebrow="Commercial Security"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Commercial Security" }]}
        title={
          <>
            Security built for how your <span className="text-gold-gradient italic">property operates.</span>
          </>
        }
        intro={
          <p>
            From active job sites to occupied office towers, {site.name} delivers licensed, uniformed officers and
            patrol coverage tailored to each property&rsquo;s risks, schedule, and people.
          </p>
        }
        aside={<SectorIndex />}
      />

      {/* Security solutions by property type */}
      <section aria-labelledby="solutions-heading" className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            id="solutions-heading"
            eyebrow="Security Solutions"
            title={
              <>
                Solutions for every <span className="text-gold-gradient italic">commercial property.</span>
              </>
            }
            intro="Each property type faces different threats. Our coverage is planned around the specific risks of your site — not a generic guard template."
          />

          <ol className="mt-20 border-b border-white/10">
            {commercialSectors.map((s, i) => (
              <li key={s.id} id={s.id} className="scroll-mt-28 border-t border-white/10">
                <Reveal className="grid gap-10 py-14 lg:grid-cols-12 lg:gap-12 lg:py-16">
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-5">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-gold/40 text-gold">
                        <s.icon className="h-7 w-7" />
                      </span>
                      <span aria-hidden="true" className="font-display text-lg text-white/60">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-6 font-display text-4xl leading-tight font-semibold text-white">{s.title}</h3>
                  </div>

                  <div className="lg:col-span-4">
                    <p className="leading-relaxed text-white/75">{s.summary}</p>
                    <h4 className="mt-8 text-xs font-semibold tracking-[0.25em] text-mist uppercase">Common risks</h4>
                    <ul className="mt-4 space-y-2.5 text-sm text-mist">
                      {s.risks.map((r) => (
                        <li key={r} className="flex items-start gap-3">
                          <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-gold/60" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="h-full border border-white/10 bg-graphite/50 p-7">
                      <h4 className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Our coverage</h4>
                      <ul className="mt-5 space-y-3.5">
                        {s.coverage.map((c) => (
                          <li key={c} className="flex items-start gap-3 text-white/85">
                            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Service toolkit */}
      <section aria-labelledby="toolkit-heading" className="relative overflow-hidden border-y border-gold/15 bg-coal py-28 sm:py-36">
        <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            id="toolkit-heading"
            align="center"
            eyebrow="What We Provide"
            title={
              <>
                Coverage options that <span className="text-gold-gradient italic">scale with you.</span>
              </>
            }
            intro="Combine dedicated officers, patrols, and access control into a single program — for one site or an entire portfolio."
          />
          <ul className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {commercialToolkit.map((t, i) => (
              <Reveal as="li" key={t.key} delay={(i % 3) * 100} className="group bg-coal p-8 transition-colors duration-500 hover:bg-graphite sm:p-10">
                <t.icon className="h-9 w-9 text-gold transition-transform duration-500 group-hover:scale-110" />
                <h3 className="mt-6 text-lg font-semibold tracking-wide text-white">{t.title}</h3>
                <p className="mt-3 leading-relaxed text-mist">{t.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process-heading" className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            id="process-heading"
            eyebrow="Our Approach"
            title={
              <>
                From assessment to <span className="text-gold-gradient italic">first shift.</span>
              </>
            }
          />
          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {commercialProcess.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 120}>
                <div className="flex items-center gap-4">
                  <span className="font-display text-5xl font-semibold text-gold-gradient">0{i + 1}</span>
                  <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-wide text-white">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-mist">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <div className="border-t border-gold/15">
        <QuoteSection
          defaultService="Commercial Security"
          title={
            <>
              Protect your <span className="text-gold-gradient italic">commercial property.</span>
            </>
          }
          intro="Tell us about your site — property type, hours, and concerns — and our team will prepare a commercial coverage plan and quote."
        />
      </div>
    </>
  );
}
