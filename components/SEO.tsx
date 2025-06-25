import Head from "next/head";
import { siteMetadata } from "@/lib/seo-config";

type Props = {
  title?: string;
  description?: string;
  keywords?: string[];
};

export default function SEO({
  title = siteMetadata.title,
  description = siteMetadata.description,
  keywords = siteMetadata.keywords,
}: Props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
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
    "openingHours": "Mo-Su 00:00-23:59",
    "areaServed": ["Barcelona", "Granollers", "Catalunya"],
    "sameAs": [
      "https://www.facebook.com/luzanimalbarcelona",
      "https://www.instagram.com/luzanimal/"
    ]
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={siteMetadata.locale} />
      <meta property="og:site_name" content={siteMetadata.siteName} />
      <link rel="canonical" href={siteMetadata.url} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}