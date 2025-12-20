import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-lg sm:text-2xl font-bold text-blue-600">
          Ferretería San Francisco
        </h1>

        {/* Botón mobile */}
        <button
          className="sm:hidden text-gray-700 text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        {/* Links desktop */}
        <div className="hidden sm:flex gap-6">
          <NavLink to="/" className={linkClass}> Home </NavLink>
          <NavLink to="/productos" className={linkClass}> Productos </NavLink>
          <NavLink to="/nosotros" className={linkClass}> Nosotros </NavLink>
          <NavLink to="/contacto" className={linkClass}> Contacto </NavLink>
        </div>
      </div>

      {/* Menú mobile */}
      {open && (
        <div className="sm:hidden px-4 pb-4 flex flex-col gap-4">
          <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}> Home </NavLink>
          <NavLink to="/productos" onClick={() => setOpen(false)} className={linkClass}> Productos </NavLink>
          <NavLink to="/nosotros" onClick={() => setOpen(false)} className={linkClass}> Nosotros </NavLink>
          <NavLink to="/contacto" onClick={() => setOpen(false)} className={linkClass}> Contacto </NavLink>
        </div>
      )}
    </nav>
  );
}
