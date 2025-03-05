"use client"

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Phone } from "lucide-react"

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
        <source
          src="https://res.cloudinary.com/dvpk4sbzi/video/upload/v1740208926/3254066-uhd_3840_2160_25fps_oy3k7g.mp4"
          type="video/mp4"
        />
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
          <Link
            className="px-6 py-3 bg-[#FFA500] hover:bg-[#FF9500] text-gray-900 font-medium rounded-md transition-colors duration-200"
            href="/Contact"
          >
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

      {/* WhatsApp Floating Button - Left Bottom */}
      <motion.a
        href="https://wa.me/8766922792" // Replace with your WhatsApp number
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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.5027 3.49786C18.2087 1.20386 15.2067 0 12.0507 0C5.48067 0 0.101675 5.379 0.101675 11.949C0.101675 14.0697 0.649675 16.1407 1.69167 17.9697L0 24L6.19767 22.346C7.96167 23.301 9.98367 23.802 12.0447 23.802H12.0507C18.6147 23.802 24 18.423 24 11.853C24 8.69695 22.7967 5.79186 20.5027 3.49786ZM12.0507 21.801C10.2627 21.801 8.51067 21.318 6.99267 20.406L6.62967 20.193L2.86467 21.174L3.86067 17.499L3.62967 17.124C2.62467 15.546 2.10267 13.7767 2.10267 11.949C2.10267 6.48295 6.58467 2.001 12.0567 2.001C14.7147 2.001 17.2047 3.00889 19.0827 4.88689C20.9607 6.76489 21.9987 9.25495 21.9987 11.913C21.9927 17.379 17.5107 21.801 12.0507 21.801ZM17.4907 14.451C17.1987 14.304 15.7167 13.575 15.4427 13.476C15.1687 13.377 14.9727 13.329 14.7707 13.620C14.5687 13.911 14.0047 14.592 13.8267 14.787C13.6487 14.988 13.4647 15.012 13.1727 14.865C12.8807 14.718 11.9187 14.409 10.7887 13.407C9.90267 12.627 9.30267 11.667 9.12467 11.376C8.94667 11.085 9.10467 10.923 9.25467 10.773C9.38967 10.638 9.55467 10.422 9.70867 10.245C9.86267 10.068 9.91067 9.93897 10.0107 9.73797C10.1107 9.53697 10.0587 9.35997 9.98267 9.21297C9.90667 9.06597 9.31267 7.58397 9.06867 6.99597C8.82467 6.42597 8.58067 6.50997 8.39067 6.49797C8.21267 6.48597 8.01067 6.48597 7.80867 6.48597C7.60667 6.48597 7.28067 6.56097 7.00667 6.85197C6.73267 7.14297 5.95467 7.87197 5.95467 9.35397C5.95467 10.836 7.02067 12.267 7.17467 12.468C7.32867 12.669 9.30067 15.693 12.3147 16.998C13.0147 17.304 13.5627 17.496 13.9887 17.64C14.7047 17.883 15.3567 17.853 15.8747 17.775C16.4527 17.688 17.6367 17.046 17.8807 16.362C18.1247 15.678 18.1247 15.09 18.0487 14.964C17.9727 14.838 17.7827 14.763 17.4907 14.616V14.451Z"
            fill="white"
          />
        </svg>
        <span className="sr-only">Contact us on WhatsApp</span>
      </motion.a>

      {/* Call Floating Button - Right Bottom */}
      <motion.a
        href="tel:+918766922792" // Replace with your phone number
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
  )
}

export default Hero

