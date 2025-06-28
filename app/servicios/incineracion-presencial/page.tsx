import type { Metadata } from "next";
import PresencialSection from "@/components/PresencialSection";

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
    url: "https://www.luzanimal.com/servicios/cremacion-presencial",
    siteName: "Luz Animal",
    type: "website",
    images: [
      {
        url: "https://www.luzanimal.com/images/presencial-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Cremación Presencial",
      },
    ],
  },
};

export default function CremacionPresencialPage() {
  return <PresencialSection />;
}