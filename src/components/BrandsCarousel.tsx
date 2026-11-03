"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MARCAS } from "@/data/marcas";
import { ShieldCheck, ArrowRight } from "lucide-react";

export function BrandsCarousel() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  return (
    <section className="py-12 bg-slate-900 text-white overflow-hidden relative border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-ikomi-gold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            Marcas Homologadas y Garantizadas
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
            Líderes de la Industria Automotriz Asiática
          </h3>
        </div>
        <Link
          href="/marcas"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-ikomi-gold hover:text-white uppercase tracking-wider transition-colors"
        >
          <span>Conoce todas las marcas</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Grid of Brand Badges with Interactive Hover Animation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {MARCAS.map((marca) => {
            const isSelected = selectedBrand === marca.id;
            return (
              <div
                key={marca.id}
                onMouseEnter={() => setSelectedBrand(marca.id)}
                onMouseLeave={() => setSelectedBrand(null)}
                className={`group relative bg-slate-800/80 hover:bg-slate-800 border rounded-xl p-4 text-center cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${
                  isSelected
                    ? "border-ikomi-gold shadow-lg shadow-amber-500/10 scale-105"
                    : "border-slate-700/80 hover:border-slate-500"
                }`}
              >
                <div className="h-10 flex items-center justify-center">
                  <span className="font-black text-sm sm:text-base tracking-tight text-white group-hover:text-ikomi-gold transition-colors">
                    {marca.logoText}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 font-medium truncate">
                  {marca.badge}
                </p>
                <span className="inline-block mt-2 text-[10px] text-slate-500 font-mono">
                  {marca.country}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BrandsCarousel;
