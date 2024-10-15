"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ScrollProgress = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [filledHeights, setFilledHeights] = useState([0, 0, 0]);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const sectionHeight = 50; // Adjust this based on your page height
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const section = sectionRef.current;

    if (section) {
      const { top, height } = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate how much of the section has been scrolled
      const position = Math.max(0, viewportHeight - top);
      setScrollPosition((position / height) * 100); // Normalize it to percentage
      setScrollDirection(position > scrollPosition ? "down" : "up");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const calculateProgress = (divStart: number, divEnd: number) => {
    if (scrollPosition < divStart) return 0;
    if (scrollPosition > divEnd) return 100;
    return ((scrollPosition - divStart) / (divEnd - divStart)) * 100;
  };

  useEffect(() => {
    // Update active section and filled heights based on scroll position
    setFilledHeights((prevHeights) => {
      return prevHeights.map((_, i) => {
        const divStart = i * sectionHeight;
        const divEnd = (i + 1) * sectionHeight;
        const progress = calculateProgress(divStart, divEnd);

        if (progress > 0 && progress < 100) {
          setActiveSection(i);
        }
        return Math.max(0, Math.min(progress, 100));
      });
    });
  }, [scrollPosition]);

  // Framer Motion variants for animations
  const contentVariants = {
    hidden: { opacity: 0, y: scrollDirection === "down" ? 100 : -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={sectionRef} className="py-12 w-full bg-white">
      <div className="w-full flex gap-10">
        {/* Left Side: Progress bars */}
        <div className="flex flex-col items-center">
          {filledHeights.map((height, index) => (
            <div
              className="w-2 h-[320px] bg-[#9030A069] relative mt-8"
              key={index}
            >
              <motion.div
                className="bg-[#9030A0] w-full absolute left-0"
                style={{ height: `${height}%` }}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 0.9 }}
              />
            </div>
          ))}
        </div>

        {/* Right Side: Main Content */}
        <motion.div
          key={activeSection}
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          transition={{ duration: 0.9 }}
          // Conditionally apply alignment classes based on activeSection
          className={`flex flex-col md:flex-row ${
            activeSection === 0
              ? "items-start"
              : activeSection === 1
              ? "items-center"
              : "items-end"
          }`}
        >
          <div className="flex flex-col items-start">
            {/* Section Content based on activeSection */}
            {activeSection === 0 && <SectionContent1 />}
            {activeSection === 1 && <SectionContent />}
            {activeSection === 2 && <SectionContent1 />}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Other components remain unchanged
// SectionContent Component to reduce repetition
const SectionContent = () => (
  <div className="flex flex-col mt-4">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.9 }}
      className="flex justify-around"
    >
      <div className="w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4 md:mb-0 md:mr-8">
          Tailored Products for Every Stage of Development
        </h2>
        <h2 className="text-2xl font-bold text-[#4A4A4A] my-5">
          Classic 360 Degrees
        </h2>
        <p className="text-gray-600 mt-2">
          A fully digitalized platform offering customizable workflows,
          automatic notifications, and easy integration. Perfect for companies
          seeking to optimize 360-degree assessments for skill and competency
          development.
        </p>
        <div className="flex mt-8 space-x-4">
          <StatCard
            percentage="95%"
            text="faster implementation of feedback processes."
          />
          <StatCard
            percentage="80%"
            text="of users report better alignment with talent management goals."
          />
        </div>
      </div>
      <img src="/feature_img.svg" alt="img" className="w-1/3" />
    </motion.div>
  </div>
);

const SectionContent1 = () => (
  <div className="mt-4">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.9 }}
      className="flex justify-around flex-wrap w-full"
    >
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4 md:mb-0 md:mr-8">
          Tailored Products for Every Stage of Development
        </h2>
        <h2 className="text-2xl font-bold text-[#4A4A4A] my-5">
          Classic 360 Degrees
        </h2>
        <p className="text-gray-600 mt-2">
          A fully digitalized platform offering customizable workflows,
          automatic notifications, and easy integration. Perfect for companies
          seeking to optimize 360-degree assessments for skill and competency
          development.
        </p>
        <div className="flex mt-8 space-x-4 flex-wrap">
          <StatCard
            percentage="95%"
            text="faster implementation of feedback processes."
          />
          <StatCard
            percentage="80%"
            text="of users report better alignment with talent management goals."
          />
        </div>
      </div>
      <img
        src="/feature_img.svg"
        alt="img"
        className="w-full md:w-1/3 mt-8 md:mt-0"
      />
    </motion.div>
  </div>
);


// Reusable StatCard Component
const StatCard = ({
  percentage,
  text,
}: {
  percentage: string;
  text: string;
}) => (
  <div className="bg-white rounded-lg p-4 text-left shadow-md w-56">
    <p className="text-3xl font-bold text-black">{percentage}</p>
    <p className="text-gray-600">{text}</p>
  </div>
);

export default ScrollProgress;
