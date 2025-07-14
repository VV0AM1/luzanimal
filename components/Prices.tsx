"use client";

import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import "@/app/styles/quien-somos.css";
import { useTracking } from "@/app/context/TrackingContext";

const services = [
  {
    title: "Incineración Colectiva",
    description: "Sin recuperación de cenizas. Económica y respetuosa.",
    prices: [
      ["Hasta 3 kg", "65 €"],
      ["3 - 10 kg", "75 €"],
      ["10 - 25 kg", "85 €"],
      ["25 - 40 kg", "110 €"],
      ["40+ kg", "130 €"],
    ],
    extras: [
      "Recogida desde 20 € (según distancia)",
      "Festivos y fines de semana: +20 €",
      "Cuerpo en descomposición: desde 35 €",
    ],
    bgFrom: "#EAF6FF",
    bgTo: "#D0ECFF",
    highlight: false,
  },
  {
    title: "Incineración Individual",
    description: "Incluye urna, certificado y carta de duelo. Posibilidad de asistencia.",
    prices: [
      ["Hasta 3 kg", "230 €"],
      ["3 - 10 kg", "245 €"],
      ["10 - 25 kg", "260 €"],
      ["25 - 40 kg", "280 €"],
      ["40+ kg", "290 €"],
    ],
    extras: [
      "Entrega a domicilio: desde 20 €",
      "Huella en escayola: +30 €",
      "Ceremonia fin de semana: +60 €",
    ],
    bgFrom: "#C6E8FF",
    bgTo: "#8CCEFF",
    highlight: true,
  },
  {
    title: "Incineración Presencial",
    description: "Despedida íntima, velatorio privado y atención personalizada.",
    prices: [
      ["Hasta 3 kg", "260 €"],
      ["3 - 10 kg", "275 €"],
      ["10 - 25 kg", "290 €"],
      ["25 - 40 kg", "310 €"],
      ["40+ kg", "330 €"],
    ],
    extras: [
      "Velatorio y video en directo",
      "Obsequio especial y huella en escayola",
      "Parking y Wi-Fi gratuito",
    ],
    bgFrom: "#8CCEFF",
    bgTo: "#58B0FF",
    highlight: false,
  },
];

export default function Prices() {
  const [loaded, setLoaded] = useState(false);
  const { trackEvent } = useTracking(); 

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="precios"
      className="relative py-24 px-16 md:px-12 bg-gradient-to-br from-[#F8FCFF] to-[#D0ECFF] overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[url('/images/paw-light.svg')] bg-[length:180px_180px] bg-repeat opacity-5 pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute -top-32 -left-16 w-[350px] h-[350px] bg-blue-200/20 rounded-full filter blur-3xl" />
      <div className="absolute -bottom-28 right-0 w-[300px] h-[300px] bg-blue-300/15 rounded-full filter blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-6 tracking-tight">
          Tarifas de Cremación
        </h2>
        <p className="text-gray-700 text-xl max-w-3xl mx-auto">
          Selecciona el servicio que mejor se adapte a ti y a tu mascota. Transparencia
          de precios y atención cercana.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={
              loaded
                ? { opacity: 1, y: 0, transition: { delay: idx * 0.15 } }
                : {}
            }
            className={`relative rounded-3xl overflow-hidden shadow-lg border transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl bg-white w-full h-[44rem] p-12 ${
              service.highlight
                ? "border-blue-700 ring-2 ring-blue-300"
                : "border-transparent"
            }`}
            style={{
              background: `linear-gradient(120deg, ${service.bgFrom}, ${service.bgTo})`,
            }}
          >
            {service.highlight && (
              <div className="absolute top-6 right-6 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow">
                Recomendado
              </div>
            )}

            <div className="flex flex-col h-full">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-8 flex-grow">{service.description}</p>

              <div className="bg-white rounded-xl px-6 py-4 mb-8 shadow-inner border border-blue-100">
                <h4 className="text-base font-semibold text-blue-800 mb-3">
                  Precio por peso:
                </h4>
                <ul className="text-sm text-gray-800 space-y-3">
                  {service.prices.map(([w, p], i) => (
                    <li key={i} className="flex justify-between">
                      <span>{w}</span>
                      <span className="font-semibold">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-sm text-blue-900 mb-8">
                <h5 className="font-semibold mb-3">Extras disponibles:</h5>
                <ul className="space-y-2">
                  {service.extras.map((ext, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-[2px]" />
                      <span className="pt-[2px]">{ext}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://wa.me/34684418499"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("whatsapp_click", {
                    source: `Prices Section - ${service.title}`,
                    phone: "34684418499",
                    timestamp: new Date().toISOString(),
                  })
                }
                className="mt-auto inline-block w-full text-center bg-blue-600 text-white font-semibold py-4 rounded-full shadow hover:bg-blue-700 transition-colors duration-300"
              >
                Solicitar Servicio
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}