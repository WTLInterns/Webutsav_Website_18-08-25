// app/blog/page.jsx
import BlogClient from "./BlogClient";

export const metadata = {
  title: "WebUtsav Blog | Insights on Digital Marketing & Web Development",
  description:
    "Stay updated with the latest trends, tips, and news in digital marketing, SEO, social media, and web development on the WebUtsav Blog.",
  keywords:
    "digital marketing blog, SEO tips, social media strategies, web development insights, WebUtsav blog, marketing trends",
  authors: [{ name: "WebUtsav" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://webutsav.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">WebUtsav Blog</h1>
      <BlogClient />
    </div>
  );
}
