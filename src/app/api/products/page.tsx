import React from "react";
import BenefitsSection from "@/components/products/BenefitsSection";
import ProductSkills from "@/components/products/ProductSkills";
import PricingSection from "@/components/products/PricingSection";
import { TextRevealDemo } from "@/components/TextRevealDemo";
import ServicesSection from "@/components/products/ServicesSection";
import SolutionSection from "@/components/products/SolutionSection";
import ImageSection from "@/components/products/ImageSection";
import InsightSection from "@/components/products/InsightSection";
import { productData } from "@/components/products/productData";
const Product1: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <ImageSection
          shinyText={productData.heroSection.shinyText}
          heading={productData.heroSection.heading}
          subheading={productData.heroSection.subheading}
          buttonText={productData.heroSection.buttonText}
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
          title={productData.benefitsSection.title}
          descriptionTitle={productData.benefitsSection.descriptionTitle}
          descriptionText={productData.benefitsSection.descriptionText}
          listItems={productData.benefitsSection.listItems}
        />
      </section>

      {/* Skills Section */}
      <section className="flex justify-center items-center p-10 overflow-hidden">
        <ProductSkills
          title={productData.skillsSection.title}
          description={productData.skillsSection.description}
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
