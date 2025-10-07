"use client";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaApple,
  FaGoogle,
  FaWhatsapp,
  FaClock,
  FaHandsHelping,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import "@/app/styles/quien-somos.css";
import { useTracking } from "@/app/context/TrackingContext";

const SITE_URL = "https://www.luzanimal.com";
const ORG_ID = `${SITE_URL}/#luz-animal`;

export default function PetCrematoriumInfo() {
  const { trackEvent } = useTracking();

  const PHONE_E164 = "34684416567";
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

  const jsonLdLocalBusinessEnhancement = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": ORG_ID,
    "name": "Luz Animal",
    "url": SITE_URL,
    "telephone": "+34 684 418 499",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Carrer de Severo Ochoa, 43",
      "addressLocality": "Granollers",
      "postalCode": "08403",
      "addressRegion": "Barcelona",
      "addressCountry": "ES",
    },
    "areaServed": ["Barcelona", "Granollers", "Catalunya"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        "opens": "00:00",
        "closes": "23:59",
      },
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "telephone": "+34 684 418 499",
        "availableLanguage": ["es-ES", "ca-ES"],
      },
    ],
    "hasMap":
      "https://maps.google.com/?q=Carrer+de+Severo+Ochoa,+43,+Granollers",
  };

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="relative overflow-hidden py-20 px-6 md:px-12"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#101e44] via-[#192b66] to-[#1b388a]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/wave-mesh.jpg')] bg-cover bg-center opacity-[0.05]" />
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-[28rem] h-[28rem] rounded-full bg-blue-500/25 blur-3xl" />

      <Script id="ld-localbusiness-contact" type="application/ld+json">
        {JSON.stringify(jsonLdLocalBusinessEnhancement)}
      </Script>

      <motion.div
        className="relative z-10 mx-auto grid max-w-[90rem] md:grid-cols-2 gap-10 md:gap-12 items-stretch"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      >
        <div className="text-[var(--text-light)]">
          <h2
            id="contacto-title"
            className="text-3xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
          >
            Tanatorio e incineración de mascotas en Barcelona (Granollers)
          </h2>

          <p className="mt-5 text-blue-100 text-base md:text-lg leading-relaxed">
            En <strong>Luz Animal</strong> te acompañamos con empatía y
            profesionalidad para que puedas despedirte con calma. Nuestro centro
            en <strong>Granollers</strong> ofrece un entorno íntimo y respetuoso.
          </p>

          <ul className="mt-6 space-y-3 text-blue-100 text-sm md:text-base">
            <li className="flex items-start gap-3">
              <FaHandsHelping className="mt-1 w-5 h-5 text-blue-200" aria-hidden />
              Acompañamiento emocional 24/7 por profesionales en duelo animal.
            </li>
            <li className="flex items-start gap-3">
              <FaClock className="mt-1 w-5 h-5 text-blue-200" aria-hidden />
              Servicio urgente de recogida en clínicas y domicilios.
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 w-5 h-5 text-blue-200" aria-hidden />
              Instalaciones privadas y certificadas en Granollers.
            </li>
          </ul>

          <div className="mt-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] p-6">
            <address className="not-italic text-blue-50 space-y-2">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-4 h-4 text-blue-200" aria-hidden />
                <span>Carrer de Severo Ochoa, 46 · 08403 Granollers, Barcelona</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="w-4 h-4 text-blue-200" aria-hidden />
                <a
                  href={`tel:+${PHONE_E164}`}
                  className="underline decoration-blue-300 underline-offset-4 hover:decoration-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70 rounded"
                  aria-label={`Llamar a Luz Animal ${PHONE_DISPLAY}`}
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="w-4 h-4 text-blue-200" aria-hidden />
                <span>Atención 24/7</span>
              </div>
            </address>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="https://maps.apple.com/?address=Carrer%20de%20Severo%20Ochoa,%2046,%20Granollers"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onMapClick("apple")}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/15 hover:bg-white/25 text-white px-4 py-3 transition shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70"
                aria-label="Abrir ubicación en Apple Maps"
                title="Abrir en Apple Maps"
              >
                <FaApple aria-hidden /> Apple Maps
              </a>
              <a
                href="https://maps.google.com/?q=Carrer+de+Severo+Ochoa,+46,+Granollers"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onMapClick("google")}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/15 hover:bg-white/25 text-white px-4 py-3 transition shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/70"
                aria-label="Abrir ubicación en Google Maps"
                title="Abrir en Google Maps"
              >
                <FaGoogle aria-hidden /> Google Maps
              </a>
              <a
                href={`https://wa.me/${PHONE_E164}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onWhatsApp}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-green-400 hover:from-green-500/90 hover:to-green-400/90 text-white px-4 py-3 transition shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                aria-label="Contactar por WhatsApp"
                title="Contactar por WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" aria-hidden /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] border border-white/20 bg-white/5 backdrop-blur-sm
              flex"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-full h-[320px] sm:h-[380px] md:h-full flex-1">            <iframe
              title="Ubicación Luz Animal Granollers en Google Maps"
              src="https://maps.google.com/maps?q=Carrer%20de%20Severo%20Ochoa%2C%2043%2C%20Granollers&output=embed"
              className="absolute inset-0 w-full h-full border-0 block"              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-black/30 to-transparent"
            aria-hidden
          />
        </motion.div>
      </motion.div>
    </section>
  );
}