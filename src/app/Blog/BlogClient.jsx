// "use client"

// import { useEffect, useRef } from "react"
// import gsap from "gsap"
// import BloCard from "../BlohCards/page"
// import Connect from "../Connect/page"

// export default function BlogPage() {
//   const pRef = useRef(null)
//   const h2Ref = useRef(null)

//   useEffect(() => {
//     if (pRef.current && h2Ref.current) {            
//       const tl = gsap.timeline()

//       // Animate `p` (— Blog Grid) first
//       tl.fromTo(
//         pRef.current.children,
//         { opacity: 0, x: 50 },
//         { opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: "power3.out" },
//       )

//       // Animate `h2` (Get to Know Our Latest Articles!) after `p`
//       tl.fromTo(
//         h2Ref.current.children,
//         { opacity: 0, x: 50 },
//         { opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: "power3.out" },
//         "-=0.5", // Overlap animations slightly
//       )
//     }
//   }, [])

//   const pText = "— Blog Grid"
//   const h2Text = "Get to Know Our Latest Articles!"

//   return (
//     <>
//       <div>
//         {/* Background Section */}
//         <div
//           className="relative w-full h-[70vh] sm:h-[70vh] flex items-center px-4 sm:px-8 lg:px-16"
//           style={{
//             backgroundImage: "url('/images/aboutus.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundAttachment: "fixed", // Keeps background fixed while scrolling
//           }}>
//           <div className="max-w-lg sm:max-w-xl lg:max-w-2xl text-left">
//             {/* Animated P (— Blog Grid) */}
//             <p ref={pRef} className="text-yellow-400 font-bold text-lg sm:text-xl md:text-2xl mb-2">
//               {pText.split("").map((letter, index) => (
//                 <span key={index} className="inline-block">
//                   {letter}
//                 </span>
//               ))}
//             </p>

//             {/* Animated H2 (Get to Know Our Latest Articles!) */}
//             <h2 ref={h2Ref} className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
//               {h2Text.split(" ").map((word, index) => (
//                 <span key={index} className="inline-block mr-2">
//                   {word}
//                 </span>
//               ))}
//             </h2>
//           </div>
//         </div>

//         {/* Blog Cards Section */}
//         <div className="mt-8 px-4 sm:px-8 flex flex-wrap justify-center gap-6">
//           <BloCard />
//         </div>
//         <div>
//           {" "}
//           <Connect />
//         </div>
//       </div>
//     </>
//   )
// }

"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import BloCard from "../BlohCards/page"
import Connect from "../Connect/page"
// import Head from "next/head"

export default function BlogPage() {
  const pRef = useRef(null)
  const h2Ref = useRef(null)

  useEffect(() => {
    if (pRef.current && h2Ref.current) {            
      const tl = gsap.timeline()

      // Animate `p` (— Blog Grid) first
      tl.fromTo(
        pRef.current.children,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: "power3.out" },
      )

      // Animate `h2` (Get to Know Our Latest Articles!) after `p`
      tl.fromTo(
        h2Ref.current.children,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 1, ease: "power3.out" },
        "-=0.5", // Overlap animations slightly
      )
    }
  }, [])

  const pText = "— Blog Grid"
  const h2Text = "Get to Know Our Latest Articles!"

  return (
    <>
      {/* <Head>
        <title>WebUtsav Blog | Insights on Digital Marketing & Web Development</title>
        <meta name="description" content="Stay updated with the latest trends, tips, and news in digital marketing, SEO, social media, and web development on the WebUtsav Blog." />
        <link rel="canonical" href="https://webutsav.com/blog" />
        <meta name="author" content="WebUtsav" />
        <meta name="keywords" content="digital marketing blog, SEO tips, social media strategies, web development insights, WebUtsav blog, marketing trends" />
        <meta name="robots" content="index, follow" />
      </Head> */}
      
      <div>
        {/* Background Section */}
        <div
          className="relative w-full h-[70vh] sm:h-[70vh] flex items-center px-4 sm:px-8 lg:px-16"
          style={{
            backgroundImage: "url('/images/aboutus.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed", // Keeps background fixed while scrolling
          }}>
          <div className="max-w-lg sm:max-w-xl lg:max-w-2xl text-left">
            {/* Animated P (— Blog Grid) */}
            {/* <p ref={pRef} className="text-yellow-400 font-bold text-lg sm:text-xl md:text-2xl mb-2">
              {pText.split("").map((letter, index) => (
                <span key={index} className="inline-block">
                  {letter}
                </span>
              ))}
            </p> */}


            

            {/* Animated H2 (Get to Know Our Latest Articles!) */}
            <h2 ref={h2Ref} className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight">
              {h2Text.split(" ").map((word, index) => (
                <span key={index} className="inline-block mr-2">{word}</span>
              ))}
            </h2>
          </div>
        </div>

        {/* Blog Cards Section */}
        <div className="mt-8 px-4 sm:px-8 flex flex-wrap justify-center gap-6">
          <BloCard />
        </div>
        <div>
          {" "}
          <Connect />
        </div>
      </div>
    </>
  )
}