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
  layout.tsx            Root layout: fonts, site-wide metadata, organization JSON-LD, header/footer
  page.tsx              Homepage; one folder per page (services/, about/, contact/, careers/, …)
  globals.css           Design tokens (colors, gold shadows), shared utilities (.label-caps, .eyebrow), animations
  opengraph-image.tsx   Generated 1200×630 social share image used by every page
  not-found.tsx, robots.ts, sitemap.ts, icon.png, apple-icon.png
  actions/              Server actions: quote.ts, coverage.ts, contact.ts
components/
  Header.tsx, Footer.tsx, Logo.tsx, Button.tsx, Icons.tsx
  PageHero.tsx          Interior-page hero (also emits breadcrumb structured data)
  SectionHeading.tsx, Reveal.tsx + RevealObserver.tsx (one shared scroll-animation observer)
  Decor.tsx             CornerAccents, HoverRule, FormPanel
  FormField.tsx         Form fields, choice buttons, Honeypot, FormSuccess, focus-first-error hook
  QuoteForm, CoverageForm, ContactForm, CareersForm, QuoteSection, Leadership, Trust, LegalPage, JsonLd
  home/                 Homepage-only sections (Hero, ServicesSection, WhyChoose, Industries)
lib/
  site.ts               Company details, navigation, services, leadership — edit here
  commercial.ts, residential.ts, event.ts, services-detail.ts, careers.ts   Page content (with icons)
  seo.ts                pageMetadata() and breadcrumb helpers — use for every new page
  form-validation.ts    Shared server-side validation
  deliver-lead.ts       The one place form submissions are sent (email today; swap for CRM)
public/images/alum-corps-logo.jpg  Official Alum Corps logo (use as-is; do not alter)
```

### Conventions

- New pages: `export const metadata = pageMetadata({ title, description, path })`, and use `PageHero` (breadcrumb structured data comes with it). Add the route to `app/sitemap.ts`.
- Colors, shadows, and type come from the tokens in `app/globals.css` — avoid raw hex/rgb values in class names.
- Structured data goes through `<JsonLd data={…} />` (it escapes content safely).

## Customizing

- **Company info** (phone, email, fax, license and verification link, service areas, optional business address, leadership, legal "last updated" date): `lib/site.ts`. The address is hidden everywhere until you fill it in.
- **Legal pages** (`/privacy`, `/terms`, `/accessibility`) are written to match what the site actually does. Have them reviewed by your attorney before launch, and update them if you add analytics, chat, or new forms.
- **Logo**: `public/images/alum-corps-logo.jpg` is the official logo, used unmodified. `app/icon.png` and `app/apple-icon.png` are resized copies for browser tabs and home-screen icons. The accent gold in `app/globals.css` (`--color-gold: #dead2f`) is matched to the logo.
- **Domain**: set `NEXT_PUBLIC_SITE_URL` (defaults to `https://www.alumcorp.com`) for canonical URLs, sitemap, and structured data.
- **New pages**: add the route to `app/sitemap.ts` when it is built.

## Form delivery

Both forms — the short quote form (homepage and service pages) and the full **Request Security Coverage** form at `/request-a-quote` — go through `lib/deliver-lead.ts`. To send leads to a CRM or another backend, change only that file. Today it emails each request through [Resend](https://resend.com). Set these environment variables in your host (e.g. Vercel → Settings → Environment Variables):

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | yes | API key from Resend |
| `QUOTE_TO_EMAIL` | no | Recipient (defaults to Security@alumcorp.com) |
| `QUOTE_FROM_EMAIL` | no | Sender, e.g. `Alum Corps Website <quotes@alumcorp.com>` (requires a verified domain in Resend) |

Without a key, requests are printed to the terminal during `npm run dev`, and in production visitors are shown the phone number and email instead — requests are never silently lost.

## Enabling online applications (Careers)

The Careers application form (`/careers`) is **design-only by default**. It collects license numbers and resumes, so it must not go live until a secure backend is in place.

Current safeguards:

- `applicationsEnabled = false` in `lib/careers.ts`.
- There is **no server endpoint** for applications, and the form always blocks native submission (so field values can never end up in the URL).
- In production the form renders **locked** (all fields disabled) with an "opening soon" notice. During `npm run dev` it is interactive for design review, but still sends nothing.

Before setting `applicationsEnabled = true`, connect a secure destination. The simplest option is an applicant tracking system (e.g. BambooHR, Workable, JazzHR) via its hosted form or API. If you build your own, you need at minimum:

1. A server action or route that validates every field and file (type, size) server-side.
2. Private, encrypted file storage for resumes (never a public bucket), with access limited to hiring staff.
3. Delivery that doesn't put resumes or license numbers in plain email.
4. A data-retention policy and a privacy notice on the form.
