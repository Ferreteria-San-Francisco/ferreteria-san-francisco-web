export default function TeamSection() {
  return (
    <section className="max-w-6xl mx-auto mb-32 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 pointer-events-none" style={{ color: 'var(--app-text)' }}>
        Nuestro Equipo
      </h2>

      <div className="w-12 h-1 bg-primary mb-4 rounded-full mx-auto" />

      <p className="text-lg max-w-3xl mx-auto mb-16 pointer-events-none" style={{ color: 'var(--app-text-muted)' }}>
        Somos un grupo de profesionales comprometidos con brindar atención cercana, asesoramiento honesto y soluciones que realmente suman. Creemos en el trabajo en equipo, la responsabilidad y el buen trato. Eso es lo que nos impulsa cada día.
      </p>
    </section>
  );
}
