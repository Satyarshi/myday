import React from "react";
import { BlurFadeDemo } from "../BlurFadeDemo";

const InsightSection: React.FC = () => {
  return (
    <section className="relative py-12 w-full bg-white">
      <div className="container mx-auto text-center z-10">
        {/* Background overlay with large text */}
        <div className="mb-10 relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="sm:text-[8rem] sm:top-[-7rem] md:text-[10rem] absolute font-bold opacity-10 skills-heading md:top-[-8rem] product-insight">
              INSIGHT
            </h1>
            <img
              src="/Active Indicator.svg"
              alt="line"
              className="absolute top-[-20px]"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] offer-title">
            Enhance Growth with Continuous Improvement
          </h2>
        </div>
        <div className="mt-32">
          <BlurFadeDemo />
        </div>
      </div>
    </section>
  );
};

export default InsightSection;
