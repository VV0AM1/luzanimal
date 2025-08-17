export async function GET() {
  const base = "https://www.luzanimal.com";
  const urls = [
    { path: "/",                             changefreq: "daily",  priority: 1.0 },
    { path: "/servicios",                    changefreq: "weekly", priority: 0.9 },
    { path: "/contacto",                     changefreq: "monthly",priority: 0.8 },
    { path: "/quien-somos",                  changefreq: "monthly",priority: 0.6 },
    { path: "/faq",                          changefreq: "monthly",priority: 0.6 },
    { path: "/servicios/incineracion-colectiva",   changefreq: "monthly", priority: 0.8 },
    { path: "/servicios/incineracion-individual",  changefreq: "monthly", priority: 0.9 },
    { path: "/servicios/incineracion-presencial",  changefreq: "monthly", priority: 0.8 },
    { path: "/calculadora",                  changefreq: "monthly",priority: 0.5 },
  ];

  const now = new Date().toISOString();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `
  <url>
    <loc>${base}${u.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`).join("")}
</urlset>`.trim();

  return new Response(body, {
    headers: { "Content-Type": "application/xml", "Cache-Control": "s-maxage=3600" },
  });
}