import CompanyHistory from "../components/CompanyHistory.jsx";
import TeamSection from "../components/TeamSection.jsx";
import ValuesSection from "../components/ValuesSection.jsx";

const AboutPage = () => {
  return (
    <main className="px-4 sm:px-6 md:px-20 py-12 sm:py-16 text-text-medium">

      {/* Header */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center text-center mb-20 sm:mb-32 overflow-hidden rounded-2xl">
        <img
          src="src/assets/images/about/about-hero.jpg"
          alt="Nuestro local"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 px-4 sm:px-6">
          <span className="inline-block mb-4 sm:mb-6 px-4 py-1 text-xs sm:text-sm font-semibold bg-primary-light text-primary-dark rounded-full pointer-events-none">
            NOSOTROS
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 max-w-3xl pointer-events-none">
            Construimos confianza,<br className="hidden sm:block" />
            proyecto a proyecto
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/90 pointer-events-none">
            Somos una ferretería comprometida con brindar soluciones confiables, 
            atención personalizada y productos de calidad.
          </p>
        </div>
      </section>

      <CompanyHistory />
      <ValuesSection />
      <TeamSection />

      {/* Bloque final con imagen */}
      <section className="max-w-6xl mx-auto text-center mt-20 sm:mt-32">
        <div className="relative overflow-hidden rounded-3xl group">
          <img
            src="src/assets/images/about/about-end.jpg"
            alt="Nuestro local"
            className="w-full h-[260px] sm:h-[420px] object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-end p-4 sm:p-10 pointer-events-none">
            <h3 className="text-white text-xl sm:text-3xl font-semibold">
              ¡Te esperamos en San Pedro de Colalao!
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
