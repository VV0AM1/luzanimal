import type { Metadata } from "next";
import QuienSomosSection from "@/components/QuienSomosSection";

export const metadata: Metadata = {
  title: "Quiénes Somos – Luz Animal",
  description:
    "Conoce al equipo de Luz Animal S.L., especialistas en cremación de mascotas en Barcelona con respeto, empatía y profesionalidad.",
  keywords: [
    "Luz Animal",
    "Quiénes Somos",
    "cremación mascotas Barcelona",
    "equipo Luz Animal",
    "apoyo emocional",
  ],
  openGraph: {
    title: "Quiénes Somos – Luz Animal",
    description:
      "Descubre la trayectoria y el equipo de Luz Animal: expertos en cremación de mascotas en Barcelona.",
    url: "https://www.luzanimal.com/quien-somos",
    siteName: "Luz Animal",
    type: "website",
    images: [
      {
        url: "https://www.luzanimal.com/images/quien-somos-hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Equipo Luz Animal en acción",
      },
    ],
  },
};

export default function QuienSomosPage() {
  return <QuienSomosSection />;
}