import { useState, useEffect, useCallback } from 'react';
import { products } from '../../../shared/data/products';
import { categorias } from '../../../shared/data/categorias';
// Eliminado: import { marcas } from '../../../shared/data/marcas'; // No se usa
import ProductCard from '../components/ProductCard';

export default function ProductsPage() {
  // Estados para los datos
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Estados para estadísticas
  const [stats, setStats] = useState({
    total: 0,
    byCategory: {},
    byBrand: {},
    priceRange: { min: 0, max: 0 }
  });

  // Función para calcular estadísticas - MOVIDA ARRIBA DEL useEffect
  const calculateStats = useCallback((productList) => {
    if (!productList.length) return;
    
    // Conteo por categoría
    const byCategory = {};
    productList.forEach(product => {
      byCategory[product.category] = (byCategory[product.category] || 0) + 1;
    });
    
    // Conteo por marca
    const byBrand = {};
    productList.forEach(product => {
      byBrand[product.brand] = (byBrand[product.brand] || 0) + 1;
    });
    
    // Rango de precios
    const prices = productList.map(p => p.price);
    const priceRange = {
      min: Math.min(...prices),
      max: Math.max(...prices)
    };
    
    setStats({
      total: productList.length,
      byCategory,
      byBrand,
      priceRange
    });
  }, []);

  // Inicializar datos
  useEffect(() => {
    // Simular carga de datos
    setIsLoading(true);
    
    // Usar datos estáticos por ahora
    setAllProducts(products);
    setFilteredProducts(products);
    
    // Calcular estadísticas
    calculateStats(products);
    
    setIsLoading(false);
    
    // Log para debugging (remover en producción)
    console.log('📊 ProductsPage - Datos cargados:');
    console.log('- Total productos:', products.length);
    console.log('- Categorías únicas:', [...new Set(products.map(p => p.category))]);
    console.log('- Marcas únicas:', [...new Set(products.map(p => p.brand))]);
  }, [calculateStats]);

  // Función para filtrar productos (base para ProductFilters)
  const applyFilters = (filters) => {
    console.log('🔍 Aplicando filtros:', filters);
    
    let result = [...allProducts];
    
    // Filtro por categoría
    if (filters.category && filters.category !== 'todas') {
      result = result.filter(product => product.category === filters.category);
    }
    
    // Filtro por marca
    if (filters.brand && filters.brand !== 'todas') {
      result = result.filter(product => product.brand === filters.brand);
    }
    
    // Filtro por precio
    if (filters.minPrice || filters.maxPrice) {
      const min = filters.minPrice || 0;
      const max = filters.maxPrice || Number.MAX_SAFE_INTEGER;
      result = result.filter(product => product.price >= min && product.price <= max);
    }
    
    // Filtro por búsqueda
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(term) ||
        product.description?.toLowerCase().includes(term) ||
        product.tags?.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    setFilteredProducts(result);
    calculateStats(result);
    
    // Log para debugging
    console.log(`📈 Filtro aplicado: ${result.length} productos encontrados`);
  };

  // Handler para cuando ProductFilters esté listo
  // Comentado temporalmente hasta que se implemente ProductFilters
  // const handleFilterChange = (newFilters) => {
  //   applyFilters(newFilters);
  // };

  // Handler placeholder para búsqueda
  // Comentado temporalmente hasta que se implemente la búsqueda
  // const handleSearch = (searchTerm) => {
  //   applyFilters({ searchTerm });
  // };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center py-12">
          <p className="text-gray-600">Cargando productos...</p>
        </div>
      </div>
    );
  }

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
        
        {/* Información de estadísticas */}
        <div className="text-sm text-gray-500 mb-2">
          Mostrando <span className="font-semibold">{filteredProducts.length}</span> de{' '}
          <span className="font-semibold">{stats.total}</span> productos
        </div>
        
        {/* Log de estadísticas para debugging */}
        <div className="hidden">
          {/* Información para debugging - no se muestra al usuario */}
          <div data-debug="stats" data-total={stats.total} />
          {Object.entries(stats.byCategory).map(([category, count]) => (
            <div 
              key={category} 
              data-debug="category" 
              data-category={category} 
              data-count={count} 
            />
          ))}
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar para filtros */}
        <aside className="lg:w-1/4">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Filtros
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              {/* Componente ProductFilters */}
              Los filtros estarán disponibles pronto
            </p>
            {/* Espacio reservado para ProductFilters */}
            <div id="product-filters-placeholder" className="text-center py-8 border border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-400">🔧 ProductFilters aquí</p>
              <p className="text-xs text-gray-400 mt-2">(próximamente)</p>
            </div>
          </div>
          
          {/* Información de categorías disponibles */}
          <div className="hidden">
            {categorias.map(cat => (
              <div 
                key={cat.id} 
                data-category={cat.slug} 
                data-name={cat.name}
                data-product-count={stats.byCategory[cat.slug] || 0}
              />
            ))}
          </div>
        </aside>

        {/* Contenido principal - Grid de productos */}
        <main className="lg:w-3/4">
          {/* Barra de herramientas */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <p className="text-gray-700">
                  Ordenar por: <span className="text-gray-500">(próximamente)</span>
                </p>
              </div>
              <div>
                <p className="text-gray-700">
                  Búsqueda: <span className="text-gray-500">(Se implementará)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Grid de productos */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-2">No se encontraron productos</p>
              <p className="text-gray-400 text-sm">
                Intenta con otros filtros de búsqueda
              </p>
            </div>
          ) : (
            <>
              {/* Grid responsive */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    // NO modificar ProductCard
                  />
                ))}
              </div>
              
              {/* Información de paginación (placeholder) */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">
                    Página 1 de {/* cálculo pendiente */}
                  </p>
                  <div className="text-sm text-gray-500">
                    Paginación: <span className="text-gray-400">(próximamente)</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
      </div>

      {/* Sección de debugging */}
      {/* Cambiado process.env por import.meta.env para Vite */}
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
          <button
            onClick={() => {
              console.log('📋 Todos los productos:', allProducts);
              console.log('📋 Productos filtrados:', filteredProducts);
              console.log('📊 Estadísticas:', stats);
            }}
            className="mt-2 px-3 py-1 bg-gray-300 text-gray-700 rounded text-xs"
          >
            Log datos en consola
          </button>
        </div>
      )}
    </div>
  );
}