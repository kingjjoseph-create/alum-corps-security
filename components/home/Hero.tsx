import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { ArrowRightIcon, BuildingIcon, HomeIcon, PhoneIcon, ShieldIcon, TicketIcon } from "@/components/Icons";
import { services, site } from "@/lib/site";

const serviceIcons = {
  "commercial-security": BuildingIcon,
  "residential-security": HomeIcon,
  "event-security": TicketIcon,
} as const;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20 lg:pt-40"
    >
      {/* Background composition */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_40%,black_10%,transparent_70%)]" />
        <div className="absolute top-10 right-[-10%] h-[42rem] w-[42rem] rounded-full bg-gold/15 blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[30rem] w-[30rem] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <p className="eyebrow animate-fade-up">Licensed Florida Security Agency</p>

          <h1
            id="hero-heading"
            className="mt-7 animate-fade-up font-display text-5xl leading-[0.98] font-semibold text-balance [animation-delay:120ms] sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
          >
            Disciplined protection for{" "}
            <span className="text-gold-gradient animate-shimmer italic">what matters most.</span>
          </h1>

          <p className="mt-8 max-w-xl animate-fade-up text-lg leading-relaxed text-pretty text-white/75 [animation-delay:240ms] sm:text-xl">
            {site.legalName} delivers professional commercial, residential, and event security — with
            trained officers, clear communication, and a standard of conduct you can see.
          </p>

          <div className="mt-10 flex animate-fade-up flex-col gap-4 [animation-delay:360ms] sm:flex-row">
            <ButtonLink href="/request-a-quote" arrow>
              Request Security Coverage
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Speak With Our Team
            </ButtonLink>
          </div>

          <a
            href={site.phoneHref}
            className="mt-10 inline-flex animate-fade-up items-center gap-4 text-sm text-mist transition-colors [animation-delay:480ms] hover:text-white"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs tracking-[0.25em] text-gold uppercase">Call our team</span>
              <span className="text-lg font-semibold text-white">{site.phone}</span>
            </span>
          </a>
        </div>

        {/* Coverage panel */}
        <div className="animate-fade-up [animation-delay:500ms] lg:col-span-5">
          <div className="relative border border-gold/25 bg-gradient-to-b from-graphite/90 to-coal/90 p-8 shadow-[0_40px_120px_-40px_rgb(222_173_47/0.35)] backdrop-blur-sm sm:p-10">
            <span aria-hidden="true" className="absolute -top-px -left-px h-8 w-8 border-t-2 border-l-2 border-gold" />
            <span aria-hidden="true" className="absolute -right-px -bottom-px h-8 w-8 border-r-2 border-b-2 border-gold" />

            <div className="flex items-center gap-3 text-gold">
              <ShieldIcon className="h-6 w-6" />
              <p className="text-xs font-semibold tracking-[0.3em] uppercase">Coverage Solutions</p>
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold text-white">Security built around you.</h2>

            <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {services.map((s) => {
                const Icon = serviceIcons[s.slug];
                return (
                  <li key={s.slug}>
                    <Link href={s.href} className="group flex items-center gap-5 py-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/30 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="flex-1">
                        <span className="block font-semibold text-white">{s.title}</span>
                        <span className="block text-sm text-mist">{s.points[0]}</span>
                      </span>
                      <ArrowRightIcon className="h-5 w-5 text-gold/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <p className="mt-6 text-xs tracking-[0.2em] text-mist uppercase">{site.licenseLabel}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
