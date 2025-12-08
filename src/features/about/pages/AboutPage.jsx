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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Contenido */}
        <div className="relative z-10 px-6">
          <span className="inline-block mb-6 px-4 py-1 text-sm font-semibold bg-primary-light text-primary-dark rounded-full">
            NOSOTROS
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl">
            Construimos confianza,<br /> proyecto a proyecto
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-white/90">
            Somos una ferretería comprometida con brindar soluciones confiables, atención personalizada y productos de calidad.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-32">
        <img
          src="src/assets/images/about-history.jpg"
          alt="Nuestra historia"
          className="w-full h-[420px] object-cover rounded-2xl"
        />

        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-light mb-6 text-stroke">
            Nuestra Historia
          </h2>

          <p className="text-lg leading-relaxed text-text-medium">
            En el corazón de la “Sucursal del Cielo”, nuestra ferretería es el lugar donde encontrás todo lo que necesitás y recibís asesoría honesta para cada proyecto.<br /> Crecemos junto a la comunidad de San Pedro de Colalao, acompañando a nuestros vecinos con variedad, calidad y atención cercana.<br /> Podés encontrar desde productos de bicicletería, pinturería y electricidad, hasta productos de sanitarios, forrajería, bazar, librería, gas envasado, limpieza y piletas. <br /> Estamos para ayudarte a construir y mejorar cada día.
          </p>
        </div>
      </section>

      {/* Misión & Visión */}
      <section className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto mb-32">
        {/* Misión */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-primary-light mb-4 text-stroke">
            Nuestra Misión
          </h3>
          <p className="text-text-medium text-lg">
            Proveer herramientas y materiales de calidad, garantizando una experiencia de compra clara, simple y confiable.
          </p>
        </div>

        {/* Visión */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-primary-light mb-4 text-stroke">
            Nuestra Visión
          </h3>
          <p className="text-text-medium text-lg">
            Ser una ferretería referente en la zona, reconocida por su compromiso, cercanía y excelencia en atención.
          </p>
        </div>
      </section>

      {/* Final */}
      <section className="relative max-w-6xl mx-auto mb-16 overflow-hidden rounded-3xl">
        <img
          src="src/assets/images/about-end.jpg"
          alt="Nuestro local"
          className="w-full h-[420px] object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-end p-10">
          <h3 className="text-white text-3xl font-semibold">
            ¡Te esperamos en San Pedro de Colalao!
          </h3>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
