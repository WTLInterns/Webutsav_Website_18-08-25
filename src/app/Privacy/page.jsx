// app/privacy/page.jsx
import PrivacyClient from "./PrivacyClient";

export const metadata = {
  title: "Privacy Policy | WebUtsav - Your Data, Our Responsibility",
  description:
    "Read WebUtsav's Privacy Policy to understand how we collect, use, and protect your personal information across our digital services.",
  keywords:
    "WebUtsav privacy policy, data protection, user information, website privacy, personal data use, secure digital services, privacy commitment",
  authors: [{ name: "WebUtsav" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://webutsav.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="px-6 py-10">
      <PrivacyClient />
    </div>
  );
}
