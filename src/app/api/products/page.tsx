import React from "react";
import ImageSection from "@/components/products/ImageSection";
import InsightSection from "@/components/products/InsightSection";
import BenefitsSection from "@/components/products/BenefitsSection";
import ProductSkills from "@/components/products/ProductSkills";
import SolutionsSection from "@/components/products/SolutionSection";
import PricingSection from "@/components/products/PricingSection";
import { TextRevealDemo } from "@/components/TextRevealDemo";

const Products: React.FC = () => {
  return (
    <>
      {/* Image Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <ImageSection />
      </section>

      {/* Insight Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <InsightSection />
      </section>

      <TextRevealDemo text={`Empower Your Team with Data-Driven 360-Degree Feedback`}/>

      {/* Benefits Section */}
      <section className="overflow-hidden">
        <BenefitsSection />
      </section>

      {/* Skills Section */}
      <section className="flex justify-center items-center p-10 overflow-hidden">
        <ProductSkills />
      </section>

      {/* Skills Section */}
      <section className="flex justify-center items-center p-10 overflow-hidden">
        <SolutionsSection />
      </section>

      {/* Pricing Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <PricingSection />
      </section>
    </>
  );
};

export default Products;
