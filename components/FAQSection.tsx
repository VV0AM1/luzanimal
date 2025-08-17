"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";
import { FaQuestionCircle } from "react-icons/fa";

type QA = {
  q: string;
  a: string;
};

const faqs: QA[] = [
  {
    q: "¿Cuál es la diferencia entre incineración colectiva, individual y presencial?",
    a: `• Colectiva: varias mascotas se creman en un mismo ciclo. Es la opción más económica y, por normativa, no permite la recuperación de cenizas.
• Individual: tu mascota se crema de manera exclusiva y te devolvemos las cenizas en una urna con certificado. Es la modalidad más elegida por familias que desean conservar un recuerdo.
• Presencial: todo lo incluido en la modalidad individual, con la posibilidad de acompañar el proceso en nuestras instalaciones de Granollers. Dispones de sala privada de velatorio y, si lo prefieres, transmisión en directo para familiares que no puedan asistir.`
  },
  {
    q: "¿Cómo funciona la recogida? ¿Hay servicio 24/7 en Barcelona y alrededores?",
    a: `Sí. Ofrecemos recogida urgente 24/7 en domicilios y clínicas veterinarias de Barcelona, Vallès y municipios cercanos. 
Estimamos el horario contigo para que sea cómodo y discreto. Las tarifas de recogida y entrega de cenizas varían según kilómetros y se confirman por WhatsApp o teléfono antes de realizar el servicio.`
  },
  {
    q: "¿Qué documentos recibo y cómo se entregan las cenizas?",
    a: `En las modalidades individual y presencial, entregamos:
• Certificado oficial de incineración con fecha y datos identificativos.
• Urna con cierre seguro y etiqueta identificativa.
• (Opcional) Huella conmemorativa y carta de despedida.
Las cenizas pueden retirarse en nuestras instalaciones o entregarse a domicilio (coste según distancia).`
  },
  {
    q: "¿Cuánto tarda el proceso de cremación y la entrega?",
    a: `La cremación en sí puede durar entre 1 y 3 horas, según el peso. 
En individual/presencial, la entrega de cenizas suele realizarse el mismo día o dentro de 24–48 horas. En caso de alta demanda (festivos o fines de semana), te informaremos del plazo exacto al confirmar el servicio.`
  },
  {
    q: "¿Cómo se calculan los precios? ¿Qué extras existen?",
    a: `El precio base depende del peso de la mascota y del tipo de servicio. 
Extras habituales:
• Recogida/entrega a domicilio (según kilómetros)
• Huella en escayola
• Ceremonia en fin de semana o festivo
• Sala privada y presencia durante el proceso (presencial)
Siempre presupuestamos por adelantado para evitar sorpresas.`
  },
  {
    q: "¿Qué garantías tengo de que las cenizas corresponden a mi mascota?",
    a: `Trabajamos con un protocolo de identificación interno con etiquetas redundantes, custodia individual y registro de cada fase. 
En individual/presencial, la cámara se dedica exclusivamente a tu mascota durante el ciclo, lo que permite trazabilidad y la máxima tranquilidad para tu familia.`
  },
  {
    q: "¿Puedo llevar objetos o elegir una urna distinta?",
    a: `Sí. Puedes traer un pequeño objeto no metálico (por ejemplo, una carta o pañuelo). 
Disponemos de varios modelos de urnas; puedes mantener la incluida o seleccionar una alternativa (se cotiza la diferencia). Nuestro equipo te asesora para que todo sea seguro y legal.`
  }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a.replace(/\n/g, "<br/>") }
  }))
};

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e1c42] via-[#193379] to-[#2a4fa3]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/noise.jpg')] bg-repeat opacity-[0.07] mix-blend-overlay" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            id="faq-title"
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Preguntas Frecuentes
          </h2>
          <div className="w-24 h-1 bg-white/70 mx-auto mt-4 rounded-full" />
          <p className="text-blue-100 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            Todo lo que necesitas saber sobre nuestros servicios de cremación de
            mascotas en Barcelona y Granollers: modalidades, tiempos, recogidas, garantías y más.
          </p>
        </div>

        <ul className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <li key={idx}>
                <motion.div
                  initial={false}
                  className="rounded-2xl bg-white/90 backdrop-blur-md border border-white/70 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.45)]"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="w-full flex items-center gap-3 text-left px-5 py-4"
                  >
                    <FaQuestionCircle className="shrink-0 text-[var(--blue-500)] w-5 h-5" />
                    <span className="flex-1 font-semibold text-lg text-gray-900">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-3 text-gray-500"
                    >
                      ▾
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${idx}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-gray-700 leading-relaxed whitespace-pre-line">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/34684416567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-full shadow transition"
            aria-label="Escríbenos por WhatsApp"
          >
            ¿Aún tienes dudas? Escríbenos por WhatsApp
          </a>
        </div>
      </div>

      <Script id="faq-json-ld" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>
    </section>
  );
}