import type { Metadata } from "next";
import CalculadoraSection from "@/components/CalculadoraSection";

export const metadata: Metadata = {
  title: "Calculadora de Precio – Cremación de Mascotas | Luz Animal",
  description:
    "Calcula al momento el precio de la cremación de tu mascota en Barcelona y Granollers. Elige modalidad (colectiva, individual o presencial), peso y extras opcionales.",
  keywords: [
    "calculadora cremación mascotas",
    "precio cremación mascotas Barcelona",
    "incineración mascotas Barcelona",
    "cremación individual",
    "cremación colectiva",
    "cremación presencial",
    "Luz Animal",
  ],
  openGraph: {
    title: "Calculadora de Precio – Luz Animal",
    description:
      "Calcula un presupuesto orientativo para la cremación de tu mascota. Transparente, rápido y sin sorpresas.",
    url: "https://www.luzanimal.com/calculadora",
    siteName: "Luz Animal",
    type: "website",
    images: [
      {
        url: "https://www.luzanimal.com/images/og-calculadora.jpg",
        width: 1200,
        height: 630,
        alt: "Calculadora de cremación de mascotas – Luz Animal",
      },
    ],
  },
  alternates: {
    canonical: "https://www.luzanimal.com/calculadora",
  },
};

export default function CalculadoraPage() {
  return <CalculadoraSection />;
}