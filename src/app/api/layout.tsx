"use client"
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import Header from "@/components/home/Header";
import UnlockPotentialSection from "@/components/home/UnlockPotentialSection";
import ResourceSection from "@/components/products/ResourceSection";

// Define the props for MainLayout
interface MainLayoutProps {
  children: ReactNode; // Type for children prop
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const pathname = usePathname(); // Get the current pathname
  const isBlogPage = pathname.includes("/blog"); // Check if the current route is for the blog page

  return (
    <>
      <Header />
      {children}
      
      {/* Conditionally render ResourceSection if not on the blog page */}
      {!isBlogPage && (
        <section className="flex justify-center items-center p-4 overflow-hidden">
          <ResourceSection />
        </section>
      )}

      <section className="flex justify-center items-center mt-[-200px] overflow-hidden">
        <UnlockPotentialSection />
      </section>
    </>
  );
};

export default MainLayout;
