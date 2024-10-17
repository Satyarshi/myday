import React from "react";
import { AnimatedShinyTextDemo } from "../AnimatedShinyTextDemo";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center py-10 md:py-20">
      {/* Headline Section */}
      <div className="mt-6 bg-[#fff] px-3 py-5 rounded-lg text-xs inline-block">
        <AnimatedShinyTextDemo
          text={`All Posts`}
        />
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 px-4">
        The Future of Remote Work and Hybrid Teams
      </h1>

      {/* Author, Date, and Read Time */}
      <div className="flex flex-wrap items-center justify-center text-gray-400 mb-6 space-x-4 text-sm sm:text-base">
        <span>Jaroslav Dlask</span>
        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
        <span>12 Nov 2024</span>
        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
        <span>12 min</span>
      </div>

      {/* Image Section */}
      <div className="relative w-full flex justify-center px-4">
        <div className="bg-gray-300 w-full max-w-[1024px] h-[200px] sm:h-[300px] md:h-[400px] rounded-xl flex items-center justify-center">
          {/* Placeholder for Image */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
