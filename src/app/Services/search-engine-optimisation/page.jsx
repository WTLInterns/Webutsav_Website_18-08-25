import SEOClient from "./SEOClient";

export const metadata = {
  title: "Search Engine Optimization (SEO) Services in India | WebUtsav",
  description:
    "Professional SEO services by WebUtsav. We provide comprehensive search engine optimization including on-page, off-page, and technical SEO to improve your website's visibility and rankings.",
  keywords:
    "SEO services India, search engine optimization, on-page SEO, off-page SEO, technical SEO, SEO company Pune, digital marketing SEO, WebUtsav SEO, local SEO, eCommerce SEO",
  authors: [{ name: "WebUtsav" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://webutsav.com/services/search-engine-optimization",
  },
  openGraph: {
    title: "Search Engine Optimization (SEO) Services in India | WebUtsav",
    description:
      "Professional SEO services by WebUtsav. We provide comprehensive search engine optimization to improve your website's visibility and rankings.",
    url: "https://webutsav.com/services/search-engine-optimization",
    type: "website",
  },
};

export default function SEOPage() {
  return <SEOClient />;
}
