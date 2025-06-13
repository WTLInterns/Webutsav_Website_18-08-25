// app/contact/page.jsx
import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact WebUtsav | Let's Grow Your Digital Presence",
  description:
    "Get in touch with WebUtsav for digital marketing, web development, SEO, and app services. We're ready to help your business grow online.",
  keywords:
    "contact WebUtsav, digital marketing support, web development consultation, SEO agency contact, WebUtsav office, WebUtsav location",
  authors: [{ name: "WebUtsav" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://webutsav.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      <ContactClient />
    </div>
  );
}
