export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  brand: string;
  oemNumber: string;
  description: string;
  specifications: {
    material: string;
    diameter?: string;
    teethCount?: number;
    origin: string;
    warranty: string;
  };
  compatibleVehicles: string[];
  price: string;
  inStock: boolean;
  image: string;
}

export const CATEGORIES = [
  "TODAS LAS CATEGORIAS",
  "DISCO, PLATO Y COLLARÍN DE EMBRAGUE",
  "PASTILLA Y ZAPATA DE FRENO",
  "PIÑON Y PARTE DE CAJA",
  "SISTEMA HIDRÁULICO Y BOMBAS",
] as const;

export const PRODUCTS: Product[] = [
  {
    id: "PROD-001",
    slug: "disco-embrague-hyundai-hd78",
    name: "Disco de Embrague Reforzado Hyundai HD78 / HD72",
    category: "DISCO, PLATO Y COLLARÍN DE EMBRAGUE",
    brand: "PHC Valeo",
    oemNumber: "41100-45012",
    description: "Disco de embrague de alta fricción diseñado para soportar las exigencias de carga pesada en camiones Hyundai HD72 y HD78. Fabricado bajo estándares OEM de Corea del Sur.",
    specifications: {
      material: "Cerámico / Orgánico de alto rendimiento",
      diameter: "300 mm",
      teethCount: 14,
      origin: "Corea del Sur",
      warranty: "12 meses o 50,000 km",
    },
    compatibleVehicles: [
      "Hyundai HD65 (2008 - 2023)",
      "Hyundai HD72 (2006 - 2022)",
      "Hyundai HD78 (2010 - 2024)",
    ],
    price: "S/. 480.00",
    inStock: true,
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "PROD-002",
    slug: "plato-presion-valeo-mitsubishi-canter",
    name: "Plato de Presión (Prensa) Mitsubishi Canter FE",
    category: "DISCO, PLATO Y COLLARÍN DE EMBRAGUE",
    brand: "PHC Valeo",
    oemNumber: "ME521106",
    description: "Prensa de embrague con diafragma templado por inducción. Ofrece un acoplamiento suave y disipación térmica superior para trabajo severo interurbano.",
    specifications: {
      material: "Acero aleado fundido nodular",
      diameter: "300 mm",
      origin: "Corea del Sur",
      warranty: "12 meses",
    },
    compatibleVehicles: [
      "Mitsubishi Fuso Canter FE 71 / 85",
      "Mitsubishi Canter 4D33 / 4D34",
    ],
    price: "S/. 650.00",
    inStock: true,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "PROD-003",
    slug: "pastillas-freno-sangsin-isuzu-npr",
    name: "Juego de Pastillas de Freno Delanteras Sangsin Hi-Q Isuzu NPR",
    category: "PASTILLA Y ZAPATA DE FRENO",
    brand: "Sangsin Brake",
    oemNumber: "8-97368-980-0",
    description: "Pastillas semimetálicas con tecnología libre de asbesto. Garantizan un coeficiente de fricción estable a altas temperaturas y protegen los discos del desgaste prematuro.",
    specifications: {
      material: "Compuesto cerámico semimetálico",
      origin: "Corea del Sur",
      warranty: "6 meses",
    },
    compatibleVehicles: [
      "Isuzu NPR 71 / 75 (Motor 4HG1 / 4HK1)",
      "Isuzu NQR 75",
      "Chevrolet Forward NPR",
    ],
    price: "S/. 220.00",
    inStock: true,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "PROD-004",
    slug: "corona-pinon-ataque-hino-dutro",
    name: "Corona y Piñón de Ataque Hino Dutro 300 Ratio 6x41",
    category: "PIÑON Y PARTE DE CAJA",
    brand: "Hansang",
    oemNumber: "41201-1980",
    description: "Juego cónico hipoide de transmisión final tratado térmicamente para máxima resistencia a la fatiga por torsión. Diseñado para rutas andinas y sobrecarga controlada.",
    specifications: {
      material: "Acero forjado al cromo-molibdeno SAE 8620",
      teethCount: 41,
      origin: "Corea del Sur",
      warranty: "12 meses de garantía técnica",
    },
    compatibleVehicles: [
      "Hino Dutro 300 Serie XZU",
      "Toyota Dyna 150 / 200",
    ],
    price: "S/. 1,450.00",
    inStock: true,
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "PROD-005",
    slug: "bomba-principal-embrague-tcic-kia-k2700",
    name: "Bomba Principal de Embrague TCIC Kia K2700 / K3000",
    category: "SISTEMA HIDRÁULICO Y BOMBAS",
    brand: "TCIC",
    oemNumber: "OK60A-41-400A",
    description: "Cilindro maestro de embrague de alta precisión hidráulica. Sellos de caucho EPDM resistentes al fluido DOT 4 para evitar fugas y pérdida de presión en pedal.",
    specifications: {
      material: "Aluminio anodizado y émbolo rectificado",
      diameter: "5/8 pulg (15.87 mm)",
      origin: "Corea del Sur",
      warranty: "12 meses",
    },
    compatibleVehicles: [
      "Kia K2700 II (1999 - 2023)",
      "Kia K3000S Bongo",
      "Hyundai H100 Porter",
    ],
    price: "S/. 190.00",
    inStock: true,
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "PROD-006",
    slug: "juego-zapatas-freno-hyundai-mighty",
    name: "Juego de Zapatas de Freno Traseras Hyundai Mighty EX8",
    category: "PASTILLA Y ZAPATA DE FRENO",
    brand: "Sangsin Brake",
    oemNumber: "58305-5KA00",
    description: "Zapatas completas con forro de fricción vulcanizado de alta durabilidad para sistema de freno neumático/hidráulico de tambor trasero.",
    specifications: {
      material: "Acero estampado con forro de fricción libre de metales pesados",
      diameter: "320 mm",
      origin: "Corea del Sur",
      warranty: "6 meses",
    },
    compatibleVehicles: [
      "Hyundai New Mighty EX8 (2018 - 2024)",
      "Hyundai Mighty EX6",
    ],
    price: "S/. 340.00",
    inStock: true,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
  },
];

export function getAllProducts(): Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "TODAS LAS CATEGORIAS") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}
