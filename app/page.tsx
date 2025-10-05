import Hero from "@/components/Hero";
import Proceso from "@/components/Proceso";
import Testimonials from "@/components/Testimonial";
import SEO from "@/components/SEO";
import Prices from "@/components/Prices";
import PetCrematoriumInfo from "@/components/PetCremationInfo";
import Script from "next/script";

const SITE_URL = "https://www.luzanimal.com";

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
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
    "dayOfWeek": [
      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  }],
  "areaServed": [
    { "@type": "City", "name": "Barcelona" },
    { "@type": "City", "name": "Granollers" },
    { "@type": "AdministrativeArea", "name": "Catalunya" }
  ],
  "sameAs": [
    "https://www.facebook.com/luzanimalbarcelona",
    "https://www.instagram.com/luzanimal/"
  ],
  "hasMap": "https://maps.google.com/?q=Carrer+de+Severo+Ochoa,+46,+Granollers"
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Cremación de mascotas",
  "provider": { "@type": "LocalBusiness", "name": "Luz Animal" },
  "areaServed": "Barcelona, Granollers y alrededores",
  "availableChannel": [
    { "@type": "ServiceChannel", "serviceLocation": { "@type": "Place", "name": "Instalaciones en Granollers" }},
    { "@type": "ServiceChannel", "name": "Recogida a domicilio 24h" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Modalidades",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cremación individual" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cremación presencial" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cremación colectiva" }}
    ]
  }
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Luz Animal",
  "url": SITE_URL,
  "inLanguage": "es-ES"
};

export default function Home() {
  return (
    <>
      <Script id="ld-localbusiness" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdLocalBusiness)}
      </Script>
      <Script id="ld-service" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdService)}
      </Script>
      <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLdWebSite)}
      </Script>

      <SEO />

      <main>
        <Hero />
        <Proceso />
        <Prices />
        <PetCrematoriumInfo />
        <Testimonials />
      </main>
    </>
  );
}