import { Link } from 'react-router-dom';

const WHATSAPP_NUMBER = '5491131509571';

export default function ProductCard({ product }) {

const productUrl = `${window.location.origin}/productos/${product.id}`;

const message = `Hola! Me interesa el producto: *${product.name}* (${product.brand}). ¿Podrían darme más información?\n\nLink: ${productUrl}`;

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className="group h-full flex flex-col rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
      style={{ backgroundColor: 'var(--app-surface)', border: '1px solid var(--app-border)' }}
    >
      {/* Imagen */}
      <div className="relative h-56 overflow-hidden p-4" style={{ backgroundColor: 'var(--app-bg)' }}>
        <img
          src={product.image || 'https://via.placeholder.com/400x300?text=Producto'}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.featured && (
            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
              🔥 Destacado
            </span>
          )}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col grow">

        {/* Categoría y subcategoría badges */}
        <div className="mb-2 flex flex-wrap gap-1">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
            {product.category}
          </span>
          {product.subcategory && (
            <span
              className="text-xs font-medium px-2 py-1 rounded"
              style={{ backgroundColor: 'var(--app-bg)', color: 'var(--app-text-muted)' }}
            >
              {product.subcategory}
            </span>
          )}
        </div>

        {/* Nombre */}
        <h3 className="text-lg font-bold mb-1 line-clamp-2 min-h-14" style={{ color: 'var(--app-text)' }}>
          {product.name}
        </h3>

        {/* Marca */}
        <p className="text-sm mb-3" style={{ color: 'var(--app-text-muted)' }}>
          {product.brand}
        </p>

        {/* Características */}
        {product.characteristics && product.characteristics.length > 0 && (
          <div className="mb-4">
            <ul className="text-xs space-y-1" style={{ color: 'var(--app-text-muted)' }}>
              {product.characteristics.slice(0, 3).map((char, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-3 h-3 text-primary mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {char}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Aplicación */}
        {product.application && (
          <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: 'var(--app-bg)' }}>
            <p className="text-xs font-semibold text-primary mb-1">Se usa en</p>
            <p className="text-xs line-clamp-2" style={{ color: 'var(--app-text-muted)' }}>
              {product.application}
            </p>
          </div>
        )}

        {/* Acciones */}
        <div className="flex gap-2 mt-auto">
          <Link
            to={`/productos/${product.id}`}
            className="flex-1 bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 px-4 rounded-lg text-center transition-colors text-sm"
          >
            Ver detalles
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors text-sm"
            aria-label="Consultar por WhatsApp"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.571a.75.75 0 00.921.921l5.726-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.725 9.725 0 01-4.964-1.362l-.355-.212-3.698.95.968-3.596-.232-.371A9.725 9.725 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            Consultar
          </a>
        </div>
      </div>
    </div>
  );
}