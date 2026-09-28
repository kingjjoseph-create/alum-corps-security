import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Industries } from "@/components/home/Industries";
import { Leadership } from "@/components/home/Leadership";
import { QuoteSection } from "@/components/home/QuoteSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChoose } from "@/components/home/WhyChoose";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyChoose />
      <Industries />
      <Leadership />
      <QuoteSection />
    </>
  );
}
