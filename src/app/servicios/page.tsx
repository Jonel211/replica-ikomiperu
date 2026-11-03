import React from "react";
import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { SERVICIOS } from "@/data/servicios";
import {
  Briefcase,
  ClipboardList,
  BarChart,
  Binoculars,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios | IKOMI PERÚ - Ventas, Asesoría y Delivery de Repuestos",
  description:
    "Descubre los servicios de IKOMI Perú: Venta mayorista y minorista de repuestos automotrices, asesoría técnica calificada, servicio de entrega a domicilio y despacho nacional.",
};

export default function ServiciosPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ventas":
        return <Briefcase className="w-8 h-8 text-[#df3844] stroke-[1.5]" />;
      case "asesoria":
        return <ClipboardList className="w-8 h-8 text-[#df3844] stroke-[1.5]" />;
      case "delivery":
        return <BarChart className="w-8 h-8 text-[#df3844] stroke-[1.5]" />;
      case "productos":
        return <Binoculars className="w-8 h-8 text-[#df3844] stroke-[1.5]" />;
      default:
        return <Briefcase className="w-8 h-8 text-[#df3844] stroke-[1.5]" />;
    }
  };

  return (
    <div className="bg-[#1c1c1c] text-white min-h-screen py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Título de la sección ajustado al estilo de la imagen */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase tracking-wider text-white">
            SERVICIOS
          </h2>
          <div className="w-10 h-[2px] bg-[#df3844] mx-auto mt-4 mb-6"></div>
          <p className="text-slate-200">
            Estamos listos para atenderte.
          </p>
        </div>

        {/* Grid de 4 tarjetas idénticas a la imagen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {SERVICIOS.map((servicio) => (
            <div
              key={servicio.id}
              className="bg-[#262626] rounded-md p-8 flex items-start gap-5"
            >
              <div className="flex-shrink-0 mt-1">
                {getIcon(servicio.iconName)}
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-3 underline decoration-white underline-offset-4">
                  {servicio.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed pr-4">
                  {servicio.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}