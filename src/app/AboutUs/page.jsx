import AboutUs from "./AboutUsClient";

// app/aboutus/page.jsx
export const metadata = {
  title: "About Us | WebUtsav - Digital Excellence with Purpose",
  description:
    "Learn about WebUtsav's journey, values, and team. We are passionate about empowering businesses with innovative digital marketing and web development solutions.",
  keywords:
    "about WebUtsav, digital marketing agency India, web development company, our mission, our team, marketing experts, WebUtsav story",
  authors: [{ name: "WebUtsav" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://webutsav.com/aboutus",
  },
};



export default function AboutUsPage() {
  return (
    <div>
      <AboutUs/>
    </div>
  );
}
