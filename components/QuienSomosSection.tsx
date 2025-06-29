"use client";

import Image from "next/image";
import Script from "next/script";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaPaw,
  FaHandsHelping,
  FaUsers,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "@/app/styles/quien-somos.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function QuienSomosSection() {
  return (
    <main className="bg-[var(--blue-50)] text-[var(--text-main)] overflow-hidden">
      <motion.section
        className="relative h-[70vh] flex items-center justify-center bg-[url('/images/quien-somos-hero-bg.jpg')] bg-cover bg-center shadow-[inset_0_0_80px_rgba(0,0,0,0.8)]"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-transparent" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[var(--blue-300)] opacity-20 rounded-full" />
        <div className="relative z-10 text-center px-6 max-w-3xl space-y-4 text-[var(--text-light)]">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold drop-shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Luz Animal: Tu Apoyo en el Adiós
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Expertos en cremación de mascotas en Barcelona: un servicio integral que une
            veterinaria, psicología del duelo y acompañamiento emocional.
          </motion.p>
          <motion.a
            href="/contacto"
            className="inline-block bg-[var(--blue-500)] hover:bg-[var(--blue-300)] px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Contáctanos Ahora
          </motion.a>
        </div>
      </motion.section>

      <motion.article
        className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Timeline/Text */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Nuestra Trayectoria y Hitos</h2>
          <p className="leading-relaxed opacity-90">
            Desde 2018, Luz Animal ha acompañado con humanidad a más de 2.500 familias en Barcelona
            y alrededores. Nuestro compromiso es ofrecer un proceso transparente, respetuoso y
            técnicamente impecable.
          </p>

          <ul className="border-l-4 border-[var(--blue-500)] pl-6 space-y-4">
            {[
              { year: "2018", event: "Fundación de Luz Animal en Barcelona" },
              { year: "2020", event: "Primera sede con tanatorio y velatorio privado" },
              { year: "2022", event: "Más de 1.000 cremaciones realizadas" },
              { year: "2024", event: "Lanzamiento de apoyo psicológico 24/7" },
            ].map((m, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaClock className="mt-1 text-[var(--blue-700)] w-5 h-5" />
                <div>
                  <strong className="block">{m.year}</strong>
                  <span className="opacity-90">{m.event}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Smaller Image, next to timeline */}
        <motion.div
          className="relative w-full md:w-auto max-w-md h-48 md:h-64 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src="/images/quien-somos-historia.jpg"
            alt="Interior de Luz Animal, instalaciones modernas"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.article>

      <section className="bg-[var(--text-light)] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12 space-y-4">
          <motion.h2
            className="text-4xl font-bold text-[var(--text-main)]"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Nuestros Valores Fundamentales
          </motion.h2>
          <p className="max-w-2xl mx-auto opacity-90">
            Guiamos cada servicio con empatía, dignidad y total transparencia. Estas son las
            bases de todo lo que hacemos.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaHeart className="text-5xl text-pink-500" />,
              title: "Empatía",
              desc: "Comprendemos tu dolor y te atendemos con cercanía.",
            },
            {
              icon: <FaHandsHelping className="text-5xl text-blue-700" />,
              title: "Dignidad",
              desc: "Cada despedida se realiza con el máximo respeto.",
            },
            {
              icon: <FaPaw className="text-5xl text-green-500" />,
              title: "Transparencia",
              desc: "Te explicamos cada paso y garantizamos claridad total.",
            },
          ].map((val, i) => (
            <motion.div
              key={i}
              className="bg-[var(--blue-100)] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="mb-6">{val.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{val.title}</h3>
              <p className="opacity-90">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        className="py-20 px-6 bg-[var(--blue-50)]"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Conoce a Nuestro Equipo</h2>
            <p className="mb-4 opacity-90 leading-relaxed">
              Psicólogos, veterinarios y acompañantes emocionales con años de experiencia
              en duelo animal. Nuestro equipo está siempre disponible para apoyarte de manera
              profesional y cercana.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 hover:text-[var(--blue-500)] transition-colors">
                <FaUsers className="text-xl" /> Psicólogos especializados en duelo
              </li>
              <li className="flex items-center gap-3 hover:text-[var(--blue-500)] transition-colors">
                <FaPaw className="text-xl" /> Veterinarios con vocación y formación continua
              </li>
              <li className="flex items-center gap-3 hover:text-[var(--blue-500)] transition-colors">
                <FaHeart className="text-xl" /> Acompañantes emocionales 24/7
              </li>
            </ul>
          </div>
          <motion.div
            className="overflow-hidden rounded-3xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/images/quien-somos-equipo.jpg"
              alt="Equipo profesional Luz Animal"
              width={700}
              height={450}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 px-6 text-center bg-[var(--blue-300)] text-[var(--text-main)]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6">¿Hablamos?</h2>
        <p className="text-xl mb-8 opacity-90">
          Estamos aquí para resolver tus dudas, ofrecerte asesoramiento personalizado y
          acompañarte en este momento tan importante.
        </p>
        <motion.a
          href="https://wa.me/34684418499"
          className="inline-block bg-[var(--blue-700)] hover:bg-[var(--blue-500)] text-[var(--text-light)] px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          whileHover={{ scale: 1.05 }}
        >
          Escríbenos por WhatsApp
        </motion.a>
      </motion.section>

      <Script type="application/ld+json">
        {`{
          "@context":"https://schema.org",
          "@type":"LocalBusiness",
          "name":"Luz Animal Barcelona",
          "image":"https://www.luzanimalbarcelona.com/images/quien-somos-hero-bg.jpg",
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