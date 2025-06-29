"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "@/app/styles/quien-somos.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const prices = [
  { weight: "Hasta 3 kg", price: "260 €" },
  { weight: "3 – 10 kg", price: "275 €" },
  { weight: "10 – 25 kg", price: "290 €" },
  { weight: "25 – 40 kg", price: "310 €" },
  { weight: "40+ kg", price: "330 €" },
];

const extras = [
  "Velatorio íntimo y vídeo en directo",
  "Obsequio con huella en escayola",
  "Parking y Wi-Fi gratuitos",
];

export default function PresencialSection() {
  return (
    <main className="relative bg-[var(--blue-50)] text-[var(--text-main)] overflow-hidden">
      <motion.section
        className="relative h-96 md:h-[60vh] flex items-center justify-center bg-[url('/images/presencial-header.png')] bg-cover bg-center shadow-inner shadow-black/60"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
        <motion.h1
          className="relative z-10 text-4xl md:text-5xl font-extrabold text-[var(--text-light)] uppercase drop-shadow-lg"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Cremación Presencial
        </motion.h1>
      </motion.section>

      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[var(--blue-300)] opacity-20 rounded-full" />

      <div className="w-24 mx-auto my-8 border-t-4 border-[var(--blue-500)]"></div>

      <motion.section
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">¿Qué es la cremación presencial?</h2>
          <p className="leading-relaxed opacity-90">
            Con nuestra <strong>cremación presencial</strong>, participas directamente en un
            <em className="font-semibold"> velatorio íntimo</em> y despedida con atención
            personalizada, asegurando un homenaje lleno de cariño y respeto.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--text-main)]">
            {[
              "Velatorio privado con familiares",
              "Transmisión de vídeo en directo",
              "Obsequio especial y huella en escayola",
              "Acompañamiento emocional personalizado",
            ].map((item, idx) => (
              <li key={idx} className="opacity-90">{item}</li>
            ))}
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
            src="/images/cremacion-individual.jpg"
            alt="Velatorio íntimo en Cremación Presencial"
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
            Opciones Adicionales
          </h3>
          <p className="mb-6 opacity-90">
            Personaliza aún más la despedida de tu mascota con estos servicios:
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
            Vive una despedida única y llena de significado para tu compañero de vida.
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