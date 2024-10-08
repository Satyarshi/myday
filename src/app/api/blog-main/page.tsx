import React from "react";
import HeroSection from "@/components/blog-main/HeroSection";
import BlogSection from "@/components/blog-main/BlogSection";

const BlogMain: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <HeroSection />
      </section>

      {/* Blog Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <BlogSection />
      </section>
    </>
  );
};

export default BlogMain;
