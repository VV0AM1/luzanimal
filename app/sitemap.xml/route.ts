export async function GET() {
  const urls = ["/", "/servicios", "/contacto", "/quien-somos", "/faq", "/servicios/incineracion-colectiva", "/servicios/incineracion-individual", "/servicios/incineracion-presencial", "/calculadora"]; 

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>https://www.luzanimal.com${url}</loc>
    </url>`
    )
    .join("")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}