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
        className="relative h-[38rem] md:h-[60vh] flex items-center justify-center bg-[url('/images/individual-header.jpg')] bg-cover bg-center shadow-inner shadow-black/50 z-10"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-light)] uppercase drop-shadow-lg mb-4">
            Incineración Individual
          </h1>
          <p className="text-lg md:text-xl text-[var(--blue-100)] opacity-90 mb-4 leading-relaxed">
            Un tributo único, íntimo y respetuoso para tu mejor amigo. Esta modalidad garantiza que tu mascota sea
            cremada de manera exclusiva, devolviendo sus cenizas en una urna elegante y personalizada.
          </p>
          <p className="text-base md:text-lg text-[var(--blue-100)] opacity-80 max-w-xl mx-auto">
            Es una elección pensada para quienes desean honrar a su compañero con el máximo respeto, privacidad y un recuerdo eterno.
            Además, puedes asistir al proceso y compartir un último adiós en nuestras instalaciones.
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
        <div className="space-y-5">
          <h2 className="text-3xl font-bold">¿Por qué elegir la incineración individual?</h2>
          <p className="leading-relaxed opacity-90">
            La <strong>incineración individual</strong> es nuestra opción más personal. Tu mascota es tratada con cariño
            y dignidad en todo momento, y recibirás sus cenizas para conservarlas como recuerdo.
          </p>
          <p className="leading-relaxed opacity-90">
            Este servicio es ideal para quienes desean un cierre emocional más íntimo y tangible.
          </p>
          <ul className="list-disc pl-6 space-y-2 opacity-90">
            {["Urna personalizada de alta calidad", "Certificado oficial de cremación", "Carta de condolencia firmada por nuestro equipo", "Acceso opcional al velatorio en sala privada"].map((item, i) => (
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
        <p className="mt-4 text-sm text-gray-600 opacity-80">
          * Todos los precios incluyen IVA. Consulta condiciones según zona y disponibilidad.
        </p>
      </motion.section>

      <motion.section
        className="mt-12 bg-[var(--blue-100)] py-12"
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
            Añade toques personales o mayor comodidad con nuestros servicios adicionales:
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
        <div className="mx-auto max-w-md">
          <hr className="border-t-4 border-[var(--blue-500)] w-16 mx-auto mb-6" />
          <p className="mb-6 text-lg font-medium">
            Solicita hoy este servicio único y rinde homenaje con la dedicación que tu mascota merece.
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