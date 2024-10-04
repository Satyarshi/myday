import React from "react";

const SkillsSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center text-center py-12 w-full bg-white">
      <div className="container mx-auto text-center z-10">
        {/* Title and Description */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-8 relative">
          <h1 className="absolute left-0 bottom-[0.25px] text-[10rem] font-bold opacity-10 skills-heading skill">
            SKILLS
          </h1>
          <div>
            <img src="/Active Indicator.svg" alt="line" className="pb-1" />
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
        {/* Skills Buttons with Arrows */}
        <div className="flex items-center justify-center gap-4 mt-6">
          {/* Left Arrow */}
          <button className="invisible md:visible text-[#9C27B0] bg-transparent border-2 border-[#9C27B0] rounded-full p-2 hover:bg-[#9C27B0] hover:text-white">
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

          {/* Skill Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <button className="px-4 py-2 text-white rounded-lg skills font-semibold">
              Time Management
            </button>
            <button className="px-4 py-2 bg-white border border-[#9C27B0] text-[#111827] rounded-lg font-semibold">
              Problem Solving
            </button>
            <button className="px-4 py-2 bg-white border border-[#9C27B0] text-[#111827] rounded-lg font-semibold">
              Communication
            </button>
            <button className="px-4 py-2 bg-white border border-[#9C27B0] text-[#111827] rounded-lg font-semibold">
              Team Management
            </button>
          </div>

          {/* Right Arrow */}
          <button className="invisible md:visible text-[#9C27B0] bg-transparent border-2 border-[#9C27B0] rounded-full p-2 hover:bg-[#9C27B0] hover:text-white">
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
