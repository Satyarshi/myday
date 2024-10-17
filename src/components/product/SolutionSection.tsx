"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const pages = [
  {
    id: 1,
    heading: "Tailored Products for Every Stage of Development",
    title: "Classic 360 Degrees",
    description:
      "Enhanced integration to streamline your feedback processes and align business outcomes with talent development.",
    stats: [
      { label: "95%", text: "faster implementation of feedback processes." },
      {
        label: "80%",
        text: "of users report better alignment with talent management goals.",
      },
    ],
  },
  {
    id: 2,
    heading: "Tailored Products for Every Stage of Development",
    title: "Next Stage Development",
    description:
      "Enhanced integration to streamline your feedback processes and align business outcomes with talent development.",
    stats: [
      {
        label: "90%",
        text: "improved team collaboration through the feedback loop.",
      },
      {
        label: "85%",
        text: "of users achieve faster upskilling with tailored plans.",
      },
    ],
  },
  {
    id: 3,
    heading: "Tailored Products for Every Stage of Development",
    title: "Future-Ready Platform",
    description:
      "Prepare for future growth with seamless integration of automated solutions for competency development.",
    stats: [
      {
        label: "92%",
        text: "of organizations report faster employee development.",
      },
      {
        label: "88%",
        text: "increased satisfaction with performance assessments.",
      },
    ],
  },
];

const ProgressBars = ({ activePage }: { activePage: number }) => (
  <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
    {pages.map((page, index) => (
      <div
        key={page.id}
        className={`w-1 h-8 md:w-2 md:h-10 rounded-full transition-colors duration-300 ${
          activePage === index + 1 ? "bg-purple-600" : "bg-purple-300"
        }`}
      />
    ))}
  </div>
);

const SectionPage = ({ page, isActive }: { page: any; isActive: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ duration: 0.5 }}
    className="section-page flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8"
  >
    <div className=" relative px-4">
      <img src="/Solutions.svg" alt="skills" className="relative top-4 mt-4 lg:absolute lg:top-[-50px] left-0" />
      <img src="/Active Indicator.svg" alt="line" className="pb-1" />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
        {page.heading}
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold pt-5 text-[#4A4A4A]">
        {page.title}
      </h2>
      <p className="mt-4 text-gray-500">{page.description}</p>
      <div className="mt-4 flex flex-row space-y-0 space-x-4">
        {page.stats.map((stat: any, idx: number) => (
          <div
            key={idx}
            className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-4 rounded-3xl text-left cursor-pointer w-full md:w-80"
          >
            <p className="text-2xl font-bold">{stat.label}</p>
            <p className="text-gray-600">{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full lg:w-1/2 bg-gray-300 rounded-lg flex items-center justify-center h-48 lg:h-auto">
      {/* Placeholder for image */}
      <p className="text-gray-400">Image Placeholder</p>
    </div>
  </motion.div>
);

const SolutionSection = () => {
  const [activePage, setActivePage] = useState(1);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight } = event.currentTarget;
    const pageHeight = clientHeight;
    const newPage = Math.ceil((scrollTop + 1) / pageHeight); // Update page based on scroll position
    setActivePage(newPage);
  };

  return (
    <div className="flex space-x-4 md:space-x-8 px-2 md:px-0">
      {/* Progress Bars */}
      <ProgressBars activePage={activePage} />

      {/* Content Section */}
      <div
        className="overflow-y-scroll h-screen scroll-container w-full"
        onScroll={handleScroll}
      >
        {pages.map((page, index) => (
          <div
            key={page.id}
            className="h-screen flex items-center justify-center"
          >
            <SectionPage page={page} isActive={activePage === index + 1} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionSection;
