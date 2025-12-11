import { useState } from 'react';
import { products } from '../../../shared/data/products';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';

export default function ProductsPage() {
  // Estado para productos filtrados
  const [filteredProducts, setFilteredProducts] = useState(products);

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
          <span className="font-semibold">{products.length}</span> productos
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar para filtros */}
        <aside className="lg:w-1/4">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Filtros</h2>
            
            {/* Integración del componente lógico */}
            <ProductFilters
              products={products}
              onFilterChange={setFilteredProducts}
            />

            {/* Placeholder visual */}
            {import.meta.env?.MODE === 'development' && (
              <div className="text-center py-4 text-xs text-gray-400">
                🧠 Filtros lógicos montados (UI: pendiente)
              </div>
            )}
          </div>
        </aside>

        {/* Contenido principal - Grid de productos */}
        <main className="lg:w-3/4">
          {/* Barra de herramientas (placeholder) */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700">
              Búsqueda: <span className="text-gray-500">(próximamente)</span>
            </p>
          </div>

          {/* Grid de productos */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-2">No se encontraron productos</p>
              <button
                onClick={() => setFilteredProducts(products)}
                className="text-primary hover:underline text-sm"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Debug info */}
      {import.meta.env?.MODE === 'development' && (
        <div className="mt-8 p-3 bg-gray-50 rounded text-xs">
          <p>
            <strong>Filtros activos:</strong> 
            Categoría: {filteredProducts.length > 0 ? filteredProducts[0]?.category || 'todas' : '—'}
          </p>
        </div>
      )}
    </div>
  );
}