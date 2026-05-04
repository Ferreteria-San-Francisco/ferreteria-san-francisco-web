# Ferretería San Francisco - Sitio Web

![Status](https://img.shields.io/badge/Status-Completado-green?style=flat-square)
![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2-bd34fe?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=flat-square&logo=tailwindcss)

Sitio web institucional y catálogo de productos para Ferretería San Francisco. Desarrollado con React + Vite + TailwindCSS.

**URL de producción:** [https://ferreteria-san-francisco.vercel.app](https://ferreteria-san-francisco.vercel.app)

---

## Características

- **Catálogo de productos** con filtros por categoría, marca y precio
- **Búsqueda** con debounce para mejor performance
- **Ordenamiento** por nombre y precio
- **Paginación** del catálogo
- **Vista detalle** de productos con características y productos relacionados
- **Sección de marcas** con detalle por marca
- **Formulario de contacto** integrado con Formspree
- **Chat en vivo** con Tawk.to
- **SEO optimizado** con react-helmet-async, sitemap.xml y Open Graph
- **Google Analytics** integrado
- **Responsive** optimizado para mobile, tablet y desktop
- **Lazy loading** de páginas para mejor performance

---

## Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| React | 19.2 | UI Framework |
| Vite | 7.2 | Build tool |
| TailwindCSS | 4.1 | Estilos |
| React Router | 7.9 | Routing SPA |
| React Hook Form | 7.66 | Formularios |
| react-helmet-async | - | SEO |

### Servicios externos

| Servicio | Uso |
|----------|-----|
| Formspree | Envío de formulario de contacto |
| Tawk.to | Chat en vivo |
| Google Analytics | Analíticas |
| Vercel | Hosting |

---

## Instalación

```bash
# Clonar repositorio
git clone https://github.com/Ferreteria-San-Francisco/ferreteria-san-francisco-web.git
cd ferreteria-san-francisco-web

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

### Requisitos
- Node.js 18+
- npm 9+

---

## Estructura del Proyecto

```
src/
├── features/           # Módulos por funcionalidad
│   ├── home/          # Página principal
│   ├── products/      # Catálogo y detalle de productos
│   ├── brands/        # Sección de marcas
│   ├── about/         # Página institucional
│   ├── contact/       # Formulario de contacto
│   ├── promotions/    # Página de promociones
│   ├── not-found/     # Página 404
│   └── chatbot/       # Integración Tawk.to
│
├── shared/            # Código compartido
│   ├── components/    # Componentes reutilizables
│   │   ├── layout/    # Layout, Navbar, Footer
│   │   └── ui/        # Componentes UI
│   ├── data/          # Datos estáticos (productos, marcas)
│   └── hooks/         # Custom hooks
│
├── style/             # Estilos globales
├── App.jsx            # Componente raíz con rutas
└── main.jsx           # Entry point
```

### Arquitectura

El proyecto usa **Feature-Based Architecture**:
- Cada feature es un módulo independiente con sus páginas, componentes y datos
- El código compartido está en `shared/`
- Facilita escalabilidad y mantenimiento

---

## Páginas

| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | Home | Página principal con hero, servicios y FAQ |
| `/productos` | Productos | Catálogo con filtros, búsqueda y paginación |
| `/productos/:id` | Detalle | Vista detalle del producto |
| `/marcas` | Marcas | Grid de marcas disponibles |
| `/marcas/:id` | Detalle Marca | Productos por marca |
| `/nosotros` | Nosotros | Información institucional |
| `/contacto` | Contacto | Formulario y mapa |
| `/promociones` | Promociones | Ofertas vigentes |
| `/*` | 404 | Página no encontrada |

---

## Datos

Los datos de productos y marcas están en archivos estáticos:

```
src/shared/data/
├── products.js    # 40 productos con categorías, precios, características
└── marcas.js      # 22 marcas con logos y descripciones
```

### Estructura de un producto

```javascript
{
  id: 1,
  name: 'Taladro Percutor Bosch GSB 13 RE',
  category: 'herramientas-electricas',
  subcategory: 'taladros',
  brand: 'Bosch',
  price: 48999.99,
  originalPrice: 52999.99,  // Precio anterior (opcional)
  image: 'url-imagen',
  description: 'Descripción del producto',
  stock: 12,
  featured: true,           // Mostrar en destacados
  characteristics: ['650W', 'Mandril 13mm', ...],
  tags: ['taladro', 'profesional', ...],
  sku: 'BOS-TAL-650'
}
```

---

## Scripts

```bash
npm run dev       # Servidor de desarrollo (localhost:5173)
npm run build     # Build de producción
npm run preview   # Preview del build (localhost:4173)
npm run lint      # Ejecutar ESLint
```

---

## Configuración de Servicios

### Formspree (Formulario de contacto)

El formulario está configurado en `src/features/contact/components/ContactForm.jsx`.
Para cambiar el endpoint, modificar la URL en la función `onSubmit`:

```javascript
const response = await fetch("https://formspree.io/f/TU_FORM_ID", {
  method: "POST",
  // ...
});
```

### Tawk.to (Chat)

Configurado en `src/features/chatbot/components/TawkTo.jsx`.
Para cambiar la cuenta, modificar el Property ID:

```javascript
script.src = "https://embed.tawk.to/TU_PROPERTY_ID/TU_WIDGET_ID";
```

### Google Analytics

Configurado en `index.html`. Cambiar el Measurement ID:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=TU_GA_ID"></script>
```

---

## Deploy

El proyecto está configurado para deploy en **Vercel**:

1. Conectar repositorio en Vercel
2. Framework Preset: Vite
3. Build Command: `npm run build`
4. Output Directory: `dist`

El deploy es automático en cada push a `main`.

---

## Performance

- **Bundle size:** ~66 KB (gzip)
- **Lazy loading** de todas las páginas
- **Imágenes** con loading="lazy"
- **CSS** optimizado con Tailwind (purge automático)

### Lighthouse Scores

| Métrica | Score |
|---------|-------|
| Performance | >80 |
| Accessibility | >80 |
| Best Practices | >80 |
| SEO | >80 |

---

## Desarrollo Futuro

El proyecto está preparado para escalar a e-commerce:

- Carpetas `api/` listas para conectar backend
- React Query instalado para manejo de estado servidor
- Estructura modular para agregar carrito, pagos, usuarios

---

## Licencia

Proyecto privado - Ferretería San Francisco © 2024