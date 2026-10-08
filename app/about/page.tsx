import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ButtonLink } from "@/components/Button";
import { Leadership } from "@/components/Leadership";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { LicenseCard, ServiceAreasCard } from "@/components/Trust";
import { site } from "@/lib/site";

const path = "/about";
const description = `${site.legalName} is a ${site.licenseClass.replace(/[“”]/g, '"')} licensed in Florida (#${site.license}), providing commercial, residential, and event security across ${site.serviceRegionLabel}.`;

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description: description,
  path: path,
});

const values = [
  { title: "Discipline", body: "Consistent standards of conduct, appearance, and readiness on every shift." },
  { title: "Integrity", body: "Honest communication, accurate reporting, and doing the right thing when no one is watching." },
  { title: "Accountability", body: "Clear responsibility at every post, with supervision and leadership that answer for results." },
  { title: "Service", body: "Protection delivered with courtesy and respect for the people and places we serve." },
];

const commitments = [
  "Operating in compliance with Chapter 493, Florida Statutes, and the rules of the Division of Licensing",
  "Assigning officers who hold the Florida licenses required for their posts",
  "Written post orders tailored to every client site",
  "Supervision and documented reporting on every assignment",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        title={
          <>
            Built on discipline. <span className="text-gold-gradient italic">Driven by service.</span>
          </>
        }
        intro={
          <p>
            {site.legalName} is a Florida-licensed security agency protecting businesses, communities, and events
            across {site.serviceRegionLabel} with professional officers and hands-on leadership.
          </p>
        }
        primaryCta={{ label: "Request Security Coverage", href: site.quoteHref }}
      />

      {/* Who we are */}
      <section aria-labelledby="who-heading" className="py-28 sm:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <SectionHeading
              id="who-heading"
              eyebrow="Who We Are"
              title={
                <>
                  A security agency held to a <span className="text-gold-gradient italic">higher standard.</span>
                </>
              }
            />
          </div>
          <Reveal className="space-y-6 text-lg leading-relaxed text-white/75 lg:col-span-7">
            <p>
              {site.name} provides commercial, residential, and event security for property owners, managers, and
              organizers who expect more than a uniform at the door. We believe effective security comes from the
              right people, clear procedures, and leadership that stays involved.
            </p>
            <p>
              Every engagement begins with understanding your site, your people, and your risks. From there, we build
              a coverage plan with written post orders, assign officers suited to the environment, and supervise the
              work so standards hold on every shift.
            </p>
            <p>
              Our mission is simple: <strong className="text-white">professional protection and disciplined service</strong>{" "}
              — delivered consistently, communicated clearly, and backed by accountability.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-heading" className="relative overflow-hidden border-y border-gold/15 bg-coal py-28 sm:py-36">
        <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_bottom,black,transparent_65%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            id="values-heading"
            align="center"
            eyebrow="Our Values"
            title={
              <>
                What we <span className="text-gold-gradient italic">stand for.</span>
              </>
            }
          />
          <ul className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 100} className="bg-coal p-8 sm:p-10">
                <span className="font-display text-4xl font-semibold text-gold-gradient">0{i + 1}</span>
                <h3 className="mt-5 font-display text-3xl font-semibold text-white lg:text-[1.65rem] xl:text-3xl">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-mist">{v.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Leadership />

      {/* Licensing & compliance */}
      <section aria-labelledby="compliance-heading" className="py-28 sm:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <SectionHeading
              id="compliance-heading"
              eyebrow="Licensing & Compliance"
              title={
                <>
                  Licensed, regulated, <span className="text-gold-gradient italic">accountable.</span>
                </>
              }
              intro={`Private security in Florida is regulated by the ${site.licenseIssuer}. We take that responsibility seriously.`}
            />
            <Reveal>
              <ul className="mt-10 space-y-4">
                {commitments.map((c) => (
                  <li key={c} className="flex items-start gap-4 border-b border-white/10 pb-4 text-white/85">
                    <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-gold" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7 lg:self-center">
            <Reveal>
              <LicenseCard className="h-full" />
            </Reveal>
            <Reveal delay={120}>
              <ServiceAreasCard className="h-full" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="about-cta-heading" className="border-t border-gold/15 bg-coal py-24">
        <Reveal className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 id="about-cta-heading" className="font-display text-4xl font-semibold text-balance sm:text-5xl">
            Put a disciplined team <span className="text-gold-gradient italic">on your post.</span>
          </h2>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            <ButtonLink href={site.quoteHref} arrow>
              Request Security Coverage
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Speak With Our Team
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
