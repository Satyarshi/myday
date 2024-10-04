import React from "react";

const ClientSection: React.FC = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src="/client-section.svg"
        alt="client"
        className="w-full object-cover client"
      />

      {/* "Trusted by Leading Brands" Foreground Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-start top-0 ">
        <h1 className="text-[5rem] lg:text-9xl md:text-[6.4rem] font-bold opacity-10 gradient-text client-heading">
          OUR CLIENTS
        </h1>

        <div className="absolute top-12 text-center md:top-20 lg:top-20 sm:top-20">
          <h1 className="text-[#EBE6FA] text-4xl md:text-5xl lg:text-6xl font-bold">
            Trusted by Leading Brands
          </h1>
          <p className="text-white text-sm sm:text-lg mt-10">
            Over [X] Companies Trust myDayOne to Boost Employee Performance and
            Engagement
          </p>
          <img
            src="/Client section1.svg"
            alt="company's logo"
            className="mt-20 pt-8 company-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
