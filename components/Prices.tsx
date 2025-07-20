"use client";

import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import "@/app/styles/quien-somos.css";
import { useTracking } from "@/app/context/TrackingContext";

const services = [
  {
    title: "Incineración Colectiva",
    description: "Sin recuperación de cenizas. Económica, respetuosa y gestionada con total profesionalismo.",
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
    description: "Incluye urna, certificado, carta de duelo y posibilidad de asistencia en el proceso.",
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
    description: "Despedida íntima con velatorio privado y atención personalizada para tu mascota.",
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
      className="relative py-24 px-4 md:px-12 bg-gradient-to-br from-[#F8FCFF] to-[#D0ECFF] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/images/paw-light.svg')] bg-[length:180px_180px] bg-repeat opacity-5 pointer-events-none" />
      <div className="absolute -top-32 -left-16 w-[350px] h-[350px] bg-blue-200/20 rounded-full filter blur-3xl" />
      <div className="absolute -bottom-28 right-0 w-[300px] h-[300px] bg-blue-300/15 rounded-full filter blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-4">
        <h2 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-6 tracking-tight">
          Tarifas de Cremación de Mascotas
        </h2>
        <p className="text-gray-700 text-xl max-w-3xl mx-auto">
          Conoce nuestros servicios y sus precios según el peso de tu mascota. Tratamos cada caso con la máxima delicadeza y claridad.
        </p>
      </div>
    
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative max-w-4xl mx-auto bg-white/60 backdrop-blur-md border mb-12 border-blue-100 rounded-2xl shadow-md px-8 py-10 text-lg leading-relaxed text-center"
      >
        <div className="mb-6">
          <div className="w-12 h-1 mx-auto bg-blue-500 rounded-full" />
        </div>
        <p className="mb-4 text-gray-800 font-bold">
          En <span className="font-semibold text-blue-700">Luz Animal</span>, entendemos que la despedida de una mascota es uno de los momentos más sensibles para cualquier familia. Por eso, te ofrecemos distintas modalidades de cremación para acompañarte con respeto, empatía y cercanía.
        </p>
        <p className="text-gray-700 font-bold">
          Nos comprometemos a brindarte tranquilidad desde el primer contacto hasta la entrega final de las cenizas, con un servicio personalizado, transparente y sin sorpresas. Conoce nuestras tarifas y elige la opción más adecuada para tu mascota y tus necesidades.
        </p>
      </motion.div>


      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={
              loaded
                ? { opacity: 1, y: 0, transition: { delay: idx * 0.15 } }
                : {}
            }
            className={`relative rounded-3xl overflow-hidden shadow-lg border transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl w-full h-auto p-8 md:p-10 ${
              service.highlight
                ? "border-blue-700 ring-2 ring-blue-300 bg-white"
                : "border-transparent"
            }`}
            style={{
              background: `linear-gradient(135deg, ${service.bgFrom}, ${service.bgTo})`,
            }}
          >
            {service.highlight && (
              <div className="absolute top-6 right-6 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow">
                Recomendado
              </div>
            )}

            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-700 text-lg mb-6">{service.description}</p>

              <div className="bg-white rounded-xl px-6 py-4 mb-6 shadow-inner border border-blue-100">
                <h4 className="text-base font-semibold text-blue-800 mb-3">
                  Precio por peso
                </h4>
                <ul className="text-sm text-gray-800 space-y-2">
                  {service.prices.map(([w, p], i) => (
                    <li key={i} className="flex justify-between">
                      <span>{w}</span>
                      <span className="font-semibold">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-md text-blue-900 mb-8">
                <h5 className="font-semibold mb-2">Extras disponibles:</h5>
                <ul className="space-y-1">
                  {service.extras.map((ext, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                      <span>{ext}</span>
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
                className="mt-auto inline-block w-full text-center bg-blue-700 hover:bg-blue-600 text-white font-semibold py-3 rounded-full shadow-lg transition duration-300"
              >
                Solicitar Servicio por WhatsApp
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}