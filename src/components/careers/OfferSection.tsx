import React from "react";

const OfferSection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-evenly items-start px-8 py-16 space-y-12 lg:space-y-0 lg:space-x-12">
      {/* Left Column: Problem Section */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-semibold text-black mb-6">
          What We Offer
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas quia
          cum odio maxime! Error cupiditate unde eaque, voluptatem debitis iusto
          recusandae eius atque est repellendus voluptas perspiciatis ex
          suscipit fuga, temporibus eos! Labore obcaecati, totam recusandae
          dolorem tenetur, et iure, illo optio natus ratione aliquam ad autem
          sapiente in impedit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptas quis temporibus animi quae iste quidem,
          nostrum delectus unde corporis praesentium soluta quam et ipsam
          repellendus. Perspiciatis libero natus quae doloremque. Nemo dolore
          quod, dicta ut ipsam blanditiis a, dolorum quo illum recusandae
          perspiciatis vel vero ab incidunt impedit! Quisquam, sed?
        </p>

        {/* List Section */}
        <div className="bg-[#7030A0] text-white p-6 rounded-2xl">
          <ul className="space-y-4 list-disc list-inside">
            <li>Sed iaculis aenean sit sed risus arcu vitae integer elit.</li>
            <li>Sed iaculis aenean sit sed risus arcu vitae integer elit.</li>
            <li>Sed iaculis aenean sit sed risus arcu vitae integer elit.</li>
          </ul>
        </div>
      </div>

      {/* Right Column: Application Form */}
      <div className="lg:w-1/3 w-full bg-white">
        <h2 className="text-2xl font-semibold mb-6">Apply</h2>
        <form className="shadow-[0_4px_12px_rgba(0,0,0,0.2)] rounded-2xl p-8">
          <div className="mb-4">
            <label className="block text-[#344346] font-semibold text-sm mb-2" htmlFor="firstName">
              First name
            </label>
            <input
              className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
              type="text"
              id="firstName"
              name="firstName"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#344346] font-semibold text-sm mb-2" htmlFor="lastName">
              Last name
            </label>
            <input
              className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
              type="text"
              id="lastName"
              name="lastName"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#344346] font-semibold text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
              type="email"
              id="email"
              name="email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#344346] font-semibold text-sm mb-2" htmlFor="cv">
              CV
            </label>
            <input
              className="w-full p-3 rounded-xl bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#7030A0]"
              type="file"
              id="cv"
              name="cv"
              accept="application/pdf"
            />
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-[#344346]">
                I agree to the{" "}
                <a href="#" className="text-blue-500">
                  Privacy & Terms
                </a>
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#7030A0] text-white p-3 hover:bg-purple-700 transition-colors shadow-[0_4px_12px_rgba(0,0,0,0.2)] rounded-2xl"
          >
            Apply now
          </button>
        </form>
      </div>
    </section>
  );
};

export default OfferSection;
