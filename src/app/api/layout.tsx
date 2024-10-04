import React, { ReactNode } from "react";
import Header from "@/components/home/Header";
import UnlockPotentialSection from "@/components/home/UnlockPotentialSection";

// Define the props for MainLayout
interface MainLayoutProps {
  children: ReactNode; // Type for children prop
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <section className="flex justify-center items-center mt-[-200px] overflow-hidden">
        <UnlockPotentialSection />
      </section>
    </>
  );
};

export default MainLayout;
