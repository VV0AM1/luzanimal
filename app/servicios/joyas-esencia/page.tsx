import type { Metadata } from "next";
import JoyasEsenciaSection from "@/components/JoyasEsenciaSection";

export const metadata: Metadata = {
  title: "Joyas con esencia de tu mascota | Luz Animal",
  description:
    "Convertimos una pequeña muestra (pelo o cenizas) en anillos, colgantes y pulseras conmemorativas. Catálogo y asesoramiento en Barcelona.",
  alternates: { canonical: "https://www.luzanimal.com/servicios/joyas-esencia" },
  openGraph: {
    title: "Joyas con esencia – Recuerdo con amor",
    description:
      "Anillos, colgantes y pulseras que conservan una parte de tu compañero para siempre.",
    url: "https://www.luzanimal.com/servicios/joyas-esencia",
    siteName: "Luz Animal",
    type: "website",
    images: [{ url: "https://www.luzanimal.com/images/joyas-esencia-hero.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function JoyasEsenciaPage() {
  return <JoyasEsenciaSection />;
}