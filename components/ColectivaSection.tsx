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
  { weight: "40+ kg", price: "130 €" },
];

const extras = [
  "Recogida a domicilio desde 20 € (según distancia)",
  "Suplemento festivos y fines de semana: + 20 €",
  "Cuerpo en descomposición: + 35 €",
];

export default function ColectivaSection() {
  return (
    <main className="relative bg-[var(--blue-50)] text-[var(--text-main)] overflow-hidden">
      <motion.section
        className="relative h-96 md:h-[60vh] flex items-center justify-center bg-[url('/images/cremacion-colectiva.jpg')] bg-cover bg-center shadow-inner shadow-black/60"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
        <motion.h1
          className="relative z-10 text-4xl md:text-5xl font-extrabold text-[var(--text-light)] uppercase tracking-tight drop-shadow-lg"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Incineración Colectiva
        </motion.h1>
      </motion.section>

      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[var(--blue-300)] opacity-20" />

      <div className="w-20 mx-auto my-8 border-t-4 border-[var(--blue-500)]"></div>

      <motion.section
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">¿Qué es la cremación colectiva?</h2>
          <p className="leading-relaxed opacity-90">
            Nuestra <strong>incineración colectiva de mascotas</strong> es la alternativa más 
            <em className="font-semibold">económica y ecológica</em>. Ideal para familias que
            buscan un servicio respetuoso sin devolución individual de cenizas.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--text-main)]">
            {["Proceso certificado", "Coste reducido", "Gestión ambiental responsable"].map(
              (item, idx) => (
                <li key={idx} className="opacity-90">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <motion.div
          className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src="/images/colectiva-section.jpg"
            alt="Interior de cremación colectiva"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.section>

      <div className="w-16 mx-auto my-8 border-t-2 border-[var(--blue-300)]"></div>

      <motion.section
        className="max-w-4xl mx-auto px-6"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h3 className="text-2xl font-semibold mb-6 text-[var(--blue-700)]">
          Tarifas por Peso
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prices.map(({ weight, price }, idx) => (
            <motion.div
              key={idx}
              className="flex justify-between items-center p-6 bg-[var(--text-light)] rounded-2xl border-l-4 border-[var(--blue-500)] shadow hover:shadow-xl transition-shadow"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <span>{weight}</span>
              <span className="font-bold text-[var(--blue-700)]">{price}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mt-12 bg-[var(--blue-100)] py-10"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-[var(--blue-700)]">
            Servicios Adicionales
          </h3>
          <p className="mb-6 opacity-90">
            Añade comodidad y flexibilidad según tus necesidades:
          </p>
          <ul className="inline-block text-left list-inside list-disc space-y-2 opacity-90">
            {extras.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="py-16 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="mx-auto max-w-xs">
          <hr className="border-t-4 border-[var(--blue-500)] w-16 mx-auto mb-6" />
          <p className="mb-6 text-lg font-medium">
            Reserva tu servicio de cremación colectiva hoy y garantiza un adiós digno y accesible.
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