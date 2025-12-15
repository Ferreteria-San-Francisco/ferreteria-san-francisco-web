import { useParams, Link } from 'react-router-dom';
import { products } from '../../../shared/data/products'; // Asumiendo que tienes esta lista

export default function ProductDetailPage() {
  const { id } = useParams(); // Obtiene el ID del producto desde la URL
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Producto no encontrado</h1>
        <Link to="/productos" className="text-primary hover:underline mt-4 inline-block">
          Volver a productos
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <Link to="/productos" className="text-primary hover:underline">Productos</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Imagen del Producto */}
        <div className="bg-gray-100 rounded-xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Información del Producto */}
        <div>
          <span className="text-sm text-primary font-semibold">{product.brand}</span>
          <h1 className="text-3xl font-bold text-gray-800 mt-2">{product.name}</h1>

          <div className="mt-4">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price.toLocaleString('es-AR')}
            </span>
            {product.originalPrice && (
              <span className="ml-3 text-lg text-gray-400 line-through">
                ${product.originalPrice.toLocaleString('es-AR')}
              </span>
            )}
          </div>

          <p className="mt-6 text-gray-600">{product.description}</p>

          {/* Características del Producto */}
          {product.characteristics && (
            <div className="mt-6">
              <h3 className="font-semibold text-gray-800 mb-2">Características:</h3>
              <ul className="space-y-1">
                {product.characteristics.map((char, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {char}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stock */}
          <div className="mt-6">
            <span className={`font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock > 0 ? `${product.stock} en stock` : 'Sin stock'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
