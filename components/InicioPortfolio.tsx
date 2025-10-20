"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function InicioPortfolio() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center 
                       bg-black/90 text-white text-center px-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                Luz Animal — Proyecto de Portafolio
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                Esta web fue desarrollada para una empresa de{" "}
                <strong>cremación de mascotas</strong> en Barcelona.  
                Actualmente la empresa ha <strong>cerrado</strong>, pero el sitio se mantiene 
                como muestra de mi trabajo en{" "}
                <strong>desarrollo web</strong> y <strong>SEO profesional</strong>.
              </p>

              <p className="text-base md:text-lg text-white/70 mb-10">
                Desarrollado con <strong>Next.js + TailwindCSS</strong> y animaciones con{" "}
                <strong>Framer Motion</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setVisible(false)}
                  className="inline-flex items-center justify-center gap-2 
                             bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 
                             rounded-full font-semibold shadow-md transition 
                             focus-visible:ring-2 focus-visible:ring-offset-2 
                             focus-visible:ring-blue-400"
                  aria-label="Ver la página original"
                >
                  <FaExternalLinkAlt aria-hidden="true" />
                  Ver página
                </button>

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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}