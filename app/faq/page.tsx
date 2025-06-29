import type { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes – Luz Animal',
  description:
    'Resuelve tus dudas sobre los servicios de cremación de mascotas (individual, colectiva y presencial) en Luz Animal Barcelona.',
  keywords: [
    'FAQ',
    'preguntas frecuentes',
    'cremación mascotas',
    'Luz Animal',
    'Barcelona'
  ],
};

export default function FAQPage() {
  return <FAQSection />;
}
