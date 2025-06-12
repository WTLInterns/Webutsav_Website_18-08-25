import MobileAppClient from "./MobileAppClient";

export const metadata = {
  title: "Mobile App Development | Android & iOS Solutions by WebUtsav",
  description:
    "Get scalable and secure mobile applications developed for Android and iOS with WebUtsav. We turn your ideas into high-performing mobile apps.",
  keywords:
    "mobile app development, android app, iOS app, app development company, mobile application services, custom app solutions, WebUtsav apps",
  authors: [{ name: "WebUtsav" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://webutsav.com/services/mobile-application",
  },
  openGraph: {
    title: "Mobile App Development | Android & iOS Solutions by WebUtsav",
    description:
      "Get scalable and secure mobile applications developed for Android and iOS with WebUtsav. We turn your ideas into high-performing mobile apps.",
    url: "https://webutsav.com/services/mobile-application",
    type: "website",
  },
};

export default function MobileApplicationPage() {
  return <MobileAppClient />;
}
