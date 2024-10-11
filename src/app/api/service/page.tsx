import React from "react";
import HeroSection from "@/components/service/HeroSection";
import ClientSection from "@/components/service/ClientSection";
import InsightSection from "@/components/service/InsightSection";
import ServicesSection from "@/components/service/ServicesSection";
import SkillsSection from "@/components/service/SkillsSection";
import PricingSection from "@/components/service/PricingSection";
import { TextRevealDemo } from "@/components/TextRevealDemo";

const Service: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <HeroSection />
      </section>

      {/* Client Section */}
      <section className="overflow-hidden">
        <ClientSection />
      </section>

      {/* Service Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <InsightSection />
      </section>

      <TextRevealDemo
        text={`Inspire Growth, Foster Innovation, Empower Success`}
      />

      {/* Solution Text Section */}
      <section className="flex justify-center items-center p-10 overflow-hidden">
        <ServicesSection />
      </section>

      {/* Skills Section */}
      <section className="flex justify-center items-center p-10 overflow-hidden">
        <SkillsSection />
      </section>

      {/* Pricing Section */}
      <section className="flex justify-center items-center p-10 overflow-hidden">
        <PricingSection />
      </section>
    </>
  );
};

export default Service;
