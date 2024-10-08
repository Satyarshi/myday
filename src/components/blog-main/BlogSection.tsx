import React from "react";

const BlogSection: React.FC = () => {
  const caseStudyTitles: string[] = [
    "See How This Company Improved CTR by 30% and Saved 15% Costs on Operations",
    "Discover How This Firm Boosted Revenue by 25% with Automation",
    "Case Study: Reducing Operational Costs by 20% Through Streamlined Processes",
  ];

  // Array of indicators for each case study
  const caseStudyIndicators: string[] = ["Indicator", "Indicator", "Indicator"];
  return (
    <section className="flex flex-col lg:flex-row justify-evenly items-start px-8 py-16 space-y-12 lg:space-y-0 lg:space-x-12">
      {/* Left Column: Problem Section */}
      <div className="lg:w-1/2">
        <h3 className="font-semibold">
          The Future of Remote Work and Hybrid Teams
        </h3>
        <h2 className="text-3xl font-semibold text-black my-6">
          How Businesses Can Adapt to the Evolving Workforce
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas quia
          cum odio maxime! Error cupiditate unde eaque, voluptatem debitis iusto
          recusandae eius atque est repellendus voluptas perspiciatis ex
          suscipit fuga, temporibus eos! Labore obcaecati, totam recusandae
          dolorem tenetur, et iure, illo optio natus ratione aliquam ad autem
          sapiente in impedit.
        </p>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad itaque,
          rem animi impedit vel laborum reiciendis! Animi optio id quae atque
          delectus placeat quidem! Possimus, quibusdam magni voluptatem
          necessitatibus cupiditate vero aspernatur atque error? Quod esse quos
          sed at consequatur.
        </p>

        {/* List Section */}
        <div className="bg-[#7030A0] text-white p-6 rounded-2xl mb-6">
          <ul className="space-y-4 list-disc list-inside">
            <li>Sed iaculis aenean sit sed risus arcu vitae integer elit.</li>
            <li>Sed iaculis aenean sit sed risus arcu vitae integer elit.</li>
            <li>Sed iaculis aenean sit sed risus arcu vitae integer elit.</li>
          </ul>
        </div>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad itaque,
          rem animi impedit vel laborum reiciendis! Animi optio id quae atque
          delectus placeat quidem! Possimus, quibusdam magni voluptatem
          necessitatibus cupiditate vero aspernatur atque error? Quod esse quos
          sed at consequatur.
        </p>
        {/* Placeholder Image */}
        <div className="bg-gray-200 flex justify-center items-center h-52 rounded-xl">
          <span className="text-gray-400">Image Placeholder</span>
        </div>
        <p className="text-sm text-gray-400 italic mb-8 text-center">
          Gravida egestas hendrerit pretium ultrices
        </p>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad itaque,
          rem animi impedit vel laborum reiciendis! Animi optio id quae atque
          delectus placeat quidem! Possimus, quibusdam magni voluptatem
          necessitatibus cupiditate vero aspernatur atque error? Quod esse quos
          sed at consequatur.
        </p>
        {/* List Section */}
        <div className="bg-[#7030A0] text-white p-6 rounded-2xl mb-6">
          <ul className="space-y-4 list-disc list-inside">
            <li>Sed iaculis aenean sit sed risus arcu vitae integer elit.</li>
            <li>Sed iaculis aenean sit sed risus arcu vitae integer elit.</li>
            <li>Sed iaculis aenean sit sed risus arcu vitae integer elit.</li>
          </ul>
        </div>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sequi
          nemo dolore saepe officia quibusdam itaque maiores ducimus iusto,
          impedit voluptatem omnis voluptatibus doloribus culpa eius officiis
          incidunt eligendi optio corrupti quisquam quasi, distinctio aperiam.
          Eius odit mollitia asperiores. Possimus, quos aspernatur modi
          temporibus repellat, sint id ea numquam magni facilis vero nihil neque
          quisquam debitis atque sed sit non excepturi fugiat veniam totam!
          Velit perspiciatis corrupti mollitia, quas, doloribus repellendus
          provident delectus, vitae sed eum pariatur blanditiis quos deserunt
          dignissimos dolorem maxime laborum praesentium autem quaerat quae ad
          qui sunt commodi? Fuga accusantium quidem est libero perspiciatis
          dicta quo?
        </p>
      </div>

      {/* Right Column: Related Case Studies Section */}
      <div className="lg:w-1/3">
        <h3 className="text-2xl font-semibold text-black mb-6">
          Related Case Studies
        </h3>

        {/* Render Case Study Cards Dynamically */}
        {caseStudyTitles.map((title, index) => (
          <div
            key={index}
            className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] rounded-xl p-6 mb-6"
          >
            <div className="text-sm text-gray-500 mb-2">Company Descriptor</div>
            <h4 className="text-lg font-bold text-black mb-2">{title}</h4>
            <div className="flex space-x-2 text-sm text-gray-400">
              {caseStudyIndicators.map((indicator, i) => (
                <span key={i}>
                  {indicator}
                  {i < caseStudyIndicators.length - 1 && (
                    <span className="mx-1">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
