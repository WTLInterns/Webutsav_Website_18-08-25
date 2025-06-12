import CabExpensesClient from "./CabExpensesClient";

export const metadata = {
  title: "Cab Expenses Tracker | Manage Your Taxi Costs Easily - WebUtsav",
  description:
    "Track and manage your cab expenses effortlessly with WebUtsav's Cab Expenses Tracker. Simplify your travel budgeting and expense reporting today.",
  keywords:
    "cab expenses tracker, taxi cost management, travel expense tracker, cab expense app, WebUtsav cab tools, expense reporting, budget your taxi fares",
  authors: [{ name: "WebUtsav" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://webutsav.com/services/cab-expenses-tracker",
  },
  openGraph: {
    title: "Cab Expenses Tracker | Manage Your Taxi Costs Easily - WebUtsav",
    description:
      "Track and manage your cab expenses effortlessly with WebUtsav's Cab Expenses Tracker.",
    url: "https://webutsav.com/services/cab-expenses-tracker",
    images: [
      {
        url: "https://webutsav.com/images/software-logo.png",
        alt: "Cab Expense Tracker",
      },
    ],
  },
};

export default function CabExpensesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Cab Expense Tracker Software",
            operatingSystem: "Web",
            applicationCategory: "BusinessApplication",
            description:
              "Webutsav's Cab Expense Tracker Software helps travel agencies and fleet owners manage cab expenses like fuel, tolls, repairs, and documents efficiently, especially tailored for the Indian market.",
            url: "https://webutsav.com/services/cab-expenses-tracker",
            author: {
              "@type": "Organization",
              name: "Webutsav",
              url: "https://webutsav.com",
            },
            image: "https://webutsav.com/images/software-logo.png",
            offers: {
              "@type": "Offer",
              price: "Contact for Pricing",
              priceCurrency: "INR",
              priceValidUntil: "2025-12-31",
              eligibleRegion: "IN",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.5",
              reviewCount: "150",
            },
            softwareVersion: "v1.2.3",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://webutsav.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Cab Expense Tracker",
                  item:
                    "https://webutsav.com/services/cab-expenses-tracker",
                },
              ],
            },
            keyFeature: [
              "ERP-Based System (Master Admin & Sub-Admins)",
              "Expense Logging for Fuel, Tolls, and Maintenance",
              "Live Image Uploads for Accurate Record-Keeping",
              "Cloud-Based Storage & Real-Time Sync",
              "User-Friendly Dashboard",
            ],
            howTo: {
              "@type": "HowTo",
              name: "How to Use Cab Expense Tracker Software",
              step: [
                {
                  "@type": "HowToStep",
                  url:
                    "https://webutsav.com/services/cab-expenses-tracker#signup",
                  name: "Sign Up for an Account",
                },
                {
                  "@type": "HowToStep",
                  url:
                    "https://webutsav.com/services/cab-expenses-tracker#setup",
                  name: "Set Up Your Fleet",
                },
                {
                  "@type": "HowToStep",
                  url:
                    "https://webutsav.com/services/cab-expenses-tracker#log-expenses",
                  name: "Start Logging Expenses",
                },
                {
                  "@type": "HowToStep",
                  url:
                    "https://webutsav.com/services/cab-expenses-tracker#reports",
                  name: "Review Reports and Optimize",
                },
              ],
            },
            faqPage:
              "https://webutsav.com/services/cab-expenses-tracker#faq",
          }),
        }}
      />
      <CabExpensesClient />
    </>
  );
}
