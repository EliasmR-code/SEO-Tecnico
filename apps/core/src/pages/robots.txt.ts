export async function GET() {
  const siteUrl = 'https://seotecnico.co';

  return new Response(
    `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    }
  );
}
