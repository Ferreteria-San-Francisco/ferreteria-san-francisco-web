import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          Ferretería San Francisco
        </h1>

        {/* Links */}
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/productos"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            Productos
          </NavLink>

          <NavLink
            to="/nosotros"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            Nosotros
          </NavLink>

          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            Contacto
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
