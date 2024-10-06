import React from "react";

const BlogsSection: React.FC = () => {
  const blogTitles: string[] = [
    "The Future of Remote Work and Hybrid Teams",
    "Top Leadership Strategies for Building Strong Teams",
    "How Technology is Shaping Employee Engagement",
  ];

  const blogTags: string[] = ["PDF", "Category", "Free"];

  return (
    <div className="relative py-12">
      {/* Background Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center top-0">
        <h1 className="absolute top-[-20px] text-[8rem] font-bold opacity-10 skills-heading blogs">
          BLOGS
        </h1>
        <img
          src="/Active Indicator.svg"
          alt="line"
          className="absolute pb-1 top-20"
        />
      </div>
      {/* Foreground Content */}
      <div className="text-center pt-8 pb-16">
        <h1 className="text-[#000] text-4xl md:text-5xl font-bold">
          Insights and Strategies for Your Growth
        </h1>
        <p className="text-gray-500 text-sm sm:text-lg mt-4">
          Explore the latest trends, tips, and insights that drive business
          success.
        </p>

        {/* Blog Cards */}
        <div className="flex justify-center gap-8 mt-10 flex-wrap text-justify">
          {blogTitles.map((title, index) => (
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
                {blogTags.map((item, i) => (
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
            See all blogs.
          </a>
        </p>
      </div>
    </div>
  );
};

export default BlogsSection;
