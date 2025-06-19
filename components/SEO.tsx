'use client'

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
    </Head>
  );
}