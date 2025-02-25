"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import emailjs from "@emailjs/browser"
import toast, { Toaster } from "react-hot-toast"

// Initialize EmailJS
emailjs.init("hlwUJ7O3Zyky0ZpCL") // Replace with your actual EmailJS user ID

export default function ContactPage() {
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
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-orange-50 p-6">
      <Toaster position="top-right" />
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div ref={contactRef} className="space-y-4">
          <h2 className="text-3xl font-bold text-black">Connect with us</h2>
          <p className="text-gray-700">
            For all other enquiries, please complete this form and one of the team will be in touch.
          </p>
          <div className="bg-white shadow-md p-4 rounded-lg flex items-center space-x-4">
            <span className="text-orange-500">📧</span>
            <a
              href="mailto:info@cobaztech.com"
              className="text-blue-600 hover:underline transition-all duration-300 transform hover:scale-110 hover:text-blue-800"
            >
              info@cobaztech.com
            </a>
          </div>
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.287409771789!2d73.94191347496397!3d18.561076882540295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1386837ffd5%3A0xcba65bf9ace19de0!2sWTL%20Tourism%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1740069526162!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-black mb-4">Send us a message</h3>
          <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-2 border rounded w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 border rounded w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="p-2 border rounded w-full"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              name="subject"
              placeholder="Type Your Subject"
              className="p-2 border rounded w-full"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              name="message"
              placeholder="Type Your Message..."
              className="p-2 border rounded w-full h-28"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

