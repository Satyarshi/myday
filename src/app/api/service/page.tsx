import React from "react";
import ClientSection from "@/components/service/ClientSection";
import InsightSection from "@/components/products/InsightSection";
import ServicesSection from "@/components/service/ServicesSection";
import PricingSection from "@/components/service/PricingSection";
import { TextRevealDemo } from "@/components/TextRevealDemo";
import SolutionSection from "@/components/products/SolutionSection";
import HeroSection from "@/components/HeroSection";

const Service: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <div className="flex flex-col items-center text-center py-20">
          <HeroSection
            shinyText="What’s new? Instantly issue virtual card’s"
            heading="Empowering Talent Development with Tailored Solutions"
            subheading="Unlock the full potential of your workforce with MyDayOne’s customized learning and development services. We offer comprehensive solutions to meet every stage of your talent journey—from onboarding and upskilling to performance tracking and continuous growth."
            buttonText="Explore Our Services"
          />
        </div>
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

      {/* Services Section */}
      <section className="flex justify-center items-center p-10 overflow-hidden mt-[-80px]">
        <SolutionSection />
      </section>

      {/* Pricing Section */}
      <section className="flex justify-center items-center p-10 overflow-hidden">
        <PricingSection />
      </section>
    </>
  );
};

export default Service;
