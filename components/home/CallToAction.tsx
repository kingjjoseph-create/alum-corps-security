import { ButtonLink } from "@/components/Button";
import { MailIcon, PhoneIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export function CallToAction() {
  return (
    <section aria-labelledby="cta-heading" className="px-6 pb-24 sm:pb-32 lg:px-8">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden border border-gold/30 bg-gradient-to-br from-graphite via-coal to-ink px-8 py-16 sm:px-14 sm:py-20">
        <div aria-hidden="true" className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-[120px]" />
        <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_right,black,transparent_70%)]" />

        <div className="relative grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Get Protected</p>
            <h2 id="cta-heading" className="mt-5 font-display text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl">
              Ready to secure your <span className="text-gold-gradient italic">property or event?</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
              Tell us what you need protected. Our team will respond promptly with a tailored coverage plan and quote.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/request-a-quote" arrow>
                Get a Quote
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Speak With Our Team
              </ButtonLink>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-5">
            <a
              href={site.phoneHref}
              className="group flex items-center gap-5 border border-white/10 bg-ink/60 p-6 transition-colors hover:border-gold/50"
            >
              <PhoneIcon className="h-7 w-7 shrink-0 text-gold" />
              <span>
                <span className="block text-xs tracking-[0.25em] text-mist uppercase">Call</span>
                <span className="text-xl font-semibold text-white group-hover:text-gold">{site.phone}</span>
              </span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-5 border border-white/10 bg-ink/60 p-6 transition-colors hover:border-gold/50"
            >
              <MailIcon className="h-7 w-7 shrink-0 text-gold" />
              <span className="min-w-0">
                <span className="block text-xs tracking-[0.25em] text-mist uppercase">Email</span>
                <span className="block truncate text-xl font-semibold text-white group-hover:text-gold">{site.email}</span>
              </span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
