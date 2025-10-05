"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FaLeaf, FaCertificate, FaEuroSign } from "react-icons/fa";
import Script from "next/script";
import "@/app/styles/quien-somos.css";
import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const PRICES = [
  { weight: "Hasta 3 kg", price: "65 €" },
  { weight: "3 – 10 kg", price: "75 €" },
  { weight: "10 – 25 kg", price: "85 €" },
  { weight: "25 – 40 kg", price: "110 €" },
  { weight: "40+ kg", price: "130 €" },
];

const EXTRAS = [
  "Recogida a domicilio desde 20 € (según distancia)",
  "Suplemento festivos y fines de semana: +20 €",
  "Cuerpo en descomposición: +35 €",
];

const BENEFITS = [
  { icon: <FaCertificate />, title: "Proceso certificado", text: "Trazabilidad y control en todo momento." },
  { icon: <FaEuroSign />,    title: "Coste accesible",    text: "La opción más económica y transparente." },
  { icon: <FaLeaf />,        title: "Responsable con el entorno", text: "Gestión ambientalmente sostenible." },
];

const SITE_URL = "https://www.luzanimal.com";

export default function ColectivaSection() {
  const reduce = useReducedMotion();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Servicios", "item": `${SITE_URL}/servicios` },
          { "@type": "ListItem", "position": 3, "name": "Incineración colectiva", "item": `${SITE_URL}/servicios/incineracion-colectiva` }
        ]
      },
      {
        "@type": "Service",
        "name": "Incineración colectiva de mascotas",
        "serviceType": "Cremación colectiva",
        "provider": { "@type": "LocalBusiness", "name": "Luz Animal" },
        "areaServed": ["Barcelona", "Granollers", "Catalunya"],
        "description": "Alternativa económica y respetuosa sin devolución individual de cenizas.",
        "offers": PRICES.map(p => ({
          "@type": "Offer",
          "price": p.price.replace(/\s?€/, ""),
          "priceCurrency": "EUR",
          "category": p.weight,
          "url": `${SITE_URL}/servicios/incineracion-colectiva`
        }))
      }
    ]
  };

  return (
    <main className="relative bg-[var(--blue-50)] text-[var(--text-main)] overflow-hidden">
      <motion.section
        className="relative h-[36rem] md:h-[60vh] flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <Image
          src="/images/cremacion-colectiva.jpg"
          alt="Cremación colectiva de mascotas en Barcelona"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/25" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] mb-3">
            Incineración colectiva
          </h1>
          <p className="text-lg md:text-xl text-white/95 leading-relaxed">
            Opción económica, respetuosa y sencilla para despedir con dignidad.
            Servicio certificado y comprometido con el medio ambiente.
          </p>
        </div>
      </motion.section>

      <div className="relative flex justify-center my-10 md:my-12">
        <div className="w-24 border-t-4 border-[var(--blue-500)]" />
        <div className="absolute top-1/2 -translate-y-1/2 bg-[var(--blue-500)] w-3 h-3 rounded-full" />
      </div>

      <motion.section
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInUp}
      >
        <div className="space-y-6 min-w-0">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
            ¿Qué es la <span className="bg-gradient-to-r from-[var(--blue-700)] to-[var(--blue-500)] bg-clip-text text-transparent">cremación colectiva</span>?
          </h2>
          <p className="text-blue-900/90 leading-relaxed">
            Es la alternativa más <strong>económica y ecológica</strong>. Mantiene la dignidad del proceso,
            sin entrega individual de cenizas. Nosotros nos ocupamos de todo con respeto y empatía.
          </p>

          <div className="rounded-3xl bg-white/70 backdrop-blur-sm ring-1 ring-blue-100 p-4 sm:p-5">
            <ul className="grid items-stretch min-w-0 [grid-template-columns:repeat(auto-fit,minmax(190px,1fr))] gap-3 sm:gap-4">
              {BENEFITS.map(b => (
                <li key={b.title} className="h-full min-w-0">
                  <div className="h-full grid grid-rows-[auto_auto_1fr] rounded-2xl border border-blue-100 bg-white p-4 shadow-sm hover:shadow-md transition">
                    <div className="text-[var(--blue-700)] text-2xl mb-1" aria-hidden>{b.icon}</div>
                    <h3 className="font-semibold text-blue-900 leading-snug">{b.title}</h3>
                    <p className="text-sm text-blue-900/80 mt-1">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          className="relative h-72 md:h-[26rem] rounded-2xl overflow-hidden shadow-xl border border-blue-100"
          whileHover={reduce ? {} : { scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/images/colectiva-section.jpg"
            alt="Instalaciones para cremación colectiva"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        </motion.div>
      </motion.section>

      <motion.section
        className="max-w-4xl mx-auto px-6 mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInUp}
      >
        <h3 className="text-2xl font-semibold mb-8 text-[var(--blue-700)] relative inline-block">
          Tarifas por peso
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[var(--blue-500)] to-[var(--blue-300)] rounded-full" />
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {PRICES.map(({ weight, price }) => (
            <div
              key={weight}
              className="flex justify-between items-center p-5 md:p-6 bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-300 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--blue-500)] to-[var(--blue-300)]" />
              <span className="text-blue-900/90">{weight}</span>
              <span className="font-bold text-[var(--blue-700)]">{price}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-600">
          * Precios con IVA. Confirmamos el presupuesto exacto por WhatsApp o teléfono según zona.
        </p>
      </motion.section>

      <motion.section
        className="mt-16 md:mt-20 bg-gradient-to-br from-[var(--blue-100)] via-[var(--blue-50)] to-white py-14 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-[url('/images/noise.jpg')] opacity-10" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h3 className="text-2xl font-semibold mb-4 text-[var(--blue-700)]">Servicios adicionales</h3>
          <p className="mb-6 text-blue-900/85">Añade comodidad y flexibilidad según tus necesidades:</p>
          <ul className="inline-block text-left list-disc list-inside space-y-2 text-blue-900/85 marker:text-[var(--blue-500)]">
            {EXTRAS.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="py-16 md:py-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInUp}
      >
        <div className="mx-auto max-w-xl">
          <hr className="border-t-4 border-[var(--blue-500)] w-16 mx-auto mb-6 rounded-full" />
          <p className="mb-6 text-lg font-medium text-blue-900/95">
            Reserva tu servicio de cremación colectiva hoy y garantiza un adiós digno y accesible.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contacto"
              className="inline-block bg-gradient-to-r from-[var(--blue-700)] to-[var(--blue-500)] hover:from-[var(--blue-600)] hover:to-[var(--blue-400)] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all"
            >
              Solicitar servicio
            </a>
            <a
              href="/calculadora"
              className="inline-block border-2 border-[var(--blue-700)] text-[var(--blue-700)] hover:bg-[var(--blue-700)] hover:text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Calcular precio
            </a>
          </div>
        </div>
      </motion.section>

      <Script id="ld-colectiva" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </main>
  );
}