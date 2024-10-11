"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation"; // Import usePathname

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 884);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
    setIsDropdownOpen(false);
  };

  // Determine if a link is active based on the current route
  const isActive = (linkPath: string): string => {
    if (linkPath === "/api/products") {
      return pathname.startsWith("/api/product")
        ? "text-[#8f04f7]"
        : "text-black";
    }
    return pathname === linkPath ? "text-[#8f04f7]" : "text-black";
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex justify-between items-center p-4">
      <div className="logo">
        <Image
          src="/dayone (1) 5.png"
          alt="My DayOne"
          width={100}
          height={100}
        />
      </div>

      {isMobile ? (
        <div>
          <button onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
      ) : (
        <nav className="flex space-x-12">
          <Link
            href="/"
            className={`${isActive("/")} hover:text-[#8f04f7]`}
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            href="/api/about"
            className={`${isActive("/api/about")} hover:text-[#8f04f7]`}
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            href="/api/service"
            className={`${isActive("/api/service")} hover:text-[#8f04f7]`}
            onClick={handleLinkClick}
          >
            Service
          </Link>

          {/* Products with Dropdown */}
          <div className="relative">
            <button
              className={`${isActive("/api/products")} hover:text-[#8f04f7]`}
              onClick={toggleDropdown}
            >
              Products
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white border rounded shadow-lg z-20">
                <Link
                  href="/api/product"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={handleLinkClick}
                >
                  SPARCLE
                </Link>
                <Link
                  href="/api/products"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={handleLinkClick}
                >
                  tru360
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/api/careers-main"
            className={`${isActive("/api/careers-main")} hover:text-[#8f04f7]`}
            onClick={handleLinkClick}
          >
            Careers
          </Link>
          <Link
            href="/api/blog"
            className={`${isActive("/api/blog")} hover:text-[#8f04f7]`}
            onClick={handleLinkClick}
          >
            Blog
          </Link>
        </nav>
      )}

      {!isMobile && (
        <div className="flex space-x-8 items-center">
          <Link href="#" className="hover:text-purple-600">
            Sign in
          </Link>
          <Link href="/api/form">
            <button className="bg-[#7030a0] text-white px-4 py-2 rounded">
              Start Free
            </button>
          </Link>
        </div>
      )}

      {isMobile && (
        <div
          className={`fixed inset-0 bg-white z-50 p-6 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button onClick={toggleSidebar}>
              <AiOutlineClose size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`${isActive("/")} hover:text-[#8f04f7]`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              href="/api/about"
              className={`${isActive("/api/about")} hover:text-[#8f04f7]`}
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              href="/api/service"
              className={`${isActive("/api/service")} hover:text-[#8f04f7]`}
              onClick={handleLinkClick}
            >
              Service
            </Link>

            {/* Mobile version of the Products dropdown */}
            <div className="relative">
              <button
                className={`${isActive("/api/products")} hover:text-[#8f04f7]`}
                onClick={toggleDropdown}
              >
                Products
              </button>

              {isDropdownOpen && (
                <div className="mt-2 space-y-2">
                  <Link
                    href="/api/product"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    SPARCLE
                  </Link>
                  <Link
                    href="/api/products"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    tru360
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/api/careers-main"
              className={`${isActive(
                "/api/careers-main"
              )} hover:text-[#8f04f7]`}
              onClick={handleLinkClick}
            >
              Careers
            </Link>
            <Link
              href="/api/blog"
              className={`${isActive("/api/blog")} hover:text-[#8f04f7]`}
              onClick={handleLinkClick}
            >
              Blog
            </Link>
          </nav>
          <div className="mt-8">
            <Link href="#" className="hover:text-purple-600">
              Sign in
            </Link>
            <button className="bg-[#7030a0] text-white px-4 py-2 rounded w-full mt-4">
              Start Free
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
