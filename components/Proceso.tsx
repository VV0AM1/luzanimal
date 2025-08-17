"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "@/app/styles/quien-somos.css";

const steps = [
  {
    title: "Contacto inmediato",
    subtitle: "Estamos disponibles 24/7",
    description:
      "Resolvemos tus dudas al instante por llamada o WhatsApp, con empatía y rapidez.",
    bg: ["#E0F2FE", "#FFFFFF"],
    icon: "/images/phone.svg",
    iconAlt: "Teléfono de contacto 24h",
  },
  {
    title: "Recogida segura",
    subtitle: "En tu domicilio o clínica",
    description:
      "Nos desplazamos con discreción y profesionalidad para recoger a tu compañero.",
    bg: ["#BAE6FD", "#FFFFFF"],
    icon: "/images/truck.svg",
    iconAlt: "Camión de recogida de mascotas",
  },
  {
    title: "Despedida personalizada",
    subtitle: "Con amor y respeto",
    description:
      "Te damos la opción de acompañar y despedirte de forma íntima antes de la cremación.",
    bg: ["#7DD3FC", "#FFFFFF"],
    icon: "/images/flame.svg",
    iconAlt: "Llama representando la cremación",
  },
  {
    title: "Entrega conmemorativa",
    subtitle: "Recuerdos que permanecen",
    description:
      "Recibe las cenizas en una urna especial y otros detalles simbólicos si lo deseas.",
    bg: ["#38BDF8", "#FFFFFF"],
    icon: "/images/paw.svg",
    iconAlt: "Huella de mascota en recuerdo",
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
      className="relative w-full py-24 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800"
    >
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-6"
        >
          Nuestro Proceso de Cremación en Barcelona
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.3 } }}
          className="text-blue-100 text-lg max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          En Luz Animal, cada paso está diseñado para brindarte claridad, respeto
          y acompañamiento. Queremos que te sientas arropado desde el primer
          contacto hasta la entrega final.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
          {steps.map((step, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={
                visible
                  ? { opacity: 1, y: 0, transition: { delay: i * 0.25 } }
                  : {}
              }
              className="relative group flex flex-col items-center text-center rounded-3xl px-8 py-10 shadow-2xl border border-white/10 transition-transform bg-gradient-to-br from-white/90 to-white hover:scale-105 hover:shadow-blue-400/30"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold shadow-lg">
                {i + 1}
              </div>

              <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-white shadow-md">
                <Image
                  src={step.icon}
                  alt={step.iconAlt}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl font-extrabold text-gray-900 mb-1">
                {step.title}
              </h3>
              <p className="text-base font-semibold text-blue-800 mb-3 italic">
                {step.subtitle}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {step.description}
              </p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-[-45px] top-1/2 transform -translate-y-1/2">
                  <motion.div
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-14 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full shadow-lg"
                  />
                </div>
              )}
            </motion.article>
          ))}
        </div>

        <div className="mt-20 max-w-2xl mx-auto text-blue-100 text-lg leading-relaxed">
          <p>
            ¿Tienes dudas sobre alguno de estos pasos o necesitas orientación?
            Nuestro equipo está disponible{" "}
            <strong className="text-white">las 24 horas</strong> para ayudarte.
            Puedes escribirnos por WhatsApp o llamarnos directamente.
          </p>
        </div>
      </div>
    </section>
  );
}