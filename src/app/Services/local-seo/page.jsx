import LocalSeoClient from "./LocalSeoClient";

export const metadata = {
  title: "Local SEO Services | Boost Local Visibility with WebUtsav",
  description:
    "Improve your local search rankings with WebUtsav's expert Local SEO services. Get found by nearby customers through Google Maps, listings, and citations.",
  keywords:
    "local SEO services, local business SEO, Google My Business optimization, local listings, SEO for local businesses, WebUtsav SEO company",
  authors: [{ name: "WebUtsav" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://webutsav.com/services/local-seo",
  },
  openGraph: {
    title: "Local SEO Services | Boost Local Visibility with WebUtsav",
    description:
      "Improve your local search rankings with WebUtsav's expert Local SEO services. Get found by nearby customers through Google Maps, listings, and citations.",
    url: "https://webutsav.com/services/local-seo",
    type: "website",
  },
};

export default function LocalSeoPage() {
  return <LocalSeoClient />;
}
