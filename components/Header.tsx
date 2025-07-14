"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { X, Menu, Phone, ChevronDown, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import "@/app/styles/quien-somos.css";
import { FaCalculator } from 'react-icons/fa';
import { useTracking } from "@/app/context/TrackingContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(open => !open);
  const toggleMobileSub = () => setMobileSubOpen(open => !open);

  const { trackEvent } = useTracking(); 

  const handleWhatsAppClick = (source: string) => {
    trackEvent("whatsapp_click", {
      source,
      phone: "34684418499",
      timestamp: new Date().toISOString(),
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
          <img
            src="/images/pet_logo.png"
            alt="Logo de Luz Animal"
            className="w-8 h-8 object-contain"
          />
          <span className="text-2xl font-extrabold text-blue-800 select-none">
            Luz Animal
          </span>
        </Link>

        <ul className="hidden md:flex space-x-8 font-semibold select-none">
          <li>
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>

          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors focus:outline-none">
              <Link href="/servicios">Servicios</Link>
              <ChevronDown className="w-4 h-4" />
            </button>
              <ul
                className={`
                  absolute left-0 top-full w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-20
                  transition-all duration-300 ease-in-out
                  ${servicesOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                  }
                `}
              >
              <li>
                <Link
                  href="/servicios/incineracion-individual"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                >
                  Incineración Individual
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/incineracion-colectiva"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                >
                  Incineración Colectiva
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/incineracion-presencial"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                >
                  Incineración Presencial
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/quien-somos" className="text-gray-700 hover:text-blue-600 transition-colors">
              Quien Somos
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contacto
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-gray-700 hover:text-blue-600 transition-colors">
              Preguntas
            </Link>
          </li>
            <li className='flex'>
            <Link href="/calculadora" className="text-gray-700 hover:text-blue-600 transition-colors">
              Calculadora
            </Link>
            <FaCalculator className="w-5 h-5 text-gray-700 ml-2" />
          </li>
        </ul>

        <div className="hidden md:flex flex-col text-sm text-blue-900 font-medium items-end space-y-1">
          <a
            href="https://wa.me/34684418499"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
            onClick={() => handleWhatsAppClick("Header - Desktop")}
          >
            <FaWhatsapp className="text-green-500 w-4 h-4" />+34 684 418 499
          </a>
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4 text-blue-700" />
            <span>+34 935 851 040</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4 text-blue-700" />
            <span>+34 684 416 567</span>
          </div>
        </div>

        <button
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <aside
        className={`fixed top-0 right-0 h-full bg-white w-3/4 max-w-xs shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <button
            onClick={toggleMenu}
            aria-label="Cerrar menú"
            className="p-2 rounded-md text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <X size={24} />
          </button>
          <Link href="/" onClick={toggleMenu} className="flex items-center gap-2">
            <img
              src="/images/pet_logo.png"
              alt="Logo de Luz Animal"
              className="w-6 h-6 object-contain"
            />
            <span className="text-lg font-extrabold text-blue-800 select-none">
              Luz Animal
            </span>
          </Link>
        </div>

        <nav className="flex flex-col mt-4 space-y-4 px-6 font-semibold text-gray-800">
          <Link href="/" onClick={toggleMenu} className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <div>
            <button
              onClick={toggleMobileSub}
              className="w-full flex justify-between items-center hover:text-blue-600 transition-colors focus:outline-none"
            >
              <Link href="/servicios">Servicios</Link> <ChevronDown className={`w-5 h-5 transform transition-transform ${
                mobileSubOpen ? 'rotate-180' : 'rotate-0'
              }`} />
            </button>
            {mobileSubOpen && (
              <div className="mt-2 ml-4 flex flex-col space-y-2">
                <Link
                  href="/servicios/incineracion-individual"
                  onClick={toggleMenu}
                  className="hover:text-blue-600 transition-colors"
                >
                  Incineración Individual
                </Link>
                <Link
                  href="/servicios/incineracion-colectiva"
                  onClick={toggleMenu}
                  className="hover:text-blue-600 transition-colors"
                >
                  Incineración Colectiva
                </Link>
                <Link
                  href="/servicios/incineracion-presencial"
                  onClick={toggleMenu}
                  className="hover:text-blue-600 transition-colors"
                >
                  Cremación Presencial
                </Link>
              </div>
            )}
          </div>
          <Link href="/quien-somos" onClick={toggleMenu} className="hover:text-blue-600 transition-colors">
            Quien Somos
          </Link>
          <Link href="/contacto" onClick={toggleMenu} className="hover:text-blue-600 transition-colors">
            Contacto
          </Link>
          <Link href="/faq" onClick={toggleMenu} className="hover:text-blue-600 transition-colors">
            Preguntas
          </Link>
          <Link href="/calculadora" onClick={toggleMenu} className="hover:text-blue-600 transition-colors">
            Calculadora
          </Link>
        </nav>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-6">
          <a
            href="https://wa.me/34684418499"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            onClick={() => handleWhatsAppClick("Header - Mobile Menu Icon")}
          >
            <FaWhatsapp size={24} className="text-green-500" />
          </a>
          <a href="tel:+34684418499" aria-label="Llamar">
            <Phone size={24} className="text-blue-700" />
          </a>
          <a href="mailto:luzanimalbcn@gmail.com" aria-label="Email">
            <Mail size={24} className="text-gray-700" />
          </a>
        </div>
      </aside>
    </header>
  );
}