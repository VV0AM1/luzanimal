import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from "@/components/WhatsappButton";
import CookieConsent from "@/components/CookieConsent";
import { Poppins } from 'next/font/google';
import FloatingCalculatorButton from "@/components/FloatingCalculatorButton";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Cremación Mascotas Barcelona',
  description: 'Servicio de cremación de mascotas en Barcelona con respeto y empatía.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <head>
        <meta name="google-site-verification" content="b69x1eLWnGO7cMYp3OZ9TX7XVYuyGO4_Wz2omaVvJJc" />
        
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.png" />

      </head>
      <body>
        <Header />
        <main>
          {children}
          <FloatingCalculatorButton />
          <WhatsAppButton />
        </main>
        <Footer />
        <CookieConsent /> 
      </body>
    </html>
  );
}