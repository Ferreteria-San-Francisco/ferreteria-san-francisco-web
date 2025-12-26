import { useState, useMemo } from 'react';
import { products } from '../../../shared/data/products';
import ProductCard from '../components/ProductCard';
import ProductSearch from '../components/ProductSearch';
import { useProductFilters } from '../hooks/useProductFilters';
import SEO from '../../../shared/components/SEO';
import { Link } from 'react-router-dom';

const PRODUCTS_PER_PAGE = 9;

export default function ProductsPage() {
  const { filters, setFilter } = useProductFilters();
  const [sortBy, setSortBy] = useState('name-asc');

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

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });
  }, [filteredProducts, sortBy]);

  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (filters.page - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <>
      <SEO
        title="Productos"
        description="Explorá nuestro catálogo de productos. Herramientas, materiales, pinturas y más en Ferretería San Francisco."
        url="/products"
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Nuestros Productos
        </h1>

        {/* Buscador */}
        <div className="mb-6">
          <ProductSearch />
        </div>

        {/* Ordenar + Promociones */}
        <div className="mb-6 p-3 bg-gray-50 rounded text-sm flex items-center justify-between gap-4">
          
          <div className="flex items-center">
            <label className="font-medium mr-2">Ordenar por:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value="name-asc">Nombre A → Z</option>
              <option value="name-desc">Nombre Z → A</option>
              <option value="price-asc">Precio: menor a mayor</option>
              <option value="price-desc">Precio: mayor a menor</option>
            </select>
          </div>

          <Link
            to="/promociones"
            className="btn btn-primary whitespace-nowrap"
          >
            Ver promociones
          </Link>
        </div>


        {/* Productos */}
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
    </>
  );
}
