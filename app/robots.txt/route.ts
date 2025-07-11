export async function GET() {
  return new Response(
    `User-agent: *
Allow: /
Allow: /favicon.ico
Allow: /logo.png
Sitemap: https://www.luzanimal.com/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}