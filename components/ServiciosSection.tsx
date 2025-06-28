"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "@/app/styles/quien-somos.css"; 

const services = [
  {
    title: 'Incineración Individual',
    desc: 'Servicio de cremación de mascotas en Barcelona con incineración individual, garantizando máxima privacidad y devolución de cenizas en urna personalizada.',
    img: '/images/cremacion-presencial.jpg',
    href: '/servicios/incineracion-individual',
  },
  {
    title: 'Incineración Colectiva',
    desc: 'Opción económica de cremación de mascotas en Barcelona mediante incineración colectiva respetuosa con el medio ambiente, sin devolución de cenizas.',
    img: '/images/cremacion-colectiva.jpg',
    href: '/servicios/incineracion-colectiva',
  },
];

const specialService = {
  title: 'Cremación Presencial',
  desc: 'Vive un adiós más cercano con nuestra cremación presencial: acompaña a tu mascota durante el proceso en nuestras instalaciones, con apoyo emocional y profesional en todo momento.',
  img: '/images/cremacion-individual.jpg',
  href: '/servicios/cremacion-presencial',
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServiciosSection() {
  return (
    <main className="bg-[var(--blue-50)] text-[var(--text-main)] pb-20">
      <motion.section
        className="relative h-80 md:h-96 flex flex-col items-center justify-center bg-[url('/images/servicios-bg.jpg')] bg-cover bg-center"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold text-[var(--text-light)] uppercase drop-shadow-md">
          Servicios
        </h1>
        <div className="absolute inset-0 bg-black/40" />
        <motion.p
          className="relative z-10 mt-4 max-w-2xl text-center text-lg text-[var(--text-light)]"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          En Luz Animal ofrecemos servicios de incineración de mascotas en Barcelona: procesos individual, colectivo y presencial adaptados a tus necesidades, con empatía y profesionalidad.
        </motion.p>
      </motion.section>

      <section className="max-w-6xl mx-auto mt-12 px-6 grid gap-8 sm:grid-cols-2">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="flex flex-col h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all bg-white"
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="h-56 relative w-full">
              <Image src={s.img} alt={s.title} fill className="object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-2 text-[var(--text-main)]">
                {s.title}
              </h3>
              <p className="text-base mb-4 text-[var(--text-main)] flex-grow">
                {s.desc}
              </p>
              <Link
                href={s.href}
                className="mt-auto inline-block text-[var(--blue-700)] border border-[var(--blue-700)] px-4 py-2 rounded-full font-medium hover:bg-[var(--blue-700)] hover:text-[var(--text-light)] transition-all"
              >
                Ver Servicio
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      <div className="mt-12 flex justify-center px-6">
        <motion.div
          className="flex flex-col h-full max-w-md w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all bg-white"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="h-50 relative w-full">
            <Image
              src={specialService.img}
              alt={specialService.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-semibold mb-2 text-[var(--text-main)]">
              {specialService.title}
            </h3>
            <p className="text-base mb-4 text-[var(--text-main)] flex-grow">
              {specialService.desc}
            </p>
            <Link
              href={specialService.href}
              className="mt-auto inline-block text-[var(--blue-700)] border border-[var(--blue-700)] px-4 py-2 rounded-full font-medium hover:bg-[var(--blue-700)] hover:text-[var(--text-light)] transition-all"
            >
              Ver Servicio
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.section
        className="mt-16 py-16 bg-[var(--blue-100)]"
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        >
        <div className="max-w-4xl mx-auto px-6 text-center">
            <hr className="border-t-4 border-[var(--blue-500)] w-24 mx-auto mb-8" />
            <p className="text-2xl md:text-3xl font-semibold text-[var(--text-main)] mb-6">
            ¿Tienes preguntas o necesitas un presupuesto personalizado?
            </p>
            <Link
            href="/contacto"
            className="inline-block bg-[var(--blue-700)] hover:bg-[var(--blue-500)] text-[var(--text-light)] px-8 py-4 rounded-full font-semibold transition-all"
            >
            Contáctanos Ahora
            </Link>
        </div>
        </motion.section>
    </main>
  );
}