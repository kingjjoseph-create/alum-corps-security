import type { Metadata } from "next";
import { CallToAction } from "@/components/home/CallToAction";
import { Hero } from "@/components/home/Hero";
import { Industries } from "@/components/home/Industries";
import { Leadership } from "@/components/home/Leadership";
import { Process } from "@/components/home/Process";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyChoose } from "@/components/home/WhyChoose";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <WhyChoose />
      <Industries />
      <Process />
      <Leadership />
      <CallToAction />
    </>
  );
}
