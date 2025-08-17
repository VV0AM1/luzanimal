"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function TrayectoriaCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const { clientWidth } = carouselRef.current;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -clientWidth * 0.6 : clientWidth * 0.6,
      behavior: "smooth",
    });
  };

  const images = [
    "/images/tanatorio-1.jpeg",
    "/images/tanatorio-2.jpeg",
    "/images/tanatorio-3.jpeg",
    "/images/tanatorio-4.jpeg",
  ];

  return (
    <motion.div
      className="relative w-full overflow-hidden rounded-3xl shadow-xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="relative min-w-[85%] md:min-w-[60%] lg:min-w-[55%] h-72 snap-center rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all"
          >
            <Image
              src={src}
              alt={`Instalaciones de Luz Animal - foto ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
      >
        <FaChevronLeft className="text-[var(--blue-700)] w-5 h-5" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
      >
        <FaChevronRight className="text-[var(--blue-700)] w-5 h-5" />
      </button>
    </motion.div>
  );
}