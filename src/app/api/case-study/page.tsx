import React from "react";
import HeroSection from "@/components/case-study/HeroSection";
import ProblemSection from "@/components/case-study/ProblemSection";
import SolutionSection from "@/components/case-study/SolutionSection";
import ResultSection from "@/components/case-study/ResultSection";

const CaseStudy: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <HeroSection />
      </section>

      {/* Problem Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <ProblemSection />
      </section>

      {/* Solution Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <SolutionSection />
      </section>

      {/* Result Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <ResultSection />
      </section>
    </>
  );
};

export default CaseStudy;
