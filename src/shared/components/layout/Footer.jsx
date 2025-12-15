const Footer = () => {
  return (
    <footer className="bg-gray-900 text-text-light py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Col 1: Marca */}
        <div>
          <h3 className="text-xl font-bold text-primary-light mb-4">
            Ferretería San Francisco
          </h3>
          <div className="w-12 h-1 bg-primary mb-4 rounded-full" />
          <p className="text-sm leading-relaxed">
            Todo para tu obra, mantenimiento y proyectos.
            Calidad, experiencia y atención cercana.
          </p>
        </div>

        {/* Col 2: Servicios */}
        <div>
            <h4 className="text-lg font-semibold text-primary-light mb-4">
                Servicios
            </h4>
            <ul className="space-y-2 text-sm text-text-light">
                <li>Artículos de ferretería</li>
                <li>Electricidad y sanitarios</li>
                <li>Herramientas y construcción</li>
                <li>Aberturas y forrajería</li>
                <li>Bicicletería, bazar y librería</li>
            </ul>
        </div>


        {/* Col 3: Contacto */}
        <div>
          <h4 className="text-lg font-semibold text-primary-light mb-4">
            Contacto
          </h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Las Heras 5ta cuadra, San Pedro de Colalao, Tucumán</li>
            <li>📞 0381 405-2439</li>
            <li>🕒 Lunes a Sábados · 8hs a 13hs, 17hs a 21hs</li>
            <li>🕒 Domingos · 8hs a 13hs</li>
          </ul>
        </div>

        {/* Col 4: Redes */}
        <div>
            <h4 className="text-lg font-semibold text-primary-light mb-4">
                Seguinos
            </h4>
            <ul className="space-y-2 text-sm">
                <li>
                <a
                    href="https://www.facebook.com/FerreteriaSanFranciscospc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition"
                >
                    Facebook
                </a>
                </li>
                <li>
                <a
                    href="https://www.instagram.com/sanfrancisco.spc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition"
                >
                    Instagram
                </a>
                </li>
                <li>
                <a
                    href="https://wa.me/3814052439"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition"
                >
                    WhatsApp
                </a>
                </li>
            </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-text-medium">
        © {new Date().getFullYear()} Ferretería San Francisco. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
