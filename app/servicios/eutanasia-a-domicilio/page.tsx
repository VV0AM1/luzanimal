import type { Metadata } from "next";
import EutanasiaDomicilioSection from "@/components/EutanasiaDomicilioSection";

export const metadata: Metadata = {
  title: "Eutanasia a domicilio para mascotas | Luz Animal",
  description:
    "Despedida tranquila en casa con veterinario colegiado. Acompañamiento empático, información clara y opciones de cremación posterior.",
  alternates: { canonical: "https://www.luzanimal.com/servicios/eutanasia-a-domicilio" },
  openGraph: {
    title: "Eutanasia a domicilio | Despedida en calma",
    description:
      "Servicio a domicilio con atención profesional y humana. Barcelona y alrededores.",
    url: "https://www.luzanimal.com/servicios/eutanasia-a-domicilio",
    siteName: "Luz Animal",
    type: "website",
    images: [{ url: "https://www.luzanimal.com/images/eutanasia-domicilio-hero.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function EutanasiaDomicilioPage() {
  return <EutanasiaDomicilioSection />;
}