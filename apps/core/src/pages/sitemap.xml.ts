import queryCMS from '@multilaunch/ui/cms';
import getAvailableLocales from '@multilaunch/ui/i18n';

export async function GET() {
  const baseUrl = (import.meta.env.SITE || 'https://seotecnico.co').replace(/\/$/, '');
  const locales = await getAvailableLocales();
  const allBrandsQuery = `
    query {
      allBrands {
        slug
      }
    }
  `;
  const { allBrands = [] } = await queryCMS(allBrandsQuery);

  const urls = new Set<string>();

  locales.forEach((locale) => {
    urls.add(`${baseUrl}/${locale}`);
    urls.add(`${baseUrl}/${locale}/about`);
    allBrands.forEach((brand) => {
      urls.add(`${baseUrl}/${locale}/brands/${brand.slug}`);
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${Array.from(urls)
      .sort()
      .map((url) => `
      <url>
        <loc>${url}</loc>
      </url>`)
      .join('')}
  </urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
