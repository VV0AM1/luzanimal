"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLeaf, FaCertificate, FaEuroSign } from "react-icons/fa";
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
  "Suplemento festivos y fines de semana: +20 €",
  "Cuerpo en descomposición: +35 €",
];

export default function ColectivaSection() {
  return (
    <main className="relative bg-[var(--blue-50)] text-[var(--text-main)] overflow-hidden">
      <motion.section
          className="relative h-[36rem] md:h-[60vh] flex flex-col justify-center items-center text-center px-6 bg-[url('/images/cremacion-colectiva.jpg')] bg-cover bg-center shadow-inner shadow-black/60"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-0" />

          <motion.h1
            className="relative z-10 text-4xl md:text-5xl font-extrabold text-[var(--text-light)] uppercase tracking-tight drop-shadow-lg mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Incineración Colectiva
          </motion.h1>

          <motion.p
            className="relative z-10 text-lg md:text-xl max-w-3xl text-[var(--blue-100)] opacity-90 mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Una opción económica, respetuosa y sencilla para despedir a tu mascota con dignidad. 
            Nuestro servicio de cremación colectiva garantiza un trato ético, certificado y sostenible.
          </motion.p>

          <motion.p
            className="relative z-10 text-base md:text-lg max-w-2xl text-[var(--blue-100)] opacity-80"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Ideal para quienes desean honrar la memoria de su compañero sin recibir las cenizas. 
            Nos encargamos de todo con el máximo respeto, empatía y compromiso ambiental.
          </motion.p>
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
          <h2 className="text-3xl font-bold">
            ¿Qué es la cremación colectiva?
          </h2>
          <p className="leading-relaxed opacity-90 text-lg">
            Nuestra <strong>incineración colectiva de mascotas</strong> es la alternativa más <em className="font-semibold">económica y ecológica</em>. 
            Un servicio solidario que mantiene la dignidad y el respeto, sin entrega individual de cenizas.
          </p>
          <ul className="list-none pl-0 space-y-4 text-[var(--text-main)]">
            <li className="flex items-start gap-3 opacity-90">
              <FaCertificate className="text-[var(--blue-500)] mt-1" />
              Proceso certificado y controlado
            </li>
            <li className="flex items-start gap-3 opacity-90">
              <FaEuroSign className="text-[var(--blue-500)] mt-1" />
              Coste accesible para todas las familias
            </li>
            <li className="flex items-start gap-3 opacity-90">
              <FaLeaf className="text-[var(--blue-500)] mt-1" />
              Gestión ambientalmente responsable
            </li>
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
              <span className="text-base">{weight}</span>
              <span className="font-bold text-[var(--blue-700)] text-lg">{price}</span>
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
          <ul className="inline-block text-left list-disc list-inside space-y-2 opacity-90 text-[var(--text-main)]">
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
        <div className="mx-auto max-w-md">
          <hr className="border-t-4 border-[var(--blue-500)] w-16 mx-auto mb-6" />
          <p className="mb-6 text-lg font-medium text-[var(--text-main)]">
            Reserva tu servicio de cremación colectiva hoy y garantiza un adiós digno y accesible para tu compañero fiel.
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