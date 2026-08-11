import PromotionCard from "../components/PromotionCard.jsx";
import { promotions } from "../data/promotions.js";
import SEO from '../../../shared/components/SEO';

export default function PromotionsPage() {
  return (
    <>
      <SEO
        title="Promociones"
        description="Aprovechá nuestras ofertas y promociones especiales en herramientas y materiales."
        url="/promociones"
      />
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4 pointer-events-none" style={{ color: 'var(--app-text)' }}>
          Promociones y Ofertas
        </h1>

      <div className="w-12 h-1 bg-primary mb-8 rounded-full mx-auto" />

        {promotions.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {promotions.map((promo) => (
                <PromotionCard
                  key={promo.id}
                  image={promo.image}
                  label={promo.label}
                />
              ))}
            </div>

            <p className="text-center mt-15 pointer-events-none" style={{ color: 'var(--app-text-muted)' }}>
              Promociones vigentes. Consultá disponibilidad y condiciones en el local.
            </p>
          </>
        ) : (
          <div className="text-center py-16 pointer-events-none">
            <p className="text-lg" style={{ color: 'var(--app-text)' }}>No hay promociones vigentes por el momento.</p>
            <p className="text-sm mt-1" style={{ color: 'var(--app-text-muted)' }}>Consultanos por WhatsApp o en el local por descuentos y ofertas especiales.</p>
          </div>
        )}

      </section>
    </>
  );
}
