import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { EventServiceIcon } from "@/components/event/icons";
import { CheckIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { QuoteSection } from "@/components/QuoteSection";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { eventLifecycle, eventServices, eventTypes } from "@/lib/event";
import { site } from "@/lib/site";

const path = "/event-security";
const description =
  "Licensed event security in Florida: entrance and exit control, credential verification, crowd management, VIP areas, bag checks, perimeter security, parking control, emergency coordination, and incident documentation.";

export const metadata: Metadata = {
  title: "Event Security Services",
  description,
  alternates: { canonical: path },
  openGraph: { title: `Event Security Services | ${site.name}`, description, url: path },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Event Security",
      serviceType: "Event security services",
      description,
      url: `${site.url}${path}`,
      provider: { "@id": `${site.url}/#organization` },
      areaServed: { "@type": "State", name: site.region },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Event security services",
        itemListElement: eventServices.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.summary },
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
        { "@type": "ListItem", position: 3, name: "Event Security", item: `${site.url}${path}` },
      ],
    },
  ],
};

const quoteChecklist = [
  "Event date and hours",
  "Venue and location",
  "Expected attendance",
  "Type of event",
  "VIP, backstage, or alcohol-service areas",
];

function PlanningCard() {
  return (
    <aside
      aria-labelledby="planning-heading"
      className="relative border border-gold/25 bg-gradient-to-b from-graphite/90 to-coal/90 p-5 backdrop-blur-sm sm:p-9"
    >
      <span aria-hidden="true" className="absolute -top-px -left-px h-8 w-8 border-t-2 border-l-2 border-gold" />
      <span aria-hidden="true" className="absolute -right-px -bottom-px h-8 w-8 border-r-2 border-b-2 border-gold" />
      <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">Planning an Event?</p>
      <h2 id="planning-heading" className="mt-4 font-display text-3xl font-semibold text-white">
        Get an accurate quote, fast.
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-mist">Share these details and we&rsquo;ll recommend the right staffing plan:</p>
      <ul className="mt-6 space-y-3">
        {quoteChecklist.map((item) => (
          <li key={item} className="flex items-start gap-3 text-white/85">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            {item}
          </li>
        ))}
      </ul>
      <ButtonLink href="#request-quote" variant="outline" arrow className="mt-8 w-full">
        Start Your Event Quote
      </ButtonLink>
    </aside>
  );
}

export default function EventSecurityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <PageHero
        eyebrow="Event Security"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Event Security" }]}
        title={
          <>
            Seamless events. <span className="text-gold-gradient italic">Secured with discipline.</span>
          </>
        }
        intro={
          <p>
            From intimate private gatherings to large-scale concerts and festivals, {site.name} plans and staffs
            professional security that protects your guests, talent, and venue — while keeping the experience
            welcoming.
          </p>
        }
        aside={<PlanningCard />}
      />

      {/* Services */}
      <section aria-labelledby="event-services-heading" className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionHeading
                id="event-services-heading"
                eyebrow="Event Security Services"
                title={
                  <>
                    Every access point. <span className="text-gold-gradient italic">Every guest.</span>
                  </>
                }
              />
            </div>
            <Reveal className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-mist">
                Choose the services your event needs, or let us build a complete plan — staffed, supervised, and
                coordinated from load-in to load-out.
              </p>
            </Reveal>
          </div>

          <ul className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {eventServices.map((s, i) => (
              <Reveal
                as="li"
                key={s.id}
                delay={(i % 3) * 100}
                className="group relative bg-ink p-8 transition-colors duration-500 hover:bg-graphite sm:p-10"
              >
                <span id={s.id} className="absolute -top-28" aria-hidden="true" />
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold-dark via-gold-light to-gold transition-transform duration-500 group-hover:scale-x-100"
                />
                <div className="flex items-start justify-between">
                  <EventServiceIcon id={s.id} className="h-10 w-10 text-gold transition-transform duration-500 group-hover:-translate-y-1" />
                  <span aria-hidden="true" className="font-display text-lg text-white/60 transition-colors duration-500 group-hover:text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-3xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-mist">{s.summary}</p>
                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6 text-sm text-white/80">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {d}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Lifecycle */}
      <section aria-labelledby="lifecycle-heading" className="relative overflow-hidden border-y border-gold/15 bg-coal py-28 sm:py-36">
        <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_65%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            id="lifecycle-heading"
            align="center"
            eyebrow="Before, During & After"
            title={
              <>
                Coverage for the <span className="text-gold-gradient italic">entire event.</span>
              </>
            }
            intro="Great event security starts long before doors open and ends only when the venue is clear and you have our report in hand."
          />

          <ol className="relative mt-20 grid gap-12 lg:grid-cols-3 lg:gap-8">
            <span
              aria-hidden="true"
              className="absolute top-7 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-gold/20 via-gold/70 to-gold/20 lg:block"
            />
            {eventLifecycle.map((stage, i) => (
              <Reveal as="li" key={stage.phase} delay={i * 150} className="relative text-center">
                <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-coal font-display text-xl font-semibold text-gold">
                  {i + 1}
                </span>
                <p className="mt-6 text-xs font-semibold tracking-[0.35em] text-gold uppercase">{stage.phase}</p>
                <h3 className="mt-3 font-display text-3xl font-semibold text-white">{stage.title}</h3>
                <ul className="mx-auto mt-6 max-w-xs space-y-3 text-left">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-mist">
                      <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-gold/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Event types */}
      <section aria-labelledby="event-types-heading" className="py-28 sm:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4">
            <SectionHeading
              id="event-types-heading"
              eyebrow="Events We Secure"
              title={
                <>
                  Scaled to your <span className="text-gold-gradient italic">occasion.</span>
                </>
              }
              intro="One officer at the door or a full team across the venue — coverage is sized to your attendance, venue, and risk."
            />
          </div>
          <ul className="grid gap-px self-start overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:col-span-8">
            {eventTypes.map((t, i) => (
              <Reveal
                as="li"
                key={t}
                delay={(i % 2) * 80}
                className="group flex items-center gap-5 bg-ink px-7 py-7 transition-colors duration-500 hover:bg-graphite"
              >
                <span className="font-display text-2xl text-gold/50 transition-colors duration-500 group-hover:text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-semibold text-white">{t}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <div className="border-t border-gold/15">
        <QuoteSection
          defaultService="Event Security"
          title={
            <>
              Secure your <span className="text-gold-gradient italic">next event.</span>
            </>
          }
          intro="Include your event date, venue, hours, and expected attendance in the details — our team will respond with a staffing plan and quote."
        />
      </div>
    </>
  );
}
