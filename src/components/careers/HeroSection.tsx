import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center py-20">
      {/* Headline Section */}
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
        Senior UX Designer
      </h1>

      {/* Subheading Section */}
      <p className="text-lg text-gray-500 mb-8 max-w-3xl">
        tru360 by myDayOne is a powerful digital platform designed to simplify
        and enhance your 360-degree feedback process...
      </p>

      <div className="flex justify-center gap-8 mt-10 flex-wrap text-justify">
        <div className="w-[300px] h-[200px] p-4 rounded-3xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex flex-col justify-between hover:bg-[#7030A0] hover:text-white">
          <h1 className="text-3xl font-semibold mb-2 w-[80%]">$100,000</h1>
          <p>Monthly fixed rate</p>
        </div>
        <div className="w-[300px] h-[200px] p-4 rounded-3xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex flex-col justify-between hover:bg-[#7030A0] hover:text-white">
          <h1 className="text-3xl font-semibold mb-2 w-[80%]">Remote</h1>
          <p>Work from anywhere</p>
        </div>
        <div className="w-[300px] h-[200px] p-4 rounded-3xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex flex-col justify-between hover:bg-[#7030A0] hover:text-white">
          <h1 className="text-3xl font-semibold mb-2 w-[80%]">Design</h1>
          <p>Join the best design team</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
