"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaPaw, FaChevronDown } from "react-icons/fa";
import "@/app/styles/quien-somos.css";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-[url('/images/pet_bg.jpg')] bg-cover bg-center overflow-hidden flex justify-center items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent z-10" />

      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-[var(--blue-300)] opacity-20 rounded-full"
        initial={{ scale: 0.8, opacity: 0.1 }}
        animate={{ scale: 1.2, opacity: 0.2 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-5%] w-72 h-72 bg-[var(--blue-700)] opacity-10 rounded-full"
        initial={{ scale: 1.1, opacity: 0.05 }}
        animate={{ scale: 0.9, opacity: 0.15 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      {[
        { top: "10%", left: "20%", delay: 0 },
        { top: "30%", left: "75%", delay: 2 },
        { top: "65%", left: "40%", delay: 4 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: pos.top, left: pos.left }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.3, 0], y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: pos.delay }}
        >
          <FaPaw className="w-12 h-12 text-[var(--blue-100)]" />
        </motion.div>
      ))}

      <motion.div
        className="relative z-20 flex flex-col items-center text-center px-4 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--text-light)] drop-shadow-lg">
          Un Adiós con Amor y Respeto
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[var(--blue-100)] leading-relaxed">
          Cremación de mascotas en Barcelona con un cuidado cercano, profesional y completamente
          personalizado para tu mejor amigo.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contacto"
            className="inline-block bg-[var(--blue-500)] hover:bg-[var(--blue-300)] text-[var(--text-light)] px-8 py-3 rounded-full font-semibold shadow-lg transition"
          >
            Contáctanos Ahora
          </Link>
          <Link
            href="/quien-somos"
            className="inline-block border-2 border-[var(--blue-500)] hover:bg-[var(--blue-500)] hover:text-[var(--text-light)] text-[var(--blue-500)] px-8 py-3 rounded-full font-semibold transition"
          >
            Conócenos
          </Link>
        </div>
      </motion.div>

=      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[var(--text-light)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <FaChevronDown size={24} className="animate-bounce" />
      </motion.div>
    </section>
  );
}