"use client";
import React, { useState } from "react";

const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="relative py-12 w-full bg-white">
      <img
        src="/career-left.svg"
        alt="Left Icons"
        className="absolute top-0 left-0 z-0"
      />
      <img
        src="/career-right.svg"
        alt="Right Icons"
        className="absolute top-0 right-0 z-0"
      />
      <div className="container mx-auto text-center z-10 my-20">
        {/* Background heading */}
        <div className="mb-10 relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="md:text-[10rem] absolute font-bold opacity-10 md:top-[-9rem] career-heading">
              CAREERS
            </h1>
            <img
              src="/Active Indicator.svg"
              alt="line"
              className="absolute top-[-20px]"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] z-10">
            Join Us in Creating What's Next
          </h2>
          <p className="text-gray-600 mt-2">
            Discover opportunities to make an impact in a dynamic and
            collaborative environment.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-col space-y-4 mb-8 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
          <button
            className={`px-4 py-2 rounded-full w-full sm:w-auto ${
              activeTab === "All"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("All")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-full w-full sm:w-auto ${
              activeTab === "Design"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("Design")}
          >
            Design
          </button>
          <button
            className={`px-4 py-2 rounded-full w-full sm:w-auto ${
              activeTab === "Development"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("Development")}
          >
            Development
          </button>
          <button
            className={`px-4 py-2 rounded-full w-full sm:w-auto ${
              activeTab === "Sales"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveTab("Sales")}
          >
            Sales
          </button>
        </div>

        {/* Grid of career cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {/* Job 1 */}
          <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 rounded-3xl text-left">
            <h3 className="text-xl font-bold mb-2">UI/UX Designer</h3>
            <p className="text-gray-700">₹50,000 - ₹80,000</p>
            <p className="text-gray-500">Remote | Department</p>
          </div>

          {/* Job 2 */}
          <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 rounded-3xl text-left">
            <h3 className="text-xl font-bold mb-2">Sales Executive</h3>
            <p className="text-gray-700">₹45,000 - ₹75,000</p>
            <p className="text-gray-500">Remote | Department</p>
          </div>

          {/* Job 3 */}
          <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 rounded-3xl text-left">
            <h3 className="text-xl font-bold mb-2">Operations Manager</h3>
            <p className="text-gray-700">₹60,000 - ₹90,000</p>
            <p className="text-gray-500">Location | Department</p>
          </div>

          {/* Job 4 - Repeated UI/UX Designer */}
          <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 rounded-3xl text-left">
            <h3 className="text-xl font-bold mb-2">UI/UX Designer</h3>
            <p className="text-gray-700">₹50,000 - ₹80,000</p>
            <p className="text-gray-500">Remote | Department</p>
          </div>

          {/* Job 5 - Repeated Sales Executive */}
          <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 rounded-3xl text-left">
            <h3 className="text-xl font-bold mb-2">Sales Executive</h3>
            <p className="text-gray-700">₹45,000 - ₹75,000</p>
            <p className="text-gray-500">Remote | Department</p>
          </div>

          {/* Job 6 - Repeated Operations Manager */}
          <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 rounded-3xl text-left">
            <h3 className="text-xl font-bold mb-2">Operations Manager</h3>
            <p className="text-gray-700">₹60,000 - ₹90,000</p>
            <p className="text-gray-500">Location | Department</p>
          </div>

          {/* Job 7 - Repeated UI/UX Designer */}
          <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 rounded-3xl text-left">
            <h3 className="text-xl font-bold mb-2">UI/UX Designer</h3>
            <p className="text-gray-700">₹50,000 - ₹80,000</p>
            <p className="text-gray-500">Remote | Department</p>
          </div>

          {/* Job 8 - Repeated Sales Executive */}
          <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 rounded-3xl text-left">
            <h3 className="text-xl font-bold mb-2">Sales Executive</h3>
            <p className="text-gray-700">₹45,000 - ₹75,000</p>
            <p className="text-gray-500">Remote | Department</p>
          </div>

          {/* Job 9 - Repeated Operations Manager */}
          <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 rounded-3xl text-left">
            <h3 className="text-xl font-bold mb-2">Operations Manager</h3>
            <p className="text-gray-700">₹60,000 - ₹90,000</p>
            <p className="text-gray-500">Location | Department</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
