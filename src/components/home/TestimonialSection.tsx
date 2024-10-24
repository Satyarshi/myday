"use client";

import React, { useState } from "react";

const TestimonialSection: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-14 h-[650px]">
      <img
        src="/left-pattern.svg"
        alt="Left Icons"
        className="absolute top-0 left-0"
      />
      <div className="relative flex flex-col items-center text-center py-12">
        {/* Title */}
        {/* <h1 className="absolute top-[-50px] text-[8rem] font-bold opacity-10 skills-heading">
          SAY'S
        </h1> */}
        <img src="/say’s.svg" alt="say" className="absolute top-[-5px]" />
        <img src="/Active Indicator.svg" alt="line" className="pb-1" />
        <h1 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">
          People's Say About Our Support & Services
        </h1>

        <div className="relative flex items-center justify-center z-10 space-x-4">
          {/* Testimonial Text */}
          <div className="relative flex flex-col items-center justify-center text-center max-w-3xl space-x-4 z-10">
            <div>
              <div className="text-3xl text-gray-800 font-semibold testimonial relative">
                We Empower Organizations
                <span
                  className="w-20 hover:w-40 transition-width inline-block relative"
                  onMouseEnter={() => setHovered(1)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <img
                    src="/man.svg"
                    alt="Person 1"
                    className={`w-full h-8 object-cover rounded-3xl transition-width`}
                  />
                  {hovered === 1 && (
                    <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-64 bg-zinc-600 text-white text-sm p-4 rounded-lg shadow-lg z-20 man-hover">
                      {/* Tooltip Arrow */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-zinc-600"></div>
                      <p>
                        "It's great to have a good sense of where my money is
                        going and be able to adjust as necessary."
                      </p>
                      <p className="mt-2 font-bold">John Doe</p>
                      <p className="text-xs">Employee at Leva</p>
                    </div>
                  )}
                </span>
                And Their teams{" "}
                <span
                  className="relative w-20 hover:w-40 transition-width inline-block"
                  onMouseEnter={() => setHovered(2)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <img
                    src="/woman.svg"
                    alt="Person 2"
                    className={`w-full h-8 object-cover rounded-3xl transition-width`}
                  />
                  {hovered === 2 && (
                    <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-64 bg-zinc-600 text-white text-sm p-4 rounded-lg shadow-lg z-20 woman-hover">
                    {/* Tooltip Arrow */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-zinc-600"></div>
                    <p>
                      "It's great to have a good sense of where my money is
                      going and be able to adjust as necessary."
                    </p>
                    <p className="mt-2 font-bold">John Doe</p>
                    <p className="text-xs">Employee at Leva</p>
                  </div>
                  )}
                </span>{" "}
                to seamlessly implement and manage dynamic learning solutions
                with ease.
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/right-pattern.svg"
        alt="Right Icons"
        className="absolute top-0 right-0"
      />
    </section>
  );
};

export default TestimonialSection;
