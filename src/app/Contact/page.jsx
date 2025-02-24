'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Page from '../ContactForm/page';
export default function BlogPage() {
  const pRef = useRef(null);
  const h2Ref = useRef(null);

  useEffect(() => {
    if (pRef.current && h2Ref.current) {
      const tl = gsap.timeline();

      // Animate `p` (— Blog Grid) first
      tl.fromTo(
        pRef.current.children,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: 'power3.out' }
      );

      // Animate `h2` (Get to Know Our Latest Articles!) after `p`
      tl.fromTo(
        h2Ref.current.children,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: 'power3.out' },
        "-=0.5" // Overlap animations slightly
      );
    }
  }, []);

  const pText = '— Contact Us';
  const h2Text = 'Be Free To Contact Us or Visit';

  return (
    <div>
      {/* Background Section */}
      <div
        className="relative w-full h-96 flex items-center px-6 sm:px-16 lg:px-35"
        style={{
          backgroundImage: "url('/images/aboutus.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", 
        }}
      >
        <div className="max-w-lg sm:max-w-xl lg:max-w-2xl text-left">
          
          {/* Animated P (— Blog Grid) */}
          <p ref={pRef} className="text-yellow-400 font-bold text-xl sm:text-2xl md:text-3xl">
            {pText.split('').map((letter, index) => (
              <span key={index} className="inline-block">{letter}</span>
            ))}
          </p>

          {/* Animated H2 (Get to Know Our Latest Articles!) */}
          <h2 ref={h2Ref} className="text-white font-bold text-4xl sm:text-5xl md:text-6xl leading-tight">
            {h2Text.split(' ').map((word, index) => (
              <span key={index} className="inline-block mr-2">{word}</span>
            ))}
          </h2>

        </div>
      </div>

      {/* Contact */}
      <div >
       <Page />
      </div>
      {/* <div> <Connect /></div>
      <div><Footer/></div> */}
    </div>
  );
}


