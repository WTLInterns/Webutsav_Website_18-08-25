'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image'; 
import { motion } from 'framer-motion';
import gsap from 'gsap';

const articles = [
  {
    title: 'The Importance of IT Solutions for M...',
    date: '04 Sep 2024',
    views: '3.4K',
    image: '/Blog/coming-soon-label.webp', 
  },
  {
    title: 'How Content Syndication Can Boost...',
    date: '10 Oct 2024',
    views: '3.4K',
    image: '/Blog/coming-soon-label.webp',
  },
  {
    title: 'Maximize Visibility with Effective Loc...',
    date: '10 Oct 2024',
    views: '3.4K',
    image: '/Blog/coming-soon-label.webp',
  },
];

export default function HomePage() {
  useEffect(() => {
    articles.forEach((_, index) => {
      const card = document.querySelector(`#card-${index}`);
      const image = document.querySelector(`#image-${index}`);

      if (card && image) {
        card.addEventListener('mouseenter', () => {
          gsap.to(image, { scale: 1.1, duration: 0.5, ease: "power3.out" });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(image, { scale: 1, duration: 0.5, ease: "power3.out" });
        });
      }
    });
  }, []);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <motion.div
          key={index}
          id={`card-${index}`}
          className="bg-white shadow-lg rounded-lg overflow-hidden p-4 w-full max-w-xs sm:max-w-sm cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
            <Image 
              id={`image-${index}`}
              src={article.image} 
              alt={article.title} 
              layout="fill" 
              objectFit="cover" 
              className="rounded-t-lg transform transition-transform duration-300"
              priority
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{article.title}</h3>
            <p className="text-gray-600 flex justify-between text-sm mt-2">
              <span>{article.date}</span>
              <span>{article.views} views</span>
            </p>
            <a href="#" className="text-blue-600 hover:underline mt-2 block">View Details →</a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
