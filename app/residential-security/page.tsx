import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ButtonLink } from "@/components/Button";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { QuoteSection } from "@/components/QuoteSection";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { managementBenefits, residentialProperties, residentialServices, residentialValues } from "@/lib/residential";
import { site } from "@/lib/site";
import { CornerAccents, HoverRule } from "@/components/Decor";

const path = "/residential-security";
const description =
  "Licensed residential security in Florida for gated communities, HOAs, condominiums, apartment communities, private estates, 55+ communities, and seasonal homes.";

export const metadata: Metadata = pageMetadata({
  title: "Residential Security Services",
  description: description,
  path: path,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Residential Security",
  serviceType: "Residential security guard services",
  description,
  url: `${site.url}${path}`,
  provider: { "@id": `${site.url}/#organization` },
  areaServed: site.serviceAreas.map((name) => ({ "@type": "AdministrativeArea", name: `${name}, ${site.region}` })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Residential security solutions",
    itemListElement: residentialProperties.map((p) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: `${p.title} Security`, description: p.summary },
    })),
  },
};

function PropertyIndex() {
  return (
    <nav
      aria-label="Communities we protect"
      className="relative border border-gold/25 bg-gradient-to-b from-graphite/90 to-coal/90 p-7 backdrop-blur-sm sm:p-8"
    >
      <CornerAccents />
      <p className="label-caps">Communities We Protect</p>
      <ul className="mt-5">
        {residentialProperties.map((p) => (
          <li key={p.id}>
            <a
              href={`#${p.id}`}
              className="group flex items-center gap-4 border-b border-white/10 py-3.5 text-white/85 transition-colors hover:text-gold"
            >
              <p.icon className="h-5 w-5 shrink-0 text-gold/80" />
              <span className="flex-1">{p.title}</span>
              <ArrowRightIcon className="h-4 w-4 text-gold/30 transition-all group-hover:translate-x-0.5 group-hover:text-gold" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function ResidentialSecurityPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHero
        eyebrow="Residential Security"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Residential Security" }]}
        title={
          <>
            Peace of mind, <span className="text-gold-gradient italic">at every gate and door.</span>
          </>
        }
        intro={
          <p>
            {site.name} protects gated communities, condominiums, apartment properties, and private estates with
            discreet, courteous officers — so residents feel safe coming home, and boards can trust the job is done
            right.
          </p>
        }
        aside={<PropertyIndex />}
      />

      {/* Communities */}
      <section aria-labelledby="communities-heading" className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            id="communities-heading"
            eyebrow="Residential Solutions"
            title={
              <>
                Protection tailored to <span className="text-gold-gradient italic">your community.</span>
              </>
            }
            intro="A high-rise lobby, a guarded gate, and a private estate each call for a different approach. We match officers, hours, and procedures to the way your residents live."
          />

          <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {residentialProperties.map((p, i) => (
              <Reveal as="li" key={p.id} delay={(i % 3) * 110} className="relative">
                <span id={p.id} aria-hidden="true" className="absolute -top-28" />
                <article className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-gradient-to-b from-graphite to-coal p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-card sm:p-9">
                  <HoverRule />
                  <span className="flex h-14 w-14 items-center justify-center border border-gold/40 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                    <p.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-8 font-display text-3xl leading-tight font-semibold text-white">{p.title}</h3>
                  <p className="mt-4 flex-1 leading-relaxed text-mist">{p.summary}</p>
                  <ul className="mt-8 space-y-2.5 border-t border-white/10 pt-6 text-sm text-white/85">
                    {p.coverage.map((c) => (
                      <li key={c} className="flex items-start gap-3">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-heading" className="relative overflow-hidden border-y border-gold/15 bg-coal py-28 sm:py-36">
        <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_bottom,black,transparent_65%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            id="values-heading"
            align="center"
            eyebrow="The Resident Experience"
            title={
              <>
                Hospitality and security, <span className="text-gold-gradient italic">in balance.</span>
              </>
            }
            intro="Residential security is personal. Our officers are trained to protect the community while respecting the people who call it home."
          />
          <ul className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
            {residentialValues.map((v, i) => (
              <Reveal as="li" key={v.word} delay={i * 120} className="text-center lg:px-8">
                <p className="font-display text-4xl font-semibold text-gold-gradient italic sm:text-5xl lg:text-[2rem] xl:text-5xl">{v.word}</p>
                <span aria-hidden="true" className="mx-auto mt-6 block h-px w-10 bg-gold/60" />
                <p className="mt-6 leading-relaxed text-mist">{v.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section aria-labelledby="residential-services-heading" className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionHeading
                id="residential-services-heading"
                eyebrow="What We Provide"
                title={
                  <>
                    Complete residential <span className="text-gold-gradient italic">coverage.</span>
                  </>
                }
              />
            </div>
            <Reveal className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-mist">
                Choose a single service or combine them into one program managed by a single, accountable team.
              </p>
            </Reveal>
          </div>
          <ul className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {residentialServices.map((s, i) => (
              <Reveal as="li" key={s.key} delay={(i % 4) * 90} className="group bg-ink p-7 transition-colors duration-500 hover:bg-graphite sm:p-8">
                <s.icon className="h-8 w-8 text-gold transition-transform duration-500 group-hover:-translate-y-1" />
                <h3 className="mt-6 text-lg font-semibold tracking-wide text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{s.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Boards & managers */}
      <section aria-labelledby="management-heading" className="border-t border-gold/15 bg-coal py-28 sm:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <SectionHeading
              id="management-heading"
              eyebrow="For Boards & Property Managers"
              title={
                <>
                  A security partner <span className="text-gold-gradient italic">you can rely on.</span>
                </>
              }
              intro="HOA boards and property managers need a vendor who follows the rules, communicates clearly, and never becomes another problem to manage."
            />
            <Reveal delay={150}>
              <ButtonLink href="#request-quote" arrow className="mt-10">
                Schedule an Assessment
              </ButtonLink>
            </Reveal>
          </div>
          <ul className="grid gap-px self-start overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:col-span-7">
            {managementBenefits.map((b, i) => (
              <Reveal as="li" key={b.title} delay={(i % 2) * 100} className="bg-coal p-8 sm:p-9">
                <span className="font-display text-3xl font-semibold text-gold/60">0{i + 1}</span>
                <h3 className="mt-4 text-lg font-semibold tracking-wide text-white">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-mist">{b.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <div className="border-t border-gold/15">
        <QuoteSection
          defaultService="Residential Security"
          title={
            <>
              Protect your <span className="text-gold-gradient italic">community.</span>
            </>
          }
          intro="Tell us about your community or residence — type of property, number of units or homes, and the hours you need covered — and we'll prepare a residential coverage plan."
        />
      </div>
    </>
  );
}
