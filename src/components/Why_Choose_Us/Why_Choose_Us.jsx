"use client"
import { Users2, Settings, Shield, Laptop } from "lucide-react"
import { Button } from "../../components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function WhyChooseUs() {
  const features = [
    {
      icon: Users2,
      title: "Expertise and Experience",
      description:
        "Our team has years of expertise in digital marketing, web development, and branding to deliver optimal solutions for your business.",
    },
    {
      icon: Settings,
      title: "Customized Solutions",
      description: "We tailor strategies to address specific business challenges, ensuring maximum effectiveness.",
    },
    {
      icon: Shield,
      title: "Commitment to Quality",
      description:
        "We are dedicated to delivering quality from start to finish, exceeding client expectations on every project.",
    },
    {
      icon: Laptop,
      title: "Innovative Technology",
      description: "We use the latest tools and technology to keep your brand ahead of the competition.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="container mx-auto px-4 py-16 relative bg-gradient-to-br from-orange-50/30 via-white to-orange-100/20 overflow-hidden">
      {/* Orange Circle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-40 h-40 bg-orange-200/15 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-32 h-32 bg-orange-300/10 rounded-full"
          animate={{
            y: [0, -20, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-400/10 rounded-full"
          animate={{
            x: [0, 30, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
          <div className="space-y-4">
            <motion.h2
              className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
              variants={itemVariants}
            >
              Why Choose{" "}
              <span className="gradient-text relative">
                Us?
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
            </motion.h2>
            <motion.p className="text-lg text-gray-600 leading-relaxed" variants={itemVariants}>
              As a trusted partner, we provide{" "}
              <span className="text-orange-600 font-semibold">insights-based solutions</span> to help businesses grow and achieve their goals effectively.
            </motion.p>
          </div>

          <motion.div className="space-y-6" variants={containerVariants}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex gap-4 group"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="h-7 w-7 text-white" />
                  </motion.div>
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* <motion.div variants={itemVariants}>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Get Started Now
            </Button>
          </motion.div> */}
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Professional Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {/* Success Rate Card */}
            <motion.div
              className="professional-card p-6 text-center group"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">98%</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Success Rate</h4>
              <p className="text-gray-600 text-sm">Client satisfaction and project completion rate</p>
            </motion.div>

            {/* Years Experience Card */}
            <motion.div
              className="professional-card p-6 text-center group"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">5+</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Years Experience</h4>
              <p className="text-gray-600 text-sm">Proven track record in digital solutions</p>
            </motion.div>

            {/* Team Members Card */}
            <motion.div
              className="professional-card p-6 text-center group"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">50+</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Expert Team</h4>
              <p className="text-gray-600 text-sm">Skilled professionals across all domains</p>
            </motion.div>

            {/* Awards Card */}
            <motion.div
              className="professional-card p-6 text-center group"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">12+</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Awards Won</h4>
              <p className="text-gray-600 text-sm">Recognition for excellence and innovation</p>
            </motion.div>
          </div>

          {/* Professional CTA */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link href="/Contact">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <span>Start Your Project Today</span>
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
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

