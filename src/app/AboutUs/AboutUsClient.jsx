// "use client"
// import { useState, useEffect, useRef } from "react"
// import Image from "next/image"
// import gsap from "gsap"
// import { motion, useScroll, useTransform, useAnimation } from "framer-motion"
// import { FaUserTie, FaCogs, FaCheckCircle, FaLightbulb } from "react-icons/fa"
// import { useInView } from "react-intersection-observer"
// import Head from "next/head"



// const features = [
//   {
//     icon: <FaUserTie />,
//     title: "Experience",
//     description: "10+ years in software & digital solutions",
//   },
//   {
//     icon: <FaCogs />,
//     title: "Projects Delivered",
//     description: "800+ across 12+ countries",
//   },
//   {
//     icon: <FaCheckCircle />,
//     title: "Global Reach",
//     description: "Serving UAE, USA, UK, Singapore, Australia & more",
//   },
//   {
//     icon: <FaLightbulb />,
//     title: "Innovative Technology",
//     description: "Utilizing cutting-edge tools to drive success.",
//   },
//   {
//     icon: <FaLightbulb />,
//     title: "Clients Served",
//     description: "300+ from startups to Fortune 500 companies",
//   },
//   {
//     icon: <FaCheckCircle />,
//     title: "Support:",
//     description: "24/7 multi-time-zone client assistance",
//   },
// ]

// const CountUpAnimation = ({ target, duration = 2, label }) => {
//   const [count, setCount] = useState(0)
//   const controls = useAnimation()
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })

//   useEffect(() => {
//     if (inView) {
//       controls.start({
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.5 },
//       })

//       let start = 0
//       const end = Number.parseInt(target)
//       const increment = end / (duration * 60) // 60 FPS

//       const timer = setInterval(() => {
//         start += increment
//         setCount(Math.floor(start))

//         if (start >= end) {
//           clearInterval(timer)
//           setCount(end)
//         }
//       }, 1000 / 60)

//       return () => clearInterval(timer)
//     }
//   }, [inView, target, duration, controls])

//   return (
//     <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={controls} className="flex flex-col items-center">
//       <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">{count}+</span>
//       <span className="text-sm text-gray-600 text-center font-medium group-hover:text-gray-700 transition-colors duration-300">{label}</span>
//     </motion.div>
//   )
// }

// export default function AboutUs() {
//   const [offset, setOffset] = useState(0)
//   const { scrollYProgress } = useScroll()
//   const pRef = useRef(null)
//   const h2Ref = useRef(null)

//   useEffect(() => {
//     if (pRef.current && h2Ref.current) {
//       const tl = gsap.timeline()

//       tl.fromTo(
//         pRef.current.children,
//         { opacity: 0, x: 50 },
//         { opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: "power3.out" },
//       )

//       tl.fromTo(
//         h2Ref.current.children,
//         { opacity: 0, x: 50 },
//         { opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: "power3.out" },
//         "-=0.5",
//       )
//     }
//   }, [])

//   const h2Text = "— About Us"    
//   const pText = "Transforming Businesses With Innovative Technology!"

//   useEffect(() => {
//     let animationFrame
//     const updateOffset = () => {
//       setOffset((prev) => (prev - 1) % window.innerWidth)
//       animationFrame = requestAnimationFrame(updateOffset)
//     }
//     animationFrame = requestAnimationFrame(updateOffset)
//     return () => cancelAnimationFrame(animationFrame)
//   }, [])

//   const stats = [
//     { value: 250, label: "Happy Clients" },
//     { value: 50, label: "Team Members" },
//     { value: 510, label: "Projects Completed" },
//     { value: 12, label: "Awards Won" },
//   ]

//   const images = [
//     { src: "/images/royalty.webp", alt: "Image 1" },
//     { src: "/digim.webp", alt: "Image 2" },
//     { src: "/images/social.webp", alt: "Image 3" },
//     { src: "/images/responsive.webp", alt: "Image 4" },
//     { src: "/images/seoptimization.webp", alt: "Image 5" },
//   ]

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

//   return (
//     <>
//       <Head>
//         <title>About Us | WebUtsav - Digital Excellence with Purpose</title>
//         <meta name="description" content="Learn about WebUtsav's journey, values, and team. We are passionate about empowering businesses with innovative digital marketing and web development solutions." />
//         <link rel="canonical" href="https://webutsav.com/aboutus" />
//         <meta name="author" content="WebUtsav" />
//         <meta name="keywords" content="about WebUtsav, digital marketing agency India, web development company, our mission, our team, marketing experts, WebUtsav story" />
//         <meta name="robots" content="index, follow" />
//       </Head>
    
//       <div className="overflow-hidden">
//         {/* Professional Hero Section with Brand Colors */}
//         <motion.div
//           className="relative w-full h-[80vh] flex items-center justify-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           {/* Brand Colors Gradient Background */}
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-orange-500"></div>

//           {/* Transparent Overlay for Brand Consistency */}
//           <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 via-transparent to-blue-600/20"></div>

//           {/* Floating Brand Color Circles */}
//           <div className="absolute inset-0 overflow-hidden">
//             <motion.div
//               className="absolute top-20 left-10 w-32 h-32 bg-orange-400/20 rounded-full blur-xl"
//               animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
//               transition={{ duration: 8, repeat: Infinity }}
//             />
//             <motion.div
//               className="absolute top-40 right-20 w-24 h-24 bg-blue-400/30 rounded-full blur-lg"
//               animate={{ y: [0, 20, 0], rotate: [360, 180, 0] }}
//               transition={{ duration: 6, repeat: Infinity }}
//             />
//             <motion.div
//               className="absolute bottom-32 left-1/4 w-40 h-40 bg-orange-300/15 rounded-full blur-2xl"
//               animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
//               transition={{ duration: 10, repeat: Infinity }}
//             />
//             <motion.div
//               className="absolute bottom-20 right-1/3 w-28 h-28 bg-blue-300/25 rounded-full blur-xl"
//               animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
//               transition={{ duration: 7, repeat: Infinity }}
//             />
//           </div>

//           {/* Content */}
//           <div className="relative z-10 text-center px-4 sm:px-8 lg:px-16 max-w-4xl">
//             <motion.p
//               ref={pRef}
//               className="text-blue-100 font-semibold text-lg sm:text-xl md:text-2xl mb-6"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               {pText.split(" ").map((word, i) => (
//                 <motion.span
//                   key={i}
//                   className="inline-block mr-2"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: i * 0.1 }}
//                 >
//                   {word}
//                 </motion.span>
//               ))}
//             </motion.p>

//             <motion.h1
//               ref={h2Ref}
//               className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-8"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               {h2Text.split(" ").map((word, i) => (
//                 <motion.span
//                   key={i}
//                   className="inline-block mr-4"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
//                 >
//                   {word}
//                 </motion.span>
//               ))}
//             </motion.h1>

//             {/* Professional CTA */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.8 }}
//             >
//               <motion.button
//                 className="px-8 py-4 bg-white/95 backdrop-blur-sm text-blue-600 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group border border-orange-200/50"
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <span className="flex items-center space-x-2">
//                   <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Discover Our Journey</span>
//                   <motion.svg
//                     className="w-5 h-5 text-orange-500"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//                   </motion.svg>
//                 </span>
//               </motion.button>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Professional Achievements Section */}
//         <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
//           {/* Background Brand Color Elements */}
//           <div className="absolute inset-0">
//             <div className="absolute top-10 right-10 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl"></div>
//             <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-100/25 rounded-full blur-2xl"></div>
//             <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-orange-200/20 rounded-full blur-xl transform -translate-x-1/2 -translate-y-1/2"></div>
//           </div>

//           <div className="max-w-6xl mx-auto px-6 relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-5xl font-bold text-gray-900 mb-4">
//                 Our <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Achievements</span>
//               </h2>
//               <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
//               {/* <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
//                 Celebrating milestones that reflect our commitment to excellence and client success
//               </p> */}
//             </motion.div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   whileHover={{ y: -10, scale: 1.02 }}
//                   className="professional-achievement-card group"
//                 >
//                   {/* Brand Colors Gradient Border */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

//                   {/* Card Content */}
//                   <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-blue-100/30 group-hover:border-orange-200/50">
//                     {/* Icon Background with Brand Colors */}
//                     <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
//                       index % 2 === 0
//                         ? "bg-gradient-to-br from-blue-500 to-blue-600"
//                         : "bg-gradient-to-br from-orange-500 to-orange-600"
//                     }`}>
//                       <span className="text-white text-2xl font-bold">
//                         {index === 0 && "👥"}
//                         {index === 1 && "🚀"}
//                         {index === 2 && "📊"}
//                         {index === 3 && "🏆"}
//                       </span>
//                     </div>

//                     <CountUpAnimation target={stat.value} label={stat.label} />
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Professional About Webutsav Section */}
//         <section className="py-20 bg-white relative overflow-hidden">
//           {/* Background Elements with Brand Colors */}
//           <div className="absolute inset-0">
//             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 via-orange-50/20 to-transparent"></div>
//             <div className="absolute top-20 right-0 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl"></div>
//             <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-100/15 rounded-full blur-2xl"></div>
//           </div>

//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//             <div className="flex flex-col lg:flex-row items-center gap-16">
//               {/* Image Section */}
//               <motion.div
//                 className="w-full lg:w-1/2"
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <div className="relative group">
//                   {/* Brand Colors Border Effect */}
//                   <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-lg"></div>

//                   <Image
//                     src="/digital_Team.webp"
//                     alt="Digimedia Solutions Team"
//                     width={960}
//                     height={540}
//                     className="relative w-full h-auto object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"
//                   />

//                   {/* Floating Badge with Brand Colors */}
//                   <motion.div
//                     className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-xl"
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ duration: 0.6, delay: 0.8 }}
//                   >
//                     <span className="font-bold text-sm">5+ Years Excellence</span>
//                   </motion.div>
//                 </div>
//               </motion.div>

//               {/* Content Section */}
//               <motion.div
//                 className="w-full lg:w-1/2"
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//               >
//                 <div className="space-y-6">
//                   <div>
//                     <h2 className="text-5xl font-bold text-gray-900 mb-4">
//                       About <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Webutsav</span>
//                     </h2>
//                     <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></div>
//                   </div>

//                   <h3 className="text-2xl font-semibold text-gray-800 leading-relaxed">
//                     About WebUtsav Pvt Ltd <span className="text-blue-600">– Technology </span> Without <span className="text-orange-500"> Borders</span>
//                   </h3>

//                   <p className="text-gray-700 text-lg leading-relaxed">
//                    Founded with a passion for innovation, WebUtsav Pvt Ltd began as a small team of digital enthusiasts in Pune. Over the years, our consistent quality, on-time delivery, and client-first approach have transformed us into one of the best software development companies in India.
//                    <br />
//                    Now, with 800+ projects successfully delivered and 180+ happy clients, our expertise goes beyond borders. We understand the nuances of working with global businesses—from multi-time-zone project management to cross-cultural communication—ensuring our solutions fit seamlessly into your local market.
//                   </p>
                  

//                   {/* Key Points */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
//                     {[
//                       { icon: "🎯", title: "800+ Projects", desc: "Successfully Delivered" },
//                       { icon: "👥", title: "180+ Clients", desc: "Satisfied Worldwide" },
//                       { icon: "🏆", title: "Industry Leader", desc: "In Digital Solutions" },
//                       { icon: "📍", title: "Pune Based", desc: "Serving Globally" }
//                     ].map((item, index) => (
//                       <motion.div
//                         key={index}
//                         className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-50 transition-colors duration-300"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
//                       >
//                         <span className="text-2xl">{item.icon}</span>
//                         <div>
//                           <h4 className="font-semibold text-gray-900">{item.title}</h4>
//                           <p className="text-sm text-gray-600">{item.desc}</p>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>


//         <section className="w-full py-12 px-2 md:px-0">
//           <div className="max-w-5xl mx-auto text-center ">
//            <h2 className="text-5xl font-bold text-gray-900 mb-4">
//                       About <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Webutsav</span>
//                     </h2>
//             <p className="text-gray-700 text-center mb-6 max-w-3xl text-2xl mx-auto">
//               Founded with a vision to empower businesses with technology, WebUtsav Pvt Ltd started as a small team of tech enthusiasts. Over the years, our dedication to quality and client success has earned us the trust of 300+ clients across 12+ countries.
//             </p>
//           </div>
//         </section>

//         {/* Professional Vision & Mission Section */}
//         <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-orange-500">
//           {/* Background Pattern */}
//           <div className="absolute inset-0">
//             <div className="absolute top-0 left-0 w-full h-full opacity-10">
//               <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full"></div>
//               <div className="absolute top-40 right-32 w-24 h-24 border border-white rounded-full"></div>
//               <div className="absolute bottom-32 left-1/3 w-40 h-40 border border-white rounded-full"></div>
//               <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-white rounded-full"></div>
//             </div>
//           </div>

//           <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             {/* Section Header */}
//             <motion.div
//               className="text-center mb-16"
//               initial={{ opacity: 0, y: -30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-5xl font-bold text-white mb-4">
//                 Our Vision & Mission
//               </h2>
//               <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
//             </motion.div>

//             {/* Vision & Mission Cards */}
//             <div className="grid md:grid-cols-2 gap-8">
//               {/* Vision Card */}
//               <motion.div
//                 className="group relative"
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 whileHover={{ y: -10 }}
//               >
//                 <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl group-hover:bg-white/20 transition-all duration-300"></div>
//                 <div className="relative p-8 rounded-2xl border border-white/20 group-hover:border-white/40 transition-all duration-300">
//                   {/* Icon */}
//                   <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                     <span className="text-3xl">🎯</span>
//                   </div>

//                   <h3 className="text-3xl font-bold text-white mb-4">OUR VISION</h3>
//                   <p className="text-white/90 text-lg leading-relaxed">
//                     📌 To become the most trusted global technology partner for brands looking to innovate and scale.
//                   </p>

//                   {/* Decorative Element */}
//                   <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
//                 </div>
//               </motion.div>

//               {/* Mission Card */}
//               <motion.div
//                 className="group relative"
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 whileHover={{ y: -10 }}
//               >
//                 <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl group-hover:bg-white/20 transition-all duration-300"></div>
//                 <div className="relative p-8 rounded-2xl border border-white/20 group-hover:border-white/40 transition-all duration-300">
//                   {/* Icon */}
//                   <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                     <span className="text-3xl">🚀</span>
//                   </div>

//                   <h3 className="text-3xl font-bold text-white mb-4">OUR MISSION</h3>
//                   <p className="text-white/90 text-lg leading-relaxed">
//                     🚀 To deliver digital solutions that drive measurable results for businesses globally
//                   </p>

//                   {/* Decorative Element */}
//                   <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Professional Why Choose Us Section */}
//         <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
//           {/* Background Elements with Brand Colors */}    
//           <div className="absolute inset-0">
//             <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
//             <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-200/30 rounded-full blur-2xl"></div>
//             <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-blue-200/15 rounded-full blur-xl"></div>
//           </div>

//           <div className="max-w-6xl mx-auto px-6 relative z-10">
//             {/* Section Header */}
//             <motion.div
//               className="text-center mb-16"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-5xl font-bold text-gray-900 mb-4">
//                 Why Choose <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Us?</span>
//               </h2>
//               <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
//               <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
//                 💡 
//               </p>
//               <br /><br />
//               <b className=" text-2xl">Quick Facts about WebUtsav Pvt Ltd</b>
//             </motion.div>

//             {/* Features Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   className="group relative"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   whileHover={{ y: -5 }}
//                 >
//                   {/* Brand Colors Gradient Border */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

//                   {/* Card Content */}
//                   <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-blue-100/30 group-hover:border-orange-200/50">
//                     <div className="flex items-start space-x-4">
//                       {/* Icon with Alternating Brand Colors */}
//                       <div className="flex-shrink-0">
//                         <div className={`w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
//                           index % 2 === 0
//                             ? "bg-gradient-to-br from-blue-500 to-blue-600"
//                             : "bg-gradient-to-br from-orange-500 to-orange-600"
//                         }`}>
//                           <span className="text-white text-2xl">{feature.icon}</span>
//                         </div>
//                       </div>

//                       {/* Content */}
//                       <div className="flex-1">
//                         <h3 className={`text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 ${
//                           index % 2 === 0 ? "group-hover:text-blue-600" : "group-hover:text-orange-600"
//                         }`}>
//                           {feature.title}
//                         </h3>
//                         <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
//                           {feature.description}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Decorative Corner with Brand Colors */}
//                     <div className={`absolute top-4 right-4 w-6 h-6 border-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
//                       index % 2 === 0 ? "border-blue-200" : "border-orange-200"
//                     }`}></div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
//           <div className="max-w-6xl mx-auto px-6">
//             <motion.h2
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="text-4xl font-bold text-center text-gray-800 mb-12"
//             >
              
//             </motion.h2>
//             <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
//               Our talented team is the backbone of Webutsav. We encourage adding high-quality photos of our team
//               members, along with their names and designations, to showcase the expertise behind our success.
//             </p>
//             <TeamTabs />
//           </div>
//         </section>

//         {/* Professional Work Process Section */}
//         <section className="py-20 bg-white relative overflow-hidden">
//           {/* Background Elements with Brand Colors */}
//           <div className="absolute inset-0">
//             <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-50/30 via-orange-50/20 to-transparent"></div>
//             <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl"></div>
//             <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/15 rounded-full blur-2xl"></div>
//           </div>

//           <div className="max-w-6xl mx-auto px-6 relative z-10">
//             {/* Section Header */}
//             <motion.div
//               className="text-center mb-16"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-5xl font-bold text-gray-900 mb-4">
//                 Work <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Process</span>
//               </h2>
//               <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
//               <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
//                 We follow a systematic approach to ensure the success of your projects, maximizing efficiency and delivering outstanding results.
//               </p>
//             </motion.div>

//             {/* Process Steps */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {[
//                 { step: "Research", icon: "🔍", desc: "Analyze market trends and client needs." },
//                 { step: "Ideate", icon: "💡", desc: "Brainstorm innovative solutions." },
//                 { step: "Develop", icon: "⚙️", desc: "Create and refine the product." },
//                 { step: "Launch", icon: "🚀", desc: "Deploy and monitor performance." }
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   className="group relative"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   whileHover={{ y: -10 }}
//                 >
//                   {/* Brand Colors Gradient Border */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

//                   {/* Card Content */}
//                   <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-blue-100/30 group-hover:border-orange-200/50 text-center">
//                     {/* Step Number with Alternating Brand Colors */}
//                     <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
//                       index % 2 === 0
//                         ? "bg-gradient-to-br from-blue-500 to-blue-600"
//                         : "bg-gradient-to-br from-orange-500 to-orange-600"
//                     }`}>
//                       <span className="text-white font-bold text-xl">{`0${index + 1}`}</span>
//                     </div>

//                     {/* Icon */}
//                     <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
//                       {item.icon}
//                     </div>

//                     {/* Content */}
//                     <h3 className={`text-2xl font-bold text-gray-900 mb-3 transition-colors duration-300 ${
//                       index % 2 === 0 ? "group-hover:text-blue-600" : "group-hover:text-orange-600"
//                     }`}>
//                       {item.step}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
//                       {item.desc}
//                     </p>

//                     {/* Connecting Line with Brand Colors (except last item) */}
//                     {index < 3 && (
//                       <div className={`hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 transform -translate-y-1/2 ${
//                         index % 2 === 0 ? "bg-blue-200" : "bg-orange-200"
//                       }`}></div>
//                     )}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Professional CTA Section */}
//         <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-orange-500">
//           {/* Background Pattern */}
//           <div className="absolute inset-0">
//             <div className="absolute top-0 left-0 w-full h-full opacity-10">
//               <motion.div
//                 className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full"
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//               />
//               <motion.div
//                 className="absolute top-40 right-32 w-24 h-24 border border-white rounded-full"
//                 animate={{ rotate: -360 }}
//                 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//               />
//               <motion.div
//                 className="absolute bottom-32 left-1/3 w-40 h-40 border border-white rounded-full"
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//               />
//             </div>
//           </div>

//           {/* Floating Brand Color Elements */}
//           <motion.div
//             className="absolute top-10 right-10 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl"
//             animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
//             transition={{ duration: 8, repeat: Infinity }}
//           />
//           <motion.div
//             className="absolute bottom-10 left-10 w-48 h-48 bg-blue-300/25 rounded-full blur-2xl"
//             animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
//             transition={{ duration: 6, repeat: Infinity }}
//           />

//           <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
//             <motion.h2
//               initial={{ opacity: 0, y: -30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-5xl md:text-6xl font-bold text-white mb-6"
//             >
//               Ready to Transform Your <span className="text-blue-100">Business?</span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
//             >
//               🚀 Schedule a free expert session and discover how we can help you achieve your digital goals with innovative solutions.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               <motion.a
//                 href="tel:+918766922792"
//                 className="inline-block px-10 py-5 bg-white/95 backdrop-blur-sm font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group border border-blue-200/30"
//                 whileHover={{ scale: 1.05, y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <span className="flex items-center space-x-3">
//                   <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Book Your Free Session Now</span>
//                   <motion.svg
//                     className="w-6 h-6 text-orange-500"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ duration: 1.5, repeat: Infinity }}
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </motion.svg>
//                 </span>
//               </motion.a>
//             </motion.div>

//             {/* Trust Indicators */}
//             <motion.div
//               className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               <div className="flex items-center space-x-2">
//                 <span className="text-2xl">⭐</span>
//                 <span className="font-semibold">5-Star Rated</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <span className="text-2xl">🏆</span>
//                 <span className="font-semibold">Award Winning</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <span className="text-2xl">🚀</span>
//                 <span className="font-semibold">500+ Projects</span>
//               </div>
//             </motion.div>
//           </div>


          
//         </section>
//       </div>
//     </>
//   )
// }




// function TeamTabs() {
//   const [activeTab, setActiveTab] = useState("digital")

//   const digitalTeam = [
//     {
//       name: "Ashutosh Pandey",
//       role: "Digital Marketing Manager",
//       image: "/Team/aashutosh.jpeg",
//     },
//     {
//       name: "Ankita Shelke",
//       role: "Digital Marketing Executive",
//       image: "/Team/ankita2.jpeg",
//     },
//     {
//       name: "Purva Bavale",
//       role: "Digital Marketing Executive",
//       image: "/Team/purva.jpeg",
//     },
    
//     {
//       name: "Ankita Wankhade",
//       role: "Digital Marketing Executive",
//       image: "/Team/ankita.jpeg",
//     },
//   ]

//   const itTeam = [
   
//     {
//       name: "Waseb Untwale",
//       role: "Team Lead",
//       image: "/Team/waseb.jpeg",
//     },
//     {
//       name: "Shubham Jagtap",
//       role: "Full Stack Developer(Java)",
//       image: "/Team/shubham.jpeg",
//     },
//     {
//       name: "Jaywant Mhala",
//       role: "Full Stack Developer(Java)",
//       image: "/Team/jaywant.jpeg",
//     },
   
//     {
//       name: "Gautam Rana",
//       role: "Full Stack Developer(Java)",
//       image: "/Team/gautam.jpeg",
//     },
//     {
//       name: "Arbaj Shaikh",
//       role: "Full Stack Developer(Java)",
//       image: "/Team/arbaj.jpeg",
//     },
// {
//       name: "Abhishek Pattekari",
//       role: "Full Stack Developer",
//       image: "/Team/abhishek.jpeg",
//     },
//     {
//       name: "Pragati Kokare",
//       role: "Full Stack Developer(MERN)",
//       image: "/Team/pragati.jpeg",
//     },

//     {
//       name: "Shubham Handge",
//       role: "Java Developer",
//       image: "/Team/shubham2.jpeg",
//     },
//     {
//       name: "Kiran Wagh",
//       role: "Java Developer",
//       image: "/Team/kiran.jpeg",
//     },

//     {
//       name: "Manasi Tambe",
//       role: "Full Stack Developer(MERN)",
//       image: "/Team/manasi.jpeg",
//     },
//     {
//       name: "Gayatri Shende",
//       role: "Java Developer",
//       image: "/Team/gayatri.jpeg",
//     },
//     {
//       name: "Hina Shaikh",
//       role: "Full Stack Developer(MERN)",
//       image: "/Team/hina.jpeg",
//     },

//      {
//       name: "Aachal Shukla ",
//       role: "Java Developer",
//       image: "/Team/aanchal.jpeg",
//     },

//       {
//       name: "Saurabh Ganjale",
//       role: "Flutter Developer",
//       image: "/Team/saurabh.jpeg",
//     },
//      {
//       name: "Tejas Barot",
//       role: "Java Developer",
//       image: "/Team/intern2.jpeg",
//     },
//      {
//       name: "Sahil Deshmukh",
//       role: "Java Developer",
//       image: "/Team/sahil.jpeg",
//     },

//   ]

//   return (
//     <div>
//       <div className="flex justify-center mb-8">
//         <button
//           className={`px-4 py-2 mr-4 ${
//             activeTab === "digital" ? "bg-amber-500 text-white" : "bg-gray-200 text-gray-700"
//           } rounded-full`}
//           onClick={() => {
//             setActiveTab("digital")
//           }}
//         >
//           Digital Marketing Team
//         </button>
//         <button
//           className={`px-4 py-2 ${
//             activeTab === "it" ? "bg-amber-500 text-white" : "bg-gray-200 text-gray-700"
//           } rounded-full`}
//           onClick={() => {
//             setActiveTab("it")
//           }}
//         >
//           IT Team
//         </button>
//       </div>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {(activeTab === "digital" ? digitalTeam : itTeam).map((member, index) => (
//           <div
//             key={index}
//             className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
//           >
//             <div className="relative mx-auto mb-3">
//               <div className="w-32 h-32 rounded-full mx-auto overflow-hidden border-2 border-transparent hover:border-gray-200 transition-all duration-300">
//                 <Image
//                   src={member.image || "/placeholder.svg"}
//                   alt={member.name}
//                   width={120}
//                   height={120}
//                   className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
//                 />
//               </div>
//             </div>
//             <h4 className="text-lg font-semibold mb-1 transition-colors duration-300 hover:text-gray-700">{member.name}</h4>
//             <p className="text-sm text-gray-600">{member.role}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }




"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { motion, useScroll, useTransform, useAnimation } from "framer-motion"
import { FaUserTie, FaCogs, FaCheckCircle, FaLightbulb } from "react-icons/fa"
import { useInView } from "react-intersection-observer"     
import Head from "next/head"

const features = [
  {
    icon: <FaUserTie />,
    title: "Experience",
    description: "10+ years in software & digital solutions",
  },
  {
    icon: <FaCogs />,
    title: "Projects Delivered",
    description: "800+ across 12+ countries",
  },
  {
    icon: <FaCheckCircle />,
    title: "Global Reach",
    description: "Serving UAE, USA, UK, Singapore, Australia & more",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovative Technology",
    description: "Utilizing cutting-edge tools to drive success.",
  },
  {
    icon: <FaLightbulb />,
    title: "Clients Served",
    description: "300+ from startups to Fortune 500 companies",
  },
  {
    icon: <FaCheckCircle />,
    title: "Support:",
    description: "24/7 multi-time-zone client assistance",
  },
]

const CountUpAnimation = ({ target, duration = 2, label }) => {
  const [count, setCount] = useState(0)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      })

      let start = 0
      const end = Number.parseInt(target)
      const increment = end / (duration * 60) // 60 FPS

      const timer = setInterval(() => {
        start += increment
        setCount(Math.floor(start))

        if (start >= end) {
          clearInterval(timer)
          setCount(end)
        }
      }, 1000 / 60)

      return () => clearInterval(timer)
    }
  }, [inView, target, duration, controls])

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={controls} className="flex flex-col items-center">
      <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">{count}+</span>
      <span className="text-sm text-gray-600 text-center font-medium group-hover:text-gray-700 transition-colors duration-300">{label}</span>
    </motion.div>
  )
}

export default function AboutUs() {
  const [offset, setOffset] = useState(0)
  const { scrollYProgress } = useScroll()
  const pRef = useRef(null)
  const h2Ref = useRef(null)

  useEffect(() => {
    if (pRef.current && h2Ref.current) {
      const tl = gsap.timeline()

      tl.fromTo(
        pRef.current.children,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: "power3.out" },
      )

      tl.fromTo(
        h2Ref.current.children,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: "power3.out" },
        "-=0.5",
      )
    }
  }, [])

  const h2Text = "— About Us"    
  const pText = "Transforming Businesses With Innovative Technology!"

  useEffect(() => {
    let animationFrame
    const updateOffset = () => {
      setOffset((prev) => (prev - 1) % window.innerWidth)
      animationFrame = requestAnimationFrame(updateOffset)
    }
    animationFrame = requestAnimationFrame(updateOffset)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  const stats = [
    { value: 180, label: "Happy Clients" },
    { value: 50, label: "Team Members" },
    { value: 250, label: "Projects Completed" },
    { value: 12, label: "Awards Won" },
  ]

  const images = [
    { src: "/images/royalty.webp", alt: "Image 1" },
    { src: "/digim.webp", alt: "Image 2" },
    { src: "/images/social.webp", alt: "Image 3" },
    { src: "/images/responsive.webp", alt: "Image 4" },
    { src: "/images/seoptimization.webp", alt: "Image 5" },
  ]

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  // Partner logos data
  const logos = [
    { id: 1, src: "/partner1.png", alt: "Partner 1" },
    { id: 2, src: "/partner2.png", alt: "Partner 2" },
    { id: 3, src: "/partner3.png", alt: "Partner 3" },
    { id: 4, src: "/partner4.png", alt: "Partner 4" },
    { id: 5, src: "/partner5.png", alt: "Partner 5" },
  ]

  return (
    <>
      <Head>
        <title>About Us | WebUtsav - Digital Excellence with Purpose</title>
        <meta name="description" content="Learn about WebUtsav's journey, values, and team. We are passionate about empowering businesses with innovative digital marketing and web development solutions." />
        <link rel="canonical" href="https://webutsav.com/aboutus" />
        <meta name="author" content="WebUtsav" />
        <meta name="keywords" content="about WebUtsav, digital marketing agency India, web development company, our mission, our team, marketing experts, WebUtsav story" />
        <meta name="robots" content="index, follow" />
      </Head>
    
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

          {/* Floating Brand Color Circles */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 bg-orange-400/20 rounded-full blur-xl"
              animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-40 right-20 w-24 h-24 bg-blue-400/30 rounded-full blur-lg"
              animate={{ y: [0, 20, 0], rotate: [360, 180, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-32 left-1/4 w-40 h-40 bg-orange-300/15 rounded-full blur-2xl"
              animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 right-1/3 w-28 h-28 bg-blue-300/25 rounded-full blur-xl"
              animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 sm:px-8 lg:px-16 max-w-4xl">
            <motion.p
              ref={pRef}
              className="text-blue-100 font-semibold text-lg sm:text-xl md:text-2xl mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {pText.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>

            <motion.h1
              ref={h2Ref}
              className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {h2Text.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Professional CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="px-8 py-4 bg-white/95 backdrop-blur-sm text-blue-600 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group border border-orange-200/50"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Discover Our Journey</span>
                  <motion.svg
                    className="w-5 h-5 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </motion.svg>
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Professional Achievements Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          {/* Background Brand Color Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-100/25 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-orange-200/20 rounded-full blur-xl transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                Our <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Achievements</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="professional-achievement-card group"
                >
                  {/* Brand Colors Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

                  {/* Card Content */}
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-blue-100/30 group-hover:border-orange-200/50">
                    
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                      index % 2 === 0
                        ? "bg-gradient-to-br from-blue-500 to-blue-600"
                        : "bg-gradient-to-br from-orange-500 to-orange-600"
                    }`}>
                      {/* <span className="text-white text-2xl font-bold">
                        {index === 0 && "👥"}
                        {index === 1 && "🚀"}
                        {index === 2 && "📊"}
                        {index === 3 && "🏆"}
                      </span> */}
                    </div>

                    <CountUpAnimation target={stat.value} label={stat.label} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional About Webutsav Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Background Elements with Brand Colors */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 via-orange-50/20 to-transparent"></div>
            <div className="absolute top-20 right-0 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-100/15 rounded-full blur-2xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Image Section */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative group">
                  {/* Brand Colors Border Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-lg"></div>

                  <Image
                    src="/Webutsav_ITTeam.JPG"
                    alt="Digimedia Solutions Team"
                    width={960}
                    height={540}
                    className="relative w-full h-auto object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"
                  />

                  {/* Floating Badge with Brand Colors */}
                  <motion.div
                    className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <span className="font-bold text-sm">5+ Years Experience</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <div>
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">
                      About <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Webutsav</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></div>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-800 leading-relaxed">
                    About WebUtsav Pvt Ltd <span className="text-blue-600">– Technology </span> Without <span className="text-orange-500"> Borders</span>
                  </h3>

                  <p className="text-gray-700 text-lg leading-relaxed">
                   Founded with a passion for innovation, WebUtsav Pvt Ltd began as a small team of digital enthusiasts in Pune. Over the years, our consistent quality, on-time delivery, and client-first approach have transformed us into one of the best software development companies in India.
                   <br />
                   Now, with 250+ projects successfully delivered and 180+ happy clients, our expertise goes beyond borders. We understand the nuances of working with global businesses—from multi-time-zone project management to cross-cultural communication—ensuring our solutions fit seamlessly into your local market.
                  </p>
                  

                  {/* Key Points */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    {[
                      { title: "250+ Projects", desc: "Successfully Delivered" },
                      { title: "180+ Clients", desc: "Satisfied Worldwide" },
                      { title: "Industry Leader", desc: "In Digital Solutions" },
                      { title: "Pune Based", desc: "Serving Globally" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-50 transition-colors duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        <section className="w-full py-12 px-2 md:px-0">
          <div className="max-w-5xl mx-auto text-center ">
           <h2 className="text-5xl font-bold text-gray-900 mb-4">
                      About <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Webutsav</span>
                    </h2>
            <p className="text-gray-700 text-center mb-6 mt-6 max-w-3xl text-2xl mx-auto">
              Founded with a vision to empower businesses with technology, WebUtsav Pvt Ltd started as a small team of tech enthusiasts. Over the years, our dedication to quality and client success has earned us the trust of 300+ clients across 12+ countries.
            </p>
          </div>
        </section>

        {/* Professional Vision & Mission Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-orange-500">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full"></div>
              <div className="absolute top-40 right-32 w-24 h-24 border border-white rounded-full"></div>
              <div className="absolute bottom-32 left-1/3 w-40 h-40 border border-white rounded-full"></div>
              <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-white rounded-full"></div>
            </div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold text-white mb-4">
                Our Vision & Mission
              </h2>
              <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
            </motion.div>

            {/* Vision & Mission Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl group-hover:bg-white/20 transition-all duration-300"></div>
                <div className="relative p-8 rounded-2xl border border-white/20 group-hover:border-white/40 transition-all duration-300">
                  {/* Icon */}
                  {/* <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🎯</span>
                  </div> */}

                  <h3 className="text-3xl mt-7 font-bold text-white mb-4">OUR VISION</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    To become the most trusted global technology partner for brands looking to innovate and scale.
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                </div>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl group-hover:bg-white/20 transition-all duration-300"></div>
                <div className="relative p-8 rounded-2xl border border-white/20 group-hover:border-white/40 transition-all duration-300">
                  {/* Icon */}
                  {/* <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🚀</span>
                  </div> */}

                  <h3 className="text-3xl font-bold mt-7 text-white mb-4">OUR MISSION</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    To deliver digital solutions that drive measurable results for businesses globally
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Professional Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          {/* Background Elements with Brand Colors */}    
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-200/30 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-blue-200/15 rounded-full blur-xl"></div>
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                Why Choose <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Us?</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
              <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                We provide insights-based solutions to help businesses grow effectively in the digital landscape.
              </p>
              <br /><br />
              {/* <b className=" text-2xl">Quick Facts about WebUtsav Pvt Ltd</b> */}
              <h3 className="text-5xl font-bold text-gray-900 mb-4">
               Quick Facts about <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">WebUtsav Pvt Ltd</span>
              </h3>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Brand Colors Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

                  {/* Card Content */}
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-blue-100/30 group-hover:border-orange-200/50">
                    <div className="flex items-start space-x-4">
                      {/* Icon with Alternating Brand Colors */}
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                          index % 2 === 0
                            ? "bg-gradient-to-br from-blue-500 to-blue-600"
                            : "bg-gradient-to-br from-orange-500 to-orange-600"
                        }`}>
                          <span className="text-white text-2xl">{feature.icon}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 ${
                          index % 2 === 0 ? "group-hover:text-blue-600" : "group-hover:text-orange-600"
                        }`}>
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Corner with Brand Colors */}
                    <div className={`absolute top-4 right-4 w-6 h-6 border-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      index % 2 === 0 ? "border-blue-200" : "border-orange-200"
                    }`}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-center text-gray-800 mb-12"
            >
              
            </motion.h2>
            <p className="text-xl text-gray-700 mb-12 mt-0 text-center max-w-3xl mx-auto">
              Our talented team is the backbone of Webutsav. We encourage adding high-quality photos of our team
              members, along with their names and designations, to showcase the expertise behind our success.
            </p>
            <TeamTabs />
          </div>
        </section>

        {/* Professional Work Process Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Background Elements with Brand Colors */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-50/30 via-orange-50/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl"></div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/15 rounded-full blur-2xl"></div>
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                Work <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Process</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
              <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                We follow a systematic approach to ensure the success of your projects, maximizing efficiency and delivering outstanding results.
              </p>
            </motion.div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "Research", desc: "Analyze market trends and client needs." },
                { step: "Ideate", desc: "Brainstorm innovative solutions." },
                { step: "Develop", desc: "Create and refine the product." },
                { step: "Launch", desc: "Deploy and monitor performance." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Brand Colors Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

                  {/* Card Content */}
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-blue-100/30 group-hover:border-orange-200/50 text-center">
                    {/* Step Number with Alternating Brand Colors */}
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                      index % 2 === 0
                        ? "bg-gradient-to-br from-blue-500 to-blue-600"
                        : "bg-gradient-to-br from-orange-500 to-orange-600"
                    }`}>
                      <span className="text-white font-bold text-xl">{`0${index + 1}`}</span>
                    </div>

                    {/* Icon */}
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>

                    {/* Content */}
                    <h3 className={`text-2xl font-bold text-gray-900 mb-3 transition-colors duration-300 ${
                      index % 2 === 0 ? "group-hover:text-blue-600" : "group-hover:text-orange-600"
                    }`}>
                      {item.step}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {item.desc}
                    </p>

                    {/* Connecting Line with Brand Colors (except last item) */}
                    {index < 3 && (
                      <div className={`hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 transform -translate-y-1/2 ${
                        index % 2 === 0 ? "bg-blue-200" : "bg-orange-200"
                      }`}></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional CTA Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-orange-500">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <motion.div
                className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute top-40 right-32 w-24 h-24 border border-white rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute bottom-32 left-1/3 w-40 h-40 border border-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>

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

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Ready to Transform Your <span className="text-blue-100">Business?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
            >
              Schedule a free expert session and discover how we can help you achieve your digital goals with innovative solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.a
                href="tel:+918766922792"
                className="inline-block px-10 py-5 bg-white/95 backdrop-blur-sm font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group border border-blue-200/30"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-3">
                  <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Book Your Free Session Now</span>
                  <motion.svg
                    className="w-6 h-6 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
              </motion.a>
            </motion.div>
               
          </div>
        </section>

        {/* Partners and Global Brands Section */}
        

        {/* Why Businesses Choose Us Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-50/30 via-orange-50/20 to-transparent"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-center mb-12"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2h4"/><polyline points="16 3 21 3 21 8"/><line x1="15" y1="9" x2="21" y2="3"/></svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
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
              className="text-2xl md:text-3xl font-bold text-center mb-4"
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
              We have successfully worked with
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
                },
                {
                  title: "Corporate Projects",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11V7.5a2.5 2.5 0 0 1 2.5-2.5h13A2.5 2.5 0 0 1 21 7.5V11"/><path d="M12 22V12"/><path d="M7 22h10"/></svg>
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
              className="text-2xl md:text-3xl font-bold text-center mb-2"
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
              className="text-2xl md:text-3xl font-bold text-center mb-2"
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

function TeamTabs() {
  const [activeTab, setActiveTab] = useState("digital")

  const digitalTeam = [
    {
      name: "Ashutosh Pandey",
      role: "Digital Marketing Manager",
      image: "/Team/aashutosh.jpeg",
    },
    {
      name: "Ankita Shelke",
      role: "Digital Marketing Executive",
      image: "/Team/ankita2.jpeg",
    },
    {
      name: "Purva Bavale",
      role: "Digital Marketing Executive",
      image: "/Team/purva.jpeg",
    },
    
    {
      name: "Ankita Wankhade",
      role: "Digital Marketing Executive",
      image: "/Team/ankita.jpeg",
    },
  ]

  const itTeam = [
   
    {
      name: "Waseb Untwale",
      role: "Team Lead",
      image: "/Team/waseb.jpeg",
    },
    {
      name: "Shubham Jagtap",
      role: "Full Stack Developer(Java)",
      image: "/Team/shubham.jpeg",
    },
    {
      name: "Jaywant Mhala",
      role: "Full Stack Developer(Java)",
      image: "/Team/jaywant.jpeg",
    },
   
    {
      name: "Gautam Rana",
      role: "Full Stack Developer(Java)",
      image: "/Team/gautam.jpeg",
    },
    {
      name: "Arbaj Shaikh",
      role: "Full Stack Developer(Java)",
      image: "/Team/arbaj.jpeg",
    },
{
      name: "Abhishek Pattekari",
      role: "Full Stack Developer",
      image: "/Team/abhishek.jpeg",
    },
    {
      name: "Pragati Kokare",
      role: "Full Stack Developer(MERN)",
      image: "/Team/pragati.jpeg",
    },

    {
      name: "Shubham Handge",
      role: "Java Developer",
      image: "/Team/shubham2.jpeg",
    },
    {
      name: "Kiran Wagh",
      role: "Java Developer",
      image: "/Team/kiran.jpeg",
    },

    {
      name: "Manasi Tambe",
      role: "Full Stack Developer(MERN)",
      image: "/Team/manasi.jpeg",
    },
    {
      name: "Gayatri Shende",
      role: "Java Developer",
      image: "/Team/gayatri.jpeg",
    },
    {
      name: "Hina Shaikh",
      role: "Full Stack Developer(MERN)",
      image: "/Team/hina.jpeg",
    },

     {
      name: "Aachal Shukla ",
      role: "Java Developer",
      image: "/Team/aanchal.jpeg",
    },

      {
      name: "Saurabh Ganjale",
      role: "Flutter Developer",
      image: "/Team/saurabh.jpeg",
    },
     {
      name: "Tejas Barot",
      role: "Java Developer",
      image: "/Team/intern2.jpeg",
    },
     {
      name: "Sahil Deshmukh",
      role: "Java Developer",
      image: "/Team/sahil.jpeg",
    },

  ]

  return (
    <div>
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 mr-4 ${
            activeTab === "digital" ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white" : "bg-gray-200 text-gray-700"
          } rounded-full`}
          onClick={() => {
            setActiveTab("digital")
          }}
        >
          Digital Marketing Team
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "it" ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white" : "bg-gray-200 text-gray-700"
          } rounded-full`}
          onClick={() => {
            setActiveTab("it")
          }}
        >
          IT Team
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(activeTab === "digital" ? digitalTeam : itTeam).map((member, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative mx-auto mb-3">
              <div className="w-32 h-32 rounded-full mx-auto overflow-hidden border-2 border-transparent hover:border-gray-200 transition-all duration-300">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            <h4 className="text-lg font-semibold mb-1 transition-colors duration-300 hover:text-gray-700">{member.name}</h4>
            <p className="text-sm text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}