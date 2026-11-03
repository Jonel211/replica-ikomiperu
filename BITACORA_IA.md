# BITÁCORA DE USO CRÍTICO DE INTELIGENCIA ARTIFICIAL

**Proyecto:** Sitio Web Corporativo IKOMI PERÚ S.R.L.  
**Estudiante:** Jonel Aron Villanueva  
**Curso:** Desarrollo de Aplicaciones Web Avanzado: FullStack  
**Archivo:** BITACORA_IA.md  

---

## 1. Registro de Interacciones con la IA (Mínimo 5 Entradas)

### Entrada 1: Estructuración del Enrutamiento y Páginas del Caso IKOMI
* **Objetivo:** Definir la arquitectura de carpetas para las 7 páginas del sitio web corporativo de acuerdo con las especificaciones del App Router de Next.js.
* **Prompt utilizado:**  
  `"Genera la estructura de carpetas de Next.js App Router para replicar el sitio de IKOMI Perú con las rutas: /, /nosotros, /servicios, /productos, /productos/[slug], /marcas, /contacto y página 404."`
* **Resumen de la respuesta de la IA:**  
  Propuso crear la jerarquía dentro de `src/app/` con archivos `page.tsx` y un archivo `not-found.tsx` para el 404, pero sugirió agrupar todo dentro de una carpeta con paréntesis `(routes)/` y usar `pages/404.js`.
* **Decisión tomada:** **Modificado**.
* **Justificación:**  
  Se rechazó la creación de `pages/404.js` porque pertenece al Pages Router desactualizado; en el App Router se debe usar `app/not-found.tsx`. Además, se prescindió del grupo `(routes)` para mantener las rutas limpias y directas en el primer nivel de `src/app/`.

---

### Entrada 2: Navegación Activa y Menú Responsive en el Navbar
* **Objetivo:** Implementar la barra de navegación superior con resaltado de la página actual y soporte móvil.
* **Prompt utilizado:**  
  `"Crea un componente Navbar para Next.js que detecte la ruta activa y resalte el botón en color amarillo como en la captura de IKOMI, con menú responsive."`
* **Resumen de la respuesta de la IA:**  
  Proporcionó un componente que importaba `useRouter` desde `next/router` y leía `router.pathname`, omitiendo la directiva `"use client"` al inicio del archivo.
* **Decisión tomada:** **Rechazado y Reescrito**.
* **Justificación:**  
  En Next.js App Router, importar `useRouter` desde `next/router` genera un error crítico de compilación. Se debe importar `usePathname` desde `next/navigation` y obligatoriamente colocar `"use client"` al inicio, ya que los Server Components no pueden acceder a hooks del cliente.

---

### Entrada 3: Modelado de Datos y Ruta Dinámica para Repuestos
* **Objetivo:** Crear el catálogo de datos tipados en TypeScript y la página de detalle dinámico `/productos/[slug]`.
* **Prompt utilizado:**  
  `"Genera un archivo data/productos.ts con repuestos para camiones Hyundai, Mitsubishi e Isuzu y la página /productos/[slug]/page.tsx con generateMetadata y notFound()."`
* **Resumen de la respuesta de la IA:**  
  Entregó una lista de productos básica y el código para la página dinámica utilizando `generateStaticParams()` y `generateMetadata()`, pero utilizaba etiquetas `<img src="...">` estándar sin optimización.
* **Decisión tomada:** **Modificado**.
* **Justificación:**  
  Se aceptó el esquema de tipos y la lógica de `notFound()`, pero se reemplazó la etiqueta `<img>` por el componente `<Image />` de `next/image` con propiedades `fill`, `sizes`, `priority` y textos `alt` descriptivos para cumplir con las métricas Web Vitals.

---

### Entrada 4: Componentes Reutilizables y Paleta de Colores Corporativos
* **Objetivo:** Diseñar los componentes `ProductCard`, `SectionTitle` y `Hero` con la estética industrial y formal de IKOMI Perú.
* **Prompt utilizado:**  
  `"Diseña los componentes ProductCard, SectionTitle y Hero en Tailwind CSS con el azul corporativo de IKOMI #1f4287 y rojo #dc2626, incluyendo efectos de elevación al pasar el mouse."`
* **Resumen de la respuesta de la IA:**  
  Generó componentes con clases de utilidad de Tailwind CSS con estilos interactivos `hover:-translate-y-1` y sombras elegantes.
* **Decisión tomada:** **Aceptado**.
* **Justificación:**  
  El código propuesto era modular, recibía datos mediante interfaces de TypeScript bien tipadas y aplicaba el sistema de diseño de manera fiel a las capturas del anexo de la evaluación.

---

### Entrada 5: Formulario de Contacto Interactivo con Validación
* **Objetivo:** Construir la interfaz del formulario de contacto para la ruta `/contacto` según la referencia visual de la empresa.
* **Prompt utilizado:**  
  `"Genera el componente ContactForm con los campos: Apellidos y Nombres, Teléfono, Correo, Asunto, Mensaje y botón Enviar Mensaje, con estado de confirmación."`
* **Resumen de la respuesta de la IA:**  
  Entregó un formulario utilizando `useState` con simulación de envío, alertas de éxito y directiva `"use client"`.
* **Decisión tomada:** **Aceptado**.
* **Justificación:**  
  Cumplió a cabalidad con la especificación de la evaluación (solo interfaz interactiva y accesible, sin backend de correo pesado).

---

### Entrada 6: Configuración de Tipografía y Optimización con `next/font`
* **Objetivo:** Integrar la fuente Inter mediante `next/font/google` en el Root Layout para optimizar el rendimiento y evitar llamadas bloqueantes.
* **Prompt utilizado:**  
  `"¿Cómo configuro next/font en layout.tsx para cargar la fuente Inter sin dependencias externas en tiempo de ejecución?"`
* **Resumen de la respuesta de la IA:**  
  Sugirió enlazar un `<link rel="stylesheet">` de Google Fonts en el `<head>` del documento HTML.
* **Decisión tomada:** **Rechazado y Corregido**.
* **Justificación:**  
  El uso de `<link rel="stylesheet">` introduce bloqueos de renderizado y solicitudes externas innecesarias. Se corrigió implementando `import { Inter } from "next/font/google"` en `layout.tsx`, el cual aloja la fuente localmente en la compilación.

---

## 2. Detección y Corrección de Errores Propuestos por la IA (Mínimo 2 Casos)

### Caso 1: Uso de Enrutador Desactualizado en el App Router (`next/router` vs `next/navigation`)

* **Problema detectado:**  
  La IA propuso utilizar el hook `useRouter` del paquete `next/router` heredado de la versión 12 y del Pages Router, sin la directiva `"use client"`. Al ejecutar `npm run build`, Next.js aborta con el error:  
  `Error: NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted`.

* **Código Propuesto por la IA (Incorrecto - ANTES):**
  ```tsx
  // Archivo: src/components/Navbar.tsx
  import Link from "next/link";
  import { useRouter } from "next/router"; // ERROR: Incompatible con App Router

  export default function Navbar() {
    const router = useRouter(); // Fallo en tiempo de ejecución en Server Components

    return (
      <nav>
        <Link href="/" className={router.pathname === "/" ? "active" : ""}>
          Inicio
        </Link>
      </nav>
    );
  }
  ```

* **Código Corregido por el Estudiante (Correcto - DESPUÉS):**
  ```tsx
  // Archivo: src/components/Navbar.tsx
  "use client"; // Correcto: define el límite de cliente para usar hooks

  import Link from "next/link";
  import { usePathname } from "next/navigation"; // Correcto: hook oficial de App Router

  export default function Navbar() {
    const pathname = usePathname();

    const isActive = (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname.startsWith(href);
    };

    return (
      <nav className="flex items-center gap-2">
        <Link
          href="/"
          className={isActive("/") ? "text-amber-400 font-bold" : "text-white"}
        >
          Inicio
        </Link>
      </nav>
    );
  }
  ```

* **Explicación del cambio:**  
  En Next.js 13 y 14 (App Router), la lectura de la ruta activa se desacopló en `usePathname()` dentro de `next/navigation`. Además, para que un componente consuma este hook del navegador, debe llevar `"use client"` explícitamente en la primera línea.

---

### Caso 2: Métodos de Obtención de Datos del Pages Router vs App Router (`getStaticProps` vs `generateStaticParams`) y `<img />`

* **Problema detectado:**  
  Para la página dinámica de detalle de producto `/productos/[slug]`, la IA propuso exportar `getStaticPaths` y `getStaticProps`, junto al uso de etiquetas convencionales `<img src="..." />` sin atributos de dimensiones. En el App Router, `getStaticProps` y `getStaticPaths` están obsoletos y no son reconocidos.

* **Código Propuesto por la IA (Incorrecto - ANTES):**
  ```tsx
  // Archivo: src/app/productos/[slug]/page.tsx
  export async function getStaticPaths() { // Obsoleto en App Router
    return { paths: [...], fallback: false };
  }

  export async function getStaticProps({ params }) { // Obsoleto en App Router
    const prod = getProduct(params.slug);
    return { props: { prod } };
  }

  export default function Page({ prod }) {
    return (
      <div>
        <img src={prod.image} alt="foto" /> {/* Sin optimización ni sizes */}
      </div>
    );
  }
  ```

* **Código Corregido por el Estudiante (Correcto - DESPUÉS):**
  ```tsx
  // Archivo: src/app/productos/[slug]/page.tsx
  import Image from "next/image";
  import { notFound } from "next/navigation";
  import { getProductBySlug, getAllProducts } from "@/data/productos";

  // Reemplazo moderno en App Router para SSG:
  export async function generateStaticParams() {
    return getAllProducts().map((p) => ({ slug: p.slug }));
  }

  // Generación de metadatos dinámicos para SEO:
  export async function generateMetadata({ params }: { params: { slug: string } }) {
    const product = getProductBySlug(params.slug);
    if (!product) return { title: "No encontrado" };
    return { title: `${product.name} | IKOMI PERÚ` };
  }

  export default function ProductDetailPage({ params }: { params: { slug: string } }) {
    const product = getProductBySlug(params.slug);
    if (!product) notFound();

    return (
      <div className="relative w-full h-80">
        <Image
          src={product.image}
          alt={`Repuesto ${product.name} IKOMI`}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover"
        />
      </div>
    );
  }
  ```

* **Explicación del cambio:**  
  En App Router los Server Components son funciones asíncronas directas. La pre-generación de rutas estáticas se declara con `generateStaticParams()` y la optimización de imágenes se maneja a través del componente `<Image>` con `fill` y `sizes`, reduciendo drásticamente el peso de descarga y evitando el Cumulative Layout Shift (CLS).

---

## 3. Reflexión Crítica sobre el Uso de IA (Parte 5.3)

> *Gracias a la Inteligencia Artificial pude acelerar notablemente la maquetación repetitiva de componentes en Tailwind CSS y la estructuración inicial de datos técnicos automotrices tipados en TypeScript. Sin embargo, tuve que razonar de manera completamente autónoma la arquitectura real del App Router de Next.js 14, ya que la IA mezclaba frecuentemente conceptos del Pages Router clásico (como `useRouter` de `next/router`, `getStaticProps` o enlaces sin directiva `"use client"`). Comprendí que la IA es un copiloto de autocompletado y aceleración, pero el criterio de diseño, la coherencia de estilos y la resolución de errores en el ciclo de compilación corresponden enteramente al criterio del desarrollador.*

---

## 4. Guía para la Sustentación en Vivo (5 minutos - Parte 5.4)

El docente evaluará la capacidad de explicar y realizar cambios rápidos en vivo:

1. **Cómo agregar una nueva ruta (por ejemplo `/blog`):**  
   * Crear la carpeta `src/app/blog/` y dentro el archivo `page.tsx`.
   * Exportar una función por defecto con su título y contenido.
   * Agregar el enlace en el array `NAV_ITEMS` dentro de `src/components/Navbar.tsx` y en el `Footer.tsx`.
2. **Cómo añadir una prop al componente `ProductCard` (por ejemplo `showBadge?: boolean`):**  
   * Modificar la interfaz `interface ProductCardProps` en `src/components/ProductCard.tsx` para agregar `showBadge?: boolean`.
   * Renderizar condicionalmente una etiqueta visual: `{showBadge && <span className="bg-ikomi-gold text-slate-900">NUEVO</span>}`.
3. **Cómo cambiar el color principal del tema:**  
   * Abrir `tailwind.config.ts` y modificar la clave `colors.ikomi.blue.DEFAULT` o `colors.ikomi.red.DEFAULT`.
   * Al guardar, Tailwind y Next.js actualizarán automáticamente todos los componentes que usen `bg-ikomi-blue`, `text-ikomi-blue`, etc.
