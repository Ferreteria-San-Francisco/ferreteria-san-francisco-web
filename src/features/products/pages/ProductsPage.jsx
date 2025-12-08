import { products } from '../../../shared/data/products';
import ProductCard from '../components/ProductCard';

console.log('=== VALIDACIÓN DE DATOS ===');
console.log('Total productos:', products.length);
console.log('Productos por categoría:');
const categoriasCount = {};
products.forEach(p => {
  categoriasCount[p.category] = (categoriasCount[p.category] || 0) + 1;
});
console.log(categoriasCount);

// Validación rápida
const errors = [];
products.forEach((p, i) => {
  if (!p.id) errors.push(`Producto ${i}: Sin ID`);
  if (!p.name) errors.push(`Producto ${i}: Sin nombre`);
  if (!p.price || p.price <= 0) errors.push(`Producto ${i}: Precio inválido`);
  if (!p.category) errors.push(`Producto ${i}: Sin categoría`);
  if (!p.brand) errors.push(`Producto ${i}: Sin marca`);
});

if (errors.length === 0) {
  console.log('✅ TODOS LOS PRODUCTOS SON VÁLIDOS');
} else {
  console.error('❌ ERRORES ENCONTRADOS:', errors);
}

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Nuestros Productos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}