'use client';

import { useEffect, useState } from 'react';

const steps = [
  {
    title: 'Contacta con nosotros',
    description: 'Te atendemos por teléfono o WhatsApp para resolver cualquier duda.',
    bg: '#EAF6FF',
    icon: 'images/phone.svg',
  },
  {
    title: 'Recogemos a tu mascota',
    description: 'Vamos a tu domicilio o clínica con respeto y profesionalismo.',
    bg: '#C6E8FF',
    icon: 'images/truck.svg',
  },
  {
    title: 'Despedida e incineración',
    description: 'Puedes elegir una despedida privada antes de la cremación.',
    bg: '#8CCEFF',
    icon: 'images/flame.svg',
  },
  {
    title: 'Entrega de cenizas',
    description: 'Te entregamos las cenizas en una urna conmemorativa.',
    bg: '#58B0FF',
    icon: 'images/paw.svg',
  },
];

export default function Proceso() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id='proceso' className="w-full overflow-hidden py-24 px-8 bg-gray-900 relative">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-950/20 via-blue-800/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-white mb-6">
          ¿Cómo funciona el proceso?
        </h2>

        <p className="font-sans text-gray-300 text-lg max-w-2xl mx-auto mb-14 hidden md:block">
          Ofrecemos un servicio respetuoso y profesional para acompañarte en este momento difícil. Desde la recogida de tu mascota hasta la entrega de las cenizas, te guiamos paso a paso.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 items-stretch relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl px-6 py-8 flex flex-col items-center text-center shadow-xl border transition-all duration-500 ${
                fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                background: `linear-gradient(135deg, ${step.bg}, white)`,
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-white shadow-md transition-transform group-hover:scale-110">
                <img
                  src={step.icon}
                  alt={`Icono ${step.title}`}
                  className="w-6 h-6 object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-700">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-[-28px] top-1/2 transform -translate-y-1/2">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={step.bg}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-pulse"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}