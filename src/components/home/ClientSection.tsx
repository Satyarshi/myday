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

      {/* Foreground Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-start top-0">
        <div className="relative flex flex-col items-center top-12 text-center md:top-20 lg:top-20 sm:top-20">
          {/* Centered "Our clients" Image */}
          <div className="relative">
            <img
              src="/Our clients.svg"
              alt="clients"
              className="absolute left-1/2 transform -translate-x-1/2 z-0 top-[-30px]"
            />
            {/* "Trusted by Leading Brands" Text */}
            <h1 className="text-[#EBE6FA] text-4xl md:text-5xl lg:text-6xl font-bold z-10">
              Trusted by Leading Brands
            </h1>
          </div>

          {/* Paragraph and Logos */}
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
