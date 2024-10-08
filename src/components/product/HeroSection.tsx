import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center py-20">
      {/* Headline Section */}
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
        The Future of Skills Development is Here
      </h1>

      {/* Subheading Section */}
      <p className="text-lg text-gray-500 mb-8 max-w-3xl">
        SPARCLE is an AI-powered skills acceleration tool designed to simplify
        and automate your assessment, development, and talent mapping processes.
        Drive continuous learning, improve performance, and unlock growth across
        your organization with powerful, easy-to-use functionalities.
      </p>

      {/* CTA Button */}
      <Link href="/api/form">
        <button className="bg-[#7030A0] text-white py-3 px-8 rounded-xl mb-12 hover:bg-purple-700">
          Accelerate Skills Today
        </button>
      </Link>

      {/* Image Section */}
      <div className="relative w-full flex justify-center">
        <Image src="/Group 880.svg" alt="image" width={1024} height={758} />
      </div>
    </section>
  );
};

export default HeroSection;
