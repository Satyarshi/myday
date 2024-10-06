import React from "react";

const ServiceSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center py-36">
      {/* Background Heading */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="absolute sm:top-6 md:text-[8rem] font-bold opacity-10 form-heading">
          CONNECT
        </h1>
        <img
          src="/Active Indicator.svg"
          alt="line"
          className="pb-1 absolute top-28"
        />
      </div>

      {/* Headline Section */}
      <h1 className="text-4xl font-bold text-black mb-4 text-center">
        Comprehensive Services to Drive Your Success Forward
      </h1>

      {/* Subheading Section */}
      <p className="text-lg text-gray-500 mb-8 max-w-3xl text-center">
        Our innovative tech solutions, 360 and Spark, revolutionize how learning
        is implemented and managed. 360 delivers a comprehensive platform for
        tracking learning progress, ensuring holistic development. Spark is our
        intelligent assistant, designed to enhance engagement, providing
        personalized recommendations that drive tangible outcomes. Together,
        these products empower professionals and organizations to accelerate
        their growth journey.
      </p>

      {/* CTA Button */}
      <button className="bg-[#7030A0] text-white py-3 px-8 rounded-xl mb-12 hover:bg-purple-700">
        Explore Our Services
      </button>

      <img src="/Active Indicator.svg" alt="line" className="my-8" />
      
      {/* Feedback Form Section */}
      <div className="w-full max-w-3xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] p-6 rounded-2xl">
        <form className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold mb-2 text-left">
                First name*
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-left">
                Last name*
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
                required
              />
            </div>
          </div>

          {/* Email and Phone Fields */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold mb-2 text-left">
                Email*
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-left">
                Phone no.*
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
                required
              />
            </div>
          </div>

          {/* Company Name Fields */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold mb-2 text-left">
                Company Name
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-left">
                Company Name
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
              />
            </div>
          </div>

          {/* Services Dropdown */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-left">
              Services are you interested in
            </label>
            <select className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]">
              <option></option>
              {/* Add your options here */}
            </select>
          </div>

          {/* Needs/Challenges Textarea */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-left">
              Tell us more about your needs or challenges
            </label>
            <textarea
              className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
              rows={3}
              placeholder="Start typing here ..."
            ></textarea>
          </div>

          {/* Preferred Contact Method Dropdown */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-left">
              Preferred contact method
            </label>
            <select className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]">
              <option></option>
              {/* Add your options here */}
            </select>
          </div>

          {/* Checkbox */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="agree" required />
            <label htmlFor="agree" className="text-sm">
              I agree to the{" "}
              <a href="#" className="text-blue-500 underline">
                Privacy & Terms
              </a>
              .
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#7030A0] text-white py-3 px-8 rounded-xl hover:bg-purple-700"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ServiceSection;
