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
    question: "Ecommerce & Retail",
    answer:"Boost product sales with targeted shopping ads.",
  },
  {
    question: "Real Estate",
    answer:"Generate high-quality property leads",
  },
  {
    question: "Healthcare & Clinics",
    answer:"Attract more patients with healthcare PPC ads.",
  },
  {
    question: "Education & Online Courses",
    answer:"Increase student enrollments with strategic Google Ads.",
  },
  {
    question: "Travel & Tourism",
    answer:"Promote your travel packages to potential customers.",
  },
  {
    question: "Finance & Banking ",
    answer:"Get high-value leads for loans, insurance, and investment services.",
  },
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
    title: "Google Search Ads – Get Immediate Leads",
    description: "We create highly optimized search ad campaigns that appear at the top of Google search results, ensuring your business gets maximum visibility for relevant keywords.",
  },
  {
    title: "Google Display Ads – Increase Brand Awareness",
    description: "With visually appealing banner ads, we help you reach potential customers across millions of websites, YouTube, and mobile apps.",
  },
  {
    title: "Google Shopping Ads – Boost eCommerce Sales",
    description: "For eCommerce businesses, we run Google Shopping Ads that showcase your products with images, prices, and reviews, driving more purchases",
  },
  {
    title: "YouTube Ads – Engage Your Audience with Video Marketing",
    description: "Our YouTube Ads campaigns target the right audience with engaging video ads, helping businesses increase brand recall and conversions.",
  },
  {
    title: "Remarketing Ads – Convert Lost Visitors into Customers",
    description: "We implement remarketing strategies to reconnect with visitors who previously interacted with your website, increasing the chances of conversion.",
  },
  {
    title: "Local PPC Campaigns – Get Customers in Your City",
    description: "Want to target customers in Pune, Mumbai, or India? We create geo-targeted Google Ads campaigns to bring local traffic to your business.",
  },
  {
    title: "Google Ads Audits & Optimization",
    description: "Already running Google Ads but not getting results? Our Google Ads audit services help identify and fix issues, ensuring maximum ROI.",
  },
]

const expertiseItems = [
  { title: "Campaign Research & Strategy", description: "We analyze competitors and define the best PPC strategy for your business." },
  { title: "Keyword Research & Selection", description: "We choose high-converting keywords to target the right audience." },
  { title: "Ad Copywriting & Creative Design",description: "We craft compelling ad copies and engaging creatives."},
  { title: "Bid Management & Budget Optimization", description: "We set the right bids to maximize ROI while staying within budget" },
  { title: "Landing Page Optimization", description: "We ensure your landing pages are optimized for higher conversion rates." },
  { title: "Ad Performance Monitoring", description: "We continuously track and optimize ads to improve click-through rates (CTR) and conversions." },
  { title: "Detailed Reporting & Insights ", description: "We provide transparent reports on campaign performance, spending, and ROI." },
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

export default function GoogleAdwords() {
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
              Google <span className="bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">AdWords</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Maximize your online reach with targeted Google Ads campaigns. Drive traffic, increase conversions, and grow your business with expert PPC management.
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
            Google AdWords Company in Pune | Best Google AdWords Agency in India
            </h1>
            <p className="text-gray-600 mt-6 text-2xl" >
            Are you looking for instant visibility, quality leads, and high ROI for your business? Webutsav, a leading Google AdWords company in Pune, provides expert PPC (Pay-Per-Click) advertising solutions to help businesses maximize their online presence.
            </p>
            <p className="text-gray-600 mt-4 text-2xl" >
            With years of experience in Google Ads campaign management, we create highly targeted ads that drive conversions, website traffic, and brand awareness. Whether you're a startup, SME, or large enterprise, our Google AdWords agency in Pune ensures every rupee spent delivers measurable results.
            </p>
          </div>
        </div>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Webutsav as Your Google AdWords Agency in Pune, Mumbai & India?</h2>
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
            <h4 className="text-3xl md:text-4xl font-bold text-center mb-6">Our Google AdWords Services in Pune, Mumbai & India</h4>
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
              Why We Are Among the Best Google AdWords Companies in Pune & India?
              </h4>
            </FadeInSection>

            <FadeInSection>
              <p className="text-lg mb-12 text-center max-w-4xl mx-auto">
              Webutsav stands out as a top Google AdWords agency in Pune, Mumbai, and India due to our expertise in PPC advertising, data-driven strategies, and result-oriented approach.
              </p>
            </FadeInSection>

            <FadeInSection>
              <h4 className="text-2xl font-semibold mb-12 text-center">Our Process for Google Ads Management</h4>
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
            Industries We Serve with Google AdWords in Pune, Mumbai & India
            </h4>
            <p className="text-sm md:text-base mb-6 text-center max-w-3xl mx-auto">
            Webutsav provides Google Ads solutions for businesses across various industries
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

        <div className="container mx-auto px-4 py-8">
          <h4 className="text-3xl font-bold text-center mb-8">Google Ads vs. SEO – Which One is Right for You?</h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Feature</th>
                  <th className="border p-3 text-center">Google AdWords</th>
                  <th className="border p-3 text-center">SEO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold">Time to See Results</td>
                  <td className="border p-3 text-center">Immediate</td>
                  <td className="border p-3 text-center">Takes time (3-6 months)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-semibold">Cost</td>
                  <td className="border p-3 text-center">Pay for Clicks</td>
                  <td className="border p-3 text-center">Free (Organic)</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Traffic Control</td>
                  <td className="border p-3 text-center">Target specific audience & keywords</td>
                  <td className="border p-3 text-center">Depends on search engine ranking</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-semibold">Best For</td>
                  <td className="border p-3 text-center">Instant traffic & lead generation</td>
                  <td className="border p-3 text-center">Long-term organic growth</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Best Strategy</h4>
            <p className="text-lg">
              A combination of Google Ads & SEO ensures short-term results (PPC) and long-term growth (SEO).
            </p>
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
            Why Google Ads is Essential for Business Growth in Pune, Mumbai & India?
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
            {["Instant Online Visibility", "Highly Targeted Advertising", "Flexible Budgeting", "Measurable Results "].map(
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
                              : "bg-pink-200 text-pink-600"
                    }`}
                  >
                    {`0${index + 1}`}
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{step}</h4>
                  <p className="text-gray-600">
                    {index === 0 && "Appear on the first page of Google instantly."}
                    {index === 1 && "Show ads only to potential customers."}
                    {index === 2 && "You control how much you spend daily or monthly"}
                    {index === 3 && "Track ad clicks, conversions, and ROI in real-time"}
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
            Get the Best Google AdWords Services in Pune, Mumbai & India
          </motion.h2>
          <p className="text-sm md:text-base mb-6 text-center max-w-3xl mx-auto text">
          If you're looking for a top Google AdWords company in Pune, Webutsav is your trusted partner. Our expert Google Ads managers create winning PPC campaigns that maximize leads and sales while keeping costs low.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-gray-100 transition-all duration-300 focus:outline-none"
          >
            🚀 Want to Grow Your Business with Google Ads? 🚀
          </motion.button>
        </div>
      </div>
    </>
  );
}