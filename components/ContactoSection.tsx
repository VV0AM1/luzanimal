"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMap,
  FaWhatsapp,
} from "react-icons/fa";
import "@/app/styles/quien-somos.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface ContactFormData {
  name: string;
  surname: string;
  petName: string;
  email: string;
  description: string;
}

export default function ContactoSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    surname: "",
    petName: "",
    email: "",
    description: "",
  });
  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Enviando...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result: { success: boolean; error?: string } = await res.json();
    result.success
      ? setStatus("¡Correo enviado con éxito! Te contactaremos pronto.")
      : setStatus("Error al enviar el correo. Intenta de nuevo más tarde.");
  };

  return (
    <main className="bg-[var(--blue-50)] text-[var(--text-main)]">
      <motion.section
        className="relative h-[70vh] flex items-center justify-center bg-[url('/images/contacto-header.jpg')] bg-cover bg-center shadow-[inset_0_0_80px_rgba(0,0,0,0.8)]"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-3xl space-y-4 text-[var(--text-light)]">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold drop-shadow-xl tracking-tight"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Contáctanos
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-[var(--blue-100)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Estamos aquí para ayudarte y responder tus preguntas con empatía y compromiso.
          </motion.p>
          <motion.p
            className="max-w-2xl mx-auto text-center text-[var(--text-light)] opacity-90 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Luz Animal S.L. ofrece servicios profesionales de cremación de mascotas en
            Barcelona, asegurando un trato personalizado y respetuoso. Rellena el formulario
            y nuestro equipo se pondrá en contacto contigo lo antes posible.
          </motion.p>
        </div>
      </motion.section>

      <motion.section
        className="mt-8 py-18 px-6 sm:px-8 max-w-6xl mx-auto bg-[var(--blue-300)] rounded-3xl shadow-lg"
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-[var(--text-light)]">
          Formulario de Contacto
        </h2>
        <p className="text-center text-[var(--text-light)] mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
          Completa los campos con tus datos y la información de tu mascota para recibir
          asesoramiento completo sobre nuestro servicio de cremación de mascotas en
          Barcelona.
        </p>
        <div className="relative bg-[var(--text-light)] rounded-2xl p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "name", placeholder: "Nombre" },
                { name: "surname", placeholder: "Apellidos" },
                { name: "petName", placeholder: "Nombre de tu mascota" },
                { name: "email", placeholder: "Tu correo electrónico", type: "email" },
              ].map((field) => (
                <motion.div key={field.name} whileHover={{ y: -3 }}>
                  <label className="block text-[var(--blue-700)] font-medium mb-1 capitalize">
                    {field.placeholder}
                  </label>
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--blue-500)] transition-shadow"
                    required
                  />
                </motion.div>
              ))}
            </div>
            <motion.div whileHover={{ y: -3 }}>
              <label className="block text-[var(--blue-700)] font-medium mb-1">
                Descripción
              </label>
              <textarea
                name="description"
                placeholder="Cuéntanos cómo podemos ayudarte"
                onChange={handleChange}
                rows={6}
                className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--blue-500)] transition-shadow"
                required
              />
            </motion.div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mx-auto block bg-[var(--blue-700)] hover:bg-[var(--blue-500)] text-[var(--text-light)] px-10 py-4 rounded-full font-semibold shadow-md transition-all text-lg"
            >
              Enviar mensaje
            </motion.button>
            {status && (
              <p className="mt-4 text-center text-lg font-medium text-[var(--blue-700)]">
                {status}
              </p>
            )}
          </form>
        </div>
      </motion.section>

      <motion.section
        className="py-16 px-6 sm:px-8 bg-[var(--blue-50)]"
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[var(--text-main)]">
              Contacto y Ubicación
            </h2>
            <p className="text-[var(--text-main)] max-w-xl opacity-90 leading-relaxed">
              Ponte en contacto con Luz Animal S.L. para cualquier consulta sobre nuestros
              servicios de cremación y despedida de mascotas en Granollers y Barcelona.
              Estamos disponibles por teléfono, WhatsApp o correo electrónico.
            </p>
            <ul className="space-y-4 text-[var(--text-main)]">
              <li className="flex items-center space-x-2">
                <FaWhatsapp className="text-[var(--blue-700)]" />
                <span>+34 684 418 499</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-[var(--blue-700)]" />
                <span>+34 935 851 040</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-[var(--blue-700)]" />
                <span>+34 684 416 567</span>
              </li>
              <li className="italic">Pompas fúnebres y actividades relacionadas</li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-[var(--blue-700)]" />
                Carrer de Severo Ochoa, 43, Granollers
              </li>
              <li className="flex items-center">
                <FaMap className="mr-2 text-[var(--blue-700)]" />
                Apple Maps / Google Maps
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-[var(--blue-700)]" />
                luzanimalbcn@gmail.com
              </li>
            </ul>
          </div>
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=Carrer%20de%20Severo%20Ochoa%2C%2043%2C%20Granollers&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </motion.section>
    </main>
  );
}