"use client"

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Phone } from "lucide-react"
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
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

      <div className="relative h-screen">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dvpk4sbzi/video/upload/v1740208926/3254066-uhd_3840_2160_25fps_oy3k7g.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-white max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={headingVariants}
          >
            Accelerate your growth with our digital solutions
          </motion.h1>

          <motion.div
            className="mt-8 flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <Link
              className="px-6 py-3 bg-[#FFA500] hover:bg-[#FF9500] text-gray-900 font-medium rounded-md transition-colors duration-200"
              href="/Contact"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* WhatsApp Floating Button */}
        <motion.a
          href="https://wa.me/8766922792"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed left-6 bottom-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            {/* WhatsApp Icon Path */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.5027 3.49786..."
              fill="white"
            />
          </svg>
          <span className="sr-only">Contact us on WhatsApp</span>
        </motion.a>

        {/* Call Button */}
        <motion.a
          href="tel:+918766922792"
          className="fixed right-6 bottom-6 z-50 flex items-center justify-center w-14 h-14 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Phone className="text-white" size={24} />
          <span className="sr-only">Call us</span>
        </motion.a>
      </div>
    </>
  )
}

export default Hero
