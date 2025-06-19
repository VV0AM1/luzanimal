'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
    id='home'
      className="relative h-[100vh] bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/pet_bg.jpg')",
      }}
    >
      <div className="bg-black/50 absolute inset-0 z-0" />

      <div className="absolute top-10 left-10 w-12 h-12 opacity-30 animate-float-slow pointer-events-none">
        <img src="/images/paw.svg" alt="Paw" className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 right-16 w-16 h-16 opacity-20 animate-float-slower pointer-events-none">
        <img src="/images/paw.svg" alt="Paw" className="w-full h-full" />
      </div>
      <div className="absolute top-1/2 left-1/3 w-10 h-10 opacity-25 animate-float-slow pointer-events-none">
        <img src="/images/paw.svg" alt="Paw" className="w-full h-full" />
      </div>

      <div
        className={`relative z-10 text-center px-4 transition-all duration-1000 ease-out ${
          animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h1 className="hero-title relative text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Despedida con Amor para tu Mascota
        </h1>
        <p className="text-lg md:text-xl mb-6 drop-shadow-md">
          Cremación respetuosa y profesional en Barcelona
        </p>

        <a
          href="https://wa.me/34684418499"
          className="border-2 border-blue-500 inline-block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-500 ease-in-out hover:bg-white hover:text-blue-600 hover:from-white hover:to-white hover:via-white hover:shadow-xl hover:border-blue-600 animate-pulse-on-hover"
        >
          Contacta Ahora
        </a>
      </div>
    </section>
  );
}