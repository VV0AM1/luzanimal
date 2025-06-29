"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar, FaPaw } from "react-icons/fa";
import "@/app/styles/quien-somos.css";

const testimonials = [
  {
    name: "Laura G.",
    comment:
      "El servicio fue impecable y muy humano. Me ayudaron mucho en un momento difícil.",
    rating: 5,
  },
  {
    name: "Carlos M.",
    comment:
      "Agradezco la atención personalizada y el respeto que tuvieron con mi perro.",
    rating: 5,
  },
  {
    name: "Sofía R.",
    comment:
      "Recomiendo Cremación Mascotas BCN a todos los que buscan un servicio serio y cercano.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative bg-[var(--blue-50)] py-20 px-6 overflow-hidden"
    >
      <FaPaw className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[var(--blue-100)] text-[20rem] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[var(--text-main)] mb-4 tracking-tight">
          Reseñas de Clientes
        </h2>
        <p className="text-[var(--blue-700)] mb-12 max-w-2xl mx-auto">
          Conoce la experiencia de quienes confiaron en Luz Animal para despedir
          a sus mascotas con respeto y cariño.
        </p>

        <motion.div
          className="grid gap-10 md:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {testimonials.map(({ name, comment, rating }, i) => (
            <motion.blockquote
              key={i}
              className="relative bg-white rounded-3xl p-8 pt-4 shadow-lg transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 hover:rotate-[0.5deg] border-t-4 border-[var(--blue-500)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FaQuoteLeft className="text-[var(--blue-300)] text-2xl absolute top-4 left-4" />
              <p className="text-gray-800 mt-8 mb-6 leading-relaxed text-base">
                “{comment}”
              </p>
              <div className="flex items-center justify-center mb-4">
                {[...Array(rating)].map((_, idx) => (
                  <FaStar
                    key={idx}
                    className="text-[var(--blue-500)] w-5 h-5"
                  />
                ))}
              </div>
              <footer className="text-[var(--blue-700)] font-semibold text-lg">
                — {name}
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}