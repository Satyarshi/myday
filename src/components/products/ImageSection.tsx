import React from "react";
import Image from "next/image";

const ImageSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center py-20">
      {/* Headline Section */}
      <h1 className="text-4xl font-bold text-black mb-4">
        Transform Your Talent with <span className="text-purple-600">360° Feedback</span>
      </h1>

      {/* Subheading Section */}
      <p className="text-lg text-gray-500 mb-8 max-w-3xl">
        tru360 by myDayOne is a powerful digital platform designed to simplify and enhance your 360-degree feedback process...
      </p>

      {/* CTA Button */}
      <button className="bg-[#7030A0] text-white py-3 px-8 rounded-lg mb-12 hover:bg-purple-700">
        Get Started
      </button>

      {/* Image Section */}
      <div className="relative w-full flex justify-center">
        <Image src="/Group 880.svg" alt="image" width={1024} height={758} />
      </div>
    </section>
  );
};

export default ImageSection;
