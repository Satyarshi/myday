import React from "react";
import { MarqueeDemo } from "../MarqueeDemo";

const ProductSkills: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center text-center py-12 w-full bg-white">
      <div className="container mx-auto text-center z-10">
        {/* Title and Description */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-8 relative">
          {/* <h1 className="absolute left-0 bottom-[0.25px] text-[10rem] font-bold opacity-10 skills-heading product-skill">
            SKILLS
          </h1> */}
          <div className="relative">
            <img
              src="/Skills.svg"
              alt="skills"
              className="absolute top-[-50px]"
            />
            <img src="/Active Indicator.svg" alt="line" className="pb-1" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4 md:mb-0 md:mr-8">
              Driving Growth Through Personalized Learning Journeys
            </h1>
          </div>
          <p className="text-[#7B7E85] text-lg max-w-xl mx-auto text-justify">
            TRU 360 streamlines your skilling and development initiatives
            through continuous feedback and competency-based assessments. Our
            platform ensures personalized learning paths for each individual,
            linking feedback directly to talent management and development
            goals.
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
