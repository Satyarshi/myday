"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import Link from Next.js

const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");

  // Define job listings with their URLs
  const jobListings = [
    {
      title: "UI/UX Designer",
      salary: "₹50,000 - ₹80,000",
      location: "Remote | Department",
      link: "/api/careers", // Add a link for this job
    },
    {
      title: "Sales Executive",
      salary: "₹45,000 - ₹75,000",
      location: "Remote | Department",
      link: "/api/careers", // Add a link for this job
    },
    {
      title: "Operations Manager",
      salary: "₹60,000 - ₹90,000",
      location: "Location | Department",
      link: "/api/careers", // Add a link for this job
    },
    // Duplicate job listings, ensure to update links accordingly
    {
      title: "UI/UX Designer",
      salary: "₹50,000 - ₹80,000",
      location: "Remote | Department",
      link: "/api/careers", // Add a link for this job
    },
    {
      title: "Sales Executive",
      salary: "₹45,000 - ₹75,000",
      location: "Remote | Department",
      link: "/api/careers", // Add a link for this job
    },
    {
      title: "Operations Manager",
      salary: "₹60,000 - ₹90,000",
      location: "Location | Department",
      link: "/api/careers", // Add a link for this job
    },
    {
      title: "UI/UX Designer",
      salary: "₹50,000 - ₹80,000",
      location: "Remote | Department",
      link: "/api/careers", // Add a link for this job
    },
    {
      title: "Sales Executive",
      salary: "₹45,000 - ₹75,000",
      location: "Remote | Department",
      link: "/api/careers", // Add a link for this job
    },
    {
      title: "Operations Manager",
      salary: "₹60,000 - ₹90,000",
      location: "Location | Department",
      link: "/api/careers", // Add a link for this job
    },
  ];

  return (
    <section className="relative py-12 w-full bg-white">
      <div className="relative container mx-auto text-center z-10 my-20">
        <img
          src="/employees-placeholder.svg"
          alt="img1"
          className="absolute top-[-143px] left-[120px] z-0 cimg1"
        />
        <img
          src="/employees-placeholder (1).svg"
          alt="img1"
          className="absolute top-[-110px] left-[250px] z-0 cimg2"
        />
        <img
          src="/employees-placeholder (2).svg"
          alt="img1"
          className="absolute top-[0px] left-[120px] z-0 cimg3"
        />
        <img
          src="/employees-placeholder (3).svg"
          alt="img1"
          className="absolute top-[-143px] right-[200px] z-0 cimg4"
        />
        <img
          src="/employees-placeholder (4).svg"
          alt="img1"
          className="absolute top-[-50px] right-[100px] z-0 cimg5"
        />
        <img
          src="/employees-placeholder (5).svg"
          alt="img1"
          className="absolute top-0 right-[250px] z-0 cimg6"
        />
        {/* Background heading */}
        <div className="mb-10 relative">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* <h1 className="md:text-[10rem] absolute font-bold opacity-10 md:top-[-9rem] career-heading">
              CAREERS
            </h1> */}
            <img
              src="/Careers.svg"
              alt="careers"
              className="absolute top-[-50px]"
            />
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
          {jobListings.map((job, index) => (
            <Link key={index} href={job.link}>
              <div
                className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 rounded-3xl text-left cursor-pointer" // Added cursor-pointer for better UX
              >
                <h3 className="text-xl font-bold mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-700">{job.salary}</p>
                <p className="text-gray-500">{job.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
