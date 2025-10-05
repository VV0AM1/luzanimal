import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes – Luz Animal",
  description:
    "Resuelve tus dudas sobre los servicios de cremación de mascotas (individual, colectiva y presencial) en Luz Animal Barcelona.",
  keywords: ["FAQ", "preguntas frecuentes", "cremación mascotas", "Luz Animal", "Barcelona"],
  alternates: { canonical: "https://www.luzanimal.com/faq" },
  openGraph: {
    title: "Preguntas Frecuentes – Luz Animal",
    description:
      "Dudas habituales sobre cremación de mascotas: modalidades, tiempos, recogidas y garantías.",
    url: "https://www.luzanimal.com/faq",
    type: "website",
  },
};

const SITE_URL = "https://www.luzanimal.com";

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${SITE_URL}/` },
    { "@type": "ListItem", "position": 2, "name": "Preguntas frecuentes", "item": `${SITE_URL}/faq` }
  ]
};

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Preguntas Frecuentes – Luz Animal",
  "url": `${SITE_URL}/faq`,
  "inLanguage": "es-ES",
  "isPartOf": { "@type": "WebSite", "name": "Luz Animal", "url": SITE_URL },
  "description":
    "Preguntas y respuestas sobre cremación de mascotas en Barcelona y Granollers: modalidades, tiempos, recogidas y garantías."
};

export default function FAQPage() {
  return (
    <>
      <Script id="ld-breadcrumb-faq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdBreadcrumb)}
      </Script>
      <Script id="ld-webpage-faq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdWebPage)}
      </Script>

      <FAQSection />
    </>
  );
}