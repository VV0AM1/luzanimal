"use client";

import Image from "next/image";
import Script from "next/script";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import "@/app/styles/quien-somos.css";

const EASE = [0.25, 0.1, 0.25, 1] as const;
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const MODELOS = [
  { id: "elegance", name: "Anillo Elegance", img: "/images/anillo_elegance.jpg", price: "Consultar" },
  { id: "galaxy", name: "Colgante Huella", img: "/images/colgante_huella.jpg", price: "Consultar" },
  { id: "diamond", name: "Anillo Diamond", img: "/images/anillo_diamond.jpg", price: "Consultar" },
  { id: "bracelet", name: "Pulsera Minimal", img: "/images/pulsera_helix.jpg", price: "Consultar" },
];

const SITE = "https://www.luzanimal.com";

export default function JoyasEsenciaSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${SITE}/` },
          { "@type": "ListItem", "position": 2, "name": "Servicios", "item": `${SITE}/servicios` },
          { "@type": "ListItem", "position": 3, "name": "Joyas con esencia", "item": `${SITE}/servicios/joyas-esencia` }
        ]
      },
      {
        "@type": "Service",
        "name": "Joyas con esencia de mascotas",
        "serviceType": "Joyería conmemorativa",
        "provider": { "@type": "LocalBusiness", "name": "Luz Animal" },
        "areaServed": ["Barcelona","Granollers","Catalunya"],
        "description": "Anillos, colgantes y pulseras creados con una pequeña muestra (pelo o cenizas)."
      },
      {
        "@type": "ItemList",
        "itemListElement": MODELOS.map((m, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "item": {
            "@type": "Product",
            "name": m.name,
            "image": `${SITE}${m.img}`,
            "url": `${SITE}/servicios/joyas-esencia#${m.id}`,
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "price": 0,
              "availability": "https://schema.org/PreOrder",
              "description": "Consultar catálogo y presupuesto"
            }
          }
        }))
      }
    ]
  };

  return (
    <main  className="relative bg-[var(--blue-50)] text-[var(--text-main)]">
      <header className="relative h-[38vh] md:h-[48vh] flex items-center justify-center overflow-hidden">
        <Image src="/images/orygen-header.jpg" alt="Joyas con esencia" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/20" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow">
            Joyas con esencia de tu mascota
          </h1>
          <p className="mt-3 text-white/95">
            Convertimos una pequeña muestra (pelo o cenizas) en una joya conmemorativa única.
          </p>
        </div>
      </header>

      <nav aria-label="breadcrumb" className="max-w-7xl mx-auto px-6 py-3 text-sm">
        <ol className="flex gap-2 text-blue-900/80">
          <li><a href="/">Inicio</a></li><li aria-hidden>›</li><li><a href="/servicios">Servicios</a></li><li aria-hidden>›</li>
          <li className="font-semibold">Joyas con esencia</li>
        </ol>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900">Cómo funciona</h2>
            <p className="text-blue-900/90">
              Te asesoramos para escoger modelo, color y talla. Recogemos una pequeña muestra (pelo o cenizas) y el
              taller la integra en una resina/mineral con acabado premium.
            </p>
            <ul className="list-disc list-inside text-blue-900/85 space-y-1">
              <li>Modelos en acero, plata u oro (según catálogo).</li>
              <li>Acabados tipo “nebulosa”, piedra o cabujón.</li>
              <li>Presentación y garantía de autenticidad.</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="https://wa.me/34684416567" className="inline-block bg-[var(--blue-700)] hover:bg-[var(--blue-500)] text-white px-6 py-3 rounded-full font-semibold">
                Pedir catálogo por WhatsApp
              </a>
              <a href="/contacto" className="inline-block border-2 border-[var(--blue-700)] text-[var(--blue-700)] hover:bg-[var(--blue-700)] hover:text-white px-6 py-3 rounded-full font-semibold">
                Contacto
              </a>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
            <div className="grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] gap-6">
              {MODELOS.map(m => (
                <article id={m.id} key={m.id} className="rounded-2xl border border-blue-100 bg-white shadow hover:shadow-md transition">
                  <div className="relative h-48">
                    <Image src={m.img} alt={m.name} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" />
                    <span className="absolute top-3 right-3 bg-stone-800/90 text-white text-xs px-2 py-1 rounded-full">{m.price}</span>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-blue-900">{m.name}</h3>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Script id="ld-joyas-esencia" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </main>
  );
}