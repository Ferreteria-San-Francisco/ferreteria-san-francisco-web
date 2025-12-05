const AboutPage = () => {
  return (
    <main className="px-6 md:px-20 py-16 text-text-medium">

      {/* Header */}
      <section className="text-center mb-20">
        <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold bg-primary-light text-primary-dark rounded-full">
          Quiénes somos
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
          Sobre Nosotros
        </h1>

        <p className="max-w-2xl mx-auto text-lg">
          Somos una ferretería comprometida con brindar soluciones confiables,
          atención personalizada y productos de calidad para cada proyecto.
        </p>
      </section>

      {/* Historia */}
      <section className="mb-20 max-w-4xl mx-auto bg-gray-100 p-8 md:p-12 rounded-xl border border-gray-300 shadow-sm text-center"> 
        <h2 className="text-2xl font-semibold text-primary-light mb-4 text-stroke">
          Nuestra Historia
        </h2>

        <div className="w-16 h-1 bg-primary-light mb-6 rounded-full mx-auto" />

        <p className="leading-relaxed">
          En el corazón de la “Sucursal del Cielo”, nuestra ferretería es el lugar donde encontrás todo lo que necesitás y recibís asesoría honesta para cada proyecto. Crecemos junto a la comunidad de San Pedro de Colalao, acompañando a nuestros vecinos con variedad, calidad y atención cercana. Podes encontrar desde productos de bicicletería, pinturería y electricidad, hasta productos de sanitarios, forrajería, bazar, librería, gas envasado, limpieza y piletas: estamos para ayudarte a construir y mejorar cada día.
        </p>
      </section>

      {/* Misión & Visión */}
      <section className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {/* Misión */}
        <div className="mb-20 bg-gray-100 p-8 md:p-12 rounded-xl border border-gray-300 shadow-sm text-center"> 
          <h3 className="text-xl font-semibold text-primary-light text-stroke mb-3">
            Nuestra Misión
          </h3>
          <div className="w-16 h-1 bg-primary-light mb-6 rounded-full mx-auto" />
          <p className="text-gray-500">
            Proveer herramientas y materiales de calidad, garantizando una
            experiencia de compra clara, simple y confiable.
          </p>
        </div>

        {/* Visión */}
        <div className="mb-20 bg-gray-100 p-8 md:p-12 rounded-xl border border-gray-300 shadow-sm text-center">
          <h3 className="text-xl font-semibold text-primary-light text-stroke mb-3">
            Nuestra Visión
          </h3>
          <div className="w-16 h-1 bg-primary-light mb-6 rounded-full mx-auto" />
          <p className="text-gray-500">
            Ser una ferretería referente en la zona, reconocida por su
            compromiso, cercanía y excelencia en atención.
          </p>
        </div>

      </section>
    </main>
  );
};

export default AboutPage;
