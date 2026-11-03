import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Wrench } from "lucide-react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  showBadges?: boolean;
}

export function Hero({
  title = "REPUESTOS EN GENERAL para camiones de todas las marcas.",
  subtitle = "Somos una empresa importadora y comercializadora de repuestos originales y alternativos de alta gama de Korea y Japón.",
  showBadges = true,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white min-h-[520px] md:min-h-[580px] flex items-center">
      {/* Background with gradient and overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 filter grayscale contrast-125 scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      {/* Radial and angular gradients to match IKOMI aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

      {/* Decorative slant border */}
      <div className="absolute -bottom-1 left-0 right-0 h-8 bg-white transform -skew-y-1 origin-bottom-right" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ikomi-red/20 border border-ikomi-red/40 text-red-300 text-xs font-semibold mb-6 uppercase tracking-wider backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-ikomi-red animate-pulse" />
            Especialistas en Camiones y Buses
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase drop-shadow-md">
            {title.includes("REPUESTOS EN GENERAL") ? (
              <>
                <span className="text-white block">REPUESTOS EN GENERAL</span>
                <span className="text-slate-300 text-2xl sm:text-3xl md:text-4xl font-bold normal-case block mt-2">
                  para camiones de todas las marcas.
                </span>
              </>
            ) : (
              title
            )}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-xl">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/productos"
              className="inline-flex items-center gap-2 bg-ikomi-red hover:bg-red-700 text-white font-bold px-6 py-3.5 rounded-lg shadow-lg hover:shadow-red-600/30 transition-all duration-200 text-sm sm:text-base group"
            >
              <span>Ver Catálogo de Repuestos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-lg border border-white/20 backdrop-blur-sm transition-all duration-200 text-sm sm:text-base"
            >
              <span>Cotizar con un Asesor</span>
            </Link>
          </div>

          {/* Value Badges */}
          {showBadges && (
            <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-ikomi-gold flex-shrink-0" />
                <span>Envíos a todo el Perú</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-ikomi-gold flex-shrink-0" />
                <span>Marcas 100% Originales</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-ikomi-gold flex-shrink-0" />
                <span>Garantía y Asesoría</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
