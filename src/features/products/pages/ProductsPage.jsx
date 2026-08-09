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
        <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--app-text)' }}>
          Nuestros Productos
        </h1>

        <div className="mb-6">
          <ProductSearch />
        </div>

        {/* Barra de filtros */}
        <div
          className="mb-6 p-3 rounded text-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          style={{ backgroundColor: 'var(--app-surface)', border: '1px solid var(--app-border)' }}
        >
          {/* Ordenar */}
          <div className="flex items-center gap-2">
            <label htmlFor="sort-select" className="text-xs sm:text-sm" style={{ color: 'var(--app-text-muted)' }}>
              Ordenar:
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded px-2 py-1 text-sm flex-1 sm:flex-none"
              style={{ backgroundColor: 'var(--app-surface)', borderColor: 'var(--app-border)', color: 'var(--app-text)' }}
            >
              <option value="name-asc">Nombre A → Z</option>
              <option value="name-desc">Nombre Z → A</option>
            </select>
          </div>

          {/* Filtrar por categoría */}
          <div className="flex items-center gap-2">
            <label htmlFor="category-select" className="text-xs sm:text-sm" style={{ color: 'var(--app-text-muted)' }}>
              Categoría:
            </label>
            <select
              id="category-select"
              value={filters.category || 'todas'}
              onChange={(e) => setFilter('category', e.target.value === 'todas' ? '' : e.target.value)}
              className="border rounded px-2 py-1 text-sm flex-1 sm:flex-none"
              style={{ backgroundColor: 'var(--app-surface)', borderColor: 'var(--app-border)', color: 'var(--app-text)' }}
            >
              <option value="todas">Todas</option>
              <option value="herramientas-electricas">Herramientas Eléctricas</option>
              <option value="herramientas-manuales">Herramientas Manuales</option>
              <option value="pinturas">Pinturas</option>
              <option value="construccion">Construcción</option>
              <option value="electricidad">Electricidad</option>
              <option value="plomeria">Plomería</option>
              <option value="jardin">Jardín</option>
              <option value="adhesivos-selladores">Adhesivos y Selladores</option>
            </select>
          </div>

          {/* Botón promociones */}
          <Link
            to="/promociones"
            className="btn btn-primary whitespace-nowrap text-center w-full sm:w-auto"
          >
            Ver promociones
          </Link>
        </div>

        {/* Grid de productos */}
        {paginatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16" style={{ color: 'var(--app-text-muted)' }}>
            <p className="text-lg">Todavía no hay productos cargados en esta categoría.</p>
            <p className="text-sm mt-1">Estamos sumando nuestro catálogo real de a poco. ¡Volvé pronto!</p>
          </div>
        )}

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter('page', Math.max(1, filters.page - 1))}
              disabled={filters.page === 1}
              className="px-4 py-2 rounded disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed transition-colors"
              style={{ backgroundColor: 'var(--app-surface)', color: 'var(--app-text)', border: '1px solid var(--app-border)' }}
            >
              Anterior
            </button>

            <span className="px-4 py-2" style={{ color: 'var(--app-text)' }}>
              Página {filters.page} de {totalPages}
            </span>

            <button
              onClick={() => setFilter('page', Math.min(totalPages, filters.page + 1))}
              disabled={filters.page === totalPages}
              className="px-4 py-2 rounded disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed transition-colors"
              style={{ backgroundColor: 'var(--app-surface)', color: 'var(--app-text)', border: '1px solid var(--app-border)' }}
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </>
  );
}