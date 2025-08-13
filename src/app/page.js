
import HomeClient from "./HomeClient.jsx"

export const metadata = {
  title: "WebUtsav | Digital Marketing & Web Development Agency",
  description:
    "WebUtsav is your trusted digital partner offering SEO, website design, social media marketing, and mobile app development services across India.",
  keywords:
    "digital marketing company, web development in India, SEO services, mobile app development, social media marketing, PPC services, local SEO, WebUtsav agency",
  authors: [{ name: "WebUtsav" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://webutsav.com/",
  },
}

export default function Home() {
  return <HomeClient />
}
