"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaApple, FaGoogle, FaWhatsapp, FaClock, FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import "@/app/styles/quien-somos.css";
import { useTracking } from "@/app/context/TrackingContext";

export default function PetCrematoriumInfo() {
  const { trackEvent } = useTracking();

  const PHONE_E164 = "34684416567"; // keep one canonical number
  const PHONE_DISPLAY = "+34 684 41 65 67";

  const onWhatsApp = () =>
    trackEvent("whatsapp_click", {
      source: "PetCrematoriumInfo Section",
      phone: PHONE_E164,
      timestamp: new Date().toISOString(),
    });

  const onMapClick = (provider: "apple" | "google") =>
    trackEvent("map_click", {
      provider,
      source: "PetCrematoriumInfo Section",
      timestamp: new Date().toISOString(),
    });

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="relative overflow-hidden py-20 px-6 md:px-12"
    >
      {/* Textured background with stronger contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#101e44] via-[#192b66] to-[#1b388a]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/wave-mesh.jpg')] bg-cover bg-center opacity-[0.05]" />

      {/* soft glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-[28rem] h-[28rem] rounded-full bg-blue-500/25 blur-3xl" />

      <motion.div
        className="relative z-10 mx-auto grid max-w-[90rem] md:grid-cols-2 gap-12 items-stretch"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        {/* Info panel */}
        <div className="text-[var(--text-light)]">
          <h2
            id="contacto-title"
            className="text-3xl md:text-5xl font-extrabold leading-tight text-white"
          >
            Tanatorio y Incineracion de Mascotas en Barcelona (Granollers)
          </h2>

          <p className="mt-5 text-blue-100 text-lg leading-relaxed">
            En <strong>Luz Animal</strong> te acompañamos con empatía y profesionalidad para que
            puedas despedirte con calma. Nuestro centro en <strong>Granollers</strong> ofrece un entorno
            íntimo y respetuoso, pensado para tu tranquilidad.
          </p>

          <ul className="mt-6 space-y-3 text-blue-100">
            <li className="flex items-start gap-3">
              <FaHandsHelping className="mt-1 w-5 h-5 text-blue-200" />
              Acompañamiento emocional 24/7 por profesionales en duelo animal.
            </li>
            <li className="flex items-start gap-3">
              <FaClock className="mt-1 w-5 h-5 text-blue-200" />
              Servicio urgente de recogida en clínicas y domicilios.
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 w-5 h-5 text-blue-200" />
              Instalaciones privadas y certificadas en Granollers.
            </li>
          </ul>

          <div className="mt-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] p-6">
            <address className="not-italic text-blue-50">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-4 h-4 text-blue-200" />
                <span>Carrer de Severo Ochoa, 43 · 08403 Granollers, Barcelona</span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <FaPhoneAlt className="w-4 h-4 text-blue-200" />
                <a href={`tel:+${PHONE_E164}`} className="underline decoration-blue-300 underline-offset-4">
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <FaClock className="w-4 h-4 text-blue-200" />
                <span>Atención 24/7</span>
              </div>
            </address>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.apple.com/?address=Carrer%20de%20Severo%20Ochoa,%2043,%20Granollers"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onMapClick("apple")}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-white/15 hover:bg-white/25 text-white px-4 py-3 transition shadow"
                aria-label="Abrir Apple Maps"
                title="Abrir en Apple Maps"
              >
                <FaApple /> Apple Maps
              </a>
              <a
                href="https://maps.google.com/?q=Carrer+de+Severo+Ochoa,+43,+Granollers"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onMapClick("google")}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-white/15 hover:bg-white/25 text-white px-4 py-3 transition shadow"
                aria-label="Abrir Google Maps"
                title="Abrir en Google Maps"
              >
                <FaGoogle /> Google Maps
              </a>
              <a
                href={`https://wa.me/${PHONE_E164}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onWhatsApp}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-green-400 hover:from-green-500/90 hover:to-green-400/90 text-white px-4 py-3 transition shadow-lg"
                aria-label="Contactar por WhatsApp"
                title="Contactar por WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] border border-white/20 bg-white/5 backdrop-blur-sm"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <iframe
            title="Ubicación Luz Animal Granollers en Google Maps"
            src="https://maps.google.com/maps?q=Carrer%20de%20Severo%20Ochoa%2C%2043%2C%20Granollers&output=embed"
            className="w-full h-full border-0 block"
            loading="lazy"
            allowFullScreen
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-black/30 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}