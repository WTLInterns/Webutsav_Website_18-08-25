'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-20 p-6 bg-white text-black">
      {/* Connect With Us Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Connect with us</h1>
      </div>
      
      {/* Image Gallery (Responsive Column Layout) */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <InstagramCard key={num} image={`/Blog/insta${num}.webp`} />
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

// InstagramCard Component (Now Column-Based on Mobile)
const InstagramCard = ({ image }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Fully Responsive Image */}
      <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 relative">
        <Image 
          src={image} 
          alt="Instagram Image" 
          layout="fill" 
          objectFit="cover" 
          className="rounded-lg"
        />
      </div>
      
      {/* Instagram Logo Overlay */}
      {hovered && (
        <motion.div 
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <Instagram size={40} color="yellow" strokeWidth={1.5} />
        </motion.div>
      )}
    </motion.div>
  );
};
