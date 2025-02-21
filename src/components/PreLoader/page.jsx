"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const PreLoader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Adjust this time as needed

    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 0,
      transition: {
        duration: 0.5,
        when: "afterChildren",
      },
    },
  }

  const loaderVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        yoyo: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  if (!loading) return null

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="w-16 h-16 border-4 border-blue-500 rounded-full border-t-transparent"
        variants={loaderVariants}
        initial="hidden"
        animate="visible"
      />
    </motion.div>
  )
}

export default PreLoader

