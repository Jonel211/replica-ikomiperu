import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getAllProducts,
} from "@/data/productos";
import ProductCard from "@/components/ProductCard";
import {
  ShieldCheck,
  Truck,
  CheckCircle2,
  ArrowLeft,
  MessageCircle,
  HelpCircle,
  FileCheck2,
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

// Generate static params for all products at build time
export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Dynamic metadata generation based on product slug
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Producto no encontrado | IKOMI PERÚ",
      description: "El repuesto solicitado no existe o ha sido retirado de catálogo.",
    };
  }

  return {
    title: `${product.name} | IKOMI PERÚ`,
    description: `${product.description} Código OEM: ${product.oemNumber}. Marca: ${product.brand}. Repuestos para camiones en Lima, Perú.`,
    openGraph: {
      title: `${product.name} - IKOMI Perú`,
      description: product.description,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Related products
  const relatedProducts = getAllProducts()
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hola IKOMI Perú, deseo cotizar el producto: ${product.name} (Código OEM: ${product.oemNumber}).`
  );

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-8"
        >
          <Link href="/" className="hover:text-ikomi-blue transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/productos" className="hover:text-ikomi-blue transition-colors">
            Productos
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-md">
            {product.name}
          </span>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ikomi-blue hover:text-ikomi-red transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Catálogo</span>
          </Link>
        </div>

        {/* Product Detail Main Grid */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden p-6 sm:p-10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Image Section (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner">
                <Image
                  src={product.image}
                  alt={`Detalle técnico de ${product.name} disponible en IKOMI Perú`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <span className="absolute top-4 left-4 bg-ikomi-blue text-white text-xs font-extrabold uppercase px-3 py-1 rounded shadow">
                  {product.brand}
                </span>
                {product.inStock && (
                  <span className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    En Stock
                  </span>
                )}
              </div>

              {/* Guarantees Box */}
              <div className="mt-6 bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <ShieldCheck className="w-5 h-5 text-ikomi-blue flex-shrink-0" />
                  <span>
                    <strong>Garantía:</strong> {product.specifications.warranty}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <Truck className="w-5 h-5 text-ikomi-red flex-shrink-0" />
                  <span>
                    <strong>Despacho:</strong> Envíos a todo el territorio nacional
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <FileCheck2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>
                    <strong>Procedencia:</strong> {product.specifications.origin}
                  </span>
                </div>
              </div>
            </div>

            {/* Content & Actions Section (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-ikomi-red">
                  {product.category}
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 leading-tight">
                  {product.name}
                </h1>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono bg-slate-100 p-3 rounded-lg border border-slate-200">
                  <div>
                    <span className="text-slate-500">CÓDIGO OEM: </span>
                    <strong className="text-slate-900 text-sm">{product.oemNumber}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500">ID INTERNO: </span>
                    <strong className="text-slate-900">{product.id}</strong>
                  </div>
                </div>

                <div className="mt-6">
                  <span className="text-xs uppercase font-semibold text-slate-400 block">
                    Precio Referencial
                  </span>
                  <span className="text-3xl font-black text-ikomi-blue">
                    {product.price}
                  </span>
                  <span className="text-xs text-slate-500 ml-2 font-medium">
                    (Inc. IGV / Sujeto a disponibilidad de lote)
                  </span>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
                    Descripción del Repuesto
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Specifications table */}
                <div className="mt-6 border-t border-slate-100 pt-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                    Ficha Técnica
                  </h3>
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs">
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                      <div>
                        <dt className="text-slate-500 font-medium">Material:</dt>
                        <dd className="text-slate-900 font-semibold">{product.specifications.material}</dd>
                      </div>
                      {product.specifications.diameter && (
                        <div>
                          <dt className="text-slate-500 font-medium">Diámetro:</dt>
                          <dd className="text-slate-900 font-semibold">{product.specifications.diameter}</dd>
                        </div>
                      )}
                      {product.specifications.teethCount && (
                        <div>
                          <dt className="text-slate-500 font-medium">Dientes / Estrías:</dt>
                          <dd className="text-slate-900 font-semibold">{product.specifications.teethCount}</dd>
                        </div>
                      )}
                      <div>
                        <dt className="text-slate-500 font-medium">País de Fabricación:</dt>
                        <dd className="text-slate-900 font-semibold">{product.specifications.origin}</dd>
                      </div>
                    </dl>
                  </div>
                </div>

                {/* Compatible Vehicles */}
                <div className="mt-6 border-t border-slate-100 pt-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                    Vehículos Compatibles
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {product.compatibleVehicles.map((vehicle, idx) => (
                      <li
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-ikomi-blue border border-blue-200 text-xs font-semibold"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                        <span>{vehicle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions Button */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/51985068416?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm uppercase tracking-wide"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Cotizar por WhatsApp</span>
                </a>

                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 bg-ikomi-blue hover:bg-blue-900 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-colors text-sm uppercase tracking-wide"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Consultar con Técnico</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
            Otros Repuestos Recomendados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
