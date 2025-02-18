"use client"
import { Users2, Settings, Shield, Laptop } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function WhyChooseUs() {
  const features = [
    {
      icon: Users2,
      title: "Expertise and Experience",
      description:
        "Our team has years of expertise in digital marketing, web development, and branding to deliver optimal solutions for your business.",
    },
    {
      icon: Settings,
      title: "Customized Solutions",
      description: "We tailor strategies to address specific business challenges, ensuring maximum effectiveness.",
    },
    {
      icon: Shield,
      title: "Commitment to Quality",
      description:
        "We are dedicated to delivering quality from start to finish, exceeding client expectations on every project.",
    },
    {
      icon: Laptop,
      title: "Innovative Technology",
      description: "We use the latest tools and technology to keep your brand ahead of the competition.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="container mx-auto px-4 py-16 relative bg-gradient-to-b from-orange-50 to-white">
      {/* Decorative Dots Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 grid grid-cols-6 gap-2">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-200" />
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
          <div className="space-y-4">
            <motion.h2 className="text-4xl font-bold tracking-tight" variants={itemVariants}>
              Why Choose Us?
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground" variants={itemVariants}>
              As a trusted partner, we provide insights-based solutions to help businesses grow and achieve their goals
              effectively.
            </motion.p>
          </div>

          <motion.div className="space-y-6" variants={containerVariants}>
            {features.map((feature) => (
              <motion.div key={feature.title} className="flex gap-4" variants={itemVariants}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-orange-100">
                    <feature.icon className="h-6 w-6 text-orange-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Get Started Now
            </Button>
          </motion.div>
        </motion.div>

        <div className="relative">
          <video
            src="../background.mp4"
            poster="../background.mp4"
            className="rounded-lg shadow-xl w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Decorative Rectangle */}
          {/* <div className="absolute -bottom-6 -right-6 w-32 h-32 border-8 border-orange-200 rounded-lg -z-10" /> */}
        </div>
      </div>
    </section>
  )
}

