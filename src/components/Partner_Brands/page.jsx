"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function PartnerBrands() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"])

  const logos = [
    {
      id: 1,
      src: "/client/Aimcab.jpeg",
      alt: "Aimcab",
    },
    {
      id: 2,
      src: "/client/ajcabs.png",
      alt: "ajcabs",
    },
    {
      id: 3,
      src: "/client/shivgarjana_cabs.png",
      alt: "shivgarjana",
    },
    {
      id: 4,
      src: "/client/parmeshwarcab.png",
      alt: "Haps Interior",
    },
    {
      id: 5,
      src: "/client/wtl.jpeg",
      alt: "Haps Interior",
    },
  ]

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-orange-50/30 via-white to-orange-100/20" ref={containerRef}>
      {/* Orange Circle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-20 w-32 h-32 bg-orange-200/20 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-orange-300/15 rounded-full"
          animate={{
            y: [0, -20, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-40 h-40 bg-orange-100/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Partners and{" "}
          <span className="gradient-text relative">
            Global Brands
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </span>
        </motion.h2>

        {/* Enhanced Marquee Container */}
        <div className="relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm border border-orange-100/30 p-6">
          {/* Orange Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-50/30 via-transparent to-orange-50/30 rounded-2xl" />

          {/* Marquee */}
          <div className="flex gap-8 animate-marquee">
            {logos.concat(logos).map((logo, index) => (
              <motion.div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 w-48 h-24 bg-white rounded-xl shadow-lg p-4 flex items-center justify-center hover:shadow-xl transition-all duration-300 border border-orange-100/20 hover:border-orange-200/40 group"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

