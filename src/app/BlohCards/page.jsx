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
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {articles.map((article, index) => (
        <motion.div
          key={index}
          id={`card-${index}`}
          className="group relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
        >
          {/* Brand Colors Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

          <div className="relative professional-card rounded-2xl overflow-hidden border border-blue-100/30 group-hover:border-orange-200/50 transition-all duration-300">
            <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
              <Image
                id={`image-${index}`}
                src={article.image}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl transform transition-transform duration-300 group-hover:scale-110"
                priority
              />
              {/* Overlay with Brand Colors */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
                index % 2 === 0
                  ? "bg-gradient-to-br from-blue-500 to-blue-600"
                  : "bg-gradient-to-br from-orange-500 to-orange-600"
              }`}></div>
            </div>

            <div className="p-6">
              <h3 className={`text-xl font-bold text-gray-800 mb-3 transition-colors duration-300 ${
                index % 2 === 0 ? "group-hover:text-blue-600" : "group-hover:text-orange-600"
              }`}>
                {article.title}
              </h3>
              <p className="text-gray-600 flex justify-between text-sm mb-4">
                <span>{article.date}</span>
                <span>{article.views} views</span>
              </p>
              <motion.a
                href="#"
                className={`inline-flex items-center font-semibold transition-colors duration-300 ${
                  index % 2 === 0
                    ? "text-blue-600 hover:text-blue-700"
                    : "text-orange-600 hover:text-orange-700"
                }`}
                whileHover={{ x: 5 }}
              >
                <span>View Details</span>
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
