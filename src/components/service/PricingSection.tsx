import React from "react";

const PricingSection: React.FC = () => {
  const plans = [
    {
      title: "30%",
      description:
        "Egestas sapien viverra neque ace. Morbi euismod, nunc id dictum dictum, nisi nunc.",
    },
    {
      title: "50+",
      description:
        "Egestas sapien viverra neque ace. Morbi euismod, nunc id dictum dictum, nisi nunc.",
    },
    {
      title: "30%",
      description:
        "Egestas sapien viverra neque ace. Morbi euismod, nunc id dictum dictum, nisi nunc.",
    },
    {
      title: "50+",
      description:
        "Egestas sapien viverra neque ace. Morbi euismod, nunc id dictum dictum, nisi nunc.",
    },
  ];

  return (
    <div className="relative py-12">
      {/* Background Text */}
      <div className="absolute left-0 right-0 flex flex-col items-center justify-center top-0">
        {/* <h1 className="absolute md:top-[-20px] md:text-[8rem] font-bold opacity-10 price-heading">
          PRICING
        </h1> */}
        <img
          src="/Active Indicator.svg"
          alt="line"
          className="absolute pb-1 top-16"
        />
      </div>
      {/* Foreground Content */}
      <div className="flex flex-col items-center text-center pt-8 pb-16 relative">
      <img src="/Pricing.svg" alt="pricing" className="absolute left-1/2 transform -translate-x-1/2 top-[-30px] price-heading"/>
        <h2 className="text-[#000] text-4xl md:text-5xl font-bold mt-4">
          Choose Your Perfect Plan
        </h2>
        <p className="text-gray-500 text-sm sm:text-lg mt-4 max-w-3xl">
          Sed iaculis aenean sit sed risus arcu vitae integer elit lorem.
          Volutpat amet etiam mi nunc diam nulla. Sed iaculis aenean sit sed
          risus arcu vitae integer elit. Fames feugiat tellus.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 shadow-[0_4px_12px_rgba(0,0,0,0.2)] rounded-xl bg-white`}
            >
              <h3 className="text-3xl font-semibold">{plan.title}</h3>
              <p className="text-gray-500 mt-2">{plan.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
