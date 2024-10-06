import React from "react";

const LookingSection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-evenly items-start px-8 pb-16 space-y-12 lg:space-y-0 lg:space-x-12">
      {/* Left Column: Problem Section */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-semibold text-black mb-6">
          What We Look For
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas quia
          cum odio maxime! Error cupiditate unde eaque, voluptatem debitis iusto
          recusandae eius atque est repellendus voluptas perspiciatis ex
          suscipit fuga, temporibus eos! Labore obcaecati, totam recusandae
          dolorem tenetur, et iure, illo optio natus ratione aliquam ad autem
          sapiente in impedit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas quia
          cum odio maxime! Error cupiditate unde eaque, voluptatem debitis iusto
          recusandae eius atque est repellendus voluptas perspiciatis ex
          suscipit fuga, temporibus eos! Labore obcaecati, totam recusandae
          dolorem tenetur, et iure, illo optio natus ratione aliquam ad autem
          sapiente in impedit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>

        {/* List Section */}
        <div className="bg-[#7030A0] text-white p-6 rounded-2xl">
          <ul className="space-y-4 list-disc list-inside">
            <li>Sed iaculis aenean sit sed risus arcu vitae integer elit.</li>
            <li>Sed iaculis aenean sit sed risus arcu vitae integer elit.</li>
            <li>Sed iaculis aenean sit sed risus arcu vitae integer elit.</li>
          </ul>
        </div>
      </div>

      <div className="lg:w-1/3"></div>
    </section>
  );
};

export default LookingSection;
