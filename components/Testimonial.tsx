"use client";

import { useEffect, useRef, useState, useMemo, KeyboardEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Script from "next/script";
import "@/app/styles/quien-somos.css";

type Review = {
  name: string;
  comment: string;
  rating: number; 
  date: string;   
};

const reviews: Review[] = [
  { name: "Laura G.",  comment: "El servicio fue impecable y muy humano. Me ayudaron mucho en un momento difícil.", rating: 5, date: "2025-05" },
  { name: "Carlos M.", comment: "Agradezco la atención personalizada y el respeto que tuvieron con mi perro.",         rating: 5, date: "2025-04" },
  { name: "Sofía R.",  comment: "Recomiendo Luz Animal a todos los que buscan un servicio serio y cercano.",          rating: 5, date: "2025-03" },
  { name: "Marta P.",  comment: "Nos dieron mucha tranquilidad. Todo fue claro y con muchísimo respeto.",             rating: 5, date: "2025-02" },
  { name: "Jordi T.",  comment: "Excelente atención y trato. La ceremonia fue muy íntima y cuidada.",                 rating: 5, date: "2025-01" },
  { name: "Núria S.",  comment: "Muy profesionales y cercanos. Gracias por acompañarnos en un momento tan duro.",     rating: 5, date: "2024-12" },
];

const SITE_URL = "https://www.luzanimal.com";
const ORG_ID = `${SITE_URL}/#luz-animal`;

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const reduceMotion = useReducedMotion();

  const { avg, count } = useMemo(() => {
    const total = reviews.reduce((s, r) => s + (r.rating || 0), 0);
    const c = reviews.length || 1;
    return { avg: +(total / c).toFixed(2), count: reviews.length };
  }, []);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-card]"));
    if (!cards.length) return;
    const target = cards[(index + cards.length) % cards.length];
    track.scrollTo({ left: target.offsetLeft, behavior: reduceMotion ? "auto" : "smooth" });
  };

  useEffect(() => {
    const onResize = () => scrollToIndex(current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [current]); 

  const next = () => {
    const nextIndex = (current + 1) % reviews.length;
    setCurrent(nextIndex);
    scrollToIndex(nextIndex);
  };

  const prev = () => {
    const prevIndex = (current - 1 + reviews.length) % reviews.length;
    setCurrent(prevIndex);
    scrollToIndex(prevIndex);
  };

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": ORG_ID,
    "name": "Luz Animal",
    "url": SITE_URL,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": avg,
      "reviewCount": count,
      "bestRating": 5,
      "worstRating": 1
    },
    "review": reviews.map((r) => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.name },
      "reviewBody": r.comment,
      "datePublished": `${r.date}-01`,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating,
        "bestRating": 5,
        "worstRating": 1
      }
    }))
  };

  return (
    <section
      id="testimonios"
      aria-labelledby="testimonios-title"
      className="relative py-20 md:py-24 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a3a] via-[#132a63] to-[#173a8a]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/noise.jpg')] bg-repeat opacity-[0.07] mix-blend-overlay" />

      <Script id="ld-reviews" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>

      <div className="relative max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h2
            id="testimonios-title"
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Reseñas de nuestros clientes
          </h2>

          <div className="mt-3 flex items-center justify-center gap-2 text-blue-100">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className={`w-4 h-4 ${i < Math.round(avg) ? "text-yellow-400" : "text-blue-200/40"}`} aria-hidden />
              ))}
            </div>
            <span className="text-sm">{avg} / 5 · {count} reseñas</span>
          </div>

          <p className="text-blue-100 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            Historias reales de familias a las que acompañamos con profesionalidad, empatía y respeto.
          </p>

          <div className="mt-6">
            <Link
              href="https://share.google/SgAtDoYNF2s2zB2DU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full shadow transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label="Ver todas nuestras reseñas en Google"
            >
              Ver todas en Google
            </Link>
          </div>
        </header>

        <div className="hidden md:flex justify-end gap-2 mb-3 pr-1">
          <button
            onClick={prev}
            aria-label="Anterior"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white shadow transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            aria-label="Siguiente"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white shadow transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <FaChevronRight />
          </button>
        </div>

        <div
          ref={trackRef}
          className="relative snap-x snap-mandatory overflow-x-auto scrollbar-none pb-4 focus:outline-none"
          role="region"
          aria-label="Carrusel de reseñas"
          tabIndex={0}
          onKeyDown={onKey}
        >
          <p className="sr-only" aria-live="polite">
            Reseña {current + 1} de {reviews.length}
          </p>

          <div className="flex gap-6 min-w-full pr-4">
            {reviews.map((r, i) => (
              <motion.blockquote
                key={`${r.name}-${r.date}-${i}`}
                data-card
                className="snap-start shrink-0 w-[92%] sm:w-[70%] md:w-[46%] lg:w-[32%] relative bg-white/95 backdrop-blur rounded-3xl p-7 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.45)] border border-white/70"
                initial={reduceMotion ? {} : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                aria-label={`Reseña de ${r.name}`}
              >
                <svg
                  aria-hidden
                  className="text-blue-500/70 w-6 h-6 absolute top-5 left-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6v-6H5.5A2.5 2.5 0 0 1 8 9.5V6H7.17Zm9 0A5.17 5.17 0 0 0 11 11.17V18h6v-6h-2.5A2.5 2.5 0 0 1 17 9.5V6h-.83Z" />
                </svg>

                <p className="text-gray-800 mt-6 mb-5 leading-relaxed text-base">
                  “{r.comment}”
                </p>

                <div className="flex items-center gap-1 mb-2" aria-label={`Puntuación ${r.rating} de 5`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <FaStar
                      key={s}
                      className={`w-4 h-4 ${s < r.rating ? "text-yellow-400" : "text-gray-300"}`}
                      aria-hidden
                    />
                  ))}
                </div>

                <footer className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-gray-900">— {r.name}</span>
                  <time className="text-gray-500" dateTime={`${r.date}-01`}>
                    {r.date}
                  </time>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>

        <div className="md:hidden mt-4 flex justify-center gap-3">
          <button
            onClick={prev}
            aria-label="Anterior"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white shadow transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            aria-label="Siguiente"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white shadow transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}