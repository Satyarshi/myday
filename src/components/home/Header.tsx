"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Import icons
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); // State to handle sidebar visibility
  const [isMobile, setIsMobile] = useState<boolean>(false); // State to track if screen is <= 884px

  // Check screen width and set isMobile state
  useEffect(() => {
    const handleResize = () => {
      // Set mobile state if the screen width is less than or equal to 884px
      setIsMobile(window.innerWidth <= 884);
    };

    // Call once to set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
    setIsSidebarOpen(false); // Close the sidebar when a link is clicked
  };

  const isActive = (linkName: string): string => {
    return activeLink === linkName ? 'text-[#8f04f7]' : 'text-black';
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar visibility
  };

  return (
    <header className="flex justify-between items-center p-4">
      <div className="logo">
        <Image src="/dayone (1) 5.png" alt="My DayOne" width={100} height={100} />
      </div>

      {/* Show Hamburger Icon for screens <= 884px */}
      {isMobile ? (
        <div>
          <button onClick={toggleSidebar}>
            {isSidebarOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      ) : (
        /* Navigation links for larger screens */
        <nav className="flex space-x-12">
          <Link href="#" className={`${isActive('home')} hover:text-[#8f04f7]`} onClick={() => handleLinkClick('home')}>Home</Link>
          <Link href="#" className={`${isActive('analytics')} hover:text-[#8f04f7]`} onClick={() => handleLinkClick('analytics')}>Analytics</Link>
          <Link href="#" className={`${isActive('products')} hover:text-[#8f04f7]`} onClick={() => handleLinkClick('products')}>Products</Link>
          <Link href="#" className={`${isActive('customers')} hover:text-[#8f04f7]`} onClick={() => handleLinkClick('customers')}>Customers</Link>
          <Link href="#" className={`${isActive('support')} hover:text-[#8f04f7]`} onClick={() => handleLinkClick('support')}>Support</Link>
        </nav>
      )}

      {/* Additional buttons for larger screens */}
      {!isMobile && (
        <div className="flex space-x-8 items-center">
          <Link href="#" className="hover:text-purple-600">Sign in</Link>
          <button className="bg-[#7030a0] text-white px-4 py-2 rounded">Start Free</button>
        </div>
      )}

      {/* Sidebar for smaller screens */}
      {isMobile && (
        <div className={`fixed inset-0 bg-white z-50 p-6 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
          {/* Close Icon at the top of the sidebar */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button onClick={toggleSidebar}>
              <AiOutlineClose size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            <Link href="#" className={`${isActive('home')} hover:text-[#8f04f7]`} onClick={() => handleLinkClick('home')}>Home</Link>
            <Link href="#" className={`${isActive('analytics')} hover:text-[#8f04f7]`} onClick={() => handleLinkClick('analytics')}>Analytics</Link>
            <Link href="#" className={`${isActive('products')} hover:text-[#8f04f7]`} onClick={() => handleLinkClick('products')}>Products</Link>
            <Link href="#" className={`${isActive('customers')} hover:text-[#8f04f7]`} onClick={() => handleLinkClick('customers')}>Customers</Link>
            <Link href="#" className={`${isActive('support')} hover:text-[#8f04f7]`} onClick={() => handleLinkClick('support')}>Support</Link>
          </nav>
          <div className="mt-8">
            <Link href="#" className="hover:text-purple-600">Sign in</Link>
            <button className="bg-[#7030a0] text-white px-4 py-2 rounded w-full mt-4">Start Free</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
