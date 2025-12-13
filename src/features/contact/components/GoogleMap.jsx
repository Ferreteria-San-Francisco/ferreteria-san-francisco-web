export default function GoogleMap() {
  return (
    <section className="mb-20">
      {/* Título */}
      <h2 className="text-4xl font-bold text-center text-primary-light mb-6 text-stroke mb-4 mt-10">
        Dónde encontrarnos
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Pasá por el local o escribinos, estamos para ayudarte
      </p>

      {/* Contenedor */}
      <div className="relative w-full h-[420px] rounded-2xl overflow-hidden border border-gray-300 shadow-lg">

        {/* Overlay superior (estética + legibilidad) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-transparent z-10 pointer-events-none" />

        {/* Texto sobre el mapa */}
        <div className="absolute top-6 right-6 z-20 text-right">
        <span className="inline-block bg-primary-light text-white px-4 py-1 rounded-full text-sm font-semibold shadow">
            Ferretería San Francisco
        </span>
        <p className="text-white mt-3 text-sm drop-shadow">
            San Pedro de Colalao, Tucuman
        </p>
        </div>

        {/* Google Maps */}
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.789459787544!2d-65.4965003!3d-26.2360297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9418bd759e2f1273%3A0x7e52aa25a9868f4c!2sFerreter%C3%ADa%20San%20Francisco!5e0!3m2!1ses-419!2sar!4v1765429761824!5m2!1ses-419!2sar"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
