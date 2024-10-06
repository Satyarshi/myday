import React from "react";
import HeroSection from "@/components/careers-main/Herosection";
const CareersMain: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <HeroSection />
      </section>
    </>
  );
};

export default CareersMain;
