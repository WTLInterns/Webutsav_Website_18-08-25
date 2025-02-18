"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section className="relative bg-zinc-800 py-16 md:py-24 overflow-hidden bg-opacity-15">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-100/50 -z-10">
        <div className="absolute w-full h-full border-2 border-orange-200 transform translate-x-8 translate-y-8" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-orange-200 rounded-lg" />
              <div className="relative rounded-lg overflow-hidden bg-white shadow-xl">
                <Image
                  src="/team.png"
                  alt="Team celebrating success"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content section */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black">
              About <span className="text-orange-500">Digimedia Solutions</span>
            </h2>

            <div className="space-y-6 text-black -600">
              <p>
                As a valued partner of many brands, we have effectively completed more than 2,000 projects for over 300
                clients. This ensures maximum efficiency while delivering the expected results. Our strategies are based
                on insights, hence results are always felt.
              </p>

              <p>
                The company provides a wide range of services such as web design and development, e-commerce, ERP
                development, and Google AdWords. We also offer search engine optimization (SEO), social media marketing,
                and local SEO, enabling clients to be prepared with strategies that extend to all aspects of their
                business.
              </p>

              <p>
                Our understanding of various industries allows us to offer solutions that are both artistic and
                informative. This combination enables us to create critical strategies that are tailored for each brand,
                ensuring continuous growth.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block mt-4">
              <Link
                href="/about"
                className="inline-flex px-8 py-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-md transition-all duration-300"
              >
                More About Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

