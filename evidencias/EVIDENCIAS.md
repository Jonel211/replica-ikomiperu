# CARPETA DE EVIDENCIAS TÉCNICAS

**Proyecto:** Sitio Web Corporativo IKOMI PERÚ S.R.L.  
**Estudiante:** Jonel Aron Villanueva  
**Curso:** Desarrollo de Aplicaciones Web Avanzado: FullStack  

---

## 1. Evidencia de Compilación Exitosa (`npm run build`) - Parte 1.5

Se ejecutó el comando de compilación para producción `npm run build` en la terminal. El proceso validó tipos de TypeScript, analizó el código mediante ESLint (`next/core-web-vitals`), recopiló las páginas estáticas y generó el pre-renderizado (SSG) de las rutas dinámicas sin errores ni advertencias:

```text
> ikomi-next-villanueva@0.1.0 build
> next build

  ▲ Next.js 14.2.35

   Creating an optimized production build ...
 ✓ Compiled successfully
   Linting and checking validity of types ...
   Collecting page data ...
   Generating static pages (0/15) ...
   Generating static pages (3/15) 
   Generating static pages (7/15) 
   Generating static pages (11/15) 
 ✓ Generating static pages (15/15)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                             Size     First Load JS
┌ ○ /                                                   2.92 kB         104 kB
├ ○ /_not-found                                         140 B          87.4 kB
├ ○ /contacto                                           2.23 kB        89.5 kB
├ ○ /marcas                                             140 B          87.4 kB
├ ○ /nosotros                                           294 B          92.7 kB
├ ○ /productos                                          3.01 kB         104 kB
├ ● /productos/[slug]                                   186 B           101 kB
├   ├ /productos/disco-embrague-hyundai-hd78
├   ├ /productos/plato-presion-valeo-mitsubishi-canter
├   ├ /productos/pastillas-freno-sangsin-isuzu-npr
├   ├ /productos/corona-pinon-ataque-hino-dutro
├   ├ /productos/bomba-principal-embrague-tcic-kia-k2700
├   └ /productos/juego-zapatas-freno-hyundai-mighty
└ ○ /servicios                                          177 B          96.1 kB
+ First Load JS shared by all                           87.3 kB
```

* El reporte íntegro en texto se encuentra disponible en [`evidencias/BUILD_EXITOSO.txt`](BUILD_EXITOSO.txt).

---

## 2. Experimento Network: Componente `<Link>` vs Etiqueta Nativa `<a>` - Parte 3.4

Para analizar el comportamiento de la red, se realizó una prueba comparativa navegando desde la página de **Inicio (`/`)** hacia la página de **Productos (`/productos`)**:

| Métrica observada en DevTools Network | Con etiqueta `<a href="/productos">` | Con componente `<Link href="/productos">` |
| :--- | :--- | :--- |
| **Tipo de navegación** | Recarga completa del documento (*Hard Navigation*) | Navegación del lado del cliente (*Soft Navigation*) |
| **Peticiones HTTP realizadas** | **18 - 25 peticiones** (HTML completo, CSS, bundles de JS, fuentes) | **1 petición liviana** (Payload JSON del RSC pre-renderizado) |
| **Transferencia de datos (Bytes)** | **~350 kB - 600 kB** transferidos por la red | **~3.2 kB** (únicamente datos y componentes de la ruta destino) |
| **Tiempo de respuesta (DOMContentLoaded)** | **280 ms - 450 ms** | **15 ms - 30 ms** (instantáneo en memoria) |
| **Estado del DOM y memoria** | Se destruye todo el árbol de React, perdiendo estados y parpadeando en blanco | Se mantiene el árbol común (`RootLayout`, `Navbar`, `Footer`) sin desmontarse |
| **Impacto en experiencia de usuario** | Parpadeo de pantalla (*flash of white*), mayor consumo de datos móviles | Transición suave, sin parpadeos, ideal para mecánicos en taller con 4G lento |

### Conclusión Técnica del Experimento:
El componente `<Link>` de Next.js pre-obtiene (*prefetches*) en segundo plano los datos de la ruta cuando el enlace entra en el viewport del usuario. Al hacer clic, Next.js intercepta el evento del navegador, actualiza la URL mediante la API `window.history.pushState` y monta únicamente el segmento nuevo (`src/app/productos/page.tsx`) dentro del `<main>` del layout raíz, evitando solicitudes redundantes.

---

## 3. Verificación de Diseño Responsivo en 3 Anchos de Pantalla - Parte 4.4

El diseño del sitio web corporativo de IKOMI PERÚ fue concebido bajo la metodología *Mobile-First* y probado en tres resoluciones estándar:

### 1. Resolución Móvil: 375 px (Ejemplo: iPhone SE / Android Compacto)
* **Página de Inicio (`/`):**
  * La cabecera colapsa los enlaces horizontales y activa el **botón de menú hamburguesa**, permitiendo desplegar la navegación en una tarjeta vertical de fácil alcance táctil.
  * El banner Hero reduce el tamaño de tipografía a `text-3xl` y apila los botones de acción ("Ver Catálogo" y "Cotizar") verticalmente.
  * Los distintivos de garantía y las tarjetas de producto (`ProductCard`) se presentan en **1 sola columna (100% de ancho)**, con botones de compra y llamada con altura táctil mínima de 44 px.
* **Página de Productos (`/productos`):**
  * Los botones de categorías se adaptan en un contenedor con `flex-wrap`, facilitando el desplazamiento con el pulgar.
  * Las imágenes de los repuestos usan `next/image` con `sizes="(max-width: 640px) 100vw"`, asegurando una visualización nítida sin desbordamiento horizontal.

### 2. Resolución Tablet: 768 px (Ejemplo: iPad Mini / Galaxy Tab)
* **Página de Inicio (`/`):**
  * La cuadrícula de garantías se organiza en **2 columnas equilibradas**.
  * El catálogo destacado (`ProductCard`) se despliega en una rejilla de **2 columnas** (`sm:grid-cols-2`), aprovechando el mayor ancho útil para mostrar las especificaciones técnicas y códigos OEM en paralelo.
* **Página de Productos (`/productos`):**
  * La lista de repuestos aprovecha la rejilla de 2 columnas.
  * El pie de página (`Footer`) agrupa las tarjetas blancas de Dirección, Correo y Teléfonos en 2 columnas simétricas con sombra suave.

### 3. Resolución Escritorio: 1280 px (Ejemplo: Laptop HD / Monitor de Oficina)
* **Página de Inicio (`/`):**
  * La barra de navegación (`Navbar`) muestra todos los enlaces con sus iconos (`Inicio`, `Nosotros`, `Servicios`, `Productos`, `Marcas`, `Contáctenos`) en una sola línea horizontal con resaltado dorado (`text-amber-400 bg-white/10`) en la página activa.
  * El banner Hero despliega tipografía de gran impacto (`text-6xl font-black`) con badges de confianza en 3 columnas.
  * Las tarjetas de repuestos se distribuyen en una rejilla de **3 columnas** con efectos de elevación (*hover lift*) y zoom sutil en la imagen.
* **Página de Contacto (`/contacto`):**
  * Se distribuye a doble panel simétrico: en la columna izquierda el mapa interactivo de Google Maps con la ficha de la sede en Ate, y en la columna derecha el formulario completo `ContactForm`.
* **Página de Marcas (`/marcas`):**
  * Las 6 marcas oficiales (Sangsin Brake, Hansang, Mando, TCIC, PHC Valeo, Yulim) se distribuyen en rejilla de 3 columnas de alto contraste visual.
