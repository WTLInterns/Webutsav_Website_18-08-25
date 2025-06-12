import EcommerceClient from "./EcommerceClient";

export const metadata = {
  title: "Ecommerce Website Designing | Build Your Online Store with WebUtsav",
  description:
    "Professional eCommerce website design services by WebUtsav. We create high-converting online stores with seamless checkout, mobile responsiveness, and secure payment integration.",
  keywords:
    "ecommerce website designing, online store design, ecommerce development, WebUtsav ecommerce services, online shop website, ecommerce solutions, shopify development, woocommerce, magento",
  authors: [{ name: "WebUtsav" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://webutsav.com/services/ecommerce-website-designing",
  },
  openGraph: {
    title: "Ecommerce Website Designing | Build Your Online Store with WebUtsav",
    description:
      "Professional eCommerce website design services by WebUtsav. We create high-converting online stores with seamless checkout and mobile responsiveness.",
    url: "https://webutsav.com/services/ecommerce-website-designing",
    type: "website",
  },
};

export default function EcommercePage() {
  return <EcommerceClient />;
}
