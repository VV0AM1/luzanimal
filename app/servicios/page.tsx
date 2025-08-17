import type { Metadata } from "next";
import ServiciosSection from "@/components/ServiciosSection";

const title = "Servicios de Cremación de Mascotas en Barcelona | Luz Animal";
const description =
  "Conoce nuestras modalidades de cremación de mascotas en Barcelona: incineración individual, colectiva y presencial. Atención cercana, transparente y profesional.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "cremación mascotas Barcelona",
    "incineración mascotas Barcelona",
    "incineración individual",
    "incineración colectiva",
    "incineración presencial",
    "crematorio de mascotas",
    "Luz Animal",
  ],
  alternates: {
    canonical: "https://www.luzanimal.com/servicios",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: "https://www.luzanimal.com/servicios",
    siteName: "Luz Animal",
    type: "website",
    images: [
      {
        url: "https://www.luzanimal.com/images/servicios-og.jpg",
        width: 1200,
        height: 630,
        alt: "Servicios de cremación de mascotas en Luz Animal",
      },
    ],
    locale: "es_ES",
  },

};

export default function ServiciosPage() {
  return <ServiciosSection />;
}