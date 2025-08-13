"use client"

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Head from "next/head"

const Hero = () => {
  const [videoElement, setVideoElement] = useState(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const videoRef = useCallback((node) => {
    if (node !== null) {
      setVideoElement(node)
    }
  }, [])

  useEffect(() => {
    if (videoElement) {
      videoElement.play().catch((error) => {
        console.error("Auto-play was prevented:", error)
        setIsPlaying(false)
      })
    }
  }, [videoElement])

  const headingVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3,
      },
    },
  }

  const subheadingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.9,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(255, 165, 0, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  }

  return (
    <>
      <Head>
        <title>WebUtsav | Digital Marketing & Web Development Agency</title>
        <meta
          name="description"
          content="WebUtsav is your trusted digital partner offering SEO, website design, social media marketing, and mobile app development services across India."
        />
        <link rel="canonical" href="https://webutsav.com/" />
        <meta name="author" content="WebUtsav" />
        <meta
          name="keywords"
          content="digital marketing company, web development in India, SEO services, mobile app development, social media marketing, PPC services, local SEO, WebUtsav agency"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="relative h-screen overflow-hidden">
        {/* Enhanced Video Background */}
        <motion.video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          loop
          muted
          playsInline
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <source
            src="https://res.cloudinary.com/dvpk4sbzi/video/upload/v1740208926/3254066-uhd_3840_2160_25fps_oy3k7g.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </motion.video>

        {/* Enhanced Overlay with Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"
          initial="hidden"
          animate="visible"
          variants={overlayVariants}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-orange-500/10 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-32 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
            animate={{
              y: [0, 20, 0],
              scale: [1, 0.8, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        {/* Enhanced Content Container */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading with Enhanced Animation */}
          <motion.div
            className="max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={headingVariants}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Accelerate your</span>
              <span className="block gradient-text animate-pulse-slow">growth</span>
              <span className="block">with our digital</span>
              <span className="block text-orange-400">solutions</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={subheadingVariants}
          >
            Transform your business with cutting-edge digital marketing, web development,
            and innovative technology solutions that drive real results.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2 hover-glow"
                href="/Contact"
              >
                <span>Get Started Today</span>
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </Link>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
                href="/AboutUs"
              >
                <span>Learn More</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats or Features */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="text-white">
              <div className="text-2xl md:text-3xl font-bold text-orange-400">300+</div>
              <div className="text-sm md:text-base text-gray-300">Happy Clients</div>
            </div>
            <div className="text-white">
              <div className="text-2xl md:text-3xl font-bold text-orange-400">2000+</div>
              <div className="text-sm md:text-base text-gray-300">Projects Completed</div>
            </div>
            <div className="text-white">
              <div className="text-2xl md:text-3xl font-bold text-orange-400">12+</div>
              <div className="text-sm md:text-base text-gray-300">Awards Won</div>
            </div>
          </motion.div>
        </div>


      </div>
    </>
  )
}

export default Hero
