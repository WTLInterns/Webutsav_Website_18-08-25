// "use client"

// import { useEffect, useRef } from "react"
// import gsap from "gsap"
// import BloCard from "../BlohCards/page"
// import Connect from "../Connect/page"

// export default function BlogPage() {
//   const pRef = useRef(null)
//   const h2Ref = useRef(null)

//   useEffect(() => {
//     if (pRef.current && h2Ref.current) {            
//       const tl = gsap.timeline()

//       // Animate `p` (— Blog Grid) first
//       tl.fromTo(
//         pRef.current.children,
//         { opacity: 0, x: 50 },
//         { opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: "power3.out" },
//       )

//       // Animate `h2` (Get to Know Our Latest Articles!) after `p`
//       tl.fromTo(
//         h2Ref.current.children,
//         { opacity: 0, x: 50 },
//         { opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: "power3.out" },
//         "-=0.5", // Overlap animations slightly
//       )
//     }
//   }, [])

//   const pText = "— Blog Grid"
//   const h2Text = "Get to Know Our Latest Articles!"

//   return (
//     <>
//       <div>
//         {/* Background Section */}
//         <div
//           className="relative w-full h-[70vh] sm:h-[70vh] flex items-center px-4 sm:px-8 lg:px-16"
//           style={{
//             backgroundImage: "url('/images/aboutus.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundAttachment: "fixed", // Keeps background fixed while scrolling
//           }}>
//           <div className="max-w-lg sm:max-w-xl lg:max-w-2xl text-left">
//             {/* Animated P (— Blog Grid) */}
//             <p ref={pRef} className="text-yellow-400 font-bold text-lg sm:text-xl md:text-2xl mb-2">
//               {pText.split("").map((letter, index) => (
//                 <span key={index} className="inline-block">
//                   {letter}
//                 </span>
//               ))}
//             </p>

//             {/* Animated H2 (Get to Know Our Latest Articles!) */}
//             <h2 ref={h2Ref} className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
//               {h2Text.split(" ").map((word, index) => (
//                 <span key={index} className="inline-block mr-2">
//                   {word}
//                 </span>
//               ))}
//             </h2>
//           </div>
//         </div>

//         {/* Blog Cards Section */}
//         <div className="mt-8 px-4 sm:px-8 flex flex-wrap justify-center gap-6">
//           <BloCard />
//         </div>
//         <div>
//           {" "}
//           <Connect />
//         </div>
//       </div>
//     </>
//   )
// }

"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import BloCard from "../BlohCards/page"
import Connect from "../Connect/page"
// import Head from "next/head"

export default function BlogPage() {
  const pRef = useRef(null)
  const h2Ref = useRef(null)

  useEffect(() => {
    if (pRef.current && h2Ref.current) {            
      const tl = gsap.timeline()

      // Animate `p` (— Blog Grid) first
      tl.fromTo(
        pRef.current.children,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: "power3.out" },
      )

      // Animate `h2` (Get to Know Our Latest Articles!) after `p`
      tl.fromTo(
        h2Ref.current.children,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: "power3.out" },
        "-=0.5", // Overlap animations slightly
      )
    }
  }, [])

  const pText = "— Blog Grid"
  const h2Text = "Get to Know Our Latest Articles!"

  return (
    <>
      {/* <Head>
        <title>WebUtsav Blog | Insights on Digital Marketing & Web Development</title>
        <meta name="description" content="Stay updated with the latest trends, tips, and news in digital marketing, SEO, social media, and web development on the WebUtsav Blog." />
        <link rel="canonical" href="https://webutsav.com/blog" />
        <meta name="author" content="WebUtsav" />
        <meta name="keywords" content="digital marketing blog, SEO tips, social media strategies, web development insights, WebUtsav blog, marketing trends" />
        <meta name="robots" content="index, follow" />
      </Head> */}
      
      <div className="overflow-hidden">
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
              — Blog Grid
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
            >
              Get to Know Our <span className="bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">Latest Articles!</span>
            </motion.h1>
          </div>
        </motion.div>

        {/* Blog Cards Section with About Us Styling */}
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
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Latest <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Articles</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
            </motion.div>

            {/* Blog Cards */}
            <div className="flex justify-center">
              <BloCard />
            </div>
          </div>
        </section>

        {/* Connect Section with About Us Styling */}
        <section className="py-16 bg-white relative overflow-hidden">
          {/* Floating Brand Color Elements */}
          <motion.div
            className="absolute bottom-10 right-10 w-48 h-48 bg-blue-300/15 rounded-full blur-2xl"
            animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Section Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Connect <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">With Us</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
            </motion.div>

            <Connect />
          </div>
        </section>

        {/* Why Businesses Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-200/30 rounded-full blur-2xl"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <motion.h2 
              className="text-4xl md:text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Why Businesses Around the World Choose <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">WebUtsav</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <motion.div 
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 border border-blue-100/30 hover:border-orange-200/50"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 bg-gradient-to-br from-blue-500 to-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10"/></svg>
                  </div>
                  <h4 className="font-semibold text-lg">International Experience</h4>
                  <p className="text-gray-600 mt-2">We understand global market trends and adapt accordingly.</p>
                </motion.div>
                
                {/* Feature 2 */}
                <motion.div 
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 border border-blue-100/30 hover:border-orange-200/50"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 bg-gradient-to-br from-orange-500 to-orange-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4"/><polyline points="16 3 21 3 21 8"/><line x1="15" y1="9" x2="21" y2="3"/></svg>
                  </div>
                  <h4 className="font-semibold text-lg">Cultural Sensitivity</h4>
                  <p className="text-gray-600 mt-2">We tailor designs and campaigns for local audience behavior.</p>
                </motion.div>
                
                {/* Feature 3 */}
                <motion.div 
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 border border-blue-100/30 hover:border-orange-200/50"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 bg-gradient-to-br from-blue-500 to-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  </div>
                  <h4 className="font-semibold text-lg">Multi-Time-Zone Support</h4>
                  <p className="text-gray-600 mt-2">We work with clients in UAE, USA, UK without delays.</p>
                </motion.div>
                
                {/* Feature 4 */}
                <motion.div 
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 border border-blue-100/30 hover:border-orange-200/50"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 bg-gradient-to-br from-orange-500 to-orange-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M2 13h20"/></svg>
                  </div>
                  <h4 className="font-semibold text-lg">Cutting-Edge Technology</h4>
                  <p className="text-gray-600 mt-2">From AI integrations to cloud-based apps, we stay ahead.</p>
                </motion.div>
                
                {/* Feature 5 */}
                <motion.div 
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 border border-blue-100/30 hover:border-orange-200/50"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 bg-gradient-to-br from-blue-500 to-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 17v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/></svg>
                  </div>
                  <h4 className="font-semibold text-lg">Proven Track Record</h4>
                  <p className="text-gray-600 mt-2">Hundreds of successful global projects.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-200/30 rounded-full blur-2xl"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Industries We Serve <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Internationally</span>
            </motion.h2>
            <motion.h4 
              className="text-lg text-center mb-10 text-gray-700 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We have successfully worked with:
            </motion.h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Industry Items */}
              {[
                {
                  title: "E-commerce & Retail",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01"/></svg>
                  )
                },
                {
                  title: "Real Estate & Property",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11V7.5a2.5 2.5 0 0 1 2.5-2.5h13A2.5 2.5 0 0 1 21 7.5V11"/><path d="M12 22V12"/><path d="M7 22h10"/></svg>
                  )
                },
                {
                  title: "Travel & Tourism",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8"/><path d="M3 16v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"/><path d="M8 12h8"/></svg>
                  )
                },
                {
                  title: "Education & E-learning",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12l-10-7-10 7"/><path d="M2 12v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7"/><path d="M16 6v6"/></svg>
                  )
                },
                {
                  title: "Healthcare & Fitness",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                  )
                },
                {
                  title: "Technology & Startups",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M2 13h20"/></svg>
                  )
                },
                {
                  title: "Corporate Businesses",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M2 13h20"/></svg>
                  )
                }
              ].map((industry, idx) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * idx, ease: 'easeOut' }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className={`rounded-full w-16 h-16 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300 ${
                    idx % 2 === 0 
                      ? "bg-gradient-to-br from-blue-500 to-blue-600" 
                      : "bg-gradient-to-br from-orange-500 to-orange-600"
                  }`}>
                    <span className="text-white text-2xl">
                      {industry.icon}
                    </span>
                  </div>
                  <div className="font-semibold text-lg mt-3 text-gray-700">
                    {industry.title}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 via-orange-50/20 to-transparent"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-2"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Case Studies – <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Global Impact</span> in Action
            </motion.h2>
            <motion.h4 
              className="text-lg text-center mb-12 text-gray-700 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Real-world success stories from UAE, UK, and USA.
            </motion.h4>
            
            {/* Case Studies Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  country: 'UAE',
                  flag: (
                    <span className="absolute top-4 right-4"><img src="https://cdn.jsdelivr.net/npm/svg-country-flags@1.2.10/svg/ae.svg" alt="UAE" className="w-6 h-6 rounded-full shadow" /></span>
                  ),
                  title: 'UAE E-commerce Brand',
                  desc: '170% sales increase in 6 months via SEO, Google Ads & social media.',
                  img: 'https://placehold.co/400x160?text=UAE+E-commerce',
                },
                {
                  country: 'UK',
                  flag: (
                    <span className="absolute top-4 right-4"><img src="https://cdn.jsdelivr.net/npm/svg-country-flags@1.2.10/svg/gb.svg" alt="UK" className="w-6 h-6 rounded-full shadow" /></span>
                  ),
                  title: 'UK Travel Agency',
                  desc: '220% booking boost in 4 months with local SEO strategy.',
                  img: 'https://placehold.co/400x160?text=UK+Travel',
                },
                {
                  country: 'USA',
                  flag: (
                    <span className="absolute top-4 right-4"><img src="https://cdn.jsdelivr.net/npm/svg-country-flags@1.2.10/svg/us.svg" alt="USA" className="w-6 h-6 rounded-full shadow" /></span>
                  ),
                  title: 'US Tech Startup',
                  desc: '35% cost reduction & higher engagement with cross-platform mobile app.',
                  img: 'https://placehold.co/400x160?text=US+Tech',
                }
              ].map((cs, idx) => (
                <motion.div
                  key={cs.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 * idx, ease: 'easeOut' }}
                  className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full border border-blue-100/30 hover:border-orange-200/50 transition-all duration-300"
                >
                  <div className="relative mb-4">
                    <img src={cs.img} alt={cs.title} className="h-40 w-full object-cover rounded-xl shadow-md" />
                    {cs.flag}
                  </div>
                  <h3 className="font-bold text-xl text-blue-600 mb-2">{cs.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cs.desc}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Our Work Process Timeline */}
            <motion.h3 
              className="text-4xl md:text-5xl font-bold text-center mb-2"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Work Process – From <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Idea to Impact</span>
            </motion.h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-8">
              {[
                {
                  title: 'Research',
                  desc: 'Understanding goals & market.',
                },
                {
                  title: 'Ideate',
                  desc: 'Tailored solution strategy.',
                },
                {
                  title: 'Develop',
                  desc: 'Designing & coding the project.',
                },
                {
                  title: 'Launch & Optimize',
                  desc: 'Deploy & continuously improve.',
                },
              ].map((step, idx, arr) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.12 * idx, ease: 'easeOut' }}
                  className="flex flex-col items-center relative w-full md:w-1/4"
                >
                  {/* Connector line */}
                  {idx !== 0 && (
                    <span className="hidden md:block absolute -left-1/2 top-8 w-full h-0.5 border-t-2 border-dashed border-blue-400 z-0" style={{left: '-50%', width: '100%'}}></span>
                  )}
                  {/* Mobile vertical connector */}    
                  {idx !== 0 && (
                    <span className="block md:hidden absolute -top-4 left-1/2 h-8 w-0.5 border-l-2 border-dashed border-blue-400 z-0" style={{top: '-2rem', left: '50%'}}></span>
                  )}
                  <div className="z-10 flex flex-col items-center">
                    <span className={`w-12 h-12 flex items-center justify-center rounded-full font-bold text-lg shadow mb-3 ${
                      idx % 2 === 0 
                        ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white" 
                        : "bg-gradient-to-br from-orange-500 to-orange-600 text-white"
                    }`}>
                      {idx+1}
                    </span>
                    <span className="font-bold text-lg text-gray-800 mb-1 text-center">{step.title}</span>
                    <span className="text-gray-500 text-sm text-center">{step.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}