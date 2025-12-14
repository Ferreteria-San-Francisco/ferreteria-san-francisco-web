import { useParams } from 'react-router-dom';
import { marcas } from '../../../shared/data/marcas';
import { products } from '../../../shared/data/products';
import ProductCard from '../../products/components/ProductCard';

export default function BrandDetailPage() {
  const { id } = useParams();

  // Validación robusta del ID
  const brandId = Number(id);
  if (isNaN(brandId)) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-gray-800">ID inválido</h1>
        <p className="text-gray-600">El ID de la marca debe ser un número.</p>
      </div>
    );
  }

  // Encontrar marca
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

  // Filtrar productos
  const brandProducts = products.filter(p => p.brand === brand.name);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Cabecera */}
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
        <p className="text-sm text-gray-500 mt-1">
          {brandProducts.length} producto(s) disponibles
        </p>
      </div>

      {/* Productos */}
      {brandProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No hay productos disponibles para esta marca.</p>
          <p className="text-xs text-gray-400 mt-2">Nombre usado para filtrar: "{brand.name}"</p>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Productos de {brand.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}

      {/* Debug */}
      {import.meta.env?.MODE === 'development' && (
        <div className="mt-8 p-3 bg-gray-50 rounded text-xs">
          <p><strong>Debug:</strong> ID={id} → brandId={brandId}</p>
          <p>Marca encontrada: {brand ? `"${brand.name}"` : '❌ Ninguna'}</p>
          <p>Productos filtrados: {brandProducts.length}</p>
        </div>
      )}
    </div>
  );
}