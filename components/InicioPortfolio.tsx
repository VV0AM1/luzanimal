"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function InicioPortfolio(){
  return (
    <main
      className="min-h-screen flex flex-col justify-center items-center 
                 bg-gray-950 text-white px-6 text-center"
    >
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Luz Animal — Proyecto de Portafolio
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
          Esta página fue desarrollada para una empresa de{" "}
          <strong>cremación de mascotas</strong> en Barcelona.  
          Actualmente la empresa ha <strong>cerrado</strong>, pero el sitio se mantiene como{" "}
          parte de mi portafolio para mostrar mi trabajo en{" "}
          <strong>desarrollo web</strong> y <strong>optimización SEO</strong>.
        </p>

        <p className="text-base md:text-lg text-white/70 mb-10">
          Realicé el diseño, desarrollo en <strong>Next.js + Tailwind</strong>,
          animaciones con <strong>Framer Motion</strong> y posicionamiento SEO.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/home-preview"
            className="inline-flex items-center justify-center gap-2 
                       bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 
                       rounded-full font-semibold shadow-md transition 
                       focus-visible:ring-2 focus-visible:ring-offset-2 
                       focus-visible:ring-blue-400"
            aria-label="Ver la página de demostración"
          >
            <FaExternalLinkAlt aria-hidden="true" />
            Ver página
          </Link>

          <a
            href="https://github.com/VV0AM1/luzanimal" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 
                       bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 
                       rounded-full font-semibold shadow-md transition 
                       focus-visible:ring-2 focus-visible:ring-offset-2 
                       focus-visible:ring-gray-500"
            aria-label="Ver código y configuración SEO en GitHub"
          >
            <FaGithub aria-hidden="true" />
            Ver código SEO
          </a>
        </div>
      </motion.div>
    </main>
  );
}
