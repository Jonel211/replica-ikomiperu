# DECISIONES DE CONFIGURACIÓN, ARQUITECTURA Y DISEÑO TÉCNICO

**Proyecto:** Sitio Web Corporativo IKOMI PERÚ S.R.L.  
**Estudiante:** Jonel Aron Villanueva  
**Curso:** Desarrollo de Aplicaciones Web Avanzado: FullStack  
**Tecnología:** Next.js 14+ (App Router)  

---

## 1. Tabla de Decisiones Iniciales de Configuración (Parte 1.2)

| Opción elegida | Alternativa descartada | Justificación (vinculada al proyecto IKOMI PERÚ) |
| :--- | :--- | :--- |
| **TypeScript** | JavaScript tradicional | IKOMI comercializa repuestos técnicos automotrices con especificaciones críticas (código OEM, diámetros, cantidad de estrías/dientes, vehículos compatibles). Tipar fuertemente las entidades (`Product`, `Marca`, `Servicio`) previene errores en tiempo de compilación y garantiza autocompletado y robustez en la ruta dinámica `/productos/[slug]`. |
| **Tailwind CSS** | CSS Modules / Bootstrap | Permite construir de forma rápida y consistente la identidad visual de IKOMI (azul corporativo `#1f4287`, rojo `#dc2626` y acento ámbar `#f59e0b`) sin hojas de estilo dispersas ni sobrecarga de especificidad CSS. Además, optimiza el CSS final eliminando clases no usadas (*purge*), lo cual es ideal para rendimiento móvil. |
| **Carpeta `src/`** | Estructura en la raíz (`./app`, `./components`) | Separa el código fuente de los archivos de configuración en la raíz (`next.config.mjs`, `tailwind.config.ts`, `tsconfig.json`, `package.json`, bitácoras). Para un sitio corporativo escalable como IKOMI, aporta orden modular estricto facilitando la navegación del código. |
| **Next.js App Router** | Pages Router (`pages/`) | Es la arquitectura moderna recomendada por Next.js basada en React Server Components (RSC). Permite que la mayor parte del catálogo de IKOMI se renderice en el servidor con cero JavaScript en el cliente, logrando mejor indexación en motores de búsqueda para clientes que busquen repuestos en Google. |
| **ESLint + Prettier** | Sin linter | Asegura apego a las mejores prácticas de Next.js (`next/core-web-vitals`), detectando advertencias de accesibilidad, uso incorrecto de etiquetas de imagen o hooks de React en Server Components antes de enviar código a producción. |

---

## 2. Explicación de Elementos Clave de Next.js (Parte 1.3)

* **`app/layout.tsx` (Root Layout):**  
  Es la plantilla contenedora raíz de toda la aplicación. Envuelve a todas las páginas hijas mediante la propiedad `children`. Su función principal es definir la estructura HTML base (`<html>` y `<body>`), inyectar fuentes globales (`next/font`), estilos generales (`globals.css`) y componentes que deben persistir entre navegaciones sin volver a montarse, tales como la barra de navegación (`Navbar`), el pie de página (`Footer`) y el botón flotante de WhatsApp.

* **`app/page.tsx` (Página Raíz):**  
  Representa el punto de entrada visual de la ruta principal (`/`). En Next.js App Router, cada archivo `page.tsx` exporta por defecto el componente React que se renderiza públicamente cuando el usuario visita la URL del directorio correspondiente. Para IKOMI, es la página de inicio con el banner Hero, catálogo destacado y servicios.

* **Carpeta `public/`:**  
  Directorio para servir recursos estáticos directamente desde la raíz del servidor web (por ejemplo `/favicon.ico`, imágenes institucionales, robots.txt). Los archivos dentro de `public/` no pasan por el pipeline de webpack ni sufren hash de nombres, por lo que son accesibles mediante URLs estáticas absolutas.

* **`next.config.mjs`:**  
  Archivo de configuración central del compilador y servidor de Next.js. Permite habilitar características experimentales, configurar encabezados de seguridad, dominios remotos autorizados para la optimización de `next/image` (`remotePatterns`), redirecciones, reescrituras y variables de entorno del sistema.

* **Scripts de `package.json`:**  
  * `npm run dev`: Inicia el servidor de desarrollo local con Hot Module Replacement (HMR) y compilación bajo demanda (*on-demand compilation*), permitiendo ver cambios en tiempo real.  
  * `npm run build`: Compila y optimiza la aplicación para producción. Valida tipos de TypeScript, ejecuta el linter, pre-renderiza páginas estáticas (SSG) y genera los paquetes minificados y optimizados en `.next/`.  
  * `npm run start`: Inicia el servidor de producción de Next.js sirviendo la versión optimizada generada previamente por el comando `build`.

---

## 3. Ventaja Concreta de Next.js frente a una SPA con React + Vite (Parte 1.4)

En una SPA tradicional creada con React y Vite:
* El servidor solo entrega un HTML prácticamente vacío (`<div id="root"></div>`) junto a un pesado paquete JavaScript.
* El navegador del usuario debe descargar, parsear y ejecutar ese script para que aparezca el contenido.

**Para el sitio corporativo de IKOMI PERÚ, Next.js ofrece tres ventajas determinantes:**

1. **SEO (Search Engine Optimization):**  
   Los mecánicos y transportistas buscan en Google términos precisos como *"disco de embrague hyundai hd78 lima"* o *"pastillas de freno sangsin isuzu"*. Con Next.js, el servidor entrega HTML completamente pre-renderizado con su contenido, textos y metadatos OpenGraph. Los rastreadores de Google indexan inmediatamente las piezas sin depender de la ejecución de JavaScript.
2. **First Contentful Paint (FCP) y Rendimiento Móvil:**  
   Muchos mecánicos y transportistas consultan la web desde dispositivos móviles con conexiones 3G/4G inestables. En lugar de descargar megabytes de JavaScript para ver la primera pantalla, reciben el HTML y CSS listos casi al instante.
3. **Ejemplo concreto aplicado a `/productos/[slug]`:**  
   Al visitar `/productos/disco-embrague-hyundai-hd78`, Next.js pre-genera el HTML exacto con el código OEM `41100-45012`, compatibilidades y especificaciones técnicas. Si se compartiera este enlace por WhatsApp o redes sociales, el preview enriquecido (título, descripción, imagen del repuesto) se genera en el servidor inmediatamente.

---

## 4. Decisiones de Enrutamiento: Layouts Anidados y Route Groups (Parte 2.4)

* **Decisión sobre Layout Anidado en `/productos`:**  
  **Decisión tomada:** *No utilizar un layout anidado complejo para `/productos`.*  
  **Justificación:** El catálogo de IKOMI tiene un flujo directo donde la vista `/productos` presenta una galería interactiva con filtros por categoría, mientras que `/productos/[slug]` necesita desplegar la ficha técnica a ancho completo con fichas de especificaciones, compatibilidades y enlaces relacionados. Un layout anidado forzaría a compartir marcos laterales o barras secundarias que reducirían el espacio visual necesario para las tablas técnicas y las fotos del repuesto en dispositivos móviles.

* **Decisión sobre Route Groups (e.g. `(marketing)`):**  
  **Decisión tomada:** *Mantener las rutas limpias en el primer nivel del `app/` (`/nosotros`, `/servicios`, `/productos`, `/marcas`, `/contacto`).*  
  **Justificación:** Todas las páginas de IKOMI pertenecen al mismo contexto corporativo-comercial y comparten exactamente el mismo Root Layout con `Navbar` y `Footer`. Introducir un grupo `(marketing)` o `(shop)` agregaría anidamiento innecesario en la estructura de carpetas sin aportar ningún beneficio arquitectónico en esta etapa.

---

## 5. Navegación: Client Components vs Server Components (Parte 3.2)

* **¿Por qué `Navbar` debe ser un Client Component (`"use client"`)?**  
  El componente `Navbar` requiere interactividad y lectura del estado del navegador:
  1. Necesita el hook `usePathname()` de `next/navigation` para comparar la URL actual con el atributo `href` de cada enlace y aplicar la clase activa (`text-amber-400 bg-white/10`). Los Server Components se ejecutan en el servidor y no tienen acceso al ciclo de vida del cliente ni a hooks de navegación en tiempo real.
  2. Gestiona el estado local del menú móvil hamburguesa (`useState(mobileMenuOpen)`), permitiendo abrir y cerrar el menú desplegable en resoluciones pequeñas ante el evento `onClick`.

* **¿Por qué el resto del sitio se mantiene como Server Components?**  
  Páginas como `/`, `/nosotros`, `/marcas`, `/servicios` y `/productos/[slug]` no manejan eventos del DOM complejos en su estructura base. Mantenerlos como Server Components:
  1. Reduce el tamaño del paquete JavaScript transferido al cliente a casi cero para esas secciones.
  2. Permite pre-renderizar todo el contenido estático en tiempo de compilación (SSG).
  3. Mejora los tiempos de carga y la seguridad del código.

---

## 6. Estrategia de Estilos Justificada (Parte 4.2)

Se seleccionó **Tailwind CSS** con la siguiente comparativa justificada:
* **Frente a Bootstrap:** Bootstrap añade una sobrecarga de clases predefinidas y estilos imperativos que dificultan lograr el diseño sobrio e industrial de IKOMI visto en las capturas de referencia, además de incluir CSS no utilizado que penaliza el rendimiento.
* **Frente a CSS Modules:** Aunque CSS Modules garantiza aislamiento de nombres, genera fragmentación de archivos (`.module.css` por cada componente) y hace más tedioso mantener un sistema coherente de variables de diseño para paletas de color y espaciados responsivos.
* **Criterio de Coherencia en IKOMI:** Los colores institucionales se declararon de forma centralizada en `tailwind.config.ts`:
  * Azul cabecera: `#1f4287`
  * Rojo corporativo: `#dc2626`
  * Dorado/Ámbar de navegación activa: `#f59e0b`
  * Fondo oscuro industrial: `#1f2227` y `#121214`

---

## 7. Optimización de Recursos: `next/image` y `next/font` (Parte 4.3)

* **Beneficio de `next/image`:**  
  Convierte automáticamente imágenes a formatos modernos (`WebP`/`AVIF`), redimensiona según el tamaño de pantalla del visitante mediante `sizes`, previene el desplazamiento acumulado del diseño (*Cumulative Layout Shift - CLS*) reservando el espacio de antemano e implementa carga diferida (*lazy loading*) nativa con soporte para atributos `alt` descriptivos para accesibilidad.
* **Beneficio de `next/font` (`Inter`):**  
  Descarga y aloja automáticamente los archivos de la tipografía de Google Fonts en el servidor local durante el build. Esto elimina llamadas DNS externas a Google en tiempo de ejecución, cumple con normativas de privacidad y previene el molesto parpadeo de cambio de fuente (*Flash of Unstyled Text - FOUT*).

---

## 8. Animaciones con Propósito (Parte 4.5)

* **Hover suave y elevación en `ProductCard` y `BrandsCarousel`:**  
  Al pasar el cursor sobre las tarjetas de producto o insignias de marcas, se aplica una suave transición de elevación (`transform hover:-translate-y-1.5 hover:shadow-xl duration-300`) junto a una escala leve en la imagen (`group-hover:scale-105 duration-500`).
* **Propósito en la experiencia de usuario (UX):**  
  En un catálogo de repuestos industriales donde abundan códigos y piezas metálicas, la interactividad visual confirma al usuario qué tarjeta está enfocando, facilitando la toma de decisión y aumentando la tasa de clics hacia el detalle técnico y la cotización por WhatsApp.
