// import Navbar from "../components/Navbar/page.jsx"
// import Hero from "../components/Hero/page.jsx"
// import About from "../components/About/page.jsx" 
// import Services from "../components/Services/page.jsx"
// import WhyChooseUs from "../components/Why_Choose_Us/Why_Choose_Us"

// export default function Home() {
//   return (
//     <div className="min-h-screen">
//       <Navbar />
//       <Hero/>
//       <About/>
//       <Services/>
//       <WhyChooseUs/>
//     </div>
//   )
// }



// app/page.js

import Navbar from "../components/Navbar/page.jsx"
import Hero from "../components/Hero/page.jsx"
import About from "../components/About/page.jsx"
import Services from "../components/Services/page.jsx"
import WhyChooseUs from "../components/Why_Choose_Us/Why_Choose_Us"

export const metadata = {
  title: "WebUtsav | Digital Marketing & Web Development Agency",
  description:
    "WebUtsav is your trusted digital partner offering SEO, website design, social media marketing, and mobile app development services across India.",
  keywords:
    "digital marketing company, web development in India, SEO services, mobile app development, social media marketing, PPC services, local SEO, WebUtsav agency",
  authors: [{ name: "WebUtsav" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://webutsav.com/",
  },
}


export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
     

    </div>
  )
}
