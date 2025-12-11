import CompanyHistory from "../components/CompanyHistory.jsx";
import TeamSection from "../components/TeamSection.jsx";
import ValuesSection from "../components/ValuesSection.jsx";

const AboutPage = () => {
  return (
    <main className="px-6 md:px-20 py-16 text-text-medium">

      {/* Header */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center mb-32 overflow-hidden rounded-2xl">
        <img
          src="src/assets/images/about-hero.jpg"
          alt="Nuestro local"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 px-6">
          <span className="inline-block mb-6 px-4 py-1 text-sm font-semibold bg-primary-light text-primary-dark rounded-full">
            NOSOTROS
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl">
            Construimos confianza,<br /> proyecto a proyecto
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-white/90">
            Somos una ferretería comprometida con brindar soluciones confiables, 
            atención personalizada y productos de calidad.
          </p>
        </div>
      </section>

      <CompanyHistory />
      <ValuesSection />
      <TeamSection />
    </main>
  );
};

export default AboutPage;
