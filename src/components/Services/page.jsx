"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const ServicesTimeline = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const serviceVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <div>
      {/* Professional Hero Section with Brand Colors */}
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
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Our Professional <span className="text-blue-100">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
          >
            Comprehensive digital solutions designed to transform your business and drive exceptional growth through innovative technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="px-10 py-4 bg-white/95 backdrop-blur-sm font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group border border-blue-200/30"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Explore Our Services</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section
        ref={ref}
        className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      >
      {/* Brand Color Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-40 h-40 bg-orange-200/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-10 w-32 h-32 bg-blue-300/15 rounded-full blur-lg"
          animate={{
            y: [0, -30, 0],
            scale: [1, 0.7, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-400/10 rounded-full blur-lg"
          animate={{
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-28 h-28 bg-blue-500/10 rounded-full blur-xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-36 h-36 bg-orange-300/8 rounded-full blur-2xl"
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Enhanced Header with Brand Colors */}
          <motion.div
            className="text-center mb-16"
            variants={headerVariants}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              variants={headerVariants}
            >
              Our Creative{" "}
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent relative">
                Services
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </span>
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-6xl mx-auto leading-relaxed mb-8 mt-6"
              variants={headerVariants}
            >
              Best software, web design, app development & digital marketing company from India serving{" "}
              <span className="text-blue-600 font-bold">UAE, USA, UK & beyond.</span>Boost your business{" "}
              <span className="text-orange-500 font-bold">growth today!</span>
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              variants={headerVariants}
            >
              Elevate your business with our comprehensive suite of services designed to create exceptional{" "}
              <span className="text-blue-600 font-semibold">UI/UX experiences</span> and{" "}
              <span className="text-orange-500 font-semibold">drive growth.</span>
            </motion.p>
          </motion.div> 

          {/* Enhanced CTA Section with Brand Colors */}       
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link href="/Contact">
              <motion.div
                className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-500 to-orange-500 text-white px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-bold text-lg">Ready to Get Started?</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </motion.div>
            </Link>

            <motion.p
              className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Let's discuss your project and bring your <span className="text-blue-600 font-semibold">vision</span> to <span className="text-orange-500 font-semibold">life</span>
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              className="mt-8 flex flex-wrap justify-center items-center gap-8 text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="flex items-center space-x-2">
                {/* <span className="text-2xl">⭐⭐⭐⭐⭐</span> */}
                <span className="font-semibold text-gray-700">5-Star Rated</span>
              </div>
              <div className="flex items-center space-x-2">
                {/* <span className="text-2xl">🚀</span> */}
                <span className="font-semibold text-gray-700">500+ Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                {/* <span className="text-2xl">👥</span> */}
                <span className="font-semibold text-gray-700">250+ Happy Clients</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      </section>

      {/* Why Choose Our Services Section */}
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Services?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              We deliver exceptional results through innovative solutions, expert team, and proven methodologies.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🎯", title: "Expert Team", desc: "Skilled professionals with years of industry experience" },
              { icon: "⚡", title: "Fast Delivery", desc: "Quick turnaround times without compromising quality" },
              { icon: "🔧", title: "Custom Solutions", desc: "Tailored services to meet your specific business needs" },
              { icon: "📈", title: "Proven Results", desc: "Track record of successful projects and satisfied clients" },
              { icon: "🛡️", title: "Quality Assurance", desc: "Rigorous testing and quality control processes" },
              { icon: "💬", title: "24/7 Support", desc: "Round-the-clock assistance and maintenance services" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Brand Colors Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

                {/* Card Content */}
                <div className="relative bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-blue-100/30 group-hover:border-orange-200/50">
                  <div className="text-center">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                      index % 2 === 0
                        ? "bg-gradient-to-br from-blue-500 to-blue-600"
                        : "bg-gradient-to-br from-orange-500 to-orange-600"
                    }`}>
                      <span className="text-white text-2xl">{feature.icon}</span>
                    </div>

                    {/* Content */}
                    <h3 className={`text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 ${
                      index % 2 === 0 ? "group-hover:text-blue-600" : "group-hover:text-orange-600"
                    }`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesTimeline

