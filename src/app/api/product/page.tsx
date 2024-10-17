import React from "react";
import HeroSection from "@/components/product/HeroSection";
import FeatureSection from "@/components/product/FeatureSection";
import BenefitsSection from "@/components/product/BenefitsSection";
import ProductSkills from "@/components/product/ProductSkills";
import SolutionsSection from "@/components/products/SolutionSection";
import PricingSection from "@/components/products/PricingSection";
import { TextRevealDemo } from "@/components/TextRevealDemo";
import ServicesSection from "@/components/product/ServicesSection";
import SolutionSection from "@/components/product/SolutionSection";

const Product1: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <HeroSection />
      </section>

      {/* Feature Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <FeatureSection />
      </section>

      <TextRevealDemo text={`Experience the Power of Continuous Learning for Business Success`}/>

      {/* Benefits Section */}
      <section className="overflow-hidden">
        <BenefitsSection />
      </section>

      {/* Skills Section */}
      <section className="flex justify-center items-center p-10 overflow-hidden">
        <ProductSkills />
      </section>

      {/* Solution Section */}
      <section className="flex justify-center items-center p-10 overflow-hidden mt-[-80px]">
       <SolutionSection />
      </section>

      {/* Services Section */}
      <section className="flex justify-center items-center p-10 overflow-hidden">
        <ServicesSection />
      </section>

      {/* Pricing Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <PricingSection />
      </section>
    </>
  );
};

export default Product1;
