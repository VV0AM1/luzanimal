import type { Metadata } from "next";
import CalculadoraSection from "@/components/CalculadoraSection";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Calculadora de Precio – Cremación de Mascotas | Luz Animal",
  description:
    "Calcula al momento el precio de la cremación de tu mascota en Barcelona y Granollers. Elige modalidad (colectiva, individual o presencial), peso y extras opcionales.",
  keywords: [
    "calculadora cremación mascotas",
    "precio cremación mascotas Barcelona",
    "incineración mascotas Barcelona",
    "cremación individual",
    "cremación colectiva",
    "cremación presencial",
    "Luz Animal",
  ],
  openGraph: {
    title: "Calculadora de Precio – Luz Animal",
    description:
      "Calcula un presupuesto orientativo para la cremación de tu mascota. Transparente, rápido y sin sorpresas.",
    url: "https://www.luzanimal.com/calculadora",
    siteName: "Luz Animal",
    type: "website",
    images: [
      {
        url: "https://www.luzanimal.com/images/og-calculadora.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de cremación de mascotas – Luz Animal",
      },
    ],
  },
  alternates: {
    canonical: "https://www.luzanimal.com/calculadora",
  },
};

const SITE_URL = "https://www.luzanimal.com";

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${SITE_URL}/` },
    { "@type": "ListItem", "position": 2, "name": "Calculadora", "item": `${SITE_URL}/calculadora` }
  ]
};

const jsonLdWebApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Calculadora de cremación de mascotas",
  "url": `${SITE_URL}/calculadora`,
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "publisher": {
    "@type": "Organization",
    "name": "Luz Animal",
    "url": SITE_URL
  },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
  "inLanguage": "es-ES"
};

const jsonLdServiceCatalog = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Cremación de mascotas",
  "provider": { "@type": "LocalBusiness", "name": "Luz Animal", "url": SITE_URL },
  "areaServed": "Barcelona y Granollers",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Modalidades y rangos de peso",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Cremación colectiva",
        "itemOffered": { "@type": "Service", "name": "Cremación colectiva" },
        "eligibleQuantity": [
          { "@type": "QuantitativeValue", "minValue": 0,  "maxValue": 5,  "unitCode": "KGM" },
          { "@type": "QuantitativeValue", "minValue": 6,  "maxValue": 15, "unitCode": "KGM" },
          { "@type": "QuantitativeValue", "minValue": 16, "maxValue": 30, "unitCode": "KGM" },
          { "@type": "QuantitativeValue", "minValue": 31, "maxValue": 50, "unitCode": "KGM" },
          { "@type": "QuantitativeValue", "minValue": 51,                 "unitCode": "KGM" }
        ]
      },
      {
        "@type": "Offer",
        "name": "Cremación individual",
        "itemOffered": { "@type": "Service", "name": "Cremación individual" },
        "eligibleQuantity": [
          { "@type": "QuantitativeValue", "minValue": 0,  "maxValue": 5,  "unitCode": "KGM" },
          { "@type": "QuantitativeValue", "minValue": 6,  "maxValue": 15, "unitCode": "KGM" },
          { "@type": "QuantitativeValue", "minValue": 16, "maxValue": 30, "unitCode": "KGM" },
          { "@type": "QuantitativeValue", "minValue": 31, "maxValue": 50, "unitCode": "KGM" },
          { "@type": "QuantitativeValue", "minValue": 51,                 "unitCode": "KGM" }
        ]
      },
      {
        "@type": "Offer",
        "name": "Cremación presencial",
        "itemOffered": { "@type": "Service", "name": "Cremación presencial" },
        "eligibleQuantity": [
          { "@type": "QuantitativeValue", "minValue": 0,  "maxValue": 5,  "unitCode": "KGM" },
          { "@type": "QuantitativeValue", "minValue": 6,  "maxValue": 15, "unitCode": "KGM" },
          { "@type": "QuantitativeValue", "minValue": 16, "maxValue": 30, "unitCode": "KGM" },
          { "@type": "QuantitativeValue", "minValue": 31, "maxValue": 50, "unitCode": "KGM" },
          { "@type": "QuantitativeValue", "minValue": 51,                 "unitCode": "KGM" }
        ]
      }
    ]
  }
};

export default function CalculadoraPage() {
  return (
    <>
      <Script id="ld-breadcrumb-calculadora" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdBreadcrumb)}
      </Script>
      <Script id="ld-webapp-calculadora" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdWebApp)}
      </Script>
      <Script id="ld-service-catalogo" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdServiceCatalog)}
      </Script>

      <CalculadoraSection />
    </>
  );
}