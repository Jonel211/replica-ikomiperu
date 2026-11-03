"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Building2,
  Briefcase,
  Wrench,
  Shield,
  PhoneCall,
  Menu,
  X,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/", icon: Home },
  { label: "Nosotros", href: "/nosotros", icon: Building2 },
  { label: "Servicios", href: "/servicios", icon: Briefcase },
  { label: "Productos", href: "/productos", icon: Wrench },
  { label: "Marcas", href: "/marcas", icon: Shield },
  { label: "Contáctenos", href: "/contacto", icon: PhoneCall },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1e4488] shadow-md border-b border-blue-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand matching IKOMI PERÚ */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg p-1"
          >
            <div className="flex items-center bg-white/95 px-3 py-1.5 rounded-md shadow-sm border border-slate-200">
              <div className="flex flex-col leading-none">
                <span className="text-[#1e3a8a] font-black text-lg tracking-tight uppercase">
                  IKOMI PERÚ
                </span>
                <span className="text-[9px] font-bold text-red-600 tracking-wider uppercase">
                  Repuestos de Korea y Japón
                </span>
              </div>
              <div className="ml-2.5 bg-red-600 text-white font-black text-sm px-2 py-0.5 rounded tracking-tighter">
                IKM
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                    active
                      ? "text-amber-400 bg-white/10 shadow-inner"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      active ? "text-amber-400 scale-110" : "text-slate-300"
                    }`}
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#18366d] border-t border-blue-900 px-4 pt-3 pb-5 space-y-1 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                  active
                    ? "text-amber-400 bg-white/15"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <Icon
                  className={`w-5 h-5 ${
                    active ? "text-amber-400" : "text-slate-300"
                  }`}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}

export default Navbar;
