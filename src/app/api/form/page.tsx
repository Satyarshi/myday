import React from "react";
import ServiceSection from "@/components/form/ServiceSection";

const Form: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center p-4 overflow-hidden">
        <ServiceSection />
      </section>
    </>
  );
};

export default Form;
