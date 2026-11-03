import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { MARCAS } from "@/data/marcas";

export const metadata: Metadata = {
  title: "Marcas | IKOMI PERÚ - Sangsin Brake, Valeo, TCIC, Hansang, Mando, Yulim",
  description:
    "Distribuidor de las marcas de autopartes más prestigiosas de Corea y Japón: Sangsin Brake, PHC Valeo, Mando, TCIC, Hansang y Yulim. Repuestos con certificación OEM.",
};

export default function MarcasPage() {
  return (
    <div className="bg-white">
      {/* Slanted dark section matching screenshot */}
      <div
        className="bg-[#1b1b1b] text-white min-h-screen pt-14 pb-20 md:pt-16 md:pb-28"
        style={{
          clipPath: "polygon(0 36px, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12">
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-white">
              MARCAS
            </h1>
            <div className="w-11 h-[2px] bg-[#e52d27] mx-auto my-3" />
            <p className="text-xs sm:text-sm text-neutral-200 max-w-3xl mx-auto leading-relaxed">
              Contamos con las marcas más reconocidas en el mercado nacional e internacional especializadas en la fabricación de repuestos para vehículos con altos estándares de calidad.
            </p>
          </div>

          {/* 6 Brand Cards Grid with Minimal Border Radius */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {MARCAS.map((marca) => (
              <div
                key={marca.id}
                className="bg-white text-neutral-800 rounded-sm p-6 sm:p-7 md:p-8 flex flex-col justify-start shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                {/* Brand Logo Icon */}
                <div className="h-14 flex items-center justify-start mb-6">
                  <Image
                    src={marca.logo}
                    alt={marca.name}
                    width={marca.logoWidth}
                    height={marca.logoHeight}
                    className="max-h-12 w-auto object-contain object-left"
                  />
                </div>

                {/* Brand Description Paragraphs */}
                <div className="space-y-4 text-xs sm:text-[13px] leading-relaxed text-neutral-700">
                  {marca.paragraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
