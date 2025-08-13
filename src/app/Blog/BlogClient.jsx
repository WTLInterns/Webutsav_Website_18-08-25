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
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Stay updated with the latest trends, tips, and insights in digital marketing, SEO, social media, and web development.
            </motion.p>
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
              <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                💡 Discover insights, tips, and trends in digital marketing and web development.
              </p>
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
      </div>
    </>
  )
}