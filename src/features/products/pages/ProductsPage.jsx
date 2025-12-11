import { useMemo } from 'react';
import { products } from '../../../shared/data/products';
// import { categorias } from '../../../shared/data/categorias'; //
import ProductCard from '../components/ProductCard';

export default function ProductsPage() {
  // Calcular estadísticas
  const stats = useMemo(() => {
    if (!products.length) return { total: 0, priceRange: { min: 0, max: 0 } };

    const prices = products.map(p => p.price);
    return {
      total: products.length,
      priceRange: {
        min: Math.min(...prices),
        max: Math.max(...prices)
      }
    };
  }, []);

  // Mostrar todos los productos
  const filteredProducts = products;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Título y estadísticas */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Nuestros Productos
        </h1>
        <p className="text-gray-600 mb-4">
          Encontrá todo lo que necesitás para tus proyectos
        </p>
        <div className="text-sm text-gray-500">
          Mostrando <span className="font-semibold">{filteredProducts.length}</span> de{' '}
          <span className="font-semibold">{stats.total}</span> productos
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar para filtros (placeholder) */}
        <aside className="lg:w-1/4">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Filtros
            </h2>
            <div
              id="product-filters-placeholder"
              className="text-center py-8 border border-dashed border-gray-300 rounded-lg"
            >
              <p className="text-gray-400">🔧 ProductFilters aquí</p>
              <p className="text-xs text-gray-400 mt-2">(próximamente)</p>
            </div>
          </div>
        </aside>

        {/* Contenido principal - Grid de productos */}
        <main className="lg:w-3/4">
          {/* Barra de herramientas (placeholder) */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <p className="text-gray-700">
                Ordenar por: <span className="text-gray-500">(próximamente)</span>
              </p>
              <p className="text-gray-700">
                Búsqueda: <span className="text-gray-500">(Se implementará)</span>
              </p>
            </div>
          </div>

          {/* Grid de productos */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-2">No se encontraron productos</p>
              <p className="text-gray-400 text-sm">Intenta con otros filtros de búsqueda</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* Paginación (placeholder) */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Página 1 de 1</p>
              <p className="text-sm text-gray-500">
                Paginación: <span className="text-gray-400">(próximamente)</span>
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* Debug info */}
      {import.meta.env?.MODE === 'development' && (
        <div className="mt-12 p-4 bg-gray-100 rounded-lg text-xs">
          <h3 className="font-semibold mb-2">🛠️ Debug Info (Solo desarrollo)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div>
              <span className="font-medium">Total productos:</span> {stats.total}
            </div>
            <div>
              <span className="font-medium">Filtrados:</span> {filteredProducts.length}
            </div>
            <div>
              <span className="font-medium">Precio min:</span> ${stats.priceRange.min}
            </div>
            <div>
              <span className="font-medium">Precio max:</span> ${stats.priceRange.max}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}