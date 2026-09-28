import Link from "next/link";
import { ArrowRightIcon, BuildingIcon, CarIcon, HomeIcon, KeyIcon, ShieldIcon, TicketIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { capabilities, type CapabilitySlug } from "@/lib/site";

const icons: Record<CapabilitySlug, typeof ShieldIcon> = {
  "commercial-security": BuildingIcon,
  "residential-security": HomeIcon,
  "event-security": TicketIcon,
  "mobile-patrol": CarIcon,
  "access-control": KeyIcon,
  "property-protection": ShieldIcon,
};

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              id="services-heading"
              eyebrow="Security Services"
              title={
                <>
                  Comprehensive protection, <span className="text-gold-gradient italic">one standard.</span>
                </>
              }
            />
          </div>
          <Reveal className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-mist">
              From a single post to multi-site programs, every assignment is planned, supervised, and delivered to the
              same disciplined standard.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => {
            const Icon = icons[c.slug];
            return (
              <Reveal as="li" key={c.slug} delay={(i % 3) * 110} className="bg-ink">
                <Link
                  href={c.href}
                  className="group relative flex h-full flex-col p-8 transition-colors duration-500 hover:bg-graphite sm:p-10 lg:min-h-[21rem]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold-dark via-gold-light to-gold transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <div className="flex items-start justify-between">
                    <Icon className="h-10 w-10 text-gold transition-transform duration-500 group-hover:-translate-y-1" />
                    <span className="font-display text-lg text-white/25 transition-colors duration-500 group-hover:text-gold/70">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-10 font-display text-3xl font-semibold text-white">{c.title}</h3>
                  <p className="mt-4 leading-relaxed text-mist">{c.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-semibold tracking-[0.25em] text-gold uppercase">
                    Learn more
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
