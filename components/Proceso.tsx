'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import "@/app/styles/quien-somos.css";

const steps = [
  {
    title: 'Contacto inmediato',
    subtitle: 'Estamos disponibles 24/7',
    description: 'Resolvemos tus dudas al instante por llamada o WhatsApp, con empatía y rapidez.',
    bg: ['#EAF6FF', '#FFFFFF'],
    icon: '/images/phone.svg',
  },
  {
    title: 'Recogida segura',
    subtitle: 'En tu domicilio o clínica',
    description: 'Nos desplazamos con discreción y profesionalidad para recoger a tu compañero.',
    bg: ['#C6E8FF', '#FFFFFF'],
    icon: '/images/truck.svg',
  },
  {
    title: 'Despedida personalizada',
    subtitle: 'Con amor y respeto',
    description: 'Te damos la opción de acompañar y despedirte de forma íntima antes de la cremación.',
    bg: ['#8CCEFF', '#FFFFFF'],
    icon: '/images/flame.svg',
  },
  {
    title: 'Entrega conmemorativa',
    subtitle: 'Recuerdos que permanecen',
    description: 'Recibe las cenizas en una urna especial y otros detalles simbólicos si lo deseas.',
    bg: ['#58B0FF', '#FFFFFF'],
    icon: '/images/paw.svg',
  },
];

export default function Proceso() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="proceso"
      className="w-full overflow-hidden py-24 px-2 md:px-6 bg-gray-900 relative"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-950/20 via-blue-800/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          Nuestro Proceso de Cremación
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.3 } }}
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-12"
        >
          En Luz Animal, cada paso está pensado para acompañarte con humanidad, claridad y cariño. Nuestro objetivo es que te sientas acompañado desde el primer momento hasta el final del proceso.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-between max-w-7xl gap-12 relative z-10">
          {steps.map((step, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={
                visible
                  ? { opacity: 1, y: 0, transition: { delay: i * 0.2 } }
                  : {}
              }
              className={`group relative flex-1 min-w-0 rounded-3xl px-8 py-8 flex flex-col items-center text-center shadow-xl border border-white/20 transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                background: `linear-gradient(135deg, ${step.bg[0]}, ${step.bg[1]})`,
              }}
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-white shadow-lg transition-transform group-hover:scale-110">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-1">{step.title}</h3>
              <p className="text-mb font-bold text-blue-900 mb-3 italic">{step.subtitle}</p>
              <p className="text-sm font-bold text-gray-700 leading-relaxed">{step.description}</p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-[-30px] top-1/2 transform -translate-y-1/2">
                  <motion.svg
                    animate={{ x: [0, 5, 0], opacity: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1e3a8a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </motion.svg>
                </div>
              )}
            </motion.article>
          ))}
        </div>

        <div className="mt-20 max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
          <p>
            Si tienes dudas sobre alguno de estos pasos o necesitas orientación, nuestro equipo está disponible las 24 horas para ayudarte. Escríbenos por WhatsApp o llámanos directamente.
          </p>
        </div>
      </div>
    </section>
  );
}