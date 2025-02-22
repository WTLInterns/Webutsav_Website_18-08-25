import { Geist, Azeret_Mono as Geist_Mono, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar/page"
import PreLoader from "@/components/PreLoader/page"
import Footer from "@/components/Footer/page"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Cobaztech",
  description: "Digital Marketing and IT Solutions",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/favicon.ico" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1218462826518108');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1218462826518108&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}>
        <Navbar />
        <PreLoader />
        {children}
        <Footer />
      </body>
    </html>
  )
}

