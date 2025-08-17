"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/components/data/services";
import { CheckCircle, Plus, Minus } from "lucide-react";
import "@/app/styles/quien-somos.css";
import { useTracking } from "@/app/context/TrackingContext";

type ExtraOpt = { label: string; price: number; note?: string };

const EXTRA_OPTIONS: ExtraOpt[] = [
  {
    label: "Recogida y entrega a domicilio",
    price: 20,
    note: "según distancia (mínimo +20 €)",
  },
  {
    label: "Servicio en fin de semana o festivo",
    price: 20,
  },
];

export default function CalculadoraPage() {
  const [serviceIndex, setServiceIndex] = useState<number>(0);
  const [weightOption, setWeightOption] = useState<number>(0);
  const [selectedExtras, setSelectedExtras] = useState<number[]>([]);
  const { trackEvent } = useTracking();

  const selectedService = services[serviceIndex];

  // basePrice from your data e.g. [["Hasta 3 kg","230 €"], ...]
  const basePrice = useMemo(() => {
    const raw = selectedService.prices[weightOption][1];
    return parseInt(raw.replace(/[^\d]/g, ""), 10);
  }, [selectedService.prices, weightOption]);

  const extraCost = useMemo(
    () =>
      selectedExtras.reduce((sum, idx) => sum + (EXTRA_OPTIONS[idx]?.price || 0), 0),
    [selectedExtras]
  );

  const total = basePrice + extraCost;

  const toggleExtra = (i: number) =>
    setSelectedExtras((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  return (
    <section
      id="calculadora"
      aria-labelledby="calc-title"
      className="relative py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Textured background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e1c42] via-[#193379] to-[#2a4fa3]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/noise.jpg')] bg-repeat opacity-[0.07] mix-blend-overlay" />
      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[var(--blue-500)]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-16 w-64 h-64 rounded-full bg-white/10 blur-2xl" />

      {/* Header */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mb-12">
        <h1
          id="calc-title"
          className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          Calculadora de Precio
        </h1>
        <div className="w-24 h-1 bg-white/70 mx-auto mt-4 rounded-full" />
        <p className="text-blue-100 text-lg md:text-xl mt-6 leading-relaxed">
          Estima el coste de la cremación de tu mascota en Barcelona y Granollers. Selecciona el
          tipo de servicio, el peso y añade extras opcionales. Nuestro objetivo es{" "}
          <strong>transparencia sin sorpresas</strong>.
        </p>
      </div>

      {/* Card */}
      <motion.div
        className="relative z-10 bg-white/90 backdrop-blur rounded-3xl shadow-[0_18px_50px_-20px_rgba(0,0,0,0.45)] border border-white/70 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <div className="grid grid-cols-1 gap-8 p-8 md:p-10">
          {/* Service */}
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-semibold text-[var(--blue-700)] mb-2"
            >
              Tipo de servicio
            </label>
            <div className="relative">
              <select
                id="service"
                value={serviceIndex}
                onChange={(e) => {
                  setServiceIndex(Number(e.target.value));
                  setWeightOption(0);
                  setSelectedExtras([]);
                }}
                className="appearance-none w-full p-4 pr-12 text-[var(--text-main)] bg-[var(--blue-50)] border border-[var(--blue-100)] rounded-xl focus:ring-2 focus:ring-[var(--blue-500)] focus:border-[var(--blue-500)] hover:shadow-md transition"
              >
                {services.map((s, idx) => (
                  <option key={idx} value={idx} className="bg-white text-[var(--text-main)]">
                    {s.title}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <svg className="w-5 h-5 text-[var(--blue-500)]" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {selectedService?.description && (
              <p className="mt-2 text-sm text-gray-600">
                {selectedService.description}
              </p>
            )}
          </div>

          {/* Weight */}
          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-semibold text-[var(--blue-700)] mb-2"
            >
              Peso de la mascota
            </label>
            <div className="relative">
              <select
                id="weight"
                value={weightOption}
                onChange={(e) => setWeightOption(Number(e.target.value))}
                className="appearance-none w-full p-4 pr-12 text-[var(--text-main)] bg-[var(--blue-50)] border border-[var(--blue-100)] rounded-xl focus:ring-2 focus:ring-[var(--blue-500)] focus:border-[var(--blue-500)] hover:shadow-md transition"
              >
                {selectedService.prices.map(([weight], idx) => (
                  <option key={idx} value={idx}>
                    {weight}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <svg className="w-5 h-5 text-[var(--blue-500)]" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Extras – only two, as requested */}
          <div>
            <span className="block text-sm font-semibold text-[var(--blue-700)] mb-2">
              Extras opcionales
            </span>
            <ul className="space-y-3">
              {EXTRA_OPTIONS.map((ext, i) => {
                const checked = selectedExtras.includes(i);
                return (
                  <li key={ext.label}>
                    <button
                      type="button"
                      onClick={() => toggleExtra(i)}
                      className={`w-full flex items-start justify-between gap-4 rounded-xl border p-4 text-left transition
                      ${checked ? "border-[var(--blue-500)] bg-[var(--blue-50)]" : "border-[var(--blue-100)] bg-white hover:border-[var(--blue-300)]"}`}
                      aria-pressed={checked}
                    >
                      <div className="flex items-start gap-3">
                        {checked ? (
                          <CheckCircle className="w-5 h-5 text-[var(--blue-700)] mt-0.5" />
                        ) : (
                          <div className="w-5 h-5 mt-0.5 rounded-full border border-[var(--blue-300)]" />
                        )}
                        <div>
                          <p className="font-medium text-[var(--text-main)]">{ext.label}</p>
                          {ext.note && (
                            <p className="text-xs text-gray-600 mt-0.5">{ext.note}</p>
                          )}
                        </div>
                      </div>
                      <span className="shrink-0 font-semibold text-[var(--blue-700)]">
                        +{ext.price} €
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Breakdown */}
          <div
            className="rounded-2xl bg-white/80 border border-white/70 shadow-inner p-6"
            aria-live="polite"
          >
            <h2 className="text-lg font-semibold text-[var(--blue-700)] mb-3">
              Detalle del cálculo
            </h2>

            <div className="space-y-2 text-[var(--text-main)]">
              <div className="flex justify-between">
                <span>Servicio: {selectedService.title}</span>
                <span className="font-semibold">
                  {basePrice.toLocaleString("es-ES")} €
                </span>
              </div>

              <AnimatePresence initial={false}>
                {selectedExtras.map((idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="flex justify-between text-sm"
                  >
                    <span className="flex items-center gap-1">
                      <Plus className="w-3.5 h-3.5" /> {EXTRA_OPTIONS[idx].label}
                    </span>
                    <span className="font-medium">
                      +{EXTRA_OPTIONS[idx].price.toLocaleString("es-ES")} €
                    </span>
                  </motion.div>
                ))}
                {selectedExtras.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    className="text-sm text-gray-600"
                  >
                    No has añadido extras.
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="border-t border-[var(--blue-100)] my-3" />

              <div className="flex justify-between items-center">
                <span className="text-base font-semibold">Total estimado</span>
                <span className="text-3xl font-extrabold text-[var(--blue-700)]">
                  {total.toLocaleString("es-ES")} €
                </span>
              </div>

              <p className="text-xs text-gray-600 mt-2">
                * El coste de recogida y entrega puede variar en función de los kilómetros.
                Este cálculo es orientativo. Te confirmamos el presupuesto final por WhatsApp o teléfono.
              </p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/34684416567"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("whatsapp_click", {
                source: "Calculadora - CTA",
                phone: "34684416567",
                total,
                service: selectedService.title,
                weight: selectedService.prices[weightOption][0],
                extras: selectedExtras.map((i) => EXTRA_OPTIONS[i].label),
                timestamp: new Date().toISOString(),
              })
            }
            className="inline-flex items-center justify-center gap-2 w-full text-center 
            bg-gradient-to-r from-[var(--blue-500)] to-[var(--blue-700)] hover:from-[var(--blue-600)] hover:to-[var(--blue-800)]
            text-white font-semibold py-4 rounded-full shadow-lg hover:shadow-2xl transition"
            aria-label="Contactar por WhatsApp para confirmar presupuesto"
          >
            Solicitar presupuesto por WhatsApp
          </a>
        </div>
      </motion.div>

      {/* SEO helper text (visible, concise, keyword-friendly) */}
      <div className="relative z-10 max-w-3xl mx-auto text-center mt-8">
        <p className="text-blue-100/90 text-sm leading-relaxed">
          Calculadora para <strong>cremación de mascotas en Barcelona</strong> — modalidades
          colectiva, individual y presencial; recogida 24/7 en domicilios y clínicas de
          Barcelona, Granollers y alrededores.
        </p>
      </div>
    </section>
  );
}