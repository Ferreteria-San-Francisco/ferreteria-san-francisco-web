import Hero from "../components/Hero.jsx";
import Services from "../components/ServicesSection.jsx";
import FeatureProducts from "../components/FeatureProducts.jsx";
import PromoBanner from "../components/PromoBanner.jsx";
import BannerSlider from "../components/BannerSlider.jsx";
import SEO from '../../../shared/components/SEO';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Inicio"
        description="Ferretería San Francisco - Tu ferretería de confianza. Encontrá herramientas, materiales de construcción, pinturas y todo lo que necesitás."
        url="/"
      />

      <div className="max-w-7xl mx-auto px-4 py-16 text-center pointer-events-none">
        {/* Hero */}
        <Hero />

        {/* Promoción vigente */}
        <PromoBanner />

        {/* Servicio Section */}
        <Services />

        {/* Productos Destacados */}
        <FeatureProducts />

        {/* BannerSlider */}
        <BannerSlider />
      </div>
    </>
  );
}

