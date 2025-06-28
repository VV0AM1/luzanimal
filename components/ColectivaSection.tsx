"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "@/app/styles/quien-somos.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const prices = [
  { weight: "Hasta 3 kg", price: "65 €" },
  { weight: "3 – 10 kg", price: "75 €" },
  { weight: "10 – 25 kg", price: "85 €" },
  { weight: "25 – 40 kg", price: "110 €" },
  { weight: "40 + kg", price: "130 €" },
];

const extras = [
  "Recogida desde 20 € (según distancia)",
  "Festivos y fines de semana: + 20 €",
  "Cuerpo en descomposición: desde 35 €",
];

export default function ColectivaSection() {
  return (
    <main className="bg-[var(--blue-50)] text-[var(--text-main)]">

      <motion.section
        className="relative h-96 flex items-center justify-center bg-[url('/images/cremacion-colectiva.jpg')] bg-cover bg-center shadow-inner shadow-black/50"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold text-[var(--text-light)] uppercase tracking-tight">
          Incineración Colectiva
        </h1>
      </motion.section>

      <div className="w-24 mx-auto my-8 border-t-4 border-[var(--blue-500)]"></div>

      <motion.section
        className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center"
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">¿Qué es la incineración colectiva?</h2>
          <p className="leading-relaxed opacity-90">
            La <strong>incineración colectiva</strong> es un proceso económico y respetuoso donde
            varias mascotas comparten el mismo horno. Ideal si buscas una opción más asequible: 
            <strong>no incluye recuperación de cenizas</strong>, pero mantiene todos los estándares 
            de respeto y profesionalidad.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            {["Económica", "Sin devolución de cenizas", "Proceso certificado"].map((txt, i) => (
              <li key={i} className="opacity-90">{txt}</li>
            ))}
          </ul>
        </div>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/colectiva-section.jpg"
            alt="Ejemplo de horno de cremación colectiva"
            fill
            className="object-cover"
          />
        </div>
      </motion.section>

      <div className="w-16 mx-auto my-8 border-t-2 border-[var(--blue-300)]"></div>

      <motion.section
        className="max-w-4xl mx-auto px-6"
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h3 className="text-2xl font-semibold mb-6 text-[var(--blue-700)]">
          Precios por peso
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prices.map((row) => (
            <div
              key={row.weight}
              className="flex justify-between items-center p-6 bg-[var(--text-light)] rounded-2xl border-l-4 border-[var(--blue-500)] shadow-lg hover:shadow-2xl transition-shadow"
            >
              <span className="font-medium">{row.weight}</span>
              <span className="font-bold text-[var(--blue-700)]">{row.price}</span>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mt-12 bg-[var(--blue-100)] py-8"
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-4 text-[var(--blue-700)]">
            Extras disponibles
          </h3>
          <ul className="list-inside list-disc space-y-2 opacity-90">
            {extras.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="py-16 text-center"
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="mx-auto max-w-xs">
          <hr className="border-t-4 border-[var(--blue-500)] w-16 mx-auto mb-6" />
          <p className="mb-6 text-lg font-medium">
            ¿Listo para solicitar tu servicio de cremación colectiva? 
          </p>
          <a
            href="/contacto"
            className="inline-block bg-[var(--blue-700)] hover:bg-[var(--blue-500)] text-[var(--text-light)] px-8 py-4 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Solicitar Servicio
          </a>
        </div>
      </motion.section>

    </main>
  );
}