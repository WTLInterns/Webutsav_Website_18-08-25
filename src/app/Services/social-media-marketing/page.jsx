import SocialMedia from "./SocialMedia";

export const metadata = {
  title: "Social Media Marketing Services | WebUtsav",
  description:
    "Boost your brand's visibility and engagement with WebUtsav's expert social media marketing services. We manage Facebook, Instagram, LinkedIn & more.",
  keywords:
    "social media marketing, SMM services, Instagram marketing, Facebook ads, LinkedIn marketing, digital branding, WebUtsav social media agency",
  authors: [{ name: "WebUtsav" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://webutsav.com/Services/social-media-marketing",
  },
};

export default function SocialMediaMarketingPage() {
  return <SocialMedia />;
}
