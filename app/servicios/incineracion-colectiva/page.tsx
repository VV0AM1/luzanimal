import type { Metadata } from "next";
import ColectivaSection from "@/components/ColectivaSection";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Incineración Colectiva – Luz Animal",
  description:
    "Incineración colectiva de mascotas en Barcelona: opción económica y respetuosa sin recuperación de cenizas.",
  keywords: [
    "incineración colectiva",
    "cremación mascotas Barcelona",
    "Luz Animal",
    "opción económica",
  ],
  openGraph: {
    title: "Incineración Colectiva – Luz Animal",
    description:
      "Servicio de incineración colectiva de mascotas en Barcelona sin devolución de cenizas.",
    url: "https://www.luzanimal.com/servicios/incineracion-colectiva",
    siteName: "Luz Animal",
    images: [
      {
        url: "https://www.luzanimal.com/images/colectiva-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Incineración Colectiva"
      }
    ],
  },
  alternates: {
    canonical: "https://www.luzanimal.com/servicios/incineracion-colectiva",
  },
};

const SITE_URL = "https://www.luzanimal.com";

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${SITE_URL}/` },
    { "@type": "ListItem", "position": 2, "name": "Servicios", "item": `${SITE_URL}/servicios` },
    { "@type": "ListItem", "position": 3, "name": "Incineración colectiva", "item": `${SITE_URL}/servicios/incineracion-colectiva` }
  ]
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Incineración colectiva de mascotas",
  "serviceType": "Cremación colectiva",
  "url": `${SITE_URL}/servicios/incineracion-colectiva`,
  "description":
    "Opción económica y respetuosa. Varias mascotas se incineran en un mismo ciclo. Por normativa no se recuperan cenizas.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Luz Animal",
    "url": SITE_URL,
    "telephone": "+34 684 418 499"
  },
  "areaServed": ["Barcelona", "Granollers", "Catalunya"],
  "availableChannel": [
    { "@type": "ServiceChannel", "name": "Recogida a domicilio 24/7" },
    { "@type": "ServiceChannel", "serviceLocation": { "@type": "Place", "name": "Instalaciones en Granollers" } }
  ],
  "termsOfService": `${SITE_URL}/servicios/incineracion-colectiva`,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Rangos de peso (orientativos)",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "0–5 kg",
        "itemOffered": { "@type": "Service", "name": "Cremación colectiva" },
        "eligibleQuantity": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 5, "unitCode": "KGM" }
      },
      {
        "@type": "Offer",
        "name": "6–15 kg",
        "itemOffered": { "@type": "Service", "name": "Cremación colectiva" },
        "eligibleQuantity": { "@type": "QuantitativeValue", "minValue": 6, "maxValue": 15, "unitCode": "KGM" }
      },
      {
        "@type": "Offer",
        "name": "16–30 kg",
        "itemOffered": { "@type": "Service", "name": "Cremación colectiva" },
        "eligibleQuantity": { "@type": "QuantitativeValue", "minValue": 16, "maxValue": 30, "unitCode": "KGM" }
      },
      {
        "@type": "Offer",
        "name": "31–50 kg",
        "itemOffered": { "@type": "Service", "name": "Cremación colectiva" },
        "eligibleQuantity": { "@type": "QuantitativeValue", "minValue": 31, "maxValue": 50, "unitCode": "KGM" }
      },
      {
        "@type": "Offer",
        "name": "Más de 50 kg",
        "itemOffered": { "@type": "Service", "name": "Cremación colectiva" },
        "eligibleQuantity": { "@type": "QuantitativeValue", "minValue": 51, "unitCode": "KGM" }
      }
    ]
  }
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Se pueden recuperar cenizas en la incineración colectiva?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. En la modalidad colectiva varias mascotas comparten el mismo ciclo y, por normativa, no es posible la recuperación de cenizas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hay recogida 24/7 en Barcelona y alrededores?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Ofrecemos recogida urgente 24 horas en domicilios y clínicas de Barcelona, Granollers y municipios cercanos."
      }
    }
  ]
};

export default function ColectivaPage() {
  return (
    <>
      <Script id="ld-breadcrumb-incineracion-colectiva" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdBreadcrumb)}
      </Script>
      <Script id="ld-service-incineracion-colectiva" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdService)}
      </Script>
      <Script id="ld-faq-incineracion-colectiva" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdFaq)}
      </Script>

      <ColectivaSection />
    </>
  );
}