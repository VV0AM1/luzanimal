import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import CookieConsent from "@/components/CookieConsent";
import FloatingCalculatorButton from "@/components/FloatingCalculatorButton";
import { TrackingProvider } from "@/app/context/TrackingContext";
import { Poppins } from "next/font/google";
import InicioPortfolio from "@/components/InicioPortfolio";
const SITE_URL = "https://www.luzanimal.com";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Incineración de Mascotas en Barcelona | 24h | Luz Animal",
    template: "%s | Luz Animal",
  },
  description:
    "Cremación de mascotas en Barcelona y Granollers. Recogida 24h, acompañamiento y certificado oficial. Atención cercana y respetuosa.",
  applicationName: "Luz Animal",
  alternates: {
    canonical: "/",
    languages: { "es-ES": "/", "x-default": "/" },
  },
  verification: {
    google: "b69x1eLWnGO7cMYp3OZ9TX7XVYuyGO4_Wz2omaVvJJc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Luz Animal",
    locale: "es_ES",
    title: "Incineración de Mascotas en Barcelona | 24h | Luz Animal",
    description:
      "Cremación individual, colectiva y presencial. Recogida 24h y certificado.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Luz Animal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Incineración de Mascotas en Barcelona | 24h | Luz Animal",
    description:
      "Cremación con recogida 24h, acompañamiento y certificado oficial.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  category: "pets",
};

export const viewport: Viewport = {
  themeColor: "#0e1c42",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={poppins.variable}>
      <body>
        <TrackingProvider>
          <Header />
          <main>
            {children}
            <InicioPortfolio />
            <FloatingCalculatorButton />
            <WhatsAppButton />
          </main>
          <Footer />
          <CookieConsent />
        </TrackingProvider>
      </body>
    </html>
  );
}