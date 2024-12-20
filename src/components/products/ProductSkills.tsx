import React from "react";
import { MarqueeDemo } from "../MarqueeDemo";

interface ProductSkillsProps {
  title: string;
  description: string;
}

const ProductSkills: React.FC<ProductSkillsProps> = ({ title, description }) => {
  return (
    <section className="relative flex flex-col items-center text-center py-12 w-full bg-white">
      <div className="container mx-auto text-center z-10">
        {/* Title and Description */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-8 relative">
          <div className="relative">
            <img src="/Skills.svg" alt="skills" className="absolute top-[-50px]" />
            <img src="/Active Indicator.svg" alt="line" className="pb-1" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4 md:mb-0 md:mr-8">
              {title}
            </h1>
          </div>
          <p className="text-[#7B7E85] text-lg max-w-xl mx-auto text-justify">
            {description}
          </p>
        </div>
        <hr className="border border-[#DEDEDE]" />
        {/* Marquee to be added below */}
        <MarqueeDemo />
      </div>
    </section>
  );
};

export default ProductSkills;
