import React from "react";

const PricingSection: React.FC = () => {
  return (
    <div className="relative py-12">
      {/* Background Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center top-0">
        <h1 className="absolute md:top-[-20px] md:text-[8rem] font-bold opacity-10 price-heading">
          PRICING
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
          Choose Your Perfect Plan
        </h1>
        <p className="text-gray-500 text-sm sm:text-lg mt-4">
          Find the right solution tailored to your company’s compensation needs
          and goals.
        </p>

        {/* Pricing Cards */}
        <div className="flex justify-center gap-8 mt-10 flex-wrap text-justify">
          {/* Standard Plan */}
          <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 w-full md:w-80">
            <div className="text-center">
              <h2 className="md:text-xl font-bold mb-4 price-card">Standard</h2>
              <img src="/Price.svg" alt="standard price" className="w-full"/>
              <div className="text-gray-600 my-4 price-text">Get started with...</div>
              <hr />
              <ul className="text-left my-6 price-feature">
                {[
                  { text: "Live chat for ", bold: "support" },
                  { text: "Custom industry reports", bold: "" },
                  { text: "Access to ", bold: "live market data" },
                  { text: "Compensation ", bold: "benchmarking" },
                  { text: "Workload ", bold: "management" },
                  { text: "Role-based ", bold: "permissions" },
                  { text: "Personalized ", bold: "consultation" },
                ].map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <img
                      src="/tick.svg" // Replace with the correct path to your check icon
                      alt="Check Icon"
                      className="mr-3 w-4 h-4"
                    />
                    {feature.bold ? (
                      <span>
                        {feature.text}
                        <span className="font-bold">{feature.bold}</span>
                      </span>
                    ) : (
                      <span>{feature.text}</span>
                    )}
                  </li>
                ))}
              </ul>

              <button className="bg-[#7030A0] text-white py-2 px-4 rounded-xl w-full">
                GET STARTED
              </button>
            </div>
          </div>

          {/* Plus Plan */}
          <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 w-full md:w-80">
            <div className="text-center">
              <h2 className="text-xl font-bold mb-4 price-card">Plus</h2>
              <img src="/plus-price.svg" alt="plus price" className="w-full"/>
              <div className="text-gray-600 my-4 price-text">
                All Standard features and...
              </div>
              <hr />
              <ul className="text-left my-6 price-feature">
                {[
                  { text: "Live chat for ", bold: "support" },
                  { text: "Custom industry reports ", bold: "Detailed" },
                  { text: "Benefit and perk ", bold: "analysis" },
                  { text: "Long-term incentive insights", bold: "" },
                  { text: "Full ", bold: "compensation package" },
                  { text: "breakdown " },
                  { text: "Leadership and executive ", bold: "support" },
                ].map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <img
                      src="/tick.svg" // Replace with the correct path to your check icon
                      alt="Check Icon"
                      className="mr-3 w-4 h-4"
                    />
                    {feature.bold ? (
                      <span>
                        {feature.text}
                        <span className="font-bold">{feature.bold}</span>
                      </span>
                    ) : (
                      <span>{feature.text}</span>
                    )}
                  </li>
                ))}
              </ul>

              <button className="bg-[#7030A0] text-white py-2 px-4 rounded-xl w-full">
                GET STARTED
              </button>
            </div>
          </div>

          {/* Company Plan */}
          <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 w-full md:w-80">
            <div className="text-center">
              <h2 className="text-xl font-bold mb-4 price-card">Company</h2>
              <img src="/company-price.svg" alt="company price" className="w-full"/>
              <div className="text-gray-600 my-4 price-text">All Plus features and...</div>
              <hr />
              <ul className="text-left my-6 price-feature">
                {[
                  { text: "Live chat for ", bold: "support" },
                  { text: "Custom industry reports ", bold: "Detailed" },
                  { text: "Benefit and perk ", bold: "analysis" },
                  { text: "Long-term incentive insights", bold: "" },
                  { text: "Full ", bold: "compensation package" },
                  { text: "Leadership and executive ", bold: "support" },
                  { text: "Workload ", bold: "management" },
                  { text: "Role-based ", bold: "permissions" },
                  { text: "Personalized ", bold: "consultation sessions" },
                ].map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <img
                      src="/tick.svg" // Replace with the correct path to your check icon
                      alt="Check Icon"
                      className="mr-3 w-4 h-4"
                    />
                    {feature.bold ? (
                      <span>
                        {feature.text}
                        <span className="font-bold">{feature.bold}</span>
                      </span>
                    ) : (
                      <span>{feature.text}</span>
                    )}
                  </li>
                ))}
              </ul>

              <button className="bg-[#7030A0] text-white py-2 px-4 rounded-xl w-full">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
