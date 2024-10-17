import React from "react";
import Link from "next/link";
import { AnimatedShinyTextDemo } from "../AnimatedShinyTextDemo";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center py-20">
      <div className="flex justify-center items-center mt-16 mb-32">
        <h1 className="text-6xl font-bold">
          <span className="text-black">my</span>
          <span className="text-purple-600">day</span>
          <span className="text-black">ONE</span>
        </h1>
      </div>

      <div className="mt-6 bg-[#fff] px-3 py-1 rounded-lg text-xs inline-block">
        <AnimatedShinyTextDemo text={`Introducing our new product`}/>
      </div>

      <h1 className="text-4xl font-bold text-black mt-6">
        Most Learning Platforms Track Progress. We Drive Results.
      </h1>

      <p className="text-lg text-gray-500 mt-4 max-w-2xl">
        At myDayOne, we don't just deliver content—we empower growth. Our
        platform uses behavior-based learning methodologies to help employees,
        teams, and organizations achieve consistent, measurable performance
        improvement.
      </p>

      <Link href="/api/form">
        <button className="bg-[#7030A0] text-white py-3 px-8 rounded-xl mt-8 hover:bg-purple-700">
          Get Started
        </button>
      </Link>
    </section>
  );
};

export default HeroSection;
