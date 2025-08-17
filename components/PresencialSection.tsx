"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import "@/app/styles/quien-somos.css";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const prices = [
  { weight: "Hasta 3 kg", price: "260 €" },
  { weight: "3 – 10 kg", price: "275 €" },
  { weight: "10 – 25 kg", price: "290 €" },
  { weight: "25 – 40 kg", price: "310 €" },
  { weight: "40+ kg", price: "330 €" },
];

const extras = [
  "Velatorio íntimo con ambientación acogedora",
  "Transmisión en directo vía vídeo",
  "Huella conmemorativa en escayola",
  "Obsequio especial de despedida",
  "Zona de aparcamiento gratuito y Wi-Fi",
];

export default function PresencialSection() {
  return (
    <main className="relative bg-[var(--blue-50)] text-[var(--text-main)] overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[var(--blue-300)] opacity-25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-[var(--blue-100)] opacity-30 rounded-full blur-2xl" />

      <motion.section
        className="relative h-[32rem] md:h-[60vh] flex flex-col justify-center items-center 
                   text-center bg-[url('/images/presencial-header.png')] bg-cover bg-center
                   shadow-[inset_0_0_120px_rgba(0,0,0,0.7)] px-6"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent)]" />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-light)] uppercase drop-shadow-xl mb-4 tracking-wide">
            Cremación Presencial para Mascotas
          </h1>
          <p className="text-[var(--blue-100)] text-base md:text-lg leading-relaxed max-w-xl mx-auto opacity-95">
            Un último adiós lleno de amor y acompañamiento. Participa en el proceso en un entorno
            íntimo, cálido y respetuoso, rodeado de quienes más amaron a tu mascota.
          </p>
        </div>
      </motion.section>

      <div className="relative flex justify-center my-12">
        <div className="w-24 border-t-4 border-[var(--blue-500)]" />
        <div className="absolute top-1/2 transform -translate-y-1/2 bg-[var(--blue-500)] w-3 h-3 rounded-full" />
      </div>

      <motion.section
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-[var(--blue-700)] leading-snug">
            Una despedida significativa y personalizada
          </h2>
          <p className="leading-relaxed opacity-90">
            La <strong>cremación presencial</strong> está pensada para familias que desean vivir
            el último adiós con calma, respeto y privacidad. Permite{" "}
            <em className="font-semibold">estar presente en el proceso</em>, acompañando a tu
            mascota hasta el final.
          </p>
          <p className="leading-relaxed opacity-90">
            En nuestro centro de Granollers encontrarás una{" "}
            <strong>sala de velatorio acogedora</strong>, donde podrás despedirte con serenidad.
            Si alguien no puede acudir, ofrecemos <strong>transmisión en directo</strong>.
          </p>
          <ul className="list-disc pl-6 space-y-2 opacity-90 marker:text-[var(--blue-500)]">
            {[
              "Atención personalizada durante todo el proceso",
              "Sala privada con ambientación cuidada",
              "Acompañamiento emocional profesional",
              "Opciones conmemorativas exclusivas",
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <motion.div
          className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-[var(--blue-100)]"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src="/images/precensial-page.jpeg"
            alt="Velatorio íntimo en cremación presencial"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>
      </motion.section>

      <motion.section
        className="max-w-4xl mx-auto px-6 mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h3 className="text-2xl font-semibold mb-8 text-[var(--blue-700)] relative inline-block">
          Tarifas por peso
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--blue-500)] to-[var(--blue-300)] rounded-full"></span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prices.map(({ weight, price }, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center p-6 bg-white rounded-2xl 
                         border border-[var(--blue-100)] shadow-md hover:shadow-2xl hover:border-[var(--blue-300)] 
                         transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--blue-500)] to-[var(--blue-300)]" />
              <span>{weight}</span>
              <span className="font-bold text-[var(--blue-700)]">{price}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-600 opacity-80">
          * Precios con IVA incluido. Consulta condiciones según zona y disponibilidad.
        </p>
      </motion.section>

      <motion.section
        className="mt-20 bg-[var(--blue-100)] py-16 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.6),transparent)] opacity-70" />
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
          <h3 className="text-2xl font-semibold mb-4 text-[var(--blue-700)]">
            Servicios adicionales opcionales
          </h3>
          <p className="mb-6 opacity-90">
            Personaliza la ceremonia con detalles únicos que convertirán esta despedida en un
            recuerdo imborrable:
          </p>
          <ul className="inline-block text-left list-disc list-inside space-y-2 opacity-90 marker:text-[var(--blue-500)]">
            {extras.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="py-20 text-center relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-50)] to-transparent" />
        <div className="relative mx-auto max-w-lg">
          <hr className="border-t-4 border-[var(--blue-500)] w-16 mx-auto mb-6" />
          <p className="mb-6 text-lg font-medium leading-relaxed">
            En Luz Animal te acompañamos con humanidad y respeto en este momento tan delicado.
            Contáctanos para darle a tu mascota una despedida digna y memorable.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-gradient-to-r from-[var(--blue-700)] to-[var(--blue-500)] 
                       hover:from-[var(--blue-600)] hover:to-[var(--blue-400)]
                       text-[var(--text-light)] px-8 py-4 rounded-full font-semibold 
                       shadow-lg hover:shadow-2xl transition-all"
          >
            Solicitar cremación presencial
          </a>
        </div>
      </motion.section>
    </main>
  );
}
