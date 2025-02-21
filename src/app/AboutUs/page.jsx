"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import Connect from "../Connect/page"
import { motion, useScroll, useTransform } from "framer-motion"
import { FaUserTie, FaCogs, FaCheckCircle, FaLightbulb } from "react-icons/fa"

const FeatureItem = ({ icon, title, description }) => (
  <motion.div
    className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="text-orange-500 text-3xl">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
)

const features = [
  {
    icon: <FaUserTie />,
    title: "Expertise",
    description: "Years of experience in digital marketing.",
  },
  {
    icon: <FaCogs />,
    title: "Customized Solutions",
    description: "Tailored strategies for maximum impact.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Commitment to Quality",
    description: "High-quality results exceed expectations.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovative Technology",
    description: "Utilizing cutting-edge tools.",
  },
]

export default function AboutUs() {
  const [offset, setOffset] = useState(0)
  const { scrollYProgress } = useScroll()
  const pRef = useRef(null)
  const h2Ref = useRef(null)

  useEffect(() => {
    if (pRef.current && h2Ref.current) {
      const tl = gsap.timeline()

      tl.fromTo(
        pRef.current.children,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: "power3.out" },
      )

      tl.fromTo(
        h2Ref.current.children,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: "power3.out" },
        "-=0.5",
      )
    }
  }, [])

  const pText = "— About Us"
  const h2Text = "Transforming Businesses With Innovative T echnology!"

  useEffect(() => {
    let animationFrame
    const updateOffset = () => {
      setOffset((prev) => (prev - 1) % window.innerWidth)
      animationFrame = requestAnimationFrame(updateOffset)
    }
    animationFrame = requestAnimationFrame(updateOffset)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  const stats = [
    { value: 250, label: "Happy Clients" },
    { value: 50, label: "Team Members" },
    { value: 510, label: "Projects Completed" },
    { value: 12, label: "Awards Won" },
  ]

  const images = [
    { src: "/images/royalty.webp", alt: "Image 1" },
    { src: "/digim.webp", alt: "Image 2" },
    { src: "/images/social.webp", alt: "Image 3" },
    { src: "/images/responsive.webp", alt: "Image 4" },
    { src: "/images/seoptimization.webp", alt: "Image 5" },
  ]

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <>
      <div className="overflow-hidden">
        <motion.div
          className="relative w-full h-[70vh] flex items-center px-4 sm:px-8 lg:px-16"
          style={{
            backgroundImage: "url('/dm5.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            y,
          }}
        >
          <div className="max-w-lg sm:max-w-xl lg:max-w-2xl text-left z-10">
            <p ref={pRef} className="text-yellow-400 font-bold text-lg sm:text-xl md:text-2xl mb-4">
              {pText.split("").map((letter, index) => (
                <span key={index} className="inline-block">
                  {letter}
                </span>
              ))}
            </p>
            <h2 ref={h2Ref} className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
              {h2Text.split(" ").map((word, index) => (
                <span key={index} className="inline-block mr-2">
                  {word}
                </span>
              ))}
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 py-20 bg-gradient-to-b from-yellow-50 to-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-shrink-0">
            <Image
              src="/team-marketing-team.jpg"
              alt="Digimedia Solutions Team"
              width={500}
              height={350}
              className="rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-500"
            />
          </div>

          <div className="text-center md:text-left max-w-lg">
            <h2 className="text-4xl font-bold text-amber-500 mb-6">About Digimedia Solutions</h2>
            <p className="text-gray-700 mb-4 text-lg">
              We have successfully completed more than 2,000 projects for over 300 clients, delivering impactful results
              through our insight-driven strategies.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-amber-600 transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        <div className="relative w-full py-20 flex justify-center items-center overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url('/dm.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              animation: "flowEffect 20s linear infinite",
            }}
          ></div>

          <div className="relative flex flex-col md:flex-row gap-8 text-white p-4 max-w-6xl">
            <motion.div
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-xl flex-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-3xl font-bold mb-4">OUR VISION</h2>
              <p className="text-lg">
                To be the leading provider of digital solutions, empowering businesses through innovation and
                cutting-edge technology.
              </p>
            </motion.div>
            <motion.div
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-xl flex-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-3xl font-bold mb-4">OUR MISSION</h2>
              <p className="text-lg">
                Helping businesses reach their full potential through comprehensive digital strategies and personalized
                solutions.
              </p>
            </motion.div>
          </div>
        </div>

        <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 to-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              We provide insights-based solutions to help businesses grow effectively in the digital landscape.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <div className="flex flex-col items-center justify-center py-20 px-8 bg-gradient-to-b from-white to-gray-100">
          <motion.h4
            className="text-teal-600 font-semibold text-xl mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Work Process
          </motion.h4>
          <motion.h2
            className="text-5xl font-extrabold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Proven Methodology
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center mb-16 max-w-3xl text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We follow a systematic approach to ensure the success of your digital initiatives, maximizing efficiency and
            delivering outstanding results.
          </motion.p>
          <div className="relative w-full max-w-5xl flex flex-wrap justify-center gap-8">
            {["Research", "Ideate", "Develop", "Launch"].map((step, index) => (
              <motion.div key={index} className="w-64 text-center" whileHover={{ scale: 1.05 }}>
                <div
                  className={`w-24 h-24 text-3xl font-bold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-300 
                ${index === 0 ? "bg-blue-500 text-white" : ""} 
                ${index === 1 ? "bg-green-500 text-white" : ""} 
                ${index === 2 ? "bg-purple-500 text-white" : ""} 
                ${index === 3 ? "bg-red-500 text-white" : ""}`}
                >
                  {`0${index + 1}`}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step}</h3>
                <p className="text-gray-600">
                  {index === 0 && "Analyze market trends and client needs"}
                  {index === 1 && "Brainstorm innovative solutions"}
                  {index === 2 && "Create and refine the product"}
                  {index === 3 && "Deploy and monitor performance"}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <section className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">Our Achievements</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-8 rounded-xl shadow-xl transition-all duration-300"
                >
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="text-6xl font-extrabold text-amber-500 mb-2"
                  >
                    {stat.value}+
                  </motion.div>
                  <div className="text-xl text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="text-center py-20 bg-gradient-to-b from-purple-600 to-indigo-700 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.2, scale: 1.2 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
            }}
            className="absolute w-96 h-96 bg-yellow-300 rounded-full top-0 left-0 blur-3xl opacity-20"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.2, scale: 1.3 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              delay: 1,
            }}
            className="absolute w-96 h-96 bg-blue-300 rounded-full bottom-0 right-0 blur-3xl opacity-20"
          />

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-5xl font-extrabold text-white tracking-wide mb-8"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <p className="text-xl text-white mb-12">
              Schedule a free expert session and discover how we can help you achieve your digital goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#F59E0B" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-amber-500 text-white font-bold text-xl rounded-full shadow-lg transition-all duration-300 focus:outline-none"
            >
              Book Your Free Session Now
            </motion.button>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <Connect />
        </section>
      </div>
    </>
  )
}

