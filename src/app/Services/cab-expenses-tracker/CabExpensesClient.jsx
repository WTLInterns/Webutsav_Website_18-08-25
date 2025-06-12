"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaPlus,
  FaMinus,
  FaGlobe,
  FaShoppingCart,
  FaGoogle,
  FaSearch,
  FaMapMarkerAlt,
  FaShareAlt,
  FaMobileAlt,
  FaCar,
  FaRegMoneyBillAlt,
  FaLightbulb,
  FaRocket,
  FaChartPie,
  FaMoneyBillWave,
  FaClock,
  FaTools,
  FaChartLine,
  FaUsers
} from "react-icons/fa";
import { motion, useInView, useAnimation } from "framer-motion";
import { CheckCircle, AlertTriangle, UserCheck } from "lucide-react";

const sidebarServices = [
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
    icon: <FaMobileAlt />,
    href: "/Services/mobile-application",
  },
];

const FadeInSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default function CabExpenseTracker() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

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
            alt="Cab Expense Tracker Software"
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
              Cab Expense Tracker Software
            </motion.h1>
          </div>
        </motion.div>

        {/* Layout structure - sidebar with adjacent content */}
        <div className="flex flex-col md:flex-row">
          {/* Sidebar Box */}
          <aside className="w-full md:w-72 bg-white shadow-lg rounded-lg p-6 mb-6 md:mr-6 self-start">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">All Services</h3>
            <ul className="space-y-6">
              {sidebarServices.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center"
                >
                  <Link
                    href={service.href}
                    className="group flex items-start space-x-4"
                  >
                    <span className="text-red-500 text-2xl mt-1">
                      {service.icon}
                    </span>
                    <span className="text-gray-700 group-hover:text-gray-900 font-medium text-lg">
                      {service.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </aside>

          {/* Main Content - Next to sidebar */}
          <div className="w-full md:w-3/4">
            {/* Section 1: Welcome */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-8 bg-white rounded-lg shadow-xl border-l-8 border-amber-500 mb-12">
                <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-3 mb-6">
                  <FaCar className="text-4xl text-amber-600" />
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
                    Welcome to Webutsav - Cab Expense Tracker Software for Efficient Fleet Management
                  </h1>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600 text-lg">
                    Webutsav, an IT company based in Pune, is at the forefront of developing innovative solutions for businesses. We specialize in mobile app development, web development (both backend and frontend), and digital marketing. With our latest project, we aim to revolutionize the way cab drivers, fleet managers, and travel agencies manage their daily expenses. Our Cab Expense Tracker Software is specifically designed to streamline expense management, reduce costs, and enhance the financial efficiency of businesses in the transportation industry.
                  </p>
                  <p className="text-gray-600 text-lg">
                    In this comprehensive guide, we'll explore everything you need to know about Cab Expense Tracker Software, how it works, and why it's the ideal solution for the modern Indian cab and travel business. Whether you're an independent driver or manage a fleet of vehicles, our software offers unmatched benefits.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Full width content after sidebar ends */}
        <div className="w-full mt-24">
          {/* Section 2: What Is Cab Expense Tracker Software? */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-24"
          >
            <motion.div
              className="p-8 bg-blue-50 rounded-lg shadow-xl border-l-8 border-blue-500"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle className="text-4xl text-blue-500" />
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-800">
                  What Is Cab Expense Tracker Software?
                </h2>
              </div>
              <p className="text-gray-600 text-xl mt-4">
                <span className="text-blue-600">✓</span> The Cab Expense Tracker Software is a specially designed tool that helps cab drivers and travel agencies track and manage their expenses effectively. This software allows users to log all their daily expenses, including fuel costs, maintenance, tolls, repairs, and more, all in one place. By offering an intuitive, easy-to-use interface, Cab Expense Tracker Software in India makes managing business expenses hassle-free, efficient, and fully automated.
              </p>
              <p className="text-gray-600 text-xl mt-4">
                <span className="text-blue-600">✓</span> One of the most essential features of our software is its cloud-based storage and real-time synchronization, ensuring that all your data is secure and easily accessible across devices. No matter where you are, your financial data is always at your fingertips.
              </p>
            </motion.div>
          </motion.div>

          {/* Section 3: Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-24"
          >
            <motion.div
              className="p-8 bg-green-50 rounded-lg shadow-xl border-l-8 border-green-500"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaLightbulb className="text-4xl text-green-500" />
                </motion.div>
                <h4 className="text-3xl font-bold text-gray-800">
                  Key Features of Cab Expense Tracker Software
                </h4>
              </div>
              {/* Feature 1 */}
              <motion.div
                className="mb-6"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="flex items-center space-x-2 text-2xl font-semibold text-gray-800">
                  <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">1</span>
                  <span>ERP-Based System (Master Admin & Sub-Admins)</span>
                </h4>
                <p className="text-gray-600 text-xl ml-10 border-l-2 pl-4">
                  The Cab Expense Tracker Software offers an ERP-based structure, enabling businesses to assign roles such as Master Admin and Sub-Admins. This system helps streamline management within large travel agencies or fleet management companies by providing different access levels and permissions to various team members. The Master Admin can oversee all operations, while Sub-Admins can manage specific areas such as individual vehicle expenses, drivers, or specific departments.
                </p>
              </motion.div>
              {/* Feature 2 */}
              <motion.div
                className="mb-6"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="flex items-center space-x-2 text-2xl font-semibold text-gray-800">
                  <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">2</span>
                  <span>Expense Logging for Fuel, Tolls, and Maintenance</span>
                </h4>
                <p className="text-gray-600 text-xl ml-10 border-l-2 pl-4">
                  Our software offers detailed expense logging capabilities. With Cab Expense Tracker Software, you can effortlessly log your daily expenses, such as:
                </p>
                <ul className="list-disc ml-16 mt-2 space-y-2 text-gray-600 text-xl">
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <FaRegMoneyBillAlt className="inline text-blue-500 mr-2" /> Fuel Costs: Track the price of fuel and the amount consumed by each vehicle, helping you identify cost-saving opportunities.
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <FaRegMoneyBillAlt className="inline text-blue-500 mr-2" /> Tolls and Parking Fees: Record tolls and parking expenses that are essential for every journey.
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <FaRegMoneyBillAlt className="inline text-blue-500 mr-2" /> Maintenance Costs: Regular maintenance is vital for any vehicle. Log every maintenance expense from oil changes to major repairs.
                  </motion.li>
                </ul>
              </motion.div>
              {/* Feature 3 */}
              <motion.div
                className="mb-6"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="flex items-center space-x-2 text-2xl font-semibold text-gray-800">
                  <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">3</span>
                  <span>Live Image Uploads for Accurate Record-Keeping</span>
                </h4>
                <p className="text-gray-600 text-xl ml-10 border-l-2 pl-4">
                  To ensure the accuracy of your records, the software allows users to upload live images. Ideal for documenting:
                </p>
                <ul className="list-disc ml-16 mt-2 space-y-2 text-gray-600 text-xl">
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <FaCar className="inline text-blue-500 mr-2" /> Tyre Punctures
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <FaCar className="inline text-blue-500 mr-2" /> Fuel Bills
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <FaCar className="inline text-blue-500 mr-2" /> Damage Reports
                  </motion.li>
                </ul>
              </motion.div>
              {/* Feature 4 */}
              <motion.div
                className="mb-6"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="flex items-center space-x-2 text-2xl font-semibold text-gray-800">
                  <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">4</span>
                  <span>Cloud-Based Storage & Real-Time Sync</span>
                </h4>
                <p className="text-gray-600 text-xl ml-10 border-l-2 pl-4">
                  The software operates on cloud storage, ensuring data is securely synced in real time across all devices.
                </p>
              </motion.div>
              {/* Feature 5 */}
              <motion.div
                className="mb-6"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="flex items-center space-x-2 text-2xl font-semibold text-gray-800">
                  <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">5</span>
                  <span>User-Friendly Dashboard</span>
                </h4>
                <p className="text-gray-600 text-xl ml-10 border-l-2 pl-4">
                  Monitor all your data at a glance with an easy-to-use dashboard, making financial operations simple and efficient.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Section 4: How Cab Expense Tracker Software Helps in Expense Reduction */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <div className="bg-purple-50 p-8 rounded-2xl shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-purple-500"></div>

              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-purple-100 rounded-full p-4">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AlertTriangle className="text-3xl text-purple-500" />
                  </motion.div>
                </div>
                <h4 className="text-3xl font-bold text-gray-800">
                  How Cab Expense Tracker Software Helps in Expense Reduction
                </h4>
              </div>

              <div className="space-y-2">
                <p className="text-gray-600 text-lg mb-6">
                  Operating a cab or a fleet of vehicles involves numerous daily costs. Managing these costs efficiently can be the difference between a profitable business and one that struggles to stay afloat. With Cab Expense Tracker Software, you can reduce costs in several key areas:
                </p>

                <div className="space-y-8">
                  {/* Area 1 */}
                  <div>
                    <h4 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
                      <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                      Fuel Management
                    </h4>
                    <div className="ml-11">
                      <p className="text-gray-600 text-lg">
                        One of the largest costs for any cab or travel agency is fuel. The software allows you to track fuel consumption, identify trends, and optimize fuel efficiency. By keeping an eye on fuel costs and consumption patterns, you can make informed decisions to reduce wastage and save money.
                      </p>
                    </div>
                  </div>

                  {/* Area 2 */}
                  <div>
                    <h4 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
                      <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                      Maintenance Cost Optimization
                    </h4>
                    <div className="ml-11">
                      <p className="text-gray-600 text-lg">
                        Regular maintenance is essential for the longevity of your vehicles, but without proper tracking, maintenance can become an unpredictable and costly expense. The software lets you schedule regular maintenance and track repairs, ensuring your vehicles run efficiently and reducing the need for costly emergency fixes.
                      </p>
                    </div>
                  </div>

                  {/* Area 3 */}
                  <div>
                    <h4 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
                      <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                      Reduction of Overhead Costs
                    </h4>
                    <div className="ml-11">
                      <p className="text-gray-600 text-lg">
                        By having an accurate and real-time overview of your expenses, you can identify areas where your money is being spent unnecessarily. Whether it's over-spending on fuel, tolls, or maintenance, the Cab Expense Tracker Software helps you cut down on costs, improving your bottom line.
                      </p>
                    </div>
                  </div>

                  {/* Area 4 */}
                  <div>
                    <h4 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
                      <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                      Insurance Claims Management
                    </h4>
                    <div className="ml-11">
                      <p className="text-gray-600 text-lg">
                        The software also helps track incidents and damage reports, which can be used for insurance claims. By keeping accurate records of every expense and incident, you streamline the process of making claims, ensuring faster reimbursements and minimizing losses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 5: Why Choose Cab Expense Tracker Software in India? */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <div className="bg-red-50 p-8 rounded-2xl shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>

              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-red-100 rounded-full p-4">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <UserCheck className="text-3xl text-red-500" />
                  </motion.div>
                </div>
                <h4 className="text-3xl font-bold text-gray-800">
                  Why Choose Cab Expense Tracker Software in India?
                </h4>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600 text-lg mb-6">
                  India's cab and travel industry is one of the fastest-growing sectors, with thousands of new vehicles hitting the roads every day. Managing a fleet or even a single vehicle requires meticulous expense tracking, and that's where Webutsav's Cab Expense Tracker Software comes in. Here's why our software is the best choice for your business:
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-500 font-bold mr-2">●</span>
                    <p className="text-gray-600 text-lg">
                      <span className="font-semibold">Tailored for Indian Businesses:</span> We understand the unique challenges faced by the Indian transportation sector. From fluctuating fuel prices to maintaining a large fleet, our software is tailored to meet the needs of Indian businesses.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 font-bold mr-2">●</span>
                    <p className="text-gray-600 text-lg">
                      <span className="font-semibold">Affordable and Scalable:</span> Whether you manage one vehicle or an entire fleet, our software can scale to meet your needs. Plus, it's affordable, making it accessible for businesses of all sizes.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 font-bold mr-2">●</span>
                    <p className="text-gray-600 text-lg">
                      <span className="font-semibold">Comprehensive Financial Tracking:</span> Our software doesn't just log expenses. It gives you a detailed breakdown, helping you understand your cash flow and optimize costs.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 font-bold mr-2">●</span>
                    <p className="text-gray-600 text-lg">
                      <span className="font-semibold">24/7 Customer Support:</span> Webutsav is committed to providing excellent customer support. Our team is available around the clock to help you with any issues or questions you may have.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Section 6: Getting Started with Webutsav's Cab Expense Tracker Software */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <div className="bg-indigo-50 p-8 rounded-2xl shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>

              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-indigo-100 rounded-full p-4">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaRocket className="text-3xl text-indigo-500" />
                  </motion.div>
                </div>
                <h4 className="text-3xl font-bold text-gray-800">
                  Getting Started with Webutsav's Cab Expense Tracker Software
                </h4>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600 text-lg mb-6">
                  Starting with Cab Expense Tracker Software is easy. Follow these simple steps to get started:
                </p>

                <div className="space-y-8">
                  {/* Step 1 */}
                  <div>
                    <h4 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
                      <span className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                      Sign Up for an Account
                    </h4>
                    <div className="ml-11">
                      <p className="text-gray-600 text-lg">
                        Visit our website and sign up for the Cab Expense Tracker Software. Choose the plan that works best for your needs.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div>
                    <h4 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
                      <span className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                      Set Up Your Fleet
                    </h4>
                    <div className="ml-11">
                      <p className="text-gray-600 text-lg">
                        Enter your vehicle details and categorize your expenses. This step ensures that your data is organized from day one.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div>
                    <h4 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
                      <span className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                      Start Logging Expenses
                    </h4>
                    <div className="ml-11">
                      <p className="text-gray-600 text-lg">
                        Begin recording your daily expenses right from the start. Whether it's fuel, maintenance, or tolls, everything can be logged quickly and efficiently.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div>
                    <h4 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
                      <span className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                      Review Reports and Optimize
                    </h4>
                    <div className="ml-11">
                      <p className="text-gray-600 text-lg">
                        Use the detailed reports to analyze your spending. This helps you identify areas for cost reduction and optimize your operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 7: Advanced Features of Cab Expense Tracker Software */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <div className="bg-teal-50 p-8 rounded-2xl shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-teal-500"></div>

              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-teal-100 rounded-full p-4">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaLightbulb className="text-3xl text-teal-500" />
                  </motion.div>
                </div>
                <h4 className="text-3xl font-bold text-gray-800">
                  Advanced Features of Cab Expense Tracker Software
                </h4>
              </div>

              <div className="space-y-2">
                <p className="text-gray-600 text-lg mb-6">
                  Our Cab Expense Tracker Software doesn't just stop at basic features; it includes advanced functionalities designed to support businesses at scale. Let's dive deeper into some additional features that set our software apart.
                </p>

                <div className="space-y-8">
                  {/* Feature 1 */}
                  <div>
                    <h4 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
                      <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                      Real-Time Notifications and Alerts
                    </h4>
                    <div className="ml-11">
                      <p className="text-gray-600 text-lg">
                        Stay on top of all expenses with custom notifications. You can set up alerts for when fuel prices change, maintenance schedules are due, or if a certain expense threshold is reached. These notifications keep you informed and ensure that you never miss critical events in your fleet's operation.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div>
                    <h4 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
                      <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                      Data Backup and Security
                    </h4>
                    <div className="ml-11">
                      <p className="text-gray-600 text-lg">
                        We understand that the security of your business data is of utmost importance. With Cab Expense Tracker Software, all data is securely backed up in the cloud, ensuring that even in the case of unexpected disruptions, your records are protected. Our encryption protocols keep your information secure, ensuring that your sensitive financial data is never at risk.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div>
                    <h4 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
                      <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                      Cost Allocation and Budgeting Tools
                    </h4>
                    <div className="ml-11">
                      <p className="text-gray-600 text-lg">
                        Budgeting is key to keeping expenses in check. Our software provides tools to allocate costs across multiple categories. Whether it's operational costs for different vehicles or specific departments within your travel agency, you can easily create and track budgets for different aspects of your fleet's operations. This allows businesses to operate within set financial limits while tracking all expenses.
                      </p>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div>
                    <h4 className="flex items-center text-2xl font-semibold text-gray-800 mb-4">
                      <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                      Mobile Access for On-the-Go Operations
                    </h4>
                    <div className="ml-11">
                      <p className="text-gray-600 text-lg">
                        As a cab driver or fleet manager, you need to have your financial data at your fingertips wherever you go. Our Cab Expense Tracker Software in India is mobile-friendly, allowing users to track expenses, upload images, and review reports right from their smartphones. No matter where your business takes you, you'll have access to everything you need to stay on top of your finances.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 8: Benefits of Using Cab Expense Tracker Software */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <div className="bg-orange-50 p-8 rounded-2xl shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>

              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-orange-100 rounded-full p-4">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <UserCheck className="text-3xl text-orange-500" />
                  </motion.div>
                </div>
                <h4 className="text-3xl font-bold text-gray-800">
                  The Benefits of Using Cab Expense Tracker Software in India
                </h4>
              </div>

              <div className="space-y-2">
                <p className="text-gray-600 text-lg mb-6">
                  Cab Expense Tracker Software is more than just a tool for logging expenses—it's a complete financial management system that can transform your business. Here's why more and more businesses in India are choosing our software:
                </p>

                <ul className="space-y-6">
                  <li className="flex items-start">
                    <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <FaChartPie className="text-sm" />
                    </span>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive Financial Overview</h4>
                      <p className="text-gray-600 text-lg">
                        Gain a 360-degree view of your financial operations. The software generates detailed reports that break down all your expenses, helping you make informed decisions that will reduce costs and increase profitability.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <FaMoneyBillWave className="text-sm" />
                    </span>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Improve Cash Flow Management</h4>
                      <p className="text-gray-600 text-lg">
                        Managing cash flow effectively is crucial for business success. By using the Cab Expense Tracker Software to monitor income and expenses in real-time, you can ensure your business stays financially healthy and profitable.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <FaClock className="text-sm" />
                    </span>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Save Time and Reduce Manual Work</h4>
                      <p className="text-gray-600 text-lg">
                        Say goodbye to manually updating spreadsheets and keeping physical receipts. Our software automates the expense tracking process, saving time and reducing errors. This allows you to focus more on what matters—growing your business.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <FaTools className="text-sm" />
                    </span>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Maximize Operational Efficiency</h4>
                      <p className="text-gray-600 text-lg">
                        Track everything from fuel to repairs to minimize unexpected costs. Having a well-maintained fleet with transparent expense tracking leads to more efficient operations, reduced downtime, and higher profitability.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <FaChartLine className="text-sm" />
                    </span>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Scalability for Growing Businesses</h4>
                      <p className="text-gray-600 text-lg">
                        As your fleet or agency grows, so do your operational needs. Our software is scalable, meaning it can grow with your business. Whether you're managing a handful of vehicles or a large fleet, the Cab Expense Tracker Software can handle it.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Section 9: Client Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <div className="bg-pink-50 p-8 rounded-2xl shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-pink-500"></div>

              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-pink-100 rounded-full p-4">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaUsers className="text-3xl text-pink-500" />
                  </motion.div>
                </div>
                <h4 className="text-3xl font-bold text-gray-800">
                  Client Testimonials: What Our Users Are Saying
                </h4>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-pink-600 font-bold text-lg">R</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Ravi</h4>
                      <p className="text-sm text-gray-500">Fleet Manager – Mumbai</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "Using Webutsav's Cab Expense Tracker Software has revolutionized the way we track our expenses. The real-time data and easy-to-use dashboard have allowed us to make smarter decisions, cut unnecessary costs, and maximize our profits. Highly recommended!"
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-pink-600 font-bold text-lg">A</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Amit</h4>
                      <p className="text-sm text-gray-500">Independent Driver – Pune</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "As a solo cab driver, managing my expenses was always a challenge. Since I started using this software, I've been able to keep track of my fuel, maintenance, and even tolls more efficiently. It has saved me both time and money!"
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-pink-600 font-bold text-lg">P</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Priya</h4>
                      <p className="text-sm text-gray-500">Travel Agency Owner – Pune</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "Running a travel agency involves a lot of moving parts. This software has helped us organize all our expenses and make our operations smoother. The mobile access and real-time syncing are especially helpful when we're managing multiple vehicles."
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Section 10: Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <div className="bg-blue-50 p-8 rounded-2xl shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>

              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-blue-100 rounded-full p-4">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="text-3xl text-blue-600" />
                  </motion.div>
                </div>
                <h4 className="text-3xl font-bold text-gray-800">
                  Conclusion: Why Choose Cab Expense Tracker Software by Webutsav?
                </h4>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600 text-lg">
                  If you are a cab driver, fleet manager, or travel agency looking to streamline your financial operations, Cab Expense Tracker Software by Webutsav is the ultimate solution. Designed with ease of use and efficiency in mind, our software helps businesses in India reduce operational costs, increase profitability, and improve overall financial management.
                </p>
                <p className="text-gray-600 text-lg">
                  From real-time tracking of fuel costs to seamless cloud-based storage, our software is built to support the unique needs of the Indian transportation industry. By making expense management easier, more accurate, and more efficient, Webutsav is empowering businesses to succeed in today's fast-paced world.
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl shadow-lg text-center"
                >
                  <p className="text-xl font-bold mb-2">Start tracking your expenses smarter today.</p>
                  <p className="text-lg">Contact us to learn more about the Cab Expense Tracker Software and how it can benefit your business.</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Section 11: FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
            id="faq"
          >
            <div className="bg-gray-50 p-8 rounded-2xl shadow-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-gray-500"></div>

              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-gray-200 rounded-full p-4">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaPlus className="text-3xl text-gray-700" />
                  </motion.div>
                </div>
                <h4 className="text-3xl font-bold text-gray-800">
                  Frequently Asked Questions (FAQs)
                </h4>
              </div>

              <div className="space-y-6">
                {/* FAQ 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(0)}
                    className="flex justify-between items-center w-full text-left p-5 font-semibold text-lg"
                  >
                    <span>1. What is Cab Expense Tracker Software?</span>
                    <span>{openFAQ === 0 ? <FaMinus /> : <FaPlus />}</span>
                  </button>
                  {openFAQ === 0 && (
                    <div className="px-5 pb-5">
                      <p className="text-gray-600">
                        Webutsav's Cab Expense Tracker is a smart tool that helps travel agencies and cab businesses track fuel, tolls, repairs, and other vehicle-related expenses efficiently.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(1)}
                    className="flex justify-between items-center w-full text-left p-5 font-semibold text-lg"
                  >
                    <span>2. Is this software mobile-compatible?</span>
                    <span>{openFAQ === 1 ? <FaMinus /> : <FaPlus />}</span>
                  </button>
                  {openFAQ === 1 && (
                    <div className="px-5 pb-5">
                      <p className="text-gray-600">
                        Yes, it's fully mobile-friendly and cloud-based, so you can manage expenses on the go.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(2)}
                    className="flex justify-between items-center w-full text-left p-5 font-semibold text-lg"
                  >
                    <span>3. Can I track expenses for multiple vehicles?</span>
                    <span>{openFAQ === 2 ? <FaMinus /> : <FaPlus />}</span>
                  </button>
                  {openFAQ === 2 && (
                    <div className="px-5 pb-5">
                      <p className="text-gray-600">
                        Absolutely. You can add unlimited vehicles, track individual or total expenses, and generate reports.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 4 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(3)}
                    className="flex justify-between items-center w-full text-left p-5 font-semibold text-lg"
                  >
                    <span>4. Is it suitable for travel agencies in India?</span>
                    <span>{openFAQ === 3 ? <FaMinus /> : <FaPlus />}</span>
                  </button>
                  {openFAQ === 3 && (
                    <div className="px-5 pb-5">
                      <p className="text-gray-600">
                        Yes. This software is tailored to meet the Indian cab and fleet industry's specific needs.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 5 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(4)}
                    className="flex justify-between items-center w-full text-left p-5 font-semibold text-lg"
                  >
                    <span>5. Can I generate reports for accounting or audits?</span>
                    <span>{openFAQ === 4 ? <FaMinus /> : <FaPlus />}</span>
                  </button>
                  {openFAQ === 4 && (
                    <div className="px-5 pb-5">
                      <p className="text-gray-600">
                        Yes, you can download detailed reports for each vehicle and time duration.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call-to-Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-8 md:p-16 text-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    ✨ Webutsav – The Best Cab Expense Tracker Software in India ✨
                  </h4>
                </motion.div>
                <p className="text-white text-lg md:text-xl mb-10 max-w-3xl mx-auto">
                  Webutsav is a trusted IT company in Pune offering innovative solutions in mobile and web development, digital marketing, and more. Transform your fleet management with our cutting-edge expense tracking software.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#f59e0b' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-xl shadow-lg transition-all duration-300 focus:outline-none"
                >
                  Get Started Today!
                </motion.button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}