import type { Metadata } from "next";
import ColectivaSection from "@/components/ColectivaSection";

export const metadata: Metadata = {
  title: "Incineración Colectiva – Luz Animal",
  description:
    "Incineración colectiva de mascotas en Barcelona: opción económica y respetuosa sin recuperación de cenizas.",
  keywords: [
    "incineración colectiva",
    "cremación mascotas Barcelona",
    "Luz Animal",
    "opción económica",
  ],
  openGraph: {
    title: "Incineración Colectiva – Luz Animal",
    description:
      "Servicio de incineración colectiva de mascotas en Barcelona sin devolución de cenizas.",
    url: "https://www.luzanimal.com/servicios/incineracion-colectiva",
    siteName: "Luz Animal",
    images: [
      {
        url: "https://www.luzanimal.com/images/colectiva-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Incineración Colectiva"
      }
    ],
  },
};

export default function ColectivaPage() {
  return <ColectivaSection />;
}