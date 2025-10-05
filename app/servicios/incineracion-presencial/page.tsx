import type { Metadata } from "next";
import Script from "next/script";
import PresencialSection from "@/components/PresencialSection";

const SITE_URL = "https://www.luzanimal.com";

export const metadata: Metadata = {
  title: "Cremación Presencial – Luz Animal",
  description:
    "Cremación presencial de mascotas en Barcelona con velatorio íntimo, atención personalizada y participación en el proceso de despedida.",
  keywords: [
    "cremación presencial",
    "velatorio íntimo",
    "incineración mascotas Barcelona",
    "acompañamiento personalizado",
    "Luz Animal",
  ],
  openGraph: {
    title: "Cremación Presencial – Luz Animal",
    description:
      "Vive un adiós íntimo con nuestro servicio de cremación presencial en Barcelona, velatorio privado y atención emocional.",
    url: `${SITE_URL}/servicios/incineracion-presencial`,
    siteName: "Luz Animal",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/presencial-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Cremación Presencial",
      },
    ],
    locale: "es_ES",
  },
  alternates: {
    canonical: `${SITE_URL}/servicios/incineracion-presencial`,
  },
  robots: { index: true, follow: true },
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${SITE_URL}/` },
    { "@type": "ListItem", "position": 2, "name": "Servicios", "item": `${SITE_URL}/servicios` },
    { "@type": "ListItem", "position": 3, "name": "Incineración presencial", "item": `${SITE_URL}/servicios/incineracion-presencial` }
  ]
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Incineración presencial de mascotas",
  "serviceType": "Cremación presencial",
  "url": `${SITE_URL}/servicios/incineracion-presencial`,
  "description":
    "La modalidad más personalizada: ceremonia de despedida, sala privada, urnas incluidas y posibilidad de acompañar el proceso en vivo.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Luz Animal",
    "url": SITE_URL,
    "telephone": "+34 684 418 499"
  },
  "areaServed": ["Barcelona", "Granollers", "Catalunya"],
  "availableChannel": [
    { "@type": "ServiceChannel", "name": "Sala privada de velatorio" },
    { "@type": "ServiceChannel", "name": "Acompañamiento durante el proceso" },
    { "@type": "ServiceChannel", "name": "Recogida a domicilio 24/7" }
  ],
  "includesObject": [
    { "@type": "TypeAndQuantityNode", "typeOfGood": "Urna incluida", "amountOfThisGood": 1 },
    { "@type": "TypeAndQuantityNode", "typeOfGood": "Certificado de cremación", "amountOfThisGood": 1 }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Rangos de peso y extras",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Tarifas por peso (orientativas)",
        "itemOffered": { "@type": "Service", "name": "Cremación presencial" },
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
          { "@type": "Offer", "name": "Transmisión en directo para familiares" },
          { "@type": "Offer", "name": "Huella conmemorativa" },
          { "@type": "Offer", "name": "Ceremonia personalizada" },
          { "@type": "Offer", "name": "Entrega de cenizas a domicilio" }
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
      "name": "¿Podemos acompañar todo el proceso?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. En la modalidad presencial disponéis de sala privada y podéis acompañar el proceso. También es posible la transmisión en directo si algún familiar no puede asistir."
      }
    },
    {
      "@type": "Question",
      "name": "¿La urna está incluida en el servicio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. La modalidad presencial incluye urna y certificado de cremación. Podéis elegir otro modelo si lo deseáis (se cotiza la diferencia)."
      }
    }
  ]
};

export default function CremacionPresencialPage() {
  return (
    <>
      <Script id="ld-breadcrumb-incineracion-presencial" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdBreadcrumb)}
      </Script>
      <Script id="ld-service-incineracion-presencial" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdService)}
      </Script>
      <Script id="ld-faq-incineracion-presencial" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdFaq)}
      </Script>

      <PresencialSection />
    </>
  );
}