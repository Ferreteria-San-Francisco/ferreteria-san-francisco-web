export default function ValuesSection() {
  return (
    <section className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto mb-32">

      {/* Misión */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-primary mb-4 pointer-events-none">
          Nuestra Misión
        </h3>
        <p className="text-text-medium text-lg pointer-events-none">
          Proveer herramientas y materiales de calidad, garantizando una experiencia de compra clara, simple y confiable.
        </p>
      </div>

      {/* Visión */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-primary mb-4 pointer-events-none">
          Nuestra Visión
        </h3>
        <p className="text-text-medium text-lg pointer-events-none">
          Ser una ferretería referente en la zona, reconocida por su compromiso, cercanía y excelencia en atención.
        </p>
      </div>
    </section>
  );
}
