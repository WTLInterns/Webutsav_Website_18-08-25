"use client"

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

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

  const toggleVideo = () => {
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause()
      } else {
        videoElement.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

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
    <div className="relative h-screen">
      <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover" loop muted playsInline>
        <source src="https://res.cloudinary.com/dvpk4sbzi/video/upload/v1740208926/3254066-uhd_3840_2160_25fps_oy3k7g.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          Accelerate your growth with our cutting-edge digital solutions
        </motion.h1>
        <motion.div
          className="mt-8 flex space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <Link className="px-6 py-3 bg-[#FFA500] hover:bg-[#FF9500] text-gray-900 font-medium rounded-md transition-colors duration-200" href="/Contact">
            Contact Us
          </Link>
          {/* <button
            onClick={toggleVideo}
            className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-medium rounded-md transition-colors duration-200 flex items-center space-x-2"
          >
            {isPlaying ? (
              <>
                <Pause size={20} />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play size={20} />
                <span>Play</span>
              </>
            )}
          </button> */}
        </motion.div>
      </div>
    </div>
  )
}

export default Hero

