import { Link } from 'react-router-dom';

export default function BrandCard({ brand }) {
  // Iconos por categoría
  const categoryIcons = {
    'herramientas-electricas': '⚡',
    'herramientas-manuales': '🛠️',
    'pinturas': '🎨',
    'construccion': '🏗️',
    'electricidad': '💡',
    'plomeria': '🚰',
    'jardin': '🌱',
    'seguridad': '🛡️'
  };

  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md hover:border-primary/30 transition-all duration-300">
      {/* Logo de la marca */}
      <div className="h-40 bg-gray-50 flex items-center justify-center p-6">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={brand.logo || 'https://via.placeholder.com/200x100?text=' + brand.name}
            alt={`Logo ${brand.name}`}
            className="max-h-20 max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          
          {/* Efecto hover sutil */}
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5">
        {/* Nombre y categoría */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800">
            {brand.name}
          </h3>
          <span className="text-2xl" title={brand.category}>
            {categoryIcons[brand.category] || '🏢'}
          </span>
        </div>

        {/* Descripción */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {brand.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm mb-4">
          <div className="flex items-center text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
            {brand.productsCount || 15} productos
          </div>
          
          {brand.featured && (
            <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">
              ⭐ Destacado
            </span>
          )}
        </div>

        {/* Separador */}
        <div className="border-t border-gray-100 my-4"></div>

        {/* Acciones */}
        <div className="flex gap-2">
          <Link
            to={`/marcas/${brand.id}`}
            className="flex-1 bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg text-center text-sm transition-colors"
          >
            Ver productos
          </Link>
          
          {brand.website && (
            <a
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg text-sm transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              Web
            </a>
          )}
        </div>
      </div>
    </div>
  );
}