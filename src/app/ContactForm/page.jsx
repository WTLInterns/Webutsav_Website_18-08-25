"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function ContactPage() {
  const formRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

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

    ScrollTrigger.refresh()
  }, [])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-orange-50 p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div ref={contactRef} className="space-y-4">
          <h2 className="text-3xl font-bold text-black">Connect with us</h2>
          <p className="text-gray-700">
            For all other enquiries, please complete this form and one of the team will be in touch.
          </p>
          <div className="bg-white shadow-md p-4 rounded-lg flex items-center space-x-4">
            <span className="text-orange-500">📧</span>
            <span className="text-black">info@wtl.in</span>
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
          <p className="text-gray-600 text-sm">We're available from 09 am – 7 pm EST, 5 days a week.</p>
        </div>

        {/* Contact Form */}
        <div ref={formRef} className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-black mb-4">Send us a message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="p-2 border rounded w-full" />
              <input type="email" placeholder="Email" className="p-2 border rounded w-full" />
            </div>
            <input type="text" placeholder="Your Phone Number" className="p-2 border rounded w-full" />
            <input type="text" placeholder="Type Your Subject" className="p-2 border rounded w-full" />
            <textarea placeholder="Type Your Message..." className="p-2 border rounded w-full h-28"></textarea>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

