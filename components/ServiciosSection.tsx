"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import Script from "next/script";
import "@/app/styles/quien-somos.css";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

type Svc = {
  title: string;
  desc: string;
  img: string;
  href: string;
  badge?: string;
  bullets: string[];
  featured?: boolean;
};

const cards: Svc[] = [
  {
    title: "Incineración presencial",
    desc: "Despedida en sala privada, ceremonia personalizada y posibilidad de acompañar el proceso.",
    img: "/images/cremacion-presencial.jpg",
    href: "/servicios/incineracion-presencial",
    badge: "Más elegido",
    bullets: ["Sala privada y acompañamiento", "Ceremonia personalizada", "Urna y certificado incluidos"],
    featured: true,
  },
  {
    title: "Incineración individual",
    desc: "Servicio íntimo con devolución de cenizas en urna y trazabilidad exclusiva.",
    img: "/images/cremacion-individual.jpg",
    href: "/servicios/incineracion-individual",
    badge: "Con urna",
    bullets: ["Urna y certificado", "Entrega el mismo día*", "Trato personalizado"],
  },
  {
    title: "Incineración colectiva",
    desc: "Opción económica y responsable: proceso compartido sin devolución de cenizas.",
    img: "/images/cremacion-colectiva.jpg",
    href: "/servicios/incineracion-colectiva",
    bullets: ["Sin devolución de cenizas", "Mismo respeto y cuidado", "Gestión clara y rápida"],
  },
 {
    title: "Joyas con esencia",
    desc: "Convertimos una pequeña muestra (pelo o cenizas) en una joya conmemorativa única.",
    img: "/images/orygen-servicio.jpg",
    href: "/servicios/joyas-esencia",
    badge: "Nuevo",
    bullets: [
      "Muestras: pelo o cenizas",
      "Anillos, colgantes y pulseras",
      "Catálogo y asesoramiento personalizados"
    ]
  },
  {
    title: "Eutanasia a domicilio",
    desc: "Despedida tranquila en casa, con veterinario colegiado y guía empática.",
    img: "/images/eutanasia-servicio.png",
    href: "/servicios/eutanasia-a-domicilio",
    badge: "Atención 24/7",
    bullets: [
      "Veterinario colegiado",
      "Sedación previa y proceso indoloro",
      "Coordinación de cremación posterior"
    ]
  }
];

const SITE_URL = "https://www.luzanimal.com";

export default function ServiciosSection() {
  const reduce = useReducedMotion();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Servicios", "item": `${SITE_URL}/servicios` },
        ],
      },
      {
        "@type": "Service",
        "name": "Cremación de mascotas",
        "provider": { "@type": "LocalBusiness", "name": "Luz Animal" },
        "areaServed": ["Barcelona", "Granollers", "Catalunya"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Modalidades de cremación",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Incineración presencial" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Incineración individual" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Incineración colectiva" } },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@type": "Service",
                "name": "Joyas con esencia",
                "serviceType": "Joyería conmemorativa",
                "url": "https://www.luzanimal.com/servicios/joyas-esencia",
                "provider": { "@type": "LocalBusiness", "name": "Luz Animal" },
                "areaServed": "Barcelona y Granollers"
              }
            },
            {
              "@type": "ListItem",
              "position": 5,
              "item": {
                "@type": "Service",
                "name": "Eutanasia a domicilio",
                "serviceType": "VeterinaryCare",
                "url": "https://www.luzanimal.com/servicios/eutanasia-a-domicilio",
                "provider": { "@type": "LocalBusiness", "name": "Luz Animal" },
                "areaServed": "Barcelona y Granollers"
              }
            }
          ],
        },
      },
    ],
  };

  return (
    <main id="main" className="relative text-[var(--text-main)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--blue-50)] via-white to-[var(--blue-100)]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/noise.jpg')] opacity-[0.05]" />

      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative"
      >
        <section
          className="relative h-[42vh] md:h-[56vh] flex items-center justify-center overflow-hidden"
          aria-labelledby="servicios-title"
        >
          <Image
            src="/images/servicios-bg.jpg"
            alt="Servicios de cremación de mascotas de Luz Animal"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/20" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <h1 id="servicios-title" className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
              Nuestros servicios
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/95 leading-relaxed">
              Tres modalidades para acompañarte con cercanía y transparencia: <strong>presencial</strong>, <strong>individual</strong> y <strong>colectiva</strong>.
            </p>
          </div>
        </section>
      </motion.header>

      <nav aria-label="Migas de pan" className="relative z-10 max-w-7xl mx-auto px-6 py-3 text-sm">
        <ol className="flex flex-wrap items-center gap-2 text-blue-900/80">
          <li><Link href="/" className="hover:underline">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li className="text-blue-900 font-semibold">Servicios</li>
        </ol>
      </nav>

      <section
        aria-labelledby="lista-servicios"
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 mt-4"
      >
        <h2 id="lista-servicios" className="sr-only">Modalidades de cremación</h2>

        <motion.article
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="group grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_25px_60px_-25px_rgba(0,0,0,0.25)] hover:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.35)] transition-all"
        >
          <div className="relative md:col-span-6 lg:col-span-7 h-64 md:h-auto">
            <Image
              src={cards[0].img}
              alt="Incineración presencial con sala privada"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <span className="absolute top-4 left-4 rounded-full bg-white/95 text-blue-900 text-xs font-semibold px-3 py-1 shadow">
              {cards[0].badge}
            </span>
          </div>
          <div className="md:col-span-6 lg:col-span-5 p-7 md:p-9 flex flex-col">
            <h3 className="text-3xl font-extrabold text-blue-900">{cards[0].title}</h3>
            <p className="mt-2 text-[15px] text-blue-900 leading-relaxed">{cards[0].desc}</p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-blue-900/85">
              {cards[0].bullets.map((b) => <li key={b}>• {b}</li>)}
            </ul>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Link
                href={cards[0].href}
                className="inline-block text-center rounded-full bg-[var(--blue-700)] hover:bg-[var(--blue-600)] text-white px-6 py-3 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                aria-label="Ver detalles de Incineración Presencial"
              >
                Ver servicio
              </Link>
              <Link
                href="/calculadora"
                className="inline-block text-center rounded-full border-2 border-[var(--blue-700)] text-[var(--blue-700)] px-6 py-3 font-semibold hover:bg-[var(--blue-700)] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300"
                aria-label="Calcular precio de cremación presencial"
              >
                Calcular precio
              </Link>
            </div>
          </div>
        </motion.article>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.slice(1).map((s, i) => (
            <motion.article
              key={s.title}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_25px_60px_-25px_rgba(0,0,0,0.25)] border border-blue-100 hover:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-1"
            >
              <div className="relative h-56">
                <Image
                  src={s.img}
                  alt={`${s.title} en Luz Animal`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                {s.badge && (
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 text-blue-900 text-xs font-semibold px-3 py-1 shadow">
                    {s.badge}
                  </span>
                )}
              </div>
              <div className="p-6 md:p-7">
                <h3 className="text-2xl font-bold text-blue-900">{s.title}</h3>
                <p className="mt-2 text-[15px] text-blue-900 leading-relaxed">{s.desc}</p>

                <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-blue-900/85">
                  {s.bullets.map((b) => <li key={b}>• {b}</li>)}
                </ul>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Link
                    href={s.href}
                    className="inline-block text-center rounded-full border-2 border-[var(--blue-700)] text-[var(--blue-700)] px-5 py-2.5 font-semibold hover:bg-[var(--blue-700)] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300"
                    aria-label={`Ver detalles de ${s.title}`}
                  >
                    Ver servicio
                  </Link>
                  <Link
                    href="/calculadora"
                    className="inline-block text-center rounded-full bg-blue-100 text-blue-900 hover:bg-blue-200 px-5 py-2.5 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300"
                    aria-label={`Calcular precio de ${s.title}`}
                  >
                    Calcular precio
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        className="relative mt-16"
        aria-labelledby="cta-contacto"
      >
        <div className="mb-16 bg-gradient-to-r from-[var(--blue-500)] to-[var(--blue-700)] text-white py-12 md:py-14">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 id="cta-contacto" className="text-3xl md:text-4xl font-extrabold">
              ¿Tienes dudas o quieres un presupuesto a medida?
            </h2>
            <p className="mt-3 text-lg md:text-xl text-white/95">
              Nuestro equipo está disponible para ayudarte 24/7.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contacto"
                className="inline-block bg-white text-[var(--blue-700)] hover:bg-white/90 rounded-full px-8 py-4 font-semibold shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                Contacta ahora
              </Link>
              <Link
                href="/faq"
                className="inline-block bg-white/10 border border-white/40 text-white hover:bg-white/20 rounded-full px-8 py-4 font-semibold shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/60"
              >
                Ver preguntas frecuentes
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <Script id="ld-servicios" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </main>
  );
}