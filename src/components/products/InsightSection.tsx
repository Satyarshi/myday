import React from "react";

const InsightSection: React.FC = () => {
  return (
    <section className="relative py-12 w-full bg-white">
      <div className="container mx-auto text-center z-10">
        {/* Background overlay with large text */}
        <div className="mb-10 relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-[10rem] absolute font-bold opacity-10 skills-heading top-[-8rem]">
              INSIGHT
            </h1>
            <img src="/Active Indicator.svg" alt="line" className="absolute top-[-20px]" />
          </div>
          <h2 className="text-5xl font-bold text-[#111827] offer-title">
            Enhance Growth with Continuous Improvement
          </h2>
        </div>

        {/* Grid container for cards */}
        <div className="grid grid-rows-[200px_1fr_2fr] grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Card 1 - Video */}
          <div className="col-span-2 row-span-1 bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <div className="text-center">
              <div className="bg-gray-200 rounded-full p-6 mb-4">
                {/* Placeholder for video play button */}
                <span className="text-4xl text-purple-600">▶</span>
              </div>
              <p className="text-gray-700">
                How tru360 Enhances Feedback Efficiency
              </p>
            </div>
          </div>

          {/* Card 2 - 95% More */}
          <div className="col-span-1 row-span-2 bg-purple-600 text-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <div className="text-center">
              <p className="text-5xl font-bold mb-4">95%</p>
              <p>
                More visibility into your talent development processes and
                completion rates.
              </p>
            </div>
          </div>

          {/* Card 3 - How to Integrate */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <p className="text-gray-700">
              How to Integrate 360-Degree Assessments
            </p>
          </div>

          {/* Card 4 - Growth */}
          <div className="col-span-1 row-span-2 bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
            <p className="">2x</p>
            <div>
              <h1>Growth</h1>
              <p>
                with tru360’s streamlined tools, designed to accelerate
                feedback-driven progress.
              </p>
            </div>
          </div>

          {/* Card 5 - Real-Time Dashboards */}
          <div className="row-span-1 bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <p className="text-gray-700">Real-Time Dashboards</p>
          </div>

          {/* Card 6 - Mastering Talent Development */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <p className="text-gray-700">
              Mastering Talent Development with tru360
            </p>
          </div>

          {/* Card 7 - Continuous Feedback */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700">
              Continuous Feedback for Continuous Growth
            </p>
          </div>

          {/* Card 8 - Success Profile */}
          <div className="bg-white rounded-lg shadow-md p-6 row-span-3">
            <p className="text-gray-700">Success Profile 360</p>
          </div>

          {/* Card 9 - Customizable Workflows */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <p className="text-gray-700">Customizable Workflows</p>
          </div>

          {/* Card 10 - IDP Development */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <p className="text-gray-700">IDP Development</p>
          </div>

          {/* Card 11 - Admin Services */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <p className="text-gray-700">Admin & Super Admin Services</p>
          </div>

          {/* Card 12 - Feedback Matters */}
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
            <p className="text-gray-700">Why 360-Degree Feedback Matters?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightSection;
