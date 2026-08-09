const Footer = () => {
  return (
<footer className="py-12 mt-20 transition-colors duration-300" style={{ backgroundColor: 'var(--app-footer-bg)', color: 'var(--app-footer-text)' }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-bold text-primary-light mb-4">
            Ferretería San Francisco
          </h3>
          <div className="w-12 h-1 bg-primary mb-4 rounded-full" />
          <p className="text-sm leading-relaxed">
            Todo para tu obra, mantenimiento y proyectos. Calidad, experiencia y
            atención cercana.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-primary-light mb-4">
            Servicios
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Artículos de ferretería</li>
            <li>Electricidad y sanitarios</li>
            <li>Herramientas y construcción</li>
            <li>Aberturas y forrajería</li>
            <li>Bicicletería, bazar y librería</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-primary-light mb-4">
            Contacto
          </h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Las Heras 5ta cuadra, San Pedro de Colalao, Tucumán</li>
            <li>📞 0381 405-2439</li>
            <li>🕒 Lunes a Sábados · 8:00 - 13:00 hs y 17:00 - 21:00 hs</li>
            <li>🕒 Domingos · 8:30 - 13:00 hs</li>
          </ul>
        </div>

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

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-text-medium">
        <div>
          © {new Date().getFullYear()} Ferretería San Francisco. Todos los
          derechos reservados.
        </div>

        <div className="mt-2">
          Iconos de{" "}
          <a
            href="https://www.flaticon.es/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary transition"
          >
            Flaticon
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
