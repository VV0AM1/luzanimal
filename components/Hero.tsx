"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaPaw, FaChevronDown, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import "@/app/styles/quien-somos.css";

export default function Hero() {
  return (
    <header
       id="home"
       role="banner"
      className="relative min-h-[calc(100dvh-56px)] pt-[calc(56px+clamp(16px,6vh,48px))] pb-28 md:pb-0 flex justify-center items-center overflow-hidden bg-gray-900"       
      style={{ paddingBottom: "max(env(safe-area-inset-bottom), 7rem)" }}
     >
      <Image
        src="/images/pet_bg.jpg"
        alt="Sala de despedida para cremación de mascotas en Barcelona - Luz Animal"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/30 z-10" />
      {[
        { top: "15%", left: "20%", delay: 0 },
        { top: "35%", left: "75%", delay: 2 },
        { top: "70%", left: "45%", delay: 4 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          className="absolute z-10"
          style={{ top: pos.top, left: pos.left }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.2, 0], y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: pos.delay }}
        >
          <FaPaw className="w-10 h-10 text-[var(--blue-200)] opacity-40" />
        </motion.div>
      ))}

      <motion.div
        className="relative z-20 flex flex-col items-center text-center px-6 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h1
          id="hero-title"
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
        >
          Incineración de mascotas en Barcelona
        </h1>

        <p className="mt-3 text-xl md:text-2xl text-white/95 font-semibold">
          Un adiós con amor, respeto y <strong>recogida 24h</strong>
        </p>

        <p className="mt-4 text-base md:text-xl text-white/90 leading-relaxed">
          Cremación <strong>individual</strong>, <strong>presencial</strong> o <strong>colectiva</strong> con
          <strong> trazabilidad</strong>, <strong>urna</strong> y <strong>certificado</strong>. Atención cercana en Barcelona y Granollers.
        </p>

        <div className="mt-4 text-base text-blue-200">
          Cientos de familias ya han confiado en nosotros.
        </div>

        <div className="mt-8 flex flex-col align-text-center sm:flex-row gap-4">
          <a
            href="tel:+34684418499"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400"
            aria-label="Llamar ahora a Luz Animal. Servicio 24 horas."
          >
            <FaPhoneAlt aria-hidden="true" />
            Llamar 24h
          </a>

          <a
            href="https://wa.me/34684416567"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-600/90 hover:to-green-500/90 text-white px-8 py-3 rounded-full font-semibold shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-400"
            aria-label="Escríbenos por WhatsApp ahora"
          >
            <FaWhatsapp aria-hidden="true" />
            WhatsApp ahora
          </a>

          <Link
            href="/quien-somos"
            className="inline-flex items-center justify-center border-2 border-blue-400/80 hover:bg-blue-500 hover:border-blue-500 hover:text-white text-blue-100 px-8 py-3 rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300"
            aria-label="Conoce al equipo de Luz Animal"
          >
            Conócenos
          </Link>
        </div>

        <ul className="mt-8 mb-16 sm:mb-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-white/90 ">
          <li className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur border border-white/10 font-semibold">Recogida urgente 24/7</li>
          <li className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur border border-white/10 font-semibold">Urna y certificado incluidos*</li>
          <li className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur border border-white/10 font-semibold">Sala privada en Granollers</li>
        </ul>
      </motion.div>

      <motion.div
        className="absolute bottom-10 sm:bottom-8 left-1/2 -translate-x-1/2 text-white z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Link
          href="#proceso"
          className="group inline-flex flex-col items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 rounded-full"
          aria-label="Bajar para ver el proceso de cremación"
        >
          <FaChevronDown size={28} className="animate-bounce opacity-80 group-hover:opacity-100" aria-hidden="true" />
          <span className="sr-only">Ver proceso</span>
        </Link>
      </motion.div>
    </header>
  );
}