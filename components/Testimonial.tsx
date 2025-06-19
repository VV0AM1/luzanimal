'use client';

import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Laura G.',
    comment:
      'El servicio fue impecable y muy humano. Me ayudaron mucho en un momento difícil.',
  },
  {
    name: 'Carlos M.',
    comment:
      'Agradezco la atención personalizada y el respeto que tuvieron con mi perro.',
  },
  {
    name: 'Sofía R.',
    comment:
      'Recomiendo Cremación Mascotas BCN a todos los que buscan un servicio serio y cercano.',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 py-20 px-6 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-12 tracking-tight">
          Reseñas
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map(({ name, comment }, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl border border-blue-100 transition-all duration-300 group"
            >
              <FaQuoteLeft className="text-blue-200 text-3xl absolute top-4 left-4 group-hover:text-blue-400 transition" />
              <p className="text-gray-700 mt-8 mb-6 leading-relaxed text-sm">
                “{comment}”
              </p>
              <footer className="text-blue-600 font-semibold text-sm">— {name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}