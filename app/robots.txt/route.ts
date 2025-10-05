import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/favicon.ico", "/favicon.png"],
        disallow: ["/api/", "/_next/", "/static/", "/private/"]
      }
    ],
    sitemap: "https://www.luzanimal.com/sitemap.xml"
  };
}