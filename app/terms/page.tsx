import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms governing use of the ${site.legalName} website.`,
  alternates: { canonical: "/terms" },
};

const toc = [
  { id: "acceptance", label: "Acceptance of terms" },
  { id: "information", label: "Website information" },
  { id: "quotes", label: "Quotes and services" },
  { id: "licensing", label: "Licensing" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "intellectual-property", label: "Intellectual property" },
  { id: "third-party", label: "Third-party links" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Limitation of liability" },
  { id: "governing-law", label: "Governing law" },
  { id: "changes", label: "Changes to these terms" },
  { id: "contact", label: "Contact us" },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      breadcrumb="Terms of Use"
      title={
        <>
          Terms of <span className="text-gold-gradient italic">Use.</span>
        </>
      }
      intro={<p>Please read these terms carefully before using this website.</p>}
      toc={toc}
    >
      <h2 id="acceptance">Acceptance of terms</h2>
      <p>
        By accessing or using this website, operated by {site.legalName} (&ldquo;{site.name},&rdquo; &ldquo;we,&rdquo;
        &ldquo;us&rdquo;), you agree to these Terms of Use and our <Link href="/privacy">Privacy Policy</Link>. If you do
        not agree, please do not use the website.
      </p>

      <h2 id="information">Website information</h2>
      <p>
        Content on this website is provided for general informational purposes. It is not a security assessment,
        professional advice for your specific situation, or a guarantee of any outcome. Service descriptions are
        examples of what we may provide and may change without notice.
      </p>

      <h2 id="quotes">Quotes and services</h2>
      <ul>
        <li>Submitting a quote request or contact form does not create a contract or obligate either party.</li>
        <li>
          Quotes and proposals are estimates based on the information provided and are subject to a site assessment,
          availability, and final agreement.
        </li>
        <li>
          Security services are provided only under a written service agreement signed by both parties. The terms of
          that agreement control over anything on this website.
        </li>
      </ul>

      <h2 id="licensing">Licensing</h2>
      <p>
        {site.legalName} operates under {site.licenseClass} License #{site.license}, issued by the {site.licenseIssuer}.
        Security officers assigned to client sites hold the licenses required by Florida law for their assignments.
      </p>

      <h2 id="acceptable-use">Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Submit false, misleading, or someone else&rsquo;s information</li>
        <li>Attempt to gain unauthorized access to, disrupt, or damage the website or its systems</li>
        <li>Use automated tools to scrape, spam, or overload the website or its forms</li>
        <li>Use the website for any unlawful purpose</li>
      </ul>

      <h2 id="intellectual-property">Intellectual property</h2>
      <p>
        The {site.name} name, logo, and all website content, design, and graphics are owned by {site.legalName} and
        protected by applicable law. You may not copy, reproduce, or use them without our prior written permission.
      </p>

      <h2 id="third-party">Third-party links</h2>
      <p>
        This website may link to third-party websites, such as state licensing resources. We are not responsible for
        the content or practices of those websites.
      </p>

      <h2 id="disclaimers">Disclaimers</h2>
      <p>
        This website is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties of any kind,
        express or implied, to the fullest extent permitted by law. We do not warrant that the website will be
        uninterrupted, error-free, or free of harmful components.
      </p>

      <h2 id="liability">Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {site.legalName} will not be liable for any indirect, incidental,
        special, or consequential damages arising from your use of, or inability to use, this website. Liability for
        security services is governed solely by the applicable written service agreement.
      </p>

      <h2 id="governing-law">Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Florida, without regard to conflict-of-law principles.
        Any dispute relating to this website will be brought in the state or federal courts located in Florida.
      </p>

      <h2 id="changes">Changes to these terms</h2>
      <p>
        We may update these terms at any time. The &ldquo;Last updated&rdquo; date above shows the latest revision.
        Continued use of the website after changes means you accept the updated terms.
      </p>

      <h2 id="contact">Contact us</h2>
      <p>
        Questions about these terms? Email <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
        <a href={site.phoneHref}>{site.phone}</a>.
      </p>
    </LegalPage>
  );
}
