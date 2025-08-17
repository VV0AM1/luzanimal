"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaPaw, FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import "@/app/styles/quien-somos.css";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex justify-center items-center overflow-hidden bg-gray-900"
    >
      <Image
        src="/images/pet_bg.jpg"
        alt="Cremación de mascotas en Barcelona - Luz Animal"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/20 z-10" />

      {[
        { top: "15%", left: "20%", delay: 0 },
        { top: "35%", left: "75%", delay: 2 },
        { top: "70%", left: "45%", delay: 4 },
      ].map((pos, i) => (
        <motion.div
          key={i}
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
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
          Incineracion de Mascotas en Barcelona
        </h1>
        <h2 className="mt-2 text-xl md:text-2xl text-blue-100 font-medium">
          Un adiós con amor, respeto y acompañamiento 24h
        </h2>

        <p className="mt-4 text-lg md:text-xl text-blue-100 leading-relaxed">
          Acompañamos a familias en el momento más delicado con empatía,
          transparencia y el máximo cuidado. Tu mascota merece una despedida
          digna y personalizada.
        </p>

        <div className="mt-4 text-base text-blue-200 italic">
          Más de 500 familias ya confiaron en nosotros
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contacto"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow-md transition"
          >
            Contáctanos Ahora – Servicio 24h
          </Link>
          <Link
            href="/quien-somos"
            className="inline-block border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-200 px-8 py-3 rounded-full font-semibold transition"
          >
            Conócenos
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <FaChevronDown size={28} className="animate-bounce opacity-70" />
      </motion.div>
    </section>
  );
}