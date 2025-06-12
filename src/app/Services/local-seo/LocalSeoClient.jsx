// "use client";

// import { useState ,useRef,useEffect} from "react";
// import Image from "next/image";
// import {
//   FaPlus,
//   FaMinus,
//   FaGlobe,
//   FaShoppingCart,
//   FaCogs,
//   FaGoogle,
//   FaSearch,
//   FaMapMarkerAlt,
//   FaShareAlt,
//   FaMobileAlt 
// } from "react-icons/fa";
// import { motion ,useInView,useAnimation} from "framer-motion";
// import { Globe, LineChart, Laptop, Lock, Rocket, Code, Wrench,CheckCircle } from "lucide-react"
// import Link from "next/link";

// const faqs = [
//   {
//     question: "What is Local SEO?",
//     answer:"Local SEO is the process of optimizing your website to rank higher in local search results. It involves optimizing your Google My Business profile, using local keywords, and gaining local backlinks",
//   },
//   {
//     question: "Why is Local SEO Important for My Business?",
//     answer:"Local SEO helps businesses attract nearby customers who are searching for products or services in their area. It enhances your online visibility, drives relevant traffic, and increases sales opportunities.",
//   },
//   {
//     question: "How Does Local SEO Differ from Regular SEO?",
//     answer:"While regular SEO focuses on general rankings, local SEO targets location-specific searches. Local SEO strategies include optimizing for local keywords, improving your GMB profile, and building local citations.",
//   },
//   {
//     question: "How Can Webutsav Help Improve My Local SEO?",
//     answer:"Webutsav offers expert local SEO optimization services to help you improve your online presence, rank higher in local searches, and attract more local customers through customized SEO strategies.",
//   },
//   {
//     question: "How Long Does It Take to See Results from Local SEO?",
//     answer:"Local SEO is a long-term strategy, and it can take 3 to 6 months to start seeing significant results. However, by consistently following best practices, you can expect gradual improvements in rankings and visibility.",
//   },
//   {
//     question: "Can Webutsav Help with Local SEO for Businesses Outside Pune?",
//     answer:"Yes! Webutsav offers local SEO services for businesses across India, focusing on specific cities and regions to help you achieve local search visibility.",
//   },
// ];

// const features = [
//   {
//     title: "Certified Google Ads Experts",
//     description: "We have a team of certified AdWords specialists who optimize your campaigns for success.",
//     icon: Globe,
//   },
//   {
//     title: "Data-Driven Strategies",
//     description: "We use in-depth analytics to enhance ad performance and maximize ROI.",
//     icon: LineChart,
//   },
//   {
//     title: "Conversion-Focused Campaigns",
//     description: "Every ad is designed to attract leads, increase sales, and boost business growth.",
//     icon: Laptop,
//   },
//   {
//     title: "Multi-Industry Experience ",
//     description: "We work with eCommerce, healthcare, education, real estate, finance, and more.",
//     icon: Lock,
//   },
//   {
//     title: "Transparent Reporting",
//     description: "Get detailed insights into your ad spend, clicks, conversions, and ROI.",
//     icon: Rocket,
//   },
//   {
//     title: "Budget-Friendly Solutions",
//     description: "We optimize your PPC budget to ensure high-quality traffic without overspending.",
//     icon: Code,
//   },
// ]

// const services = [
//   {
//     title: "Google My Business (GMB) Profile:",
//     description: "A fully optimized GMB profile is crucial for local SEO. This includes accurate business information (name, address, phone number), adding images, responding to reviews, and using relevant keywords.",
//   },
//   {
//     title: "Local Keywords",
//     description: "Incorporating location-based keywords into your website’s content, meta descriptions, and titles helps you rank for searches relevant to your geographic area.",
//   },
//   {
//     title: "NAP Consistency",
//     description: "NAP stands for Name, Address, and Phone number. Ensuring that your NAP information is consistent across your website and local directories is essential for local SEO.",
//   },
//   {
//     title: "Backlinks from Local Sources",
//     description: " Gaining backlinks from local websites, such as local news outlets, directories, and businesses, can improve your website's authority in local searches.",
//   },
//   {
//     title: "Online Reviews and Ratings",
//     description: "Positive customer reviews on platforms like Google, Yelp, and Facebook can significantly boost your local rankings",
//   },
// ]

// const expertiseItems = [
//   { title: "1. Optimize Your Google My Business Profile: Ensure your GMB profile is fully optimized with accurate business details, regular posts, and customer engagement through reviews and Q&A."},
//   { title: "2. Create Local Content: Develop content that resonates with your local audience, such as blog posts about local events, news, or topics relevant to your industry in the local area."},
//   { title: "3 .Mobile Optimization: With the increasing use of mobile devices for local searches, make sure your website is mobile-friendly and loads quickly."},
//   { title: "4.Local Citations and Directory Listings: Get listed on local directories and citation sites such as Yelp, Yellow Pages, and industry-specific directories."},
//   { title: "5.Engage with Local Customers: Respond to customer reviews and interact with your local community on social media and forums to increase brand visibility and engagement."},
// ]

// const technologies = [
//   {
//     category: "Frontend Technologies",
//     items: [
//       { name: "HTML5", logo: "/Technologies/html5.webp" },
//       { name: "CSS3", logo: "/Technologies/CSS3.webp" },
//       { name: "JavaScript", logo: "/Technologies/javascript.webp" },
//       { name: "React.js", logo: "/Technologies/React_js.webp" },
//       { name: "Angular", logo: "/Technologies/angularjs.webp" },
//       { name: "Vue.js", logo: "/Technologies/Vue.webp" },
//     ],
//   },
//   {
//     category: "Backend Technologies",
//     items: [
//       { name: "PHP", logo: "/Technologies/PHP.webp" },
//       { name: "Node.js", logo: "/Technologies/Node.webp" },
//       { name: "Python", logo: "/Technologies/Python.webp" },
//       { name: "Java", logo: "/Technologies/java.webp" },
//       { name: "Laravel", logo: "/Technologies/Laravel.webp" },
//       { name: "Django", logo: "/Technologies/django.webp" },
//       { name: "Express.js", logo: "/Technologies/express.jpg" },
//     ],
//   },
//   {
//     category: "eCommerce Platforms",
//     items: [
//       { name: "Shopify", logo: "/Technologies/Shopify.webp" },
//       { name: "WooCommerce", logo: "/Technologies/woocommerce.webp" },
//       { name: "Magento", logo: "/Technologies/Magento.webp" },
//     ],
//   },
//   {
//     category: "CMS Solutions",
//     items: [
//       { name: "WordPress", logo: "/Technologies/WordPress.webp" },
//       { name: "Joomla", logo: "/Technologies/Joomla.webp" },
//       { name: "Drupal", logo: "/Technologies/drupal.webp" },
//     ],
//   },
// ]


// const TechItem = ({ item }) => (
//   <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//     <img src={item.logo || "/placeholder.svg"} alt={`${item.name} logo`} className="w-6 h-6" />
//     <span className="text-xs font-medium text-gray-800">{item.name}</span>
//   </motion.div>
// )

// const FadeInSection = ({ children }) => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-50px" })
//   const mainControls = useAnimation()

//   useEffect(() => {
//     if (isInView) {
//       mainControls.start("visible")
//     }
//   }, [isInView, mainControls])

//   return (
//     <motion.div
//       ref={ref}
//       variants={{
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0 },
//       }}
//       initial="hidden"
//       animate={mainControls}
//       transition={{ duration: 0.5 }}
//     >
//       {children}
//     </motion.div>
//   )
// }

// export default function LocalSEO() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [openIndex, setOpenIndex] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };


//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
    
//     <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section */}
//       <motion.div
//         className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <Image
//           src="/images/aboutus.jpg"
//           alt="Google AdWords"
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-6 md:px-12">
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.5 }}
//             className="text-yellow-400 font-bold text-xl sm:text-2xl md:text-3xl mb-4"
//           >
//             — Our Services
//           </motion.p>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7, duration: 0.5 }}
//             className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight"
//           >
//             Local SEO
//           </motion.h1>
//         </div>
//       </motion.div>

//       {/* Main Content Section */}
//       <div className="flex flex-wrap p-6">
//         {/* Sidebar */}
//         <aside className="w-full md:w-1/5 bg-gradient-to-b from-white to-gray-100 p-6 shadow-lg rounded-lg mb-6 md:mb-0">
//           <h3 className="text-3xl font-bold text-gray-900 mb-6">
//             All Services
//           </h3>
//           <ul className="space-y-4">
//             {[
//               {
//                 name: "Web Designing & Development",
//                 icon: <FaGlobe />,
//                 href: "/Services/web-designing-development",
//               },
//               {
//                 name: "Ecommerce Website Designing",
//                 icon: <FaShoppingCart />,
//                 href: "/Services//ecommerce-website-designing",
//               },
//               {
//                 name: "Google Adwords",
//                 icon: <FaGoogle />,
//                 href: "/Services/google-adwords",
//               },
//               {
//                 name: "Search Engine Optimisation",
//                 icon: <FaSearch />,
//                 href: "/Services/search-engine-optimisation",
//               },
//               {
//                 name: "Local SEO",
//                 icon: <FaMapMarkerAlt />,
//                 href: "/Services/local-seo",
//               },
//               {
//                 name: "Social Media Marketing",
//                 icon: <FaShareAlt />,
//                 href: "/Services/social-media-marketing",
//               },
//               {
//                 name: "Mobile Application Development",
//                 icon: <FaMobileAlt/>,
//                 href: "/Services/mobile-application",
//               },
//             ].map((service, index) => (
//               <motion.li key={index} whileHover={{ x: 5 }}>
//                 <Link
//                   href={service.href}
//                   className="group flex items-center space-x-3 p-3 rounded-md transition-all duration-200 hover:bg-white hover:shadow-md cursor-pointer"
//                 >
//                   <span className="text-red-500 group-hover:text-red-600 transition-colors duration-200">
//                     {service.icon}
//                   </span>
//                   <span className="text-gray-700 group-hover:text-gray-900 font-medium transition-colors duration-200">
//                     {service.name}
//                   </span>
//                 </Link>
//               </motion.li>
//             ))}
//           </ul>
//         </aside>

//         {/* Content */}
//         <div className="w-full md:w-3/5 max-w-8xl mx-auto py-12">
//           <h1 className="text-4xl font-bold text-gray-800">
//           Local SEO Services by Webutsav
//           </h1>
//           <p className="text-gray-600 mt-6 text-2xl" >
//           As businesses continue to adapt to the digital landscape, local SEO has become an essential strategy for improving online visibility, driving targeted traffic, and boosting growth. At Webutsav, we offer Local SEO services designed to help your business rank higher in local search results, ensuring that you stand out in your specific geographic area. Our Local SEO optimization services are tailored to meet the needs of businesses in Pune and beyond, providing a competitive edge in a highly localized market.
//           </p>
//           <h4 className="text-4xl font-bold text-gray-800 pt-2">
//           What is Local SEO?
//           </h4>
//           <p className="text-gray-600 mt-6 text-2xl" >
//           Local SEO is the practice of optimizing a website to increase its visibility in local search results on search engines like Google, Bing, and Yahoo. While traditional SEO focuses on improving a website's ranking across all search results, local SEO specifically targets geographic-based searches. This makes it an ideal strategy for businesses that rely on local customers, such as restaurants, service providers, and retail stores.Local SEO helps you appear in searches that include location-specific terms, such as "restaurants near me," "plumbers in Pune," or "best digital marketing company in Kharadi." Optimizing for local search involves targeting local keywords, improving your Google My Business (GMB) profile, and gaining local backlinks, among other tactics.
//           </p>
//         </div>
//       </div>

//       {/* <section className="w-full py-12 md:py-24 bg-gray-50">
//       <div className="container px-4 md:px-6 mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12">Search Engine Optimization Techniques</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div key={index} className="flex flex-col items-center text-center">
//               <feature.icon className="w-12 h-12 mb-4 text-blue-600" />
//               <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section> */}

//     <section className="w-full py-10 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
//       <div className="container px-4 mx-auto">
//         <h4 className="text-3xl md:text-4xl font-bold text-center mb-6">Local SEO Ranking Factors</h4>
//         <p className="text-center text-blue-200 mb-8 max-w-2xl mx-auto">
//         Achieving a high ranking in local search results requires focusing on specific ranking factors unique to local SEO. Some of the key local SEO ranking factors include:
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <div key={index} className="group">
//               <div className="flex items-baseline mb-2">
//                 <span className="text-2xl font-bold text-blue-400 mr-2 group-hover:text-blue-300 transition-colors">
//                   {(index + 1).toString().padStart(2, "0")}
//                 </span>
//                 <h4 className="text-lg font-semibold group-hover:text-blue-300 transition-colors">{service.title}</h4>
//               </div>
//               <p className="text-sm text-blue-100 ml-8 border-l border-blue-700 pl-3 py-1 group-hover:border-blue-500 transition-colors">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>

//     <section className="py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <FadeInSection>
//           <h4 className="text-3xl md:text-4xl font-bold mb-8 text-center">
//           Local SEO Strategy for Success
//           </h4>
//         </FadeInSection>

//         <FadeInSection>
//           <p className="text-lg mb-12 text-center max-w-4xl mx-auto">
//           To implement an effective local SEO strategy, businesses must focus on several key areas
//           </p>
//         </FadeInSection>

//         {/* <FadeInSection>
//           <h4 className="text-2xl font-semibold mb-12 text-center">Finding the right search engine optimization company in Pune is crucial for business success. Key factors to consider:</h4>
//         </FadeInSection> */}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {expertiseItems.map((item, index) => (
//             <FadeInSection key={index}>
//               <div className="border-l-4 border-blue-500 pl-6 py-4 h-full">
//                 <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//             </FadeInSection>
//           ))}
//         </div>
//       </div>
//     </section>


//       {/* FAQ Section */}
//       <div className="container mx-auto py-2 px-4 md:px-6 lg:px-8">
//         <div className="p-6 mt-12">
//           <h4 className="text-4xl font-bold text-gray-800 text-center mb-6">
//           FAQs on Local SEO Services
//           </h4>
//           {/* <p className="text-sm md:text-base mb-6 text-center max-w-3xl mx-auto">
//           Webutsav provides Google Ads solutions for businesses across various industries
//         </p> */}
//           <div className="max-w-4xl mx-auto">
//             {faqs.map((faq, index) => (
//               <div key={index} className="mb-4 border-b pb-4">
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="flex justify-between items-center w-full text-left text-xl font-semibold text-gray-800 p-4 bg-white shadow rounded-lg"
//                 >
//                   {faq.question}
//                   {openIndex === index ? <FaMinus /> : <FaPlus />}
//                 </button>
//                 {openIndex === index && (
//                   <p className="p-4 text-gray-600">{faq.answer}</p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Google Ads vs. SEO – Which One is Right for You?</h1>
//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border p-3 text-left">Feature</th>
//               <th className="border p-3 text-center">Google AdWords</th>
//               <th className="border p-3 text-center">SEO</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border p-3 font-semibold">Time to See Results</td>
//               <td className="border p-3 text-center">Immediate</td>
//               <td className="border p-3 text-center">Takes time (3-6 months)</td>
//             </tr>
//             <tr className="bg-gray-50">
//               <td className="border p-3 font-semibold">Cost</td>
//               <td className="border p-3 text-center">Pay for Clicks</td>
//               <td className="border p-3 text-center">Free (Organic)</td>
//             </tr>
//             <tr>
//               <td className="border p-3 font-semibold">Traffic Control</td>
//               <td className="border p-3 text-center">Target specific audience & keywords</td>
//               <td className="border p-3 text-center">Depends on search engine ranking</td>
//             </tr>
//             <tr className="bg-gray-50">
//               <td className="border p-3 font-semibold">Best For</td>
//               <td className="border p-3 text-center">Instant traffic & lead generation</td>
//               <td className="border p-3 text-center">Long-term organic growth</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <div className="mt-8 bg-blue-50 p-6 rounded-lg">
//         <h2 className="text-xl font-semibold mb-4">Best Strategy</h2>
//         <p className="text-lg">
//           A combination of Google Ads & SEO ensures short-term results (PPC) and long-term growth (SEO).
//         </p>
//       </div>
//     </div> */}
      
//       {/* Work Process Section */}
//       <div className="flex flex-col items-center justify-center py-4 px-8 bg-gradient-to-b from-white to-yellow-50">
//         <motion.h2
//           className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 text-center"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//            Local SEO Checklist
//         </motion.h2>
//         <motion.p
//           className="text-gray-600 text-center mb-12 max-w-3xl text-lg"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           A well-organized local SEO checklist is vital for ensuring that all aspects of your local SEO strategy are covered. Here’s a helpful checklist for local businesses looking to optimize their local SEO efforts:
//         </motion.p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {[" ", "", " ", " "].map(
//             (step, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white p-6 rounded-lg shadow-lg text-center"
//                 whileHover={{ scale: 1.05 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <div
//                   className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl font-bold ${
//                     index === 0
//                       ? "bg-blue-200 text-blue-600"
//                       : index === 1
//                         ? "bg-green-200 text-green-600"
//                         : index === 2
//                           ? "bg-purple-200 text-purple-600"
//                           : index === 3
//                             ? "bg-red-200 text-red-600"
//                             : index === 4
//                               ? "bg-yellow-200 text-yellow-600"
//                               : "bg-pink-200 text-pink-600"
//                   }`}
//                 >
//                   {`0${index + 1}`}
//                 </div>
//                 <h4 className="text-2xl font-bold mb-2"></h4>
//                 <p className="text-gray-600">
//                   {index === 0 && "Claim and optimize your Google My Business listing."}
//                   {index === 1 && "Ensure that your NAP (name, address, phone number) is consistent across all online platforms."}
//                   {index === 2 && "Optimize your website with local keywords relevant to your services and location"}
//                   {index === 3 && "Obtain backlinks from local sources such as local blogs, news outlets, and business associations."}
//                 </p>
//               </motion.div>
//             )
//           )}
//         </div>
//       </div>
//       <div className="bg-gradient-to-r from-amber-500 to-amber-600 py-16 px-4 text-center">
//         <motion.h2
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="text-4xl font-extrabold text-white tracking-wide mb-8"
//         >
//           Webutsav – The Best Search Local SEO Company in Pune, Maharashtra
//         </motion.h2>
//         <p className="text-sm md:text-base mb-6 text-center max-w-3xl mx-auto text">
//         Webutsav is a trusted Local search engine optimization SEO company Pune, Maharashtra, offering expert solutions to boost your website rankings. Our team ensures top-notch SEO strategies tailored to your business needs.
//         </p>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-gray-100 transition-all duration-300 focus:outline-none"
//         >
//           🚀 Want to Grow Your Business with Local SEO ? 🚀
//         </motion.button>
//       </div>
//     </div>
//   );
// }


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
    question: "What is Local SEO?",
    answer:"Local SEO is the process of optimizing your website to rank higher in local search results. It involves optimizing your Google My Business profile, using local keywords, and gaining local backlinks",
  },
  {
    question: "Why is Local SEO Important for My Business?",
    answer:"Local SEO helps businesses attract nearby customers who are searching for products or services in their area. It enhances your online visibility, drives relevant traffic, and increases sales opportunities.",
  },
  {
    question: "How Does Local SEO Differ from Regular SEO?",
    answer:"While regular SEO focuses on general rankings, local SEO targets location-specific searches. Local SEO strategies include optimizing for local keywords, improving your GMB profile, and building local citations.",
  },
  {
    question: "How Can Webutsav Help Improve My Local SEO?",
    answer:"Webutsav offers expert local SEO optimization services to help you improve your online presence, rank higher in local searches, and attract more local customers through customized SEO strategies.",
  },
  {
    question: "How Long Does It Take to See Results from Local SEO?",
    answer:"Local SEO is a long-term strategy, and it can take 3 to 6 months to start seeing significant results. However, by consistently following best practices, you can expect gradual improvements in rankings and visibility.",
  },
  {
    question: "Can Webutsav Help with Local SEO for Businesses Outside Pune?",
    answer:"Yes! Webutsav offers local SEO services for businesses across India, focusing on specific cities and regions to help you achieve local search visibility.",
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
    title: "Google My Business (GMB) Profile:",
    description: "A fully optimized GMB profile is crucial for local SEO. This includes accurate business information (name, address, phone number), adding images, responding to reviews, and using relevant keywords.",
  },
  {
    title: "Local Keywords",
    description: "Incorporating location-based keywords into your website's content, meta descriptions, and titles helps you rank for searches relevant to your geographic area.",
  },
  {
    title: "NAP Consistency",
    description: "NAP stands for Name, Address, and Phone number. Ensuring that your NAP information is consistent across your website and local directories is essential for local SEO.",
  },
  {
    title: "Backlinks from Local Sources",
    description: " Gaining backlinks from local websites, such as local news outlets, directories, and businesses, can improve your website's authority in local searches.",
  },
  {
    title: "Online Reviews and Ratings",
    description: "Positive customer reviews on platforms like Google, Yelp, and Facebook can significantly boost your local rankings",
  },
]

const expertiseItems = [
  { title: "1. Optimize Your Google My Business Profile: Ensure your GMB profile is fully optimized with accurate business details, regular posts, and customer engagement through reviews and Q&A."},
  { title: "2. Create Local Content: Develop content that resonates with your local audience, such as blog posts about local events, news, or topics relevant to your industry in the local area."},
  { title: "3 .Mobile Optimization: With the increasing use of mobile devices for local searches, make sure your website is mobile-friendly and loads quickly."},
  { title: "4.Local Citations and Directory Listings: Get listed on local directories and citation sites such as Yelp, Yellow Pages, and industry-specific directories."},
  { title: "5.Engage with Local Customers: Respond to customer reviews and interact with your local community on social media and forums to increase brand visibility and engagement."},
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

export default function LocalSEO() {
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
              Local SEO
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
            Local SEO Services by Webutsav
            </h1>
            <p className="text-gray-600 mt-6 text-2xl" >
            As businesses continue to adapt to the digital landscape, local SEO has become an essential strategy for improving online visibility, driving targeted traffic, and boosting growth. At Webutsav, we offer Local SEO services designed to help your business rank higher in local search results, ensuring that you stand out in your specific geographic area. Our Local SEO optimization services are tailored to meet the needs of businesses in Pune and beyond, providing a competitive edge in a highly localized market.
            </p>
            <h2 className="text-4xl font-bold text-gray-800 pt-2">
            What is Local SEO?
            </h2>
            <p className="text-gray-600 mt-6 text-2xl" >
            Local SEO is the practice of optimizing a website to increase its visibility in local search results on search engines like Google, Bing, and Yahoo. While traditional SEO focuses on improving a website's ranking across all search results, local SEO specifically targets geographic-based searches. This makes it an ideal strategy for businesses that rely on local customers, such as restaurants, service providers, and retail stores.Local SEO helps you appear in searches that include location-specific terms, such as "restaurants near me," "plumbers in Pune," or "best digital marketing company in Kharadi." Optimizing for local search involves targeting local keywords, improving your Google My Business (GMB) profile, and gaining local backlinks, among other tactics.
            </p>
          </div>
        </div>

        <section className="w-full py-10 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
          <div className="container px-4 mx-auto">
            <h4 className="text-3xl md:text-4xl font-bold text-center mb-6">Local SEO Ranking Factors</h4>
            <p className="text-center text-blue-200 mb-8 max-w-2xl mx-auto">
            Achieving a high ranking in local search results requires focusing on specific ranking factors unique to local SEO. Some of the key local SEO ranking factors include:
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
              Local SEO Strategy for Success
              </h4>
            </FadeInSection>

            <FadeInSection>
              <p className="text-lg mb-12 text-center max-w-4xl mx-auto">
              To implement an effective local SEO strategy, businesses must focus on several key areas
              </p>
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
            FAQs on Local SEO Services
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
             Local SEO Checklist
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center mb-12 max-w-3xl text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A well-organized local SEO checklist is vital for ensuring that all aspects of your local SEO strategy are covered. Here's a helpful checklist for local businesses looking to optimize their local SEO efforts:
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
                    {index === 0 && "Claim and optimize your Google My Business listing."}
                    {index === 1 && "Ensure that your NAP (name, address, phone number) is consistent across all online platforms."}
                    {index === 2 && "Optimize your website with local keywords relevant to your services and location"}
                    {index === 3 && "Obtain backlinks from local sources such as local blogs, news outlets, and business associations."}
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
            Webutsav – The Best Search Local SEO Company in Pune, Maharashtra
          </motion.h2>
          <p className="text-sm md:text-base mb-6 text-center max-w-3xl mx-auto text">
          Webutsav is a trusted Local search engine optimization SEO company Pune, Maharashtra, offering expert solutions to boost your website rankings. Our team ensures top-notch SEO strategies tailored to your business needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-gray-100 transition-all duration-300 focus:outline-none"
          >
            🚀 Want to Grow Your Business with Local SEO ? 🚀
          </motion.button>
        </div>
      </div>
    </>
  );
}