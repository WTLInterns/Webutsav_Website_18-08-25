"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import emailjs from "@emailjs/browser"
import toast, { Toaster } from "react-hot-toast"

// Initialize EmailJS
emailjs.init("hlwUJ7O3Zyky0ZpCL") // Replace with your actual EmailJS user ID

export default function ContactForm() {
  const formRef = useRef(null)
  const contactRef = useRef(null)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      )
    }
    ScrollTrigger.refresh()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    if (!formRef.current) {
      console.error("Form reference is null")
      toast.error("An error occurred. Please try again.")
      setIsLoading(false)
      return
    }

    try {
      console.log("Attempting to send email...")
      const response = await emailjs.sendForm(
        "service_8moo2xe", // Your EmailJS service ID
        "template_qbbd4de", // Your EmailJS template ID
        formRef.current, // The form element
        "hlwUJ7O3Zyky0ZpCL", // Your EmailJS public key
      )
      console.log("EmailJS Response:", response)
      toast.success("Message sent successfully!")
      // Reset form fields
      setName("")
      setEmail("")
      setPhone("")
      setSubject("")
      setMessage("")
    } catch (error) {
      console.error("EmailJS Error:", error)
      if (error.text) {
        toast.error(`Failed to send message: ${error.text}`)
      } else if (error.message) {
        toast.error(`Failed to send message: ${error.message}`)
      } else {
        toast.error("Failed to send message. Please try again later.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center p-6">
      <Toaster position="top-right" />
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info with About Us Styling */}
        <motion.div
          ref={contactRef}
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="professional-card p-8 rounded-2xl border border-blue-100/30">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Connect with us</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mb-6"></div>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              For all other enquiries, please complete this form and one of the team will be in touch.
            </p>

            {/* Contact Card */}
            <motion.div
              className="group professional-card p-6 rounded-2xl border border-blue-100/30 hover:border-orange-200/50 transition-all duration-300 mb-6"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">📧</span>
                </div>
                <a
                  href="mailto:info@webutsav.com"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors duration-300"
                >
                  info@webutsav.com
                </a>
              </div>
            </motion.div>

            {/* Map with About Us Styling */}
            <motion.div
              className="professional-card rounded-2xl overflow-hidden border border-blue-100/30 h-64"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.287409771789!2d73.94191347496397!3d18.561076882540295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1386837ffd5%3A0xcba65bf9ace19de0!2sWTL%20Tourism%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1740069526162!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form with About Us Styling */}
        <motion.div
          className="professional-card p-8 rounded-2xl border border-blue-100/30"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Send us a message</span>
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mb-8"></div>

          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-4 border border-blue-100/50 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-4 border border-orange-100/50 rounded-xl focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}  
            >
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="w-full p-4 border border-blue-100/50 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}         
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <input
                type="text"
                name="subject"
                placeholder="Type Your Subject"
                className="w-full p-4 border border-orange-100/50 rounded-xl focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <textarea
                name="message"
                placeholder="Type Your Message..."
                className="w-full p-4 border border-blue-100/50 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300 bg-white/80 backdrop-blur-sm h-32 resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-orange-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center space-x-2">
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Sending...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

