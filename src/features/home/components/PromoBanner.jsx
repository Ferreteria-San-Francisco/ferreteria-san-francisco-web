import { Link } from 'react-router-dom';
import { promotions } from '../../promotions/data/promotions.js';

export default function PromoBanner() {
  const promo = promotions[0];

  if (!promo) return null;

  return (
    <section className="mb-16 pointer-events-auto">
      <Link
        to="/promociones"
        className="group relative block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl ring-1 ring-black/5 transition-all duration-300"
      >
        <img
          src={promo.banner || promo.image}
          alt={promo.label}
          className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 sm:pb-6">
          <span className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm sm:text-base px-5 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            Ver promociones y condiciones →
          </span>
        </div>
      </Link>
    </section>
  );
}
