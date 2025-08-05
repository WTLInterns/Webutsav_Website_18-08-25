// Products Page: shows 3 product cards as requested
'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';

// Product data array
const products = [
  {
    title: 'HRM',
    // Product link for HRM:
    link: 'https://managifyhr.com/', 
    // Product image (update path as needed):
    image: '/images/HRM Logo.png',
    // Product description:
    description: 'A comprehensive HR management solution for modern businesses.',
  },
  {
    title: 'Whatsapp CRM',
    // Product link for Whatsapp CRM:
    link: 'https://testuinnovation.com/register',
    image: '/images/Webutsav (3) (1).jpeg',
    description: 'CRM tool to manage your WhatsApp leads and conversations efficiently.',
  },
  {
    title: 'Route Budget',
    // Product link for Rout Budget:
    link: 'https://routebudget.com',
    image: '/images/Route budget.jpg',
    description: 'Route planning and budgeting made easy for Fleet Management.',
  },
];

export default function ProductsPage() {
  // GSAP animated hero refs
  const pRef = useRef(null);
  const h2Ref = useRef(null);

  // Animate hero section on mount
  useEffect(() => {
    if (pRef.current && h2Ref.current) {
      const tl = gsap.timeline();
      tl.fromTo(
        pRef.current.children,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: 'power3.out' }
      );
      tl.fromTo(
        h2Ref.current.children,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: 'power3.out' },
        '-=0.5'
      );
    }
  }, []);

  // Framer Motion animation variants for entrance and hover
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18 } },
  };
  // Card entrance animation: fade-in, pronounced slide-up, zoom, and slight rotate
  const cardVariants = {
    hidden: { opacity: 0, y: 70, scale: 0.88, rotate: -4 },
    show: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { type: 'spring', bounce: 0.45, duration: 0.85 } },
  };

  // Hero section text
  const pText = '— Our Products';
  const h2Text = 'Discover Our Powerful Solutions!';

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Animated Hero Section */}
      <div
        className="relative w-full h-[60vh] sm:h-[60vh] flex items-center px-4 sm:px-8 lg:px-16"
        style={{
          backgroundImage: "url('/images/aboutus.jpg')",        
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="max-w-lg sm:max-w-xl lg:max-w-2xl text-left">
          {/* Animated P (— Our Products) */}
          <p ref={pRef} className="text-yellow-400 font-bold text-lg sm:text-xl md:text-2xl mb-2">


          {/* {pText.split('').map((letter, index) => (
              <span key={index} className="inline-block">{letter}</span> */}



            {pText.split(' ').map((word, i) => (
              <span key={i} className={i !== 0 ? 'ml-4 inline-block' : 'inline-block'}>{word}</span>
            ))}
          </p>




          {/* Animated H2 (Discover Our Powerful Solutions!) */}
          <h2 ref={h2Ref} className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
            {h2Text.split(' ').map((word, index) => (
              <span key={index} className="inline-block mr-2">{word}</span>
            ))}
          </h2>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="py-12 px-4">
        <div className="container mx-auto flex flex-col items-center">
          <motion.div
            className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {products.map((product, idx) => (
              <motion.a
                key={product.title}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={{
                  scale: 1.06,
                  rotate: -2,
                  boxShadow: "0 12px 48px 0 rgba(245, 158, 66, 0.22)", // deeper amber glow
                  borderColor: "#f59e42", // amber border
                  color: "#b45309", // subtle text color change
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 16, duration: 0.24 }}
                className="bg-gradient-to-br from-white via-amber-50 to-amber-100 shadow-2xl rounded-3xl border border-amber-100 p-8 m-4 flex flex-col items-center justify-center cursor-pointer w-80 h-[400px] sm:w-80 sm:h-[400px] mx-auto font-sans text-center hover:shadow-amber-300 hover:border-amber-400 transition-all duration-300 ease-in-out group relative overflow-hidden"
                style={{ textDecoration: 'none' }}
              >
                {/* Interactive BADGE for HRM */}
                {/* {product.title === 'HRM' && (
                  <span className="absolute top-4 left-4 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse z-10">
                    NEW
                  </span>
                )} */}
                {/* Product Image */}
                <div className="w-20 h-20 mb-4 relative flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.title + ' logo'}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded"
                    sizes="80px"
                    priority
                  />
                </div>
                {/* Product Title */}
                <h2 className="text-xl font-semibold text-gray-800 text-center mb-2 group-hover:text-amber-700 transition-colors duration-300">
                  {product.title}
                </h2>
                {/* Product Description */}
                <p className="text-gray-600 text-center text-base mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {product.description}
                </p>
                {/* Overlay gradient and CTA on hover */}
                <span
                  className="mt-auto px-6 py-2 rounded-full bg-amber-400 text-white font-bold shadow hover:bg-amber-500 transition-all duration-300 z-10"
                  style={{ fontSize: 16 }}
                >
                  Learn More
                </span>
                {/* Overlay: subtle gradient appears on hover */}
                <span className="absolute inset-0 bg-gradient-to-t from-amber-200/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
              </motion.a>
            ))}
          </motion.div>
        </div>
        {/* --- PRODUCT LINKS, IMAGES, & DESCRIPTIONS ---
          HRM: https://managifyhr.com/ | /images/HRM Logo.png | A comprehensive HR management solution for modern businesses.
          Whatsapp CRM: https://testuinnovation.com/register | /images/Webutsav (3) (1).jpeg | CRM tool to manage your WhatsApp leads and conversations efficiently.
          Rout Budget: https://routebudget.com | /images/Route budget.jpg | Route planning and budgeting made easy for logistics teams.
          To update, edit the 'products' array above.
        */}
      </div>
    </main>
  );
}
