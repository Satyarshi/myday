import React from "react";

const StatsSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center py-12 w-full">
      <div className="container mx-auto text-center relative z-10">
        {/* Statistics */}
        <div className="flex flex-wrap items-center justify-between gap-16 lg:gap-8 md:gap-8">
          {/* First Stat */}
          <div className="w-full md:w-auto">
            <h2 className="text-6xl font-bold text-[#9C27B0]">+95%</h2>
            <div className="flex gap-4 justify-center md:justify-start">
              <img src="/android-share.svg" alt="learning" />
              <p className="text-[#0000008A] text-2xl">Learning Effectiveness</p>
            </div>
          </div>

          <div className="hidden md:block h-24 w-[2px] bg-[#E1BEE7]" />

          {/* Second Stat */}
          <div className="w-full md:w-auto">
            <h2 className="text-6xl font-bold text-[#9C27B0]">+80M</h2>
            <div className="flex gap-4 justify-center md:justify-start">
              <img src="/person-stalker.svg" alt="User" />
              <p className="text-[#0000008A] text-2xl">Active Users</p>
            </div>
          </div>

          <div className="hidden md:block h-24 w-[2px] bg-[#E1BEE7]" />

          {/* Third Stat */}
          <div className="w-full md:w-auto">
            <h2 className="text-6xl font-bold text-[#9C27B0]">+1.5K</h2>
            <div className="flex gap-4 justify-center md:justify-start">
              <img src="/social-buffer.svg" alt="organization" />
              <p className="text-[#0000008A] text-2xl">Organizations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
