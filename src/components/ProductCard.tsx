import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/productos";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
  return (
    <article
      className={`group relative bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5 ${
        featured ? "ring-2 ring-ikomi-blue" : ""
      }`}
    >
      <div>
        {/* Image Container with next/image */}
        <div className="relative w-full h-52 sm:h-56 bg-slate-100 overflow-hidden">
          <Image
            src={product.image}
            alt={`Fotografía del repuesto ${product.name} importado por IKOMI Perú`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute top-3 left-3 bg-ikomi-header text-white text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
            {product.brand}
          </div>
          {product.inStock && (
            <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>En stock</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <span className="text-xs font-semibold text-slate-500 tracking-wide uppercase">
            {product.category}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1 line-clamp-2 group-hover:text-ikomi-blue transition-colors">
            <Link href={`/productos/${product.slug}`} className="hover:underline">
              {product.name}
            </Link>
          </h3>

          <p className="text-xs text-slate-500 mt-1 font-mono">
            OEM: <span className="text-slate-700 font-semibold">{product.oemNumber}</span>
          </p>

          <p className="text-sm text-slate-600 mt-3 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Quick specs */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-ikomi-red" />
              {product.specifications.origin}
            </span>
            <span className="font-medium text-slate-700">
              Garantía: {product.specifications.warranty}
            </span>
          </div>
        </div>
      </div>

      {/* Footer / CTA */}
      <div className="p-5 pt-0 mt-2 flex items-center justify-between">
        <div>
          <span className="block text-[11px] text-slate-400 font-medium uppercase">
            Precio estimado
          </span>
          <span className="text-lg font-extrabold text-ikomi-blue">
            {product.price}
          </span>
        </div>

        <Link
          href={`/productos/${product.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-ikomi-blue hover:bg-ikomi-red px-3.5 py-2 rounded-lg transition-colors duration-200 shadow-sm"
        >
          <span>Ver Detalle</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
