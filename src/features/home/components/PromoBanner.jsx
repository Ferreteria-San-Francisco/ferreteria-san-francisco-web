import { Link } from 'react-router-dom';
import { promotions } from '../../promotions/data/promotions.js';

export default function PromoBanner() {
  const promo = promotions[0];

  if (!promo) return null;

  return (
    <section className="py-12 pointer-events-auto" style={{ backgroundColor: 'var(--app-bg)' }}>
      <div className="max-w-4xl mx-auto px-4">
        <Link
          to="/promociones"
          className="group flex flex-col sm:flex-row items-center gap-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden p-6"
          style={{ backgroundColor: 'var(--app-surface)', border: '1px solid var(--app-border)' }}
        >
          <img
            src={promo.image}
            alt={promo.label}
            className="w-40 sm:w-48 h-auto object-contain rounded-lg shrink-0 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="text-center sm:text-left">
            <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
              Promoción vigente
            </span>
            <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--app-text)' }}>
              {promo.label}
            </h3>
            <p className="text-sm" style={{ color: 'var(--app-text-muted)' }}>
              Ver todas las promociones y condiciones →
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
