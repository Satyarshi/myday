import React from "react";
import Link from "next/link"; // Import Link from Next.js

const ResourceSection: React.FC = () => {
  // Define resource titles along with their URLs
  const resources = [
    {
      title: "Step-by-step guide for new hires",
      link: "/api/case-study",
    },
    {
      title: "Building a strong company culture",
      link: "/api/case-study",
    },
    {
      title: "Understanding compensation and perks",
      link: "/api/case-study",
    },
  ];

  const resourceTags: string[] = ["PDF", "Category", "Free"];

  return (
    <div className="relative py-12">
      {/* Background Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center top-0">
        {/* <h1 className="absolute md:top-[-20px] md:text-[8rem] font-bold opacity-10 ">
          RESOURCES
        </h1> */}
        <img
          src="/Active Indicator.svg"
          alt="line"
          className="absolute pb-1 top-16"
        />
      </div>

      {/* Foreground Content */}
      <div className="text-center pt-8 pb-16 relative">
        <img src="/Resources.svg" alt="resources" className="absolute left-1/2 transform -translate-x-1/2 top-[-20px] resource-heading"/>
        <h1 className="text-[#000] text-4xl md:text-5xl font-bold">
          Empower Your Team with Essential Tools
        </h1>
        <p className="text-gray-500 text-sm sm:text-lg mt-4">
          Access key documents and guides to drive success and support employee
          growth.
        </p>

        {/* Resource Cards */}
        <div className="flex justify-center gap-8 mt-10 flex-wrap text-justify">
          {resources.map((resource, index) => (
            <Link key={index} href={resource.link}>
              <div
                className="w-[300px] p-4 bg-gray-100 rounded-3xl shadow-md cursor-pointer hover:shadow-lg transition relative z-30" // Added "relative"
              >
                <div className="h-[180px] w-full bg-gray-300 rounded-2xl mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder-image.svg"
                    alt="Placeholder"
                    className="opacity-50"
                  />
                </div>
                <h2 className="text-md font-semibold mb-2 w-[80%]">
                  {resource.title}
                </h2>
                <p className="text-gray-500 text-sm flex justify-between w-[60%] font-semibold">
                  {resourceTags.map((item, i) => (
                    <span key={i} className="hover-tag">
                      {item}
                    </span>
                  ))}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Link */}
        <p className="text-[#344346] text-md font-semibold mt-12">
          Looking for more?{" "}
          <a href="/resources" className="text-[#9030A0]">
            See all resources.
          </a>
        </p>
      </div>
    </div>
  );
};

export default ResourceSection;
