export default function TeamSection() {
  return (
    <section className="max-w-6xl mx-auto mb-32 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-primary-light mb-8 text-stroke">
        Nuestro Equipo
      </h2>

      <p className="text-lg max-w-3xl mx-auto text-text-medium mb-16">
        Somos un grupo de profesionales comprometidos con brindar atención cercana,
        asesoramiento honesto y soluciones que realmente suman. Creemos en el trabajo
        en equipo, la responsabilidad y el buen trato. Eso es lo que nos impulsa cada día.
      </p>

      {/* Bloque final con imagen */}
      <div className="relative overflow-hidden rounded-3xl">
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
      </div>
    </section>
  );
}
