export async function GET() {
  const baseUrl = 'https://webutsav.com';

  const staticRoutes = [
    '',
    '/aboutus',
    '/blog',
    '/contact',
    '/privacy',
    '/services/cab-expenses-tracker',
    '/services/ecommerce-website-designing',
    '/services/google-adwords',
    '/services/local-seo',
    '/services/mobile-application',
    '/services/search-engine-optimization',
    '/services/social-media-marketing',
    '/services/web-designing-development'
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes
    .map(
      (route) => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  `
    )
    .join('')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
