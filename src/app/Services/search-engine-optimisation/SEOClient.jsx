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
import { Globe, LineChart, Laptop, Lock, Rocket, Code, Wrench,CheckCircle } from "lucide-react"
import Link from "next/link";
// import Head from "next/head";

const faqs = [
  {
    question: "How long does SEO take to show results?",
    answer:"SEO is a long-term strategy. Results typically start appearing within 3-6 months, depending on competition and industry.",
  },
  {
    question: "Why is SEO important for businesses?",
    answer:"SEO improves online visibility, attracts organic traffic, and increases brand credibility, leading to higher revenue.",
  },
  {
    question: "What are the latest SEO trends?",
    answer:"Some recent SEO trends include AI-driven content, voice search optimization, and Core Web Vitals improvement.",
  },
  {
    question: "Can I do SEO myself?",
    answer:"While basic SEO can be done independently, hiring experts ensures better results and long-term success",
  },
  {
    question: "Why choose Webutsav for SEO services?",
    answer:"Webutsav provides customized SEO solutions, ensuring your business achieves top rankings with search engine optimization Pune strategies.",
  },
  // {
  //   question: "Finance & Banking ",
  //   answer:"Get high-value leads for loans, insurance, and investment services.",
  // },
];

const features = [
  {
    title: "Certified Google Ads Experts",
    description: "We have a team of certified AdWords specialists who optimize your campaigns for success.",
    icon: Globe,
  },
  {
    title: "Data-Driven Strategies",
    description: "We use in-depth analytics to enhance ad performance and maximize ROI.",
    icon: LineChart,
  },
  {
    title: "Conversion-Focused Campaigns",
    description: "Every ad is designed to attract leads, increase sales, and boost business growth.",
    icon: Laptop,
  },
  {
    title: "Multi-Industry Experience ",
    description: "We work with eCommerce, healthcare, education, real estate, finance, and more.",
    icon: Lock,
  },
  {
    title: "Transparent Reporting",
    description: "Get detailed insights into your ad spend, clicks, conversions, and ROI.",
    icon: Rocket,
  },
  {
    title: "Budget-Friendly Solutions",
    description: "We optimize your PPC budget to ensure high-quality traffic without overspending.",
    icon: Code,
  },
]

const services = [
  {
    title: "On-Page SEO",
    description: "Keyword Optimization,Meta Tags & Descriptions,Header Tags (H1-H6) Optimization,Internal Linking,URL Structure Optimization",
  },
  {
    title: "Off-Page SEO",
    description: "Link Building,Social Media Engagement,Guest Blogging,Influencer Outreach",
  },
  {
    title: "Technical SEO",
    description: "Website Speed Optimization,Mobile Friendliness,XML Sitemap Submission,Secure HTTPS Implementation",
  },
]

const expertiseItems = [
  { title: "Expertise in SEO strategies"},
  { title: "Proven track record of successful projects"},
  { title: "Transparent reporting and ethical practices"},
  { title: "Customized SEO solutions"},
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

export default function SocialMediaMarketing() {
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
            Search Engine <span className="bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">Optimization</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Boost your website's visibility with expert SEO services. Improve rankings, drive organic traffic, and reach your online prospects effectively.
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

        {/* Content */}
        <div className="w-full md:w-3/5 max-w-8xl mx-auto py-12">
          <h1 className="text-4xl font-bold text-gray-800">
          What is Search Engine Optimization (SEO)?
          </h1>
          <p className="text-gray-600 mt-6 text-2xl" >
          Search Engine Optimization (SEO) is crucial for businesses looking to enhance their online presence and reach a wider audience. By optimizing both on-page elements, like content, meta tags, and images, and off-page factors, such as backlinks and social signals, SEO helps websites rank higher in search engine results pages (SERPs). The process also involves technical SEO, which ensures that a website is easy to navigate, loads quickly, and is mobile-friendly. All these factors work together to make a website more visible, user-friendly, and attractive to search engines, driving more relevant traffic and improving the chances of conversion.
          </p>
          <h2 className="text-4xl font-bold text-gray-800 pt-2">
          Importance of Search Engine Optimization
          </h2>
          <p className="text-gray-600 mt-6 text-2xl" >
          In today's digital era, online presence is crucial for businesses. Implementing search engine optimization techniques ensures better visibility, higher credibility, and increased conversions. A well-optimized website attracts more visitors, leading to higher revenue.
          </p>
        </div>
      </div>

      <section className="w-full py-10 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container px-4 mx-auto">
          <h4 className="text-3xl md:text-4xl font-bold text-center mb-6">Search Engine Optimization Techniques</h4>
          <p className="text-center text-blue-200 mb-8 max-w-2xl mx-auto">
          To achieve top rankings, businesses must use effective search engine optimization techniques, including
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
            Search Engine Optimization Pune – Why It Matters?
            </h4>
          </FadeInSection>

          <FadeInSection>
            <p className="text-lg mb-12 text-center max-w-4xl mx-auto">
            Pune is a growing hub for businesses, and competition is fierce. Implementing effective search engine optimization in Pune helps local businesses rank higher, attract customers, and grow revenue.
            </p>
          </FadeInSection>
          <FadeInSection>
            <h4 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Search Engine Optimization Kharadi – A Thriving Market
            </h4>
          </FadeInSection>

          <FadeInSection>
            <p className="text-lg mb-12 text-center max-w-4xl mx-auto">
            Kharadi, Pune, is home to numerous IT companies and startups. A strategic search engine optimization Kharadi approach ensures businesses stand out in this competitive landscape, reaching potential customers effectively.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h4 className="text-2xl font-semibold mb-12 text-center">Choosing the Best Search Engine Optimization Company in Pune</h4>
          </FadeInSection>

          <FadeInSection>
            <h4 className="text-2xl font-semibold mb-12 text-center">Finding the right search engine optimization company in Pune is crucial for business success. Key factors to consider:</h4>
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


      {/* FAQ Section */}
      <div className="container mx-auto py-2 px-4 md:px-6 lg:px-8">
        <div className="p-6 mt-12">
          <h4 className="text-4xl font-bold text-gray-800 text-center mb-6">
          FAQs About Search Engine Optimization
          </h4>
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
          Choosing the Best Search Engine Optimization Company in Pune
        </motion.h2>
        <motion.p
          className="text-gray-600 text-center mb-12 max-w-3xl text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Finding the right search engine optimization company in Pune is crucial for business success. Key factors to consider
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[" ", "", " ", " "].map(
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
                <h4 className="text-2xl font-bold mb-2"></h4>
                <p className="text-gray-600">
                  {index === 0 && "Expertise in SEO strategies"}
                  {index === 1 && "Proven track record of successful projects"}
                  {index === 2 && "Transparent reporting and ethical practices"}
                  {index === 3 && "Customized SEO solutions"}
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
          Webutsav – The Best Search Engine Optimization SEO Company in Pune, Maharashtra
        </motion.h2>
        <p className="text-sm md:text-base mb-6 text-center max-w-3xl mx-auto text">
        Webutsav is a trusted search engine optimization SEO company Pune, Maharashtra, offering expert solutions to boost your website rankings. Our team ensures top-notch SEO strategies tailored to your business needs.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-gray-100 transition-all duration-300 focus:outline-none"
        >
          🚀 Want to Grow Your Business with SEO ? 🚀
        </motion.button>
      </div>
    </div>
    </>
  );
}