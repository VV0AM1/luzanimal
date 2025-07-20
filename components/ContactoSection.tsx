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
    <main className="bg-[var(--blue-50)] text-[var(--text-main)] pb-20">
<motion.section
    className="relative h-[70vh] flex items-center justify-center
              bg-[url('/images/contacto-header.jpg')] bg-cover bg-center
              shadow-[inset_0_0_80px_rgba(0,0,0,0.8)]"
    initial="hidden"
    animate="visible"
    variants={fadeInUp}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
    <div className="relative z-10 text-center px-6 max-w-3xl space-y-4 text-[var(--text-light)]">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold drop-shadow-xl"
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
        Estamos aquí para ayudarte con empatía y compromiso.
      </motion.p>
      <motion.p
        className="max-w-2xl mx-auto text-[var(--text-light)] opacity-80 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        Luz Animal ofrece cremación profesional de mascotas en Barcelona y Granollers, 
        garantizando un trámite respetuoso, atención 24/7 y soluciones personalizadas para 
        cada familia. Rellena el formulario para recibir un presupuesto inmediato.
      </motion.p>
    </div>
  </motion.section>

      <motion.section
        className="max-w-6xl mx-auto mt-12 px-6 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="flex flex-col gap-8">
          <div className="relative bg-[var(--text-light)] rounded-3xl p-6 shadow-2xl h-full md:h-[75%]">
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-[var(--blue-300)] opacity-20 rounded-full pointer-events-none" />
            <h2 className="text-2xl font-bold text-[var(--blue-700)] mb-4">
              Envía tu consulta
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "name", placeholder: "Nombre" },
                  { name: "surname", placeholder: "Apellidos" },
                  { name: "petName", placeholder: "Nombre de tu mascota" },
                  { name: "email", placeholder: "Tu correo electrónico", type: "email" },
                ].map((field) => (
                  <motion.div key={field.name} whileHover={{ y: -2 }}>
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
                                 transition-shadow bg-[var(--blue-50)] placeholder-gray-500"
                      required
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div whileHover={{ y: -2 }}>
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
                             transition-shadow bg-[var(--blue-50)] placeholder-gray-500"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-[var(--blue-700)] hover:bg-[var(--blue-500)]
                           text-[var(--text-light)] px-6 py-4 rounded-full font-semibold
                           shadow-md hover:shadow-lg transition-all"
              >
                Enviar mensaje
              </motion.button>

              {status && (
                <p className="mt-2 text-center text-base font-medium text-[var(--blue-700)]">
                  {status}
                </p>
              )}
            </form>
          </div>

          <motion.div
            className="flex items-start gap-4 p-6 bg-[var(--text-light)] rounded-2xl shadow-lg hover:shadow-2xl transition-all mt-2"
            whileHover={{ translateY: -4 }}
          >
            <FaMapMarkerAlt className="text-[var(--blue-700)] w-6 h-6" />
            <div>
              <h3 className="font-semibold mb-1">Dirección</h3>
              <p>Carrer de Severo Ochoa, 43</p>
              <p>Granollers, Barcelona</p>
              <div className="mt-2 flex gap-4">
                <a
                  href="https://maps.apple.com/?address=Carrer%20de%20Severo%20Ochoa,%2043,%20Granollers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[var(--blue-700)] hover:underline"
                >
                  <FaApple /> Apple Maps
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Carrer+de+Severo+Ochoa,+43,+Granollers"
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
          <h2 className="text-2xl font-bold text-[var(--blue-700)]">
            Contacto Directo
          </h2>
          <p className="opacity-90 leading-relaxed">
            Prefieres hablar directamente con nosotros? Usa cualquiera de estos canales:
          </p>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <FaWhatsapp className="text-green-400 w-6 h-6" />,
                label: "WhatsApp",
                content: (
                  <a
                    href="https://wa.me/34684418499"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--blue-700)] hover:underline"
                    onClick={() =>
                      trackEvent("whatsapp_click", {
                        source: "Contacto Page - Card",
                        phone: "34684418499",
                        timestamp: new Date().toISOString(),
                      })
                    }
                  >
                    +34 684 418 499
                  </a>
                ),
              },
              {
                icon: <FaPhone className="text-[var(--blue-700)] w-6 h-6" />,
                label: "Teléfono",
                content: (
                  <>
                    <p>+34 935 851 040</p>
                    <p>+34 684 416 567</p>
                  </>
                ),
              },
              {
                icon: <FaEnvelope className="text-[var(--blue-700)] w-6 h-6" />,
                label: "Email",
                content: (
                  <a
                    href="mailto:luzanimalbcn@gmail.com"
                    className="text-[var(--blue-700)] hover:underline"
                  >
                    luzanimalbcn@gmail.com
                  </a>
                ),
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 p-6 bg-[var(--text-light)] rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                whileHover={{ translateY: -4 }}
              >
                {card.icon}
                <div>
                  <h3 className="font-semibold mb-1">{card.label}</h3>
                  {card.content}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="relative z-20 w-full h-64 rounded-3xl overflow-hidden shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <iframe
              src="https://maps.google.com/maps?q=Carrer%20de%20Severo%20Ochoa%2C%2043%2C%20Granollers&output=embed"
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