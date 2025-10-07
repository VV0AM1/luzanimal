"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaApple,
  FaGoogle,
  FaWhatsapp,
} from "react-icons/fa";
import "@/app/styles/quien-somos.css";
import { useTracking } from "@/app/context/TrackingContext";

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
  const { trackEvent } = useTracking();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Enviando...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result: { success: boolean; error?: string } = await res.json();
    setStatus(
      result.success
        ? "¡Correo enviado con éxito! Te contactaremos pronto."
        : "Error al enviar el correo. Intenta de nuevo más tarde."
    );
  };

  return (
    <main className="bg-[var(--blue-50)] text-[var(--text-main)] pb-20">
      <motion.section
        className="relative h-[70vh] flex items-center justify-center 
        bg-[url('/images/contacto-header.jpg')] bg-cover bg-center
        shadow-[inset_0_0_120px_rgba(0,0,0,0.85)]"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-transparent" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-[var(--blue-500)] opacity-30 blur-3xl rounded-full animate-pulse" />
        <div className="relative z-10 text-center px-6 max-w-3xl space-y-4 text-[var(--text-light)]">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold drop-shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Contáctanos
          </motion.h1>
          <p className="text-xl md:text-2xl text-[var(--blue-100)]">
            Estamos aquí para ayudarte con empatía y compromiso.
          </p>
          <p className="max-w-2xl mx-auto text-[var(--text-light)] opacity-80 leading-relaxed">
            En <strong>Luz Animal Barcelona</strong>, ofrecemos cremación
            profesional de mascotas en Barcelona y Granollers, garantizando un
            servicio humano, apoyo psicológico y atención 24/7.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="max-w-6xl mx-auto mt-16 px-6 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="flex flex-col gap-8">
          <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[var(--blue-300)] opacity-20 rounded-full pointer-events-none" />
            <h2 className="text-3xl font-bold text-[var(--blue-700)] mb-6">
              Envía tu consulta
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "name", placeholder: "Nombre" },
                  { name: "surname", placeholder: "Apellidos" },
                  { name: "petName", placeholder: "Nombre de tu mascota" },
                  { name: "email", placeholder: "Correo electrónico", type: "email" },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-[var(--blue-700)] font-medium mb-1 capitalize"
                    >
                      {field.placeholder}
                    </label>
                    <input
                      id={field.name}
                      type={field.type || "text"}
                      name={field.name}
                      placeholder={field.placeholder}
                      onChange={handleChange}
                      className="w-full p-3 rounded-xl border border-gray-300
                        focus:outline-none focus:ring-2 focus:ring-[var(--blue-500)]
                        bg-[var(--blue-50)] placeholder-gray-500 transition-shadow"
                      required
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-[var(--blue-700)] font-medium mb-1"
                >
                  Descripción
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Cuéntanos cómo podemos ayudarte"
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 rounded-xl border border-gray-300
                    focus:outline-none focus:ring-2 focus:ring-[var(--blue-500)]
                    bg-[var(--blue-50)] placeholder-gray-500 transition-shadow"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gradient-to-r from-[var(--blue-500)] to-[var(--blue-700)]
                  hover:from-[var(--blue-600)] hover:to-[var(--blue-800)]
                  text-white px-6 py-4 rounded-full font-semibold shadow-md hover:shadow-xl transition-all"
              >
                Enviar mensaje
              </motion.button>

              {status && (
                <p className="mt-3 text-center text-base font-medium text-[var(--blue-700)]">
                  {status}
                </p>
              )}
            </form>
          </div>

          <motion.div
            className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            whileHover={{ translateY: -4 }}
          >
            <FaMapMarkerAlt className="text-[var(--blue-700)] w-7 h-7" />
            <div>
              <h3 className="font-semibold mb-1">Dirección</h3>
              <address className="not-italic leading-relaxed">
                Carrer de Severo Ochoa, 46
                <br />
                Granollers, Barcelona
              </address>
              <div className="mt-2 flex gap-4 text-sm">
                <a
                  href="https://maps.apple.com/?address=Carrer%20de%20Severo%20Ochoa,46,Granollers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[var(--blue-700)] hover:underline"
                >
                  <FaApple /> Apple Maps
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Carrer+de+Severo+Ochoa,+46,+Granollers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[var(--blue-700)] hover:underline"
                >
                  <FaGoogle /> Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-[var(--blue-700)]">
            Contacto Directo
          </h2>
          <p className="opacity-90 leading-relaxed">
            ¿Prefieres hablar directamente con nosotros? Usa cualquiera de estos
            canales de contacto:
          </p>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              whileHover={{ translateY: -4 }}
            >
              <FaWhatsapp className="text-green-500 w-7 h-7" />
              <div>
                <h3 className="font-semibold mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/34684416567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--blue-700)] hover:underline"
                  onClick={() =>
                    trackEvent("whatsapp_click", {
                      source: "Contacto Page - WhatsApp Card",
                      phone: "34684416567",
                      timestamp: new Date().toISOString(),
                    })
                  }
                >
                  +34 684 416 567
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              whileHover={{ translateY: -4 }}
            >
              <FaPhone className="text-[var(--blue-700)] w-7 h-7" />
              <div>
                <h3 className="font-semibold mb-1">Teléfono</h3>
                <p>
                  <a
                    href="tel:+34935851040"
                    onClick={() =>
                      trackEvent("phone_click", {
                        source: "Contacto Page - Phone Card",
                        phone: "34935851040",
                        timestamp: new Date().toISOString(),
                      })
                    }
                    className="hover:underline"
                  >
                    +34 935 851 040
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+34684416567"
                    onClick={() =>
                      trackEvent("phone_click", {
                        source: "Contacto Page - Phone Card",
                        phone: "34684416567",
                        timestamp: new Date().toISOString(),
                      })
                    }
                    className="hover:underline"
                  >
                    +34 684 416 567
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              whileHover={{ translateY: -4 }}
            >
              <FaEnvelope className="text-[var(--blue-700)] w-7 h-7" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href="mailto:luzanimalbcn@gmail.com"
                  className="text-[var(--blue-700)] hover:underline"
                >
                  info@almascotas.com
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative z-20 w-full h-64 rounded-3xl overflow-hidden shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <iframe
              src="https://maps.google.com/maps?q=Carrer%20de%20Severo%20Ochoa%2C%2046%2C%20Granollers&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}