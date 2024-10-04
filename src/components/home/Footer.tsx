import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section relative py-12 w-full text-white">
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start mt-36 px-10 footer">
        {/* Logo and Address */}
        <div className="flex flex-col mr-5">
          <img src="/footer-logo.svg" alt="myDayOne" className="mb-4 w-52" />
          <p className="text-sm leading-6 pl-4">
            405/406, Bliss Tower, Citi of Joy, <br />
            Mulund West, Mumbai
          </p>
        </div>

        {/* Company */}
        <div className="flex justify-between gap-12 pl-4 company">
          <div>
            <h3 className="font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li>Donec dignissim</li>
              <li>Curabitur egestas</li>
              <li>Nam posuere</li>
              <li>Aenean facilisis</li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              <li>Cras convallis</li>
              <li>Vestibulum faucibus</li>
              <li>Quisque lacinia purus</li>
              <li>Aliquam nec ex</li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li> Suspendisse porttitor</li>
              <li>Nam posuere</li>
              <li>Curabitur egestas</li>
            </ul>
          </div>
        </div>

        {/* Social Media and Language Dropdown */}
        <div className="social-media flex flex-col gap-4 pl-4">
          <div className="flex gap-4 mb-4">
            <a href="#" className="social-icon">
              <img src="/facebook.svg" alt="Facebook" className="w-10" />
            </a>
            <a href="#" className="social-icon">
              <img src="/linkedin.svg" alt="LinkedIn" className="w-10" />
            </a>
            <a href="#" className="social-icon">
              <img src="/twitter.svg" alt="Twitter" className="w-10" />
            </a>
            <a href="#" className="social-icon">
              <img src="/insta.svg" alt="Instagram" className="w-10" />
            </a>
          </div>

          {/* Language Dropdown */}
          <div className="language-selector">
            <button className="bg-white text-purple-700 font-semibold px-4 py-2 rounded-full">
              <img
                src="/android-globe.svg"
                alt="Language"
                className="inline mr-2"
              />
              English - En
              <img
                src="/chevron-down.svg"
                alt="Dropdown"
                className="inline ml-8"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
