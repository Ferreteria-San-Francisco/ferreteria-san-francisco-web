export default function Hero() {
  return (
    <section className="mb-12 sm:mb-16 text-center px-4">
      <div className="relative h-[320px] sm:h-96 overflow-hidden rounded-2xl shadow-lg">

        <img
          src="src/assets/images/home/hero-ferreteria.jpg"
          alt="Ferretería San Francisco"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Contenido */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6">
          <p className="text-xl sm:text-3xl mb-2 sm:mb-3 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
            Bienvenido a
          </p>

          <h1 className="text-3xl sm:text-5xl font-bold text-primary-light drop-shadow-[0_3px_8px_rgba(0,0,0,0.95)]">
            Ferretería San Francisco
          </h1>

          <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-lg text-white">
            Todo en ferretería, herramientas, gas y asesoramiento técnico en un solo lugar.
          </p>
        </div>

      </div>
    </section>
  );
}
