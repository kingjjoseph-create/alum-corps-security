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
  robots.ts, sitemap.ts, icon.svg
components/
  Header.tsx         Sticky nav, services dropdown, accessible mobile menu
  Footer.tsx         Contact info, license number, site links
  Logo.tsx, Button.tsx, Reveal.tsx (scroll animations), SectionHeading.tsx, Icons.tsx
  home/              Hero, TrustBar, ServicesSection, WhyChoose, Industries,
                     Process, Leadership, CallToAction
lib/site.ts          Company details, navigation, services, leadership — edit here
public/logo.svg      Placeholder logo — replace with the official Alum Corps logo
```

## Customizing

- **Company info** (phone, email, fax, license, leadership): `lib/site.ts`.
- **Logo**: replace `public/logo.svg` (and `app/icon.svg` for the favicon). To use a PNG, drop it in `public/` and update the `src` in `components/Logo.tsx` and `components/home/Hero.tsx`.
- **Domain**: set `NEXT_PUBLIC_SITE_URL` (defaults to `https://www.alumcorp.com`) for canonical URLs, sitemap, and structured data.
- **New pages**: add the route to `app/sitemap.ts` when it is built.
