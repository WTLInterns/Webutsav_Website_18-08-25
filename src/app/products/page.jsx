// Products Page: shows 3 product cards as requested
'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import ProductImage from '../../components/ProductImage/ProductImage';

// Product data array
const products = [
  {
    title: 'ManagifyHR',
    category: 'HR Management',
    link: 'https://managifyhr.com/',
    image: '/images/HRM Logo.png',
    description: 'A comprehensive HR management solution for modern businesses. Streamline your workforce management with advanced features.',
  },
  {
    title: 'Testuinnovation CRM',
    category: 'Customer Relationship',
    link: 'https://testuinnovation.com',
    image: '/images/whtsappcrmtestunivation.png',
    description: 'Advanced WhatsApp CRM tool to manage your WhatsApp leads and conversations efficiently. Boost your customer engagement.',
  },
  {
    title: 'Route Budget',
    category: 'Fleet Management',
    link: 'https://routebudget.com',
    image: '/images/Route Budget.jpg',
    description: 'Route planning and budgeting made easy for logistics teams. Optimize your fleet operations and reduce costs.',
  },
  {
    title: 'SilkSew',
    category: 'E-commerce Platform',
    link: 'https://silksew.com/',
    image: '/images/silksew.jpg',
    description: 'Premium silk and textile e-commerce platform. Discover luxury fabrics and custom tailoring services online.',
  },
  {
    title: 'Parshuram Dairy Farm',
    category: 'Agriculture & Dairy',
    link: 'https://parshuramdairyfarm.com/',
    image: '/images/parshuram.jpeg',
    description: 'Fresh dairy products and farm management system. Quality milk and dairy products delivered fresh from farm to table.',
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
    <main className="min-h-screen overflow-hidden" suppressHydrationWarning={true}>
      {/* Professional Hero Section with Brand Colors */}
      <motion.div
        className="relative w-full h-[80vh] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Brand Colors Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-orange-500"></div>

        {/* Transparent Overlay for Brand Consistency */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 via-transparent to-blue-600/20"></div>

        {/* Floating Brand Color Elements */}
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-48 h-48 bg-blue-300/25 rounded-full blur-2xl"
          animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-32 h-32 bg-orange-300/15 rounded-full blur-2xl"
          animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 font-semibold text-xl md:text-2xl mb-4"
          >
            — Our Products
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
          >
            Discover Our <span className="bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">Powerful Solutions!</span>
          </motion.h1>
          {/* <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Explore our innovative products designed to streamline your business operations and drive growth.
          </motion.p> */}
        </div>
      </motion.div>

      {/* Product Cards Section with About Us Styling */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/20 relative overflow-hidden">
        {/* Floating Brand Color Elements */}
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-48 h-48 bg-blue-300/15 rounded-full blur-2xl"
          animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Products</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              💡 Innovative solutions designed to transform your business operations and drive success.
            </p>
          </motion.div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" suppressHydrationWarning={true}>
            {products.map((product, idx) => (
              <div
                key={product.title}
                className="group relative"
                suppressHydrationWarning={true}
              >
                {/* Brand Colors Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block professional-card p-8 rounded-2xl border border-blue-100/30 group-hover:border-orange-200/50 transition-all duration-300 h-full text-center group-hover:scale-105 group-hover:-translate-y-2"
                  style={{ textDecoration: 'none' }}
                >
                  {/* Product Category Badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                    idx % 2 === 0
                      ? "bg-blue-100 text-blue-600"
                      : "bg-orange-100 text-orange-600"
                  }`}>
                    {product.category}
                  </div>

                  {/* Product Image with Fallback */}
                  <ProductImage
                    src={product.image}
                    alt={`${product.title} - ${product.category}`}
                    title={product.title}
                    category={product.category}
                    index={idx}
                  />

                  {/* Product Title */}
                  <h3 className={`text-2xl font-bold text-gray-900 mb-3 transition-colors duration-300 ${
                    idx % 2 === 0 ? "group-hover:text-blue-600" : "group-hover:text-orange-600"
                  }`}>
                    {product.title}
                  </h3>

                  {/* Product Description */}
                  <p className="text-gray-600 text-base leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300 min-h-[4rem]">
                    {product.description}
                  </p>

                  {/* CTA Button with Brand Colors */}
                  <div
                    className={`inline-flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      idx % 2 === 0
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                        : "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                    }`}
                  >
                    <span>Visit Website</span>
                    <span className="ml-2">→</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
