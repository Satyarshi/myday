import React from "react";
import HeroSection from "@/components/case-study/HeroSection";
import ProblemSection from "@/components/case-study/ProblemSection";
import TextSection from "@/components/case-study/SolutionSection";
import { caseStudySolution,caseStudyResult } from "@/components/Data";

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
        <TextSection
          title={caseStudySolution.title}
          description={caseStudySolution.description}
          listItems={caseStudySolution.listItems}
          additionalText={caseStudySolution.additionalText}
        />
      </section>

      {/* Result Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
      <TextSection
          title={caseStudyResult.title}
          description={caseStudyResult.description}
          listItems={caseStudyResult.listItems}
          additionalText={caseStudyResult.additionalText}
        />
      </section>
    </>
  );
};

export default CaseStudy;
