import React from "react";

const ResourceSection: React.FC = () => {
  const resourceTitles: string[] = [
    "Step-by-step guide for new hires",
    "Building a strong company culture",
    "Understanding compensation and perks",
  ];

  const resourceTags: string[] = ["PDF", "Category", "Free"];
  return (
    <div className="relative py-12">
      {/* Background Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center top-0">
        <h1 className="absolute md:top-[-20px] md:text-[8rem] font-bold opacity-10 resource-heading">
          RESOURCES
        </h1>
        <img
          src="/Active Indicator.svg"
          alt="line"
          className="absolute pb-1 top-16"
        />
      </div>
      {/* Foreground Content */}
      <div className="text-center pt-8 pb-16">
        <h1 className="text-[#000] text-4xl md:text-5xl font-bold">
          Empower Your Team with Essential Tools
        </h1>
        <p className="text-gray-500 text-sm sm:text-lg mt-4">
          Access key documents and guides to drive success and support employee
          growth.
        </p>

        {/* Blog Cards */}
        <div className="flex justify-center gap-8 mt-10 flex-wrap text-justify">
          {resourceTitles.map((title, index) => (
            <div
              key={index}
              className="w-[300px] p-4 bg-gray-100 rounded-3xl shadow-md"
            >
              <div className="h-[180px] w-full bg-gray-300 rounded-2xl mb-4 flex items-center justify-center">
                <img
                  src="/placeholder-image.svg"
                  alt="Placeholder"
                  className="opacity-50"
                />
              </div>
              <h2 className="text-md font-semibold mb-2 w-[80%]">{title}</h2>
              <p className="text-gray-500 text-sm flex justify-between w-[60%] font-semibold">
                {resourceTags.map((item, i) => (
                  <span key={i} className="hover-tag">
                    {item}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <p className="text-[#344346] text-md font-semibold mt-12">
          Looking for more?{" "}
          <a href="/blogs" className="text-[#9030A0]">
            See all resources.
          </a>
        </p>
      </div>
    </div>
  );
};

export default ResourceSection;
