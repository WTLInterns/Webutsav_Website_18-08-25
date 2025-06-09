import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | WebUtsav - Your Data, Our Responsibility</title>
        <meta name="description" content="Read WebUtsav's Privacy Policy to understand how we collect, use, and protect your personal information across our digital services." />
        <link rel="canonical" href="https://webutsav.com/privacy" />
        <meta name="author" content="WebUtsav" />
        <meta name="keywords" content="WebUtsav privacy policy, data protection, user information, website privacy, personal data use, secure digital services, privacy commitment" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="pt-20 pb-10 bg-black">
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg text-black">
          <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-600">Privacy Policy of Webutsav</h1>
          <p className="text-gray-500 text-center mb-4">Effective Date: 22/02/2025</p>

          <section className="mt-6 border-b pb-4">
            <h2 className="text-2xl font-semibold text-gray-800">1. Introduction</h2>
            <p className="text-gray-600 mt-2">
              Welcome to Webutsav. We respect your privacy and are committed to protecting your personal data. This
              Privacy Policy explains how we collect, use, and disclose information when you use our website, services,
              and digital platforms.
            </p>
            <p className="text-gray-600 mt-2">
              By accessing or using our services, you agree to the terms outlined in this Privacy Policy. If you do not
              agree, please refrain from using our services.
            </p>
          </section>

          <section className="mt-6 border-b pb-4">
            <h4 className="text-2xl font-semibold text-gray-800">2. Information We Collect</h4>
            <h3 className="font-semibold mt-2 text-gray-700">A. Personal Information:</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Company details (if applicable)</li>
              <li>Payment details (when applicable)</li>
            </ul>
            <h4 className="font-semibold mt-2 text-gray-700">B. Non-Personal Information:</h4>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Browser type and version</li>
              <li>IP address</li>
              <li>Device information</li>
              <li>Cookies and tracking data</li>
            </ul>
            <h4 className="font-semibold mt-2 text-gray-700">C. Information from Third Parties:</h4>
            <p className="text-gray-600">
              We may receive information from social media platforms, business partners, and analytics providers to
              improve our services.
            </p>
          </section>

          <section className="mt-6 border-b pb-4">
            <h4 className="text-2xl font-semibold text-gray-800">3. How We Use Your Information</h4>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Provide, operate, and maintain our services</li>
              <li>Personalize user experience</li>
              <li>Process transactions and payments</li>
              <li>Improve website functionality</li>
              <li>Send newsletters and promotional content (with your consent)</li>
              <li>Respond to inquiries and customer support requests</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mt-6 border-b pb-4">
            <h4 className="text-2xl font-semibold text-gray-800">4. How We Protect Your Data</h4>
            <p className="text-gray-600">
              We implement security measures to safeguard your data against unauthorized access, alteration, disclosure,
              or destruction. These measures include encryption, secure servers, and access restrictions. However, no
              method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mt-6 border-b pb-4">
            <h4 className="text-2xl font-semibold text-gray-800">5. Cookies and Tracking Technologies</h4>
            <p className="text-gray-600">
              We use cookies, beacons, and similar tracking technologies to enhance user experience. These technologies
              help us analyze site traffic and understand user preferences. You can modify your browser settings to
              disable cookies, but doing so may limit certain functionalities of our website.
            </p>
          </section>

          <section className="mt-6 border-b pb-4">
            <h4 className="text-2xl font-semibold text-gray-800">6. Third-Party Services</h4>
            <p className="text-gray-600">
              Webutsav may integrate third-party services such as payment gateways, analytics tools, and social media
              plugins. These third parties may collect data according to their own privacy policies. We encourage users to
              review the privacy policies of third-party services before engaging with them.
            </p>
          </section>

          <section className="mt-6 border-b pb-4">
            <h4 className="text-2xl font-semibold text-gray-800">7. Data Retention</h4>
            <p className="text-gray-600">
              We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy
              Policy. Once data is no longer required, we securely delete or anonymize it.
            </p>
          </section>

          <section className="mt-6">
            <h4 className="text-2xl font-semibold text-gray-800">12. Contact Information</h4>
            <p className="text-gray-600">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700">
              <strong>Office:</strong> Office No. 016, WING-A, Downtown CityVista, Ubale Nagar, Kharadi, Pune, Maharashtra
              411014
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> info@webutsav.com
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> +91 9145730054
            </p>
            <p className="text-gray-600 mt-4">
              By using Webutsav's services, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}