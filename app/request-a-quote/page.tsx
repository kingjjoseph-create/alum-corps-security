import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CoverageForm } from "@/components/CoverageForm";
import { MailIcon, PhoneIcon, ShieldIcon, FaxIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";
import { FormPanel } from "@/components/Decor";

const path = "/request-a-quote";
const description =
  "Request a security quote from Alum Corps Security. Tell us about your location, schedule, and needs for commercial, residential, or event security coverage in Florida.";

export const metadata: Metadata = pageMetadata({
  title: "Request a Quote",
  description: description,
  path: path,
});

const nextSteps = [
  { title: "We review your request", body: "Our team reviews your location, schedule, and security needs." },
  { title: "We contact you", body: "A team member reaches out to confirm details and answer questions." },
  { title: "You receive a proposal", body: "We deliver a tailored coverage plan with staffing and pricing." },
];

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Request a Quote" }]}
        title={
          <>
            Request security <span className="text-gold-gradient italic">coverage.</span>
          </>
        }
        intro={
          <p>
            Tell us what you need protected. The more detail you share, the faster we can prepare an accurate coverage
            plan and quote.
          </p>
        }
        showCtas={false}
      />

      <section aria-label="Security coverage request form" className="relative overflow-x-clip py-20 sm:py-28">
        <div aria-hidden="true" className="absolute top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-gold/5 blur-[140px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div id="coverage-form" className="scroll-mt-28 lg:col-span-8">
            <FormPanel>
              <CoverageForm />
            </FormPanel>
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-10 lg:sticky lg:top-32">
              <div>
                <p className="eyebrow">What Happens Next</p>
                <ol className="mt-8 space-y-7">
                  {nextSteps.map((s, i) => (
                    <li key={s.title} className="flex gap-5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-gold/50 text-sm font-semibold text-gold">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-white">{s.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-mist">{s.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <address className="space-y-4 border-t border-white/10 pt-10 not-italic">
                <p className="label-caps">Prefer to talk?</p>
                <a href={site.phoneHref} className="flex min-h-11 lg:min-h-0 items-center gap-4 text-2xl font-semibold text-white hover:text-gold">
                  <PhoneIcon className="h-6 w-6 text-gold" />
                  {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="flex min-h-11 lg:min-h-0 items-center gap-4 text-white/85 hover:text-gold">
                  <MailIcon className="h-5 w-5 text-gold" />
                  {site.email}
                </a>
                <p className="flex items-center gap-4 text-mist">
                  <FaxIcon className="h-5 w-5 text-gold" />
                  Fax: {site.fax}
                </p>
              </address>

              <p className="flex items-center gap-3 border border-gold/30 px-5 py-4 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                <ShieldIcon className="h-5 w-5 shrink-0" />
                {site.licenseLabel}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
