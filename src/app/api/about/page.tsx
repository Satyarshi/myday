import React from "react";
import BlogsSection from "@/components/about/BlogsSection";
import ClientSection from "@/components/home/ClientSection";
import ServiceSection from "@/components/about/ServicesSection";
import SkillsSection from "@/components/about/SkillsSection";

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <BlogsSection />
      </section>

      {/* Client Section */}
      <section className="overflow-hidden">
        <ClientSection />
      </section>

      {/* Services Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <ServiceSection />
      </section>

      {/* Services Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <SkillsSection />
      </section>
    </>
  );
};

export default About;
