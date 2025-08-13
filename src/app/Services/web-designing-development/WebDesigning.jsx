"use client";

import { useState ,useRef,useEffect} from "react";
import Image from "next/image";
import {
  FaPlus,
  FaMinus,
  FaGlobe,
  FaShoppingCart,
  FaCogs,
  FaGoogle,
  FaSearch,
  FaMapMarkerAlt,
  FaShareAlt,
  FaMobileAlt 
} from "react-icons/fa";
import { motion ,useInView,useAnimation} from "framer-motion";
import { Globe, LineChart, Laptop, Lock, Rocket, Code, Wrench } from "lucide-react"
import Link from "next/link";

const faqs = [
  {
    question: "E-commerce & Retail",
    answer:
      "High-conversion online stores with secure payment integration..",
  },
  {
    question: "Healthcare & Medical:",
    answer:
      "HIPAA-compliant websites with secure data handling",
  },
  {
    question: "Real Estate & Property",
    answer:
      "Property listing websites with interactive search features.",
  },
  {
    question: "Education & eLearning",
    answer:
      "LMS-integrated websites for schools, universities, and training institutes.",
  },
  {
    question: "Corporate & Business Websites",
    answer:
      "Professional and engaging websites that enhance brand credibility.",
  },
];

const features = [
  {
    title: "Custom Web Solutions",
    description: "Unique, business-specific website designs that reflect your brand identity.",
    icon: Globe,
  },
  {
    title: "SEO-Optimized Websites",
    description: "Built with search engine best practices for better rankings and visibility.",
    icon: LineChart,
  },
  {
    title: "Mobile-Friendly & Responsive",
    description: "Ensuring seamless browsing across all devices, from desktops to smartphones.",
    icon: Laptop,
  },
  {
    title: "Fast & Secure",
    description: "Optimized for speed, security, and performance to enhance user experience.",
    icon: Lock,
  },
  {
    title: "Scalable & Future-Ready",
    description: "Websites designed to grow with your business.",
    icon: Rocket,
  },
  {
    title: "Affordable Pricing",
    description: "Cost-effective web development services for startups, SMEs, and enterprises.",
    icon: Code,
  },
  {
    title: "Ongoing Support & Maintenance",
    description: "Reliable post-launch support to keep your website updated and secure.",
    icon: Wrench,
  },
]

const services = [
  {
    title: "Custom Web Design & Development",
    description: "We build customized, high-performance websites that enhance brand identity and deliver an outstanding user experience. Whether you need a simple corporate website or a complex enterprise solution, our web development services are designed to meet your specific needs.",
  },
  {
    title: "eCommerce Website Development",
    description: "Take your business online with a robust eCommerce website. Webutsav offers end-to-end eCommerce web development in Pune, Mumbai, and India, ensuring secure payment gateways, smooth navigation, and high conversion rates. We work with Shopify, WooCommerce, Magento, and custom-built platforms.",
  },
  {
    title: "UI/UX Design & Development",
    description: "User experience plays a crucial role in a website's success. Our expert UI/UX designers create visually appealing, intuitive, and user-friendly designs that boost engagement and reduce bounce rates",
  },
  {
    title: "CMS Website Development",
    description: "We develop CMS-based websites using WordPress, Joomla, and Drupal, allowing businesses to manage content effortlessly. Our CMS solutions empower you to update, edit, and publish content without technical expertise.",
  },
  {
    title: "Web Application Development",
    description: "We develop CMS-based websites using WordPress, Joomla, and Drupal, allowing businesses to manage content effortlessly. Our CMS solutions empower you to update, edit, and publish content without technical expertise.",
  },
  {
    title: "Website Maintenance & Support",
    description: "Regular updates, security patches, and performance optimizations are essential to keep your website running smoothly. Our maintenance services ensure that your website remains secure, fast, and up to date",
  },
]

const expertiseItems = [
  { title: "Custom Website Design", description: "Unique and engaging websites tailored to your brand." },
  { title: "Mobile-Responsive Development", description: "Optimized for seamless browsing on all devices." },
  {
    title: "SEO-Optimized Development",
    description: "Websites built with search engines in mind for better rankings.",
  },
  { title: "Fast-Loading Pages", description: "Speed-optimized to enhance user experience and engagement." },
  { title: "Secure Web Development", description: "Robust security measures to protect against cyber threats." },
]

const technologies = [
  {
    category: "Frontend Technologies",
    items: [
      { name: "HTML5", logo: "/Technologies/html5.webp" },
      { name: "CSS3", logo: "/Technologies/CSS3.webp" },
      { name: "JavaScript", logo: "/Technologies/javascript.webp" },
      { name: "React.js", logo: "/Technologies/React_js.webp" },
      { name: "Angular", logo: "/Technologies/angularjs.webp" },
      { name: "Vue.js", logo: "/Technologies/Vue.webp" },
    ],
  },
  {
    category: "Backend Technologies",
    items: [
      { name: "PHP", logo: "/Technologies/PHP.webp" },
      { name: "Node.js", logo: "/Technologies/Node.webp" },
      { name: "Python", logo: "/Technologies/Python.webp" },
      { name: "Java", logo: "/Technologies/java.webp" },
      { name: "Laravel", logo: "/Technologies/Laravel.webp" },
      { name: "Django", logo: "/Technologies/django.webp" },
      { name: "Express.js", logo: "/Technologies/express.jpg" },
    ],
  },
  {
    category: "eCommerce Platforms",
    items: [
      { name: "Shopify", logo: "/Technologies/Shopify.webp" },
      { name: "WooCommerce", logo: "/Technologies/woocommerce.webp" },
      { name: "Magento", logo: "/Technologies/Magento.webp" },
    ],
  },
  {
    category: "CMS Solutions",
    items: [
      { name: "WordPress", logo: "/Technologies/WordPress.webp" },
      { name: "Joomla", logo: "/Technologies/Joomla.webp" },
      { name: "Drupal", logo: "/Technologies/drupal.webp" },
    ],
  },
]

const TechItem = ({ item }) => (
  <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <img src={item.logo || "/placeholder.svg"} alt={`${item.name} logo`} className="w-6 h-6" />
    <span className="text-xs font-medium text-gray-800">{item.name}</span>
  </motion.div>
)

const FadeInSection = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default function WebDesigningDevelopment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [openIndex, setOpenIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>

    
      <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Professional Hero Section with Brand Colors */}
        <motion.div
          className="relative w-full h-[80vh] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Brand Colors Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-orange-500"></div>

          {/* Transparent Overlay for Brand Consistency */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 via-transparent to-blue-600/20"></div>

          {/* Floating Brand Color Elements */}
          <motion.div
            className="absolute top-10 right-10 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-48 h-48 bg-blue-300/25 rounded-full blur-2xl"
            animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/90 font-semibold text-xl md:text-2xl mb-4"
            >
              — Our Services
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
            >
              Web Designing & <span className="bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">Development</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Expert web design and development services that deliver stunning, responsive, innovative, and user-focused solutions for your business.
            </motion.p>
          </div>
        </motion.div>

        {/* Main Content Section */}
        <div className="flex flex-wrap p-6">
          {/* Sidebar with About Us Styling */}
          <aside className="w-full md:w-1/5 professional-card p-6 shadow-lg rounded-2xl mb-6 md:mb-0 border border-blue-100/30">
            <h3 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">All Services</span>
            </h3>
            <ul className="space-y-4">
              {[
                {
                  name: "Google Adwords",
                  icon: <FaGoogle />,
                  href: "/Services/google-adwords",
                },
                {
                  name: "Search Engine Optimisation",
                  icon: <FaSearch />,
                  href: "/Services/search-engine-optimisation",
                },
                {
                  name: "Local SEO",
                  icon: <FaMapMarkerAlt />,
                  href: "/Services/local-seo",
                },
                {
                  name: "Social Media Marketing",
                  icon: <FaShareAlt />,
                  href: "/Services/social-media-marketing",
                },
                {
                  name: "Mobile Application Development",
                  icon: <FaMobileAlt/>,
                  href: "/Services/mobile-application",
                },
              ].map((service, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link
                    href={service.href}
                    className="group flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:bg-orange-50 cursor-pointer border border-transparent hover:border-orange-200/50"
                  >
                    <span className={`transition-colors duration-300 ${
                      index % 2 === 0 ? "text-blue-500 group-hover:text-blue-600" : "text-orange-500 group-hover:text-orange-600"
                    }`}>
                      {service.icon}
                    </span>
                    <span className="text-gray-700 group-hover:text-gray-900 font-medium transition-colors duration-300">
                      {service.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </aside>

          {/* Content with About Us Styling */}
          <div className="w-full md:w-3/5 max-w-8xl mx-auto py-12 px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="professional-card p-8 rounded-2xl border border-blue-100/30"
            >
              <h1 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  Web Design and Development Company in Pune
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mb-6"></div>

              <p className="text-gray-600 mt-6 text-lg leading-relaxed mb-4">
                In today's digital-first world, a well-designed, high-performing website is essential for business success. Webutsav, a leading web design and development company in Pune, specializes in creating stunning, SEO-friendly, and user-centric websites that help businesses thrive online.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From corporate websites and eCommerce platforms to complex web applications, we craft digital experiences that engage users, enhance brand visibility, and drive conversions. Our expertise in UI/UX design, custom development, and SEO optimization makes us the preferred choice for businesses in Pune, Mumbai, and across India.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Features Section with About Us Styling */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/20 relative overflow-hidden">
          {/* Floating Brand Color Elements */}
          <motion.div
            className="absolute top-10 right-10 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-48 h-48 bg-blue-300/15 rounded-full blur-2xl"
            animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Webutsav?</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
              <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                💡 We provide cutting-edge web solutions to help businesses grow effectively in the digital landscape.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Brand Colors Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

                  <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-blue-100/30 group-hover:border-orange-200/50 text-center h-full">
                    {/* Icon with Alternating Brand Colors */}
                    <motion.div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 ${
                        index % 2 === 0
                          ? "bg-gradient-to-br from-blue-500 to-blue-600"
                          : "bg-gradient-to-br from-orange-500 to-orange-600"
                      }`}
                      whileHover={{ rotate: 5 }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className={`text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 ${
                      index % 2 === 0 ? "group-hover:text-blue-600" : "group-hover:text-orange-600"
                    }`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Web Services with About Us Styling */}
        <section className="w-full py-16 bg-gradient-to-br from-blue-600 via-blue-500 to-orange-500 text-white relative overflow-hidden">
          {/* Transparent Overlay for Brand Consistency */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 via-transparent to-blue-600/20"></div>

          {/* Floating Brand Color Elements */}
          <motion.div
            className="absolute top-10 right-10 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="container px-6 mx-auto relative z-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-4xl md:text-5xl font-bold mb-4">
                Comprehensive <span className="bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">Web Services</span>
              </h4>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-300 to-orange-100 mx-auto rounded-full"></div>
              <p className="text-white/80 text-xl mt-6 max-w-3xl mx-auto">
                From design to development, we offer complete web solutions in Pune, Mumbai, and across India.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 group-hover:border-orange-300/50 transition-all duration-300 h-full">
                    <div className="flex items-baseline mb-4">
                      <span className={`text-2xl font-bold mr-3 transition-colors duration-300 ${
                        index % 2 === 0 ? "text-orange-300 group-hover:text-orange-200" : "text-blue-300 group-hover:text-blue-200"
                      }`}>
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <h4 className="text-xl font-semibold text-white group-hover:text-orange-100 transition-colors duration-300">
                        {service.title}
                      </h4>
                    </div>
                    <p className="text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section with About Us Styling */}
        <section className="py-16 px-6 bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/20 relative overflow-hidden">
          {/* Floating Brand Color Elements */}
          <motion.div
            className="absolute top-10 right-10 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Webutsav?</span>
              </h4>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
              <p className="text-xl text-gray-600 mt-6 max-w-4xl mx-auto leading-relaxed">
                Webutsav stands out as one of the best web design & development companies in Pune, Mumbai, and India,
                delivering high-quality, business-driven web solutions. Our approach focuses on innovation, user experience,
                and search engine optimization to help businesses establish a strong digital footprint.
              </p>
            </motion.div>

            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-3xl font-bold text-gray-900 mb-4">
                Our <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Expertise</span>
              </h4>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertiseItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`professional-card p-6 rounded-2xl border-l-4 h-full transition-all duration-300 ${
                    index % 2 === 0 ? "border-l-blue-500 hover:border-l-blue-600" : "border-l-orange-500 hover:border-l-orange-600"
                  }`}>
                    <h4 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                      index % 2 === 0 ? "text-gray-900 group-hover:text-blue-600" : "text-gray-900 group-hover:text-orange-600"
                    }`}>
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section with About Us Styling */}
        <section className="py-16 px-6 bg-white relative overflow-hidden">
          {/* Floating Brand Color Elements */}
          <motion.div
            className="absolute bottom-10 right-10 w-48 h-48 bg-blue-300/15 rounded-full blur-2xl"
            animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Technologies <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">We Use</span>
              </h4>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
              <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                Our developers are skilled in the latest technologies to build modern, scalable, and future-ready websites.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Brand Colors Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

                  <div className="relative professional-card p-6 rounded-2xl border border-blue-100/30 group-hover:border-orange-200/50 h-full">
                    <h4 className={`text-lg font-bold mb-4 transition-colors duration-300 ${
                      index % 2 === 0 ? "text-gray-900 group-hover:text-blue-600" : "text-gray-900 group-hover:text-orange-600"
                    }`}>
                      {tech.category}
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {tech.items.map((item, itemIndex) => (
                        <TechItem key={itemIndex} item={item} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section with About Us Styling */}
        <section className="py-16 px-6 bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/20 relative overflow-hidden">
          {/* Floating Brand Color Elements */}
          <motion.div
            className="absolute top-10 left-10 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Industries <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">We Serve</span>
              </h4>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
              <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                Webutsav caters to a diverse range of industries, providing tailored web development services to meet their unique business needs.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="mb-6 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.button
                    onClick={() => toggleFAQ(index)}
                    className={`flex justify-between items-center w-full text-left p-6 professional-card rounded-2xl border transition-all duration-300 ${
                      openIndex === index
                        ? "border-orange-200/50 bg-orange-50/50"
                        : "border-blue-100/30 hover:border-orange-200/50"
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    <span className={`text-xl font-bold transition-colors duration-300 ${
                      index % 2 === 0 ? "text-gray-900 group-hover:text-blue-600" : "text-gray-900 group-hover:text-orange-600"
                    }`}>
                      {faq.question}
                    </span>
                    <motion.span
                      className={`transition-colors duration-300 ${
                        index % 2 === 0 ? "text-blue-500" : "text-orange-500"
                      }`}
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openIndex === index ? <FaMinus /> : <FaPlus />}
                    </motion.span>
                  </motion.button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100/30"
                    >
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Process Section with About Us Styling */}
        <section className="py-16 px-6 bg-white relative overflow-hidden">
          {/* Floating Brand Color Elements */}
          <motion.div
            className="absolute top-10 right-10 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-48 h-48 bg-blue-300/15 rounded-full blur-2xl"
            animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Development <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Process</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
              <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
                Our web development process is designed to deliver outstanding results through systematic approach.
              </p>
            </motion.div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {["Consultation & Strategy", "UI/UX Design & Prototyping", "Development & Coding", "Testing & Quality Assurance","Deployment & Launch","Ongoing Support & Maintenance"].map(
                (step, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    {/* Brand Colors Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

                    {/* Card Content */}
                    <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-blue-100/30 group-hover:border-orange-200/50 text-center">
                      {/* Step Number with Alternating Brand Colors */}
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                        index % 2 === 0
                          ? "bg-gradient-to-br from-blue-500 to-blue-600"
                          : "bg-gradient-to-br from-orange-500 to-orange-600"
                      }`}>
                        <span className="text-white font-bold text-xl">{`0${index + 1}`}</span>
                      </div>

                      {/* Content */}
                      <h4 className={`text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 ${
                        index % 2 === 0 ? "group-hover:text-blue-600" : "group-hover:text-orange-600"
                      }`}>
                        {step}
                      </h4>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {index === 0 && "Understanding your business goals and planning a customized solution."}
                        {index === 1 && "Creating visually appealing, user-friendly designs."}
                        {index === 2 && "Bringing the design to life with advanced technologies."}
                        {index === 3 && "Conducting rigorous tests for performance, security, and compatibility."}
                        {index === 4 && "Ensuring a seamless transition from development to live website."}
                        {index === 5 && "Keeping your website updated, secure, and optimized for growth."}
                      </p>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>
        {/* CTA Section with About Us Styling */}
        <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-500 to-orange-500 text-white relative overflow-hidden">
          {/* Transparent Overlay for Brand Consistency */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 via-transparent to-blue-600/20"></div>

          {/* Floating Brand Color Elements */}
          <motion.div
            className="absolute top-10 right-10 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to Build Your <span className="bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">Dream Website?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/80 text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              If you're looking for a top web design and development company in Pune, Webutsav is your go-to solution. Our expert team specializes in building high-performance, visually stunning, and SEO-optimized websites tailored to your business needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.a
                href="tel:+918766922792"
                className="inline-block px-10 py-5 bg-white/95 backdrop-blur-sm font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group border border-blue-200/30"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-3">
                  <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Let's Build Your Website Today!</span>
                  <motion.svg
                    className="w-6 h-6 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}