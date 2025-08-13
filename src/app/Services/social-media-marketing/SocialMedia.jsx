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
    question: "What is Social Media Marketing?",
    answer:"Social Media Marketing (SMM) is the use of social media platforms to promote a business, build brand awareness, and drive traffic to a website. It includes organic content, paid ads, and community engagement to achieve business goals.",
  },
  {
    question: "Why is Social Media Marketing Important?",
    answer:"Social Media Marketing is essential because it allows businesses to directly engage with their audience, build relationships, and increase visibility. It's a cost-effective way to reach a large, targeted audience and drive sales.",
  },
  {
    question: "How Can Webutsav Help My Business with Social Media Marketing?",
    answer:"Webutsav provides comprehensive Social Media Marketing services, including strategy development, content creation, paid advertising, social media monitoring, and community engagement. We help businesses in Pune and Kharadi build a strong social media presence and drive measurable results.",
  },
  {
    question: "What Platforms Should My Business Be On?",
    answer:"The platforms you should use depend on your target audience and business goals. We analyze your business and recommend the best platforms, whether it's Facebook, Instagram, LinkedIn, or Twitter.",
  },
  {
    question: "How Do You Measure the Success of Social Media Campaigns?",
    answer:"We measure success based on key metrics such as engagement rates, reach, website traffic, conversions, and ROI. We provide regular reports to track the performance of your campaigns",
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
    title: "1. Build Brand Awareness ",
    description: "Social media allows you to reach a vast audience and build brand awareness quickly. By consistently posting engaging content and interacting with users, you can create a strong brand presence that stays top-of-mind for potential customers",
  },
  {
    title: "2. Direct Communication with Customers",
    description: "Social media provides an easy way for businesses to communicate with customers. It allows you to respond to inquiries, provide customer support, and foster relationships with your audience in real-time.",
  },
  {
    title: "3. Drive Website Traffic and Sales",
    description: "Effective Social Media Marketing drives traffic to your website, which can result in more leads, sales, and conversions. Through targeted campaigns and optimized content, we help you guide social media followers to your website where they can learn more about your products or services.",
  },
  {
    title: "4. Cost-Effective Marketing",
    description: "Compared to traditional advertising, Social Media Marketing is highly cost-effective. With small investments in ads and the ability to manage your campaigns, you can reach a highly targeted audience with a fraction of the cost of traditional media.",
  },
  {
    title: "5. Insightful Analytics and Data",
    description: "Social media platforms offer in-depth analytics, allowing businesses to track performance, measure engagement, and understand customer behavior. This data is invaluable for refining strategies and improving future campaigns.",
  },
]

const expertiseItems = [
  { title: "1. Social Media Strategy Development", description: "We work closely with you to understand your business goals, target audience, and key performance indicators (KPIs). Based on this information, we develop a comprehensive "},
  { title: "2. Content Creation and Management", description: "Our team of content creators and social media experts crafts high-quality posts that resonate with your audience. We manage your accounts and ensure that your content is engaging, relevant, and visually appealing. We also plan content calendars to maintain consistent posting and timely updates."},
  { title: "3. Paid Advertising Campaigns", description: "We create and manage targeted paid campaigns on platforms like Facebook, Instagram, LinkedIn, and Twitter to help you reach the right audience. Our social media digital marketing strategies are designed to maximize conversions and drive results within your budget."},
  { title: "4. Social Media Monitoring and Analytics", description: "Our team monitors the performance of your social media accounts, tracking engagement, reach, and other key metrics. Using this data, we make adjustments to ensure your campaigns are always improving. We provide you with regular reports that show exactly how your social media marketing efforts are performing."},
  { title: "5. Community Engagement", description: "Social media is about building relationships. We engage with your followers by responding to comments, liking and sharing user-generated content, and initiating conversations. This fosters a sense of community and helps you build a loyal customer base."},
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
              Social Media <span className="bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">Marketing</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Amplify your online presence with strategic social media marketing. Engage your audience, boost awareness, and drive conversions through social channels.
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
            Social Media Marketing Services by Webutsav
            </h1>
            <p className="text-gray-600 mt-6 text-2xl" >
            In today's digital age, businesses can't afford to ignore the power of social media. With billions of active users on platforms like Facebook, Instagram, Twitter, and LinkedIn, Social Media Marketing (SMM) has become one of the most effective ways to connect with potential customers, build brand awareness, and drive traffic to your website. At Webutsav, we specialize in providing Social Media Marketing services that help businesses grow their presence online, engage with their audience, and increase their ROI.
            </p>
            <p className="text-gray-600 mt-6 text-2xl" >
            As the best social media marketing company in Pune, we provide comprehensive and tailored social media digital marketing strategies that align with your business goals. Whether you're a small business or an established enterprise, we can help you unlock the full potential of social media to drive measurable results
            </p>
          </div>
        </div>

        <section className="w-full py-10 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Why Choose Social Media Marketing? </h2>
            <p className="text-center text-blue-200 mb-8 max-w-2xl mx-auto">
            Social media platforms offer businesses unique opportunities to connect directly with their target audience. Here's why Social Media Marketing is essential for your business:
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
              What We Offer in Social Media Marketing
              </h4>
            </FadeInSection>

            <FadeInSection>
              <p className="text-lg mb-12 text-center max-w-4xl mx-auto">
              At Webutsav, we offer a wide range of Social Media Marketing services tailored to meet the unique needs of each business. Our strategies are designed to enhance engagement, increase visibility, and build a loyal customer base. Here's what we can do for you
              </p>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertiseItems.map((item, index) => (
                <FadeInSection key={index}>
                  <div className="border-l-4 border-blue-500 pl-6 py-4 h-full">
                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
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
            FAQs About Social Media Marketing
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

        <div className="bg-gradient-to-r from-amber-500 to-amber-600 py-16 px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold text-white tracking-wide mb-8"
          >
            Webutsav – The Best Social Media Digital Marketing Company in Pune, Maharashtra
          </motion.h2>
          <p className="text-sm md:text-base mb-6 text-center max-w-3xl mx-auto text">
          Webutsav is a trusted Social Media Digital Marketing company Pune, Maharashtra, offering expert solutions to boost your website rankings. Our team ensures top-notch SEO strategies tailored to your business needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-gray-100 transition-all duration-300 focus:outline-none"
          >
            🚀 Want to Grow Your Business with Social Media Digital Marketing? 🚀
          </motion.button>
        </div>
      </div>
    </>
  );
}