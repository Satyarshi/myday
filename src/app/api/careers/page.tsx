import React from "react";
import HeroSection from "@/components/careers/HeroSection";
import OfferSection from "@/components/careers/OfferSection";
import LookingSection from "@/components/careers/LookingSection";

const Careers: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <HeroSection />
      </section>

      {/* Offer Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <OfferSection />
      </section>

      {/* Looking Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <LookingSection />
      </section>
    </>
  );
};

export default Careers;
