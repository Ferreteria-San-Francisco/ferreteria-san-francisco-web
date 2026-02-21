import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(price);
  };

  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
    
      <div className="relative h-56 overflow-hidden bg-gray-50">
        <img
          src={product.image || 'https://via.placeholder.com/400x300?text=Producto'}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        
     
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.featured && (
            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
              🔥 Destacado
            </span>
          )}
          {product.stock <= 5 && product.stock > 0 && (
            <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
              ⚡ Últimas {product.stock} unidades
            </span>
          )}
          {product.stock === 0 && (
            <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
              🔄 Próximamente
            </span>
          )}
        </div>
      </div>

  
      <div className="p-5">
   
        <div className="mb-2">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>

   
        <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-500 mb-3">
          {product.brand}
        </p>


        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          
        
          {product.originalPrice && (
            <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
              {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>

  
        {product.characteristics && product.characteristics.length > 0 && (
          <div className="mb-4">
            <ul className="text-xs text-gray-600 space-y-1">
              {product.characteristics.slice(0, 3).map((char, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-3 h-3 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {char}
                </li>
              ))}
            </ul>
          </div>
        )}

 
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Disponibilidad:</span>
            <span className={`font-semibold ${product.stock > 10 ? 'text-green-600' : product.stock > 0 ? 'text-amber-600' : 'text-red-600'}`}>
              {product.stock > 10 ? 'Disponible' : product.stock > 0 ? `Últimas ${product.stock}` : 'Sin stock'}
            </span>
          </div>
          {product.stock > 0 && (
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
              <div 
                className={`h-1.5 rounded-full ${product.stock > 10 ? 'bg-green-500' : 'bg-amber-500'}`}
                style={{ width: `${Math.min(100, (product.stock / 20) * 100)}%` }}
              ></div>
            </div>
          )}
        </div>

   
        <div className="flex gap-2">
          <Link
            to={`/productos/${product.id}`}
            className="flex-1 bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 px-4 rounded-lg text-center transition-colors"
          >
            Ver detalles
          </Link>
          
          <button
            className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2.5 px-4 rounded-lg transition-colors"
            aria-label="Agregar al carrito"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}