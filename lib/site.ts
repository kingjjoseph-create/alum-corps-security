/**
 * Central company + navigation data. Update details here and they
 * propagate to the header, footer, metadata, and structured data.
 */

export const site = {
  name: "Alum Corps Security",
  legalName: "Alum Corps Security LLC",
  tagline: "Commercial, Residential & Event Security",
  description:
    "Alum Corps Security LLC is a licensed Florida security agency providing disciplined, professional commercial, residential, and event security services.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alumcorp.com",
  email: "Security@alumcorp.com",
  phone: "561-933-4479",
  phoneHref: "tel:+15619334479",
  fax: "954-915-4229",
  license: "B3600338",
  licenseLabel: "Florida License #B3600338",
  region: "Florida",
  /** Where "Get a Quote" CTAs point. Switch to "/request-a-quote" once that page is built. */
  quoteHref: "/#request-quote",
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description: string }[];
};

export const services = [
  {
    slug: "commercial-security",
    title: "Commercial Security",
    short: "Commercial",
    href: "/commercial-security",
    summary:
      "Uniformed officers, access control, and patrol coverage that protect your people, property, and operations — during business hours and after.",
    points: ["Corporate & office buildings", "Retail & shopping centers", "Construction & industrial sites"],
  },
  {
    slug: "residential-security",
    title: "Residential Security",
    short: "Residential",
    href: "/residential-security",
    summary:
      "Discreet, courteous protection for gated communities, condominiums, and private estates — so residents feel safe coming and going.",
    points: ["Gated communities & HOAs", "Condominium towers", "Private estates"],
  },
  {
    slug: "event-security",
    title: "Event Security",
    short: "Event",
    href: "/event-security",
    summary:
      "Planned, professional coverage for gatherings of every size — from private galas to concerts, festivals, and corporate functions.",
    points: ["Crowd management & entry screening", "VIP & backstage protection", "Private & corporate events"],
  },
] as const;

/** Full capability list shown on the homepage. The first three have dedicated pages. */
export const capabilities = [
  {
    slug: "commercial-security",
    title: "Commercial Security",
    href: "/commercial-security",
    summary: "Uniformed officers and site supervision for offices, retail centers, and industrial facilities.",
  },
  {
    slug: "residential-security",
    title: "Residential Security",
    href: "/residential-security",
    summary: "Discreet, courteous protection for gated communities, condominiums, and private estates.",
  },
  {
    slug: "event-security",
    title: "Event Security",
    href: "/event-security",
    summary: "Planned coverage for galas, concerts, festivals, and corporate functions of every size.",
  },
  {
    slug: "mobile-patrol",
    title: "Mobile Patrol",
    href: "/services",
    summary: "Patrol officers conducting scheduled and randomized checks across one or many sites.",
  },
  {
    slug: "access-control",
    title: "Access Control",
    href: "/services",
    summary: "Gatehouse, lobby, and entry-point management that verifies every person and vehicle.",
  },
  {
    slug: "property-protection",
    title: "Property Protection",
    href: "/services",
    summary: "Deterrence and asset protection for vacant properties, construction sites, and facilities.",
  },
] as const;

export type CapabilitySlug = (typeof capabilities)[number]["slug"];

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({ label: s.title, href: s.href, description: s.points[0] })),
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export const leadership = [
  { name: "Jasnel Sertilus", role: "Chief Executive Officer", title: "CEO", initials: "JS" },
  { name: "Rudjeri Joseph", role: "Chief Operating Officer", title: "COO", initials: "RJ" },
  { name: "Junior Dumezil", role: "Chief Technology Officer", title: "CTO", initials: "JD" },
] as const;
