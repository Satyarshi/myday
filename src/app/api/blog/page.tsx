import React from "react";
import HeroSection from "@/components/blog/HeroSection";
import BrowsePost from "@/components/blog/BrowsePost";

const Blog: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <HeroSection />
      </section>

      {/* Browse Post Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden pt-0">
        <BrowsePost />
      </section>
    </>
  );
};

export default Blog;
