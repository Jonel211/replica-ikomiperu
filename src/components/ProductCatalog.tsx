"use client";

import React, { useState } from "react";
import { Product, CATEGORIES } from "@/data/productos";
import ProductCard from "@/components/ProductCard";
import { Filter } from "lucide-react";

interface ProductCatalogProps {
  initialProducts: Product[];
}

export function ProductCatalog({ initialProducts }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("TODAS LAS CATEGORIAS");

  const filteredProducts =
    selectedCategory === "TODAS LAS CATEGORIAS"
      ? initialProducts
      : initialProducts.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Category Buttons Filter matching Image 7 */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">
          <Filter className="w-3.5 h-3.5" />
          <span>Filtrar:</span>
        </div>
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                isActive
                  ? "bg-ikomi-red text-white shadow-md scale-105"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Product count */}
      <div className="flex items-center justify-between text-xs text-slate-500 mb-6 pb-2 border-b border-slate-200">
        <span>
          Mostrando <strong className="text-slate-800">{filteredProducts.length}</strong> repuestos
        </span>
        <span className="font-medium text-slate-600">
          Categoría: <strong className="text-ikomi-blue">{selectedCategory}</strong>
        </span>
      </div>

      {/* Grid of ProductCards */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-50 rounded-xl border border-slate-200">
          <p className="text-base font-semibold text-slate-600">
            No se encontraron productos en esta categoría por el momento.
          </p>
          <button
            type="button"
            onClick={() => setSelectedCategory("TODAS LAS CATEGORIAS")}
            className="mt-4 px-4 py-2 bg-ikomi-blue text-white text-xs font-bold rounded-lg"
          >
            Ver todos los repuestos
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductCatalog;
