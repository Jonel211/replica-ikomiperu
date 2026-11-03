import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { CheckCircle2, ShieldCheck, Target, Award, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros | IKOMI PERÚ S.R.L.",
  description:
    "Conoce más sobre IKOMI Perú S.R.L., empresa líder en la importación y comercialización de repuestos automotrices para camiones y buses con más de 15 años en el mercado peruano.",
};

const CORPORATE_CARDS = [
  {
    title: "Equipo",
    description: "Personal técnico especializado y apasionado por brindar soporte exacto en cada requerimiento vehicular.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    alt: "Equipo humano y asesores técnicos de IKOMI Perú",
  },
  {
    title: "Almacen",
    description: "Instalaciones de almacenamiento de gran envergadura con miles de códigos en inventario permanente.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    alt: "Almacén central de repuestos automotrices de IKOMI Perú",
  },
  {
    title: "Tienda",
    description: "Punto de atención y ventas en Ate con exhibición directa de repuestos, mostrador y despacho.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    alt: "Local comercial y tienda física de IKOMI Perú en Ate Lima",
  },
  {
    title: "Empresa",
    description: "Sede central corporativa ubicada estratégicamente en Lima Este para la distribución a nivel nacional.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    alt: "Sede corporativa de IKOMI Perú S.R.L.",
  },
];

export default function NosotrosPage() {
  return (
    <div className="py-12 md:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Sobre Nosotros"
          subtitle="Trayectoria, compromiso y liderazgo en la importación de autopartes desde Corea del Sur y Japón."
        />

        {/* 4 Reference Cards matching Image 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {CORPORATE_CARDS.map((card, idx) => (
            <div
              key={card.title}
              className={`bg-white shadow-md border border-slate-200 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${idx === 3 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
            >
              {/* Header bar matching screenshot styling (#4a4d52) */}
              <div className="bg-[#4d5156] text-white py-3 px-4 text-center">
                <h3 className="text-lg font-bold tracking-wide">{card.title}</h3>
              </div>

              {/* Photo using next/image */}
              <div className="relative w-full h-64 bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Description */}
              <div className="p-5 flex-grow flex items-center">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Mission, Vision & Values */}
        <div className="bg-white shadow-sm border border-slate-200 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-ikomi-blue/10 text-ikomi-blue flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Nuestra Misión</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Brindar soluciones oportunas y de alta precisión en repuestos para el transporte pesado y comercial en el Perú, asegurando que las flotas continúen rodando con piezas de procedencia garantizada.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-ikomi-red/10 text-ikomi-red flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Nuestra Visión</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Consolidarnos como el importador de mayor confianza y referencia a nivel nacional en autopartes asiáticas, reconocidos por la autenticidad de nuestras marcas y la cercanía en el trato con el cliente.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Nuestros Valores</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Integridad y transparencia en cada venta</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Compromiso con el transportista nacional</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Calidad y homologación OEM certificada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}