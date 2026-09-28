import type { ReactNode } from "react";
import { FaxIcon, MailIcon, PhoneIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";
import { QuoteForm } from "./QuoteForm";

const steps = [
  "Tell us about your property, event, or coverage needs.",
  "Our team reviews your request and contacts you promptly.",
  "We deliver a tailored security plan and proposal.",
];

type QuoteSectionProps = {
  title?: ReactNode;
  intro?: string;
  /** Preselects the "Service needed" field, e.g. "Commercial Security". */
  defaultService?: string;
};

export function QuoteSection({
  title = (
    <>
      Request security <span className="text-gold-gradient italic">coverage.</span>
    </>
  ),
  intro = "Share a few details and our team will prepare a coverage plan built around your site, schedule, and risks.",
  defaultService,
}: QuoteSectionProps) {
  return (
    <section id="request-quote" aria-labelledby="quote-heading" className="relative scroll-mt-24 overflow-hidden py-28 sm:py-36">
      <div aria-hidden="true" className="absolute top-0 -right-40 h-[36rem] w-[36rem] rounded-full bg-gold/10 blur-[140px]" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <SectionHeading
            id="quote-heading"
            eyebrow="Request a Quote"
            title={title}
            intro={intro}
          />

          <Reveal delay={100}>
            <ol className="mt-12 space-y-6">
              {steps.map((s, i) => (
                <li key={s} className="flex gap-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-gold/50 text-sm font-semibold text-gold">
                    {i + 1}
                  </span>
                  <span className="pt-1.5 leading-relaxed text-white/80">{s}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={200}>
            <address className="mt-12 space-y-4 border-t border-white/10 pt-10 not-italic">
              <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">Speak with our team</p>
              <a href={site.phoneHref} className="flex items-center gap-4 text-xl font-semibold text-white hover:text-gold">
                <PhoneIcon className="h-5 w-5 text-gold" />
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-4 text-white/85 hover:text-gold">
                <MailIcon className="h-5 w-5 text-gold" />
                {site.email}
              </a>
              <p className="flex items-center gap-4 text-mist">
                <FaxIcon className="h-5 w-5 text-gold" />
                Fax: {site.fax}
              </p>
            </address>
          </Reveal>
        </div>

        <Reveal delay={150} className="lg:col-span-7">
          <div className="relative border border-gold/25 bg-gradient-to-b from-graphite to-coal p-7 shadow-[0_40px_120px_-50px_rgb(222_173_47/0.4)] sm:p-12">
            <span aria-hidden="true" className="absolute -top-px -left-px h-10 w-10 border-t-2 border-l-2 border-gold" />
            <span aria-hidden="true" className="absolute -right-px -bottom-px h-10 w-10 border-r-2 border-b-2 border-gold" />
            <QuoteForm defaultService={defaultService} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
