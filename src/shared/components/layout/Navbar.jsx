import { useState } from "react";
import { NavLink } from 'react-router-dom';
import logo from "../../../assets/images/ferreteria-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="Ferretería San Francisco"
            className="h-14 md:h-16 w-auto"
          />
        </NavLink>

        {/* Links desktop (tu código, sin tocar) */}
        <div className="hidden md:flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-bold"
                : "text-gray-700 hover:text-shadow-primary-dark"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/productos"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-bold"
                : "text-gray-700 hover:text-shadow-primary-dark"
            }
          >
            Productos
          </NavLink>

          <NavLink
            to="/nosotros"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-bold"
                : "text-gray-700 hover:text-shadow-primary-dark"
            }
          >
            Nosotros
          </NavLink>

          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-bold"
                : "text-gray-700 hover:text-shadow-primary-dark"
            }
          >
            Contacto
          </NavLink>
        </div>

        {/* Botón mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>

      {/* Menú mobile (agregado, no interfiere) */}
      {open && (
        <div className="md:hidden mt-4 border-t pt-4">
          <div className="flex flex-col gap-4">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold"
                  : "text-gray-700"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/productos"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold"
                  : "text-gray-700"
              }
            >
              Productos
            </NavLink>

            <NavLink
              to="/nosotros"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold"
                  : "text-gray-700"
              }
            >
              Nosotros
            </NavLink>

            <NavLink
              to="/contacto"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold"
                  : "text-gray-700"
              }
            >
              Contacto
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
