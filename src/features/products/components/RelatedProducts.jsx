import { products } from '../../../shared/data/products';
import ProductCard from './ProductCard';

/**
 * Muestra productos relacionados (misma categoría, excluyendo el actual)
 * @param {string} category - Categoría del producto actual
 * @param {number} currentProductId - ID del producto actual (para excluir)
 */
export default function RelatedProducts({ category, currentProductId }) {
  const related = products
    .filter(p => p.category === category && p.id !== currentProductId)
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Productos Relacionados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {related.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}