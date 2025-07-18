"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "@/app/styles/quien-somos.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const prices = [
  { weight: "Hasta 3 kg", price: "230 €" },
  { weight: "3 – 10 kg", price: "245 €" },
  { weight: "10 – 25 kg", price: "260 €" },
  { weight: "25 – 40 kg", price: "280 €" },
  { weight: "40+ kg", price: "290 €" },
];

const extras = [
  "Entrega a domicilio: desde 20 €",
  "Huella en escayola: + 30 €",
  "Ceremonia fin de semana: + 60 €",
];

export default function IndividualSection() {
  return (
    <main className="bg-[var(--blue-50)] text-[var(--text-main)] overflow-hidden relative">
      <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[var(--blue-300)] opacity-20 z-0" />

      <motion.section
        className="relative h-96 md:h-[60vh] flex items-center justify-center bg-[url('/images/individual-header.jpg')] bg-cover bg-center shadow-inner shadow-black/50 z-10"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-light)] uppercase drop-shadow-lg">
            Incineración Individual
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[var(--blue-100)]">
            Un tributo único y respetuoso para tu mejor amigo
          </p>
        </div>
      </motion.section>

      <div className="w-24 mx-auto my-8 border-t-4 border-[var(--blue-500)]"></div>

      <motion.section
        className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">¿Por qué elegir incineración individual?</h2>
          <p className="leading-relaxed opacity-90">
            Con la <strong>incineración individual</strong> tu mascota recibe un proceso
            exclusivo: cuidamos cada detalle, garantizamos privacidad y te devolvemos las cenizas
            en una urna diseñada a tu medida.
          </p>
          <ul className="list-disc pl-6 space-y-2 opacity-90">
            {[
              "Urna personalizada de alta calidad",
              "Certificado oficial de cremación",
              "Carta de condolencia personalizada",
              "Posibilidad de asistencia al velatorio",
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <motion.div
          className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src="/images/cremacion-presencial.jpg"
            alt="Urna personalizada para mascotas"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.section>

      <div className="w-16 mx-auto my-8 border-t-2 border-[var(--blue-300)]"></div>

      <motion.section
        className="max-w-4xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h3 className="text-2xl font-semibold mb-6 text-[var(--blue-700)]">
          Precios por peso
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prices.map(({ weight, price }) => (
            <div
              key={weight}
              className="flex justify-between items-center p-6 bg-[var(--text-light)] rounded-2xl border-l-4 border-[var(--blue-500)] shadow-lg hover:shadow-2xl transition-shadow"
            >
              <span>{weight}</span>
              <span className="font-bold text-[var(--blue-700)]">{price}</span>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mt-12 bg-[var(--blue-100)] py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-[var(--blue-700)]">
            Servicios Extra
          </h3>
          <p className="mb-6 opacity-90">
            Completa tu servicio con opciones adicionales para hacer este adiós aún más especial:
          </p>
          <ul className="inline-block text-left list-inside list-disc space-y-2 opacity-90">
            {extras.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="mx-auto max-w-xs">
          <hr className="border-t-4 border-[var(--blue-500)] w-16 mx-auto mb-6" />
          <p className="mb-6 text-lg font-medium">
            Háblanos hoy y recibe un adiós completamente a tu medida.
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