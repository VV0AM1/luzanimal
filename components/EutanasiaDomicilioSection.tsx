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

const SITE = "https://www.luzanimal.com";

export default function EutanasiaDomicilioSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${SITE}/` },
          { "@type": "ListItem", "position": 2, "name": "Servicios", "item": `${SITE}/servicios` },
          { "@type": "ListItem", "position": 3, "name": "Eutanasia a domicilio", "item": `${SITE}/servicios/eutanasia-a-domicilio` }
        ]
      },
      {
        "@type": "MedicalBusiness",
        "@id": `${SITE}#veterinary`,
        "name": "Servicio veterinario a domicilio",
        "medicalSpecialty": "VeterinaryCare",
        "areaServed": ["Barcelona","Granollers","Catalunya"],
        "url": `${SITE}/servicios/eutanasia-a-domicilio`,
        "description": "Eutanasia a domicilio con veterinario colegiado y acompañamiento empático."
      },
      {
        "@type": "Service",
        "name": "Eutanasia a domicilio para mascotas",
        "serviceType": "VeterinaryCare",
        "provider": { "@id": `${SITE}#veterinary` },
        "areaServed": ["Barcelona","Granollers","Catalunya"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Cómo es el procedimiento?",
            "acceptedAnswer": { "@type": "Answer", "text": "El veterinario realiza una valoración, administra sedación suave para evitar ansiedad y, cuando la familia está preparada, aplica la medicación final de forma indolora." }
          },
          {
            "@type": "Question",
            "name": "¿Pueden encargarse de la cremación?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sí. Podemos recoger a tu compañero tras la visita y gestionar la cremación (individual, presencial o colectiva), con certificado y opciones de urnas." }
          },
          {
            "@type": "Question",
            "name": "¿En qué zonas trabajáis?",
            "acceptedAnswer": { "@type": "Answer", "text": "Barcelona, Vallès y municipios cercanos. Confirmamos disponibilidad y desplazamiento por WhatsApp o teléfono." }
          }
        ]
      }
    ]
  };

  return (
    <main className="relative bg-[var(--blue-50)] text-[var(--text-main)]">
      <header className="relative h-[38vh] md:h-[48vh] flex items-center justify-center overflow-hidden">
        <Image src="/images/eutanasia-header.jpeg" alt="Eutanasia a domicilio" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/20" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow">
            Eutanasia a domicilio
          </h1>
          <p className="mt-3 text-white/95">
            Despedida tranquila en casa con veterinario colegiado y acompañamiento empático.
          </p>
        </div>
      </header>

      <nav aria-label="breadcrumb" className="max-w-7xl mx-auto px-6 py-3 text-sm">
        <ol className="flex gap-2 text-blue-900/80">
          <li><a href="/">Inicio</a></li><li aria-hidden>›</li><li><a href="/servicios">Servicios</a></li><li aria-hidden>›</li>
          <li className="font-semibold">Eutanasia a domicilio</li>
        </ol>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-12 items-start">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900">Cómo os acompañamos</h2>
          <p className="text-blue-900/90">
            El veterinario explica cada paso y resuelve dudas. Primero una <strong>sedación suave</strong> para que tu compañero descanse; cuando estéis listos, se administra la medicación final de forma <strong>indolora y pacífica</strong>.
          </p>
          <ul className="list-disc list-inside text-blue-900/85 space-y-1">
            <li>Valoración previa y recomendaciones (hidratación, postura, entorno).</li>
            <li>Tiempo para despedirse con calma, sin prisas.</li>
            <li>Posibilidad de gestionar la cremación inmediatamente después.</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="https://wa.me/34684416567" className="inline-block bg-[var(--blue-700)] hover:bg-[var(--blue-500)] text-white px-6 py-3 rounded-full font-semibold">
              Consultar disponibilidad 24/7
            </a>
            <a href="/contacto" className="inline-block border-2 border-[var(--blue-700)] text-[var(--blue-700)] hover:bg-[var(--blue-700)] hover:text-white px-6 py-3 rounded-full font-semibold">
              Contacto
            </a>
          </div>
          <p className="text-sm text-blue-900/70">
            * Servicio realizado por veterinarios colegiados. Podemos coordinar informes con tu clínica habitual si lo deseas.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
          <div className="rounded-2xl overflow-hidden border border-blue-100 shadow">
            <Image src="/images/eutanasia-servicio.png" alt="Acompañamiento en casa" width={1200} height={800} className="w-full h-auto object-cover" />
          </div>
          <div className="mt-6 grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] gap-4">
            <div className="rounded-xl bg-white p-4 border border-blue-100">
              <h3 className="font-semibold text-blue-900">Zonas</h3>
              <p className="text-blue-900/80 text-sm">Barcelona, Vallès y municipios cercanos.</p>
            </div>
            <div className="rounded-xl bg-white p-4 border border-blue-100">
              <h3 className="font-semibold text-blue-900">Horario</h3>
              <p className="text-blue-900/80 text-sm">Atención y coordinación 24/7.</p>
            </div>
            <div className="rounded-xl bg-white p-4 border border-blue-100">
              <h3 className="font-semibold text-blue-900">Después</h3>
              <p className="text-blue-900/80 text-sm">Cremación individual o presencial, urnas y recordatorios.</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-gradient-to-r from-[var(--blue-500)] to-[var(--blue-700)] text-white py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">¿Hablamos ahora?</h2>
          <p className="mt-2 text-white/95">Te orientamos sin compromiso y confirmamos disponibilidad.</p>
          <div className="mt-6">
            <a href="https://wa.me/34684416567" className="inline-block bg-white text-[var(--blue-800)] hover:bg-white/95 rounded-full px-7 py-3 font-semibold shadow-lg">
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Script id="ld-eutanasia-domicilio" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </main>
  );
}