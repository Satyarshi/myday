import React from "react";
import Footer from "./Footer";

const UnlockPotentialSection: React.FC = () => {
  return (
    <div className="flex flex-col w-full potential">
      <section className="relative h-[900px] flex flex-col items-center justify-center text-center py-12 w-full">
        <div className="w-[70%] mx-auto relative mt-52">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/cta_component.svg"
              alt="Purple Background"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* Text Content */}
          <div className="relative py-16 px-8 rounded-xl">
            <div className="mb-4">
              <button className="bg-white text-purple-700 font-semibold px-4 py-2 rounded-full">
                Start today
              </button>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Unlock Your Potential
            </h1>
            <p className="text-lg text-white mb-6 max-w-xl mx-auto">
              Tristique mauris tristique nam tincidunt vitae quis erat dictum.
              Diam diam maecenas tempor molestie risus eu.
            </p>
            <button className="bg-purple-500 text-white font-semibold px-6 py-3 rounded-xl">
              Join Us
            </button>
          </div>
        </div>
      </section>

      {/* Adding the Footer component */}
      <div className="z-0">
        <Footer />
      </div>
    </div>
  );
};

export default UnlockPotentialSection;
