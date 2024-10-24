import React from "react";
import BenefitsSection from "@/components/products/BenefitsSection";
import ProductSkills from "@/components/products/ProductSkills";
import PricingSection from "@/components/products/PricingSection";
import { TextRevealDemo } from "@/components/TextRevealDemo";
import ServicesSection from "@/components/products/ServicesSection";
import SolutionSection from "@/components/products/SolutionSection";
import ImageSection from "@/components/products/ImageSection";
import InsightSection from "@/components/products/InsightSection";

const Product1: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <ImageSection
          shinyText="What’s new? Instantly issue virtual card’s"
          heading="The Future of Skills Development is Here"
          subheading="SPARCLE is an AI-powered skills acceleration tool designed to simplify and automate your assessment, development, and talent mapping processes. Drive continuous learning, improve performance, and unlock growth across your organization with powerful, easy-to-use functionalities."
          buttonText="Accelerate Skills Today"
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
          title="Empowering Learners, Enhancing Business Impact"
          descriptionTitle="Key features that drive skill transformation"
          descriptionText="Sparkle leverages data-driven insights and personalized learning
                pathways to boost employee engagement, performance, and
                retention. Unlock continuous growth and improvement with a focus
                on real-world application."
          listItems={[
            "Customized Learning Paths: Tailored to individual needs for optimal skill development.",
            "Real-Time Feedback: Helps learners immediately improve their performance.",
            "Data-Driven Insights: Measure progress and skill gaps for better decision-making.",
            "Enhanced Engagement: Keeps learners motivated with interactive and adaptive learning modules.",
            "Seamless Integration: Works smoothly across multiple platforms and devices for convenient learning.",
          ]}
        />
      </section>

      {/* Skills Section */}
      <section className="flex justify-center items-center p-10 overflow-hidden">
        <ProductSkills
          title="Personalized Learning Powered by AI Insights"
          description="Sparkle transforms the learning experience with AI-based content delivery and adaptive assessments. By continuously evaluating performance and engagement, Sparkle provides actionable insights to fine-tune the learning journey, ensuring that each individual reaches their full potential."
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
