
'use client';

import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: '#030a1e' }}
      className="text-[#e6f0ff] text-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-base font-bold mb-2">Luz Animal S.L.</h3>
          <p className="text-xs mb-1 opacity-70">N.I.F.: B10540581</p>
          <p className="text-xs opacity-70">Pompas fúnebres y actividades relacionadas</p>
        </div>

        <div>
          <h4 className="text-base font-bold mb-2">Ubicación</h4>
          <p className="flex items-center gap-2 mb-1 opacity-80">
            <FaMapMarkerAlt className="text-[#6699ff]" />
            Carrer de Severo Ochoa, 43, Granollers
          </p>
          <div className="flex gap-4 text-[#6699ff] text-sm mt-2">
            <Link href="https://maps.apple.com/?address=Carrer%20de%20Severo%20Ochoa,%2046,%20Granollers" target="_blank" className="hover:text-[#cce0ff] transition">
              Apple Maps
            </Link>
            <span>/</span>
            <Link href="https://maps.google.com/?q=Carrer+de+Severo+Ochoa,+46,+Granollers" target="_blank" className="hover:text-[#cce0ff] transition">
              Google Maps
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-base font-bold mb-2">Contacto</h4>
          <ul className="space-y-2 opacity-80">
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-green-400" />
              <Link href="https://wa.me/34684418499" target="_blank" className="hover:text-[#cce0ff] transition">
                +34 684 418 499
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#6699ff]" />
              +34 935 851 040
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#6699ff]" />
              +34 684 416 567
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#6699ff]" />
              <Link href="mailto:luzanimalbcn@gmail.com" className="hover:text-[#cce0ff] transition">
                luzanimalbcn@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs opacity-70 py-4 border-t border-[#112244]">
        © {new Date().getFullYear()} Cremación Mascotas Barcelona. Todos los derechos reservados.
      </div>
    </footer>
  );
}