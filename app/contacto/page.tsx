import type { Metadata } from "next";
import ContactoSection from "@/components/ContactoSection";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contacto – Luz Animal",
  description:
    "Ponte en contacto con Luz Animal S.L. para solicitar información o reservar nuestro servicio de cremación de mascotas en Barcelona.",
  keywords: ["contacto", "Luz Animal", "cremación mascotas Barcelona", "consulta cremación"],
  openGraph: {
    title: "Contacto – Luz Animal",
    description:
      "Formulario de contacto de Luz Animal S.L. para servicios de cremación de mascotas en Barcelona.",
    url: "https://www.luzanimal.com/contacto",
    siteName: "Luz Animal",
    type: "website",
    images: [
      {
        url: "https://www.luzanimal.com/images/contacto-header.jpg",
        width: 1200,
        height: 630,
        alt: "Contacto Luz Animal",
      },
    ],
  },
};

const SITE_URL = "https://www.luzanimal.com";

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${SITE_URL}/` },
    { "@type": "ListItem", "position": 2, "name": "Contacto", "item": `${SITE_URL}/contacto` }
  ]
};

const jsonLdContactPage = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "url": `${SITE_URL}/contacto`,
  "name": "Contacto – Luz Animal",
  "about": {
    "@type": "Organization",
    "name": "Luz Animal"
  },
  "potentialAction": {
    "@type": "ContactAction",
    "target": `${SITE_URL}/contacto`,
    "name": "Solicitar información o reservar servicio",
    "description": "Formulario de contacto y canales directos (teléfono y WhatsApp)."
  },
  "inLanguage": "es-ES"
};

const jsonLdOrganizationContact = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Luz Animal",
  "url": SITE_URL,
  "sameAs": [
    "https://www.facebook.com/luzanimalbarcelona",
    "https://www.instagram.com/luzanimal/"
  ],
  "contactPoint": [{
    "@type": "ContactPoint",
    "contactType": "customer support",
    "telephone": "+34 684 418 499",
    "availableLanguage": ["es-ES","ca-ES"],
    "areaServed": ["Barcelona","Granollers","Catalunya"],
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  }]
};

export default function ContactoPage() {
  return (
    <>
      <Script id="ld-breadcrumb-contacto" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdBreadcrumb)}
      </Script>
      <Script id="ld-contactpage" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdContactPage)}
      </Script>
      <Script id="ld-organization-contact" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdOrganizationContact)}
      </Script>

      <ContactoSection />
    </>
  );
}