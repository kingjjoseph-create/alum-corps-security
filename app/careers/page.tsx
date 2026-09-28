import type { Metadata } from "next";
import { CareersForm } from "@/components/CareersForm";
import { CheckIcon, PhoneIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { hiringSteps, positions, reasonsToJoin, requirements } from "@/lib/careers";
import { site } from "@/lib/site";

const path = "/careers";
const description =
  "Join Alum Corps Security. We hire licensed, professional security officers in Florida for commercial, residential, and event assignments.";

export const metadata: Metadata = {
  title: "Careers",
  description,
  alternates: { canonical: path },
  openGraph: { title: `Careers | ${site.name}`, description, url: path },
};

function PositionsCard() {
  return (
    <aside
      aria-labelledby="positions-heading"
      className="relative border border-gold/25 bg-gradient-to-b from-graphite/90 to-coal/90 p-7 backdrop-blur-sm sm:p-8"
    >
      <span aria-hidden="true" className="absolute -top-px -left-px h-8 w-8 border-t-2 border-l-2 border-gold" />
      <h2 id="positions-heading" className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">
        Positions We Hire For
      </h2>
      <ul className="mt-5">
        {positions.map((p) => (
          <li key={p.title} className="border-b border-white/10 py-3.5 last:border-b-0">
            <p className="font-semibold text-white">{p.title}</p>
            <p className="mt-0.5 text-sm text-mist">{p.note}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        title={
          <>
            Join Alum Corps <span className="text-gold-gradient italic">Security.</span>
          </>
        }
        intro={
          <p>
            We&rsquo;re building a team of disciplined, professional security officers who take pride in protecting
            people and property. If you hold yourself to a higher standard, we want to hear from you.
          </p>
        }
        primaryCta={{ label: "Start Your Application", href: "#apply" }}
        aside={<PositionsCard />}
      />

      {/* Why join */}
      <section aria-labelledby="why-join-heading" className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            id="why-join-heading"
            eyebrow="Why Alum Corps"
            title={
              <>
                A career built on <span className="text-gold-gradient italic">pride and discipline.</span>
              </>
            }
          />
          <ul className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {reasonsToJoin.map((r, i) => (
              <Reveal as="li" key={r.title} delay={i * 100} className="bg-ink p-8 sm:p-9">
                <span className="font-display text-4xl font-semibold text-gold-gradient">0{i + 1}</span>
                <h3 className="mt-5 text-lg font-semibold tracking-wide text-white">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-mist">{r.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Requirements + process */}
      <section aria-labelledby="requirements-heading" className="relative overflow-hidden border-y border-gold/15 bg-coal py-28 sm:py-36">
        <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_65%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              id="requirements-heading"
              eyebrow="Requirements"
              title={
                <>
                  What we <span className="text-gold-gradient italic">look for.</span>
                </>
              }
            />
            <Reveal>
              <ul className="mt-10 space-y-4">
                {requirements.map((r) => (
                  <li key={r} className="flex items-start gap-4 border-b border-white/10 pb-4 text-white/85">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div>
            <SectionHeading
              id="process-heading"
              eyebrow="Hiring Process"
              title={
                <>
                  Four steps to <span className="text-gold-gradient italic">your first post.</span>
                </>
              }
            />
            <ol className="mt-10 space-y-8">
              {hiringSteps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 100} className="flex gap-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold font-display text-xl font-semibold text-gold">
                    {i + 1}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold tracking-wide text-white">{s.title}</h3>
                    <p className="mt-1 leading-relaxed text-mist">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Application */}
      <section id="apply" aria-labelledby="apply-heading" className="relative scroll-mt-24 overflow-x-clip py-28 sm:py-36">
        <div aria-hidden="true" className="absolute top-20 -right-40 h-[36rem] w-[36rem] rounded-full bg-gold/10 blur-[140px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                id="apply-heading"
                eyebrow="Apply"
                title={
                  <>
                    Start your <span className="text-gold-gradient italic">application.</span>
                  </>
                }
                intro="Tell us about your licensing, experience, and availability. Our team reviews every application."
              />
              <Reveal delay={150}>
                <div className="mt-10 border-t border-white/10 pt-8">
                  <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">Questions about working with us?</p>
                  <a href={site.phoneHref} className="mt-4 flex min-h-11 lg:min-h-0 items-center gap-4 text-xl font-semibold text-white hover:text-gold">
                    <PhoneIcon className="h-5 w-5 text-gold" />
                    {site.phone}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative border border-gold/25 bg-gradient-to-b from-graphite to-coal p-6 shadow-[0_40px_120px_-50px_rgb(222_173_47/0.35)] sm:p-10 lg:p-12">
              <span aria-hidden="true" className="absolute -top-px -left-px h-10 w-10 border-t-2 border-l-2 border-gold" />
              <span aria-hidden="true" className="absolute -right-px -bottom-px h-10 w-10 border-r-2 border-b-2 border-gold" />
              <CareersForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
