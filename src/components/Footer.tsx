import React from "react";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Home,
  Building2,
  Briefcase,
  Wrench,
  Shield,
  PhoneCall,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121214] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-2xl font-black tracking-tight text-white uppercase">
              IKOMI PERU
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Empresa importadora y comercializadora de repuestos para todo tipo de vehículos con calidad y a precios de mercado.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-3">
                Síguenos en redes
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-ikomi-blue flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  aria-label="Facebook de IKOMI Perú"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-ikomi-blue flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  aria-label="Twitter de IKOMI Perú"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-ikomi-red flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  aria-label="Instagram de IKOMI Perú"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-ikomi-blue flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  aria-label="LinkedIn de IKOMI Perú"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/51985068416"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  aria-label="WhatsApp directo"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: White Info Cards (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Top wide card: Dirección */}
            <div className="bg-white text-slate-900 rounded-sm p-6 shadow-md text-center border border-slate-100 flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-red-500/20 bg-red-50 text-red-600 flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-base font-extrabold uppercase tracking-wide text-slate-900">
                Dirección
              </h4>
              <p className="text-sm text-slate-600 mt-1 font-medium">
                Avenida Nicolás Ayllón 3384
              </p>
              <p className="text-xs text-slate-500">
                Carretera Central - Paradero Rayovac
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Lima - Ate
              </p>
            </div>

            {/* Bottom 2 side-by-side cards: Correo y Teléfonos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white text-slate-900 rounded-sm p-5 shadow-md text-center border border-slate-100 flex flex-col items-center justify-center">
                <div className="w-11 h-11 rounded-full border-2 border-red-500/20 bg-red-50 text-red-600 flex items-center justify-center mb-2.5">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-extrabold uppercase tracking-wide text-slate-900">
                  Correo
                </h4>
                <a
                  href="mailto:ventas@ikomiperu.com"
                  className="text-xs text-slate-700 hover:text-ikomi-blue mt-1 font-semibold transition-colors"
                >
                  ventas@ikomiperu.com
                </a>
                <span className="text-[11px] text-slate-400">Atención corporativa</span>
              </div>

              <div className="bg-white text-slate-900 rounded-sm p-5 shadow-md text-center border border-slate-100 flex flex-col items-center justify-center">
                <div className="w-11 h-11 rounded-full border-2 border-red-500/20 bg-red-50 text-red-600 flex items-center justify-center mb-2.5">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-extrabold uppercase tracking-wide text-slate-900">
                  Teléfonos
                </h4>
                <a
                  href="tel:985068416"
                  className="text-xs text-slate-800 hover:text-ikomi-blue font-semibold mt-1 transition-colors"
                >
                  985 068 416
                </a>
                <a
                  href="tel:981453306"
                  className="text-xs text-slate-500 hover:text-ikomi-blue transition-colors"
                >
                  981 453 306
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h4 className="text-lg font-bold text-white uppercase tracking-wide">
                Links
              </h4>
              <div className="h-0.5 w-10 bg-ikomi-red mt-1" />
            </div>

            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Home className="w-4 h-4 text-slate-400" />
                  <span>Inicio</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Building2 className="w-4 h-4 text-slate-400" />
                  <span>Nosotros</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Briefcase className="w-4 h-4 text-slate-400" />
                  <span>Servicios</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Wrench className="w-4 h-4 text-slate-400" />
                  <span>Productos</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/marcas"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <Shield className="w-4 h-4 text-slate-400" />
                  <span>Marcas</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-slate-400" />
                  <span>Contáctenos</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 mt-8 border-t border-slate-800 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            Copyright &copy; {currentYear}{" "}
            <span className="text-slate-200 font-semibold">Grupo IKOMI PERÚ</span>. Todos los derechos reservados.
          </p>
          <p className="text-slate-500">
            RUC: 20522459829 | Lima, Perú
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
