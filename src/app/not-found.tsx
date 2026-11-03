import React from "react";
import Link from "next/link";
import { AlertTriangle, Home, Wrench, PhoneCall } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-lg w-full text-center bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-12">
        <div className="w-16 h-16 rounded-full bg-red-100 text-ikomi-red flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-9 h-9" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-ikomi-red block mb-1">
          Error 404
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Página o Repuesto No Encontrado
        </h1>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          La ruta que intentas consultar no existe, ha sido trasladada o el repuesto ya no se encuentra en nuestro inventario actual.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-ikomi-blue hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow"
          >
            <Home className="w-4 h-4" />
            <span>Ir al Inicio</span>
          </Link>

          <Link
            href="/productos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <Wrench className="w-4 h-4" />
            <span>Ver Catálogo</span>
          </Link>

          <Link
            href="/contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-ikomi-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Consultar Asesor</span>
          </Link>
        </div>

        <p className="mt-8 text-[11px] text-slate-400">
          IKOMI PERÚ S.R.L. &bull; RUC: 20522459829 &bull; Ate, Lima
        </p>
      </div>
    </div>
  );
}
