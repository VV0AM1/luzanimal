"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";
import "@/app/styles/quien-somos.css";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], 
    },
  },
};

const services = [
  {
    title: "Incineración Individual",
    desc:
      "Un homenaje íntimo: devolución de cenizas en urna, certificado y posibilidad de asistencia.",
    img: "/images/cremacion-individual.jpg",
    href: "/servicios/incineracion-individual",
    badge: "Más elegida",
  },
  {
    title: "Incineración Colectiva",
    desc:
      "Opción económica y responsable: proceso compartido sin devolución de cenizas.",
    img: "/images/cremacion-colectiva.jpg",
    href: "/servicios/incineracion-colectiva",
  },
];

const presencial = {
  title: "Incineración Presencial",
  desc:
    "Despedida en sala privada con acompañamiento. Ceremonia personalizada y seguimiento del proceso.",
  img: "/images/cremacion-presencial.jpg",
  href: "/servicios/incineracion-presencial",
  badge: "Recomendado",
};

export default function ServiciosSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://www.luzanimal.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Servicios",
            "item": "https://www.luzanimal.com/servicios",
          },
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
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Incineración individual" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Incineración colectiva" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Incineración presencial" } }
          ]
        }
      }
    ],
  };

  return (
    <main id="main" className="relative text-[var(--text-main)] overflow-hidden">
      {/* Background + texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--blue-50)] via-white to-[var(--blue-100)]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/noise.jpg')] opacity-[0.05]" />

      {/* HERO */}
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
            alt="Familia despidiéndose de su mascota con respeto"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/10" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <h1
              id="servicios-title"
              className="text-4xl md:text-5xl font-extrabold text-white drop-shadow"
            >
              Nuestros Servicios
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/95 leading-relaxed">
              Ofrecemos tres modalidades de cremación para acompañarte con
              cercanía y transparencia: individual, colectiva y presencial.
            </p>
          </div>
        </section>
      </motion.header>

      {/* MIGAS DE PAN */}
      <nav aria-label="Migas de pan" className="relative z-10 max-w-7xl mx-auto px-6 py-3 text-sm">
        <ol className="flex flex-wrap items-center gap-2 text-blue-900/80">
          <li>
            <Link href="/" className="hover:underline">Inicio</Link>
          </li>
          <li aria-hidden>›</li>
          <li className="text-blue-900 font-semibold">Servicios</li>
        </ol>
      </nav>

      {/* GRID: Individual + Colectiva */}
      <section
        aria-labelledby="lista-servicios"
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 mt-4 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <h2 id="lista-servicios" className="sr-only">
          Modalidades de cremación
        </h2>

        {services.map((s, i) => (
          <motion.article
            key={s.title}
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
                className="object-cover"
              />
              {s.badge && (
                <span className="absolute top-4 left-4 rounded-full bg-white/90 text-blue-900 text-xs font-semibold px-3 py-1 shadow">
                  {s.badge}
                </span>
              )}
            </div>
            <div className="p-6 md:p-7">
              <h3 className="text-2xl font-bold text-blue-900">{s.title}</h3>
              <p className="mt-2 text-[15px] text-blue-900 leading-relaxed">
                {s.desc}
              </p>

              <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-blue-900/85">
                {s.title.includes("Individual") ? (
                  <>
                    <li>• Urna y certificado incluidos</li>
                    <li>• Posibilidad de asistencia</li>
                    <li>• Trato personalizado</li>
                  </>
                ) : (
                  <>
                    <li>• Sin devolución de cenizas</li>
                    <li>• Mismo respeto y cuidado</li>
                    <li>• Gestión rápida y clara</li>
                  </>
                )}
              </ul>

              <div className="mt-6">
                <Link
                  href={s.href}
                  className="inline-block rounded-full border-2 border-[var(--blue-700)] text-[var(--blue-700)] px-5 py-2.5 font-semibold hover:bg-[var(--blue-700)] hover:text-white transition-colors"
                  aria-label={`Ver detalles de ${s.title}`}
                >
                  Ver servicio
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      {/* DESTACADO: Presencial */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        aria-labelledby="servicio-presencial"
        className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 mt-12"
      >
        <article className="bg-white rounded-3xl overflow-hidden border border-blue-100 shadow-[0_25px_60px_-25px_rgba(0,0,0,0.25)]">
          <div className="relative h-72 md:h-80">
            <Image
              src={presencial.img}
              alt="Incineración presencial con sala privada"
              fill
              className="object-cover"
            />
            <span className="absolute top-4 left-4 rounded-full bg-white/90 text-blue-900 text-xs font-semibold px-3 py-1 shadow">
              {presencial.badge}
            </span>
          </div>
          <div className="p-8 md:p-10">
            <h2 id="servicio-presencial" className="text-3xl font-extrabold text-blue-900">
              {presencial.title}
            </h2>
            <p className="mt-3 text-[15px] text-blue-900 leading-relaxed">{presencial.desc}</p>

            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-blue-900/85">
              <li>• Sala privada y acompañamiento</li>
              <li>• Ceremonia personalizada</li>
              <li>• Posibilidad de seguimiento del proceso</li>
              <li>• Urna y detalles conmemorativos</li>
            </ul>

            <div className="mt-7">
              <Link
                href={presencial.href}
                className="inline-block rounded-full bg-[var(--blue-700)] hover:bg-[var(--blue-500)] text-white px-6 py-3 font-semibold transition-colors"
                aria-label="Ver detalles de Incineración Presencial"
              >
                Ver servicio
              </Link>
            </div>
          </div>
        </article>
      </motion.section>

      {/* CTA final */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        className="relative mt-16"
        aria-labelledby="cta-contacto"
      >
        <div className="mb-16 bg-gradient-to-r from-[var(--blue-500)] to-[var(--blue-700)] text-white py-14">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 id="cta-contacto" className="text-3xl md:text-4xl font-extrabold">
              ¿Tienes dudas o quieres un presupuesto a medida?
            </h2>
            <p className="mt-3 text-lg md:text-xl text-white/95">
              Nuestro equipo está disponible para ayudarte 24/7.
            </p>
            <div className="mt-6">
              <Link
                href="/contacto"
                className="inline-block bg-white text-[var(--blue-700)] hover:bg-white/90 rounded-full px-8 py-4 font-semibold shadow-lg"
              >
                Contacta ahora
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}