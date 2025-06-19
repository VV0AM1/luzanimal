'use client';

import { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

const services = [
  {
    title: 'Incineración Colectiva',
    description: 'Sin recuperación de cenizas. Económica y respetuosa.',
    prices: [
      ['Hasta 3 kg', '65 €'],
      ['3 - 10 kg', '75 €'],
      ['10 - 25 kg', '85 €'],
      ['25 - 40 kg', '110 €'],
      ['40+ kg', '130 €'],
    ],
    extras: [
      'Recogida desde 20 € (según distancia)',
      'Festivos y fines de semana: +20 €',
      'Cuerpo en descomposición: desde 35 €',
    ],
    bgFrom: '#EAF6FF',
    bgTo: '#D0ECFF',
    highlight: false,
  },
  {
    title: 'Incineración Individual',
    description:
      'Incluye urna, certificado y carta de duelo. Posibilidad de asistencia.',
    prices: [
      ['Hasta 3 kg', '230 €'],
      ['3 - 10 kg', '245 €'],
      ['10 - 25 kg', '260 €'],
      ['25 - 40 kg', '280 €'],
      ['40+ kg', '290 €'],
    ],
    extras: [
      'Entrega a domicilio: desde 20 €',
      'Huella en escayola: +30 €',
      'Ceremonia fin de semana: +60 €',
    ],
    bgFrom: '#C6E8FF',
    bgTo: '#8CCEFF',
    highlight: true,
  },
  {
    title: 'Incineración Presencial',
    description:
      'Despedida íntima, velatorio privado, atención personalizada y más.',
    prices: [
      ['Hasta 3 kg', '260 €'],
      ['3 - 10 kg', '275 €'],
      ['10 - 25 kg', '290 €'],
      ['25 - 40 kg', '310 €'],
      ['40+ kg', '330 €'],
    ],
    extras: [
      'Velatorio y video en directo',
      'Obsequio especial + Huella escayola',
      'Parking y Wi-Fi gratuito',
    ],
    bgFrom: '#8CCEFF',
    bgTo: '#58B0FF',
    highlight: false,
  },
];

export default function Prices() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section  

      className="relative py-24 px-10 bg-gradient-to-br from-[#EAF6FF] via-[#F8FCFF] to-[#D0ECFF] overflow-hidden"
      id="precios">
        <div
          className="absolute inset-0 bg-[url('/images/paw-light.svg')] bg-[length:200px_200px] bg-repeat opacity-[0.04] pointer-events-none"
          aria-hidden="true"
        />
        <div className="absolute -top-40 -left-20 w-[400px] h-[400px] bg-blue-200/30 rounded-full filter blur-3xl z-0" />
        <div className="absolute -bottom-32 right-0 w-[300px] h-[300px] bg-blue-300/20 rounded-full filter blur-2xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 tracking-tight">
          Tarifas de Cremación
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Elige el tipo de servicio que más se adapta a ti. Cuidamos a tu mascota con amor y respeto.
        </p>
      </div>

      <div className="relative z-10 grid gap-10 md:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`relative rounded-3xl p-8 shadow-xl transition-all duration-500 border ${
              fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } ${
              service.highlight
                ? 'border-blue-700 ring-2 ring-blue-500 scale-[1.02]'
                : 'border-blue-100'
            }`}
            style={{
              background: `linear-gradient(135deg, ${service.bgFrom}, ${service.bgTo})`,
            }}
            >
            {service.highlight && (
              <div className="absolute top-[-12px] right-[-12px] bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                Recomendado
              </div>
            )}

            <h3 className="text-2xl font-bold text-gray-800 mb-2 tracking-tight">{service.title}</h3>
            <p className="text-gray-700 mb-5">{service.description}</p>

            <div className="bg-white rounded-xl px-4 py-3 mb-5 shadow-inner border border-blue-100">
              <h4 className="text-sm font-semibold text-blue-800 mb-2">Precios por peso</h4>
              <ul className="text-sm text-gray-800 space-y-1">
                {service.prices.map(([peso, precio], i) => (
                  <li key={i} className="flex justify-between border-b last:border-0 pb-1">
                    <span>{peso}</span> <span className="font-semibold">{precio}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-sm text-blue-900">
              <h5 className="font-semibold mb-2">Extras incluidos o disponibles:</h5>
              <ul className="space-y-1">
                {service.extras.map((extra, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 text-blue-600" />
                    <span>{extra}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <a
                href="https://wa.me/34684418499"
                className="block w-full text-center bg-white text-blue-600 border border-blue-500 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 font-semibold py-2 px-4 rounded-full shadow transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-md"
              >
                Solicitar Servicio
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}