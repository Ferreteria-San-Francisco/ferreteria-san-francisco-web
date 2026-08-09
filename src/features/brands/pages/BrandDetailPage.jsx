import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { marcas } from '../../../shared/data/marcas';
import { products } from '../../../shared/data/products';
import ProductCard from '../../products/components/ProductCard';

const PRODUCTS_PER_PAGE = 9;

export default function BrandDetailPage() {
  const { id } = useParams();
  const [page, setPage] = useState(1);

  
  const brandId = Number(id);
  if (isNaN(brandId)) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-gray-800">ID inválido</h1>
        <p className="text-gray-600">El ID de la marca debe ser un número.</p>
      </div>
    );
  }

  
  const brand = marcas.find(m => m.id === brandId);
  if (!brand) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-gray-800">Marca no encontrada</h1>
        <p className="text-gray-600 mt-2">
          No existe ninguna marca con ID <code className="bg-gray-100 px-1 rounded">{id}</code>.
        </p>
        <p className="text-sm text-gray-500 mt-1">Marcas disponibles: {marcas.map(m => m.id).join(', ')}</p>
      </div>
    );
  }

  const brandProducts = products.filter(p => p.brand === brand.name);
  const totalPages = Math.ceil(brandProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = brandProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      <div className="text-center mb-10">
        <div className="inline-block w-24 h-24 rounded-full bg-gray-200 items-center justify-center mb-4">
          {brand.logo ? (
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-w-full max-h-full object-contain"
            />
          ) : (
            <span className="text-2xl font-bold text-gray-600">{brand.name.charAt(0)}</span>
          )}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{brand.name}</h1>
        <p className="text-gray-600 mt-2">
          Categoría: <span className="font-medium">{brand.category}</span>
        </p>
      </div>

      {brandProducts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {paginatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 rounded disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed transition-colors border border-gray-300 text-gray-700"
              >
                Anterior
              </button>

              <span className="px-4 py-2 text-gray-700">
                Página {page} de {totalPages}
              </span>

              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 rounded disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed transition-colors border border-gray-300 text-gray-700"
              >
                Siguiente
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">
            Consultanos por los productos {brand.name} disponibles en el local.
          </p>
          <Link
            to="/contacto"
            className="inline-block mt-4 px-6 py-3 rounded-xl bg-primary text-white hover:bg-primary-dark transition"
          >
            Consultar disponibilidad
          </Link>
        </div>
      )}
    </div>
  );
}