/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
];

// Define redirects from old URL structure to new hyphenated structure
const redirects = [
  // Redirect old service URLs with underscores to new hyphenated URLs
  { source: '/Services/Web_Designing_Development', destination: '/Services/web-designing-development', permanent: true },
  { source: '/Services/Ecommerce_Website_Designing', destination: '/Services//ecommerce-website-designing', permanent: true },
  { source: '/Services/Google_Adwords', destination: '/Services/google-adwords', permanent: true },
  { source: '/Services/Search_Engin_Optimisation', destination: '/Services/search-engine-optimisation', permanent: true },
  { source: '/Services/Search-Engin-Optimisation', destination: '/Services/search-engine-optimisation', permanent: true },
  { source: '/Services/Search-Engine-Optimization', destination: '/Services/search-engine-optimisation', permanent: true },
  { source: '/Services/Local_Seo', destination: '/Services/local-seo', permanent: true },
  { source: '/Services/Social_Media_Marketing', destination: '/Services/social-media-marketing', permanent: true },
  { source: '/Services/Mobile_Application', destination: '/Services/mobile-application', permanent: true },
  { source: '/Services/Cab_Expenses_Tracker', destination: '/Services/cab-expenses-tracker', permanent: true },
];

const nextConfig = {
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
