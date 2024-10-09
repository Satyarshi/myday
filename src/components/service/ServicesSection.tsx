import React from "react";

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Learning Analytics",
      description:
        "Actionable insights that help measure the effectiveness of learning programs.",
      icon: "/learning-analytics.svg",
      gradient: "bg-gradient-to-b from-blue-100 to-transparent",
    },
    {
      title: "Upskilling",
      description:
        "Equip employees with the skills they need to succeed in an ever-changing landscape.",
      icon: "/upskilling.svg",
      gradient: "bg-gradient-to-b from-blue-50 to-transparent",
    },
    {
      title: "Leadership Development",
      description: "Foster leadership capabilities with tailored programs.",
      icon: "/leadership-development.svg",
      gradient: "bg-gradient-to-b from-pink-100 to-transparent",
    },
    {
      title: "Onboarding",
      description:
        "Seamless integration of new hires into your workforce, with personalized learning paths.",
      icon: "/onboarding.svg",
      gradient: "bg-gradient-to-b from-yellow-100 to-transparent",
    },
    {
      title: "Performance Management",
      description:
        "Data-driven tools to track and improve employee performance.",
      icon: "/performance-management.svg",
      gradient: "bg-gradient-to-b from-red-100 to-transparent",
    },
    {
      title: "Continuous Learning",
      description:
        "Ensure employees are constantly improving with our ongoing learning solutions.",
      icon: "/continuous-learning.svg",
      gradient: "bg-gradient-to-b from-green-100 to-transparent",
    },
  ];

  return (
    <div className="relative py-12">
      {/* Background Text */}
      <div className="absolute left-0 right-0 flex flex-col items-center justify-center top-0">
        {/* <h1 className="absolute md:top-[-20px] md:text-[8rem] font-bold opacity-10 service-heading">
          SERVICES
        </h1> */}
        <img src="/Services.svg" alt="services" className="absolute top-5 service-heading"/>
        <img
          src="/Active Indicator.svg"
          alt="line"
          className="absolute pb-1 top-16"
        />
      </div>
      {/* Foreground Content */}
      <div className="flex flex-col items-center text-center pt-8 pb-16">
        <h1 className="text-[#000] text-4xl md:text-5xl font-bold">
          Holistic Solutions for Every Talent Need
        </h1>
        <p className="text-gray-500 text-sm sm:text-lg mt-4 max-w-3xl">
          From onboarding to performance management, MyDayOne’s suite of
          services ensures that every aspect of talent development is covered.
          We provide comprehensive solutions that are data-driven, customizable,
          and scalable to meet the ever-evolving needs of businesses.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 transition-all duration-300 ${service.gradient} hover:shadow-lg rounded-xl hover:cursor-pointer`}
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-12 w-12"
                />
              </div>
              <h2 className="text-lg font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-500 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
