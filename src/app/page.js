import Navbar from "@/components/Navbar/page"
import Hero from "@/components/Hero/page"
import About from "@/components/About/page" 
import Services from "@/components/Services/page"
import WhyChooseUs from "@/components/Why_Choose_Us/Why_Choose_Us"
import PartnerBrands from "@/components/Partner_Brands/page"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
      <WhyChooseUs/>
      <PartnerBrands/>
    </div>
  )
}

