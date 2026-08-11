import { Link } from 'react-router-dom';
import { promotions } from '../../promotions/data/promotions.js';

export default function PromoBanner() {
  const promo = promotions[0];

  if (!promo) return null;

  return (
    <section className="py-12 pointer-events-auto" style={{ backgroundColor: 'var(--app-bg)' }}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--app-text)' }}>
          Promociones
        </h2>
        <Link
          to="/promociones"
          className="group flex flex-col items-center text-center gap-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden p-6 sm:p-8"
          style={{ backgroundColor: 'var(--app-surface)', border: '1px solid var(--app-border)' }}
        >
          <img
            src={promo.image}
            alt={promo.label}
            className="w-40 sm:w-56 h-auto object-contain rounded-lg shrink-0 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="max-w-md">
            <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Promoción vigente
            </span>
            <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--app-text)' }}>
              {promo.label}
            </h3>
            {promo.description && (
              <p className="text-sm mb-4" style={{ color: 'var(--app-text-muted)' }}>
                {promo.description}
              </p>
            )}
            <span className="inline-flex items-center gap-1 font-semibold text-primary text-sm">
              Ver todas las promociones y condiciones →
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
