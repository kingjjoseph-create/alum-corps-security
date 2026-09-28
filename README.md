# Alum Corps Security — Website

Marketing website for **Alum Corps Security LLC** (Florida License #B3600338), built with Next.js (App Router), React, TypeScript, and Tailwind CSS v4.

## Preview locally

Requires Node.js 20.9+.

```bash
npm install
npm run dev          # http://localhost:3000 (hot reload)
```

Production build:

```bash
npm run build
npm start            # serves the optimized build on http://localhost:3000
```

## Project structure

```
app/
  layout.tsx         Root layout: fonts, SEO metadata, JSON-LD, header/footer
  page.tsx           Homepage (composes the sections below)
  globals.css        Tailwind theme (black/gold palette, fonts, animations)
  not-found.tsx      Branded 404 / "coming soon" page
  robots.ts, sitemap.ts, icon.png, apple-icon.png
components/
  Header.tsx         Sticky nav, services dropdown, accessible mobile menu
  Footer.tsx         Contact info, license number, site links
  Logo.tsx, Button.tsx, Reveal.tsx (scroll animations), SectionHeading.tsx, Icons.tsx
  home/              Hero, TrustBar, ServicesSection, WhyChoose, Industries,
                     Process, Leadership, CallToAction
lib/site.ts          Company details, navigation, services, leadership — edit here
public/images/alum-corps-logo.jpg  Official Alum Corps logo (use as-is; do not alter)
```

## Customizing

- **Company info** (phone, email, fax, license, leadership): `lib/site.ts`.
- **Logo**: `public/images/alum-corps-logo.jpg` is the official logo, used unmodified. `app/icon.png` and `app/apple-icon.png` are resized copies for browser tabs and home-screen icons. The accent gold in `app/globals.css` (`--color-gold: #dead2f`) is matched to the logo.
- **Domain**: set `NEXT_PUBLIC_SITE_URL` (defaults to `https://www.alumcorp.com`) for canonical URLs, sitemap, and structured data.
- **New pages**: add the route to `app/sitemap.ts` when it is built.
