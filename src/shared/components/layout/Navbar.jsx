import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/ferreteria-logo.png";
import logoOscuro from "../../../assets/images/ferreteria-logo-oscuro.png";
import { useTheme } from "../../hooks/useTheme";
import lunaDia from "../../../assets/luna-dia.svg";
import lunaEstrella from "../../../assets/luna-estrellas.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isDark, toggle } = useTheme();

const linkClass = ({ isActive }) =>
  isActive ? "text-primary font-bold" : "text-gray-2900 dark:text-gray-200 hover:text-primary";

  return (
    <nav
      className="shadow-md p-4 transition-colors duration-300"
      style={{ backgroundColor: "var(--app-nav-bg)" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={isDark ? logoOscuro : logo}
            alt="Ferretería San Francisco"
            className="h-14 md:h-16 w-auto"
          />
        </NavLink>

        {/* Links desktop */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/productos" className={linkClass}>Productos</NavLink>
          <NavLink to="/nosotros" className={linkClass}>Nosotros</NavLink>
          <NavLink to="/contacto" className={linkClass}>Contacto</NavLink>

          {/* Toggle desktop */}
          <button
            onClick={toggle}
            aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            className="ml-2 rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
            title={isDark ? "Modo claro" : "Modo oscuro"}
          >
            <img
              src={isDark ? lunaDia : lunaEstrella}
              alt={isDark ? "Modo claro" : "Modo oscuro"}
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Botones mobile: toggle + hamburguesa */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <img
              src={isDark ? lunaDia : lunaEstrella}
              alt={isDark ? "Modo claro" : "Modo oscuro"}
              className="w-6 h-6"
            />
          </button>
          <button
            className="text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
            style={{ color: 'var(--app-text)' }}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      {open && (
        <div
          className="md:hidden mt-4 border-t pt-4 transition-colors duration-300"
          style={{ borderColor: "var(--app-border)" }}
        >
          <div className="flex flex-col gap-4">
            <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>Home</NavLink>
            <NavLink to="/productos" onClick={() => setOpen(false)} className={linkClass}>Productos</NavLink>
            <NavLink to="/nosotros" onClick={() => setOpen(false)} className={linkClass}>Nosotros</NavLink>
            <NavLink to="/contacto" onClick={() => setOpen(false)} className={linkClass}>Contacto</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}