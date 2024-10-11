import React from "react";
import HeroSection from "@/components/home/HeroSection";
import Header from "@/components/home/Header";
import ClientSection from "@/components/home/ClientSection";
import BlogsSection from "@/components/home/BlogSection";
import FeatureSection from "@/components/home/FeatureSection";
import OfferingSection from "@/components/home/OfferingSection";
import SkillsSection from "@/components/home/SkillsSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import WhoSection from "@/components/home/WhoSection";
import UnlockPotentialSection from "@/components/home/UnlockPotentialSection";

const Home: React.FC = () => {
  return (
    <>
       <Header />

       {/* Hero Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <HeroSection />
      </section>

      {/* Client Section */}
      <section className="overflow-hidden">
        <ClientSection />
      </section>

      {/* Stats Section */}
      <section className="flex justify-center items-center p-10 overflow-hidden">
        <StatsSection />
      </section>

       {/* Skills Section */}
       <section className="flex justify-center items-center p-10 overflow-hidden">
        <SkillsSection />
      </section>

      {/* Feature Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <FeatureSection />
      </section>

      {/* Who Section */}
      <section className="flex justify-center items-center p-10 overflow-hidden">
        <WhoSection />
      </section>

      {/* Offerings Section */}
      <section className="overflow-hidden">
        <OfferingSection />
      </section>

      {/* Testimonial Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <TestimonialSection />
      </section>

      {/* Blogs Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <BlogsSection />
      </section>

      {/* Potential Section */}
      <section className="flex justify-center items-center mt-[-200px] overflow-hidden">
        <UnlockPotentialSection />
      </section>

    </>
  );
};

export default Home;
