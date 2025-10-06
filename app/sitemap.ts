import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.luzanimal.com";
  const now = new Date();

  const urls: MetadataRoute.Sitemap = [
    { url: `${base}/`,                    changeFrequency: "daily",   priority: 1.0,  lastModified: now },
    { url: `${base}/servicios`,           changeFrequency: "weekly",  priority: 0.9,  lastModified: now },
    { url: `${base}/contacto`,            changeFrequency: "monthly", priority: 0.8,  lastModified: now },
    { url: `${base}/servicios/joyas-esencia`,         changeFrequency: "monthly", priority: 0.5,  lastModified: now },
    { url: `${base}/servicios/eutanasia-a-domicilio`,         changeFrequency: "monthly", priority: 0.5,  lastModified: now },
    { url: `${base}/urnas`,         changeFrequency: "monthly", priority: 0.5,  lastModified: now },
    { url: `${base}/quien-somos`,         changeFrequency: "monthly", priority: 0.6,  lastModified: now },
    { url: `${base}/faq`,                 changeFrequency: "monthly", priority: 0.6,  lastModified: now },
    { url: `${base}/servicios/incineracion-colectiva`,  changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${base}/servicios/incineracion-individual`, changeFrequency: "monthly", priority: 0.9, lastModified: now },
    { url: `${base}/servicios/incineracion-presencial`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${base}/calculadora`,         changeFrequency: "monthly", priority: 0.5,  lastModified: now },
  ];
  return urls;
}