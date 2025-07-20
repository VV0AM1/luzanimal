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
  "Velatorio íntimo con ambientación acogedora",
  "Transmisión en directo vía vídeo",
  "Huella conmemorativa en escayola",
  "Obsequio especial de despedida",
  "Zona de aparcamiento gratuito y Wi-Fi",
];

export default function PresencialSection() {
  return (
    <main className="relative bg-[var(--blue-50)] text-[var(--text-main)] overflow-hidden">
      <motion.section
        className="relative h-[28rem] md:h-[60vh] flex flex-col justify-center items-center text-center bg-[url('/images/presencial-header.png')] bg-cover bg-center shadow-inner shadow-black/60 px-6"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />

        <div className="relative z-10 max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-[var(--text-light)] uppercase drop-shadow-lg mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Incineracion Presencial para Mascotas
          </motion.h1>

          <motion.p
            className="text-[var(--blue-100)] text-base md:text-lg leading-relaxed max-w-xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Un último adiós lleno de amor y acompañamiento. Participa en el proceso en un entorno íntimo,
            cálido y respetuoso, rodeado de las personas que más amaron a tu mascota. Vivir este momento
            en presencia es una forma de rendirle homenaje y cerrar el ciclo con serenidad y gratitud.
          </motion.p>
        </div>
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
          <h2 className="text-3xl font-bold">Un Despedida Significativa y Personalizada</h2>
          <p className="leading-relaxed opacity-90">
            La <strong>cremación presencial</strong> está diseñada para familias que desean vivir el último adiós con
            calma, respeto y total privacidad. Este servicio permite <em className="font-semibold">estar presente en el proceso</em> de forma íntima, acompañando a tu mascota hasta el final.
          </p>
          <p className="leading-relaxed opacity-90">
            En nuestro centro de Granollers, habilitamos una sala de velatorio cálida y acogedora. Allí podrás despedirte con tranquilidad, rodeado de cariño y sin prisas. También ofrecemos la opción de <strong>transmisión en directo</strong> si algún familiar no puede asistir.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--text-main)]">
            {[
              "Atención personalizada durante todo el proceso",
              "Sala privada para despedida con ambientación cuidada",
              "Acompañamiento emocional profesional",
              "Posibilidad de añadir elementos conmemorativos",
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
            Servicios Adicionales Opcionales
          </h3>
          <p className="mb-6 opacity-90">
            Puedes complementar la ceremonia con detalles únicos que hacen de esta despedida un recuerdo imborrable:
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
        <div className="mx-auto max-w-xl">
          <hr className="border-t-4 border-[var(--blue-500)] w-16 mx-auto mb-6" />
          <p className="mb-6 text-lg font-medium leading-relaxed">
            En Luz Animal, te acompañamos en este momento tan delicado con humanidad, respeto y un servicio adaptado a tus necesidades. 
            <br />Contáctanos para ofrecerle a tu mascota una despedida digna y memorable.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-[var(--blue-700)] hover:bg-[var(--blue-500)] text-[var(--text-light)] px-8 py-4 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Solicitar Cremación Presencial
          </a>
        </div>
      </motion.section>
    </main>
  );
}