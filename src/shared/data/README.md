# 📁 Estructura de Datos – Ferretería San Francisco

Este documento describe la estructura de los archivos de datos utilizados en el frontend del sitio web.

---

## 📦 `products.js`

**Ubicación:** `src/shared/data/products.js`  
**Tipo:** `Array` de objetos  
**Descripción:** Lista de todos los productos disponibles en la ferretería.

### Campos obligatorios por producto:
| Campo | Tipo | Descripción | Ejemplo |
|------|------|-------------|--------|
| `id` | `number` | Identificador único | `1` |
| `name` | `string` | Nombre del producto | `"Taladro Percutor Bosch GSB 13 RE"` |
| `category` | `string` | Categoría (debe existir en `categorias.js` como `slug`) | `"herramientas-electricas"` |
| `subcategory` | `string` | Subcategoría (debe coincidir con un `slug` en `subcategories`) | `"taladros"` |
| `brand` | `string` | Marca (debe existir en `marcas.js`) | `"Bosch"` |
| `price` | `number` | Precio en ARS | `48999.99` |
| `originalPrice` | `number \| null` | Precio anterior (para ofertas) | `52999.99` |
| `image` | `string` | URL de la imagen | `"/assets/productos/taladro.jpg"` |
| `description` | `string` | Descripción detallada | `"Taladro percutor profesional..."` |
| `stock` | `number` | Unidades disponibles | `12` |
| `featured` | `boolean` | ¿Aparece en destacados? | `true` |
| `characteristics` | `string[]` | Lista de características | `["650W", "Mandril 13mm", ...]` |
| `tags` | `string[]` | Etiquetas para búsqueda | `["taladro", "bosch", "impacto"]` |
| `sku` | `string` | Código de producto | `"BOS-TAL-650"` |

---

## 🏷️ `marcas.js`

**Ubicación:** `src/shared/data/marcas.js`  
**Tipo:** `Array` de objetos  
**Descripción:** Lista de marcas comerciales disponibles.

### Campos por marca:
| Campo | Tipo | Descripción | Ejemplo |
|------|------|-------------|--------|
| `id` | `number` | Identificador único | `1` |
| `name` | `string` | Nombre de la marca | `"Bosch"` |
| `logo` | `string` | URL del logo | `"https://.../bosch.png"` |
| `category` | `string` | Categoría principal | `"herramientas-electricas"` |
| `description` | `string` | Descripción de la marca | `"Líder mundial en herramientas eléctricas..."` |
| `website` | `string` | Sitio web oficial | `"https://www.bosch.com.ar"` |
| `featured` | `boolean` | ¿Aparece en listado destacado? | `true` |
| `productsCount` | `number` | Cantidad de productos asociados | `45` |

---

## 📂 `categorias.js`

**Ubicación:** `src/shared/data/categorias.js`  
**Tipo:** `Array` de objetos  
**Descripción:** Lista de categorías principales y sus subcategorías para el catálogo.

### Campos por categoría:
| Campo | Tipo | Descripción | Ejemplo |
|------|------|-------------|--------|
| `id` | `number` | Identificador único | `1` |
| `name` | `string` | Nombre legible | `"Herramientas Eléctricas"` |
| `slug` | `string` | Identificador único para URL y referencia | `"herramientas-electricas"` |
| `icon` | `string` | Emoji o ícono visual | `"⚡"` |
| `description` | `string` | Descripción de la categoría | `"Taladros, amoladoras..."` |
| `productCount` | `number` | Cantidad estimada de productos | `56` |
| `subcategories` | `Array` | Lista de subcategorías | `[...]` |

### Campos por subcategoría (dentro de `subcategories`):
| Campo | Tipo | Descripción | Ejemplo |
|------|------|-------------|--------|
| `id` | `number` | Identificador único | `101` |
| `name` | `string` | Nombre legible | `"Taladros y Percutores"` |
| `slug` | `string` | Identificador único para `products.subcategory` | `"taladros"` |

---

## 🔗 Relaciones entre archivos

- `products[i].category` → debe coincidir con `categorias[j].slug`
- `products[i].subcategory` → debe coincidir con alguno de los `subcategories[k].slug`
- `products[i].brand` → debe coincidir con `marcas[l].name`

> ✅ **Importante**: Cualquier cambio en la estructura debe actualizarse en este documento.