"use client";

import { FaWhatsapp } from 'react-icons/fa';
import { useTracking } from "@/app/context/TrackingContext";

export default function WhatsAppButton() {
  const { trackEvent } = useTracking(); 

  const handleClick = () => {
    trackEvent("whatsapp_click", {
      source: "Floating WhatsApp Button",
      phone: "34684418499",
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <a
      href="https://wa.me/34684416567"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
}