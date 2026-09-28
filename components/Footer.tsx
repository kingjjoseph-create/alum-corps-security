import Link from "next/link";
import { navigation, services, site } from "@/lib/site";
import { ButtonLink } from "./Button";
import { FaxIcon, MailIcon, PhoneIcon, ShieldIcon } from "./Icons";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  const companyLinks = [
    ...navigation.filter((n) => !n.children && n.href !== "/"),
    { label: "Request a Quote", href: "/request-a-quote" },
  ];

  return (
    <footer className="relative border-t border-gold/20 bg-coal" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="gold-rule absolute inset-x-0 top-0" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:px-8 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-4">
          <Logo />
          <p className="mt-6 max-w-sm leading-relaxed text-mist">
            Disciplined, professional protection for Florida businesses, residences, and events.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 border border-gold/30 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            <ShieldIcon className="h-4 w-4" />
            {site.licenseLabel}
          </p>
        </div>

        <nav aria-label="Services" className="lg:col-span-2">
          <h3 className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/services" className="text-mist transition-colors hover:text-white">
                All Services
              </Link>
            </li>
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-mist transition-colors hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="lg:col-span-2">
          <h3 className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">Company</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-mist transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sm:col-span-2 lg:col-span-4">
          <h3 className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">Contact</h3>
          <address className="mt-5 space-y-4 text-sm not-italic">
            <a href={site.phoneHref} className="flex items-center gap-3 text-white transition-colors hover:text-gold">
              <PhoneIcon className="h-5 w-5 shrink-0 text-gold" />
              <span>
                <span className="sr-only">Phone: </span>
                {site.phone}
              </span>
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-white transition-colors hover:text-gold">
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
          </address>
          <ButtonLink href="/contact" variant="outline" arrow className="mt-8">
            Speak With Our Team
          </ButtonLink>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p className="tracking-[0.15em] uppercase">{site.licenseLabel}</p>
        </div>
      </div>
    </footer>
  );
}
