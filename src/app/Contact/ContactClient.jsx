'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ContactForm from '../ContactForm/page';
// import Head from 'next/head';

export default function ContactPage() {  
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
    <>
      {/* <Head>
        <title>Contact WebUtsav | Let's Grow Your Digital Presence</title>
        <meta name="description" content="Get in touch with WebUtsav for digital marketing, web development, SEO, and app services. We're ready to help your business grow online." />
        <link rel="canonical" href="https://webutsav.com/contact" />
        <meta name="author" content="WebUtsav" />
        <meta name="keywords" content="contact WebUtsav, digital marketing support, web development consultation, SEO agency contact, WebUtsav office, WebUtsav location" />
        <meta name="robots" content="index, follow" />
      </Head> */}

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
              {/* {pText.split('').map((letter, index) => (
                <span key={index} className="inline-block">{letter}</span> */}

{pText.split(' ').map((word, i) => (
    <span key={i} className={i !== 0 ? 'ml-4 inline-block' : 'inline-block'}>{word}</span>
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
          <ContactForm />
        </div>
        {/* <div> <Connect /></div>
        <div><Footer/></div> */}
      </div>
    </>
  );
}