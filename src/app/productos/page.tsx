import React from "react";
import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ProductCatalog from "@/components/ProductCatalog";
import { getAllProducts } from "@/data/productos";

export const metadata: Metadata = {
  title: "Nuestros Productos | IKOMI PERÚ - Catálogo de Repuestos para Camiones",
  description:
    "Catálogo completo de repuestos para camiones y buses: embragues PHC Valeo, frenos Sangsin Brake, cajas Hansang, bombas TCIC y suspensión Mando. Consulta precios y disponibilidad.",
};

export default function ProductosPage() {
  const products = getAllProducts();

  return (
    <div className="py-12 md:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="NUESTROS PRODUCTOS"
          subtitle="Los mejores productos y precios."
        />

        <ProductCatalog initialProducts={products} />
      </div>
    </div>
  );
}
