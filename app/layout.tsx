import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { logoSrc } from "@/components/Logo";
import { services, site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Commercial, Residential & Event Security in Florida`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "security company Florida",
    "security guard services",
    "commercial security",
    "residential security",
    "event security",
    "licensed security agency",
    "Alum Corps Security",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [{ url: logoSrc, width: 1254, height: 1254, alt: `${site.name} logo` }],
  },
  twitter: {
    card: "summary",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [logoSrc],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#030303",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#organization`,
  name: site.legalName,
  url: site.url,
  logo: `${site.url}${logoSrc}`,
  image: `${site.url}${logoSrc}`,
  email: site.email,
  telephone: site.phoneE164,
  faxNumber: site.faxE164,
  description: site.description,
  areaServed: site.serviceAreas.map((name) => ({
    "@type": "AdministrativeArea",
    name: `${name}, ${site.region}`,
  })),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: site.phoneE164,
    email: site.email,
    areaServed: "US-FL",
    availableLanguage: "English",
  },
  ...(site.address && {
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: "US",
    },
  }),
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: `${site.licenseClass} License`,
    identifier: site.license,
    recognizedBy: { "@type": "GovernmentOrganization", name: site.licenseIssuer },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Security Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.summary, url: `${site.url}${s.href}` },
    })),
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JS runs, so content is never hidden without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only z-[100] bg-gold px-4 py-2 font-semibold text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
