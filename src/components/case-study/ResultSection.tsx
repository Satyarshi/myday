import React from "react";

const ResultSection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-evenly items-start px-8 py-16 space-y-12 lg:space-y-0 lg:space-x-12">
      {/* Left Column: Problem Section */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-semibold text-black mb-6">Results</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas quia
          cum odio maxime! Error cupiditate unde eaque, voluptatem debitis iusto
          recusandae eius atque est repellendus voluptas perspiciatis ex
          suscipit fuga, temporibus eos! Labore obcaecati, totam recusandae
          dolorem tenetur, et iure, illo optio natus ratione aliquam ad autem
          sapiente in impedit.
        </p>

        {/* List Section */}
        <div className="bg-[#7030A0] text-white p-6 rounded-2xl">
          <ul className="space-y-4 list-disc list-inside">
            <li>Sed iaculis aenean sit sed risus arcu vitae integer elit.</li>
            <li>Sed iaculis aenean sit sed risus arcu vitae integer elit.</li>
            <li>Sed iaculis aenean sit sed risus arcu vitae integer elit.</li>
          </ul>
        </div>
        <p className="text-gray-600 my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad itaque,
          rem animi impedit vel laborum reiciendis! Animi optio id quae atque
          delectus placeat quidem! Possimus, quibusdam magni voluptatem
          necessitatibus cupiditate vero aspernatur atque error? Quod esse quos
          sed at consequatur.
        </p>
        {/* Placeholder Image */}
        <div className="bg-gray-200 flex justify-center items-center h-52 mb-4 rounded-xl">
          <span className="text-gray-400">Image Placeholder</span>
        </div>
        <p className="text-sm text-gray-400 italic mb-8 text-center">
          Gravida egestas hendrerit pretium ultrices
        </p>
      </div>

      <div className="lg:w-1/3"></div>
    </section>
  );
};

export default ResultSection;
