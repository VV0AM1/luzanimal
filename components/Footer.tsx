"use client";

import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "@/app/styles/quien-somos.css";
import { useTracking } from "@/app/context/TrackingContext";

export default function Footer() {
  const { trackEvent } = useTracking();

  const PHONE_MAIN_DISPLAY = "+34 684 41 65 67";
  const PHONE_MAIN_E164 = "34684416567";
  const PHONE_LANDLINE = "+34 935 851 040";
  const PHONE_LANDLINE_E164 = "34935851040";
  const EMAIL = "luzanimalbcn@gmail.com";
  const ADDRESS_TEXT = "Carrer de Severo Ochoa, 43 · 08403 Granollers, Barcelona";

  const handleWhatsAppClick = (source: string) => {
    trackEvent("whatsapp_click", {
      source,
      phone: PHONE_MAIN_E164,
      timestamp: new Date().toISOString(),
    });
  };

  const handlePhoneClick = (source: string, phoneE164: string, display: string) => {
    trackEvent("phone_click", {
      source,
      phone: phoneE164,
      display,
      timestamp: new Date().toISOString(),
    });
  };

  const handleEmailClick = (source: string, email: string) => {
    trackEvent("email_click", {
      source,
      email,
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <footer
      className="relative bg-[#F7FAFF] text-blue-900"
      aria-labelledby="footer-title"
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-14 pb-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 id="footer-title" className="text-lg font-bold mb-2">
            Luz Animal S.L.
          </h3>
          <p className="text-xs mb-1 text-blue-700/80">N.I.F.: B10540581</p>
          <p className="text-xs text-blue-700/80">
            Pompas fúnebres y actividades relacionadas
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2">Ubicación</h4>
          <address className="not-italic">
            <p className="flex items-start gap-2 text-sm text-blue-800">
              <FaMapMarkerAlt className="mt-0.5 text-blue-500" aria-hidden />
              {ADDRESS_TEXT}
            </p>
          </address>
          <div className="flex flex-wrap gap-3 text-sm mt-2">
            <Link
              href="https://maps.apple.com/?address=Carrer%20de%20Severo%20Ochoa,%2043,%2008403%20Granollers,%20Barcelona"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-blue-300 underline-offset-4 hover:decoration-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
              aria-label="Abrir ubicación en Apple Maps"
            >
              Apple Maps
            </Link>
            <span className="text-blue-400">/</span>
            <Link
              href="https://maps.google.com/?q=Carrer+de+Severo+Ochoa,+43,+08403+Granollers,+Barcelona"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-blue-300 underline-offset-4 hover:decoration-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
              aria-label="Abrir ubicación en Google Maps"
            >
              Google Maps
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-green-600 w-5 h-5" aria-hidden />
              <Link
                href={`https://wa.me/${PHONE_MAIN_E164}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                onClick={() => handleWhatsAppClick("Footer - WhatsApp")}
                aria-label={`Contactar por WhatsApp al ${PHONE_MAIN_DISPLAY}`}
              >
                {PHONE_MAIN_DISPLAY}
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="w-5 h-5 text-blue-600" aria-hidden />
              <a
                href={`tel:+${PHONE_MAIN_E164}`}
                onClick={() => handlePhoneClick("Footer - Mobile", PHONE_MAIN_E164, PHONE_MAIN_DISPLAY)}
                className="hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                aria-label={`Llamar al móvil ${PHONE_MAIN_DISPLAY}`}
              >
                {PHONE_MAIN_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="w-5 h-5 text-blue-600" aria-hidden />
              <a
                href={`tel:+${PHONE_LANDLINE_E164}`}
                onClick={() => handlePhoneClick("Footer - Landline", PHONE_LANDLINE_E164, PHONE_LANDLINE)}
                className="hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                aria-label={`Llamar al fijo ${PHONE_LANDLINE}`}
              >
                {PHONE_LANDLINE}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="w-5 h-5 text-blue-600" aria-hidden />
              <Link
                href={`mailto:${EMAIL}`}
                onClick={() => handleEmailClick("Footer - Email", EMAIL)}
                className="hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                aria-label={`Enviar email a ${EMAIL}`}
              >
                {EMAIL}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2">Horario</h4>
          <p className="text-sm text-blue-800">Atención 24/7</p>
          <div className="mt-4 flex items-center gap-3">
          </div>
        </div>
      </div>

      <div className="relative border-t border-blue-200 bg-white/70">
        <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-blue-700 text-center">
          © {new Date().getFullYear()} Luz Animal — Cremación de Mascotas Barcelona. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}