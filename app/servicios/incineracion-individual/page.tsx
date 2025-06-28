import type { Metadata } from "next";
import IndividualSection from "@/components/IndividualSection";

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
};

export default function IncineracionIndividualPage() {
  return <IndividualSection />;
}