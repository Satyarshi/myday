import React from "react";
import ImageSection from "@/components/products/ImageSection";
import InsightSection from "@/components/products/InsightSection";
import AnimateText from "@/components/products/AnimateText";
import BenefitsSection from "@/components/products/BenefitsSection";
import ProductSkills from "@/components/products/ProductSkills";

const Product: React.FC = () => {
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

      {/* Animate Text Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <AnimateText />
      </section>

      {/* Benefits Section */}
      <section className="overflow-hidden">
        <BenefitsSection />
      </section>

      {/* Skills Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <ProductSkills />
      </section>
    </>
  );
};

export default Product;
