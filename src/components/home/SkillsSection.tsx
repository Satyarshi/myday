"use client";
import React, { useRef } from "react";

const SkillsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll handler functions for arrows
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col items-center text-center py-12 w-full bg-white">
      <div className="container mx-auto text-center z-10">
        {/* Title and Description */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-8 relative">
          <div className="relative">
            <img
              src="/Skills.svg"
              alt="skills"
              className="absolute top-[-50px]"
            />
            <img src="/Active Indicator.svg" alt="line" className="absolute top-[-10px]" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4 md:mb-0 md:mr-8">
              Building Essential Skills for Growth and Success
            </h1>
          </div>
          <p className="text-[#7B7E85] text-lg max-w-xl mx-auto text-justify">
            We focus on enhancing core competencies that empower your team to
            achieve higher productivity, foster collaboration, and drive
            organizational success. Our approach nurtures key skills needed to
            thrive in today’s dynamic work environment.
          </p>
        </div>
        <hr className="border border-[#DEDEDE]" />
        {/* Skills Carousel */}
        <div className="flex items-center justify-center gap-4 mt-6 max-w-5xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="text-[#9C27B0] bg-transparent border-2 border-[#9C27B0] rounded-full p-2 hover:bg-[#9C27B0] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Skill Buttons Carousel */}
          <div
            ref={scrollRef}
            className="flex overflow-x-scroll scrollbar-hide no-scrollbar gap-4 snap-x snap-mandatory items-center justify-start scroll-smooth"
          >
            <button className="px-4 py-2 bg-white border border-[#9C27B0] text-[#111827] rounded-lg font-semibold snap-start shrink-0 skills">
              Time Managements
            </button>
            <button className="px-4 py-2 bg-white border border-[#9C27B0] text-[#111827] rounded-lg font-semibold snap-start shrink-0 skills">
              Problem Solving
            </button>
            <button className="px-4 py-2 bg-white border border-[#9C27B0] text-[#111827] rounded-lg font-semibold snap-start shrink-0 skills">
              Communication
            </button>
            <button className="px-4 py-2 border border-[#9C27B0] text-[#111827] rounded-lg font-semibold snap-start shrink-0 skills">
              Team Managements
            </button>
            
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="text-[#9C27B0] bg-transparent border-2 border-[#9C27B0] rounded-full p-2 hover:bg-[#9C27B0] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
