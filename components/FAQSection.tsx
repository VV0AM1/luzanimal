'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaPaw } from 'react-icons/fa';
import '@/app/styles/quien-somos.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const faqItems = [
  {
    question: '¿Qué tipos de cremación ofrecen?',
    answer: `
Ofrecemos tres modalidades:
• **Individual**: privacidad total y devolución de cenizas en urna personalizada.
• **Colectiva**: opción más económica sin recuperación de cenizas.
• **Presencial**: puedes acompañar a tu mascota en un velatorio íntimo.
`,
  },
  {
    question: '¿Cuánto tiempo tarda el proceso?',
    answer: `
Tras recogida, el proceso suele completarse en 24-48 horas.
Si deseas asistir (presencial), coordina cita previa con nuestro equipo.
`,
  },
  {
    question: '¿Cómo recibo las cenizas?',
    answer: `
En la incineración individual incluimos una urna y un certificado.
Puedes recogerlas en nuestras instalaciones o solicitar envío a domicilio (desde 20 €).
`,
  },
  {
    question: '¿Puedo traer flores o recuerdos al velatorio?',
    answer: `
Sí. En la cremación presencial, puedes traer flores, fotos o cualquier objeto significativo para la despedida.
`,
  },
  {
    question: '¿Qué documentación necesito?',
    answer: `
Sólo el DNI o pasaporte de quien firma el servicio.
Nuestro equipo te guiará si tu mascota proviene de residencia o protectora.
`,
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);
  return (
    <main className="bg-[var(--blue-50)] text-[var(--text-main)]">
      <motion.section
        className="relative h-80 md:h-[60vh] bg-[url('/images/faq-header.webp')] bg-cover bg-center flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6 max-w-3xl space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--text-light)]">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-light)] max-w-2xl mx-auto">
            Resolvemos las dudas más habituales sobre nuestra cremación de mascotas —individual, colectiva y presencial— con total transparencia.
          </p>
        </div>
      </motion.section>

      <section
        id="faq"
        className="relative py-20 px-6 overflow-hidden"
      >
        <FaPaw className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[var(--blue-100)] text-[20rem] opacity-10 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto space-y-8">
          {faqItems.map(({ question, answer }, i) => {
            const html = answer
              .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
              .replace(/\n/g, '<br/>');

            return (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-8 py-6 text-left"
                >
                  <span className="text-[var(--blue-700)] font-semibold text-xl">
                    {question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  >
                    <FaChevronDown className="w-6 h-6 text-[var(--blue-500)]" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { height: 'auto', opacity: 1 },
                        collapsed: { height: 0, opacity: 0 },
                      }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="px-8 pb-6 text-[var(--text-main)] text-lg leading-relaxed"
                    >
                      <div dangerouslySetInnerHTML={{ __html: html }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}