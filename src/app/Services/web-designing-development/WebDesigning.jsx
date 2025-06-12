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
              Web Designing & Development
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
            Web Design and Development Company in Pune | Best Web Development Services in India
            </h1>
            <p className="text-gray-600 mt-6 text-2xl" >
            In today's digital-first world, a well-designed, high-performing website is essential for business success. Webutsav, a leading web design and development company in Pune, specializes in creating stunning, SEO-friendly, and user-centric websites that help businesses thrive online.
            </p>
            <p className="text-gray-600 mt-4 text-2xl" >
            From corporate websites and eCommerce platforms to complex web applications, we craft digital experiences that engage users, enhance brand visibility, and drive conversions. Our expertise in UI/UX design, custom development, and SEO optimization makes us the preferred choice for businesses in Pune, Mumbai, and across India.
            </p>
          </div>
        </div>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Webutsav for Web Design & Development?</h2>
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
            <h4 className="text-3xl md:text-4xl font-bold text-center mb-6">Comprehensive Web Services</h4>
            <p className="text-center text-blue-200 mb-8 max-w-2xl mx-auto">
              From design to development, we offer complete web solutions in Pune, Mumbai, and across India.
            </p>
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
                Why Webutsav is Among the Best Web Design & Development Companies in Pune & Mumbai?
              </h4>
            </FadeInSection>

            <FadeInSection>
              <p className="text-lg mb-12 text-center max-w-4xl mx-auto">
                Webutsav stands out as one of the best web design & development companies in Pune, Mumbai, and India,
                delivering high-quality, business-driven web solutions. Our approach focuses on innovation, user experience,
                and search engine optimization to help businesses establish a strong digital footprint.
              </p>
            </FadeInSection>

            <FadeInSection>
              <h4 className="text-2xl font-semibold mb-12 text-center">Our Expertise in Web Development</h4>
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
            Industries We Serve with Web Development Solutions in Pune, Mumbai & India
            </h4>
            <p className="text-sm md:text-base mb-6 text-center max-w-3xl mx-auto">
            Webutsav caters to a diverse range of industries, providing tailored web development services to meet their unique business needs.
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
            How We Develop High-Performance Websites
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center mb-12 max-w-3xl text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our web development process is designed to deliver outstanding results.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Consultation & Strategy", "UI/UX Design & Prototyping", "Development & Coding", "Testing & Quality Assurance","Deployment & Launch","Ongoing Support & Maintenance"].map(
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
                    }`}
                  >
                    {`0${index + 1}`}
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{step}</h4>
                  <p className="text-gray-600">
                    {index === 0 && "Understanding your business goals and planning a customized solution."}
                    {index === 1 && "Creating visually appealing, user-friendly designs."}
                    {index === 2 && "Bringing the design to life with advanced technologies."}
                    {index === 3 && "Conducting rigorous tests for performance, security, and compatibility."}
                    {index === 4 && "Ensuring a seamless transition from development to live website."}
                    {index === 5 && "Keeping your website updated, secure, and optimized for growth."}
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
            Get the Best Web Design & Development Services in Pune, Mumbai & Across India
          </motion.h2>
          <p className="text-sm md:text-base mb-6 text-center max-w-3xl mx-auto text">
          If you're looking for a top web design and development company in Pune, Webutsav is your go-to solution. Our expert team specializes in building high-performance, visually stunning, and SEO-optimized websites tailored to your business needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-gray-100 transition-all duration-300 focus:outline-none"
          >
            Let's Build Your Website Today!
          </motion.button>
        </div>
      </div>
    </>
  );
}