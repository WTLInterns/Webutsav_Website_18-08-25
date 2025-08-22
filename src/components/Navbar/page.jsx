"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { ChevronDown, Menu, X, Mail, Phone, User, Globe, MessageSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../../components/ui/button"

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isInquiryOpen, setIsInquiryOpen] = useState(false)
  const servicesRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setIsServicesOpen(false)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsServicesOpen(false)
  }

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/Webutsav__3.png" 
              alt="WebUtsav Logo" 
              width={350} 
              height={250} 
              className="h-24 w-auto transform transition-transform duration-300 hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" isScrolled={isScrolled}>
              Home
            </NavLink>
            <NavLink href="/AboutUs" isScrolled={isScrolled}>
              About Us
            </NavLink>
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-amber-500 transition-colors flex items-center group`}
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>{isServicesOpen && <ServicesDropdown />}</AnimatePresence>
            </div>
            <NavLink href="/Blog" isScrolled={isScrolled}>
              Blog
            </NavLink>
            <NavLink href="/Contact" isScrolled={isScrolled}>
              Contact Us
            </NavLink>
            {/* Products menu item - navigates to /products */}
            <NavLink href="/products" isScrolled={isScrolled}>
              Products
            </NavLink>
            <NavLink href="/Career" isScrolled={isScrolled}>
              Careers
            </NavLink>
            <button
              onClick={() => setIsInquiryOpen(true)}
              className={`${
                isScrolled ? "text-gray-800" : "text-white"
              } hover:text-amber-500 transition-colors duration-200 relative group`}
            >
              Inquiry
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
          </div>

          {/* Client Login Button */}
          {/* <Link
            href="/login"
            className={`hidden md:inline-block ${
              isScrolled ? "bg-amber-400 text-white" : "bg-white text-amber-400"
            } hover:bg-amber-500 hover:text-white px-6 py-2 rounded-md transition-colors duration-300 transform hover:scale-105`}
          >
            Client Login
          </Link> */}

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-gray-800" : "text-white"} focus:outline-none`}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <MobileNavLink href="/" onClick={closeMobileMenu}>
                  Home
                </MobileNavLink>
                <MobileNavLink href="/AboutUs" onClick={closeMobileMenu}>
                  About Us
                </MobileNavLink>
                <div>
                  <button
                    className="w-full text-left px-3 py-2 text-base font-medium text-gray-800 hover:text-amber-500 hover:bg-gray-50 rounded-md transition-colors duration-200 flex items-center justify-between"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    Services
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && <MobileServicesDropdown closeMobileMenu={closeMobileMenu} />}
                  </AnimatePresence>
                </div>
                <MobileNavLink href="/Blog" onClick={closeMobileMenu}>
                  Blog
                </MobileNavLink>
                <MobileNavLink href="/Contact" onClick={closeMobileMenu}>
                  Contact
                </MobileNavLink>
                <MobileNavLink href="/products" onClick={closeMobileMenu}>
                  Products
                </MobileNavLink>
                <MobileNavLink href="/Career" onClick={closeMobileMenu}>
                  Careers
                </MobileNavLink>
                <button
                  onClick={() => {
                    setIsInquiryOpen(true)
                    closeMobileMenu()
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-800 hover:text-amber-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  Inquiry
                </button>
                {/* <Link
                  href="/login"
                  className="block px-3 py-2 text-base font-medium text-white bg-amber-400 hover:bg-amber-500 rounded-md transition-colors duration-300 transform hover:scale-105"
                  onClick={closeMobileMenu}
                >
                  Client Login
                </Link> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
    
    {/* Inquiry Modal */}
    <AnimatePresence>
      {isInquiryOpen && (
        <InquiryModal 
          isOpen={isInquiryOpen} 
          onClose={() => setIsInquiryOpen(false)} 
        />
      )}
    </AnimatePresence>
    </>
  )
}

const NavLink = ({ href, children, isScrolled }) => (
  <Link
    href={href}
    className={`${
      isScrolled ? "text-gray-800" : "text-white"
    } hover:text-amber-500 transition-colors duration-200 relative group`}
  >
    {children}
    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
  </Link>
)

const MobileNavLink = ({ href, children, onClick }) => (
  <Link
    href={href}
    className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-amber-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
    onClick={onClick}
  >
    {children}
  </Link>
)

const ServicesDropdown = () => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
  >
    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
{/*       <DropdownLink href="/Services"> */}
{/*         <span className="font-semibold text-orange-600">All Services Overview</span> */}
{/*       </DropdownLink> */}
      <div className="border-t border-gray-100 my-1"></div>
      <DropdownLink href="/Services/web-designing-development">Web Designing & Development</DropdownLink>
      <DropdownLink href="/Services/ecommerce-website-designing">Ecommerce Website Designing</DropdownLink>
      <DropdownLink href="/Services/google-adwords">Google Adwords</DropdownLink>
      <DropdownLink href="/Services/search-engine-optimisation">Search Engine Optimization</DropdownLink>
      <DropdownLink href="/Services/local-seo">Local SEO</DropdownLink>
      <DropdownLink href="/Services/social-media-marketing">Social Media Marketing</DropdownLink>
      <DropdownLink href="/Services/mobile-application">Mobile Application Development</DropdownLink>
      <DropdownLink href="/Services/cab-expenses-tracker">Cab Expenses Tracker</DropdownLink>
    </div>
  </motion.div>
)

const MobileServicesDropdown = ({ closeMobileMenu }) => (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
    transition={{ duration: 0.2 }}
    className="pl-4 overflow-hidden"
  >
    <MobileNavLink href="/Services" onClick={closeMobileMenu}>
      <span className="font-semibold text-orange-600">All Services Overview</span>
    </MobileNavLink>
    <div className="border-t border-gray-200 my-2 mx-4"></div>
    <MobileNavLink href="/Services/web-designing-development" onClick={closeMobileMenu}>
      Web Designing & Development
    </MobileNavLink>
    <MobileNavLink href="/Services//ecommerce-website-designing" onClick={closeMobileMenu}>
      Ecommerce Website Designing
    </MobileNavLink>
    <MobileNavLink href="/Services/google-adwords" onClick={closeMobileMenu}>
      Google Adwords
    </MobileNavLink>
    <MobileNavLink href="/Services/search-engine-optimisation" onClick={closeMobileMenu}>
      Search Engine Optimization
    </MobileNavLink>
    <MobileNavLink href="/Services/local-seo" onClick={closeMobileMenu}>
      Local SEO
    </MobileNavLink>
    <MobileNavLink href="/Services/social-media-marketing" onClick={closeMobileMenu}>
      Social Media Marketing
    </MobileNavLink>
    <MobileNavLink href="/Services/mobile-application" onClick={closeMobileMenu}>
      Mobile Application Development
    </MobileNavLink>
    <MobileNavLink href="/Services/cab-expenses-tracker" onClick={closeMobileMenu}>
      Cab Expenses Tracker
    </MobileNavLink>
  </motion.div>
)

const DropdownLink = ({ href, children }) => (
  <Link
    href={href}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-amber-500 transition-colors duration-200"
  >
    {children}
  </Link>
)

const InquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    country: '',
    message: ''
  })

  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Armenia', 'Australia',
    'Austria', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Belarus', 'Belgium',
    'Bolivia', 'Bosnia and Herzegovina', 'Brazil', 'Bulgaria', 'Cambodia',
    'Canada', 'Chile', 'China', 'Colombia', 'Croatia', 'Czech Republic',
    'Denmark', 'Ecuador', 'Egypt', 'Estonia', 'Finland', 'France', 'Georgia',
    'Germany', 'Ghana', 'Greece', 'Hungary', 'Iceland', 'India', 'Indonesia',
    'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Japan', 'Jordan',
    'Kazakhstan', 'Kenya', 'Kuwait', 'Latvia', 'Lebanon', 'Lithuania',
    'Luxembourg', 'Malaysia', 'Mexico', 'Morocco', 'Netherlands', 'New Zealand',
    'Nigeria', 'Norway', 'Pakistan', 'Peru', 'Philippines', 'Poland',
    'Portugal', 'Qatar', 'Romania', 'Russia', 'Saudi Arabia', 'Singapore',
    'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka',
    'Sweden', 'Switzerland', 'Thailand', 'Turkey', 'Ukraine', 'United Arab Emirates',
    'United Kingdom', 'United States', 'Uruguay', 'Venezuela', 'Vietnam'
  ]
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://api.webutsav.com/api/inquiries/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: result.message })
        setFormData({ name: '', email: '', phoneNumber: '', country: '', message: '' })
        setTimeout(() => {
          onClose()
          setSubmitStatus(null)
        }, 2000)
      } else {
        setSubmitStatus({ type: 'error', message: 'Failed to submit inquiry. Please try again.' })
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-white bg-opacity-20 p-2 rounded-full">
                <Mail className="text-white" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">Send Inquiry</h2>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors p-1 hover:bg-white hover:bg-opacity-20 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-amber-100 mt-2">Get in touch with us for your business needs</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-2 text-amber-600" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-2 text-amber-600" />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Phone className="w-4 h-4 inline mr-2 text-amber-600" />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Globe className="w-4 h-4 inline mr-2 text-amber-600" />
                Country *
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-gray-50 focus:bg-white appearance-none cursor-pointer"
              >
                <option value="">Select your country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <MessageSquare className="w-4 h-4 inline mr-2 text-amber-600" />
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
              placeholder="Tell us about your requirements..."
            />
          </div>

          {submitStatus && (
            <div className={`p-4 rounded-lg text-sm font-medium ${
              submitStatus.type === 'success' 
                ? 'bg-green-50 text-green-700 border border-green-200' 
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}>
              <div className="flex items-center">
                {submitStatus.type === 'error' ? (
                  <X size={16} className="mr-2" />
                ) : (
                  <Mail size={16} className="mr-2" />
                )}
                {submitStatus.message}
              </div>
            </div>
          )}

          <div className="flex space-x-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all duration-200 font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-6 rounded-lg hover:from-amber-600 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </div>
              ) : (
                'Send Inquiry'
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default Navbar