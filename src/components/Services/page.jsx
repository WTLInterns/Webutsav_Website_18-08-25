"use client"

import { Monitor, ShoppingCart, Database, Search, Share2, MapPin, BarChart3 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
  {
    id: 1,
    icon: Monitor,
    title: "Web Designing & Development",
    description:
      "Expert web design and development services that deliver stunning, responsive, innovative, and user-focused solutions for your business.",
    color: "bg-blue-500",
  },
  {
    id: 2,
    icon: ShoppingCart,
    title: "Ecommerce Website Designing",
    description:
      "Professional ecommerce website design and development services. Create a seamless shopping experience with custom, responsive, and user-friendly solutions.",
    color: "bg-green-500",
  },
  {
    id: 3,
    icon: Database,
    title: "ERP Development",
    description:
      "Custom ERP development solutions tailored for your business processes. Custom-built, scalable, and efficient systems to enhance productivity.",
    color: "bg-orange-500",
  },
  {
    id: 4,
    icon: BarChart3,
    title: "Google Adwords",
    description:
      "Maximize your online reach with targeted Google Ads campaigns. Drive traffic, increase conversions, and grow your business with expert PPC management.",
    color: "bg-red-500",
  },
  {
    id: 5,
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Boost your website's visibility with expert SEO services. Improve rankings, drive organic traffic, and reach your online prospects effectively.",
    color: "bg-emerald-500",
  },
  {
    id: 6,
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Amplify your online presence with strategic social media marketing. Engage your audience, boost awareness, and drive conversions through social channels.",
    color: "bg-indigo-500",
  },
  {
    id: 7,
    icon: MapPin,
    title: "Local SEO",
    description:
      "Enhance your local visibility with targeted local SEO strategies. Reach nearby customers and grow your business with optimized local search results.",
    color: "bg-pink-500",
  },
]

const ServicesTimeline = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-800 px-4">
            Our Creative Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Elevate your business with our comprehensive suite of services designed to create exceptional UI/UX
            experiences and drive growth.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 hidden md:block"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          {/* Services */}
          <div className="relative">
            {services.map((service, index) => (
              <div key={service.id} className="mb-8 sm:mb-12 md:mb-24">
                <div
                  className={`flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 
                    ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`flex-1 w-full md:w-auto ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <motion.div
                      className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                      initial={{
                        opacity: 0,
                        x: 0,
                        y: 50,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      whileHover={{ y: -5 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                        className={`w-12 h-12 sm:w-16 sm:h-16 ${
                          service.color
                        } rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto md:mx-0 ${
                          index % 2 === 0 ? "md:ml-auto" : ""
                        }`}
                      >
                        <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 text-center md:text-left">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 text-center md:text-left">
                        {service.description}
                      </p>
                      <div className={`text-center md:text-left ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        <Link
                          href={`/services/${service.title.toLowerCase().replace(/ /g, "-")}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-base sm:text-lg group"
                        >
                          View Details
                          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </Link>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 hidden md:block"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: index * 0.1,
                    }}
                  >
                    <div
                      className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full ${service.color} flex items-center justify-center text-white font-bold text-base sm:text-lg border-4 border-white shadow-md`}
                    >
                      {String(service.id).padStart(2, "0")}
                    </div>
                  </motion.div>

                  {/* Spacer for opposite side - Hidden on mobile */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-8 sm:mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/get-started"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-semibold px-6 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Started Now
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default ServicesTimeline

