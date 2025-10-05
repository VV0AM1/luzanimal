import type { Metadata } from "next";
import UrnasSection from "@/components/UrnasSection";

export const metadata: Metadata = {
  title: "Urnas para cenizas de mascotas | Luz Animal",
  description:
    "Catálogo de urnas para cenizas de mascotas: metálicas (incluidas), biodegradables, de madera y de cerámica. Opciones gratuitas o con coste adicional.",
  keywords: [
    "urnas mascotas",
    "urna para cenizas mascota",
    "urnas biodegradables mascotas",
    "urna cerámica mascota",
    "urna metálica mascota",
    "Luz Animal",
    "Barcelona",
  ],
  alternates: {
    canonical: "https://www.luzanimal.com/urnas",
  },
  openGraph: {
    title: "Urnas para cenizas de mascotas | Luz Animal",
    description:
      "Urnas metálicas incluidas y una selección biodegradable, de madera y cerámica.",
    url: "https://www.luzanimal.com/urnas",
    siteName: "Luz Animal",
    type: "website",
    images: [
      {
        url: "https://www.luzanimal.com/images/og-urnas.jpg",
        width: 1200,
        height: 630,
        alt: "Urnas para cenizas de mascotas – Luz Animal",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function UrnasPage() {
  return <UrnasSection />;
}