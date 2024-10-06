import React, { ReactNode } from "react";
import Header from "@/components/home/Header";
import UnlockPotentialSection from "@/components/home/UnlockPotentialSection";
import ResourceSection from "@/components/products/ResourceSection";

// Define the props for MainLayout
interface MainLayoutProps {
  children: ReactNode; // Type for children prop
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <ResourceSection />
      </section>

      <section className="flex justify-center items-center mt-[-200px] overflow-hidden">
        <UnlockPotentialSection />
      </section>
    </>
  );
};

export default MainLayout;
