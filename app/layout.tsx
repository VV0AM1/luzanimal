import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Poppins } from 'next/font/google';
import WhatsAppButton from "@/components/WhatsappButton";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Cremación Mascotas Barcelona',
  description: 'Servicio de cremación de mascotas en Barcelona con respeto y empatía.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <body >
        <Header />
        <main>{children}
        <WhatsAppButton />
        </main>
        <Footer />
      </body>
    </html>
  );
}
