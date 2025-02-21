"use client" // Mark this file as a client component

import { useState } from "react" // Importing useState hook
import Image from "next/image"
import {
  FaPlus,
  FaMinus,
  FaGlobe,
  FaShoppingCart,
  FaGoogle,
  FaSearch,
  FaMapMarkerAlt,
  FaShareAlt,
} from "react-icons/fa"
import { motion } from "framer-motion"
import Link from "next/link"

const faqs = [
  {
    question: "01. What is social media marketing?",
    answer:
      "Social media marketing is the process of using social media platforms like Facebook, Instagram, Twitter, LinkedIn, and others to promote a business, engage with customers, and drive traffic to a website, ultimately boosting sales and brand awareness.",
  },
  {
    question: "02. Which platforms should my business be on?",
    answer:
      "The choice of platform depends on your target audience and business goals. For instance, Instagram is ideal for visual content and younger audiences, while LinkedIn works better for B2B businesses. We help you select the best platforms based on your unique needs.",
  },
  {
    question: "03. How often should I post on social media?",
    answer:
      "Consistency is key, but the frequency of posting depends on the platform and audience. We recommend posting at least 3-5 times a week for most platforms. Our experts can help create a tailored content calendar for your brand to maximize engagement.",
  },
  {
    question: "04. How do you measure the success of social media campaigns?",
    answer:
      "We measure success through key performance indicators (KPIs) such as engagement rates, reach, impressions, website traffic, and conversion rates. Detailed analytics reports help track progress and optimize campaigns for better results.",
  },
  {
    question: "05. How long does it take to see results from social media marketing?",
    answer:
      "Social media marketing is a long-term strategy. While some results, like engagement and traffic boosts, can be seen within a few weeks, significant outcomes such as increased brand awareness, follower growth, and sales conversions typically take 3-6 months of consistent effort.",
  },
]

const highlights = [
  { image: "/images/social-strategy.webp", text: "Social Media Strategy Development" },
  { image: "/images/content-creation.webp", text: "Content Creation and Curation" },
  { image: "/images/community-management.webp", text: "Community Management" },
  { image: "/images/paid-advertising.webp", text: "Paid Social Media Advertising" },
  { image: "/images/influencer-marketing.webp", text: "Influencer Marketing" },
  { image: "/images/analytics-reporting.webp", text: "Analytics and Reporting" },
  { image: "/images/social-listening.webp", text: "Social Listening" },
  { image: "/images/crisis-management.webp", text: "Crisis Management" },
  { image: "/images/social-seo.webp", text: "Social SEO" },
  { image: "/images/video-marketing.webp", text: "Video Marketing" },
  { image: "/images/contest-giveaways.webp", text: "Contests and Giveaways" },
  { image: "/images/training-consulting.webp", text: "Training and Consulting" },
  { image: "/images/social-commerce.webp", text: "Social Commerce" },
  { image: "/images/mobile-optimization.webp", text: "Mobile Optimization" },
  { image: "/images/international-social.webp", text: "International Social Media Marketing" },
]

export default function SocialMediaMarketing() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [openIndex, setOpenIndex] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const phoneNumber = "91XXXXXXXXXX" // Replace with your WhatsApp number
    const text = `Hello, I would like to request a demo.%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank")
  }

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
          <Image src="/images/seo.webp" alt="Google AdWords" layout="fill" objectFit="cover" quality={100} />
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
              Search Engine Optimisation
            </motion.h1>
          </div>
        </motion.div>

        {/* Main Content Section */}
        <div className="flex flex-wrap p-6 bg-gradient-to-b from-gray-50 to-white">
          {/* Sidebar */}
          <aside className="w-full md:w-1/5 bg-gradient-to-b from-white to-gray-100 p-6 shadow-lg rounded-lg mb-6 md:mb-0">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">All Services</h3>
            <ul className="space-y-4">
              {[
                {
                  name: "Web Designing & Development",
                  icon: <FaGlobe />,
                  href: "/Services/Web_Designing_Development",
                },
                {
                  name: "Ecommerce Website Designing",
                  icon: <FaShoppingCart />,
                  href: "/Services/Ecommerce_Website_Designing",
                },
                {
                  name: "Google Adwords",
                  icon: <FaGoogle />,
                  href: "/Services/Google_Adwords",
                },
                {
                  name: "Search Engine Optimisation",
                  icon: <FaSearch />,
                  href: "/Services/Search_Engin_Optimisation",
                },
                {
                  name: "Local SEO",
                  icon: <FaMapMarkerAlt />,
                  href: "/Services/Local_Seo",
                },
                {
                  name: "Social Media Marketing",
                  icon: <FaShareAlt />,
                  href: "/Services/Social_Media_Marketing",
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
          <div className="w-full md:w-3/5 max-w-8xl mx-auto py-12 px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            >
              Drive Targeted Traffic and Boost Sales with Google AdWords
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-gray-600 text-lg md:text-xl"
            >
              Unlock the full potential of your growing business with our expert Google AdWords services. We design and
              implement custom advertising campaigns tailored to your unique business needs, seamlessly integrating with
              your overall digital marketing strategy for increased visibility, traffic, and conversions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-600 text-lg md:text-xl mt-4"
            >
              Google AdWords, now known as Google Ads, is a powerful advertising platform that enables businesses to
              appear at the top of search engine results. By bidding on keywords relevant to your industry, you can
              reach potential customers when they are actively searching for your products or services. Our team excels
              in crafting campaigns that maximize visibility and return on investment (ROI).
            </motion.p>
          </div>
        </div>

        {/* Form and Image Section */}
        <div className="flex flex-wrap p-6 bg-gradient-to-b from-white to-yellow-50">
          {/* Form Section */}
          <div className="w-full md:w-1/5 max-w-md bg-white p-6 shadow-lg rounded-lg mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Get a Demo</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  placeholder="Write your message"
                  rows="4"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Now
              </motion.button>
            </form>
          </div>

          {/* Image and Text Section */}
          <div className="w-full md:w-3/5 max-w-8xl mx-auto py-1 pl-8 h-auto">
            <motion.div
              className="relative w-full h-[500px] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image src="/images/seo1.webp" alt="Google AdWords Campaign" layout="fill" objectFit="cover" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            >
              From Small Businesses to Global Enterprises
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-600 text-lg md:text-xl"
            >
              Whether you're a local startup or a global enterprise, our expertise ensures that your Google Ads
              campaigns generate the best results. We stay updated with the latest AdWords innovations and best
              practices to keep your brand ahead of the competition. With our commitment to excellence, we help your
              business grow, scale, and succeed in the competitive digital marketplace. Let us take your Google AdWords
              campaigns to the next level, delivering measurable results and driving success for your brand.
            </motion.p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-12 px-4 md:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="mb-4 border-b pb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left text-xl font-semibold text-gray-800 p-4 bg-white shadow rounded-lg"
                  >
                    {faq.question}
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </button>
                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 text-gray-600"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Work Process Section */}
        <div className="flex flex-col items-center justify-center py-16 px-8 bg-gradient-to-b from-white to-yellow-50">
          <motion.h4
            className="text-amber-600 font-semibold text-lg mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Work Process
          </motion.h4>
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Google AdWords Process
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center mb-12 max-w-3xl text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We follow a systematic approach to ensure the success of your Google AdWords campaigns, maximizing
            efficiency and delivering outstanding results.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Research", "Strategy", "Implementation", "Optimization"].map((step, index) => (
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
                          : "bg-red-200 text-red-600"
                  }`}
                >
                  {`0${index + 1}`}
                </div>
                <h3 className="text-2xl font-bold mb-2">{step}</h3>
                <p className="text-gray-600">
                  {index === 0 && "Analyze market trends and target audience"}
                  {index === 1 && "Develop a tailored AdWords strategy"}
                  {index === 2 && "Set up and launch your campaigns"}
                  {index === 3 && "Monitor and refine for peak performance"}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 py-16 px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold text-white tracking-wide mb-8"
          >
            Ready to Boost Your Online Presence with Google AdWords?
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-gray-100 transition-all duration-300 focus:outline-none"
          >
            Schedule Your Free Consultation
          </motion.button>
        </div>
      </div>
    </>
  )
}

