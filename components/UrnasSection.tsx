"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import "@/app/styles/quien-somos.css";
import { useState } from "react";
const EASE = [0.25, 0.1, 0.25, 1] as const;
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};


type Urna = {
  id: string;
  title: string;
  subtitle?: string;
  priceLabel: "Gratis" | "Consultar" | `${number}€`;
  priceValue?: number;
  image: string; 
  category: "Incluidas" | "Biodegradables" | "Madera" | "Bambú" | "Cerámica" | "Recuerdos";
};

const URNAS: Urna[] = [

 {
    id: "metal-mate",
    title: "Urna funeraria metálica con acabado mate",
    priceLabel: "Gratis",
    image: "/images/urnas/urna_ceramica_metal.webp",
    category: "Incluidas",
  },

  {
    id: "madera-blanco-negro",
    title: "Urna de madera (placa blanco/negro)",
    priceLabel: "28€",
    priceValue: 28,
    image: "/images/urnas/urna_madera_blanco_negro.webp",
    category: "Madera",
  },
  {
    id: "madera-con-foto",
    title: "Urna de madera con foto",
    priceLabel: "Consultar",
    image: "/images/urnas/urna_madera_con_foto.webp",
    category: "Madera",
  },
  {
    id: "madera-con-2-fotos",
    title: "Urna de madera con 2 fotos",
    priceLabel: "Consultar",
    image: "/images/urnas/urna_con_2_fotos.webp",
    category: "Madera",
  },

  {
    id: "bambu-cilindro",
    title: "Urna de bambú",
    priceLabel: "35€",
    priceValue: 35,
    image: "/images/urnas/urna_ceramica_bamboo.webp", 
    category: "Bambú",
  },

  {
    id: "ceramica-gato",
    title: "Urna de cerámica (gato)",
    priceLabel: "Consultar",
    image: "/images/urnas/urna_ceramica_gatos.webp",
    category: "Cerámica",
  },
  {
    id: "ceramica-gato-par",
    title: "Urna cerámica gatos (par)",
    priceLabel: "Consultar",
    image: "/images/urnas/urna_ceramica_gatos_2.webp",
    category: "Cerámica",
  },
  {
    id: "ceramica-perro",
    title: "Urna de cerámica (perro)",
    priceLabel: "Consultar",
    image: "/images/urnas/urna_ceramica_perro.webp",
    category: "Cerámica",
  },
  {
    id: "ceramica-conejo",
    title: "Urna de cerámica (conejo)",
    priceLabel: "Consultar",
    image: "/images/urnas/urna_ceramica_rabbit.webp",
    category: "Cerámica",
  },
  {
    id: "ceramica-corazon",
    title: "Urna de cerámica corazón",
    priceLabel: "Consultar",
    image: "/images/urnas/urna_ceramica_corazon.webp",
    category: "Cerámica",
  },
  {
    id: "ceramica-ovalada",
    title: "Urna de cerámica ovalada",
    priceLabel: "Consultar",
    image: "/images/urnas/urna_ceramica_ovalada.webp",
    category: "Cerámica",
  },
  {
    id: "ceramica-bubbles-1",
    title: "Urna cerámica Bubbles",
    subtitle: "Varios colores",
    priceLabel: "Consultar",
    image: "/images/urnas/urna_ceramica_bubbles.webp",
    category: "Cerámica",
  },
  {
    id: "ceramica-bubbles-2",
    title: "Urna cerámica Bubbles",
    subtitle: "Varios colores",
    priceLabel: "Consultar",
    image: "/images/urnas/urna_ceramica_bubbles_2.webp",
    category: "Cerámica",
  },
  {
    id: "ceramica-bubbles-3",
    title: "Urna cerámica Bubbles",
    subtitle: "Varios colores",
    priceLabel: "Consultar",
    image: "/images/urnas/urna_ceramica_bubbles_3.webp",
    category: "Cerámica",
  },
  {
    id: "ceramica-geometry",
    title: "Urna cerámica Geometry",
    priceLabel: "Consultar",
    image: "/images/urnas/urna_ceramica_geometry.webp",
    category: "Cerámica",
  },
  {
    id: "ceramica-yin-yang",
    title: "Urna cerámica Yin-Yang",
    priceLabel: "Consultar",
    image: "/images/urnas/urna_ceramica_yinyang.webp",
    category: "Cerámica",
  },

  {
    id: "huella-con-foto",
    title: "Huella de mascota con foto (recuerdo)",
    priceLabel: "Consultar",
    image: "/images/urnas/huella_de_mascota_con_foto.webp",
    category: "Recuerdos",
  },
];

const CATS: Array<Urna["category"]> = [
  "Incluidas", "Madera", "Bambú", "Cerámica", "Biodegradables", "Recuerdos"
]; 


const SITE_URL = "https://www.luzanimal.com";

export default function UrnasSection() {

    const [activeCat, setActiveCat] = useState<Urna["category"] | "Todas">("Todas");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Urnas", "item": `${SITE_URL}/urnas` }
        ]
      },
      {
        "@type": "CollectionPage",
        "name": "Urnas para cenizas de mascotas",
        "url": `${SITE_URL}/urnas`,
        "inLanguage": "es-ES",
        "isPartOf": { "@type": "WebSite", "name": "Luz Animal", "url": SITE_URL },
        "about": { "@type": "Thing", "name": "Urnas para mascotas" },
        "description":
          "Urnas metálicas incluidas y catálogo de urnas biodegradables, de madera y cerámica."
      },
      {
        "@type": "ItemList",
        "itemListElement": URNAS.map((u, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "item": {
            "@type": "Product",
            "name": u.title,
            "category": u.category,
            "image": `${SITE_URL}${u.image}`,
            "url": `${SITE_URL}/urnas#${u.id}`,
            "offers":
              u.priceValue != null
                ? {
                    "@type": "Offer",
                    "priceCurrency": "EUR",
                    "price": u.priceValue,
                    "availability": "https://schema.org/InStock",
                  }
                : {
                    "@type": "Offer",
                    "priceCurrency": "EUR",
                    "price": 0,
                    "availability": "https://schema.org/PreOrder",
                    "description":
                      u.priceLabel === "Gratis" ? "Incluida en el servicio" : "Consultar precio",
                  },
          },
        })),
      },
    ],
  };

  return (
    

    <main className="relative text-[var(--text-main)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--blue-50)] via-white to-[var(--blue-100)]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/noise.jpg')] opacity-[0.05]" />

      <header className="relative h-[36vh] md:h-[46vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/servicios-bg.jpg"
          alt="Urnas para cenizas de mascotas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
        <div className="relative z-10 max-w-3xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow">
            Urnas para cenizas de mascotas
          </h1>
          <p className="mt-3 text-white/95 text-lg leading-relaxed">
            Urnas incluidas y modelos opcionales para personalizar la despedida.
          </p>
        </div>
      </header>

      <nav aria-label="breadcrumbs" className="relative z-10 max-w-7xl mx-auto px-6 py-3 text-sm">
        <ol className="flex flex-wrap items-center gap-2 text-blue-900/80">
          <li><Link href="/" className="hover:underline">Inicio</Link></li>
          <li aria-hidden>›</li>
          <li className="font-semibold">Urnas</li>
        </ol>
      </nav>

        <section className="relative z-10 max-w-7xl mx-auto px-6 pb-16">
        <div className="flex flex-wrap gap-2 mb-6">
            {["Todas", ...CATS].map((c) => (
            <button
                key={c}
                onClick={() => setActiveCat(c as any)}
                className={[
                "px-3 py-1.5 rounded-full text-sm border",
                activeCat === c
                    ? "bg-[var(--blue-700)] text-white border-[var(--blue-700)]"
                    : "bg-white text-[var(--blue-800)] border-blue-200 hover:bg-blue-50"
                ].join(" ")}
            >
                {c === "Todas" ? "Todas" : c === "Incluidas" ? "Incluidas" : ` ${c}`}
            </button>
            ))}
        </div>

        {(activeCat === "Todas" ? CATS : CATS.filter(c => c === activeCat)).map((cat) => {
            const items = URNAS.filter((u) => u.category === cat);
            if (!items.length) return null;
            return (
            <div key={cat} className="mt-10">
                <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-4 tracking-tight">
                {cat === "Incluidas" ? "Urnas incluidas" : cat === "Recuerdos" ? "Recuerdos" : `Urnas ${cat.toLowerCase()}`}
                </h2>

                <div
                className={[
                    "grid gap-6",
                    items.length === 1
                    ? "grid-cols-[minmax(260px,360px)] justify-start"
                    : "[grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]"
                ].join(" ")}
                >
                {items.map((u) => (
                    <motion.article
                    key={u.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeUp}
                    className="group rounded-3xl overflow-hidden border border-blue-100 shadow-[0_22px_60px_-25px_rgba(0,0,0,0.25)] bg-white"
                    >
                    <div className="relative h-56">
                        <Image
                        src={u.image}
                        alt={u.title}
                        fill
                        sizes="(min-width:1024px) 33vw, 100vw"
                        className="object-cover"
                        />
                        <span
                        className={[
                            "absolute top-4 right-4 inline-block rounded-full px-3 py-1 text-sm font-semibold text-white shadow",
                            u.priceLabel === "Gratis"
                            ? "bg-emerald-700/90"
                            : u.priceLabel === "Consultar"
                            ? "bg-stone-700/90"
                            : "bg-blue-700/90",
                        ].join(" ")}
                        >
                        {u.priceLabel}
                        </span>
                    </div>
                    <div className="p-5 text-center">
                        <h3 className="text-lg font-semibold text-blue-900 leading-snug">{u.title}</h3>
                        {u.subtitle && <p className="text-sm text-blue-900/75 mt-1">{u.subtitle}</p>}
                    </div>
                    </motion.article>
                ))}
                </div>
            </div>
            );
        })}
        </section>

      {/* CTA Final */}
      <section className="relative z-10">
        <div className="bg-gradient-to-r from-[var(--blue-500)] to-[var(--blue-700)] text-white py-12">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              ¿Quieres ver medidas, colores o personalizaciones?
            </h2>
            <p className="mt-2 text-white/95">
              Escríbenos por WhatsApp y te enseñamos catálogos y disponibilidad.
            </p>
            <div className="mt-6">
              <a
                href="https://wa.me/34684416567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[var(--blue-800)] hover:bg-white/95 rounded-full px-7 py-3 font-semibold shadow-lg"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Script id="ld-urnas" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
    </main>
  );
}