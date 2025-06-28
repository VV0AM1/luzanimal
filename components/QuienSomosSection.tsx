"use client";

import Image from "next/image";
import Script from "next/script";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaPaw,
  FaHandsHelping,
  FaUsers,
} from "react-icons/fa";
import "@/app/styles/quien-somos.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function QuienSomosSection() {
  return (
    <main className="bg-[var(--blue-50)] text-[var(--text-main)]">
      <motion.section
        className="relative h-[70vh] flex items-center justify-center bg-[url('/images/quien-somos-hero-bg.jpg')] bg-cover bg-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
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
            Expertos en cremación de mascotas en Barcelona, te acompañamos con respeto y profesionalidad.
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
        className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Nuestra Trayectoria</h2>
          <p>
            Desde 2018, en Barcelona, Luz Animal nació para brindar un adiós con humanidad. Más de 2.500 familias han confiado en nosotros.
          </p>
          <p>
            Nuestro equipo combina veterinaria, psicología del duelo y acompañamiento emocional para un servicio integral y personalizado.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Procesos certificados y respetuosos</li>
            <li>Acompañamiento profesional 24/7</li>
            <li>Despedidas personalizadas</li>
          </ul>
        </div>
        <motion.div
          className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src="/images/quien-somos-historia.jpg"
            alt="Interior Luz Animal"
            width={700}
            height={450}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.article>

      <section className="bg-[var(--text-light)] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-[var(--text-main)]"
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Nuestros Valores Fundamentales
          </motion.h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: <FaHeart className="text-5xl text-pink-500" />, title: 'Empatía', desc: 'Acompañamos tu dolor con comprensión.' },
            { icon: <FaHandsHelping className="text-5xl text-blue-700" />, title: 'Dignidad', desc: 'Un adiós lleno de respeto.' },
            { icon: <FaPaw className="text-5xl text-green-500" />, title: 'Transparencia', desc: 'Claridad en cada paso.' },
          ].map((val, i) => (
            <motion.div
              key={i}
              className="bg-[var(--blue-100)] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="mb-6">{val.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{val.title}</h3>
              <p>{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        className="py-20 px-6 bg-[var(--blue-50)]"
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Nuestro Equipo</h2>
            <p className="mb-4">
              Psicólogos, veterinarios y acompañantes emocionales comprometidos con tu bienestar.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 hover:text-[var(--blue-500)] transition-colors">
                <FaUsers className="text-xl" /> Psicólogos especializados
              </li>
              <li className="flex items-center gap-3 hover:text-[var(--blue-500)] transition-colors">
                <FaPaw className="text-xl" /> Veterinarios con vocación
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
              alt="Equipo Luz Animal"
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
        <p className="text-xl mb-8">
          Estamos aquí para resolver tus dudas y ofrecerte apoyo emocional.
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
            "streetAddress":"Carrer Ejemplo, 123",
            "addressLocality":"Barcelona",
            "postalCode":"08001",
            "addressCountry":"ES"
          },
          "geo":{"@type":"GeoCoordinates","latitude":41.3851,"longitude":2.1734},
          "openingHours":"Mo,Tu,We,Th,Fr 09:00-18:00"
        }`}
      </Script>
    </main>
  );
}