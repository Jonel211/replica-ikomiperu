export interface Servicio {
  id: string;
  title: string;
  description: string;
  iconName: "shopping-bag" | "headphones" | "truck" | "package";
  features: string[];
}

export const SERVICIOS: Servicio[] = [
  {
    id: "ventas",
    title: "Ventas",
    description: "Venta de los mejores repuestos de partes de motor, cajas, transmisiones, piñones, coronas y trenes fijos de las marcas de Korea y Japón. A los mejores precios del mercado nacional.",
    iconName: "shopping-bag",
    features: ["Precios competitivos por mayor y menor", "Garantía de fábrica en cada repuesto", "Stock permanente para despacho inmediato"],
  },
  {
    id: "asesoria",
    title: "Asesoría Especializada",
    description: "Le brindamos una asesoría personalizada acerca de nuestros productos, ayudándole a elegir el mejor repuesto para su unidad vehicular con base en catálogo oficial OEM.",
    iconName: "headphones",
    features: ["Validación de compatibilidad con número VIN / chasis", "Soporte técnico por mecánicos especialistas", "Atención rápida vía WhatsApp o en mostrador"],
  },
  {
    id: "delivery",
    title: "Delivery y Despacho Nacional",
    description: "Compras sin salir de su taller o casa. Realizamos entregas en Lima Metropolitana en el menor tiempo posible y despachos diarios a todas las agencias de transporte hacia provincias.",
    iconName: "truck",
    features: ["Envíos el mismo día para pedidos confirmados", "Embalaje seguro y rotulado para evitar daños", "Seguimiento y guía de remisión electrónica"],
  },
  {
    id: "productos",
    title: "Catálogo de Primer Nivel",
    description: "Contamos con las mejores marcas y calidad de productos del mercado automotriz de servicio pesado y comercial ligero: Sangsin, Valeo, TCIC, Hansang, Mando y más.",
    iconName: "package",
    features: ["Repuestos 100% originales e importación directa", "Líneas completas de embrague, frenos y caja", "Certificaciones internacionales ISO/TS"],
  },
];
