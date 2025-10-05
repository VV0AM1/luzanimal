import type { Metadata } from "next";
import QuienSomosSection from "@/components/QuienSomosSection";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Quiénes Somos – Luz Animal",
  description:
    "Conoce al equipo de Luz Animal S.L., especialistas en cremación de mascotas en Barcelona con respeto, empatía y profesionalidad.",
  keywords: [
    "Luz Animal",
    "Quiénes Somos",
    "cremación mascotas Barcelona",
    "equipo Luz Animal",
    "apoyo emocional",
  ],
  openGraph: {
    title: "Quiénes Somos – Luz Animal",
    description:
      "Descubre la trayectoria y el equipo de Luz Animal: expertos en cremación de mascotas en Barcelona.",
    url: "https://www.luzanimal.com/quien-somos",
    siteName: "Luz Animal",
    type: "website",
    images: [
      {
        url: "https://www.luzanimal.com/images/quien-somos-hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Equipo Luz Animal en acción",
      },
    ],
  },
};

const SITE_URL = "https://www.luzanimal.com";
const ORG_ID = `${SITE_URL}/#luz-animal`;

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${SITE_URL}/` },
    { "@type": "ListItem", "position": 2, "name": "Quiénes Somos", "item": `${SITE_URL}/quien-somos` }
  ]
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": ORG_ID,
  "name": "Luz Animal",
  "legalName": "Luz Animal S.L.",
  "url": SITE_URL,
  "image": `${SITE_URL}/images/pet_logo.png`,
  "logo": `${SITE_URL}/images/pet_logo.png`,
  "telephone": "+34 684 418 499",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Carrer de Severo Ochoa, 46",
    "addressLocality": "Granollers",
    "postalCode": "08403",
    "addressRegion": "Barcelona",
    "addressCountry": "ES"
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00", "closes": "23:59"
  }],
  "areaServed": [
    { "@type": "City", "name": "Barcelona" },
    { "@type": "City", "name": "Granollers" },
    { "@type": "AdministrativeArea", "name": "Catalunya" }
  ],
  "sameAs": [
    "https://www.facebook.com/luzanimalbarcelona",
    "https://www.instagram.com/luzanimal/"
  ]
};

const jsonLdAboutPage = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Quiénes Somos – Luz Animal",
  "url": `${SITE_URL}/quien-somos`,
  "inLanguage": "es-ES",
  "about": { "@id": ORG_ID },
  "isPartOf": { "@type": "WebSite", "name": "Luz Animal", "url": SITE_URL },
  "description":
    "Conoce al equipo y valores de Luz Animal, especialistas en cremación de mascotas en Barcelona y Granollers."
};

export default function QuienSomosPage() {
  return (
    <>
      <Script id="ld-breadcrumb-quien-somos" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdBreadcrumb)}
      </Script>
      <Script id="ld-organization-quien-somos" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdOrganization)}
      </Script>
      <Script id="ld-aboutpage-quien-somos" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdAboutPage)}
      </Script>

      <QuienSomosSection />
    </>
  );
}