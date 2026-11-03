import React from "react";
import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { MARCAS } from "@/data/marcas";
import { Shield, CheckCircle2, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Marcas | IKOMI PERÚ - Sangsin Brake, Valeo, TCIC, Hansang, Mando, Yulim",
  description:
    "Distribuidor de las marcas de autopartes más prestigiosas de Corea y Japón: Sangsin Brake, PHC Valeo, Mando, TCIC, Hansang y Yulim. Repuestos con certificación OEM.",
};

export default function MarcasPage() {
  return (
    <div className="bg-[#1f2227] text-white min-h-screen py-16 md:py-24 relative overflow-hidden">
      {/* Top slant header effect */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-slate-900 transform -skew-y-1 origin-top-left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="MARCAS"
          subtitle="Contamos con las marcas más reconocidas en el mercado nacional e internacional especializadas en la fabricación de repuestos para vehículos con altos estándares de calidad."
          theme="dark"
        />

        {/* 6 Brand Cards Grid matching Image 8 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {MARCAS.map((marca) => (
            <div
              key={marca.id}
              className="bg-white text-slate-900 rounded-xl p-6 sm:p-8 shadow-lg border border-slate-200 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 group"
            >
              <div>
                {/* Brand Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-ikomi-red" />
                    <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-ikomi-blue transition-colors">
                      {marca.logoText}
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                    {marca.country}
                  </span>
                </div>

                {/* Badge */}
                <div className="mb-4 inline-flex items-center gap-1.5 text-xs font-bold text-ikomi-red bg-red-50 px-2.5 py-1 rounded-md">
                  <Award className="w-3.5 h-3.5" />
                  <span>{marca.badge}</span>
                </div>

                {/* Description matching screenshot */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {marca.description}
                </p>
              </div>

              {/* Specialty footer */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Especialidad:
                </span>
                <div className="flex items-start gap-1.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{marca.specialty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
