"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "../components/Navbar/page.jsx"
import Hero from "../components/Hero/page.jsx"
import About from "../components/About/page.jsx"
import Services from "../components/Services/page.jsx"
import WhyChooseUs from "../components/Why_Choose_Us/Why_Choose_Us"
import PartnerBrands from "../components/Partner_Brands/page.jsx"

// Page transition variants
const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}

const sectionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export default function HomeClient() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Add intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('section, .section-animate')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <Navbar />
      
      <motion.div variants={sectionVariants}>
        <Hero />
      </motion.div>
      
      <motion.div variants={sectionVariants} className="section-animate">
        <About />
      </motion.div>
      
      <motion.div variants={sectionVariants} className="section-animate">
        <Services />
      </motion.div>
      
      <motion.div variants={sectionVariants} className="section-animate">
        <WhyChooseUs />
      </motion.div>
      
      <motion.div variants={sectionVariants} className="section-animate">
        <PartnerBrands />
      </motion.div>
    </motion.div>
  )
}
