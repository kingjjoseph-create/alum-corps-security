import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/Button";
import { MailIcon, PhoneIcon, ShieldIcon } from "@/components/Icons";
import { site } from "@/lib/site";

const disciplines = ["Commercial", "Residential", "Event Security"];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink pt-28 lg:pt-36"
    >
      {/* Atmosphere. To use photography instead, place a full-bleed <Image fill> here
          with a dark overlay (e.g. bg-ink/70) above it. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgb(222_173_47/0.16),transparent_70%)]" />
        <div className="beam left-[18%] hidden sm:block" style={{ "--beam-from": "12deg", "--beam-to": "30deg" } as CSSProperties} />
        <div
          className="beam right-[18%] hidden [animation-delay:-7s] sm:block"
          style={{ "--beam-from": "-12deg", "--beam-to": "-30deg" } as CSSProperties}
        />
        <div className="absolute inset-x-[-50%] top-[80%] h-[60%]">
          <div className="horizon-grid absolute inset-0 opacity-60" />
        </div>
        <div className="absolute inset-x-0 top-[80%] h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent shadow-[0_0_40px_6px_rgb(222_173_47/0.35)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--color-ink)_95%)]" />
        <div className="grain absolute inset-0" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 py-16 text-center lg:px-8">
        <p className="flex animate-fade-up items-center gap-4 text-xs font-semibold tracking-[0.4em] text-gold uppercase sm:gap-6 sm:text-sm sm:tracking-[0.55em]">
          <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-transparent to-gold sm:w-16" />
          {site.name}
          <span aria-hidden="true" className="h-px w-8 bg-gradient-to-l from-transparent to-gold sm:w-16" />
        </p>

        <h1
          id="hero-heading"
          className="mt-8 animate-fade-up font-display text-[2.75rem] leading-[1.02] font-semibold tracking-tight text-balance [animation-delay:150ms] sm:text-7xl lg:text-8xl xl:text-[6.75rem]"
        >
          Professional Protection.
          <br />
          <span className="text-gold-gradient animate-shimmer italic">Disciplined Service.</span>
        </h1>

        <p className="mt-8 flex animate-fade-up flex-wrap items-center justify-center gap-x-2.5 gap-y-2 text-[0.66rem] font-medium tracking-[0.12em] text-white/80 uppercase [animation-delay:300ms] sm:gap-x-5 sm:text-base sm:tracking-[0.3em]">
          {disciplines.map((d, i) => (
            <span key={d} className="inline-flex items-center gap-2.5 sm:gap-5">
              {i > 0 && <span aria-hidden="true" className="h-4 w-px bg-gold/70" />}
              {d}
            </span>
          ))}
        </p>

        <div className="mt-12 flex w-full animate-fade-up flex-col justify-center gap-4 [animation-delay:450ms] sm:w-auto sm:flex-row">
          <ButtonLink href="#request-quote" arrow>
            Request Security Coverage
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Speak With Our Team
          </ButtonLink>
        </div>
      </div>

      {/* Credential bar */}
      <div className="relative animate-fade-up border-t border-gold/20 bg-ink/70 backdrop-blur-sm [animation-delay:600ms]">
        <dl className="mx-auto grid max-w-7xl divide-y divide-white/10 px-6 text-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
          <div className="py-5 sm:py-6">
            <dt className="sr-only">License</dt>
            <dd className="flex items-center justify-center gap-3 tracking-[0.18em] text-white/80 uppercase">
              <ShieldIcon className="h-5 w-5 text-gold" />
              {site.licenseLabel}
            </dd>
          </div>
          <div className="py-5 sm:py-6">
            <dt className="sr-only">Phone</dt>
            <dd>
              <a href={site.phoneHref} className="flex items-center justify-center gap-3 tracking-[0.12em] text-white/80 transition-colors hover:text-gold">
                <PhoneIcon className="h-5 w-5 text-gold" />
                {site.phone}
              </a>
            </dd>
          </div>
          <div className="py-5 sm:py-6">
            <dt className="sr-only">Email</dt>
            <dd>
              <a href={`mailto:${site.email}`} className="flex items-center justify-center gap-3 text-white/80 transition-colors hover:text-gold">
                <MailIcon className="h-5 w-5 text-gold" />
                {site.email}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
