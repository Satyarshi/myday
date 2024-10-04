import React from "react";

const WhoSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center text-center md:text-left py-12 w-full bg-white relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 px-4">
        {/* Left Side - Text Content */}
        <div className="max-w-2xl">
          {/* Heading */}
          <div className="relative mb-6">
            <h1 className="absolute bottom-[60px] right-[355px] text-[8rem] font-bold opacity-10 skills-heading who">
              WHO
            </h1>
            <img src="/Active Indicator.svg" alt="line" className="pb-1" />
            <h1 className="relative text-4xl md:text-5xl font-bold text-[#111827] mb-4">
              Empowering Ambitious Professionals to Achieve Their Potential
            </h1>
          </div>

          {/* Description */}
          <p className="text-[#7B7E85] text-lg mb-6">
            Our platform is designed for individuals and organizations committed
            to continuous improvement, aiming to enhance learning efficiency and
            drive impactful results.
          </p>

          {/* Button-Like Labels */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <button className="px-4 py-2 bg-white border border-[#9C27B0] text-[#9C27B0] rounded-lg font-semibold">
              <div className="flex items-center gap-2">
                <img src="/check.svg" alt="check" className="w-5" />
                <p>HR Professionals</p>
              </div>
            </button>
            <button className="px-4 py-2 bg-white border border-[#9C27B0] text-[#9C27B0] rounded-lg font-semibold">
              <div className="flex items-center gap-2">
                <img src="/check.svg" alt="check" className="w-5" />
                <p>Managers</p>
              </div>
            </button>
            <button className="px-4 py-2 bg-white border border-[#9C27B0] text-[#9C27B0] rounded-lg font-semibold">
              <div className="flex items-center gap-2">
                <img src="/check.svg" alt="check" className="w-5" />
                <p>Corporate Trainers</p>
              </div>
            </button>
            <button className="px-4 py-2 bg-white border border-[#9C27B0] text-[#9C27B0] rounded-lg font-semibold">
              <div className="flex items-center gap-2">
                <img src="/check.svg" alt="check" className="w-5" />
                <p>Professional Coaches</p>
              </div>
            </button>
            <button className="px-4 py-2 bg-white border border-[#9C27B0] text-[#9C27B0] rounded-lg font-semibold">
              <div className="flex items-center gap-2">
                <img src="/check.svg" alt="check" className="w-5" />
                <p>Enterprises & SMBs Seeking Skill Development</p>
              </div>
            </button>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="flex justify-center mt-8 md:mt-0">
          <img
            src="/about-1.png.png"
            alt="Growth Illustration"
            className="w-[300px] md:w-[400px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoSection;
