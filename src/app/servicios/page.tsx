import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { SERVICIOS } from "@/data/servicios";
import {
  Briefcase,
  Headphones,
  Truck,
  Package,
  PhoneCall,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios | IKOMI PERÚ - Ventas, Asesoría y Delivery de Repuestos",
  description:
    "Descubre los servicios de IKOMI Perú: Venta mayorista y minorista de repuestos automotrices, asesoría técnica calificada, servicio de entrega a domicilio y despacho nacional.",
};

export default function ServiciosPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "shopping-bag":
        return <Briefcase className="w-8 h-8 text-red-500" />;
      case "headphones":
        return <Headphones className="w-8 h-8 text-red-500" />;
      case "truck":
        return <Truck className="w-8 h-8 text-red-500" />;
      default:
        return <Package className="w-8 h-8 text-red-500" />;
    }
  };

  return (
    <div className="bg-[#1f2227] text-white min-h-screen py-16 md:py-24 relative overflow-hidden">
      {/* Decorative slant overlay matching IKOMI screenshot */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-slate-900 transform -skew-y-1 origin-top-left" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="SERVICIOS"
          subtitle="Estamos listos para atenderte."
          theme="dark"
        />

        {/* 4 Service Cards matching Image 6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-10">
          {SERVICIOS.map((servicio) => (
            <div
              key={servicio.id}
              className="bg-[#2a2d34] hover:bg-[#32363e] rounded-xl p-6 sm:p-8 border border-slate-700/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex items-start gap-5 group"
            >
              <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/30 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {getIcon(servicio.iconName)}
              </div>

              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors underline decoration-red-500 underline-offset-4">
                  {servicio.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {servicio.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-700/50 space-y-1.5">
                  {servicio.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/60 to-slate-900/80 rounded-2xl p-8 border border-blue-800/40 text-center max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            ¿Requieres cotización para tu taller o flota?
          </h3>
          <p className="text-sm text-slate-300 mt-2 max-w-xl mx-auto">
            Atendemos pedidos por mayor con descuentos por volumen y facilidades de pago para clientes corporativos recurrentes.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ikomi-red hover:bg-red-700 text-white font-bold text-sm rounded-lg shadow-md transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contactar a Ventas Corporativas</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
