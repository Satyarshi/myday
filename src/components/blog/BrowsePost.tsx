"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import Link from Next.js

const BrowsePost: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");

  const blogPosts = [
    {
      title: "The Future of Remote Work and Hybrid Teams",
      author: "Jaroslav Dlasik",
      category: "Category",
      time: "12 min",
      link: "/api/blog-main", // Example URL for blog post
    },
    {
      title: "Top Leadership Strategies for Building Strong Teams",
      author: "Anna Smith",
      category: "Leadership",
      time: "8 min",
      link: "/api/blog-main", // Example URL for blog post
    },
    {
      title: "How Technology is Shaping Employee Engagement",
      author: "John Doe",
      category: "Tech",
      time: "15 min",
      link: "/api/blog-main", // Example URL for blog post
    },
    {
      title: "The Future of Remote Work and Hybrid Teams",
      author: "Jaroslav Dlasik",
      category: "Category",
      time: "12 min",
      link: "/api/blog-main", // Example URL for blog post
    },
    {
      title: "Top Leadership Strategies for Building Strong Teams",
      author: "Anna Smith",
      category: "Leadership",
      time: "8 min",
      link: "/api/blog-main", // Example URL for blog post
    },
    {
      title: "How Technology is Shaping Employee Engagement",
      author: "John Doe",
      category: "Tech",
      time: "15 min",
      link: "/api/blog-main", // Example URL for blog post
    },
    // Additional posts
  ];

  const tabs = ["All", "Design", "Development", "Business"];

  return (
    <section className="relative pb-12 w-full bg-white">
      <div className="container mx-auto text-center my-10 pt-20">
        <h1 className="text-[#000] text-4xl md:text-5xl font-bold">
          Browse Our Blog Posts
        </h1>
        <p className="text-gray-500 text-sm sm:text-lg mt-4 mb-8">
          Discover posts from a variety of categories to expand your knowledge.
        </p>

        {/* Filter tabs */}
        <div className="flex flex-col space-y-4 mb-8 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full w-full sm:w-auto ${
                activeTab === tab
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Blog post grid */}
        <div className="flex justify-center gap-8 mt-10 flex-wrap text-justify relative z-30">
          {blogPosts.map((post, index) => (
            <Link key={index} href={post.link}>
              <div className="w-[300px] p-4 bg-gray-100 rounded-3xl shadow-md cursor-pointer hover:shadow-lg transition">
                <div className="h-[180px] w-full bg-gray-300 rounded-2xl mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder-image.svg"
                    alt="Placeholder"
                    className="opacity-50"
                  />
                </div>
                <h2 className="text-md font-semibold mb-2 w-[80%]">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm flex justify-between w-[80%] font-semibold">
                  {post.author} · {post.category} · {post.time}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowsePost;
