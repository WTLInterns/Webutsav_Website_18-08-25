"use client";

import { useState } from "react";
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
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline for building a website varies depending on the complexity of the project. A basic website may take 4-6 weeks, while a more complex site could take 3-4 months.",
  },
  {
    question: "Do you offer website redesign services?",
    answer:
      "Yes, we offer website redesign services. We can revamp your existing site to make it more modern, responsive, and SEO-friendly.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "We design all our websites to be responsive, ensuring they look great and function well on all devices.",
  },
  {
    question: "Can you help with SEO for my website?",
    answer:
      "Yes, we offer SEO services to help your website rank higher in search engine results, driving more traffic to your site.",
  },
  {
    question: "What is the cost of web development?",
    answer:
      "The cost varies based on the project scope, design complexity, and functionality required. Contact us for a customized quote.",
  },
];

const highlights = [
  { image: "/images/domain.jpg", text: "Domain Name Registration" },
  { image: "/images/hosting.jpg", text: "Website Hosting" },
  { image: "/images/email.jpg", text: "Business Email Accounts" },
  {
    image: "/images/plan.webp",
    text: "Information Architecture: Planning the Sitemap",
  },
  {
    image: "/images/contentediting.webp",
    text: "Content Editing / Proof Reading",
  },
  {
    image: "/images/design.jpg",
    text: "Unique designs: Beautiful, Clean and elegantly handcrafted websites.",
  },
  {
    image: "/images/responsive.webp",
    text: "Responsive Designs: Mobile, Tablet and Desktop Friendly",
  },
  { image: "/images/royalty.webp", text: "Royalty Free Licensed Stock Images" },
  {
    image: "/images/social.webp",
    text: "Facebook/Twitter/LinkedIn Integration",
  },
  {
    image: "/images/browser.webp",
    text: "Perfect on all Major Browsers: Internet Explorer, Firefox, Chrome and Safari",
  },
  {
    image: "/images/majorbrowser.webp",
    text: "Google Local Business Directory Submissions",
  },
  {
    image: "/images/seoptimization.webp",
    text: "On-Page Search Engine Optimization",
  },
  { image: "/images/submitiongoogle.webp", text: "Submission to Google" },
  {
    image: "/images/googleanalytics.webp",
    text: "Google Analytics Integration",
  },
  {
    image: "/images/support.webp",
    text: "Continuous Support after the Site is Made Live",
  },
];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "91XXXXXXXXXX"; // Replace with your WhatsApp number
    const text = `Hello, I would like to request a demo.%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/web-designing-development.webp"
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
        <div className="w-full md:w-3/5 max-w-8xl mx-auto py-12">
          <h2 className="text-5xl font-bold text-gray-800">
            Get A High-Performance Website For Your Growing Business
          </h2>
          <p className="text-gray-600 mt-6 text-2xl">
            Our expert professionals provide flawless websites by combining your
            business objectives with innovative trends. Website designing and
            development services that will provide you increased leads and
            business growth and revenue.
          </p>
          <p className="text-gray-600 mt-4 text-2xl">
            Designing the layout of a website in a manner that enhances the
            experience of the visitors, is known as web design. When this web
            design is coded to be made interactive, responsive, and integrated
            with all the essential functionalities, that set of activities is
            known as web development.
          </p>
        </div>
      </div>

      {/* Left & Right Content Wrapper */}
      <div className="flex flex-wrap p-6">
        {/* Form Section (Left) */}
        <div className="w-full md:w-1/5 max-w-md bg-white p-6 shadow-lg rounded-lg mb-6 md:mb-0 h-2/4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Get a Demo
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
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
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
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
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
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
            <button
              type="submit"
              className="w-full bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Send Now
            </button>
          </form>
        </div>

        {/* Right Content (Image + Text) */}
        <div className="w-full md:w-3/5 max-w-8xl mx-auto py-1 pl-8 h-auto">
          <div className="relative w-full h-[500px]">
            <Image
              src="/images/web.jpg"
              alt="Web Design Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="text-5xl font-bold text-gray-800 pt-6">
            Proudly providing website design and development services to
            businesses in Pune, India, and Dubai since 1999
          </h2>
          <p className="text-gray-600 mt-6 text-2xl">
            Proudly serving businesses in Pune, India, and Dubai, as well as
            clients around the world since 1999, we specialize in delivering
            top-tier website design and development services. Our decades of
            experience have equipped us with the expertise to craft visually
            stunning, highly functional, and user-friendly websites that help
            businesses thrive in the digital landscape. Whether you're a local
            startup or a global enterprise, our commitment to excellence ensures
            that your online presence not only meets but exceeds industry
            standards, driving growth and success for your brand.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
        <div className="p-6 mt-12">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
            Frequently Asked Questions
          </h2>
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

      {/* Highlight Section */}
      <div className="py-10 px-5 text-center">
        <motion.h2
          className="text-2xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Here's Highlight of What You'll Get with Your Business Website:
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-20 h-20 rounded-full overflow-hidden mb-3"
                whileHover={{ rotate: 10 }}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.text}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </motion.div>
              <motion.p
                className="text-sm font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {item.text}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
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
          We follow a systematic approach to ensure the success of your Google
          AdWords campaigns, maximizing efficiency and delivering outstanding
          results.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {["Research", "Strategy", "Implementation", "Optimization"].map(
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
  );
}
