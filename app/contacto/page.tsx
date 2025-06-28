import type { Metadata } from "next";
import ContactoSection from "@/components/ContactoSection";

export const metadata: Metadata = {
  title: "Contacto – Luz Animal",
  description:
    "Ponte en contacto con Luz Animal S.L. para solicitar información o reservar nuestro servicio de cremación de mascotas en Barcelona.",
  keywords: ["contacto", "Luz Animal", "cremación mascotas Barcelona", "consulta cremación"],
  openGraph: {
    title: "Contacto – Luz Animal",
    description:
      "Formulario de contacto de Luz Animal S.L. para servicios de cremación de mascotas en Barcelona.",
    url: "https://www.luzanimal.com/contacto",
    siteName: "Luz Animal",
    type: "website",
    images: [
      {
        url: "https://www.luzanimal.com/images/contacto-header.jpg",
        width: 1200,
        height: 630,
        alt: "Contacto Luz Animal",
      },
    ],
  },
};

export default function ContactoPage() {
  return <ContactoSection />;
}