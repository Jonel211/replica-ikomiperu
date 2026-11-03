"use client";

import React, { useEffect, useState } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";

export function WhatsAppButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside
      aria-label="Canales de atención directa y accesibilidad"
      className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3"
    >
      {/* Scroll to Top button matching screenshots */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Volver al inicio de la página"
          className="w-10 h-10 rounded-lg bg-ikomi-red hover:bg-red-700 text-white flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/51985068416?text=Hola%20IKOMI%20Per%C3%BA,%20deseo%20cotizar%20repuestos%20para%20camiones"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a IKOMI Perú por WhatsApp"
        className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-400 group"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="sr-only">Contactar por WhatsApp</span>
      </a>
    </aside>
  );
}

export default WhatsAppButton;
