import React from "react";

const BenefitsSection = () => {
  return (
    <section className="relative offer-section">
      {/* Background Image */}
      <div>
        <img
          src="/product-rectangle.svg"
          alt="Background Pattern"
          className="w-full object-cover client"
        />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <h1 className="absolute top-[10rem] text-[4rem] lg:text-[8rem] font-bold opacity-10 skills-heading">
          BENEFITS
        </h1>
        <img src="/Active Indicator.svg" alt="line" className="pb-1" />
        <div className="container mx-auto text-center pt-15 px-6 lg:px-0">
          {/* Title Section */}
          <div className="mb-32">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#111827] offer-title">
              Empower Growth Through Tailored Feedback
            </h2>
          </div>

          {/* Description */}
          <div className="flex justify-center gap-8">
            <div className="text-left max-w-2xl">
              <h2 className="text-3xl font-bold text-[#111827] mb-5">Delivering Actionable Insights to Drive Performance</h2>
              <p className="text-justify text-[#7B7E85] mb-8 text-base sm:text-lg">
                TRU 360 helps you accelerate learning and development through
                real-time feedback tailored to individual needs. Designed for HR
                professionals, our platform offers the tools needed to
                streamline your 360-degree assessment process.
              </p>
              <ul className="text-left mb-10 text-base sm:text-lg space-y-4">
                {[
                  "Fully customizable workflows tailored to roles and success profiles.",
                  "Seamless integration with your talent development initiatives.",
                  "Automatically generated IDPs for personalized learning journeys.",
                  "Real-time progress dashboards for learners and admins alike.",
                  "Digitalized feedback collection that boosts engagement and growth.",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <img
                      src="/vector.svg"
                      alt="Check Icon"
                      className="mr-3 w-5 h-5"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              {/* CTA Button at the Start */}
              <div className="mt-10">
                <button className="bg-[#9C27B0] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#7C1E8C] transition">
                  Get Started
                </button>
              </div>
            </div>

            {/* Data Visualization Section */}
            <div className="flex justify-center">
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
