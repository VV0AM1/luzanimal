"use client";

import Image from "next/image";
import Script from "next/script";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import TrayectoriaCarousel from "./Trayectoria";
import {
  FaHeart,
  FaPaw,
  FaHandsHelping,
  FaUsers,
} from "react-icons/fa";
import "@/app/styles/quien-somos.css";
import { useTracking } from "@/app/context/TrackingContext";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function QuienSomosSection() {
  const { trackEvent } = useTracking();

  return (
    <main className="bg-[var(--blue-50)] text-[var(--text-main)] overflow-hidden">
      <motion.section
        className="relative h-[70vh] flex items-center justify-center bg-[url('/images/quien-somos-hero-bg.jpg')] bg-cover bg-center shadow-[inset_0_0_140px_rgba(0,0,0,0.85)]"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-transparent" />
        <div className="absolute top-20 -left-20 w-72 h-72 bg-[var(--blue-300)] opacity-20 rounded-full blur-3xl animate-pulse" />

        <div className="relative z-10 text-center px-6 max-w-3xl space-y-4 text-[var(--text-light)]">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold drop-shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Luz Animal: Tu Apoyo en el Adiós
          </motion.h1>
          <p className="text-lg md:text-xl opacity-95">
            Expertos en <strong>cremación de mascotas en Barcelona</strong>: un
            servicio integral que une veterinaria, psicología del duelo y
            acompañamiento emocional.
          </p>
          <motion.a
            href="/contacto"
            className="inline-block bg-[var(--blue-500)] hover:bg-[var(--blue-300)] px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.07 }}
          >
            Contáctanos Ahora
          </motion.a>
        </div>
      </motion.section>

      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Más que un servicio, un acompañamiento
        </h2>
        <p className="text-lg opacity-90 leading-relaxed">
          En <strong>Luz Animal Barcelona</strong>, ofrecemos{" "}
          <em>cremación de mascotas</em> con total respeto y humanidad.
          Nuestro equipo combina experiencia veterinaria y apoyo psicológico
          para guiarte en este momento tan delicado. Descubre quiénes somos y
          por qué más de 2.500 familias ya han confiado en nosotros.
        </p>
      </section>

      <motion.article
        className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div>
          <h2 className="text-4xl font-bold mb-6">Nuestra Trayectoria</h2>
          <ul className="relative border-l-4 border-[var(--blue-500)] pl-6 space-y-8">
            {[
              { year: "2018", event: "Fundación de Luz Animal en Barcelona" },
              {
                year: "2020",
                event: "Primera sede con tanatorio y velatorio privado",
              },
              { year: "2022", event: "Más de 1.000 cremaciones realizadas" },
              { year: "2024", event: "Apoyo psicológico 24/7 para familias" },
            ].map((m, i) => (
              <li key={i} className="relative group">
                <span className="absolute -left-3 top-1 w-6 h-6 bg-gradient-to-br from-[var(--blue-500)] to-[var(--blue-700)] rounded-full border-4 border-white shadow-lg animate-pulse" />
                <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-md p-4 group-hover:shadow-xl transition-all">
                  <p className="text-lg">
                    <strong className="text-[var(--blue-700)]">
                      {m.year}
                    </strong>{" "}
                    – {m.event}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <TrayectoriaCarousel />
        </motion.div>
      </motion.article>

      <section className="bg-[var(--text-light)] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-[var(--text-main)] mb-4">
            Nuestros Valores Fundamentales
          </h2>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Guiamos cada servicio con empatía, dignidad y transparencia.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <FaHeart />,
              color: "from-pink-400 to-pink-600",
              title: "Empatía",
              desc: "Te atendemos con cercanía y respeto en tu momento más difícil.",
            },
            {
              icon: <FaHandsHelping />,
              color: "from-blue-400 to-blue-700",
              title: "Dignidad",
              desc: "Cada mascota recibe un adiós con el máximo cuidado y honor.",
            },
            {
              icon: <FaPaw />,
              color: "from-green-400 to-green-600",
              title: "Transparencia",
              desc: "Explicamos cada paso con claridad y honestidad.",
            },
          ].map((val, i) => (
            <motion.div
              key={i}
              className="rounded-3xl p-8 shadow-lg hover:shadow-2xl bg-gradient-to-br from-white to-[var(--blue-100)] border border-[var(--blue-100)] transition-all"
              whileHover={{ scale: 1.03 }}
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${val.color} text-white text-3xl mb-6 shadow-md`}
              >
                {val.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{val.title}</h3>
              <p className="opacity-90">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        className="py-20 px-6 bg-[var(--blue-50)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Conoce a Nuestro Equipo</h2>
            <p className="mb-6 opacity-90 leading-relaxed">
              Psicólogos, veterinarios y acompañantes emocionales con experiencia
              en duelo animal. Siempre disponibles para apoyarte de manera
              profesional y cercana.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaUsers className="text-xl text-[var(--blue-500)]" /> Psicólogos especializados en duelo
              </li>
              <li className="flex items-center gap-3">
                <FaPaw className="text-xl text-[var(--blue-500)]" /> Veterinarios con formación continua
              </li>
              <li className="flex items-center gap-3">
                <FaHeart className="text-xl text-[var(--blue-500)]" /> Acompañantes emocionales 24/7
              </li>
            </ul>
          </div>
          <motion.div
            className="overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/images/quien-somos-equipo.jpg"
              alt="Equipo profesional de Luz Animal Barcelona"
              width={700}
              height={450}
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="relative py-20 px-6 text-center text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(270deg, var(--blue-500), var(--blue-700), var(--blue-900))",
          backgroundSize: "600% 600%",
          animation: "gradientMove 15s ease infinite",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">¿Hablamos?</h2>
        <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
          Estamos aquí para resolver tus dudas, asesorarte y acompañarte en este momento tan importante.
        </p>
        <motion.a
          href="https://wa.me/34684416567"
          onClick={() =>
            trackEvent("whatsapp_click", {
              source: "QuienSomosSection - CTA",
              phone: "34684416567",
              timestamp: new Date().toISOString(),
            })
          }
          className="relative inline-block bg-white text-[var(--blue-700)] px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all overflow-hidden"
          whileHover={{ scale: 1.07 }}
        >
          <span className="relative z-10">Escríbenos por WhatsApp</span>
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-600 opacity-20 blur-xl animate-pulse"></span>
        </motion.a>
      </motion.section>



      <Script type="application/ld+json">
        {`{
          "@context":"https://schema.org",
          "@type":"LocalBusiness",
          "name":"Luz Animal Barcelona",
          "image":"https://www.luzanimal.com/images/quien-somos-hero-bg.jpg",
          "telephone":"+34 684 418 499",
          "address":{
            "@type":"PostalAddress",
            "streetAddress":"Carrer Severo Ochoa 43",
            "addressLocality":"Granollers",
            "postalCode":"08403",
            "addressCountry":"ES"
          },
          "geo":{"@type":"GeoCoordinates","latitude":41.6064,"longitude":2.2889},
          "openingHours":"Mo-Su 00:00-23:59"
        }`}
      </Script>
    </main>
  );
}