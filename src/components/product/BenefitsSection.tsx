import React from "react";
import Link from "next/link";

const BenefitsSection = () => {
  return (
    <section className="relative benefits pb-20">
      {/* Background Image */}
      {/* <div>
        <img
          src="/product-rectangle.svg"
          alt="Background Pattern"
          className="w-full object-cover"
        />
      </div> */}

      {/* Content Container */}
      <div className="absolute left-0 right-0 flex flex-col items-center justify-center product-content">
        {/* <h1 className="absolute sm:text-[8rem] sm:top-28 font-bold opacity-10 benefits-heading">
          BENEFITS
        </h1> */}
        <img
          src="/Active Indicator.svg"
          alt="line"
          className="absolute top-48 pb-1"
        />
        <div className="absolute text-center pt-15 md:mx-20 lg:px-0 top-56">
          {/* Title Section */}
          <div className="mb-10 relative">
            <img src="/Benefits.svg" alt="benefits" className="absolute left-1/2 transform -translate-x-1/2 top-[-50px]"/>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#111827] offer-title">
              Empowering Learners, Enhancing Business Impact
            </h2>
          </div>

          {/* Description */}
          <div className="flex flex-col lg:flex-row justify-evenly items-start px-8 py-16 space-y-12 lg:space-y-0 lg:space-x-12">
            <div className="text-left lg:w-1/2">
              <h2 className="text-3xl font-bold text-[#111827] mb-5">
                Key features that drive skill transformation
              </h2>
              <p className="text-justify text-[#7B7E85] mb-8 text-base sm:text-lg">
                Sparkle leverages data-driven insights and personalized learning
                pathways to boost employee engagement, performance, and
                retention. Unlock continuous growth and improvement with a focus
                on real-world application.
              </p>
              <ul className="text-left mb-10 text-[#7B7E85] sm:text-lg space-y-4">
                {[
                  "Customized Learning Paths: Tailored to individual needs for optimal skill development.",
                  "Real-Time Feedback: Helps learners immediately improve their performance.",
                  "Data-Driven Insights: Measure progress and skill gaps for better decision-making.",
                  "Enhanced Engagement: Keeps learners motivated with interactive and adaptive learning modules.",
                  "Seamless Integration: Works smoothly across multiple platforms and devices for convenient learning.",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <img
                      src="/Vector.svg"
                      alt="Check Icon"
                      className="mr-3 w-5 h-5"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              {/* CTA Button at the Start */}
              <div className="mt-10">
                <Link href="/api/form">
                  <button className="bg-[#7030A0] text-white font-semibold py-3 px-6 rounded-xl hover:bg-purple-700 transition">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>

            {/* Data Visualization Section */}
            <div className="flex justify-center lg:w-2/3">
              <img
                src="/Group 1000002944.svg"
                alt="graph image"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
