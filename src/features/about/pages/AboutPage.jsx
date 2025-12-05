const AboutPage = () => {
  return (
    <main className="px-6 md:px-20 py-16">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Sobre Nosotros
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Somos una ferretería comprometida con brindar soluciones confiables,
          atención personalizada y productos de calidad para cada proyecto.
        </p>
      </section>

      {/* Historia */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Nuestra Historia
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Ferretería San Francisco nace con el objetivo de ofrecer productos duraderos y asesoramiento honesto. A lo largo del tiempo, acompañamos a profesionales, emprendedores y familias, creciendo junto a nuestra comunidad.
        </p>
      </section>

      {/* Misión & Visión */}
      <section className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Nuestra Misión
          </h3>
          <p className="text-gray-600">
            Proveer herramientas y materiales de calidad, garantizando una experiencia de compra clara, simple y confiable.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Nuestra Visión
          </h3>
          <p className="text-gray-600">
            Ser una ferretería referente en la zona, reconocida por su compromiso, cercanía y excelencia en atención.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
