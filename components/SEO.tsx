import Head from "next/head";
import { siteMetadata } from "@/lib/seo-config";

type Props = {
  title?: string;
  description?: string;
  canonical?: string;
};

export default function SEO({
  title = siteMetadata.title,
  description = siteMetadata.description,
  canonical = siteMetadata.canonical,
}: Props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "PetCrematorium",
    "name": "Luz Animal S.L.",
    "image": `${siteMetadata.url}/images/pet_logo.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Carrer de Severo Ochoa, 46",
      "addressLocality": "Granollers",
      "postalCode": "08403",
      "addressRegion": "Barcelona",
      "addressCountry": "ES"
    },
    "url": siteMetadata.url,
    "telephone": "+34 684 418 499",
    "priceRange": "$$",
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }],
    "areaServed": ["Barcelona", "Granollers", "Catalunya"],
    "sameAs": [
      "https://www.facebook.com/luzanimalbarcelona",
      "https://www.instagram.com/luzanimal/"
    ]
  };

  return (
    <Head>
      <title>{title} | {siteMetadata.siteName}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={siteMetadata.locale} />
      <meta property="og:site_name" content={siteMetadata.siteName} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${siteMetadata.url}/og.jpg`} />

      <link rel="canonical" href={canonical} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}