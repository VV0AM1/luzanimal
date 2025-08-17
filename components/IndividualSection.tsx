"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "@/app/styles/quien-somos.css";
import type { Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
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
  "Ceremonia fin de semana: + 20 €",
];

export default function IndividualSection() {
  return (
    <main className="bg-[var(--blue-50)] text-[var(--text-main)] relative overflow-hidden">
      {/* Decorative bubble */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[var(--blue-300)] opacity-20 blur-2xl" />

      {/* Hero */}
      <motion.section
        className="relative h-[38rem] md:h-[60vh] flex items-center justify-center 
                   bg-[url('/images/individual-header.jpg')] bg-cover bg-center
                   shadow-[inset_0_0_120px_rgba(0,0,0,0.7)]"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-light)] drop-shadow-xl mb-4">
            Incineración Individual
          </h1>
          <p className="text-lg md:text-xl text-[var(--blue-100)] opacity-95 mb-4 leading-relaxed">
            Un <span className="font-semibold text-[var(--blue-300)]">tributo único</span>, íntimo y respetuoso para tu mejor amigo. 
            Garantiza que tu mascota sea cremada de manera exclusiva, devolviendo sus cenizas en una urna elegante y personalizada.
          </p>
          <p className="text-base md:text-lg text-[var(--blue-100)] opacity-90 max-w-xl mx-auto leading-relaxed">
            Pensado para quienes desean honrar a su compañero con el máximo respeto, privacidad y un recuerdo eterno. 
            Puedes asistir al proceso y compartir un último adiós en nuestras instalaciones.
          </p>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="w-32 mx-auto my-12 border-t-4 border-gradient-to-r from-[var(--blue-500)] to-[var(--blue-300)] rounded-full" />

      {/* Why Choose */}
      <motion.section
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-[var(--blue-700)]">
            Por qué elegir la <span className="text-[var(--blue-500)]">incineración individual</span>
            ?
          </h2>
          <p className="leading-relaxed opacity-90">
            La <strong>incineración individual</strong> es nuestra opción más personal. Tu mascota es tratada con cariño
            y dignidad en todo momento, y recibirás sus cenizas para conservarlas como recuerdo.
          </p>
          <p className="leading-relaxed opacity-90">
            Este servicio es ideal para quienes desean un cierre emocional más íntimo y tangible.
          </p>
          <ul className="list-disc pl-6 space-y-2 opacity-90">
            {[
              "Urna personalizada de alta calidad",
              "Certificado oficial de cremación",
              "Carta de condolencia firmada por nuestro equipo",
              "Acceso opcional al velatorio en sala privada",
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <motion.div
          className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src="/images/individual-page.jpeg"
            alt="Urna personalizada para mascotas"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.section>

      {/* Prices */}
      <motion.section
        className="max-w-4xl mx-auto px-6 mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h3 className="text-2xl font-semibold mb-6 text-[var(--blue-700)]">Precios por peso</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prices.map(({ weight, price }) => (
            <div
              key={weight}
              className="flex justify-between items-center p-6 bg-white rounded-2xl 
                         border-l-4 border-[var(--blue-500)] shadow-md hover:shadow-xl 
                         hover:-translate-y-1 transition-all"
            >
              <span>{weight}</span>
              <span className="font-bold text-[var(--blue-700)]">{price}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-[var(--text-muted)]">
          * Todos los precios incluyen IVA. Consulta condiciones según zona y disponibilidad.
        </p>
      </motion.section>

      {/* Extras */}
      <motion.section
        className="mt-20 bg-gradient-to-br from-[var(--blue-100)] via-[var(--blue-50)] to-white py-16 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-[url('/images/noise.jpg')] opacity-10" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h3 className="text-2xl font-semibold mb-4 text-[var(--blue-700)]">Servicios Extra</h3>
          <p className="mb-6 opacity-90">Añade toques personales o mayor comodidad con nuestros servicios adicionales:</p>
          <ul className="inline-block text-left list-inside list-disc space-y-2 opacity-90">
            {extras.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="py-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="mx-auto max-w-md">
          <hr className="border-t-4 border-[var(--blue-500)] w-20 mx-auto mb-6 rounded-full" />
          <p className="mb-6 text-lg font-medium">
            Solicita hoy este servicio único y rinde homenaje con la dedicación que tu mascota merece.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-gradient-to-r from-[var(--blue-700)] to-[var(--blue-500)] 
                       hover:from-[var(--blue-600)] hover:to-[var(--blue-400)]
                       text-[var(--text-light)] px-10 py-4 rounded-full font-semibold 
                       shadow-lg hover:shadow-2xl transition-all"
          >
            Solicitar Servicio
          </a>
        </div>
      </motion.section>
    </main>
  );
}