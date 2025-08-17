"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "colectiva",
    title: "Incineración Colectiva",
    description: "Opción económica, sin recuperación de cenizas.",
    why: "Servicio respetuoso y básico para quienes no desean conservar las cenizas.",
    features: [
      { label: "Entrega de cenizas", included: false },
      { label: "Certificado", included: true },
      { label: "Huella conmemorativa", included: true },
    ],
    extras: [
      "Recogida y entrega desde 20 € (según distancia)",
      "Festivos y fines de semana: +20 €",
    ],
    link: "/servicios/incineracion-colectiva",
    highlight: false,
    orderLg: "lg:order-1",
  },
  {
    id: "presencial",
    title: "Incineración Presencial",
    description:
      "Despedida íntima con sala privada, ceremonia y acompañamiento total.",
    why: "La opción más completa, para despedirte de tu mascota en persona.",
    features: [
      { label: "Todo lo incluido en Incineración Individual", included: true },
      { label: "Habitación individual para despedida", included: true },
      { label: "Ceremonia personalizada", included: true },
      { label: "Proceso de incineración en directo", included: true },
    ],
    extras: [
      "Recogida y entrega desde 20 € (según distancia)",
      "Festivos y fines de semana: +20 €",
    ],
    link: "/servicios/incineracion-presencial",
    highlight: true,
    orderLg: "lg:order-2",
  },
  {
    id: "individual",
    title: "Incineración Individual",
    description:
      "Servicio completo con devolución de cenizas en urna especial.",
    why: "Ideal si deseas conservar las cenizas y un recuerdo íntimo.",
    features: [
      { label: "Todo lo incluido en Incineración Colectiva", included: true },
      { label: "Entrega de cenizas en urna", included: true },
    ],
    extras: [
      "Recogida y entrega desde 20 € (según distancia)",
      "Festivos y fines de semana: +20 €",
    ],
    link: "/servicios/incineracion-individual",
    highlight: false,
    orderLg: "lg:order-3",
  },
];

export default function Prices() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="precios"
      className="relative py-24 px-4 md:px-12 overflow-hidden"
      aria-labelledby="prices-title"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#F2F6FF] via-[#E8EEFF] to-[#DCE6FF]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/noise.jpg')] bg-repeat opacity-[0.6] mix-blend-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-10">
        <h2
          id="prices-title"
          className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 tracking-tight"
        >
          Tarifas y Servicios de Cremación
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
          Elige la modalidad más adecuada para tu despedida. Todas incluyen
          extras comunes y se adaptan a tus necesidades.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <motion.article
            key={service.id}
            initial={{ opacity: 0, y: 22 }}
            animate={
              loaded
                ? { opacity: 1, y: 0, transition: { delay: idx * 0.15 } }
                : {}
            }
            className={`relative rounded-3xl overflow-visible ${service.orderLg}`}
          >
            <div
              className={`relative rounded-3xl border ${
                service.highlight
                  ? "border-blue-400 bg-white shadow-[0_30px_60px_-20px_rgba(30,58,138,0.35)]"
                  : "border-blue-100 bg-white/95 shadow-[0_20px_40px_-16px_rgba(30,58,138,0.18)]"
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-4 right-6 z-20">
                  <span className="inline-block rounded-full bg-gradient-to-r from-blue-700 to-blue-500 text-white text-xs font-semibold px-4 py-1.5 shadow-lg">
                    Recomendado
                  </span>
                </div>
              )}

              <div
                className={`flex flex-col h-full p-8 md:p-9 rounded-3xl ${
                  service.highlight ? "pt-12" : "pt-9"
                }`}
              >
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-center">{service.description}</p>
                <p className="text-sm text-blue-700 italic text-center mt-2 mb-6">
                  {service.why}
                </p>

                <ul className="text-left space-y-2.5 mb-6">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-900">
                      {f.included ? (
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                      )}
                      <span className={f.included ? "" : "text-gray-600"}>
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent mb-6" />

                <div className="text-left mb-6">
                  <h5 className="font-semibold text-blue-900 mb-2">Extras</h5>
                  <ul className="space-y-1.5 text-gray-700 text-sm">
                    {service.extras.map((ext, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-700 mt-0.5" />
                        <span>{ext}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={service.link}
                  className={`mt-auto inline-block w-full text-center font-semibold py-3 rounded-full transition shadow-lg ${
                    service.highlight
                      ? "bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:from-blue-600 hover:to-blue-400"
                      : "bg-blue-100 text-blue-900 hover:bg-blue-200"
                  }`}
                >
                  Ver más
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}