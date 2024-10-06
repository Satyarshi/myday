import React from "react";

const BlogsSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center py-36">
      {/* Background Heading */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="absolute sm:top-6 md:text-[8rem] font-bold opacity-10 form-heading">
          BLOGS
        </h1>
        <img
          src="/Active Indicator.svg"
          alt="line"
          className="pb-1 absolute top-28"
        />
      </div>

      {/* Headline Section */}
      <h1 className="text-4xl font-bold text-black mb-4 text-center">
        Insights and Strategies for Your Growth
      </h1>

      {/* Subheading Section */}
      <p className="text-lg text-gray-500 mb-8 max-w-3xl text-center">
        Explore the latest trends, tips, and insights that drive business
        success.
      </p>

      {/* Blog Cards */}
      <div className="flex flex-col md:flex-row md:space-x-12 items-start justify-center my-8 max-w-5xl px-4">
        <div className="flex-1 mb-6 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4 md:mb-0">
            Redefining the Way How We Make Web
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <button className="bg-[#F4F6F6] py-3 px-8 rounded-xl hover:bg-purple-700">
              Learn about us
            </button>
            <img src="/Group 1.svg" alt="" />
            <p className="text-[#6C8184]">Trusted by 1,500+ agencies</p>
          </div>
        </div>
        <p className="flex-1 text-[#7B7E85] text-lg max-w-xl mx-auto text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          dolore! Aliquam eum earum voluptatem alias minus omnis animi
          perspiciatis. Asperiores obcaecati tenetur ratione temporibus sunt
          odit sequi cum molestias odio, accusantium rem ex iure fugiat
          veritatis quidem unde molestiae autem ab recusandae corrupti numquam
          minima officiis! Cumque inventore nisi iusto?
        </p>
      </div>
    </section>
  );
};

export default BlogsSection;
