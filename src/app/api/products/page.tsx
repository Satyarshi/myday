import React from "react";
import BenefitsSection from "@/components/products/BenefitsSection";
import ProductSkills from "@/components/products/ProductSkills";
import PricingSection from "@/components/products/PricingSection";
import { TextRevealDemo } from "@/components/TextRevealDemo";
import ServicesSection from "@/components/products/ServicesSection";
import SolutionSection from "@/components/products/SolutionSection";
import ImageSection from "@/components/products/ImageSection";
import InsightSection from "@/components/products/InsightSection";
import { productsData } from "@/components/Data";
const Product1: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <ImageSection
          shinyText={productsData.heroSection.shinyText}
          heading={productsData.heroSection.heading}
          subheading={productsData.heroSection.subheading}
          buttonText={productsData.heroSection.buttonText}
        />
      </section>

      {/* Feature Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <InsightSection />
      </section>

      <TextRevealDemo
        text={`Experience the Power of Continuous Learning for Business Success`}
      />

      {/* Benefits Section */}
      <section className="overflow-hidden">
        <BenefitsSection
          title={productsData.benefitsSection.title}
          descriptionTitle={productsData.benefitsSection.descriptionTitle}
          descriptionText={productsData.benefitsSection.descriptionText}
          listItems={productsData.benefitsSection.listItems}
        />
      </section>

      {/* Skills Section */}
      <section className="flex justify-center items-center p-10 overflow-hidden">
        <ProductSkills
          title={productsData.skillsSection.title}
          description={productsData.skillsSection.description}
        />
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
