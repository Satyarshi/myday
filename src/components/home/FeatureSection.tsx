import React from "react";

const FeatureSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center py-12 w-full bg-white md:flex-row md:justify-center">
      <div className="container mx-auto text-center relative z-10 flex flex-col md:flex-row items-center justify-around">
        {/* Left Side - Image */}
        <div className="flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src="/Image.svg"
            alt="Person with laptop"
            className="w-[300px] h-auto"
          />
        </div>

        {/* Right Side - Features */}
        <div className="max-w-2xl text-left relative">
          {/* Heading */}
          <img src="/features.svg" alt="features" className="absolute top-[-35px] left-[-10px] feature-text" />
          <img src="/Active Indicator.svg" alt="line" className="pb-1" />
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-10">
            Unlock Your True Learning Potential
          </h1>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="flex items-start">
              <img
                src="/feature-1.png.svg"
                alt="Customized Learning Paths"
                className="w-10 h-10 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-[#111827]">
                  Customized Learning Paths
                </h3>
                <p className="text-[#67687A] text-lg">
                  Adaptable courses aligned with personal goals.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start">
              <img
                src="/feature-2.png.svg"
                alt="Insightful Analytics"
                className="w-10 h-10 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-[#111827]">
                  Insightful Analytics
                </h3>
                <p className="text-[#67687A] text-lg">
                  Real-time tracking to refine learning strategies.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start">
              <img
                src="/feature-3.png.svg"
                alt="Effortless Integration"
                className="w-10 h-10 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-[#111827]">
                  Effortless Integration
                </h3>
                <p className="text-[#67687A] text-lg">
                  Integrates smoothly with current platforms.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start">
              <img
                src="/feature-4.png.svg"
                alt="Clear ROI Metrics"
                className="w-10 h-10 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-[#111827]">
                  Clear ROI Metrics
                </h3>
                <p className="text-[#67687A] text-lg">
                  Concrete results that reflect learning impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
