const faqs = [
  {
    question: "¿Hacen envíos a domicilio?",
    answer:
      "Sí, realizamos entregas a domicilio y obras dentro de la zona. Consultanos por costos y disponibilidad.",
  },
  {
    question: "¿Cuáles son los horarios de atención?",
    answer:
      "Lunes a sábados de 8:00 a 13:00 y de 17:00 a 21:00. Domingos de 8:00 a 13:00.",
  },
  {
    question: "¿Puedo pedir presupuesto?",
    answer:
      "Por supuesto. Podés solicitarlo por WhatsApp, teléfono o desde el formulario de contacto.",
  },
  {
    question: "¿Cuáles son los métodos de pago disponibles?",
    answer:
      "Aceptamos efectivo, tarjetas de crédito y débito, y transferencias bancarias.",
  },
];

export default function FAQSection() {
  return (
    <section className="mb-20 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4">
        Preguntas Frecuentes
      </h2>

      <div className="w-12 h-1 bg-primary mb-10 rounded-full mx-auto" />

      <div className="space-y-6">
        {faqs.map(({ question, answer }, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">
              {question}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
