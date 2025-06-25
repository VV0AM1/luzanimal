'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { X, Menu, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((open) => !open);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center transition-all duration-300">

        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2"
        >
          <img
            src="/images/pet_logo.png"
            alt="Logo de Luz Animal - Cremación de Mascotas"
            className="w-8 h-8 object-contain"
          />
          <span className="text-2xl font-extrabold text-blue-800 select-none">
            Luz Animal
          </span>
        </Link>

        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold select-none">
          {[
            { href: '#home', label: 'Home' },
            { href: '#proceso', label: 'Proceso' },
            { href: '#precios', label: 'Precios' },
            { href: '#contacto', label: 'Contacto' },
            { href: '#testimonios', label: 'Testimonios' },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="relative group hover:text-blue-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
                <span
                  className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>

        
        <div className="hidden md:flex flex-col text-sm text-blue-900 font-medium items-end space-y-1">
          <a
            href="https://wa.me/34684418499"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <FaWhatsapp className="text-green-500 w-4 h-4" />
            +34 684 418 499
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
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
            className="p-2 rounded-md text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col mt-12 space-y-6 text-center font-semibold text-gray-800 text-lg select-none px-6">
          {[
            { href: '#home', label: 'Home' },
            { href: '#proceso', label: 'Proceso' },
            { href: '#precios', label: 'Precios' },
            { href: '#contacto', label: 'Contacto' },
            { href: '#testimonios', label: 'Testimonios' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </header>
  );
}
