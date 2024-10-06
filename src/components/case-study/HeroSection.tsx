import React from "react";
import { BlurCase } from "../BlurCase";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center py-20">
      {/* Headline Section */}
      <h1 className="text-4xl font-bold text-black mb-4">
        Managing business data has never been easier
      </h1>

      {/* Subheading Section */}
      <p className="text-lg text-gray-500 mb-8 max-w-3xl">
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything.
      </p>

      <div className="mt-32">
        <BlurCase />
      </div>
    </section>
  );
};

export default HeroSection;
