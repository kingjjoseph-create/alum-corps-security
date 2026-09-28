import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: `${site.legalName} is committed to making its website accessible to everyone, including people with disabilities.`,
  alternates: { canonical: "/accessibility" },
};

const toc = [
  { id: "commitment", label: "Our commitment" },
  { id: "measures", label: "Accessibility features" },
  { id: "limitations", label: "Known limitations" },
  { id: "assistance", label: "Get assistance" },
  { id: "feedback", label: "Feedback" },
];

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Accessibility"
      breadcrumb="Accessibility"
      title={
        <>
          Accessibility <span className="text-gold-gradient italic">Statement.</span>
        </>
      }
      intro={<p>Everyone should be able to learn about our services and reach our team, regardless of ability or technology.</p>}
      toc={toc}
    >
      <h2 id="commitment">Our commitment</h2>
      <p>
        {site.legalName} is committed to providing a website that is accessible to the widest possible audience,
        including people with disabilities. We aim to conform to the{" "}
        <a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noopener noreferrer">
          Web Content Accessibility Guidelines (WCAG) 2.2<span className="sr-only"> (opens in a new tab)</span>
        </a>{" "}
        at Level AA, and we review the site as it grows.
      </p>

      <h2 id="measures">Accessibility features</h2>
      <p>This website includes the following features:</p>
      <ul>
        <li>A &ldquo;Skip to main content&rdquo; link and a consistent heading structure on every page</li>
        <li>Full keyboard navigation, including menus, with a clearly visible focus indicator</li>
        <li>High-contrast text on dark backgrounds</li>
        <li>Form fields with visible labels, clear required-field markers, and specific error messages</li>
        <li>Descriptive link text, and notice when a link opens in a new tab</li>
        <li>Animations that are reduced or removed when your device requests reduced motion</li>
        <li>Layouts that adapt to phones, tablets, desktops, and browser zoom up to 200%</li>
      </ul>

      <h2 id="limitations">Known limitations</h2>
      <p>
        Despite our efforts, some content may not yet be fully accessible. Links to third-party websites, such as state
        licensing resources, are outside our control and may not meet the same standards. If you encounter a barrier,
        please let us know so we can fix it.
      </p>

      <h2 id="assistance">Get assistance</h2>
      <p>
        If you have difficulty using any part of this website, our team will gladly help you directly — including
        taking a quote request or answering questions by phone or email.
      </p>
      <ul>
        <li>
          Phone: <a href={site.phoneHref}>{site.phone}</a>
        </li>
        <li>
          Email: <a href={`mailto:${site.email}`}>{site.email}</a>
        </li>
      </ul>

      <h2 id="feedback">Feedback</h2>
      <p>
        We welcome your feedback on the accessibility of this website. Please tell us the page address, the problem you
        encountered, and the browser or assistive technology you were using, and we will work to address it promptly.
      </p>
    </LegalPage>
  );
}
