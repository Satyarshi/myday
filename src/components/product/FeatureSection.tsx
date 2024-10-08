import React from "react";
import { BlurProduct } from "../BlurProduct";

const FeatureSection: React.FC = () => {
  return (
    <section className="relative py-12 w-full bg-white">
      <div className="container mx-auto text-center z-10">
        {/* Background overlay with large text */}
        <div className="mb-10 relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* <h1 className="sm:text-[8rem] sm:top-[-7rem] md:text-[10rem] absolute font-bold opacity-10 skills-heading md:top-[-8rem] product-insight">
              FEATURES
            </h1> */}
            <img
              src="/Active Indicator.svg"
              alt="line"
              className="absolute top-[-20px]"
            />
          </div>
          <img src="/Features.svg" alt="feature" className="absolute left-1/2 transform -translate-x-1/2 top-[-50px]" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] offer-title">
            Unleashing Potential through Automation
          </h2>
        </div>
        <div className="mt-32">
          <BlurProduct />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
