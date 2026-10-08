import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ArrowRightIcon, FaxIcon, MailIcon, PhoneIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { LicenseCard, ServiceAreasCard } from "@/components/Trust";
import { site } from "@/lib/site";
import { FormPanel } from "@/components/Decor";

const path = "/contact";
const description = `Contact ${site.legalName}. Call ${site.phone}, email ${site.email}, or send a message. Serving ${site.serviceAreas.join(", ")}.`;

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description: description,
  path: path,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${site.name}`,
  url: `${site.url}${path}`,
  mainEntity: { "@id": `${site.url}/#organization` },
};

const channels = [
  { icon: PhoneIcon, label: "Call", value: site.phone, href: site.phoneHref, note: "Speak directly with our team" },
  { icon: MailIcon, label: "Email", value: site.email, href: `mailto:${site.email}`, note: "We respond promptly" },
  { icon: FaxIcon, label: "Fax", value: site.fax, href: undefined, note: "For documents and contracts" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <PageHero
        eyebrow="Contact Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        title={
          <>
            Speak with <span className="text-gold-gradient italic">our team.</span>
          </>
        }
        intro={<p>Questions about coverage, an existing assignment, or working with us? Reach out — a member of our team will respond.</p>}
        showCtas={false}
      />

      {/* Direct channels */}
      <section aria-label="Contact methods" className="border-b border-gold/15 bg-coal">
        <ul className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {channels.map(({ icon: Icon, label, value, href, note }) => {
            const inner = (
              <>
                <Icon className="h-8 w-8 shrink-0 text-gold" />
                <span className="min-w-0">
                  <span className="block label-caps">{label}</span>
                  <span className="mt-1 block truncate text-xl font-semibold text-white sm:text-2xl">{value}</span>
                  <span className="mt-1 block text-sm text-mist">{note}</span>
                </span>
              </>
            );
            return (
              <li key={label}>
                {href ? (
                  <a href={href} className="group flex items-center gap-5 px-6 py-10 transition-colors hover:bg-graphite lg:px-10">
                    {inner}
                  </a>
                ) : (
                  <div className="flex items-center gap-5 px-6 py-10 lg:px-10">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* Form + trust */}
      <section aria-labelledby="message-heading" className="relative overflow-x-clip py-24 sm:py-32">
        <div aria-hidden="true" className="absolute top-20 -right-40 h-[36rem] w-[36rem] rounded-full bg-gold/10 blur-[140px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-7">
            <p className="eyebrow">Send a Message</p>
            <h2 id="message-heading" className="mt-5 font-display text-4xl font-semibold sm:text-5xl">
              How can we <span className="text-gold-gradient italic">help?</span>
            </h2>
            <FormPanel className="mt-10">
              <ContactForm />
            </FormPanel>
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <Reveal>
              <Link
                href={site.quoteHref}
                className="group flex items-center justify-between gap-6 border border-gold/50 bg-gold/10 p-7 transition-colors hover:bg-gold/15"
              >
                <span>
                  <span className="block label-caps">Need coverage?</span>
                  <span className="mt-2 block font-display text-2xl font-semibold text-white">Request Security Coverage</span>
                  <span className="mt-1 block text-sm text-mist">Get a tailored quote for your site or event.</span>
                </span>
                <ArrowRightIcon className="h-6 w-6 shrink-0 text-gold transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
            <Reveal delay={100}>
              <ServiceAreasCard />
            </Reveal>
            <Reveal delay={200}>
              <LicenseCard />
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
