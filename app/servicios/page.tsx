import type { Metadata } from "next";
import ServiciosSection from "@/components/ServiciosSection";
import Script from "next/script";

const title = "Servicios de Cremación de Mascotas en Barcelona | Luz Animal";
const description =
  "Conoce nuestras modalidades de cremación de mascotas en Barcelona: incineración individual, colectiva y presencial. Atención cercana, transparente y profesional.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "cremación mascotas Barcelona",
    "incineración mascotas Barcelona",
    "incineración individual",
    "incineración colectiva",
    "incineración presencial",
    "crematorio de mascotas",
    "Luz Animal",
  ],
  alternates: {
    canonical: "https://www.luzanimal.com/servicios",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: "https://www.luzanimal.com/servicios",
    siteName: "Luz Animal",
    type: "website",
    images: [
      {
        url: "https://www.luzanimal.com/images/servicios-og.jpg",
        width: 1200,
        height: 630,
        alt: "Servicios de cremación de mascotas en Luz Animal",
      },
    ],
    locale: "es_ES",
  },
};

const SITE_URL = "https://www.luzanimal.com";

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${SITE_URL}/` },
    { "@type": "ListItem", "position": 2, "name": "Servicios", "item": `${SITE_URL}/servicios` }
  ]
};

const jsonLdCollectionPage = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Servicios de cremación de mascotas",
  "url": `${SITE_URL}/servicios`,
  "inLanguage": "es-ES",
  "isPartOf": { "@type": "WebSite", "name": "Luz Animal", "url": SITE_URL },
  "about": {
    "@type": "Thing",
    "name": "Cremación de mascotas en Barcelona y Granollers"
  },
  "description": description
};

const jsonLdItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Cremación individual de mascotas",
        "serviceType": "Cremación individual",
        "url": `${SITE_URL}/servicios/incineracion-individual`,
        "provider": { "@type": "LocalBusiness", "name": "Luz Animal" },
        "areaServed": "Barcelona y Granollers"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Cremación presencial de mascotas",
        "serviceType": "Cremación presencial",
        "url": `${SITE_URL}/servicios/incineracion-presencial`,
        "provider": { "@type": "LocalBusiness", "name": "Luz Animal" },
        "areaServed": "Barcelona y Granollers"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "Cremación colectiva de mascotas",
        "serviceType": "Cremación colectiva",
        "url": `${SITE_URL}/servicios/incineracion-colectiva`,
        "provider": { "@type": "LocalBusiness", "name": "Luz Animal" },
        "areaServed": "Barcelona y Granollers"
      }
    }
  ]
};

const jsonLdOfferCatalog = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "name": "Modalidades de cremación",
  "url": `${SITE_URL}/servicios`,
  "itemListElement": [
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cremación individual" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cremación presencial" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cremación colectiva" } }
  ]
};

export default function ServiciosPage() {
  return (
    <>
      <Script id="ld-breadcrumb-servicios" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdBreadcrumb)}
      </Script>
      <Script id="ld-collectionpage-servicios" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdCollectionPage)}
      </Script>
      <Script id="ld-itemlist-servicios" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdItemList)}
      </Script>
      <Script id="ld-offercatalog-servicios" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdOfferCatalog)}
      </Script>

      <ServiciosSection />
    </>
  );
}