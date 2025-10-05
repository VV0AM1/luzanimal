"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle, XCircle, TrendingUp } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

type Service = {
  id: "colectiva" | "presencial" | "individual";
  title: string;
  description: string;
  why: string;
  features: { label: string; included: boolean }[];
  extras: string[];
  link: string;
  highlight?: boolean;
  orderLg: string;
  fromPrice?: string;
};

const services: Service[] = [
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
    why: "La opción más elegida: despídete en persona con la máxima cercanía.",
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
    description: "Servicio completo con devolución de cenizas en urna.",
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

const SITE_URL = "https://www.luzanimal.com";

export default function Prices() {
  const [loaded, setLoaded] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  const offerCatalog = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "Modalidades de incineración de mascotas",
    "url": `${SITE_URL}/servicios`,
    "itemListElement": services.map((s) => ({
      "@type": "Offer",
      "name": s.title,
      "itemOffered": {
        "@type": "Service",
        "name": s.title,
        "serviceType": s.title.replace("Incineración", "Cremación"),
        "url": `${SITE_URL}${s.link}`,
        "description": `${s.description} ${s.why}`.trim(),
        "provider": { "@type": "LocalBusiness", "name": "Luz Animal" },
        "areaServed": "Barcelona y Granollers",
      },
    })),
  };

  return (
    <section
      id="precios"
      className="relative py-20 md:py-24 px-4 md:px-12 overflow-hidden"
      aria-labelledby="prices-title"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#F2F6FF] via-[#E8EEFF] to-[#DCE6FF]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/noise.jpg')] bg-repeat opacity-[0.5] mix-blend-overlay" />

      <Script id="ld-offercatalog-prices" type="application/ld+json">
        {JSON.stringify(offerCatalog)}
      </Script>

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-10">
        <h2
          id="prices-title"
          className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-3 md:mb-4 tracking-tight"
        >
          Tarifas y servicios de cremación
        </h2>
        <p className="text-gray-700 text-base md:text-xl max-w-3xl mx-auto">
          Elige la modalidad que mejor se adapte a tu despedida. Puedes calcular
          un presupuesto orientativo con nuestra{" "}
          <Link
            href="/calculadora"
            className="font-semibold underline decoration-blue-300 underline-offset-4 hover:decoration-blue-500"
            aria-label="Abrir calculadora de precios de cremación de mascotas"
          >
            calculadora de precios
          </Link>
          .
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <motion.article
            key={service.id}
            initial={reduceMotion ? {} : { opacity: 0, y: 22 }}
            animate={
              loaded && !reduceMotion
                ? { opacity: 1, y: 0, transition: { delay: idx * 0.15 } }
                : {}
            }
            className={`relative rounded-3xl overflow-visible ${service.orderLg}`}
            aria-labelledby={`plan-title-${service.id}`}
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
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 text-white text-xs font-semibold px-4 py-1.5 shadow-lg">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Más elegido
                  </span>
                </div>
              )}

              <div
                className={`flex flex-col h-full p-7 md:p-9 rounded-3xl ${
                  service.highlight ? "pt-12" : "pt-9"
                }`}
              >
                <h3
                  id={`plan-title-${service.id}`}
                  className="text-2xl font-extrabold text-gray-900 mb-1 text-center"
                >
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
                        <CheckCircle
                          className="w-5 h-5 text-green-600 mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                      ) : (
                        <XCircle
                          className="w-5 h-5 text-red-500 mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                      )}
                      <span className={f.included ? "" : "text-gray-600"}>
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent mb-6" />

                <div className="text-left mb-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Extras</h4>
                  <ul className="space-y-1.5 text-gray-700 text-sm">
                    {service.extras.map((ext, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-700 mt-0.5" aria-hidden="true" />
                        <span>{ext}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Link
                    href={service.link}
                    className={`inline-block w-full text-center font-semibold py-3 rounded-full transition shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      service.highlight
                        ? "bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:from-blue-600 hover:to-blue-400 focus-visible:ring-blue-500"
                        : "bg-blue-100 text-blue-900 hover:bg-blue-200 focus-visible:ring-blue-300"
                    }`}
                    aria-label={`Ver más sobre ${service.title}`}
                  >
                    Ver más
                  </Link>
                  <Link
                    href="/calculadora"
                    className="inline-block w-full text-center font-semibold py-3 rounded-full transition border border-blue-200 text-blue-800 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300"
                    aria-label="Abrir calculadora de precios"
                  >
                    Calcular precio
                  </Link>
                </div>

                <p className="mt-3 text-xs text-gray-500 text-center">
                  Tarifas orientativas. Confirmamos presupuesto exacto por WhatsApp o teléfono.
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}