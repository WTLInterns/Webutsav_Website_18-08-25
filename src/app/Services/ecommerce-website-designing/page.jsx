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
import Head from "next/head";

const faqs = [
  {
    question: "Retail & Fashion",
    answer:"Trendy and visually appealing online stores",
  },
  {
    question: "Electronics & Gadgets",
    answer:"Secure, scalable platforms for selling tech products",
  },
  {
    question: "Healthcare & Medical",
    answer:"Online pharmacies and healthcare product websites",
  },
  {
    question: "Grocery & Food Delivery",
    answer:"Feature-rich grocery delivery and restaurant ordering platforms",
  },
  {
    question: "B2B & Wholesale ",
    answer:"Custom solutions for bulk order processing and vendor management",
  },
];

const features = [
  {
    title: "Custom eCommerce Solutions",
    description: "Designed to match your brand identity and business needs",
    icon: Globe,
  },
  {
    title: "SEO-Optimized Websites",
    description: "Built to rank higher in search engines and drive organic traffic",
    icon: LineChart,
  },
  {
    title: "Mobile-Responsive Designs",
    description: "Ensuring seamless shopping experiences across all devices",
    icon: Laptop,
  },
  {
    title: "Fast & Secure Websites",
    description: "High-speed performance and robust security features",
    icon: Lock,
  },
  {
    title: "Affordable Pricing",
    description: "Cost-effective eCommerce solutions for startups, SMEs, and enterprises",
    icon: Rocket,
  },
  {
    title: "Ongoing Support & Maintenance",
    description: "Ensuring smooth operation and regular updates",
    icon: Code,
  },
]

const services = [
  {
    title: "Custom eCommerce Website Design & Development",
    description: "We create fully customized eCommerce websites that offer seamless navigation, attractive UI/UX, and high-speed performance. As a top eCommerce website designing company in Pune, we build online stores that convert visitors into buyers.",
  },
  {
    title: "eCommerce Website Redesign & Upgrade",
    description: "Already have an eCommerce website but struggling with performance issues? We revamp existing websites with modern UI/UX improvements, faster loading times, and enhanced security features.",
  },
  {
    title: "Multi-Vendor eCommerce Marketplace Development",
    description: "Looking to build the next Amazon or Flipkart? Our multi-vendor marketplace solutions provide seamless seller onboarding, product catalog management, and payment gateway integrations.",
  },
  {
    title: "Shopify, WooCommerce, & Magento Development",
    description: "Webutsav specializes in Shopify development, WooCommerce customization, and Magento eCommerce solutions, ensuring feature-rich, scalable, and easy-to-manage online stores.",
  },
  {
    title: "Payment Gateway & API Integration",
    description: "We integrate secure payment gateways like Razorpay, PayPal, Stripe, and UPI, ensuring smooth and secure online transactions for customers.",
  },
  {
    title: "Ecommerce Mobile App Development",
    description: "Expand your online business with a dedicated eCommerce mobile app. We build Android and iOS apps with features like push notifications, live order tracking, and easy checkout.",
  },
  {
    title: "SEO & Digital Marketing for eCommerce Websites",
    description: "A well-designed website alone isn't enough – you need traffic and conversions! Our eCommerce SEO & digital marketing services in Pune, Mumbai, and India help businesses attract more customers through Google, social media, and paid ads.",
  },
]

const expertiseItems = [
  { title: "Custom eCommerce Design", description: "Unique store designs for a strong brand presence" },
  { title: "User-Friendly Interfaces", description: "Smooth, hassle-free customer experiences" },
  {
    title: "SEO-Optimized Development",
    description: "Higher Google rankings with built-in SEO optimization",
  },
  { title: "Fast-Loading Pages", description: "Optimized for high speed and performance" },
  { title: "Secure Payment & Checkout Systems", description: "Secure transactions for buyers and sellers" },
  { title: "Inventory & Order Management ", description: "Easy-to-use dashboard for managing stock and orders" },
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

export default function EcommerceWebsiteDesigning() {
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
      <Head>
        <title>Ecommerce Website Designing | Build Your Online Store with WebUtsav</title>
        <meta name="description" content="Professional eCommerce website design services by WebUtsav. We create high-converting online stores with seamless checkout, mobile responsiveness, and secure payment integration." />
        <link rel="canonical" href="https://webutsav.com/services/ecommerce-website-designing" />
        <meta name="author" content="WebUtsav" />
        <meta name="keywords" content="ecommerce website designing, online store design, ecommerce development, WebUtsav ecommerce services, online shop website, ecommerce solutions, shopify development, woocommerce, magento" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Ecommerce Website Designing | Build Your Online Store with WebUtsav" />
        <meta property="og:description" content="Professional eCommerce website design services by WebUtsav. We create high-converting online stores with seamless checkout and mobile responsiveness." />
        <meta property="og:url" content="https://webutsav.com/services/ecommerce-website-designing" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <motion.div
          className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/aboutus.jpg"
            alt="Google AdWords"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-6 md:px-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-yellow-400 font-bold text-xl sm:text-2xl md:text-3xl mb-4"
            >
              — Our Services
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight"
            >
              Ecommerce Website Designing
            </motion.h1>
          </div>
        </motion.div>

        {/* Main Content Section */}
        <div className="flex flex-wrap p-6">
          {/* Sidebar */}
          <aside className="w-full md:w-1/5 bg-gradient-to-b from-white to-gray-100 p-6 shadow-lg rounded-lg mb-6 md:mb-0">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              All Services
            </h3>
            <ul className="space-y-4">
              {[
                {
                  name: "Web Designing & Development",
                  icon: <FaGlobe />,
                  href: "/Services/web-designing-development",
                },
                {
                  name: "Ecommerce Website Designing",
                  icon: <FaShoppingCart />,
                  href: "/Services//ecommerce-website-designing",
                },
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
                    className="group flex items-center space-x-3 p-3 rounded-md transition-all duration-200 hover:bg-white hover:shadow-md cursor-pointer"
                  >
                    <span className="text-red-500 group-hover:text-red-600 transition-colors duration-200">
                      {service.icon}
                    </span>
                    <span className="text-gray-700 group-hover:text-gray-900 font-medium transition-colors duration-200">
                      {service.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <div className="w-full md:w-3/5 max-w-8xl mx-auto py-12">
            <h1 className="text-4xl font-bold text-gray-800">
            Ecommerce Website Designing Company in Pune| Best Ecommerce Website Development in India
            </h1>
            <p className="text-gray-600 mt-6 text-2xl" >
            In the fast-evolving digital marketplace, having a professionally designed eCommerce website is essential for business growth. At Webutsav, a trusted eCommerce website designing company in Pune, we specialize in creating stunning, high-performing, and conversion-driven online stores tailored to your business needs.
            </p>
            <p className="text-gray-600 mt-4 text-2xl" >
            Whether you're launching a new eCommerce business or upgrading an existing one, our team provides cutting-edge eCommerce website development solutions that are mobile-friendly, SEO-optimized, and feature-rich.
            </p>
          </div>
        </div>

        <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Webutsav for Ecommerce Website Development in Pune, Mumbai & India?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <feature.icon className="w-12 h-12 mb-4 text-blue-600" />
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-10 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container px-4 mx-auto">
          <h4 className="text-3xl md:text-4xl font-bold text-center mb-6">Ecommerce Website Designing Services in Pune, Mumbai & Across India</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="flex items-baseline mb-2">
                  <span className="text-2xl font-bold text-blue-400 mr-2 group-hover:text-blue-300 transition-colors">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h4 className="text-lg font-semibold group-hover:text-blue-300 transition-colors">{service.title}</h4>
                </div>
                <p className="text-sm text-blue-100 ml-8 border-l border-blue-700 pl-3 py-1 group-hover:border-blue-500 transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h4 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why We Are Among the Best Ecommerce Website Designing Companies in Pune & India?
            </h4>
          </FadeInSection>

          <FadeInSection>
            <p className="text-lg mb-12 text-center max-w-4xl mx-auto">
            Webutsav stands out as one of the best eCommerce website designing companies in Pune, Mumbai, and India due to our expertise in custom website design, advanced technologies, and conversion-focused development.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h4 className="text-2xl font-semibold mb-12 text-center">Our Expertise in Ecommerce Development</h4>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseItems.map((item, index) => (
              <FadeInSection key={index}>
                <div className="border-l-4 border-blue-500 pl-6 py-4 h-full">
                  <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-2 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-2xl md:text-3xl font-bold mb-4 text-center">Technologies We Use</h4>
          <p className="text-sm md:text-base mb-6 text-center max-w-3xl mx-auto">
            Our developers are skilled in the latest technologies to build modern, scalable, and future-ready websites.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-3">{tech.category}</h4>
                <div className="grid grid-cols-2 gap-4">
                  {tech.items.map((item, itemIndex) => (
                    <TechItem key={itemIndex} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* FAQ Section */}
        <div className="container mx-auto py-2 px-4 md:px-6 lg:px-8">
          <div className="p-6 mt-12">
            <h4 className="text-4xl font-bold text-gray-800 text-center mb-6">
            Industries We Serve with Ecommerce Website Development in Pune, Mumbai & India
            </h4>
            <p className="text-sm md:text-base mb-6 text-center max-w-3xl mx-auto">
            Webutsav provides eCommerce website solutions for businesses across various industries
          </p>
            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-4 border-b pb-4">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left text-xl font-semibold text-gray-800 p-4 bg-white shadow rounded-lg"
                  >
                    {faq.question}
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </button>
                  {openIndex === index && (
                    <p className="p-4 text-gray-600">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Work Process Section */}
        <div className="flex flex-col items-center justify-center py-4 px-8 bg-gradient-to-b from-white to-yellow-50">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            How We Build High-Performing Ecommerce Websites
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center mb-12 max-w-3xl text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Our web development process is designed to deliver outstanding results. */}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Requirement Analysis & Consultation","UI/UX Design & Prototyping","Development & Coding","Payment & API Integration","Testing & Quality Assurance","Launch & Deployment","Ongoing Support & Maintenance"].map(
              (step, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl font-bold ${
                      index === 0
                        ? "bg-blue-200 text-blue-600"
                        : index === 1
                          ? "bg-green-200 text-green-600"
                          : index === 2
                            ? "bg-purple-200 text-purple-600"
                            : index === 3
                              ? "bg-red-200 text-red-600"
                              : index === 4
                                ? "bg-yellow-200 text-yellow-600"
                                : "bg-pink-200 text-pink-600"
                                ? "bg-pink-200 text-yellow-600"
                                : "bg-pink-200 text-yellow-600"
                                
                    }`}
                  >
                    {`0${index + 1}`}
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{step}</h4>
                  <p className="text-gray-600">
                    {index === 0 && "Understanding your business goals and audience."}
                    {index === 1 && "Creating a user-friendly and visually appealing design."}
                    {index === 2 && "Implementing the latest technologies for a high-performance website."}
                    {index === 3 && "Adding secure payment gateways and third-party APIs."}
                    {index === 4 && "Ensuring the website runs smoothly without bugs."}
                    {index === 5 && "Making your eCommerce store live for customers."}
                    {index === 6 && "Regular updates, security patches, and performance monitoring"}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 py-16 px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold text-white tracking-wide mb-8"
          >
            Get the Best Ecommerce Website Designing Services in Pune, Mumbai & India
          </motion.h2>
          <p className="text-sm md:text-base mb-6 text-center max-w-3xl mx-auto text">
          If you're searching for a top eCommerce website designing company in Pune, Webutsav is your best choice. Our expert developers create scalable, secure, and feature-rich online stores that drive conversions and business growth.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-gray-100 transition-all duration-300 focus:outline-none"
          >
            Start Your eCommerce Journey Today!
          </motion.button>
        </div>
      </div>
    </>
  );
}