import GoogleAdsClient from "./GoogleAdsClient";

export const metadata = {
  title: "Google Ads Management Services | Boost ROI with WebUtsav",
  description:
    "Maximize your business visibility with targeted Google Ads campaigns. WebUtsav helps you drive traffic, leads, and conversions through expert PPC strategies.",
  keywords:
    "Google Ads services, PPC advertising, pay per click marketing, Adwords campaign management, SEM services, WebUtsav Google Ads",
  authors: [{ name: "WebUtsav" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://webutsav.com/services/google-adwords",
  },
  openGraph: {
    title: "Google Ads Management Services | Boost ROI with WebUtsav",
    description:
      "Maximize your business visibility with targeted Google Ads campaigns. WebUtsav helps you drive traffic, leads, and conversions through expert PPC strategies.",
    url: "https://webutsav.com/services/google-adwords",
    type: "website",
  },
};

export default function GoogleAdsPage() {
  return <GoogleAdsClient />;
}
