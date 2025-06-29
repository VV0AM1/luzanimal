"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "@/app/styles/quien-somos.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const services = [
  {
    title: "Incineración Individual",
    desc: "Un homenaje íntimo: urna personalizada, certificado y asistencia al proceso para tu mascota.",
    img: "/images/cremacion-presencial.jpg",
    href: "/servicios/incineracion-individual",
  },
  {
    title: "Incineración Colectiva",
    desc: "Opción económica y responsable: proceso compartido sin devolución de cenizas, con total respeto.",
    img: "/images/cremacion-colectiva.jpg",
    href: "/servicios/incineracion-colectiva",
  },
];

const specialService = {
  title: "Cremación Presencial",
  desc: "Acompaña a tu mascota en un velatorio íntimo y recibe un apoyo emocional y profesional constante.",
  img: "/images/cremacion-individual.jpg",
  href: "/servicios/cremacion-presencial",
};

export default function ServiciosSection() {
  return (
    <main className="bg-[var(--blue-50)] text-[var(--text-main)] relative overflow-hidden pb-20">
      <motion.section
        className="relative h-80 md:h-[60vh] flex items-center justify-center
                  bg-[url('/images/servicios-bg.jpg')] bg-cover bg-center
                  shadow-[inset_0_0_80px_rgba(0,0,0,0.8)]"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />

        <div className="absolute top-8 left-8 w-32 h-32 bg-[var(--blue-300)] opacity-20 rounded-full" />

        <div className="relative z-10 text-center max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-light)] drop-shadow-lg">
            Nuestros Servicios
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[var(--text-light)] opacity-90">
              En Luz Animal ofrecemos cremación de mascotas en Barcelona con tres modalidades:
              individual, colectiva y presencial. Elige el servicio que mejor se adapte a tus necesidades
              y recibe la máxima profesionalidad y empatía.
          </p>
        </div>
      </motion.section>

        <section className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 relative z-10">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="h-56 relative">
              <Image src={s.img} alt={s.title} fill className="object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
              <p className="flex-grow text-[var(--text-main)] mb-4 leading-relaxed">
                {s.desc}
              </p>
              <Link
                href={s.href}
                className="self-start inline-block border-2 border-[var(--blue-700)] text-[var(--blue-700)] px-5 py-2 rounded-full font-medium hover:bg-[var(--blue-700)] hover:text-[var(--text-light)] transition-all"
              >
                Ver servicio
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      <motion.section
        className="max-w-4xl mx-auto px-6 sm:px-8 mt-12 relative z-10"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
          <div className="h-64 relative">
            <Image
              src={specialService.img}
              alt={specialService.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-3">{specialService.title}</h3>
            <p className="mb-6 leading-relaxed text-[var(--text-main)]">
              {specialService.desc}
            </p>
            <Link
              href={specialService.href}
              className="inline-block bg-[var(--blue-700)] hover:bg-[var(--blue-500)] text-[var(--text-light)] px-6 py-3 rounded-full font-semibold transition-all"
            >
              Ver servicio
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mt-16 py-16 bg-[var(--blue-100)]"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <hr className="border-t-4 border-[var(--blue-500)] w-24 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Tienes dudas o quieres un presupuesto a medida?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-6 leading-relaxed">
            Nuestro equipo está listo para asesorarte y ofrecerte la mejor opción de cremación
            para tu mascota. No estás solo en este momento.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-[var(--blue-700)] hover:bg-[var(--blue-500)] text-[var(--text-light)] px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Contacta ahora
          </Link>
        </div>
      </motion.section>
    </main>
  );
}