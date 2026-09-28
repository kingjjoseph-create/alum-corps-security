import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { ArrowRightIcon, BuildingIcon, CheckIcon, HomeIcon, TicketIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/site";

const icons = {
  "commercial-security": BuildingIcon,
  "residential-security": HomeIcon,
  "event-security": TicketIcon,
} as const;

export function ServicesSection() {
  return (
    <section aria-labelledby="services-heading" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-heading"
            eyebrow="Our Services"
            title={
              <>
                Security services for <span className="text-gold-gradient italic">every setting.</span>
              </>
            }
            intro="Whether you manage a commercial property, a residential community, or a high-profile event, we build a coverage plan around your site, your people, and your risks."
          />
          <Reveal>
            <ButtonLink href="/services" variant="outline" arrow>
              View All Services
            </ButtonLink>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.slug];
            return (
              <Reveal as="li" key={s.slug} delay={i * 120}>
                <Link
                  href={s.href}
                  className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-gradient-to-b from-graphite to-coal p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_30px_80px_-30px_rgb(222_173_47/0.35)] sm:p-10"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold-dark via-gold-light to-gold transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <span className="text-xs font-semibold tracking-[0.3em] text-gold/70">0{i + 1}</span>
                  <span className="mt-6 flex h-14 w-14 items-center justify-center border border-gold/40 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-8 font-display text-3xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-4 leading-relaxed text-mist">{s.summary}</p>
                  <ul className="mt-6 space-y-2.5 text-sm text-white/80">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-2 pt-10 text-sm font-semibold tracking-[0.18em] text-gold uppercase">
                    Learn more
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
