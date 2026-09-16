import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HopeSection from "@/components/HopeSection";
import WhoWeHelp from "@/components/WhoWeHelp";
import QuoteBanner from "@/components/QuoteBanner";
import ExpertiseSection from "@/components/ExpertiseSection";
import HowWeWork from "@/components/HowWeWork";
import SpecialtiesGrid from "@/components/SpecialtiesGrid";
import FindTherapistCta from "@/components/FindTherapistCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F6F4EE] text-[#2B2B2B]">
      {/* Header & Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Section 2: Holding onto Hope */}
      <HopeSection />

      {/* Section 3: Who We Help Cards */}
      <WhoWeHelp />

      {/* Section 4: Full Bleed Ocean Quote Banner */}
      <QuoteBanner />

      {/* Section 5: Editorial Areas of Expertise */}
      <ExpertiseSection />

      {/* Section 6: How We Work (Warm Sand) */}
      <HowWeWork />

      {/* Section 7 & 8: Honoring Where You've Been + Specialties Grid */}
      <SpecialtiesGrid />

      {/* Section 9: Find a Therapist CTA */}
      <FindTherapistCta />

      {/* Section 10 & 11: Comprehensive Footer */}
      <Footer />
    </main>
  );
}
