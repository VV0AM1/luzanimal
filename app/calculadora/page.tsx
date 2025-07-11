'use client';

import { useState } from 'react';
import { services } from '@/components/data/services';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import "@/app/styles/quien-somos.css";

export default function CalculadoraPage() {
  const [serviceIndex, setServiceIndex] = useState<number>(0);
  const [weightOption, setWeightOption] = useState<number>(0);
  const [selectedExtras, setSelectedExtras] = useState<number[]>([]);

  const selectedService = services[serviceIndex];

  const basePrice = parseInt(
    selectedService.prices[weightOption][1].replace('€', '').replace(' ', '')
  );

  const extraCost = selectedExtras.reduce((acc, index) => {
    const text = selectedService.extras[index];
    const match = text.match(/(\+?)(\d+)[ €]/);
    return match ? acc + parseInt(match[2]) : acc;
  }, 0);

  const total = basePrice + extraCost;

  const handleExtraToggle = (index: number) => {
    setSelectedExtras((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="relative py-24 px-6 md:px-12 bg-gradient-to-br from-[var(--blue-50)] to-[var(--blue-100)] overflow-hidden animate-fadeIn">
      <div className="absolute inset-0 bg-[url('/images/paw-light.svg')] bg-[length:160px_160px] bg-repeat opacity-5 pointer-events-none" />
      <div className="absolute -top-32 -left-20 w-[300px] h-[300px] bg-[var(--blue-300)]/20 rounded-full filter blur-3xl" />
      <div className="absolute -bottom-28 right-0 w-[280px] h-[280px] bg-[var(--blue-500)]/15 rounded-full filter blur-2xl" />

      <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--blue-700)] mb-6 tracking-tight">
          Calculadora de Precio
        </h1>
        <p className="text-[var(--text-main)] text-lg md:text-xl max-w-2xl mx-auto">
          Estima el coste de cremación de tu mascota en unos pocos pasos. Transparente, personalizado y sin sorpresas.
        </p>
      </div>

      <motion.div
        className="relative z-10 bg-white p-8 rounded-3xl shadow-xl max-w-3xl mx-auto space-y-10 border border-[var(--blue-100)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <label className="block text-left font-semibold text-[var(--blue-700)] mb-2">
            Tipo de servicio:
          </label>
          <div className="relative">
            <select
              value={serviceIndex}
              onChange={(e) => {
                setServiceIndex(Number(e.target.value));
                setWeightOption(0);
                setSelectedExtras([]);
              }}
              className="appearance-none w-full p-4 pr-12 text-[var(--text-main)] bg-[var(--blue-50)] border border-[var(--blue-100)] rounded-xl focus:ring-2 focus:ring-[var(--blue-500)] focus:border-[var(--blue-500)] hover:shadow-md transition"
            >
              {services.map((s, idx) => (
                <option key={idx} value={idx} className="bg-[var(--blue-50)] text-[var(--text-main)]">
                  {s.title}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <svg className="w-5 h-5 text-[var(--blue-500)]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-left font-semibold text-[var(--blue-700)] mb-2">
            Peso de la mascota:
          </label>
          <div className="relative">
            <select
              value={weightOption}
              onChange={(e) => setWeightOption(Number(e.target.value))}
              className="appearance-none w-full p-4 pr-12 text-[var(--text-main)] bg-[var(--blue-50)] border border-[var(--blue-100)] rounded-xl shadow-sm focus:ring-2 focus:ring-[var(--blue-500)] focus:border-[var(--blue-500)] hover:shadow-md transition"
            >
              {selectedService.prices.map(([weight], idx) => (
                <option key={idx} value={idx} className="bg-[var(--blue-50)] text-[var(--text-main)]">
                  {weight}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <svg className="w-5 h-5 text-[var(--blue-500)]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-left font-semibold text-[var(--blue-700)] mb-2">
            Extras opcionales:
          </label>
          <ul className="space-y-3">
            {selectedService.extras.map((ext, i) => (
              <li key={i} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selectedExtras.includes(i)}
                  onChange={() => handleExtraToggle(i)}
                  className="w-5 h-5 accent-[var(--blue-500)]"
                />
                <span className="text-[var(--text-main)]">{ext}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[var(--blue-50)] border border-[var(--blue-100)] p-6 rounded-xl text-center shadow-inner">
          <h2 className="text-xl font-semibold text-[var(--blue-700)] mb-1">Total estimado:</h2>
          <p className="text-4xl font-extrabold text-[var(--blue-700)]">{total} €</p>
          <p className="text-sm text-gray-600 mt-2">
            Precio aproximado. Contacta con nosotros para confirmar el total exacto.
          </p>
        </div>

        <a
          href="https://wa.me/34684418499"
          className="block w-full text-center bg-[var(--blue-700)] hover:bg-[var(--blue-500)] text-white font-semibold py-4 rounded-full shadow-md transition duration-300"
        >
          Contactar por WhatsApp
        </a>
      </motion.div>
    </section>
  );
}