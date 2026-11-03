import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import BrandsCarousel from "@/components/BrandsCarousel";
import { getAllProducts } from "@/data/productos";
import { SERVICIOS } from "@/data/servicios";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Clock,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Inicio | IKOMI PERÚ - Repuestos para Camiones y Buses",
  description:
    "Especialistas en repuestos de Korea y Japón para camiones Hyundai, Kia, Isuzu, Mitsubishi y Hino. Venta mayorista y minorista con envíos a todo el Perú.",
};

export default function HomePage() {
  const products = getAllProducts().slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Trust & Guarantee Banner */}
      <section className="bg-slate-100 border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-ikomi-blue/10 text-ikomi-blue flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-ikomi-blue" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Garantía de Fábrica</h4>
                <p className="text-xs text-slate-500">Repuestos 100% verificados OEM</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-ikomi-red/10 text-ikomi-red flex items-center justify-center flex-shrink-0">
                <Truck className="w-5 h-5 text-ikomi-red" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Despachos a Provincias</h4>
                <p className="text-xs text-slate-500">Envíos diarios vía agencias</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Atención Rápida</h4>
                <p className="text-xs text-slate-500">Cotización técnica inmediata</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-bold text-sm">RUC 20522459829</h4>
                <p className="text-xs text-slate-500">Empresa formalmente constituida</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Productos Destacados"
            subtitle="Repuestos de alto rendimiento para flotas de carga pesada y transporte de pasajeros."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/productos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-ikomi-blue hover:bg-blue-900 text-white font-bold text-sm transition-colors shadow-md"
            >
              <span>Ver Todos los Repuestos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brands Carousel Section */}
      <BrandsCarousel />

      {/* Services Preview Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nuestros Servicios"
            subtitle="Soluciones integrales de abastecimiento para mecánicos, empresas de transporte y flotas comerciales."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICIOS.slice(0, 2).map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <Link
                  href="/servicios"
                  className="text-xs font-bold text-ikomi-blue hover:text-ikomi-red inline-flex items-center gap-1 transition-colors mt-auto"
                >
                  <span>Conocer más servicios</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-ikomi-blue">
            ¿Buscas un repuesto específico para tu camión?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Nuestro equipo de ventas técnicas consulta catálogos por número de chasis o muestra física en Lima.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-ikomi-red hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg shadow transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contactar con Asesor</span>
            </Link>
            <a
              href="tel:985068416"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-6 py-3 rounded-lg border border-slate-300 shadow-sm transition-colors"
            >
              <span>Llamar al 985 068 416</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}