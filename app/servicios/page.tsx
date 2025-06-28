import type { Metadata } from 'next';
import ServiciosSection from '@/components/ServiciosSection';

export const metadata: Metadata = {
  title: 'Servicios – Luz Animal',
  description:
    'Descubre nuestros servicios de cremación de mascotas en Barcelona: incineración individual, colectiva y presencial con trato cercano y profesional.',
  keywords: [
    'cremación mascotas Barcelona',
    'incineración individual',
    'incineración colectiva',
    'cremación presencial',
    'Luz Animal',
  ],
  openGraph: {
    title: 'Servicios – Luz Animal',
    description:
      'Incineración de mascotas en Barcelona: opciones individual, colectiva y presencial con máxima empatía.',
    url: 'https://www.luzanimal.com/servicios',
    siteName: 'Luz Animal',
    type: 'website',
    images: [
      {
        url: 'https://www.luzanimal.com/images/servicios-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Servicios Luz Animal'
      }
    ],
  },
};

export default function ServiciosPage() {
  return <ServiciosSection />;
}