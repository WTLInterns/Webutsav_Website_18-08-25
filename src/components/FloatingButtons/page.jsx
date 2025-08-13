"use client"

import { motion } from "framer-motion"
import { FaWhatsapp, FaPhone } from "react-icons/fa"

const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/918766922792"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-6 bottom-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="text-white text-3xl group-hover:scale-110 transition-transform duration-300" />
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
        
        {/* Tooltip */}
        <div className="absolute left-full ml-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-800 rotate-45"></div>
        </div>
        
        <span className="sr-only">Contact us on WhatsApp</span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+918766922792"
        className="fixed right-6 bottom-6 z-50 flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full shadow-xl hover:bg-blue-600 transition-all duration-300 group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaPhone className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20"></div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Call us now
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-800 rotate-45"></div>
        </div>
        
        <span className="sr-only">Call us</span>
      </motion.a>
    </>
  )
}

export default FloatingButtons
