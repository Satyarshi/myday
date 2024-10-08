import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
  const popularBlogTitles = [
    "The Future of Remote Work and Hybrid Teams",
    "Top Leadership Strategies for Building Strong Teams",
    "How Technology is Shaping Employee Engagement",
  ];

  const blogIndicators = ["Jaroslav Dlašek", "12 min"];
  const latestBlogTitles = ["The Future of Remote Work and Hybrid Teams"];
  const latestBlogTags = ["Jaroslav Dlašek", "12 min"];

  return (
    <section className="relative flex flex-col items-center py-24 sm:py-36">
      {/* Background Heading */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="absolute sm:top-6 md:text-[6rem] lg:text-[8rem] font-bold opacity-10 form-heading">
          BLOG
        </h1>
        <img
          src="/Active Indicator.svg"
          alt="line"
          className="pb-1 absolute top-20 md:top-28"
        />
      </div>

      <div className="text-center pt-8 pb-16">
        {/* Headline Section */}
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4 text-center">
          Insights and Strategies for Your Growth
        </h1>

        {/* Subheading Section */}
        <p className="text-md sm:text-lg text-gray-500 mb-8 text-center">
          Explore the latest trends, tips, and insights that drive business
          success.
        </p>

        {/* Popular and Latest Blog Section */}
        <div className="flex flex-col md:flex-row justify-center w-full max-w-7xl mt-8 gap-8">
          {/* Popular Blog Section */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-xl font-semibold mb-4">Popular</h2>
            {popularBlogTitles.map((title, index) => (
              <div
                key={index}
                className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] rounded-xl p-6 mb-6"
              >
                <div className="text-sm text-gray-500 mb-2">
                  Company Descriptor
                </div>
                <h4 className="text-lg font-bold text-black mb-2">{title}</h4>
                <div className="flex space-x-2 text-sm text-gray-400">
                  {blogIndicators.map((indicator, i) => (
                    <span key={i}>
                      {indicator}
                      {i < blogIndicators.length - 1 && (
                        <span className="mx-1">•</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Latest Blog Section with Bigger Size */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-xl font-semibold mb-4">Latest</h2>
            <div className="flex justify-center gap-4 sm:gap-8 mt-6 sm:mt-10 flex-wrap text-justify">
              {latestBlogTitles.map((title, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[340px] md:w-[400px] p-6 bg-gray-100 rounded-3xl shadow-md"
                >
                  <div className="h-[180px] sm:h-[200px] md:h-[240px] w-full bg-gray-300 rounded-2xl mb-4 flex items-center justify-center">
                    <img
                      src="/placeholder-image.svg"
                      alt="Placeholder"
                      className="opacity-50"
                    />
                  </div>
                  <h2 className="text-md sm:text-lg font-semibold mb-2 w-[90%] sm:w-[80%]">
                    {title}
                  </h2>
                  <p className="text-gray-500 text-sm sm:text-md flex justify-between w-[70%] sm:w-[60%] font-semibold">
                    {latestBlogTags.map((item, i) => (
                      <span key={i} className="hover-tag">
                        {item}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
