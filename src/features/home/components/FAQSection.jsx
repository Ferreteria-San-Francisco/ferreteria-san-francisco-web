export default function FAQSection() {
  return (
    <section className="mb-20 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Preguntas Frecuentes
      </h2>

      <div className="w-12 h-1 bg-primary mb-10 rounded-full mx-auto" />

      <div className="space-y-6 text-left">

        {/* FAQ 1 */}
        <div className="p-6 border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-primary mb-2">
            ¿Hacen envíos a domicilio?
          </h3>
          <p className="text-gray-600">
            Sí, realizamos entregas a domicilio y obras dentro de la zona. Consultanos por costos y disponibilidad.
          </p>
        </div>

        {/* FAQ 2 */}
        <div className="p-6 border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-primary mb-2">
            ¿Cuáles son los horarios de atención?
          </h3>
          <p className="text-gray-600">
            Lunes a sábados de 8:00hs a 13:00hs y 17:00hs a 21:00hs. Domingos de 8:00hs a 13:00hs.
          </p>
        </div>

        {/* FAQ 3 */}
        <div className="p-6 border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-primary mb-2">
            ¿Puedo pedir presupuesto?
          </h3>
          <p className="text-gray-600">
            Por supuesto. Podés solicitarlo por WhatsApp, teléfono o directamente desde el formulario de contacto.
          </p>
        </div>

        {/* FAQ 4 */}
        <div className="p-6 border border-gray-200 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-primary mb-2">
            ¿Cuáles son los métodos de pago disponibles?
          </h3>
          <p className="text-gray-600">
            Aceptamos efectivo, tarjetas de crédito y débito, y transferencias bancarias.
          </p>
        </div>
      </div>
    </section>
  );
}
