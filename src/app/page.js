import Navbar from "../components/Navbar/page.jsx"
import Hero from "../components/Hero/page.jsx"
import About from "../components/About/page.jsx" 
import Services from "../components/Services/page.jsx"
import WhyChooseUs from "../components/Why_Choose_Us/Why_Choose_Us"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
      <WhyChooseUs/>
    </div>
  )
}

