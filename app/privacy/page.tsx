import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.legalName} collects, uses, and protects information submitted through this website.`,
  path: "/privacy",
});

const toc = [
  { id: "overview", label: "Overview" },
  { id: "information-we-collect", label: "Information we collect" },
  { id: "how-we-use", label: "How we use information" },
  { id: "sharing", label: "How we share information" },
  { id: "cookies", label: "Cookies and analytics" },
  { id: "retention", label: "Data retention" },
  { id: "security", label: "Security" },
  { id: "your-choices", label: "Your choices" },
  { id: "children", label: "Children’s privacy" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact us" },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      breadcrumb="Privacy Policy"
      title={
        <>
          Privacy <span className="text-gold-gradient italic">Policy.</span>
        </>
      }
      intro={<p>We respect your privacy and collect only the information we need to respond to you and provide our services.</p>}
      toc={toc}
    >
      <h2 id="overview">Overview</h2>
      <p>
        This Privacy Policy explains how {site.legalName} (&ldquo;{site.name},&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
        handles information collected through this website. It does not cover information collected offline or under a
        separate service agreement, which is governed by the terms of that agreement.
      </p>

      <h2 id="information-we-collect">Information we collect</h2>
      <h3>Information you provide</h3>
      <p>When you submit a quote request or contact form, we collect the information you choose to share, such as:</p>
      <ul>
        <li>Your name, company or organization, email address, and phone number</li>
        <li>The location where services are needed</li>
        <li>
          Details about the coverage you are requesting — for example, security type, number of officers, schedule,
          event attendance, and a description of your needs
        </li>
      </ul>
      <p>
        <strong>Employment applications.</strong> We do not currently accept job applications, resumes, or license
        information through this website. If you contact us about employment, we use what you send only to evaluate
        and respond to your inquiry.
      </p>
      <h3>Information collected automatically</h3>
      <p>
        Like most websites, our hosting provider automatically records basic technical information when you visit —
        such as your IP address, browser type, and the pages you request — to operate the site and protect it against
        misuse.
      </p>

      <h2 id="how-we-use">How we use information</h2>
      <ul>
        <li>To respond to your inquiry and prepare security proposals and quotes</li>
        <li>To provide, schedule, and manage security services you request</li>
        <li>To communicate with you about your request or our services</li>
        <li>To maintain the security and proper operation of this website</li>
        <li>To comply with legal and regulatory obligations</li>
      </ul>

      <h2 id="sharing">How we share information</h2>
      <p>
        <strong>We do not sell your personal information</strong>, and we do not share it with third parties for their
        own marketing. We share information only:
      </p>
      <ul>
        <li>
          With service providers that help us operate — such as website hosting and email delivery — who may use it
          only to perform services for us
        </li>
        <li>When required by law, subpoena, or other legal process, or to protect the rights and safety of others</li>
        <li>In connection with a merger, acquisition, or sale of business assets, subject to this policy</li>
      </ul>

      <h2 id="cookies">Cookies and analytics</h2>
      <p>
        This website does not use advertising cookies or third-party tracking. If we add analytics tools in the future,
        we will update this policy to describe them.
      </p>

      <h2 id="retention">Data retention</h2>
      <p>
        We keep inquiry information only as long as needed to respond, provide services, maintain business records,
        and meet legal obligations, after which it is deleted or anonymized.
      </p>

      <h2 id="security">Security</h2>
      <p>
        This website is served over encrypted HTTPS connections, and access to submitted information is limited to
        personnel who need it. No method of transmission or storage is completely secure, so please do not send highly
        sensitive information (such as Social Security numbers) through website forms.
      </p>

      <h2 id="your-choices">Your choices</h2>
      <p>
        You may ask us to access, correct, or delete the personal information you have submitted, or to stop
        contacting you, by emailing <a href={`mailto:${site.email}`}>{site.email}</a>. We will respond within a
        reasonable time and may need to verify your identity.
      </p>

      <h2 id="children">Children&rsquo;s privacy</h2>
      <p>
        This website is intended for businesses and adults. We do not knowingly collect personal information from
        children under 13.
      </p>

      <h2 id="changes">Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &ldquo;Last updated&rdquo; date above shows when it was last
        revised. Related terms are described in our <Link href="/terms">Terms of Use</Link>.
      </p>

      <h2 id="contact">Contact us</h2>
      <p>
        {site.legalName}
        <br />
        Email: <a href={`mailto:${site.email}`}>{site.email}</a>
        <br />
        Phone: <a href={site.phoneHref}>{site.phone}</a>
        <br />
        Fax: {site.fax}
      </p>
    </LegalPage>
  );
}
