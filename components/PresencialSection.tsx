"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaCamera, FaDoorClosed, FaVideo, FaHeart, FaLeaf } from "react-icons/fa";
import Script from "next/script";
import "@/app/styles/quien-somos.css";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

const prices = [
  { weight: "Hasta 3 kg",  price: "260 €" },
  { weight: "3 – 10 kg",   price: "275 €" },
  { weight: "10 – 25 kg",  price: "290 €" },
  { weight: "25 – 40 kg",  price: "310 €" },
  { weight: "40+ kg",      price: "330 €" },
];

const extras = [
  "Velatorio íntimo con ambientación acogedora",
  "Transmisión en directo vía vídeo",
  "Huella conmemorativa en escayola",
  "Obsequio especial de despedida",
  "Zona de aparcamiento gratuito y Wi-Fi",
];

const features = [
  { icon: <FaDoorClosed />,  title: "Sala privada",        text: "Espacio exclusivo para tu familia, sin prisas." },
  { icon: <FaCamera />,      title: "Ceremonia con foto",  text: "Puedes traer una fotografía y recuerdos." },
  { icon: <FaVideo />,       title: "Streaming en directo",text: "Para familiares que no puedan asistir." },
  { icon: <FaHeart />,       title: "Acompañamiento",      text: "Apoyo emocional por profesionales 24/7." },
  { icon: <FaLeaf />,        title: "Cuidado respetuoso",  text: "Protocolos de trazabilidad y ética." },
];

const GALLERY = [
  { src: "/images/tanatorio-1.jpeg", alt: "Sala privada de velatorio" },
  { src: "/images/tanatorio-2.jpeg", alt: "Ambiente cálido con velas" },
  { src: "/images/tanatorio-3.jpeg", alt: "Zona de descanso para familias" },
  { src: "/images/tanatorio-4.jpeg", alt: "Detalle floral en la sala" },
];

const SITE_URL = "https://www.luzanimal.com";

export default function PresencialSection() {
  const reduce = useReducedMotion();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio",     "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Servicios",  "item": `${SITE_URL}/servicios` },
          { "@type": "ListItem", "position": 3, "name": "Cremación presencial", "item": `${SITE_URL}/servicios/incineracion-presencial` }
        ]
      },
      {
        "@type": "Service",
        "name": "Cremación presencial de mascotas",
        "serviceType": "Cremación presencial",
        "areaServed": ["Barcelona", "Granollers", "Catalunya"],
        "provider": { "@type": "LocalBusiness", "name": "Luz Animal" },
        "description": "Despedida en sala privada con ceremonia personalizada, trazabilidad y entrega de cenizas en urna.",
        "offers": prices.map((p) => ({
          "@type": "Offer",
          "price": p.price.replace(/\s?€/,""),
          "priceCurrency": "EUR",
          "category": p.weight,
          "url": `${SITE_URL}/servicios/incineracion-presencial`
        }))
      }
    ]
  };

  return (
    <main className="relative bg-[var(--blue-50)] text-[var(--text-main)] overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[var(--blue-300)] opacity-25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-[var(--blue-100)] opacity-30 rounded-full blur-2xl" />

      <motion.section
        className="relative h-[36rem] md:h-[60vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <Image
          src="/images/presencial-header.png"
          alt="Cremación presencial con sala privada en Luz Animal"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/25" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] mb-3">
            Cremación presencial para mascotas
          </h1>
          <p className="text-white/95 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Un último adiós lleno de amor y acompañamiento. Participa en el proceso en un entorno
            íntimo, cálido y respetuoso, rodeado de quienes más amaron a tu mascota.
          </p>
        </div>
      </motion.section>

      <div className="relative flex justify-center my-10 md:my-12">
        <div className="w-24 border-t-4 border-[var(--blue-500)]" />
        <div className="absolute top-1/2 -translate-y-1/2 bg-[var(--blue-500)] w-3 h-3 rounded-full" />
      </div>

      <motion.section
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeInUp}
      >
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-[var(--blue-700)] leading-snug">
            Una despedida significativa y personalizada
          </h2>
          <p className="leading-relaxed opacity-90">
            La <strong>cremación presencial</strong> está pensada para familias que desean vivir el
            último adiós con calma, respeto y privacidad. Permite <em className="font-semibold">estar presente</em>
            durante el proceso y despedirse en <strong>sala privada</strong>.
          </p>
          <p className="leading-relaxed opacity-90">
            Si alguien no puede acudir, ofrecemos <strong>transmisión en directo</strong> para que
            todos se sientan cerca en el momento de la despedida.
          </p>
          <ul className="list-disc pl-6 space-y-2 opacity-90 marker:text-[var(--blue-500)]">
            <li>Atención personalizada durante todo el proceso</li>
            <li>Acompañamiento emocional profesional</li>
            <li>Opciones conmemorativas exclusivas</li>
          </ul>
        </div>

        <motion.div
          className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-[var(--blue-100)]"
          whileHover={reduce ? {} : { scale: 1.02 }}
          transition={{ duration: 0.35 }}
        >
          <Image
            src="/images/precensial-page.jpeg"
            alt="Velatorio íntimo en cremación presencial"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>
      </motion.section>

      <motion.section
        className="mt-12 md:mt-16 max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h3 className="text-2xl font-semibold text-[var(--blue-700)] mb-6">Ventajas del servicio presencial</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-white border border-[var(--blue-100)] p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="text-[var(--blue-700)] text-xl">{f.icon}</div>
              <h4 className="mt-2 font-semibold text-blue-900">{f.title}</h4>
              <p className="text-sm text-blue-900/80 mt-1">{f.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="max-w-6xl mx-auto px-6 mt-12 md:mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h3 className="text-2xl font-semibold text-[var(--blue-700)] mb-4">Nuestra sala privada</h3>
        <p className="text-blue-900/85 max-w-3xl">
          Un espacio silencioso y acogedor para despedirte con calma. Puedes traer flores, cartas o una fotografía.
        </p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {GALLERY.map((g) => (
            <div key={g.src} className="relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-blue-100">
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="max-w-4xl mx-auto px-6 mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h3 className="text-2xl font-semibold mb-8 text-[var(--blue-700)] relative inline-block">
          Tarifas por peso
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[var(--blue-500)] to-[var(--blue-300)] rounded-full" />
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {prices.map(({ weight, price }) => (
            <div
              key={weight}
              className="flex justify-between items-center p-5 md:p-6 bg-white rounded-2xl border border-[var(--blue-100)] shadow-sm hover:shadow-md hover:border-[var(--blue-300)] transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--blue-500)] to-[var(--blue-300)]" />
              <span className="text-blue-900/90">{weight}</span>
              <span className="font-bold text-[var(--blue-700)]">{price}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-600">
          * Precios con IVA incluido. Confirmamos el presupuesto exacto por WhatsApp o teléfono según zona.
        </p>
      </motion.section>

      <motion.section
        className="mt-16 md:mt-20 bg-[var(--blue-100)] py-14 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.6),transparent)] opacity-70" />
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
          <h3 className="text-2xl font-semibold mb-4 text-[var(--blue-700)]">Servicios adicionales opcionales</h3>
          <p className="mb-6 text-blue-900/85">
            Personaliza la ceremonia con detalles únicos que convertirán esta despedida en un recuerdo imborrable:
          </p>
          <ul className="inline-block text-left list-disc list-inside space-y-2 text-blue-900/85 marker:text-[var(--blue-500)]">
            {extras.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="py-16 md:py-20 text-center relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue-50)] to-transparent" />
        <div className="relative mx-auto max-w-xl">
          <hr className="border-t-4 border-[var(--blue-500)] w-16 mx-auto mb-6" />
          <p className="mb-6 text-lg font-medium leading-relaxed text-blue-900/95">
            Te acompañamos con humanidad y respeto. Cuéntanos cómo quieres despedirte y lo preparamos contigo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contacto"
              className="inline-block bg-gradient-to-r from-[var(--blue-700)] to-[var(--blue-500)] hover:from-[var(--blue-600)] hover:to-[var(--blue-400)] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all"
            >
              Solicitar cremación presencial
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

      <Script id="ld-presencial" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </main>
  );
}