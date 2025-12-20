export default function ServicesSection() {
  return (
    <section className="mb-12 sm:mb-16 px-4">
      <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-800 mb-3 sm:mb-4">
        Nuestros Servicios
      </h2>

      <div className="w-10 sm:w-12 h-1 bg-primary mb-5 sm:mb-6 rounded-full mx-auto" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">

        {/* Servicio 1 */}
        <div className="p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm text-center">
          <div className="text-primary text-4xl sm:text-5xl mb-3 sm:mb-4">🛠️</div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-primary">
            Venta de Herramientas
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Amplio catálogo de herramientas manuales, eléctricas y profesionales.
          </p>
        </div>

        {/* Servicio 2 */}
        <div className="p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm text-center">
          <div className="text-primary text-4xl sm:text-5xl mb-3 sm:mb-4">🚚</div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-primary">
            Entrega de Gas
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Llevamos tus garrafas de gas hasta tu casa u obra en menos de 48 horas.
          </p>
        </div>

        {/* Servicio 3 */}
        <div className="p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm text-center">
          <div className="text-primary text-4xl sm:text-5xl mb-3 sm:mb-4">🛒</div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-primary">
            Asesoría Técnica
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Nuestros expertos te ayudan a elegir el mejor producto para vos.
          </p>
        </div>

      </div>
    </section>
  );
}
