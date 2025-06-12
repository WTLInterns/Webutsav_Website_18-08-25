import WebDesigning from "./WebDesigning";

export const metadata = {
  title: "Web Designing & Development | Custom Websites by WebUtsav",
  description:
    "Professional web design and development services by WebUtsav. We create responsive, SEO-friendly websites that drive results. Custom solutions for businesses of all sizes.",
  keywords:
    "web design, website development, responsive websites, custom web solutions, WebUtsav web design, front-end and back-end development, UI UX design",
  authors: [{ name: "WebUtsav" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://webutsav.com/services/web-designing-development",
  },
  openGraph: {
    title: "Web Designing & Development | Custom Websites by WebUtsav",
    description:
      "Professional web design and development services by WebUtsav. We create responsive, SEO-friendly websites that drive results.",
    url: "https://webutsav.com/services/web-designing-development",
    type: "website",
  },
};

export default function WebDesigningPage() {
  return <WebDesigning />;
}
