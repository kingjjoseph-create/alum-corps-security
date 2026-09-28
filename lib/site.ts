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
  /** Display format; standard (xxx) xxx-xxxx reads as an established business line. */
  phone: "(561) 933-4479",
  phoneHref: "tel:+15619334479",
  phoneE164: "+1-561-933-4479",
  fax: "(954) 915-4229",
  faxE164: "+1-954-915-4229",
  license: "B3600338",
  licenseLabel: "Florida License #B3600338",
  licenseClass: "Class \u201CB\u201D Security Agency",
  licenseIssuer: "Florida Department of Agriculture and Consumer Services, Division of Licensing",
  /** Where visitors can confirm the license. Verify this link opens correctly before launch. */
  licenseVerifyUrl: "https://www.fdacs.gov/Divisions-Offices/Licensing",
  region: "Florida",
  /** Primary service area, shown in the footer, Contact, About, and structured data. */
  serviceAreas: ["Palm Beach County", "Broward County", "Miami-Dade County"],
  serviceAreaNote: "Additional Florida locations available on request.",
  serviceRegionLabel: "South Florida",
  /** Optional public business address — leave empty to hide it everywhere. */
  address: null as null | { street: string; city: string; region: string; postalCode: string },
  /** Shown on the Privacy Policy, Terms of Use, and Accessibility pages. */
  legalLastUpdated: "September 28, 2026",
  /** Where site-wide "Get a Quote" CTAs point. */
  quoteHref: "/request-a-quote",
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
    href: "/services#mobile-patrol",
    summary: "Patrol officers conducting scheduled and randomized checks across one or many sites.",
  },
  {
    slug: "access-control",
    title: "Access Control",
    href: "/services#access-control",
    summary: "Gatehouse, lobby, and entry-point management that verifies every person and vehicle.",
  },
  {
    slug: "property-protection",
    title: "Property Protection",
    href: "/services#property-protection",
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
  {
    name: "Jasnel Sertilus",
    role: "Chief Executive Officer",
    title: "CEO",
    initials: "JS",
    focus: "Leads company strategy, standards, and client relationships.",
  },
  {
    name: "Rudjeri Joseph",
    role: "Chief Operating Officer",
    title: "COO",
    initials: "RJ",
    focus: "Oversees field operations, scheduling, and officer supervision.",
  },
  {
    name: "Junior Dumezil",
    role: "Chief Technology Officer",
    title: "CTO",
    initials: "JD",
    focus: "Directs technology, reporting systems, and operational tools.",
  },
] as const;
