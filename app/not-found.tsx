import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = {
  title: "Page Coming Soon",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-32 pb-20">
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <p className="eyebrow justify-center">Under Construction</p>
        <h1 className="mt-6 font-display text-5xl font-semibold sm:text-6xl">
          This page is <span className="text-gold-gradient italic">on its way.</span>
        </h1>
        <p className="mt-6 text-lg text-mist">
          The page you requested isn&rsquo;t available yet. In the meantime, our team is ready to help.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="/" variant="outline">
            Back to Home
          </ButtonLink>
          <ButtonLink href="/request-a-quote" arrow>
            Request Security Coverage
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
