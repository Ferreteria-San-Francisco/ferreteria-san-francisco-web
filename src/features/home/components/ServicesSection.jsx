export default function ServicesSection() {
  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Nuestros Servicios
      </h2>

      <div className="w-12 h-1 bg-primary mb-6 rounded-full mx-auto" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Servicio 1 */}
        <div className="p-6 rounded-xl border border-gray-200 shadow-sm text-center">
          <div className="text-primary text-5xl mb-4">🛠️</div>
          <h3 className="text-2xl font-bold mb-3 text-primary">
            Venta de Herramientas
          </h3>
          <p className="text-gray-600">
            Amplio catálogo de herramientas manuales, eléctricas y profesionales.
          </p>
        </div>

        {/* Servicio 2 */}
        <div className="p-6 rounded-xl border border-gray-200 shadow-sm text-center">
          <div className="text-primary text-5xl mb-4">🚚</div>
          <h3 className="text-2xl font-bold mb-3 text-primary">
            Entrega de Gas
          </h3>
          <p className="text-gray-600">
            Llevamos tus garrafas de gas hasta tu casa u obra en menos de 48 horas.
          </p>
        </div>

        {/* Servicio 3 */}
        <div className="p-6 rounded-xl border border-gray-200 shadow-sm text-center">
          <div className="text-primary text-5xl mb-4">🛒</div>
          <h3 className="text-2xl font-bold mb-3 text-primary">
            Asesoría Técnica
          </h3>
          <p className="text-gray-600">
            Nuestros expertos te ayudan a elegir el mejor producto para vos.
          </p>
        </div>

      </div>
    </section>
  );
}
