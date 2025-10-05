import type { Metadata } from "next";
import IndividualSection from "@/components/IndividualSection";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Incineración Individual – Luz Animal",
  description:
    "Servicio de incineración individual de mascotas en Barcelona con urna personalizada, certificado, carta de duelo y opción de asistencia.",
  keywords: [
    "incineración individual",
    "cremación mascotas Barcelona",
    "urna personalizada",
    "certificado duelo",
    "Luz Animal",
  ],
  openGraph: {
    title: "Incineración Individual – Luz Animal",
    description:
      "Incineración individual de mascotas en Barcelona: privacidad total y entrega de cenizas en urna personalizada.",
    url: "https://www.luzanimal.com/servicios/incineracion-individual",
    siteName: "Luz Animal",
    type: "website",
    images: [
      {
        url: "https://www.luzanimal.com/images/individual-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Incineración Individual",
      },
    ],
  },
  alternates: {
    canonical: "https://www.luzanimal.com/servicios/incineracion-individual",
  },
};

const SITE_URL = "https://www.luzanimal.com";

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${SITE_URL}/` },
    { "@type": "ListItem", "position": 2, "name": "Servicios", "item": `${SITE_URL}/servicios` },
    { "@type": "ListItem", "position": 3, "name": "Incineración individual", "item": `${SITE_URL}/servicios/incineracion-individual` }
  ]
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Incineración individual de mascotas",
  "serviceType": "Cremación individual",
  "url": `${SITE_URL}/servicios/incineracion-individual`,
  "description":
    "Cremación exclusiva para tu mascota con trazabilidad, entrega de cenizas en urna y certificado oficial. Opcional: asistencia presencial.",
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
  "termsOfService": `${SITE_URL}/servicios/incineracion-individual`,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Rangos de peso y extras",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Tarifas por peso (orientativas)",
        "itemOffered": { "@type": "Service", "name": "Cremación individual" },
        "itemListElement": [
          { "@type": "Offer", "name": "0–5 kg",  "eligibleQuantity": { "@type": "QuantitativeValue", "minValue": 0,  "maxValue": 5,  "unitCode": "KGM" } },
          { "@type": "Offer", "name": "6–15 kg", "eligibleQuantity": { "@type": "QuantitativeValue", "minValue": 6,  "maxValue": 15, "unitCode": "KGM" } },
          { "@type": "Offer", "name": "16–30 kg","eligibleQuantity": { "@type": "QuantitativeValue", "minValue": 16, "maxValue": 30, "unitCode": "KGM" } },
          { "@type": "Offer", "name": "31–50 kg","eligibleQuantity": { "@type": "QuantitativeValue", "minValue": 31, "maxValue": 50, "unitCode": "KGM" } },
          { "@type": "Offer", "name": "Más de 50 kg","eligibleQuantity": { "@type": "QuantitativeValue", "minValue": 51, "unitCode": "KGM" } }
        ]
      },
      {
        "@type": "Offer",
        "name": "Extras opcionales",
        "itemListElement": [
          { "@type": "Offer", "name": "Urna personalizada" },
          { "@type": "Offer", "name": "Huella conmemorativa" },
          { "@type": "Offer", "name": "Carta de despedida" },
          { "@type": "Offer", "name": "Entrega a domicilio" }
        ]
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
      "name": "¿Puedo asistir al proceso en la modalidad individual?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, puedes optar por la modalidad presencial. También ofrecemos sala privada y, si lo prefieres, transmisión en directo para familiares que no puedan asistir."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuándo se entregan las cenizas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En la mayoría de los casos se entregan el mismo día o dentro de 24–48 horas, según el peso y la demanda."
      }
    }
  ]
};

export default function IncineracionIndividualPage() {
  return (
    <>
      <Script id="ld-breadcrumb-incineracion-individual" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdBreadcrumb)}
      </Script>
      <Script id="ld-service-incineracion-individual" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdService)}
      </Script>
      <Script id="ld-faq-incineracion-individual" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdFaq)}
      </Script>

      <IndividualSection />
    </>
  );
}