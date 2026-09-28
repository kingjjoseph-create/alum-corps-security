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
  home/              Hero, ServicesSection, WhyChoose, Industries, Leadership,
                     QuoteSection + QuoteForm
app/actions/quote.ts Server action that validates and delivers quote requests
lib/site.ts          Company details, navigation, services, leadership — edit here
public/images/alum-corps-logo.jpg  Official Alum Corps logo (use as-is; do not alter)
```

## Customizing

- **Company info** (phone, email, fax, license, leadership): `lib/site.ts`.
- **Logo**: `public/images/alum-corps-logo.jpg` is the official logo, used unmodified. `app/icon.png` and `app/apple-icon.png` are resized copies for browser tabs and home-screen icons. The accent gold in `app/globals.css` (`--color-gold: #dead2f`) is matched to the logo.
- **Domain**: set `NEXT_PUBLIC_SITE_URL` (defaults to `https://www.alumcorp.com`) for canonical URLs, sitemap, and structured data.
- **New pages**: add the route to `app/sitemap.ts` when it is built.

## Quote form delivery

The homepage quote form emails each request through [Resend](https://resend.com). Set these environment variables in your host (e.g. Vercel → Settings → Environment Variables):

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | yes | API key from Resend |
| `QUOTE_TO_EMAIL` | no | Recipient (defaults to Security@alumcorp.com) |
| `QUOTE_FROM_EMAIL` | no | Sender, e.g. `Alum Corps Website <quotes@alumcorp.com>` (requires a verified domain in Resend) |

Without a key, requests are printed to the terminal during `npm run dev`, and in production visitors are shown the phone number and email instead — requests are never silently lost.
