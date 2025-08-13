"use client"
import Image from "next/image"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"
import { FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import Link from "next/link"
import { motion } from "framer-motion"

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Orange Circle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-orange-500/10 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-32 h-32 bg-orange-400/8 rounded-full"
          animate={{
            y: [0, -30, 0],
            scale: [1, 0.7, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-600/6 rounded-full"
          animate={{
            x: [0, 40, 0],
            opacity: [0.06, 0.12, 0.06]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 px-6 py-16">
        <motion.div
          className="container mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <Link href="/" className="inline-block group">
                <Image
                  src="/Webutsav__3.png"
                  alt="WebUtsav Logo"
                  width={200}
                  height={120}
                  className="transition-transform duration-300 group-hover:scale-105 mb-6"
                />
              </Link>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Webutsav is a results-driven{" "}
                <span className="text-orange-400 font-semibold">digital marketing agency</span> that helps businesses grow through tailored SEO, PPC, and social media strategies. We focus on delivering measurable success by driving targeted traffic and boosting brand visibility.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <motion.div
                  className="flex items-center group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <MdEmail className="text-white text-sm" />
                  </div>
                  <a
                    href="mailto:info@webutsav.com"
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                  >
                    info@webutsav.com
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-center group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <MdPhone className="text-white text-sm" />
                  </div>
                  <a
                    href="tel:+918766922792"
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
                  >
                    +91 8766922792
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Our Services */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-6 text-white relative">
                Our{" "}
                <span className="text-orange-400">Services</span>
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Web Designing & Development", href: "/Services/web-designing-development" },
                  { name: "Ecommerce Website Designing", href: "/Services//ecommerce-website-designing" },
                  { name: "Google Adwords", href: "/Services/google-adwords" },
                  { name: "Search Engine Optimisation", href: "/Services/search-engine-optimisation" },
                  { name: "Local SEO", href: "/Services/local-seo" },
                  { name: "Social Media Marketing", href: "/Services/social-media-marketing" },
                  { name: "Mobile Application Development", href: "/Services/mobile-application" },
                  { name: "Cab Expenses Tracker", href: "/Services/cab-expenses-tracker" }
                ].map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={item.href}
                      className="block text-gray-300 hover:text-orange-400 transition-all duration-300 text-sm py-1 group relative"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <div className="absolute inset-0 bg-orange-500/10 rounded-md scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-6 text-white relative">
                Quick{" "}
                <span className="text-orange-400">Links</span>
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "/AboutUs" },
                  { name: "Blogs", href: "/Blog" },
                  { name: "Contact Us", href: "/Contact" },
                ].map((nav, index) => (
                  <motion.li
                    key={nav.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={nav.href}
                      className="block text-gray-300 hover:text-orange-400 transition-all duration-300 text-sm py-1 group relative"
                    >
                      <span className="relative z-10">{nav.name}</span>
                      <div className="absolute inset-0 bg-orange-500/10 rounded-md scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Social Media Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-orange-400">Follow Us</h4>
                <div className="flex space-x-3">
                  {[
                    {
                      icon: FaLinkedin,
                      href: "https://www.linkedin.com/company/webutsav/posts/?feedView=all",
                      color: "hover:text-blue-400",
                      label: "LinkedIn"
                    },
                    {
                      icon: FaInstagram,
                      href: "https://www.instagram.com/webutsav/",
                      color: "hover:text-pink-400",
                      label: "Instagram"
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 group relative`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Follow us on ${social.label}`}
                    >
                      <social.icon className="text-lg" />

                      {/* Tooltip */}
                      <div className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {social.label}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-6 text-white relative">
                Our{" "}
                <span className="text-orange-400">Location</span>
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
              </h3>

              <motion.div
                className="flex items-start group cursor-pointer mb-6"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3 mt-1 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <MdLocationOn className="text-white text-sm" />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Wing-A, Downtown Rd, City Vista, Kharadi, Pune, Maharashtra 411014
                </p>
              </motion.div>

              <motion.div
                className="w-full h-48 rounded-xl overflow-hidden shadow-lg border border-orange-500/20 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.287409771789!2d73.94191347496397!3d18.561076882540295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1386837ffd5%3A0xcba65bf9ace19de0!2sWTL%20Tourism%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1740069526162!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            className="border-t border-gray-700 mt-12 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.p
                className="text-gray-400 text-sm mb-4 md:mb-0"
                whileHover={{ color: "#FFA500" }}
              >
                &copy; {new Date().getFullYear()}{" "}
                <span className="text-orange-400 font-semibold">WebUtsav</span> | All rights reserved.
              </motion.p>

              <div className="flex space-x-6">
                <motion.div whileHover={{ y: -2 }}>
                  <Link
                    href="/Privacy"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                  >
                    Privacy Policy
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }}>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                  >
                    Terms of Use
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Professional Badge */}
            <motion.div
              className="text-center mt-6 pt-6 border-t border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-500 text-xs">
                Crafted with{" "}
                <motion.span
                  className="text-orange-400 mx-1"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ♥
                </motion.span>
                by the Webutsav Team
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

