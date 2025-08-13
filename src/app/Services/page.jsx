"use client"

import ServicesTimeline from "../../components/Services/page"
import Head from "next/head"

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services - Professional Digital Solutions | Webutsav</title>
        <meta 
          name="description" 
          content="Explore our comprehensive range of digital services including web development, mobile apps, digital marketing, SEO, and more. Professional solutions for your business growth." 
        />
        <meta name="keywords" content="web development, mobile apps, digital marketing, SEO, social media marketing, ecommerce development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://webutsav.com/Services" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Our Services - Professional Digital Solutions | Webutsav" />
        <meta property="og:description" content="Explore our comprehensive range of digital services including web development, mobile apps, digital marketing, SEO, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webutsav.com/Services" />
        <meta property="og:image" content="https://webutsav.com/images/services-og.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services - Professional Digital Solutions | Webutsav" />
        <meta name="twitter:description" content="Explore our comprehensive range of digital services including web development, mobile apps, digital marketing, SEO, and more." />
        <meta name="twitter:image" content="https://webutsav.com/images/services-og.jpg" />
      </Head>
      
      <main>
        <ServicesTimeline />
      </main>
    </>
  )
}
