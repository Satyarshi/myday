"use client";
import React, { useState } from "react";

const OfferingSection: React.FC = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState<string>("Products");

  return (
    <section className="relative py-14 offer-section">
      {/* Background Image */}
      <div>
        <img
          src="/Rectangle.svg"
          alt="Background Pattern"
          className="w-full object-cover client"
        />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        {/* <h1 className="absolute top-40 text-[8rem] font-bold opacity-10 skills-heading offering">
          OFFERING
        </h1> */}
        <img src="/Active Indicator.svg" alt="line" className="pb-1" />
        <div className="relative text-center pt-15">
          <img src="/Offerings.svg" alt="offering" className="absolute left-1/2 transform -translate-x-1/2 z-0 top-[-40px]" />
          {/* Title Section */}
          <div className="mb-10">
            <h2 className="text-5xl font-bold text-[#111827] offer-title">
              Primary Areas We Excel in to Serve You
            </h2>
          </div>

          {/* Tabs Section */}
          <div className="mb-10">
            <div className="flex justify-center gap-4 sm:gap-8 text-base sm:text-2xl">
              {/* Tab Buttons */}
              {["Products", "Services", "Learning Resources"].map((tab) => (
                <button
                  key={tab}
                  className={`${
                    activeTab === tab
                      ? "text-[#9C27B0] border-b-4 border-[#9C27B0] font-semibold pb-2 rounded-md"
                      : "text-[#7B7E85] font-semibold hover:text-[#9C27B0] pb-2"
                  }`}
                  onClick={() => setActiveTab(tab)} // Update the active tab on click
                >
                  {tab}
                </button>
              ))}
            </div>
            <hr className="w-[50%] mx-auto" />
          </div>

          {/* Description */}
          <p className="text-center text-[#7B7E85] max-w-2xl mx-auto mb-8 text-base sm:text-lg">
            Our innovative tech solutions, 360 and Spark, revolutionize how
            learning is implemented and managed. 360 delivers a comprehensive
            platform for tracking learning progress, ensuring holistic
            development. Spark is our intelligent assistant, designed to enhance
            engagement, providing personalized recommendations that drive
            tangible outcomes. Together, these products empower professionals
            and organizations to accelerate their growth journey.
          </p>

          {/* Product Interface Image */}
          <div className="flex justify-center mt-8">
            <img src="/Bitmap.png" alt="Product Interface" className="offer-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingSection;
