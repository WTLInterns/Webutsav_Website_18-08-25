"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setIsServicesOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="../next.svg" alt="" width={180} height={50} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" isScrolled={isScrolled}>
              Home
            </NavLink>
            <NavLink href="/about" isScrolled={isScrolled}>
              About Us
            </NavLink>
            <div className="relative group">
              <button
                className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-amber-500 transition-colors flex items-center`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isServicesOpen && <ServicesDropdown />}
            </div>
            <NavLink href="/blog" isScrolled={isScrolled}>
              Blog
            </NavLink>
            <NavLink href="/contact" isScrolled={isScrolled}>
              Contact
            </NavLink>
          </div>

          {/* Client Login Button */}
          <Link
            href="/login"
            className={`hidden md:inline-block ${
              isScrolled ? "bg-amber-400 text-white" : "bg-white text-amber-400"
            } hover:bg-amber-500 hover:text-white px-6 py-2 rounded-md transition-colors`}
          >
            Client Login
          </Link>

          {/* Mobile Menu Button */}
          <button className={`md:hidden ${isScrolled ? "text-gray-800" : "text-white"}`} onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileNavLink href="/">Home</MobileNavLink>
              <MobileNavLink href="/about">About Us</MobileNavLink>
              <div>
                <button
                  className="w-full text-left px-3 py-2 text-base font-medium text-gray-800 hover:text-amber-500 hover:bg-gray-50"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1 inline" />
                </button>
                {isServicesOpen && <MobileServicesDropdown />}
              </div>
              <MobileNavLink href="/blog">Blog</MobileNavLink>
              <MobileNavLink href="/contact">Contact</MobileNavLink>
              <Link
                href="/login"
                className="block px-3 py-2 text-base font-medium text-white bg-amber-400 hover:bg-amber-500 rounded-md transition-colors"
              >
                Client Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

const NavLink = ({ href, children, isScrolled }) => (
  <Link href={href} className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-amber-500 transition-colors`}>
    {children}
  </Link>
)

const MobileNavLink = ({ href, children }) => (
  <Link
    href={href}
    className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-amber-500 hover:bg-gray-50 rounded-md"
  >
    {children}
  </Link>
)

const ServicesDropdown = () => (
  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <DropdownLink href="/services/web-development">Web Development</DropdownLink>
      <DropdownLink href="/services/digital-marketing">Digital Marketing</DropdownLink>
      <DropdownLink href="/services/app-development">App Development</DropdownLink>
    </div>
  </div>
)

const MobileServicesDropdown = () => (
  <div className="pl-4">
    <MobileNavLink href="/services/web-development">Web Development</MobileNavLink>
    <MobileNavLink href="/services/digital-marketing">Digital Marketing</MobileNavLink>
    <MobileNavLink href="/services/app-development">App Development</MobileNavLink>
  </div>
)

const DropdownLink = ({ href, children }) => (
  <Link href={href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
    {children}
  </Link>
)

export default Navbar

