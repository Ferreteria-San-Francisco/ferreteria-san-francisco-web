import PromotionCard from "../components/PromotionCard.jsx";
import { promotions } from "../data/promotions.js";

export default function PromotionsPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <header className="text-center mb-12 pointer-events-none">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Promociones y Ofertas
        </h1>

        <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {promotions.map(({ id, image, label }) => (
          <PromotionCard
            key={id}
            image={image}
            label={label}
          />
        ))}
      </div>

      <p className="text-center text-gray-500 mt-12 pointer-events-none">
        Promociones vigentes. Consultá disponibilidad y condiciones en el local.
      </p>
    </section>
  );
}
