export interface Servicio {
  id: string;
  title: string;
  description: string;
  iconName: "ventas" | "asesoria" | "delivery" | "productos";
}

export const SERVICIOS: Servicio[] = [
  {
    id: "ventas",
    title: "Ventas",
    description: "Venta de los mejores repuestos de partes de motor, cajas, transmisiones, piñones, coronas y trenes fijos de las marcas de Korea y Japón. A los mejores precios del mercado.",
    iconName: "ventas",
  },
  {
    id: "asesoria",
    title: "Asesoria",
    description: "Le brindamos una asesoría personalidad acerca de nuestros productos, a elegir el mejor repuesto para su movilidad.",
    iconName: "asesoria",
  },
  {
    id: "delivery",
    title: "Delivery",
    description: "Compras sin salir de casa, realizamos entregas a domicilio en el menor tiempo posible.",
    iconName: "delivery",
  },
  {
    id: "productos",
    title: "Productos",
    description: "Contamos con las mejores marcas y calidad de productos del mercado.",
    iconName: "productos",
  }
];