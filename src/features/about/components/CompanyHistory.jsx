import historyImg from "../assets/images/about/about-history.jpg";

export default function CompanyHistory() {
  return (
    <section
      className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-32 px-4"
      aria-labelledby="historia-title"
    >
      <img
        src={historyImg}
        alt="Ferretería San Francisco en San Pedro de Colalao"
        loading="lazy"
        className="w-full h-[420px] object-cover rounded-2xl shadow-md"
      />

      <div>
        <h2
          id="historia-title"
          className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6"
        >
          Nuestra Historia
        </h2>

        <div className="w-12 h-1 bg-primary mb-4 rounded-full" />

        <p className="text-lg leading-relaxed text-text-medium">
          En el corazón de la “Sucursal del Cielo”, nuestra ferretería es el
          lugar donde encontrás todo lo que necesitás y recibís asesoría honesta
          para cada proyecto.
          <br /><br />
          Crecemos junto a la comunidad de San Pedro de Colalao, acompañando a
          nuestros vecinos con variedad, calidad y atención cercana.
          <br /><br />
          Podés encontrar desde productos de bicicletería, pinturería y
          electricidad, hasta sanitarios, forrajería, bazar, librería, gas
          envasado, limpieza y piletas.
          <br /><br />
          Estamos para ayudarte a construir y mejorar cada día.
        </p>
      </div>
    </section>
  );
}