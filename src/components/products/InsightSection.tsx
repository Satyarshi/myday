"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const InsightSection: React.FC = () => {
  useEffect(() => {
    Aos.init({ offset: 200 });
  }, []);

  return (
    <section className="relative py-12 w-full bg-white">
      <div className="container mx-auto text-center z-10 px-4 sm:px-6 lg:px-8">
        {/* Background overlay with large text */}
        <div className="mb-10 relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <img
              src="/Insight.svg"
              alt="insight"
              className="absolute top-[-50px]"
            />
            <img
              src="/Active Indicator.svg"
              alt="line"
              className="absolute top-[-20px]"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] offer-title">
            Enhance Growth with Continuous Improvement
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] mt-20">
          {/* First card - Large card with nested grid */}
          <div
            className="relative row-span-3 p-6 rounded-xl flex flex-col justify-center"
            data-aos="zoom-in-left"
            data-aos-duration="2000"
          >
            {/* Nested grid inside the first card */}
            <div className="grid grid-rows-[1fr_2fr] gap-4 w-full h-full">
              {/* Top section - large video section */}
              <div className="bg-gray-400 flex items-center justify-center rounded-xl">
                {/* Video/Image placeholder */}
                <span className="text-white text-xl">
                  Video/Image Placeholder
                </span>
              </div>

              {/* Bottom section - smaller cards */}
              <div className="grid grid-col-1 sm:grid-cols-2 gap-4">
                {/* Left bottom card */}
                <div
                  className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex flex-col justify-center"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <div className="text-4xl font-bold">2x</div>
                  <div className="text-lg">Growth</div>
                  <div className="text-gray-500">
                    with tru360's streamlined tools, designed to accelerate
                    feedback-driven progress.
                  </div>
                </div>

                {/* Right bottom card - grid for two smaller cards */}
                <div className="grid gap-4">
                  {/*sm:grid-rows-2*/}
                  {/* Right bottom card - Why 360-Degree Feedback Matters */}
                  <div
                    className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  >
                    <div className="h-[180px] w-full bg-gray-300 rounded-2xl mb-4 flex items-center justify-center">
                      <img
                        src="/placeholder-image.svg"
                        alt="Placeholder"
                        className="opacity-50"
                      />
                    </div>
                    <h2 className="text-md font-semibold mb-2">Hello</h2>
                    <p className="text-gray-500 text-sm">nothing</p>
                  </div>
                  <div
                    className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
                    data-aos="fade-left"
                    data-aos-duration="1400"
                  >
                    <span className="text-lg">Real-Time Dashboards</span>
                    <p className="text-gray-500">
                      Monitor progress and drive actionable insights with our
                      intuitive dashboards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second card */}
          <div
            className="p-6 rounded-xl flex flex-col justify-center row-span-3"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            data-aos-delay="50"
          >
            <div className="grid grid-rows-[2fr_1fr] gap-4 h-full">
              {/* Purple card - 95% */}
              <div className="bg-purple-600 text-white p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex flex-col justify-center">
                <div className="text-5xl font-bold">95%</div>
                <p className="text-2xl font-bold mt-2">More</p>
                <p className="text-lg">
                  visibility into your talent development processes and
                  completion rates.
                </p>
              </div>

              {/* Mastering Talent Development card */}
              <div className="flex flex-col justify-center">
                <div className="w-full p-4 bg-gray-100 rounded-3xl shadow-md cursor-pointer hover:shadow-lg transition relative z-30">
                  <div className="h-[180px] w-full bg-gray-300 rounded-2xl mb-4 flex items-center justify-center">
                    <img
                      src="/placeholder-image.svg"
                      alt="Placeholder"
                      className="opacity-50"
                    />
                  </div>
                  <h2 className="text-md font-semibold mb-2">Hello</h2>
                  <p className="text-gray-500 text-sm">nothing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Third card */}
          <div
            className="p-6 rounded-xl flex flex-col justify-center row-span-3"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-delay="50"
          >
            <div className="grid gap-6 h-full">
              <div
                className="w-full p-4 bg-gray-100 rounded-3xl shadow-md cursor-pointer hover:shadow-lg transition relative z-30"
                data-aos="zoom-in-left"
                data-aos-duration="1000"
                data-aos-delay="50"
              >
                <div className="h-[180px] w-full bg-gray-300 rounded-2xl mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder-image.svg"
                    alt="Placeholder"
                    className="opacity-50"
                  />
                </div>
                <h2 className="text-md font-semibold mb-2">Hello</h2>
                <p className="text-gray-500 text-sm">nothing</p>
              </div>
              <div
                className="w-full p-4 bg-gray-100 rounded-3xl shadow-md cursor-pointer hover:shadow-lg transition relative z-30"
                data-aos="zoom-in-left"
                data-aos-duration="1000"
                data-aos-delay="50"
              >
                <div className="h-[180px] w-full bg-gray-300 rounded-2xl mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder-image.svg"
                    alt="Placeholder"
                    className="opacity-50"
                  />
                </div>
                <h2 className="text-md font-semibold mb-2">Hello</h2>
                <p className="text-gray-500 text-sm">nothing</p>
              </div>
              <div
                className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
                data-aos="zoom-in-left"
                data-aos-duration="1000"
              >
                <span className="text-lg">Real-Time Dashboards</span>
                <p className="text-gray-500">
                  Monitor progress and drive actionable insights with our
                  intuitive dashboards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row of small cards */}
        <div className="p-5 sm:p-0 sm:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div
            className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="text-lg">Real-Time Dashboards</span>
            <p className="text-gray-500">
              Monitor progress and drive actionable insights with our intuitive
              dashboards.
            </p>
          </div>
          <div
            className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <span className="text-lg">Real-Time Dashboards</span>
            <p className="text-gray-500">
              Monitor progress and drive actionable insights with our intuitive
              dashboards.
            </p>
          </div>
          <div
            className="bg-white p-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <span className="text-lg">Real-Time Dashboards</span>
            <p className="text-gray-500">
              Monitor progress and drive actionable insights with our intuitive
              dashboards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightSection;
