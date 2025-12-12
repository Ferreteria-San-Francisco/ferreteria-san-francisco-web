import { products } from '../../../shared/data/products'; // Asegúrate de tener productos para mostrar
import ProductCard from '../components/ProductCard'; // Componente que muestra cada producto
import ProductSearch from '../components/ProductSearch'; // Componente de búsqueda
import { useProductFilters } from '../hooks/useProductFilters'; // El hook de filtros que creaste

const PRODUCTS_PER_PAGE = 9;

export default function ProductsPage() {
  const { filters, setFilter } = useProductFilters();

  // Filtrar productos
  const filteredProducts = products.filter((product) => {
    if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    if (filters.category && product.category !== filters.category) {
      return false;
    }
    if (filters.brand && product.brand !== filters.brand) {
      return false;
    }
    return true;
  });

  // Paginación
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (filters.page - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Nuestros Productos</h1>

      {/* Componente de Búsqueda */}
      <div className="mb-6">
        <ProductSearch />
      </div>

      {/* Muestra los productos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          <button
            onClick={() => setFilter('page', Math.max(1, filters.page - 1))}
            disabled={filters.page === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Anterior
          </button>

          <span className="px-4 py-2">
            Página {filters.page} de {totalPages}
          </span>

          <button
            onClick={() => setFilter('page', Math.min(totalPages, filters.page + 1))}
            disabled={filters.page === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}
