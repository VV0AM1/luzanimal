"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Script from "next/script";
import "@/app/styles/quien-somos.css";

const steps = [
  {
    title: "Contacto inmediato",
    subtitle: "Disponibles 24/7",
    description:
      "Resolvemos tus dudas al instante por llamada o WhatsApp, con empatía y rapidez.",
    icon: "/images/phone.svg",
    iconAlt: "Teléfono de contacto 24h",
  },
  {
    title: "Recogida segura",
    subtitle: "En tu domicilio o clínica",
    description:
      "Nos desplazamos con discreción y profesionalidad para recoger a tu compañero.",
    icon: "/images/truck.svg",
    iconAlt: "Vehículo de recogida de mascotas",
  },
  {
    title: "Despedida personalizada",
    subtitle: "Con amor y respeto",
    description:
      "Puedes acompañar y despedirte en sala privada antes de la cremación.",
    icon: "/images/flame.svg",
    iconAlt: "Llama representando la cremación",
  },
  {
    title: "Entrega conmemorativa",
    subtitle: "Recuerdos que permanecen",
    description:
      "Recibe las cenizas en una urna con certificado y, si lo deseas, huella conmemorativa.",
    icon: "/images/paw.svg",
    iconAlt: "Huella de mascota en recuerdo",
  },
];

const SITE_URL = "https://www.luzanimal.com";

export default function Proceso() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Proceso de cremación de mascotas",
    "description":
      "Pasos del servicio de cremación de mascotas de Luz Animal en Barcelona y Granollers.",
    "url": `${SITE_URL}#proceso`,
    "step": steps.map((s, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": s.title,
      "itemListElement": [
        {
          "@type": "HowToDirection",
          "text": `${s.subtitle}. ${s.description}`,
        },
      ],
    })),
  };

  return (
    <section
      id="proceso"
      aria-labelledby="proceso-title"
      className="relative w-full py-20 md:py-24 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 mix-blend-overlay pointer-events-none"
      />

      <Script id="ld-howto-proceso" type="application/ld+json">
        {JSON.stringify(howToJsonLd)}
      </Script>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          id="proceso-title"
          initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0, transition: { duration: 0.6 } }}
          className="text-3xl md:text-5xl font-extrabold text-white mb-4 md:mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
        >
          Nuestro proceso de cremación en Barcelona
        </motion.h2>

        <motion.p
          initial={reduceMotion ? {} : { opacity: 0 }}
          animate={reduceMotion ? {} : { opacity: 1, transition: { delay: 0.25 } }}
          className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed"
        >
          Cada paso está diseñado para brindarte claridad, respeto y
          acompañamiento. Te arropamos desde el primer contacto hasta la
          entrega final.
        </motion.p>

        <ol className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={reduceMotion ? {} : { opacity: 0, y: 32 }}
              animate={
                visible && !reduceMotion
                  ? { opacity: 1, y: 0, transition: { delay: i * 0.18 } }
                  : {}
              }
              className="relative"
            >
              <article
                className="h-full flex flex-col items-center text-center rounded-3xl px-6 py-8 md:px-8 md:py-10
                           bg-white/95 backdrop-blur shadow-2xl border border-white/20
                           transition-transform hover:scale-[1.02] hover:shadow-blue-400/30"
                aria-labelledby={`step-title-${i}`}
              >
                <div
                  aria-hidden="true"
                  className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full
                             bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold shadow-lg"
                >
                  {i + 1}
                </div>

                <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-white shadow-md">
                  <Image
                    src={step.icon}
                    alt={step.iconAlt}
                    width={32}
                    height={32}
                    className="object-contain"
                    sizes="56px"
                    priority={i === 0}
                  />
                </div>

                <h3
                  id={`step-title-${i}`}
                  className="text-lg md:text-xl font-extrabold text-gray-900 mb-1"
                >
                  {step.title}
                </h3>
                <p className="text-sm md:text-base font-semibold text-blue-800 mb-3 italic">
                  {step.subtitle}
                </p>
                <p className="text-sm md:text-[15px] text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </article>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-[-38px] top-1/2 -translate-y-1/2">
                  <motion.div
                    animate={reduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full shadow-lg"
                    aria-hidden="true"
                  />
                </div>
              )}
            </motion.li>
          ))}
        </ol>

        <div className="mt-14 md:mt-20 max-w-2xl mx-auto text-blue-100 text-base md:text-lg leading-relaxed">
          <p>
            ¿Tienes dudas sobre alguno de estos pasos o necesitas orientación?
            Nuestro equipo está disponible{" "}
            <strong className="text-white">las 24 horas</strong>. Escríbenos por{" "}
            <a
              href="https://wa.me/34684416567"
              className="font-semibold underline decoration-white/60 underline-offset-4 hover:decoration-white"
              aria-label="Abrir WhatsApp de Luz Animal"
            >
              WhatsApp
            </a>{" "}
            o llámanos directamente.
          </p>
        </div>
      </div>
    </section>
  );
}