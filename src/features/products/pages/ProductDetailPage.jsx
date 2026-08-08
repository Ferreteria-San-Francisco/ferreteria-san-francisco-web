import { useParams, Link } from 'react-router-dom';
import { products } from '../../../shared/data/products';
import RelatedProducts from '../components/RelatedProducts';
import SEO from '../../../shared/components/SEO';

const WHATSAPP_NUMBER = '5491131509571';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <>
        <SEO title="Producto no encontrado" url={`/productos/${id}`} />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold" style={{ color: 'var(--app-text)' }}>
            Producto no encontrado
          </h1>
          <Link to="/productos" className="text-primary hover:underline mt-4 inline-block">
            Volver a productos
          </Link>
        </div>
      </>
    );
  }

const productUrl = window.location.href;

const message = `Hola! Me interesa el producto: *${product.name}* (${product.brand}). ¿Podrían darme más información?\n\nLink: ${productUrl}`;

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <SEO
        title={product.name}
        description={product.description || `${product.name} - ${product.brand}. Disponible en Ferretería San Francisco.`}
        url={`/productos/${id}`}
        image={product.image}
        type="product"
      />

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link to="/productos" className="text-primary hover:underline">Productos</Link>
          <span className="mx-2" style={{ color: 'var(--app-text-muted)' }}>/</span>
          <span style={{ color: 'var(--app-text-muted)' }}>{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Imagen */}
          <div className="rounded-xl overflow-hidden p-6" style={{ backgroundColor: 'var(--app-bg)' }}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-contain"
            />
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm text-primary font-semibold">{product.brand}</span>
              {product.sku && (
                <span className="text-xs" style={{ color: 'var(--app-text-muted)' }}>
                  SKU: {product.sku}
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold mt-2" style={{ color: 'var(--app-text)' }}>
              {product.name}
            </h1>

            <p className="mt-4" style={{ color: 'var(--app-text-muted)' }}>
              {product.description}
            </p>

            {/* Para qué sirve */}
            {product.application && (
              <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <h3 className="font-semibold mb-1 text-primary">Para qué sirve</h3>
                <p className="text-base" style={{ color: 'var(--app-text)' }}>
                  {product.application}
                </p>
              </div>
            )}

            {/* Características */}
            {product.characteristics && (
              <div className="mt-6">
                <h3 className="font-semibold mb-2" style={{ color: 'var(--app-text)' }}>
                  Características:
                </h3>
                <ul className="space-y-1">
                  {product.characteristics.map((char, i) => (
                    <li key={i} className="flex items-center" style={{ color: 'var(--app-text-muted)' }}>
                      <span className="w-2 h-2 bg-primary rounded-full mr-2 shrink-0"></span>
                      {char}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Botones */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.571a.75.75 0 00.921.921l5.726-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.725 9.725 0 01-4.964-1.362l-.355-.212-3.698.95.968-3.596-.232-.371A9.725 9.725 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                </svg>
                Consultar por WhatsApp
              </a>

              <Link
                to="/productos"
                className="flex-1 flex items-center justify-center py-3 px-6 rounded-lg border font-semibold transition-colors text-center"
                style={{ borderColor: 'var(--app-border)', color: 'var(--app-text)' }}
              >
                ← Volver a productos
              </Link>
            </div>
          </div>
        </div>

        {/* Productos relacionados */}
        <RelatedProducts category={product.category} currentProductId={product.id} />
      </div>
    </>
  );
}