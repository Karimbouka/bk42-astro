import type { APIRoute } from 'astro';

const pages = [
  'https://bk42auto.com/fr/',
  'https://bk42auto.com/en/',
  'https://bk42auto.com/fr/flotte/',
  'https://bk42auto.com/en/fleet/',
  'https://bk42auto.com/fr/reservation/',
  'https://bk42auto.com/en/booking/',
  'https://bk42auto.com/fr/a-propos/',
  'https://bk42auto.com/en/about/',
  'https://bk42auto.com/fr/contact/',
  'https://bk42auto.com/en/contact/',
  'https://bk42auto.com/fr/confidentialite/',
  'https://bk42auto.com/en/privacy/',
  'https://bk42auto.com/fr/conditions/',
  'https://bk42auto.com/en/terms/',
];

const lastmod = new Date().toISOString().split('T')[0];

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
