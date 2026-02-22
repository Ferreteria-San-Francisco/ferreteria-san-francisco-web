import CompanyHistory from "../components/CompanyHistory.jsx";
import TeamSection from "../components/TeamSection.jsx";
import ValuesSection from "../components/ValuesSection.jsx";
import SEO from '../../../shared/components/SEO';

import aboutHero from "../../../assets/images/about/about-hero.jpg";
import aboutEnd from "../../../assets/images/about/about-end.jpg";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="Nosotros"
        description="Conocé la historia de Ferretería San Francisco. Más de X años brindando servicio de calidad."
        url="/about"
      />

      <main className="px-6 md:px-20 py-16 text-text-medium">

        <section className="relative min-h-[70vh] flex items-center justify-center text-center mb-32 overflow-hidden rounded-2xl">
          <img
            src={aboutHero}
            alt="Nuestro local"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6">
            <span className="inline-block mb-6 px-4 py-1 text-sm font-semibold bg-primary-light text-primary-dark rounded-full pointer-events-none">
              NOSOTROS
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl pointer-events-none">
              Construimos confianza,<br /> proyecto a proyecto
            </h1>

            <p className="max-w-2xl mx-auto text-lg text-white/90 pointer-events-none">
              Somos una ferretería comprometida con brindar soluciones confiables, 
              atención personalizada y productos de calidad.
            </p>
          </div>
        </section>

        <CompanyHistory />
        <ValuesSection />
        <TeamSection />

        
        <section className="max-w-6xl mx-auto text-center">
          <div className="relative overflow-hidden rounded-3xl group">
            <img
              src={aboutEnd}
              alt="Nuestro local"
              className="w-full h-[420px] object-cover"
            />

            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute inset-0 flex items-end p-10 pointer-events-none">
              <h3 className="text-white text-3xl font-semibold">
                ¡Te esperamos en San Pedro de Colalao!
              </h3>
            </div>
          </div>
        </section>
      </main>
    </>  
  );
};

export default AboutPage;
