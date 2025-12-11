export default function CompanyHistory() {
  return (
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
          En el corazón de la “Sucursal del Cielo”, nuestra ferretería es el lugar donde encontrás 
          todo lo que necesitás y recibís asesoría honesta para cada proyecto.<br /> 
          Crecemos junto a la comunidad de San Pedro de Colalao, acompañando a nuestros vecinos 
          con variedad, calidad y atención cercana.<br /> 
          Podés encontrar desde productos de bicicletería, pinturería y electricidad, hasta 
          sanitarios, forrajería, bazar, librería, gas envasado, limpieza y piletas. <br /> 
          Estamos para ayudarte a construir y mejorar cada día.
        </p>
      </div>
    </section>
  );
}
