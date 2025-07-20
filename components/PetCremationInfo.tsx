"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaApple, FaGoogle, FaWhatsapp, FaClock, FaHandsHelping } from 'react-icons/fa';
import { motion } from 'framer-motion';
import "@/app/styles/quien-somos.css";
import { useTracking } from "@/app/context/TrackingContext";

export default function PetCrematoriumInfo() {

  const { trackEvent } = useTracking(); 

  const handleWhatsAppClick = () => {
    trackEvent("whatsapp_click", {
      source: "PetCrematoriumInfo Section",
      phone: "34684418499",
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-gradient-to-br from-[var(--blue-700)] to-[var(--blue-500)] text-[var(--text-light)] py-16 px-6 md:px-12"
    >
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[var(--blue-300)] opacity-10" />
      <div className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-[var(--blue-300)] opacity-10" />

      <motion.div
        className="max-w-[90rem] mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
      <div className="space-y-6 text-lg leading-loose">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Tanatorio de Mascotas en Barcelona
        </h2>
        <p>
          En <strong>Luz Animal</strong>, ofrecemos un entorno cálido, respetuoso y profesional para que puedas despedirte de tu compañero con total tranquilidad. Nuestro tanatorio está ubicado en <strong>Granollers</strong>, y ha sido diseñado para crear una atmósfera de paz y acompañamiento.
        </p>
        <p>
          Nos comprometemos a estar a tu lado desde el primer momento. Nuestro equipo trabaja con empatía y rapidez para ofrecer un servicio personalizado, adaptado a tus necesidades emocionales y logísticas.
        </p>

        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <FaHandsHelping className="mt-1 text-[var(--blue-300)] w-5 h-5" />
            Acompañamiento emocional 24/7 por profesionales especializados en duelo animal
          </li>
          <li className="flex items-start gap-3">
            <FaClock className="mt-1 text-[var(--blue-300)] w-5 h-5" />
            Servicio urgente de recogida en clínicas veterinarias y domicilios particulares
          </li>
          <li className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1 text-[var(--blue-300)] w-5 h-5" />
            Instalaciones accesibles, privadas y certificadas en Carrer de Severo Ochoa 43, Granollers
          </li>
        </ul>

        <p>
          Puedes encontrarnos fácilmente en Apple Maps o Google Maps, o contactarnos directamente por WhatsApp. Estamos aquí para ayudarte en cada paso.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="https://maps.apple.com/?address=Carrer%20de%20Severo%20Ochoa,%2043,%20Granollers"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[var(--blue-900)] hover:bg-[var(--blue-800)] px-5 py-3 text-base rounded-lg transition"
          >
            <FaApple /> Apple Maps
          </a>
          <a
            href="https://maps.google.com/?q=Carrer+de+Severo+Ochoa,+43,+Granollers"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[var(--blue-900)] hover:bg-[var(--blue-800)] px-5 py-3 text-base rounded-lg transition"
          >
            <FaGoogle /> Google Maps
          </a>
        </div>

        <div className="mt-8">
          <a
            href="https://wa.me/34684416567"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 bg-[var(--blue-300)] hover:bg-[var(--blue-100)] text-[var(--text-main)] font-semibold px-6 py-3 text-base rounded-full shadow-lg transition"
          >
            <FaWhatsapp className="w-5 h-5" /> +34 684 41 65 67
          </a>
        </div>
      </div>

        <motion.div
          className="w-full h-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Carrer%20de%20Severo%20Ochoa%2C%2043%2C%20Granollers&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}