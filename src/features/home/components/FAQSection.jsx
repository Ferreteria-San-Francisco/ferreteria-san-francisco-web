import faqData from '../data/faqData.js';

export default function FAQSection() {
  return (
    <section className="mb-20 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-primary mb-4">
        Preguntas Frecuentes
      </h2>

      <div className="w-12 h-1 bg-primary mb-10 rounded-full mx-auto" />

      <div className="space-y-6 text-left">
        {faqData.map(({ question, answer }) => (
          <div key={question} className="p-6 border border-gray-200 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-2">
              {question}
            </h3>
            <p className="text-gray-600">
              {answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
