export async function GET() {
  return new Response(
`User-agent: *
Allow: /
Sitemap: https://gaiamneme.com/sitemap-index.xml`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
}