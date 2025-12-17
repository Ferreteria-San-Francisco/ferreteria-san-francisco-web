import { products } from '../../../shared/data/products';
import ProductCard from '../../products/components/ProductCard';

export default function FeatureProducts() {
  const featured = products.filter(p => p.featured);

  // Si no hay productos destacados, no renderiza nada
  if (featured.length === 0) return null;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}