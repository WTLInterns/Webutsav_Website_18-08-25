'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-20 p-6 text-black">
      {/* Image Gallery with About Us Styling */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {[1, 2, 3, 4, 5].map((num, index) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <InstagramCard image={`/Blog/insta${num}.webp`} index={index} />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Newsletter Section */}
      {/* <motion.div 
        className="mt-12 text-center p-6 bg-gray-100 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        <h3 className="text-xl font-semibold">Join Our Newsletter</h3>
        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="p-2 border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none w-full sm:w-64 focus:outline-none"
          />
          <button className="p-2 bg-black text-white rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-gray-800 w-full sm:w-auto">
            Join Now
          </button>
        </div>
      </motion.div> */}
    </div>
  );
}

// InstagramCard Component with About Us Styling
const InstagramCard = ({ image, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href="https://www.instagram.com/webutsav/"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden cursor-pointer w-full block"
      whileHover={{ scale: 1.05, y: -5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Brand Colors Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

      <div className="relative professional-card rounded-2xl overflow-hidden border border-blue-100/30 group-hover:border-orange-200/50 transition-all duration-300">
        {/* Fully Responsive Image */}
        <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 relative">
          <Image
            src={image}
            alt="Instagram Image"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl transition-transform duration-300 group-hover:scale-110"
          />

          {/* Brand Color Overlay */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
            index % 2 === 0
              ? "bg-gradient-to-br from-blue-500 to-blue-600"
              : "bg-gradient-to-br from-orange-500 to-orange-600"
          }`}></div>
        </div>

        {/* Instagram Logo Overlay with Brand Colors */}
        {hovered && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <motion.div
              className={`p-4 rounded-full ${
                index % 2 === 0
                  ? "bg-blue-500/80"
                  : "bg-orange-500/80"
              }`}
              whileHover={{ scale: 1.1 }}
            >
              <Instagram size={40} color="white" strokeWidth={1.5} />
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.a>
  );
};
