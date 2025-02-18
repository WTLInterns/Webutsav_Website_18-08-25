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
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XDcBTKEy6pKvjP4o8cIxuFozawJLEx.png",
      alt: "Bizfunds",
    },
    {
      id: 2,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XDcBTKEy6pKvjP4o8cIxuFozawJLEx.png",
      alt: "GIS",
    },
    {
      id: 3,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XDcBTKEy6pKvjP4o8cIxuFozawJLEx.png",
      alt: "Hamilton",
    },
    {
      id: 4,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XDcBTKEy6pKvjP4o8cIxuFozawJLEx.png",
      alt: "Haps Interior",
    },
    {
      id: 5,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XDcBTKEy6pKvjP4o8cIxuFozawJLEx.png",
      alt: "K2S Media",
    },
  ]

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-orange-50/50 to-white" ref={containerRef}>
      {/* Background Logos with Parallax */}
      <motion.div className="absolute inset-0 opacity-5" style={{ y }}>
        <div className="grid grid-cols-3 gap-8 p-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <img
              key={i}
              src={logos[i % logos.length].src || "/vercel.svg"}
              alt="Background Logo"
              className="w-full h-auto opacity-50"
            />
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our Partner and <span className="text-orange-500">Global Brand</span>
        </h2>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Single Marquee */}
          <div className="flex gap-8 animate-marquee">
            {logos.concat(logos).map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 w-48 h-24 bg-white rounded-lg shadow-lg p-4 flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

