import Link from "next/link";
import { navigation, services, site } from "@/lib/site";
import { ButtonLink } from "./Button";
import { FaxIcon, MailIcon, PhoneIcon, ShieldIcon } from "./Icons";
import { Logo } from "./Logo";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const companyLinks = [
    ...navigation.filter((n) => !n.children && n.href !== "/"),
    { label: "Request a Quote", href: site.quoteHref },
  ];

  return (
    <footer className="relative border-t border-gold/20 bg-coal" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="gold-rule absolute inset-x-0 top-0" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:px-8 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-4">
          <Logo className="h-28" width={112} />
          <p className="mt-6 max-w-sm leading-relaxed text-mist">
            {site.legalName} provides licensed commercial, residential, and event security across{" "}
            {site.serviceRegionLabel}.
          </p>

          {/* License block — the single most important trust signal for a security agency. */}
          <div className="mt-8 max-w-sm border border-gold/30 bg-ink/40 p-5">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              <ShieldIcon className="h-4 w-4" />
              {site.licenseLabel}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-mist">
              {site.licenseClass} licensed by the {site.licenseIssuer}.
            </p>
            <a
              href={site.licenseVerifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex min-h-11 lg:min-h-0 items-center text-sm text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold-light lg:mt-3"
            >
              Verify with the Division of Licensing<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <nav aria-label="Services" className="lg:col-span-2">
          <h3 className="label-caps">Services</h3>
          <ul className="mt-3 text-sm lg:mt-5 lg:space-y-3">
            <li>
              <Link href="/services" className="inline-flex min-h-11 lg:min-h-0 items-center text-mist transition-colors hover:text-white">
                All Services
              </Link>
            </li>
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="inline-flex min-h-11 lg:min-h-0 items-center text-mist transition-colors hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="lg:col-span-2">
          <h3 className="label-caps">Company</h3>
          <ul className="mt-3 text-sm lg:mt-5 lg:space-y-3">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-11 lg:min-h-0 items-center text-mist transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sm:col-span-2 lg:col-span-4">
          <h3 className="label-caps">Contact</h3>
          <address className="mt-3 space-y-1 text-sm not-italic lg:mt-5 lg:space-y-4">
            <a href={site.phoneHref} className="flex min-h-11 lg:min-h-0 items-center gap-3 text-white transition-colors hover:text-gold">
              <PhoneIcon className="h-5 w-5 shrink-0 text-gold" />
              <span>
                <span className="sr-only">Phone: </span>
                {site.phone}
              </span>
            </a>
            <a href={`mailto:${site.email}`} className="flex min-h-11 lg:min-h-0 items-center gap-3 text-white transition-colors hover:text-gold">
              <MailIcon className="h-5 w-5 shrink-0 text-gold" />
              <span>
                <span className="sr-only">Email: </span>
                {site.email}
              </span>
            </a>
            <p className="flex items-center gap-3 text-mist">
              <FaxIcon className="h-5 w-5 shrink-0 text-gold" />
              <span>Fax: {site.fax}</span>
            </p>
            {site.address && (
              <p className="pl-8 text-mist">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </p>
            )}
          </address>

          <h3 className="mt-8 label-caps">Service Areas</h3>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            {site.serviceAreas.join(" · ")}
            <br />
            <span className="text-white/50">{site.serviceAreaNote}</span>
          </p>

          <ButtonLink href="/contact" variant="outline" arrow className="mt-8">
            Speak With Our Team
          </ButtonLink>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs text-mist lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>
            &copy; {year} {site.legalName}. All rights reserved. {site.licenseLabel}.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex min-h-11 lg:min-h-0 items-center transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
