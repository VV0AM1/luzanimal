"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  X,
  Menu,
  Phone,
  ChevronDown,
  Mail,
  Home,
  Package,
  HelpCircle,
  Calculator,
  User,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import "@/app/styles/quien-somos.css";
import { useTracking } from "@/app/context/TrackingContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const { trackEvent } = useTracking();

  const PHONE_MAIN_DISPLAY = "+34 684 41 65 67";
  const PHONE_MAIN_E164 = "34684416567";
  const PHONE_LANDLINE = "+34 935 851 040";
  const EMAIL = "luzanimalbcn@gmail.com";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const main = document.getElementById("main");
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      main?.setAttribute("inert", "");
    } else {
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
    }
    return () => {
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!desktopDropdownRef.current) return;
      if (!desktopDropdownRef.current.contains(e.target as Node)) {
        setDesktopServicesOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const handleWhatsAppClick = (source: string) =>
    trackEvent("whatsapp_click", {
      source,
      phone: PHONE_MAIN_E164,
      timestamp: new Date().toISOString(),
    });

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-blue-100"
          : "bg-white/95 md:bg-transparent md:shadow-none",
      ].join(" ")}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 bg-blue-700 text-white px-3 py-1 rounded"
      >
        Saltar al contenido
      </a>

      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between">
        <Link href="/" aria-label="Ir al inicio" className="flex items-center gap-2">
          <Image src="/images/pet_logo.png" alt="Luz Animal" width={32} height={32} className="w-8 h-8" priority />
          <span
            className={[
              "text-2xl font-extrabold select-none",
              scrolled ? "text-blue-800" : "text-blue-800 md:text-white md:drop-shadow",
            ].join(" ")}
          >
            Luz Animal
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold">
          <li>
            <Link href="/" className={scrolled ? "text-gray-700 hover:text-blue-600" : "text-blue-50 hover:text-white"}>
              Home
            </Link>
          </li>

          <li className="relative">
            <button
              type="button"
              onClick={() => setDesktopServicesOpen((o) => !o)}
              onMouseEnter={() => setDesktopServicesOpen(true)}
              aria-haspopup="true"
              aria-expanded={desktopServicesOpen}
              aria-controls="desktop-services-menu"
              className={["flex items-center gap-1", scrolled ? "text-gray-700 hover:text-blue-600" : "text-blue-50 hover:text-white"].join(" ")}
            >
             <Link href="/servicios" className="flex items-center justify-center">
               Servicios <ChevronDown className="w-4 h-4" />
             </Link>
            </button>

            <div
              ref={desktopDropdownRef}
              id="desktop-services-menu"
              className={[
                "absolute left-0 top-full mt-2 w-64 rounded-xl border shadow-xl bg-white transition-all duration-200 origin-top",
                desktopServicesOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none",
              ].join(" ")}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <ul className="py-2">
                <li>
                  <Link href="/servicios/incineracion-individual" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                    Incineración Individual
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/incineracion-colectiva" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                    Incineración Colectiva
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/incineracion-presencial" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                    Incineración Presencial
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link href="/quien-somos" className={scrolled ? "text-gray-700 hover:text-blue-600" : "text-blue-50 hover:text-white"}>
              Quiénes somos
            </Link>
          </li>
          <li>
            <Link href="/contacto" className={scrolled ? "text-gray-700 hover:text-blue-600" : "text-blue-50 hover:text-white"}>
              Contacto
            </Link>
          </li>
          <li>
            <Link href="/faq" className={scrolled ? "text-gray-700 hover:text-blue-600" : "text-blue-50 hover:text-white"}>
              Preguntas
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/calculadora" className={scrolled ? "text-gray-700 hover:text-blue-600" : "text-blue-50 hover:text-white"}>
              Calculadora
            </Link>
            <Calculator className={scrolled ? "w-5 h-5 text-gray-700 ml-2" : "w-5 h-5 text-blue-50 ml-2"} />
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`https://wa.me/${PHONE_MAIN_E164}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleWhatsAppClick("Header - Desktop")}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white px-3 py-1.5 text-sm shadow hover:from-green-600/90 hover:to-green-500/90"
          >
            <FaWhatsapp className="w-4 h-4" />
            {PHONE_MAIN_DISPLAY}
          </a>
          <a
            href={`tel:+${PHONE_MAIN_E164}`}
            onClick={() => handleWhatsAppClick("Mobile - Desktop-Header")}
            className={[
              "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm border",
              scrolled ? "border-blue-200 text-blue-800 hover:bg-blue-50" : "border-white/40 text-blue-50 hover:bg-white/10",
            ].join(" ")}
          >
            <Phone className="w-4 h-4" />
            {PHONE_LANDLINE}
          </a>
        </div>

        <button
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden p-2 rounded-md text-blue-800"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed left-0 right-0 bottom-0 top-[56px] bg-black/55 transition-opacity duration-300 md:hidden z-[10000] ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={[
          "md:hidden fixed left-0 right-0 top-[56px] w-full ",
          "z-[10001] transition-transform duration-300 ease-out",
          mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Menú móvil"
      >
        <div className=" border-blue-100 bg-white/95 shadow-2xl overflow-hidden max-h-[80dvh]">
          <nav className="px-6 py-4 overflow-y-auto">
            <ul className="space-y-1 text-blue-900">
              <li>
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-blue-50"
                >
                  <Home className="w-5 h-5" /> Home
                </Link>
              </li>

              {/* Servicios accordion */}
              <li>
                <button
                  onClick={() => setServicesOpen((o) => !o)}
                  aria-expanded={servicesOpen}
                  aria-controls="m-services"
                  className="w-full flex items-center justify-between px-3 py-3 rounded-lg hover:bg-blue-50"
                >
                  <span className="flex items-center gap-3">
                    <Package className="w-5 h-5" /> Servicios
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  id="m-services"
                  className={[
                    "grid transition-[grid-template-rows] duration-300 ease-in-out",
                    servicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  ].join(" ")}
                >
                  <div className="overflow-hidden pl-10 pr-3">
                    <ul className="py-1">
                      <li>
                        <Link
                          href="/servicios/incineracion-individual"
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 rounded-lg hover:bg-blue-50"
                        >
                          Incineración Individual
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/servicios/incineracion-colectiva"
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 rounded-lg hover:bg-blue-50"
                        >
                          Incineración Colectiva
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/servicios/incineracion-presencial"
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 rounded-lg hover:bg-blue-50"
                        >
                          Incineración Presencial
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <Link
                  href="/quien-somos"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-blue-50"
                >
                  <User className="w-5 h-5" /> Quiénes somos
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-blue-50"
                >
                  <Phone className="w-5 h-5" /> Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-blue-50"
                >
                  <HelpCircle className="w-5 h-5" /> Preguntas
                </Link>
              </li>
              <li>
                <Link
                  href="/calculadora"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-blue-50"
                >
                  <Calculator className="w-5 h-5" /> Calculadora
                </Link>
              </li>
            </ul>

            {/* Quick actions */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href={`https://wa.me/${PHONE_MAIN_E164}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsAppClick("Header - Mobile Dropdown")}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-green-600 to-green-500 text-white py-3 shadow"
              >
                <FaWhatsapp className="w-5 h-5" /> {PHONE_MAIN_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white border border-blue-200 text-blue-800 py-3"
              >
                <Mail className="w-5 h-5" /> Email
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}