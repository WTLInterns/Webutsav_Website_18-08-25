"use client";
import React from 'react';
import Image from 'next/image';
import { FaGoogle, FaCreditCard } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-800 p-10 border-t shadow-md font-inter">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="transform transition-all hover:scale-105">
          <Image src="/next.svg" alt="Digimedia Solutions" width={150} height={50} className="transition-transform duration-300 transform hover:scale-110" />
          <p className="mt-4 text-sm text-gray-700 transition-transform duration-300 transform hover:scale-105 hover:text-blue-700">
            Digimedia Solutions Pvt Ltd is your trusted partner for innovative digital marketing strategies that drive results and elevate your brand.
          </p>
          <div className="flex items-center mt-4 transition-transform duration-300 transform hover:scale-110 hover:text-blue-600">
            <MdEmail className="mr-2 text-gray-800 transition-all duration-300 hover:scale-110" />
            <a href="mailto:info@dmspl.in" className="text-blue-600 hover:underline transition-all duration-300 transform hover:scale-110 hover:text-blue-800">
              info@dmspl.in
            </a>
          </div>
          {/* <div className="flex mt-4 space-x-2 transition-transform duration-300 transform hover:scale-110">
            <FaGoogle size={32} className="text-blue-600 transition-all duration-300 transform hover:scale-125" />
            <Image src="/google-play.png" alt="Google Play" width={100} height={32} className="transition-all duration-300 transform hover:scale-105" />
          </div>
          <div className="flex items-center mt-4 space-x-2 transition-all duration-300 transform hover:scale-110">
            <FaCreditCard size={32} className="text-blue-600 transition-all duration-300 hover:scale-125" />
            <Image src="/qr-code.png" alt="QR Code" width={50} height={50} className="transition-all duration-300 transform hover:scale-105" />
          </div> */}
        </div>

        {/* Our Solution */}
        <div className="transform transition-all hover:scale-105">
          <h3 className="text-xl font-semibold mb-4 text-[#2D3748] hover:text-blue-800 transition-colors duration-300 transform hover:scale-110">
            Our Solution
          </h3>
          <ul className="space-y-2">
            {["Web Designing & Development", "Ecommerce Website Designing", "ERP Development", "Google Adwords", "Search Engine Optimisation", "Local SEO", "Social Media Marketing"].map((item) => (
              <li key={item} className="cursor-pointer p-2 rounded-md transition-all duration-300 hover:bg-blue-100 hover:text-blue-800 transform hover:scale-105">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div className="transform transition-all hover:scale-105">
          <h3 className="text-xl font-semibold mb-4 text-[#2D3748] hover:text-blue-800 transition-colors duration-300 transform hover:scale-110">
            Navigation
          </h3>
          <ul className="space-y-2">
            {["Our Work", "About Company", "Blogs", "Contact Us", "Careers"].map((nav) => (
              <li key={nav} className="cursor-pointer p-2 rounded-md transition-all duration-300 hover:bg-blue-100 hover:text-blue-800 transform hover:scale-105">
                {nav}
              </li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div className="transform transition-all hover:scale-105">
          <h3 className="text-xl font-semibold mb-4 text-[#2D3748] hover:text-blue-800 transition-colors duration-300 transform hover:scale-110">
            Address
          </h3>
          <p className="cursor-pointer p-2 rounded-md transition-all duration-300 hover:bg-blue-100 hover:text-blue-800 transform hover:scale-105">
            Pune - Kharadi
          </p>
        </div>
      </div>

      <div className="border-t border-gray-400 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-700 transition-all duration-300 transform hover:scale-105">
        <p>&copy; {new Date().getFullYear()} Digimedia Solutions | All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link href="/privacy-policy" className="hover:underline hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
            Privacy Policy
          </Link>
          <Link href="/terms-of-use" className="hover:underline hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
