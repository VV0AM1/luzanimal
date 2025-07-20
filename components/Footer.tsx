'use client';

import Link from 'next/link';
import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';
import "@/app/styles/quien-somos.css";
import { useTracking } from "@/app/context/TrackingContext";

export default function Footer() {

  const { trackEvent } = useTracking(); 

  const handleWhatsAppClick = (source: string) => {
    trackEvent("whatsapp_click", {
      source,
      phone: "34684418499",
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[var(--blue-700)] to-[var(--blue-900)] text-[var(--text-light)]">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-[calc(100%+1px)] h-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 28"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,28 900,28 1200,0 L1200,28 L0,28 Z"
            fill="var(--blue-700)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
        <div>
          <h3 className="text-lg font-bold mb-2">Luz Animal S.L.</h3>
          <p className="text-xs mb-1 opacity-70">N.I.F.: B10540581</p>
          <p className="text-xs opacity-70">
            Pompas fúnebres y actividades relacionadas
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2">Ubicación</h4>
          <p className="flex items-center gap-2 mb-2 opacity-80">
            <FaMapMarkerAlt className="text-[var(--blue-300)]" />
            Carrer de Severo Ochoa, 43, Granollers
          </p>
          <div className="flex flex-wrap gap-3 text-[var(--blue-300)] text-sm">
            <Link
              href="https://maps.apple.com/?address=Carrer%20de%20Severo%20Ochoa,%2043,%20Granollers"
              target="_blank"
              className="underline hover:text-[var(--blue-100)] transition-colors"
            >
              Apple Maps
            </Link>
            <span>/</span>
            <Link
              href="https://maps.google.com/?q=Carrer+de+Severo+Ochoa,+43,+Granollers"
              target="_blank"
              className="underline hover:text-[var(--blue-100)] transition-colors"
            >
              Google Maps
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2">Contacto</h4>
          <ul className="space-y-2 opacity-80 mb-4">
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-green-400 w-5 h-5" />
              <Link
                href="https://wa.me/34684416567"
                target="_blank"
                className="hover:text-[var(--blue-100)] transition-colors"
                onClick={() => handleWhatsAppClick("Footer - Text Link")}
              >
                +34 684 418 499
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="w-5 h-5 text-[var(--blue-300)]" />
              <span>+34 935 851 040</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="w-5 h-5 text-[var(--blue-300)]" />
              <span>+34 684 416 567</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="w-5 h-5 text-[var(--blue-300)]" />
              <Link
                href="mailto:luzanimalbcn@gmail.com"
                className="hover:text-[var(--blue-100)] transition-colors"
              >
                luzanimalbcn@gmail.com
              </Link>
            </li>
          </ul>
          <h4 className="text-lg font-bold mb-2">Síguenos</h4>
          <div className="flex items-center gap-4">
            <Link
              href="https://wa.me/34684416567"
              target="_blank"
              onClick={() => handleWhatsAppClick("Footer - Icon")}
            >
              <FaWhatsapp className="w-6 h-6 hover:text-[var(--blue-100)] transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-xs opacity-70 py-4 border-t border-[var(--blue-500)]">
        © {new Date().getFullYear()} Cremación Mascotas Barcelona. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}