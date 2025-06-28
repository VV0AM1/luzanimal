"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Contacto inmediato',
    description: 'Resolvemos tus dudas al instante vía llamada o WhatsApp.',
    bg: ['#EAF6FF', '#FFFFFF'],
    icon: '/images/phone.svg',
  },
  {
    title: 'Recogida segura',
    description: 'Acudimos a tu domicilio o clínica con total profesionalidad.',
    bg: ['#C6E8FF', '#FFFFFF'],
    icon: '/images/truck.svg',
  },
  {
    title: 'Despedida personalizada',
    description: 'Participa en una ceremonia íntima antes de la cremación.',
    bg: ['#8CCEFF', '#FFFFFF'],
    icon: '/images/flame.svg',
  },
  {
    title: 'Entrega conmemorativa',
    description: 'Recibe las cenizas en una urna elegante y respetuosa.',
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
      className="w-full overflow-hidden py-24 px-8 bg-gray-900 relative"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-950/20 via-blue-800/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          Nuestro Proceso en 4 Pasos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.3 } }}
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-14 hidden md:block"
        >
          Ofrecemos un servicio respetuoso y profesional para acompañarte en este
          momento difícil. Desde el primer contacto hasta la entrega de las
          cenizas, estamos a tu lado.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center gap-6 items-stretch relative z-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={
                visible
                  ? { opacity: 1, y: 0, transition: { delay: i * 0.2 } }
                  : {}
              }
              className={`group relative md:w-1/4 w-full rounded-2xl px-6 py-8 flex flex-col items-center text-center shadow-xl border transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                background: `linear-gradient(135deg, ${step.bg[0]}, ${step.bg[1]})`,
              }}
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-white shadow-md transition-transform group-hover:scale-110">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-700">{step.description}</p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-[-20px] top-1/2 transform -translate-y-1/2">
                  <motion.svg
                    animate={{ x: [0, 5, 0], opacity: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#58B0FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </motion.svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
